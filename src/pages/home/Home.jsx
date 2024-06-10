import CountUp from 'react-countup';
import './Home.css';
import SectionHead from '../../components/sectionHead/SectionHead';
import HeroCarousel from '../../components/slider/HeroCarousel';
import PricingSection from '../pricing/PricingSection';
import Testimonials from '../../components/testimonials/Testimonials';



 

const Home = () => {
  return (
    <div className='homepage'>
      <section className='hero'>
        <HeroCarousel/>
      </section>
      <section className='statistics'>
        <div className="statistics-details">
          <span>
            <CountUp start={10} end={182} duration={5} />
            <span> +</span>
          </span>
          <span>Modern Equipments</span>
        </div>
        <div className="statistics-details">
          <span>
            <CountUp start={10} end={88} duration={5} />
            <span> +</span>
          </span>
          <span>Experience Trainners</span>
        </div>
        <div className="statistics-details">
          <span>
            <CountUp start={1} end={29} duration={5} />K
            <span> +</span>
          </span>
          <span>Happy Customers</span>
        </div>
        <div className="statistics-details">
          <span>
            <CountUp start={1} end={12} duration={5} />
            <span> +</span>
          </span>
          <span>Years of Experience</span>
        </div>
      </section>
      <section className='home-pricing'>
     <SectionHead title={"BECOME A MEMBER"} subTitle={"Our Affordable Pricing Plan"}/>
     <PricingSection />
     </section>
     <section className='testimonials-section'>
     <SectionHead title={"TESTIMONIALS"} subTitle={"What they say about us"}/>
     <Testimonials />
     </section>
    </div>
  
  )
}

export default Home