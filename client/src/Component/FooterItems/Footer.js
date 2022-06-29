import "./Footer.css"



const Footer = () => {
    return (
        
        <div className="footer">
            <div className="reseau_sociaux">
                <h1>المدرسة الابتدائية للنخبة</h1>
                <div className="icons">
                <a href="https://www.facebook.com" class="fa fa-facebook"></a>
                <a href="https://www.twitter.com" class="fa fa-twitter"></a>
                <a href="https://www.linkedin.com" class="fa fa-linkedin"></a>
                <a href="https://www.youtube.com" class="fa fa-youtube"></a>
                <a href="https://www.instagram.com" class="fa fa-instagram"></a>
                </div>
            </div>
                <div className="copyright">
                <p>Copyright &copy; {new Date().getFullYear()} المدرسة الابتدائية للنخبة <br/>All rights reserved.</p>
                </div>
        </div>
      );
}
 
export default Footer;