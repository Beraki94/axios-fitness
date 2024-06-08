import PageHeader from '../../components/PageHeader/PageHeader'
import Gym1 from "../../images/fitas1.webp";
import './Pricing.css'

const Pricing = () => {
  return (
    <section className='pricing'>
      <PageHeader title={"About Us"}image={Gym1}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis dolor itaque, ipsum impedit molestias molestiae minus mollitia adipisci voluptatum numquam!
      </PageHeader>
      <div>Pricing</div>
    </section>
    
  )
}

export default Pricing