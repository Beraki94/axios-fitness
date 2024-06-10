import PageHeader from '../../components/PageHeader/PageHeader'
import './Contact.css'
const Contact = () => {
  return (
    <section className='contact'>
      <PageHeader title={"Contact Us"}image={"https://t3.ftcdn.net/jpg/06/52/75/52/240_F_652755297_NWouGidex5E6PMghw45aelNYZxG0jgPP.jpg"}>
      "The only bad workout is the one that didn’t happen."
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