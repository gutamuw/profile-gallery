export const footer = document.getElementById("footer");
const currentYear = new Date().getFullYear();

footer.innerHTML = `
        <div class="footer-content">
            <h2>Social links</h2>
            <div class="icons">
                <a href="https://www.facebook.com/ludvig.elverskog"><i class="fa fa-facebook"></i></a>
                <a href="https://www.instagram.com/ludvigelverskog/"><i class="fa fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/ludde-elverskog/"><i class="fa fa-linkedin"></i></a>
            </div>
            <p>© ${currentYear} Ludde Elverskog</p>
        </div>
    `;
