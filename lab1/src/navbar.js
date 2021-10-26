function navbar() {
  return (
    <div>
     
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <img src="download.jpg" alt="" width="80" height="70"></img>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Sign in</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
      
    </div>
  );
}
export default navbar;
