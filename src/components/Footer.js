

const Footer = () => {
  return /*html*/`
    <footer id="footer">
    <div class="container">
      <!-- dec -->
      <div class="footer__dec">
        <img src="./src/img/things-dec-l.png" alt="illustration of leaf" />
      </div>
      <!-- img -->
      <div class="footer__img">
        <img src="./src/img/footer-img.png" alt="illustration of women" />
      </div>
      <!-- heading -->
      <div class="footer__heading">
        <h1>CONTACT</h1>
        <!-- contact -->
        <div class="footer__contact">
          <a href="tel:901234567">
            <i class="fas fa-phone-alt"></i>
            <p>0904798514</p>
          </a>
          <a href="manhthe21082003@gmail.com">
            <i class="fas fa-envelope"></i>
            <p>manhthe21082003@gmail.com</p>
          </a>
        </div>
        <div class="banner__socials">
        <a href="https://www.facebook.com/profile.php?id=100038477689833"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.instagram.com/manh_luuu.183/"><i class="fa-brands fa-instagram"></i></a>
        <a href="manhthe21082003@gmail.com"><i class="fa-solid fa-envelope"></i></a>
        </div>
      </div>
    </div>
  </footer>`
  
}

export default Footer