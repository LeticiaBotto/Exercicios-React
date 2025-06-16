// importação
import './Footer.css'
//função
    function Footer() {
        return(
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-logo">
                        <h2>MinhaMarca</h2>
                        <p>Transformando ideias em soluções digitais.</p>
                        </div>

                        <div class="footer-links">
                            <h3>Links</h3>
                            <ul>
                                <li><a href="#sobre">Sobre</a></li>
                                <li><a href="#sobre">Serviços</a></li>
                                <li><a href="#Contato">Contato</a></li>
                                <li><a href="#faq">FAQ</a></li>
                            </ul>
                        </div>

                        <div class="footer-social">
                            <h3>Redes Sociais</h3>
                            <a href="#"><img src="facebook-icon.svg" alt="Facebook"/></a>
                            <a href="#"><img src="instagram-icon.svg" alt="Instagram"/></a>
                            <a href="#"><img src="linkedin-icon.svg" alt="LinkedIn"/></a>
                        </div>
                    </div>

                    <div class="footer-botton">
                        <p>&copy; 2025 MinhaMarca. Todos os direitos reservados.</p>
                    </div>
            </footer>
        )
    }

export default Footer