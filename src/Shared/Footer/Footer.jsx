import { FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
    return (
      <div className="bg-black">
        <footer className="footer items-center justify-evenly p-4 text-white">
          <aside className="items-center grid-flow-col">
             <h2 className="text-primary font-bold text-xl">ManageME</h2>
            
          </aside>
          <p className="inline">
              Copyright © 2023 - All right reserved by <a className="text-primary font-medium"
                href="https://foysal-rahman.web.app"
              >
                Foysal Rahman
              </a>
            </p>
          <nav className="grid-flow-col text-2xl text-primary gap-4 md:place-self-center md:justify-self-end">
            <a href="https://github.com/fr25foysal">
            <FaGithub />
            </a>
            <a href="https://linkedin.com/in/fr25foysal">
            <FaLinkedin />
            </a>
            <a href="https://wa.me/+8801750926652">
            <FaWhatsappSquare />
            </a>
          </nav>
        </footer>
      </div>
    );
};

export default Footer;