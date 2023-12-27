import { Link } from "react-router-dom";
import useProvider from "../../../Hooks/useProvider";
import { motion } from "framer-motion";

const Banner = () => {
    const {user} = useProvider()
    return (
      <div className="relative md:h-[500px] h-[400px] bg-[#ffecec] overflow-hidden px-6 font-[sans-serif]">
        <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-neutral"></div>
        <div className="absolute -bottom-6 -left-0 w-24 h-20 rounded-tr-[40px] bg-secondary"></div>
        <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-accent"></div>
        <div className="absolute -bottom-6 -right-0 w-24 h-20 rounded-tl-[40px] bg-primary"></div>
        <div className="grid items-center h-full">
          <div className="text-center">
            <h2 className="text-6xl max-sm:text-3xl font-extrabold mb-4">
              Empower Your Productivity with <br></br>{" "}
              <span className="text-accent">Manage</span>
              <span className="text-neutral">Me</span>
            </h2>
            <div className="mt-8">
              <p className="text-sm text-gray-400">
                Streamline Tasks, Boost Efficiency, and Stay Organized in Style
              </p>
              <Link to={user ? "/tasks" : "/sign-in"}>
                <motion.div  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}>
                  <button className="btn rounded-md mt-5 btn-neutral text-">
                    {"Let's Explore"}
                  </button>
                </motion.div>
              </Link>
              {/* <ul className="flex items-center justify-center mt-4 space-x-4">
                        <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <a href="javascript:void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                                        data-original="#000000" />
                                </svg>
                            </a>
                        </li>
                        <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <a href="javascript:void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                    viewBox="0 0 511 512">
                                    <path
                                        d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                                        data-original="#000000" />
                                </svg>
                            </a>
                        </li>
                    </ul> */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;