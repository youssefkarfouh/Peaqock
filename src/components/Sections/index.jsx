import Header from '../Header/header';
import Achievement from "../Achievement/achievement";
import Services from "../OurServices/services";
import About from '../About/about';
import Member from '../Member/member';
import Newsletter from "../Newsletter/newsletter";
import Footer from "../Footer/footer";
import Navbar from '../Navbar/navbar';


const Pages = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Achievement/>
      <Services/>
      <About/> 
      <Member/>
      <Newsletter/>
      <Footer/>
    </>
  );
};

export default Pages;
