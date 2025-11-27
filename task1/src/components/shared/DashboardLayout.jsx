function DashboardLayout({ children }) {
  return (
    <div className="dashboard">
      <aside className="sidebar">Sidebar</aside>

      <main className="content">
        <header className="topbar">Topbar</header>

        <section className="page">{children}</section>
      </main>
    </div>
  );
}

export default DashboardLayout;
