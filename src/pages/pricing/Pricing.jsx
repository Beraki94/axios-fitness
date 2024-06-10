import PageHeader from '../../components/PageHeader/PageHeader'
import './Pricing.css'
import PricingSection from './PricingSection';

const Pricing = () => {
  return (<>
    <section className='pricing'>
      <PageHeader title={"Pricing Plan"}image={"https://t4.ftcdn.net/jpg/02/07/90/87/240_F_207908753_IgTqqhNJMOnWOgSNLXayj6MYaj91gdjp.jpg"}>
      "Fitness is not about being better than someone else. It’s about being better than you used to be."


      </PageHeader>
      <div>Pricing</div>
    </section>

    <PricingSection/>
    
    </>
  )
}

export default Pricing