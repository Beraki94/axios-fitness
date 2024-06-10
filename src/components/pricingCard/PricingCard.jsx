import "./PricingCard.css";

const PricingCard = ({ plan }) => {
  return (
    
      <div className="pricing-card">
        <h3 className="plan-name">{plan.name}</h3>
        <p className="plan-price">{plan.price}</p>
        <ul className="plan-features">
          {plan.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <button className="select-plan-button">Select Plan</button>
      </div>


  )
}

export default PricingCard