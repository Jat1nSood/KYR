import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Welcome from './components/Welcome';
import TopNav from './components/TopNav';
import Navbar from './components/Navbar';
import Form from './components/Form';
import HeroImage from './components/HeroImage';
import Popular from './components/Popular';
import ContactUs from './Screens/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <TopNav/>
   <Navbar/>
   <HeroImage/>
   <Popular/>
   <Welcome/>
   <Card/>
  

   <ContactUs/>
   <Footer/>

 </div>

  );
}

export default App;
