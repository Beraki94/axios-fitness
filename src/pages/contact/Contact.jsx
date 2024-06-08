import PageHeader from '../../components/PageHeader/PageHeader'
import Gym1 from "../../images/fitas1.webp";
import './Contact.css'
const Contact = () => {
  return (
    <section className='contact'>
      <PageHeader title={"About Us"}image={Gym1}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis dolor itaque, ipsum impedit molestias molestiae minus mollitia adipisci voluptatum numquam!
      </PageHeader>
      <form action="" method="POST" className='contact-form'>
        <div className='contact-form-group'>
          <input type="text" id="name" name="name" required placeholder='Name'/>
          <input type="tel" id="phone" name="phone" required placeholder='Phone'/>
        </div>
      
        <input type="email" id="email" name="email" required placeholder='Email'/> <br />
        <textarea id="message" name="message" required></textarea> <br />
        
        <button type="submit" className='contact-form-btn'>Submit</button>
        
      </form>
      
    </section>
  )
}

export default Contact