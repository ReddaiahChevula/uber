const MyCarousel = () => {
    const options = {
      loop: false,           
      margin: 10,            
      nav: true,             
      dots: false,         
      items: 4,              
      autoplay: true,        
      autoplayTimeout: 5000, 
      autoplayHoverPause: true, 
      responsive: {         
        0: {
          items: 1           
        },
        600: {
          items: 2           
        },
        1000: {
          items: 4        
        }
      },
      navText: ['<i class="fa-solid fa-chevron-left"></i>',
                 '<i class="fa-solid fa-chevron-right"></i>'
               ]
    };
    
<>
    <div className="container border rounded-5 mt-5 m-auto">
    <OwlCarousel className="owl-theme text-center" {...options}>
      <div className="item">
      <li><a href='#' className='text-decoration-none'>Home</a></li> 
      </div>
      <div className="item">
         <li><a href='#' className='text-decoration-none'>About</a></li>
      </div>
      <div className="item">
         <li><a href='#' className='text-decoration-none'>Contact</a></li>
      </div>
      <div className="item">
         <li><a href='#' className='text-decoration-none'>Services</a></li>
      </div>
      <div className="item">
         <li><a href='#' className='text-decoration-none'>Info</a></li>
      </div>
    </OwlCarousel>
  </div>
  
  <div className='container mt-4'>
  <ul class="nav nav-tabs" id="myTab" role="tablist">
     <li class="nav-item" role="presentation">
       <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
     </li>
     <li class="nav-item" role="presentation">
       <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
     </li>
     <li class="nav-item" role="presentation">
       <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
     </li>
  </ul>
     <div class="tab-content" id="myTabContent">
     <div class="tab-pane fade show active mt-2" id="home" role="tabpanel" aria-labelledby="home-tab">
      <h2 className='text-success'>Home</h2>
      <img src='https://th.bing.com/th/id/OIP.Z_PIeIRDajXPmZHROt-T_QHaEK?rs=1&pid=ImgDetMain' />
     </div>
     <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
      <h2 className='text-primary'>About</h2>
      <img src='https://th.bing.com/th/id/R.6e112b429c400fb3df62a2d355ff5cdb?rik=yazeICGBu8gn6Q&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f02%2f240837-nature-sunset-sea-waves-clouds-water-colorful.jpg&ehk=SdRGJAsJDHiO3AxtDlpjEHMXBZyHDOHN81mWIx0R1uk%3d&risl=&pid=ImgRaw&r=0' width="100%" />
     </div>
     <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
      <h2 className='text-secondary'>Contact</h2>
      <address>
        11/5/230,<br/>
        S.R Nagar,<br/>
        Hyderabad,<br/>
        Telangana-500018
      </address>
     </div>
</div>

  </div>

  </>
}