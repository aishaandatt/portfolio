import React,{useRef,useState,useEffect} from 'react'
import Footer from '../../components/Footer'
import './Contact.scss'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  // const initialFormData = Object.freeze({
  //   to_name:"Aishaan Datt",
  //   from_name: "",
  //   from_email: "",
  //   message:''
  // });
  // const [formData, updateFormData] = useState(initialFormData);
  // const handleChange = (e) => {
  //   updateFormData({
  //     ...formData,

  //     // Trimming any whitespace
  //     [e.target.name]: e.target.value.trim()
  //   });
  // };
  // useEffect(()=>{
    const sendEmail = (e) => {
      e.preventDefault();
      
      emailjs.sendForm('service_nd7fy7w', 'template_ob10fpl', form.current, 'NrrZpDsev-Oi3SYbb')
      .then((result) => {
        console.log(result.text);
        alert("Message Sent!")
        // reset()
      }, (error) => {
        console.log(error.text);
        alert(error.text)
      });
      e.target.reset()
    };
  // })
  return (
    <div className='Contact' id='Contact'>
        <h1>
          CONTACT
        </h1>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder='Enter Full Name' required />
          <input type="email" name="from_email" placeholder='Enter Email' required />
          <textarea name="message" placeholder='Type your message here' required/>
          <input className='btn' type="submit" value="Send"/>
        </form>
      </div>
  )
}

export default Contact