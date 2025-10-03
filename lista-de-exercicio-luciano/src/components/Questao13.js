import React from 'react';

function Layout() {
  const styles = {
    container: { display: 'flex', flexDirection: 'column', minHeight: '100vh' },
    header: { background: 'lightblue', padding: '1rem' },
    main: { display: 'flex', flex: '1' },
    sidebar: { background: 'lightgreen', width: '200px', padding: '1rem' },
    content: { background: 'white', flex: '1', padding: '1rem' },
    footer: { background: 'lightgray', padding: '1rem' },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>Header</header>
      <main style={styles.main}>
        <aside style={styles.sidebar}>Sidebar</aside>
        <div style={styles.content}>Content</div>
      </main>
      <footer style={styles.footer}>Footer</footer>
    </div>
  );
}
export default Layout;