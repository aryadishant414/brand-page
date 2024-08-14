const Navigation = () => {
    return (
      <nav className="container">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>

        <div className='ul-items'>
          <ul>
            <li><a href="#">MENU</a></li>
            <li><a href="#">LOCATION</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </div>

        <button>Login</button>
        
      </nav>
    )
}

export default Navigation;