import './App.css';
import Hero from './components/Hero/Hero';
import Footer from '../src/components/Footer/Footer';
import Banner from './components/Banner/Banner';
import Symptoms from './components/Symptoms/Symptoms';

function App() {
  return (
    <div className='body'>
      <Hero />
      <Banner />
      <Symptoms />
      <Footer />
    </div>
  );
}

export default App;
