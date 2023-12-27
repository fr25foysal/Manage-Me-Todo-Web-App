import BoxContainer from "../../Components/Container/BoxContainer";
import Banner from "./Banner/Banner";
import engineer from '../../assets/engineer.jpg'
import developer from '../../assets/developer.jpg'
import banker from '../../assets/banker.jpg'
import manager from '../../assets/manager.jpg'
import Footer from "../../Shared/Footer/Footer";
import {motion} from 'framer-motion'
const Home = () => {

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
    return (
      <div>
        <Banner></Banner>
        <BoxContainer>
          <section className="py-10">
            <div className="text-center">
              <h2 className="font-bold text-3xl ">
                To Whom <span className="text-secondary">ManageMe</span>{" "}
                Benifited For?
              </h2>
              <p className="max-w-4xl mx-auto py-3">
                In our commitment to enhancing productivity and simplifying
                daily tasks, we take pride in the profound impact our TODO app
                has on diverse individuals and their lifestyles. Discover the
                transformative journey of users who have found empowerment and
                efficiency through our application.
              </p>
            </div>
            <motion.ul
              variants={container}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-4 gap-5 py-5"
            >
              <motion.img
                className="h-52 w-full object-cover"
                key={"1"}
                variants={item}
                src={engineer}
                alt=""
              />
              <motion.img
                className="h-52 w-full object-cover"
                key={"2"}
                variants={item}
                src={banker}
                alt=""
              />
              <motion.img
                className="h-52 w-full object-cover"
                key={"3"}
                variants={item}
                src={developer}
                alt=""
              />
              <motion.img
                className="h-52 w-full object-cover"
                key={"4"}
                variants={item}
                src={manager}
                alt=""
              />
            </motion.ul>
          </section>
        </BoxContainer>
        <Footer></Footer>
      </div>
    );
};

export default Home;