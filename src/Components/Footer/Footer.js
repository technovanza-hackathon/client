import React from 'react'

const Footer = () => {
    return (
        <footer id="footer">
            <div class="footer-top">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-3 col-md-6 footer-contact">
                            <h3>Helping Hands</h3>
                            <p>
                                Module No. 411, 4th Floor, NSIC-MDBP Building
                                Okhla Industrial Estate, Mumbai – 110020 (INDIA) <br /><br />
                                <strong>Phone:</strong> +91-7977504421<br />
                                <strong>Email:</strong> helpinghands@gmail.com<br />
                            </p>
                        </div>

                        <div class="col-lg-2 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><i class="bx bx-chevron-right"></i> <a style={{ textDecoration: "none" }} href="/">Home</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a style={{ textDecoration: "none" }} href="/">About us</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a style={{ textDecoration: "none" }} href="/">Services</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a style={{ textDecoration: "none" }} href="/">Terms of service</a></li>
                                <li><i class="bx bx-chevron-right"></i> <a style={{ textDecoration: "none" }} href="/">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-4 col-md-6 footer-newsletter">
                            <h4>Join Our Newsletter</h4>
                            <form action="" method="post">
                                <input type="email" name="email" /><input type="submit" value="Subscribe" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <div class="container d-md-flex py-4">

                <div class="me-md-auto text-center text-md-start">
                    <div class="copyright">
                        &copy; Copyright <strong><span>Helping Hands</span></strong>. All Rights Reserved
                    </div>
                </div>
                <div class="social-links text-center text-md-right pt-3 pt-md-0">
                    <a style={{ textDecoration: "none" }} href="/" class="twitter"><i class="bx bxl-twitter"></i></a>
                    <a style={{ textDecoration: "none" }} href="/" class="facebook"><i class="bx bxl-facebook"></i></a>
                    <a style={{ textDecoration: "none" }} href="/" class="instagram"><i class="bx bxl-instagram"></i></a>
                    <a style={{ textDecoration: "none" }} href="/" class="google-plus"><i class="bx bxl-skype"></i></a>
                    <a style={{ textDecoration: "none" }} href="/" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer