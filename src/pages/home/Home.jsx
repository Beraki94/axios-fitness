import CountUp from 'react-countup';
import './Home.css';
import SectionHead from '../../components/sectionHead/SectionHead';
import HeroCarousel from '../../components/slider/HeroCarousel';


const Home = () => {
  return (
    <>
      <section className='hero'>
        <HeroCarousel/>
      </section>
     <SectionHead title={"OUR SERVICES"} subTitle={"Best of the Best"}/>
    </>

  )
}

export default Home