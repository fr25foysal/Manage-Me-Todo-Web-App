import BoxContainer from "../../Components/Container/BoxContainer";
import Banner from "./Banner/Banner";
import engineer from '../../assets/engineer.jpg'
import developer from '../../assets/developer.jpg'
import banker from '../../assets/banker.jpg'
import manager from '../../assets/manager.jpg'
import Footer from "../../Shared/Footer/Footer";

const Home = () => {
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
            <div className="grid grid-cols-4 gap-5 py-5">
              <img className="h-52 w-full object-cover" src={engineer} alt="" />
              <img className="h-52 w-full object-cover" src={banker} alt="" />
              <img className="h-52 w-full object-cover" src={developer} alt="" />
              <img className="h-52 w-full object-cover" src={manager} alt="" />
            </div>
          </section>
        </BoxContainer>
        <Footer></Footer>
      </div>
    );
};

export default Home;