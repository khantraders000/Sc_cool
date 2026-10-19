import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const API = (process.env.NEXT_PUBLIC_REVIEWS_API_URL || 'http://localhost:4000/api').replace(/\/$/, '');
const blank = { firstName:'', lastName:'', reviewDate:new Date().toISOString().slice(0,10), rating:5, reviewText:'', googleReviewUrl:'', published:true, featured:false, displayOrder:0 };
const fieldStyle={width:'100%',boxSizing:'border-box',padding:'11px 12px',borderRadius:9,border:'1px solid #dedbd2',background:'#fff',fontSize:14};

export default function AdminReviews() {
  const router = useRouter();
  const [admin,setAdmin]=useState(null); const [reviews,setReviews]=useState([]); const [form,setForm]=useState(blank); const [editing,setEditing]=useState(null); const [busy,setBusy]=useState(false); const [notice,setNotice]=useState(''); const [error,setError]=useState('');

  const load = useCallback(async()=>{
    const me=await fetch(`${API}/admin/auth/me`,{credentials:'include'});
    if(!me.ok){router.replace('/admin/login');return;}
    const meData=await me.json();setAdmin(meData.admin);
    const res=await fetch(`${API}/reviews/admin/all`,{credentials:'include'});
    if(res.status===401){router.replace('/admin/login');return;}
    const data=await res.json();if(!res.ok)throw new Error(data.message||'Unable to load reviews');setReviews(data.reviews||[]);
  },[router]);
  useEffect(()=>{load().catch(e=>setError(e.message));},[load]);
  const set=(key,value)=>setForm(prev=>({...prev,[key]:value}));
  function startEdit(review){setEditing(review._id);setForm({...review,reviewDate:new Date(review.reviewDate).toISOString().slice(0,10)});setNotice('');setError('');window.scrollTo({top:0,behavior:'smooth'});}
  function reset(){setEditing(null);setForm({...blank,reviewDate:new Date().toISOString().slice(0,10)});}


async function submit(e) {
  e.preventDefault();
  setBusy(true);
  setNotice('');
  setError('');

  try {
    const payload = {
      ...form,
      firstName: String(form.firstName || '').trim(),
      lastName: String(form.lastName || '').trim(),
      reviewText: String(form.reviewText || '').trim(),
      rating: Number(form.rating),
      displayOrder: Number(form.displayOrder || 0),
    };

    // Optional fields ko blank hone par request se hata do.
    if (!payload.lastName) delete payload.lastName;
    if (!payload.reviewText) delete payload.reviewText;

    const res = await fetch(
      `${API}/reviews/admin${editing ? `/${editing}` : ''}`,
      {
        method: editing ? 'PATCH' : 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      console.error('Backend response:', data);
      console.error('Validation errors:', data.errors);

      const validationErrors = Array.isArray(data.errors)
        ? data.errors
            .map((item) => {
              const field = item.path || item.param || item.field;
              const message = item.msg || item.message;
              return field ? `${field}: ${message}` : message;
            })
            .filter(Boolean)
            .join('\n')
        : '';

      throw new Error(
        validationErrors ||
        data.message ||
        `Review save failed (HTTP ${res.status})`
      );
    }

    setNotice(
      editing
        ? 'Review updated successfully.'
        : 'Review added successfully.'
    );

    reset();
    await load();
  } catch (e) {
    console.error('Review submission failed:', e);
    setError(e.message || 'Could not save review.');
  } finally {
    setBusy(false);
  }
}

  async function remove(review){if(!window.confirm(`Delete review by ${review.firstName} ${review.lastName}? This cannot be undone.`))return;
    setError('');setNotice('');try{const res=await fetch(`${API}/reviews/admin/${review._id}`,{method:'DELETE',credentials:'include'});const data=await res.json();if(!res.ok)throw new Error(data.message);setNotice('Review deleted.');await load();if(editing===review._id)reset();}catch(e){setError(e.message||'Delete failed.');}}
  async function togglePublished(review){try{const res=await fetch(`${API}/reviews/admin/${review._id}`,{method:'PATCH',credentials:'include',headers:{'Content-Type':'application/json'},body:JSON.stringify({published:!review.published})});const data=await res.json();if(!res.ok)throw new Error(data.message);await load();}catch(e){setError(e.message||'Update failed.');}}
  async function logout(){await fetch(`${API}/admin/auth/logout`,{method:'POST',credentials:'include'});router.replace('/admin/login');}

  return <main style={ui.page}><div style={ui.wrap}>
    <header style={ui.header}><div><span style={ui.kicker}>SC COOL SERVICE · ADMIN</span><h1 style={ui.title}>Reviews dashboard</h1><p style={ui.muted}>{admin?`Signed in as ${admin.email}`:'Checking secure session…'}</p></div><button style={ui.secondary} onClick={logout}>Log out</button></header>
    {notice&&<p role="status" style={ui.success}>{notice}</p>}{error&&<p role="alert" style={ui.error}>{error}</p>}
    <section style={ui.panel}><h2 style={ui.h2}>{editing?'Edit review':'Add a customer review'}</h2><p style={ui.muted}>Enter genuine review details and paste the direct Google review URL.</p>
      <form onSubmit={submit} style={ui.form}>
        <label style={ui.label}>First name<input style={fieldStyle} required maxLength={60} value={form.firstName} onChange={e=>set('firstName',e.target.value)}/></label>
        <label style={ui.label}>
          Last name
          <input
            style={fieldStyle}
            maxLength={60}
            value={form.lastName}
            onChange={(e) => set("lastName", e.target.value)}
          />
        </label>
        <label style={ui.label}>Review date<input style={fieldStyle} type="date" required value={form.reviewDate} onChange={e=>set('reviewDate',e.target.value)}/></label>
        <label style={ui.label}>Star rating<select style={fieldStyle} value={form.rating} onChange={e=>set('rating',e.target.value)}>{[5,4,3,2,1].map(n=><option key={n} value={n}>{n} star{n>1?'s':''}</option>)}</select></label>
        <label style={{...ui.label,gridColumn:'1/-1'}}>Review text<textarea style={{...fieldStyle,minHeight:120,resize:'vertical'}} minLength={3} maxLength={3000} value={form.reviewText} onChange={e=>set('reviewText',e.target.value)}/><small style={ui.small}>{form.reviewText.length}/3000 characters</small></label>
        <label style={{...ui.label,gridColumn:'1/-1'}}>Original Google review URL<input style={fieldStyle} type="url" placeholder="https://www.google.com/maps/..." required value={form.googleReviewUrl} onChange={e=>set('googleReviewUrl',e.target.value)}/></label>
        <label style={ui.check}><input type="checkbox" checked={!!form.published} onChange={e=>set('published',e.target.checked)}/> Published on website</label>
        <label style={ui.check}><input type="checkbox" checked={!!form.featured} onChange={e=>set('featured',e.target.checked)}/> Featured review</label>
        <label style={ui.label}>Display order<input style={fieldStyle} type="number" min="0" max="100000" value={form.displayOrder} onChange={e=>set('displayOrder',e.target.value)}/></label>
        <div style={{display:'flex',gap:10,alignItems:'center',gridColumn:'1/-1'}}><button disabled={busy} style={ui.primary}>{busy?'Saving…':editing?'Save changes':'Add review'}</button>{editing&&<button type="button" style={ui.secondary} onClick={reset}>Cancel edit</button>}</div>
      </form>
    </section>
    <section style={ui.panel}><div style={ui.listHeader}><h2 style={ui.h2}>All reviews <span style={ui.count}>{reviews.length}</span></h2><button style={ui.secondary} onClick={()=>load().catch(e=>setError(e.message))}>Refresh</button></div>
      {reviews.length===0?<p style={ui.muted}>No reviews added yet.</p>:<div style={{display:'grid',gap:12}}>{reviews.map(r=><article key={r._id} style={ui.review}><div style={{display:'flex',justifyContent:'space-between',gap:12,flexWrap:'wrap'}}><div><strong>{r.firstName} {r.lastName}</strong><div style={ui.small}>{new Date(r.reviewDate).toLocaleDateString('en-IN')} · <span style={{color:'#b88a21'}}>{'★'.repeat(r.rating)}</span>{r.featured?' · Featured':''}</div></div><span style={{...ui.pill,background:r.published?'#e5f6eb':'#f4e9e7',color:r.published?'#17653a':'#8d3d32'}}>{r.published?'Published':'Hidden'}</span></div><p style={{lineHeight:1.6,whiteSpace:'pre-wrap',overflowWrap:'anywhere'}}>{r.reviewText}</p><a href={r.googleReviewUrl} target="_blank" rel="noopener noreferrer" style={ui.link}>Open original Google review ↗</a><div style={ui.actions}><button style={ui.secondary} onClick={()=>startEdit(r)}>Edit</button><button style={ui.secondary} onClick={()=>togglePublished(r)}>{r.published?'Hide':'Publish'}</button><button style={ui.danger} onClick={()=>remove(r)}>Delete</button></div></article>)}</div>}
    </section>
  </div></main>;
}
const ui={page:{minHeight:'100vh',background:'#f5f4f0',padding:'28px 16px',fontFamily:'Inter,system-ui,sans-serif',color:'#222'},wrap:{maxWidth:1040,margin:'0 auto'},header:{display:'flex',alignItems:'center',justifyContent:'space-between',gap:16,marginBottom:24},kicker:{fontSize:11,letterSpacing:2,fontWeight:900,color:'#92712a'},title:{fontSize:'clamp(28px,4vw,38px)',letterSpacing:'-.04em',margin:'8px 0'},muted:{color:'#73716d',fontSize:14,lineHeight:1.5},panel:{padding:'clamp(18px,3vw,28px)',background:'#fff',border:'1px solid #e7e4dc',borderRadius:18,boxShadow:'0 8px 26px #27211408',marginBottom:20},h2:{fontSize:20,margin:'0 0 8px'},form:{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,230px),1fr))',gap:16,marginTop:22},label:{display:'block',fontSize:13,fontWeight:750,color:'#37352f'},small:{display:'block',fontSize:11,color:'#777',fontWeight:400,marginTop:5},check:{display:'flex',alignItems:'center',gap:8,fontSize:13,fontWeight:650},primary:{padding:'12px 18px',border:0,borderRadius:10,background:'linear-gradient(100deg,#f3d991,#bd9748)',fontWeight:850,cursor:'pointer'},secondary:{padding:'10px 14px',border:'1px solid #dcd8ce',borderRadius:10,background:'#fff',fontWeight:750,cursor:'pointer'},danger:{padding:'10px 14px',border:'1px solid #f0c5c0',borderRadius:10,background:'#fff6f5',color:'#a02f25',fontWeight:750,cursor:'pointer'},success:{padding:12,borderRadius:10,background:'#e5f6eb',color:'#17653a'},error:{padding:12,borderRadius:10,background:'#fff0ef',color:'#a02f25'},listHeader:{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,marginBottom:16},count:{fontSize:12,background:'#f0eee8',padding:'3px 8px',borderRadius:99},review:{padding:18,border:'1px solid #ebe8e0',borderRadius:14,background:'#fff'},pill:{fontSize:11,fontWeight:800,padding:'5px 9px',borderRadius:99,height:'fit-content'},link:{fontSize:13,color:'#8a6a1f',fontWeight:700,overflowWrap:'anywhere'},actions:{display:'flex',gap:8,flexWrap:'wrap',marginTop:14,paddingTop:12,borderTop:'1px solid #eee'}};
