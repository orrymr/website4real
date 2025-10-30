function Footer() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '2em',
      color: '#00ff9f',
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: '0.85em',
      opacity: 0.7
    }}>
      <div style={{ marginBottom: '0.5em' }}>
        $ logout --session=website
      </div>
      <div style={{ color: '#00d9ff' }}>
        © {new Date().getFullYear()} // Connection terminated.
      </div>
    </div>
  );
}

export default Footer;
