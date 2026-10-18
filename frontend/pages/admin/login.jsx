import { useState } from 'react';
import { useRouter } from 'next/router';

const API = (process.env.NEXT_PUBLIC_REVIEWS_API_URL || 'http://localhost:4000/api').replace(/\/$/, '');
export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function submit(e) {
    e.preventDefault(); setError(''); setBusy(true);
    try {
      const res = await fetch(`${API}/admin/auth/login`, { method: 'POST', credentials: 'include', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed.');
      router.replace('/admin/reviews');
    } catch (err) { setError(err.message || 'Could not connect to server.'); }
    finally { setBusy(false); }
  }

  return <main style={ui.page}><form onSubmit={submit} style={ui.panel}>
    <span style={ui.kicker}>SC COOL SERVICE</span><h1 style={ui.title}>Admin sign in</h1><p style={ui.muted}>Sign in to manage published customer reviews.</p>
    <label style={ui.label}>Email<input style={ui.input} type="email" autoComplete="username" required maxLength={254} value={email} onChange={e=>setEmail(e.target.value)} /></label>
    <label style={ui.label}>Password<input style={ui.input} type="password" autoComplete="current-password" required value={password} onChange={e=>setPassword(e.target.value)} /></label>
    {error && <p role="alert" style={ui.error}>{error}</p>}
    <button disabled={busy} style={ui.button}>{busy ? 'Signing in…' : 'Sign in securely'}</button>
    <p style={ui.foot}>Admin accounts are created through the one-time secure setup, not public signup.</p>
  </form></main>;
}
const ui={page:{minHeight:'100vh',display:'grid',placeItems:'center',padding:20,background:'radial-gradient(circle at top right,#2e2a20,#111114 55%)',fontFamily:'Inter,system-ui,sans-serif',color:'#f7f4ed'},panel:{width:'100%',maxWidth:440,padding:32,border:'1px solid #ffffff20',borderRadius:24,background:'#ffffff09',boxShadow:'0 24px 70px #0005'},kicker:{color:'#d8bd79',fontWeight:800,fontSize:12,letterSpacing:2},title:{fontSize:32,margin:'12px 0 8px'},muted:{color:'#aaa8af',marginBottom:28},label:{display:'block',fontSize:13,fontWeight:700,marginBottom:16},input:{display:'block',width:'100%',boxSizing:'border-box',marginTop:8,padding:13,borderRadius:10,border:'1px solid #ffffff25',background:'#101014',color:'#fff',fontSize:15},button:{width:'100%',padding:14,border:0,borderRadius:12,background:'linear-gradient(100deg,#f3d991,#bd9748)',color:'#211d12',fontWeight:850,fontSize:15,cursor:'pointer'},error:{color:'#ffaaa7',fontSize:13},foot:{color:'#93919a',fontSize:12,lineHeight:1.6,marginTop:20}};
