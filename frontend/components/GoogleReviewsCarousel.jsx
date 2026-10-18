import { useEffect, useRef, useState } from 'react';
import styles from '../styles/GoogleReviewsCarousel.module.css';

const API_BASE = (process.env.NEXT_PUBLIC_REVIEWS_API_URL || 'http://localhost:4000/api').replace(/\/$/, '');
const dateLabel = (value) => new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(value));

export default function GoogleReviewsCarousel() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const trackRef = useRef(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${API_BASE}/reviews`, { signal: controller.signal })
      .then((res) => { if (!res.ok) throw new Error('Could not load reviews'); return res.json(); })
      .then((data) => setReviews(Array.isArray(data.reviews) ? data.reviews : []))
      .catch((err) => { if (err.name !== 'AbortError') setError(true); })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  const slide = (direction) => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector('[data-review-card]');
    const amount = card ? card.getBoundingClientRect().width + 20 : 320;
    trackRef.current.scrollBy({ left: direction * amount, behavior: 'smooth' });
  };

  return (
    <section className={styles.section} aria-labelledby="customer-reviews-title">
      <div className={styles.header}>
        <div>
          <span className={styles.eyebrow}><span className={styles.googleG}>G</span> CUSTOMER STORIES</span>
          <h2 id="customer-reviews-title">Good service. <span>Real words.</span></h2>
          <p className={styles.subtitle}>Feedback from customers who chose SC Cool Service.</p>
        </div>
        <a className={styles.allReviews} href="https://www.google.com/search?q=SC+Cool+Service+Mumbai+Google+reviews" target="_blank" rel="noopener noreferrer">See all on Google <span aria-hidden="true">↗</span></a>
      </div>

      {loading && <p className={styles.status} role="status">Loading customer reviews…</p>}
      {error && <p className={styles.status} role="status">Reviews are temporarily unavailable. Please visit Google to read customer feedback.</p>}
      {!loading && !error && reviews.length === 0 && <p className={styles.status}>Customer reviews will appear here soon.</p>}

      {reviews.length > 0 && <>
        <div className={styles.controls}>
          <span className={styles.count}>Latest customer reviews <span>{reviews.length}</span></span>
          <div className={styles.arrows}>
            <button type="button" onClick={() => slide(-1)} aria-label="Previous reviews">←</button>
            <button type="button" onClick={() => slide(1)} aria-label="Next reviews">→</button>
          </div>
        </div>
        <div className={styles.track} ref={trackRef} aria-label="Customer review carousel">
          {reviews.map((review) => {
            const name = `${review.firstName} ${review.lastName}`.trim();
            const initial = (review.firstName || 'C').charAt(0).toUpperCase();
            return <article className={styles.card} data-review-card key={review._id || review.id}>
              <a className={styles.cardLink} href={review.googleReviewUrl} target="_blank" rel="noopener noreferrer" aria-label={`Read ${name}'s original Google review`}>
                <div className={styles.cardTop}>
                  <span className={styles.avatar} aria-hidden="true">{initial}</span>
                  <div className={styles.person}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.meta}>Google review · {dateLabel(review.reviewDate)}</span>
                  </div>
                  <span className={styles.external} aria-hidden="true">↗</span>
                </div>
                <div className={styles.stars} aria-label={`${review.rating} out of 5 stars`}>{'★'.repeat(review.rating)}<span className={styles.emptyStars}>{'★'.repeat(5 - review.rating)}</span></div>
                <p className={styles.reviewText}>{review.reviewText}</p>
                <div className={styles.cardBottom}><span className={styles.googleBadge}><span className={styles.googleG}>G</span> Google</span><span className={styles.readMore}>Read original review ↗</span></div>
              </a>
            </article>;
          })}
        </div>
        <p className={styles.hint}>Swipe or scroll to explore more reviews</p>
      </>}
    </section>
  );
}
