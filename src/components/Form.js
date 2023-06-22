import React from "react";
import'../css/Form.css'
import formImg from '../Assets/formImg.jpg'
export default function Form() {
  return (
    <div>
      <div className="form">
        

       <div className="formContainer1">
       <div className="formHeading">Quick Enquiry</div>
       <div className="input">
          <input placeholder="Name" />
          <input placeholder="Email" />
          <br />

          <input placeholder="Country" />

          <input placeholder="mobile" />

          <br />
          <textarea  style = {{width : "70%", marginTop : "1rem"}}id="message" name="message" rows="4"  required></textarea>
          <br />
          <button>Send Message</button>
        </div>
       </div>
       <div className="formContainer2">
        <img src={formImg}/>
       </div>

   
      </div>
    </div>
  );
}
