import React from "react";
import "../css/ContactUs.css";
import Navbar from "../components/Navbar";
import TopNav from "../components/TopNav";

import contact from "../Assets/contact.png";
import TopNAv from "../components/TopNav";
export default function ContactUs() {
  return (
    <div>
      <TopNav />
      <Navbar />
      <div style={{margin : "auto", marginTop : " 6rem", fontSize : "2rem", marginLeft : "18rem"}}>KYR Elevators (A unit of Spectra Enterprises)</div>
      <div className="contactUs">
        <div className="contactDetails">
          <div className="contactDetailsHeading">
            KYR ELEVATORS (A UNIT OF SPECTRA ENTERPRISES)
          </div>

          <div className="contactDetailsCard">
            <div style={{ margin: "0" }}>
              <img className="contactDetailsCardIcon" src={contact} />
            </div>
            <div className="contactDetailsCardDetails">
              <div className="contactDetailsCardDetailsHeading">
                Contact Person
              </div>

              <div className="contactDetailsCardDetailsData">Navdeep Kumar</div>
            </div>
          </div>
          <div className="contactDetailsCard">
            <div style={{ margin: "0" }}>
              <img className="contactDetailsCardIcon" src={contact} />
            </div>
            <div className="contactDetailsCardDetails">
              <div className="contactDetailsCardDetailsHeading">Address </div>

              <div className="contactDetailsCardDetailsData">
                F225, Phase 8B, Industrial Area, Mohali, Punjab, India - 160071
              </div>
            </div>
          </div>
          <div className="contactDetailsCard">
            <div style={{ margin: "0" }}>
              <img className="contactDetailsCardIcon" src={contact} />
            </div>
            <div className="contactDetailsCardDetails">
              <div className="contactDetailsCardDetailsHeading">Call Us </div>

              <div className="contactDetailsCardDetailsData">
                +91-9816032909, +91-7988011941
              </div>
            </div>
          </div>
          <div className="contactDetailsCard">
            <div style={{ margin: "0" }}>
              <img className="contactDetailsCardIcon" src={contact} />
            </div>
            <div className="contactDetailsCardDetails">
              <div className="contactDetailsCardDetailsHeading">Email </div>

              <div className="contactDetailsCardDetailsData">
                kyrengineers@gmail.com
              </div>
            </div>
          </div>
          <div className="contactDetailsCard">
            <div style={{ margin: "0" }}>
              <img className="contactDetailsCardIcon" src={contact} />
            </div>
            <div className="contactDetailsCardDetails">
              <div className="contactDetailsCardDetailsHeading">
                Web Address{" "}
              </div>

              <div className="contactDetailsCardDetailsData">
                https://www.kyrelevators.in
              </div>
            </div>
          </div>
          <div className="contactDetailsCard">
            <div style={{ margin: "0" }}>
              <img className="contactDetailsCardIcon" src={contact} />
            </div>
            <div className="contactDetailsCardDetails">
              <div className="contactDetailsCardDetailsHeading">Web Page </div>

              <div className="contactDetailsCardDetailsData">
                https://www.exportersindia.com/kyr-elevtors-a-unit-of-spectra-enterprises/
              </div>
            </div>
          </div>
          <div className="contactDetailsCard">
            <div style={{ margin: "0" }}>
              <img className="contactDetailsCardIcon" src={contact} />
            </div>
            <div className="contactDetailsCardDetails">
              <div className="contactDetailsCardDetailsHeading">Video</div>

              <div className="contactDetailsCardDetailsData">
                View Company Video
              </div>
            </div>
          </div>
        </div>

        <div className="contactUsForm">
          <label>Your Name <span>*</span></label>
          <input placeholder="Name" />

          <label>Email<span>*</span></label>
          <input placeholder="Name" />

          <label>Select Country<span>*</span></label>
          <input placeholder="Name" />

          <label>Select State<span>*</span></label>
          <input placeholder="Name" />

          <label>City</label>
          <input placeholder="Name" />

          <label>Phone/Mobile<span>*</span></label>
          <input placeholder="Name" />

          <label>Enquiry Details<span>*</span></label>
          <input placeholder="Name" />

          <button className="contactUsFormButton">Submit</button>
        </div>
      </div>
    </div>
  );
}
