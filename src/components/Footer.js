import React from "react";
import "../css/Footer.css";
const Footer = () => {
  return (
    <footer id="footerFormat1" className="main">
      <div className="wrap">
        <div className="row1">
          <div className="col1">
            <div className="colrow1">
              <div className="cr1">
                <div className="signup">
                  {" "}
                  <i className="signupi"></i>{" "}
                  <span className="signup-span">
                    Sign up to <span>Newsletter</span>
                  </span>
                </div>
              </div>
              <div className="cr2">
                <form
                  name="newsletter"
                  id="newsletter"
                  method="post"
                  action="//catalog.exportersindia.com/catalog-newsletter-submit.php"
                  onsubmit="return newsletter_validation()"
                >
                  <div className="Email">
                    <input
                      type="text"
                      name="news_letter_email"
                      className="emailinput"
                      value=""
                      placeholder="Your Email Address"
                    />
                    <input
                      type="submit"
                      name="news_letter"
                      value="Subscribe"
                      className="submit"
                    />
                  </div>
                  <input
                    type="hidden"
                    name="web_address"
                    value="https://www.kyrelevators.in"
                  />
                  <input type="hidden" name="member_id" value="10747530" />

                  <input
                    type="hidden"
                    name="redirected_url"
                    value="https://www.kyrelevators.in/thanks.htm"
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="col2">
            <p className="col2-p"></p>
          </div>
        </div>
        <div className="row2">
          <div className="r2c1">
            <div className="column_Box">
              <div className="Icon">
                <div className="H2">
                  <b className="plusMinus"></b>
                  <h3>Quick Contact</h3>
                </div>

                <div className="Box-1">
                  <div>
                    <i className="inner-text"></i> KYR Elevators (A unit of
                    Spectra Enterprises)
                  </div>
                  <div className="hr"></div>
                  <div>
                    <i className="inner-text"></i> Mr. Navdeep Kumar
                  </div>
                  <div className="hr"></div>
                  <div>
                    <i className="inner-text"></i> F225, Phase 8B, Industrial
                    Area, Mohali, Punjab - 160071, India
                  </div>
                  <div className="hr"></div>
                  <div>
                    <i className="inner-text"></i> +91-9816032909,
                    +91-7988011941
                  </div>
                  <div className="hr"></div>
                  <div>
                    <i className="finnertext"></i>{" "}
                    <a  className="finnertext" href="mailto:kyrengineers@gmail.com">
                      kyrengineers@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="col-2-row">
              <div className="col-2-inner">
                <div className="col-2-Box  ">
                  <div className="h h2">
                    <b className="plusMinus"></b>
                    <h3>General Links</h3>
                  </div>
                  <div className="ic">
                    <div className="w">
                      <p className="l">
                        <b className="b"></b>
                        <a
                          className="text"
                          href="https://www.kyrelevators.in/"
                          title="Home"
                        >
                          Home
                        </a>
                      </p>
                    </div>
                    <div className="w">
                      <p className="l">
                        <b className="b"></b>
                        <a
                          className="text"
                          href="https://www.kyrelevators.in/about-us.htm"
                          title="About Us"
                        >
                          About Us
                        </a>
                      </p>
                    </div>
                    <div className="w">
                      <p className="l">
                        <span className="b"></span>
                        {/* <b className="b"></b> */}
                        <a
                          className="text"
                          href="https://www.kyrelevators.in/products.htm"
                          title="Products"
                        >
                          Products
                        </a>
                      </p>
                    </div>
                    <div className="w">
                      <p className="l">
                        <b className="b"></b>
                        <a
                          className="text"
                          href="https://www.kyrelevators.in/testimonials.htm"
                          title="Testimonials"
                        >
                          Testimonials
                        </a>
                      </p>
                    </div>
                    <div className="w">
                      <p className="l">
                        <b className="b"></b>
                        <a
                          className="text"
                          href="https://www.kyrelevators.in/contact-us.htm"
                          title="Contact Us"
                        >
                          Contact Us
                        </a>
                      </p>
                    </div>
                    <div className="w">
                      <p className="l">
                        <b className="b"></b>
                        <a
                          className="text"
                          href="https://www.kyrelevators.in/sitemap.htm"
                          title="Sitemap"
                        >
                          Site Map
                        </a>
                      </p>
                    </div>
                    <div className="w">
                      <p className="l">
                        <b className="b"></b>
                        <a
                          className="text"
                          href="https://www.kyrelevators.in/products.rss"
                          target="_blank"
                          title="RSS"
                        >
                          <img
                            src="https://catalog.wlimg.com/templates-images/12577/common/rss_icon.png"
                            alt="RSS"
                            className="vam"
                            width="36"
                            height="14"
                            loading="lazy"
                          />
                        </a>
                      </p>
                    </div>
                    <p className="cb"></p>
                  </div>
                  <p className="cb"></p>
                </div>
              </div>
              {/* <div class="container">
                
                  
                    <div className="tcl">
                      <div className=" H2">
                        <b className="plusMinus"></b>
                        <p className="rHead">
                          <a
                            className="text"
                            href="https://www.kyrelevators.in/products.htm"
                            title="Products"
                          >
                            Products
                          </a>
                        </p>
                      </div>
                      <div className="ic">
                        <ul>
                          <li>
                            <b className="b2"></b>
                            <p className="ofh">
                              <a
                                className="text"
                                href="https://www.kyrelevators.in/passenger-elevator.htm"
                                title="Passenger Elevator"
                              >
                                Passenger Elevator
                              </a>
                            </p>
                          </li>
                          <li>
                            <b className="b2 fl"></b>
                            <p className="ofh">
                              <a
                                className="text"
                                href="https://www.kyrelevators.in/residential-elevator.htm"
                                title="Residential Elevator"
                              >
                                Residential Elevator
                              </a>
                            </p>
                          </li>
                          <li>
                            <b className="b2 fl"></b>
                            <p className="ofh">
                              <a
                                className="text"
                                href="https://www.kyrelevators.in/hospital-elevators.htm"
                                title="Hospital Elevators"
                              >
                                Hospital Elevators
                              </a>
                            </p>
                          </li>
                          <li>
                            <b className="b2 fl"></b>
                            <p className="ofh">
                              <a
                                className="text"
                                href="https://www.kyrelevators.in/commercial-goods-elevator.htm"
                                title="Commercial Goods Elevator"
                              >
                                Commercial Goods Elevator
                              </a>
                            </p>
                          </li>
                          <li>
                            <b className="b2 fl"></b>
                            <p className="ofh">
                              <a
                                className="text"
                                href="https://www.kyrelevators.in/hydraulic-industrial-lift.htm"
                                title="Hydraulic Industrial Lift"
                              >
                                Hydraulic Industrial Lift
                              </a>
                            </p>
                          </li>
                          <li>
                            <b className="b2 fl"></b>
                            <p className="ofh">
                              <a
                                className="text"
                                href="https://www.kyrelevators.in/capsule-passenger-lift.htm"
                                title="Capsule Passenger Lift"
                              >
                                Capsule Passenger Lift
                              </a>
                            </p>
                          </li>
                          <li>
                            <b className="b2 fl"></b>
                            <p className="ofh">
                              <a
                                className="text"
                                href="https://www.kyrelevators.in/staircase-lift.htm"
                                title="Staircase Lift"
                              >
                                Staircase Lift
                              </a>
                            </p>
                          </li>
                          <li>
                            <b className="b2 fl"></b>
                            <p className="ofh">
                              <a
                                className="text"
                                href="https://www.kyrelevators.in/material-movement-lift.htm"
                                title="Material Movement Lift"
                              >
                                Material Movement Lift
                              </a>
                            </p>
                          </li>
                        </ul>
                        <p className="cb"></p>
                      </div>
                    </div>
                  </div>
                
              </div> */}






                 <div className="col-2-inner">
                <div className="col-2-Box  ">
                  <div className="h h2">
                    <b className="plusMinus"></b>
                    <h3> <a
                            className="text"
                            href="https://www.kyrelevators.in/products.htm"
                            title="Products"
                          >
                            Products
                          </a></h3>
                  </div>
                  <div className="ic">
                    <div className="w">
                      <p className="l">
                        <b className="b"></b>
                       
                              <a
                                className="text"
                                href="https://www.kyrelevators.in/passenger-elevator.htm"
                                title="Passenger Elevator"
                              >
                                Passenger Elevator
                              </a>
                           
                      </p>
                    </div>
                    <div className="w">
                      <p className="l">
                        <b className="b"></b>
                        <a
                                className="text"
                                href="https://www.kyrelevators.in/residential-elevator.htm"
                                title="Residential Elevator"
                              >
                                Residential Elevator
                              </a>
                      </p>
                    </div>
                    <div className="w">
                      <p className="l">
                        <b className="b"></b>
                        <a
                                className="text"
                                href="https://www.kyrelevators.in/hospital-elevators.htm"
                                title="Hospital Elevators"
                              >
                                Hospital Elevators
                              </a>
                      </p>
                    </div>
                    <div className="w">
                      <p className="l">
                        <b className="b"></b>
                        <a
                                className="text"
                                href="https://www.kyrelevators.in/commercial-goods-elevator.htm"
                                title="Commercial Goods Elevator"
                              >
                                Commercial Goods Elevator
                              </a>
                      </p>
                    </div>
                    <div className="w">
                      <p className="l">
                        <b className="b"></b>
                        <a
                                className="text"
                                href="https://www.kyrelevators.in/hydraulic-industrial-lift.htm"
                                title="Hydraulic Industrial Lift"
                              >
                                Hydraulic Industrial Lift
                              </a>
                      </p>
                    </div>
                    <div className="w">
                      <p className="l">
                        <b className="b"></b>
                        <a
                                className="text"
                                href="https://www.kyrelevators.in/capsule-passenger-lift.htm"
                                title="Capsule Passenger Lift"
                              >
                                Capsule Passenger Lift
                              </a>
                      </p>
                    </div>


                    <div className="w">
                      <p className="l">
                        <b className="b"></b>
                        <a
                                className="text"
                                href="https://www.kyrelevators.in/staircase-lift.htm"
                                title="Staircase Lift"
                              >
                                Staircase Lift
                              </a>
                      </p>
                    </div>



                    <div className="w">
                      <p className="l">
                        <b className="b"></b>
                        <a
                                className="text"
                                href="https://www.kyrelevators.in/material-movement-lift.htm"
                                title="Material Movement Lift"
                              >
                                Material Movement Lift
                              </a>
                      </p>
                    </div>





                    <div className="w">
                      <p className="l">
                        <b className="b"></b>
                        <a
                          className="text"
                          href="https://www.kyrelevators.in/products.rss"
                          target="_blank"
                          title="RSS"
                        >
                          <img
                            src="https://catalog.wlimg.com/templates-images/12577/common/rss_icon.png"
                            alt="RSS"
                            className="vam"
                            width="36"
                            height="14"
                            loading="lazy"
                          />
                        </a>
                      </p>
                    </div>
                    <p className="cb"></p>
                  </div>
                  <p className="cb"></p>
                </div>
                </div>
                </div>






            </div>

            <div className="Right-reserved">
              <div className="Rr1">
                <div className="col-Rr1">
                  <p className="copyright">
                    All Rights Reserved.{" "}
                    <a  className="finnertext"href="https://www.kyrelevators.in">
                      <b>KYR Elevators (A unit of Spectra Enterprises)</b>
                    </a>{" "}
                    <a
                      href="https://www.exportersindia.com/terms-conditions.htm"
                      
                      className="finnertext"
                      rel="nofollow"
                      target="_blank"
                    >
                      (Terms of Use)
                    </a>
                  </p>
                  <p className="memberOf">
                    Developed &amp; Managed By{" "}
                    <a className="finnertext"
                      href="https://www.weblink.in"
                      rel="nofollow"
                      target="_blank"
                    >
                      Weblink.In Pvt. Ltd.
                    </a>
                  </p>
                </div>
                <div className="col-Footer">
                  <div className="dib ml30px lh0 vab"></div>
                  <div className="dib1 ">
                    <span>
                      <script>
                        {" "}
                        TrustLogo("https://www.positivessl.com/images/seals/positivessl_trust_seal_sm_124x32.png",
                        "POSDV", "none");
                      </script>
                    </span>
                  </div>
                  <div className="dib vam ml20px mr20px"></div>
                  <div className="dib2">
                    <span>
                      <a href="https://www.exportersindia.com" target="_blank">
                        <img
                          src="https://catalog.wlimg.com/main-common/ei.png"
                          width="133"
                          height="44"
                          loading="lazy"
                          alt="ExportersIndia.com"
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;