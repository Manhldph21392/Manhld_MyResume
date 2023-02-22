

const Header = () => {
  return /*html*/`
    <header>
    <div class="container">
      <nav class="navbar">
        <!-- logo -->
        <div class="navbar__logo">
          <img src="./src/img/avata.jpg" alt="website logo" />
        </div>
        <!-- links -->
        <ul class="navbar__links">
          <li class="navbar__link"><a href="#">Work</a></li>
          <li class="navbar__link"><a href="#things">About</a></li>
          <li class="navbar__link"><a href="#works">Resume</a></li>
          <a href="https://drive.google.com/drive/u/1/my-drive"><button class="navbar__btn">Contact</button></a>
        </ul>
        <!-- menu button -->
        <div class="navbar__icons">
          <div class="navbar__icon"></div>
        </div>
      </nav>
    </div>
  </header>`
  
}

export default Header