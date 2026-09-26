import React from 'react';

export default function Quote() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.quoteMark}>“</div>
        <p style={styles.quoteText}>
          BUSINESS: In terms is code, express your dream and let AI give you the code. This is a beautiful journey.
        </p>
        <div style={styles.quoteMarkBottom}>”</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0f172a',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    padding: '20px',
  },
  card: {
    position: 'relative',
    maxWidth: '650px',
    backgroundColor: 'rgba(30, 41, 59, 0.7)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '16px',
    padding: '48px 40px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  quoteMark: {
    position: 'absolute',
    top: '16px',
    left: '24px',
    fontSize: '60px',
    color: 'rgba(56, 189, 248, 0.2)',
    fontFamily: 'serif',
    lineHeight: 1,
  },
  quoteMarkBottom: {
    position: 'absolute',
    bottom: '4px',
    right: '24px',
    fontSize: '60px',
    color: 'rgba(56, 189, 248, 0.2)',
    fontFamily: 'serif',
    lineHeight: 1,
  },
  quoteText: {
    fontSize: '22px',
    lineHeight: '1.6',
    color: '#f8fafc',
    margin: 0,
    fontWeight: '400',
    letterSpacing: '0.3px',
    textAlign: 'center',
  },
};
