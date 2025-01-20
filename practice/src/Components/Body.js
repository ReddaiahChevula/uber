import React from "react";
import { Link } from "react-router-dom";
import Login from "./Signup";
import Footer from "./Footer";
import SecondNavbar from "./SecondNavbar";

const Body = () => {

    return(
        <>
{/* ......Request a ride....... */}

   <SecondNavbar/>

{/* .........pickup location & drop location........... */}

        <div className="container-fluid">
           <div className="container">
             <div className="row">
              <div className="col-lg-6 col-md-10 col-sm-12">
                <div className="row">
                    <div className="mt-3 col-12">
                      <h1>Request a ride for now or later</h1>
                    </div>

                    <div className="col-lg-10 col-md-10 col-sm-12 pickup_location">
                    <div>
                      <form>
                      <i class="fa-solid fa-location-dot pickup_location_icon"></i> 
                      <input type="text" className="form-control pickup" placeholder="Pickup Location"/> 
                      <i class="fa-solid fa-location-dot pickup_location_icon"></i> 
                      <input type="text" className="form-control pickup" placeholder="Drop Location"/> <br/>
                      <div className="d-flex">
                      <i class="fa-solid fa-calendar-days calender_icon"></i>
                      <input type="text" placeholder="Today" />
                      <i class="fa-solid fa-clock calender_icon"></i>
                      <input type="text" placeholder="Now" />
                      </div>
                      </form>
                    </div>
                  </div>

                  <div className="col-12 mt-4">
                     <div>
                      <h6>Destination suggestions</h6>
                     </div>
                  </div>
                  <div className="col-10 d-flex mt-3">
                     <div className="mt-4">
                        <i class="fa-solid fa-clock"></i>
                     </div>
                     <div className="ms-3">
                        <h6>Charminar</h6>
                        <p>Rd,Char Kaman,Ghansi Bazaar,Hyderabad,Telangana.</p>
                        <hr/>
                     </div>
                  </div>
                  <div className="col-10 d-flex ">
                     <div className="mt-4">
                        <i class="fa-solid fa-clock"></i>
                     </div>
                     <div className="ms-3">
                        <h6>Kacheguda</h6>
                        <p>Nimboliadda,Kacheguda,Hyderabad,Telangana.</p>
                        <hr/>
                     </div>
                  </div>
                  <div>
                     <button className="btn bg-dark text-light">See Prices</button>
                  </div>

                </div>
              </div>
               
               <div className="col-lg-6">
                 <div className="mt-5">
                 <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d243633.38200844103!2d78.446592!3d17.4227456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1734592294137!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                 </div>
               </div>
             </div>
           </div>
        </div>

{/* .........Ride with friends seamlessly............ */}

        <div className="container-fluid">
           <div className="container mt-5">
             <div className="row">
               <div className="col-lg-6 mt-5">
                 <div>
                   <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_648,w_1152/v1683576635/assets/f7/7aa380-a378-47bf-8b88-aaba1587efdd/original/landing-stops-group-rides.png" width="100%" />
                 </div>
               </div>

               <div className="col-lg-6 ridewith_frnds">
                 <div className="text-start ms-4 p-3 mt-3">
                   <h1 className="fw-bold">Ride with friends seamlessly</h1>
                   <p className="mt-3">Riding with friends just got easier: set up a group ride in the Uber app, invite your friends, and arrive at your destination. Friends who ride together save together.</p>
                   <button className="btn"> Learn More <hr/></button>
                 </div>
               </div>
             </div>
           </div>
        </div>

        {/* <div className="container-fluid">
            <div className="container">
                <div className="row g-3">
                    <h3>Suggestions</h3>
                    <div className="col-lg-4 col-md-6 col-sm-12 bg-primary suggestions">
                        <div className=" suggestions_ride p-2">
                            <div className="col-8">
                                 <h6>Ride</h6>
                                 <p>Go anywhere with Uber.Request a ride,hop in,and go.</p>
                                 <button className="btn">Details</button>
                            </div>
                            <div className="col-3">
                                 <img src="https://mobile-content.uber.com/launch-experience/ride.png" width={100} />
                            </div>   
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 bg-primary suggestions">
                        <div className="suggestions_ride p-2">
                            <div className="col-6">
                                 <h6>Ride</h6>
                                 <p>Go anywhere with Uber.Request a ride,hop in,and go.</p>
                                 <button className="btn">Details</button>
                            </div>
                            <div className="col-2">
                                 <img src="https://mobile-content.uber.com/launch-experience/ride.png" width={100}/>
                            </div>   
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 bg-primary suggestions">
                        <div className=" suggestions_ride p-2">
                            <div className="col-8">
                                 <h6>Ride</h6>
                                 <p>Go anywhere with Uber.Request a ride,hop in,and go.</p>
                                 <button className="btn">Details</button>
                            </div>
                            <div className="col-3">
                                 <img src="https://mobile-content.uber.com/launch-experience/ride.png" width={100}/>
                            </div>   
                        </div>
                    </div>                 

                </div>
            </div>
        </div> */}

{/* .................>>>>>>>>>>>>>>>>Suggestions<<<<<<................. */}

        <div className="container mt-5">
          <h2>Suggestions</h2>
          <div className="row g-3 mt-3">
             <div className="col-lg-4 col-md-6 col-sm-12 suggestions">
                <Link to='/Ride' className="text-dark text-decoration-none"> 
                      <div className="suggestions_ride">
                        <div className="col-6">
                            <h6 className="mt-3">Ride</h6>
                            <p>Go anywhere with Uber.Request a ride,hop in,and go.</p>
                            <button className="btn mb-3">Details</button>
                        </div>
                        <div className="col-3">
                             <img src="https://mobile-content.uber.com/launch-experience/ride.png" width={100}/>
                        </div> 
                      </div>
                </Link>  

             </div>

             <div className="col-lg-4 col-md-6 col-sm-12 suggestions">
              <Link to='/Ride' className="text-dark text-decoration-none">
                  <div className="suggestions_ride">
                     <div className="col-6">
                         <h6 className="mt-3">Courier</h6>
                         <p>Uber makes same-day item delivery easier than ever.</p>
                         <button className="btn mb-3">Details</button>
                     </div>
                     <div className="col-3">
                          <img src="https://cn-geo1.uber.com/static/mobile-content/Courier.png" width={100}/>
                     </div>   
                  </div>
              </Link>
             </div>

             <div className="col-lg-4 col-md-6 col-sm-12 suggestions">
             <Link to='/Ride' className="text-dark text-decoration-none">
                  <div className="suggestions_ride">
                     <div className="col-7">
                         <h6 className="mt-3">Reserve</h6>
                         <p>Reserve your ride in advance so you can relax on the day of your trip</p>
                         <button className="btn mb-3">Details</button>
                     </div>
                     <div className="col-3">
                          <img src="https://mobile-content.uber.com/uber_reserve/reserve_clock.png" width={100}/>
                     </div>   
                  </div>
              </Link>
             </div>
                         
          </div>
        </div>

{/*........................>>>>>>>>>>>>>>>>Use Uber App to Help<<<<<<<<<<<<<<<<<<<<....................  */}

              <div className="container-fluid">
                <div className="container mt-5">
                    <div className="row">
                        <h1 className="fs-2 fw-bold">Use the Uber app to help you travel your way</h1>
                        <div className="col-lg-4 col-md-6 col-sm-12 airports">
                            <div>
                                <img className="mt-3" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_768/v1692743834/assets/54/f60161-cf6b-4401-a309-8bb196c0014c/original/U_CoastalCalifornia_White_Final-%281%29.jpg" width="100%" />
                                <h5 className="mt-3">Ride Options</h5>
                                <p>There’s more than one way to move with Uber, no matter where you are or where you’re headed next.</p>
                                <button className="btn btn-dark mt-2 px-3 py-2">Search ride options</button>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 airports">
                            <div>
                                <img className="mt-3" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_768/v1692743890/assets/f9/ba27c4-665c-4cca-8161-9e3f87f49994/original/Airport-rides.png" width="100%" />
                                <h5 className="mt-3">700+ airports</h5>
                                <p>You can request a ride to and from most major airports. <span className="text-decoration-underline">Schedule</span> a ride to the airport for one less thing to worry about.</p>
                                <button className="btn btn-dark mt-2 px-3 py-2">Search Airports</button>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 airports">
                            <div>
                                <img className="mt-3" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_768/v1689609697/assets/b8/c39de0-6e13-485b-ba45-66511170c62a/original/SS_Commuter.jpg" width="100%" />
                                <h5 className="mt-3">10,000+ cities</h5>
                                <p>The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.</p>
                                <button className="btn btn-dark mt-2 mb-5 px-3 py-2">Search Cities</button>
                            </div>
                        </div>

                  </div>
                </div>
              </div>

{/*................Looking for business solutions..........  */}

              <div className="container-fluid bg-dark">
                 <div className="container">
                   <div className="row">
                     <div className="col-lg-5 col-md-6 mt-4 mb-5 lookingfor_business">
                       <div className="text-white">
                          <h1 className="text-white">Looking for business solutions?</h1>
                          <p>Get information about how companies leverage <span className="text-decoration-underline">Uber for Business :</span> 
                             <ul className="text-decoration-underline lookingfor_business_list ">
                               <li> <span>Business travel</span> </li>
                               <li> <span>Courtesy rides</span> </li>
                               <li> <span>Meal programs</span> </li>
                               <li> <span>Item delivery</span> </li>
                             </ul>
                           </p>

                          <div className="d-flex align-content-center checkout_solution">
                               <button className="btn text-dark">Get started</button>
                               <p className="ms-4 text-decoration-underline text-center">Check out our solutions</p>
                          </div>
                       </div>
                     </div>

                     <div className="col-lg-6 col-md-6 mt-5 mb-5">
                       <div>
                         <img className="text-center" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_648,w_1152/v1691776332/assets/d6/48f5b6-bb5f-450e-8733-90aefecbd09e/original/U4B_Spot_U4BWebsite.jpg" width="100%" />
                       </div>
                     </div>
                   </div>
                 </div>
              </div>
                 

{/*....................>>>>>>>>>>>>>>>>>Frequently Asked Questions<<<<<<<<<<<<<<<<<....................... */}
              <div className="container-fluid">
                <div className="container mt-5">
                    <div className="row">
                        <h2>Frequently asked questions</h2>
                         <div class="accordion accordion-flush mt-4" id="accordionFlushExample">
                            <div class="accordion-item">
                              <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                  Can I have a lost item delivered to me?
                                </button>
                              </h2>
                              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body mt-4">
                                    <p>The Uber app helps provide a delivery solution that can save you a trip across town, whether it’s for a last-minute birthday gift or your forgotten keys. Just choose Package in the Uber app.</p>
                                   <button className="btn"><p>Get Details</p></button>
                                </div>
                              </div>
                            </div>

                            <div class="accordion-item">
                              <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                  Can I rent a car using Uber?
                                </button>
                              </h2>
                              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body mt-4">
                                    <p>Yes.<span className="text-decoration-underline">Find out more</span>  about how car rentals work.</p>        
                                </div>
                              </div>
                            </div>

                            <div class="accordion-item">
                              <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                  Can I request a ride that picks up friends i different locations?
                                </button>
                              </h2>
                              <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body mt-4">
                                    <p>Yes. Set up a group ride in the Uber app, invite your friends, and arrive at your destination together.</p>
                                    <button className="btn text-decoration-underline">Learn more</button>
                                </div>
                              </div>
                            </div>

                            <div class="accordion-item">
                              <h2 class="accordion-header" id="flush-headingFour">
                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                  Can I request a taxi on Uber?
                                </button>
                              </h2>
                              <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body mt-4">
                                    <p>Uber makes it easy to get a taxi nearby in the cities where Uber Taxi is available. There’s no need to find a cab stand, hail a cab on the street, or even call the local cab company. Instead, you can use the Uber app or website to request a taxi in just a few taps or clicks.</p>
                                    <button className="btn text-decoration-underline">Learn about requesting taxi</button>
                                </div>
                              </div>
                            </div>

                            <div class="accordion-item mb-5">
                              <h2 class="accordion-header" id="flush-headingFive">
                                <button class="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                  Is there an Uber ride option for 5 people?
                                </button>
                              </h2>
                              <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body mt-4">
                                    <p>Request UberXL for a van or SUV that fits up to 6 people at an affordable price. It’s perfect for a family trip or a ride to the airport.</p>
                                    <button className="btn text-decoration-underline">Get details About UberXL</button>
                                </div>
                              </div>
                            </div>
                         </div>

{/*. ..............................>>>>>>>>>>>>>>>>>> Do More in the App<<<<<<<<<<<<<<<<<<<<<...................... */}

                         {/* <h2>Do more in the app</h2>
                           <div className="col-lg-5 mt-3 domore_inapp me-5">
                              <div>
                                  <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_225,w_225/v1690807720/assets/a5/9986ad-0d9f-4396-8539-389bce97f579/original/Final-Download-Uber-App.png" width={150} />
                              </div>
                              <div className="more_inapp_download ms-3"> 
                                  <h5>Download the Uber app</h5>
                                  <p>Scan to download</p>
                              </div>
                              <div className="more_inapp_download ms-3">
                                <h4> <i class="fa-solid fa-arrow-right"></i> </h4>
                              </div>
                           </div>

                           <div className="col-lg-5 mt-3 ms-5 more_inapp">
                              <div className="more_inapp_download">
                                  <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_225,w_225/v1690810558/assets/e2/4f1914-1e23-4896-ad77-22e88c37c2f9/original/Rider-App-Icon_iOS.svg" width={150} />
                              </div>
                              <div className="more_inapp_download">
                                  <h5>Sign up to ride </h5>
                              </div>
                              <div className="more_inapp_download">
                              <h4><i class="fa-solid fa-arrow-right"></i></h4>
                              </div>
                           </div> */}

                    </div>
                </div>
              </div>
                    <div className="container-fluid domore_conatiner_fluid">
                      <div className="container mt-5">
                         <div className="row g-3 mb-4">
                            <h2 className=" fw-bold mt-5">Do more in the App</h2>
                           <div className="col-lg-6 col-md-12 col-sm-6 domore_inapp mb-5">
                             <div className="domore_inapp_download">
                               <div className="col-3 m-3">
                                  <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_225,w_225/v1690807720/assets/a5/9986ad-0d9f-4396-8539-389bce97f579/original/Final-Download-Uber-App.png" width={150} />
                                </div>
                                <div className="col-4 more_inapp_download m-3"> 
                                  <h5>Download the Uber app</h5>
                                  <p>Scan to download</p>
                                </div>
                                <div className="col-1 more_inapp_download text-end m-3">
                                  <h4> <i class="fa-solid fa-arrow-right"></i> </h4>
                                </div>
                             </div>
                           </div>
    
                           <div className="col-lg-6 col-md-12 col-sm-4 domore_inapp mb-5">
                             <div className="domore_inapp_download">
                               <div className="col-3 m-3">
                                  <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,h_225,w_225/v1690810558/assets/e2/4f1914-1e23-4896-ad77-22e88c37c2f9/original/Rider-App-Icon_iOS.svg" width={150} />
                                </div>
                                <div className="col-4 more_inapp_download m-3"> 
                                  <h5>Sign up to ride</h5>
                                </div>
                                <div className="col-1 text-end more_inapp_download m-3">
                                  <h4> <i class="fa-solid fa-arrow-right"></i> </h4>
                                </div>
                             </div>
                           </div>

                         </div>
                      </div>
                    </div>

{/* ..................Sign up to Ride................ */}
                        
                         <div className="container mt-5">
                           <div className="row">
                              <div className="col-6 signup_ride">
                                <div className="d-flex justify-content-between">
                                  <h2>Sign up to Ride</h2>
                                  <h4> <i class="fa-solid fa-arrow-right"></i> </h4>
                                </div>
                                <hr/>
                              </div>
                                <p className="mt-5 fw-light ">Certain requirements and features vary by country, region, and city.</p>
                           </div>
                         </div>

                         <Footer/>


        </>
    )
}

export default Body;