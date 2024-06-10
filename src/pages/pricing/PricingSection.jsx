import PricingCard from '../../components/pricingCard/PricingCard';
import { plans } from '../../data';
import './PricingSection.css';

const PricingSection = () => {
  return (

  <div className="pricing-section">
    {plans.map((plan) => (
      <PricingCard key={plan.id} plan={plan}/>
    ))}
  </div>
  )
}

export default PricingSection