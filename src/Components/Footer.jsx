let Footer = () => {
    return (
        <div className="bg-dark text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fab fa-facebook"></i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fab fa-twitter"></i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fab fa-google"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fab fa-linkedin"></i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                        <i className="fab fa-github"></i>
                    </a>
                </section>
            </div>
            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                © 2020 Copyright:
                <a className="text-white" href="https://getbootstrap.com/">Bootstrap.com</a>
            </div>

        </div>
    );
}
export default Footer;