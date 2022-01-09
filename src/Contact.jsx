import React,{useState} from 'react';
import contact from "../src/images/contact.jpg";

const Contact = () => {
    const [Data, setData] = useState({
        name:"",email:"",business:"",
    });
    const InputEvent=(event)=>{
        const{name,Value}= event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]: Value,
            };
        });
    };
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`Thank you`)
    };
    return (
        <>
        <div className="mt-5 ">
            <h1 className='text-center'>Contact ME</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-3  ">
            <img src={contact} alt="contact" className='img-fluid' />
            </div>
            </div>
        
        <div className='container contact_div'>
            <div className='row'>
                <div className='col-md-6 col-10 mx-auto'>
                <form onSubmit={formSubmit}>
  <div class="mb-2">
    <label for="exampleInputName1" className="form-label">Name</label>
    <input type="text" className="form-control" 
    name="name"
    value={Data.name}
    onChange={InputEvent}
    placeholder="Enter your Name...."/>
   
  </div>
  <div class="mb-2">
    <label for="exampleInputBusiness1" className="form-label">Business</label>
    <input type="text" className="form-control" 
    name="business"
    value={Data.business}
    onChange={InputEvent}
    placeholder="Your Business..."/>
   
  </div>
  <div className="mb-2">
    <label for="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" 
    name="email"
    value={Data.email}
    onChange={InputEvent}
    placeholder="Enter your Email..."/>
    <div id="emailHelp" className="form-text">We'll never share your details with anyone else.</div>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;