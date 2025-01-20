import React from "react";

const Ride = () => {

    return(
        <>
             <div className="container-fluid">
                 <div className="container">
                     <div className="row mt-3">
                          <ul className="nav nav-tabs" id="myTab" role="tablist">
                             <li className="nav-item" role="presentation">
                               <button className="nav-link active text-dark" id="ride-tab" data-bs-toggle="tab" data-bs-target="#ride" type="button" role="tab" aria-controls="ride" aria-selected="true"><i class="fa-solid fa-car-side"></i> Ride</button>
                             </li>
                             <li className="nav-item" role="presentation">
                               <button className="nav-link text-dark" id="package-tab" data-bs-toggle="tab" data-bs-target="#package" type="button" role="tab" aria-controls="package" aria-selected="false"><i class="fa-solid fa-cube"></i> Package</button>
                             </li>
                             <li className="nav-item" role="presentation">
                               <button className="nav-link text-dark" id="rentals-tab" data-bs-toggle="tab" data-bs-target="#rentals" type="button" role="tab" aria-controls="rentals" aria-selected="false"><i class="fa-solid fa-truck-moving"></i> Rentals</button>
                             </li>
                             <li className="nav-item" role="presentation">
                               <button className="nav-link text-dark" id="shuttle-tab" data-bs-toggle="tab" data-bs-target="#shuttle" type="button" role="tab" aria-controls="shuttle" aria-selected="false"><i class="fa-solid fa-bus"></i> Shuttle</button>
                             </li>
                           </ul>
                           <div className="tab-content" id="myTabContent">
                             <div className="tab-pane fade show active" id="ride" role="tabpanel" aria-labelledby="ride-tab">
                                <div className="row mt-4">
                                    <div className="col-lg-6 col-sm-12  getride">
                                        <div className="getride_div">
                                            <h5>Get ride</h5>
                                            <form>
                                                <i class="fa-solid fa-location-dot"></i>
                                                <input type="text" className="form-control" placeholder="Pickup locaton" />
                                                <i class="fa-solid fa-location-arrow"></i>
                                                <input type="text" className="form-control" placeholder="Dropoff locaton" />
                                                <a href="#" className="text-decoration-none text-dark"> <i class="fa-solid fa-circle-plus cirlceplus"></i> </a>
                                                <a href="#" className="text-decoration-none text-dark pickupnow"> <i class="fa-solid fa-clock"></i>
                                                <input type="text" className="form-control" placeholder="Pickup now" /></a>
                                            </form>
                                            <button className="btn mt-3 formebutn"><i class="fa-solid fa-address-book"></i> For me</button>
                                            <button className="btn mt-3 mx-auto searchbutn">Search</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60889.73313125585!2d78.4334848!3d17.4784512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1735665201351!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </div>
                                </div>
                             </div>
                             
                             <div class="tab-pane fade" id="package" role="tabpanel" aria-labelledby="package-tab">
                               <div className="container">
                                 <div className="row mt-4">
                                   <div className="col-lg-6 col-sm-12 package">
                                     <div className="package_div">
                                       <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-plan/c824e49b7d43abd5.jpg" className="w-100" />
                                       <button className="btn mt-3 searchbutn">Search</button>
                                     </div>
                                   </div>
                                   <div className="col-lg-6 col-sm-12">
                                     <div>
                                     <  iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60889.73313125585!2d78.4334848!3d17.4784512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1735665201351!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>

                             <div class="tab-pane fade" id="rentals" role="tabpanel" aria-labelledby="rentals-tab">
                               <div className="conatiner">
                                 <div className="row mt-4">
                                   <div className="col-lg-6 col-sm-12">
                                     <div>
                                       <img src="https://mobile-content.uber.com/shared-rides/hourly_illustration.png" className="w-100"/>
                                     </div>
                                   </div>
                                   <div className="col-lg-6 col-sm-12">
                                     <div>
                                       <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60889.73313125585!2d78.4334848!3d17.4784512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1735665201351!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>

                             <div class="tab-pane fade" id="shuttle" role="tabpanel" aria-labelledby="shuttle-tab">
                               <div className="container">
                                 <div className="row mt-4">
                                   <div className="col-lg-6 col-sm-12 getride">
                                     <div className="getride_div">
                                        <h5>Search routes between</h5>
                                        <form>
                                            <i class="fa-solid fa-location-dot"></i>
                                            <input type="text" className="form-control" placeholder="Pickup locaton" />
                                            <i class="fa-solid fa-location-arrow"></i>
                                            <input type="text" className="form-control" placeholder="Dropoff locaton" />
                                        </form>
                                     </div>
                                     <div className="d-flex justify-content-between  p-3 shuttle_butn">
                                        <div>
                                        <h6>Explore routes near you</h6>
                                        <p>0+ routes available</p>
                                        </div>
                                        <div>
                                          <button className="btn btn-secondary">View All</button>
                                        </div>
                                     </div>
                                   </div>
                                   <div className="col-lg-6 col-sm-12">
                                     <div>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60889.73313125585!2d78.4334848!3d17.4784512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1735665201351!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                     </div>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                     </div>
                 </div>
             </div>
        </>
    )
}

export default Ride;