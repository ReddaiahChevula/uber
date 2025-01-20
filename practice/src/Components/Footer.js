import react from "react";

const Footer = () =>{


    return(
        <>

         <div className="container-fluid footer_main">
            <div className="container">
                <div className="row">
                    <div className="text-white">
                        <h3 className="mt-3">Uber</h3>
                        <h4 className="mt-4">Visit Help Center</h4>
                    </div>
                    {/* <div className="d-flex justify-around"> */}
                        <div className="col-lg-3 col-md-6 col-sm-12 mt-5 footer_company">
                            <div>
                                <h4 className="text-white">Company</h4>
                                <p className="mt-3"><a className="text-decoration-none" href="#">About us</a></p>
                                <p><a className="text-decoration-none" href="#">Our offerings</a></p>
                                <p><a className="text-decoration-none" href="#">News room</a></p>
                                <p><a className="text-decoration-none" href="#">Investors</a></p>
                                <p><a className="text-decoration-none" href="#">Blog</a></p>
                                <p><a className="text-decoration-none" href="#">Careers</a></p>
                            </div>
                        </div>
    
                        <div className="col-lg-3 col-md-6 col-sm-12 mt-5 footer_company">
                            <div>
                                <h4 className="text-white">Products</h4>
                                <p className="mt-3"><a className="text-decoration-none" href="#">Ride</a></p>
                                <p><a className="text-decoration-none" href="#">Drive</a></p>
                                <p><a className="text-decoration-none" href="#">Deliver</a></p>
                                <p><a className="text-decoration-none" href="#">Eat</a></p>
                                <p><a className="text-decoration-none" href="#">Uber or Business</a></p>
                                <p><a className="text-decoration-none" href="#">Uber Freight</a></p>
                                <p><a className="text-decoration-none" href="#">Gift Cards</a></p>
                            </div>
                        </div>
    
                        <div className="col-lg-3 col-md-6 col-sm-12 mt-5 footer_company">
                            <div>
                                <h4 className="text-white">Global Citizenhip</h4>
                                <p className="mt-3"><a className="text-decoration-none" href="#">Safety</a></p>
                                <p><a className="text-decoration-none" href="#">Diversity and Inclusion</a></p>
                                <p><a className="text-decoration-none" href="#">Sustainability</a></p>
                            </div>
                        </div>
    
                        <div className="col-lg-3 col-md-6 col-sm-12 mt-5 footer_company">
                            <div>
                                <h4 className="text-white">Travel</h4>
                                <p className="mt-3"><a className="text-decoration-none" href="#">Reserve</a></p>
                                <p><a className="text-decoration-none" href="#">Cities</a></p>
                            </div>
                        </div>
                    {/* </div> */}

                    

                    <div className="col-lg-5 col-md-8 col-sm-10 mt-5 mb-5 footer_socialmedia">
                        <div className="socialmedia_icons">
                            <a href="#" className="text-decoration-none"> <i class="fa-brands fa-square-facebook"></i> </a>
                            <a href="#" className="text-decoration-none"> <i class="fa-brands fa-x-twitter"></i> </a>
                            <a href="#" className="text-decoration-none"> <i class="fa-brands fa-youtube"></i> </a>
                            <a href="#" className="text-decoration-none"> <i class="fa-brands fa-linkedin"></i> </a>
                            <a href="#" className="text-decoration-none"> <i class="fa-brands fa-instagram"></i> </a>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12 mt-5 footer_loaction">
                        <div className="footer_loaction_icon">
                            <a href="#" className="text-decoration-none"> <i class="fa-solid fa-globe"></i>&nbsp; English </a> &nbsp;&nbsp;&nbsp;
                            <a href="#" className="text-decoration-none"> <i class="fa-solid fa-location-dot"></i> &nbsp;Hyderabad </a>
                        </div>
                    </div>

                    <div className="col-12 footer_googleplay_download">
                        <div className="footer_googleplay_download_img">
                            <a href="#" className="text-decoration-none"> <img src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg" width={100} /> </a>&nbsp;
                            <a href="#"className="text-decoration-none" > <img src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg" width={100} /> </a>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                        <div className="text-secondary footer_copyrights">
                            <i class="fa-regular fa-copyright"></i> 2024 Uber Technologies Inc.
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                        <div className="footer_privacy">
                            <a href="#" className="text-decoration-none"> <p>Privacy</p> </a>
                            <a href="#" className="text-decoration-none"> <p>Accessbility</p> </a>
                            <a href="#" className="text-decoration-none"> <p>Terms</p> </a>
                        </div>
                    </div>


                </div>
            </div>
         </div>


        </>
    )
}

export default Footer;