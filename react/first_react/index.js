function Navbar() {
  return (
      <nav>
          <a className="navbar-brand" href="#"><h1>Website</h1></a>
          <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
      </nav>
  )
}

function MainContent() {
  return (
    <div>
      <h1>Hello, everyone!</h1>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
      </ul>
    </div>
  );
}

ReactDOM.render(
  (<div>
    <Navbar />
    <MainContent />
  </div>),
  document.getElementById('root')
);