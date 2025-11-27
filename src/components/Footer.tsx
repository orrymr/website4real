function Footer() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '2.5em 2em',
      color: '#666',
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '0.85em',
      borderTop: '1px solid #1a1a1a',
      borderImage: 'linear-gradient(90deg, #8b0000, #1a1a1a, #1a1a1a, #8b0000) 1',
      marginTop: '4em',
      position: 'relative',
      zIndex: 3,
      background: 'rgba(13, 13, 13, 0.5)'
    }}>
      <div style={{
        marginBottom: '0.6em',
        fontSize: '0.9em',
        color: '#555',
        letterSpacing: '1px'
      }}>
        $ exit
      </div>
      <div style={{
        color: '#8b0000',
        letterSpacing: '1px',
        fontSize: '0.85em'
      }}>
        © {new Date().getFullYear()} // Connection terminated.
      </div>
    </div>
  );
}

export default Footer;
