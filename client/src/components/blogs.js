import React from "react";
import img1 from "./assets/img/NY11.jpg";
import img2 from "./assets/img/02.jpg";
import img3 from "./assets/img/03.jpg";

function Blog() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img className="rounded-circle img-fluid" src={img1} />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">New York</h2>
                <p>
                New York City is a vibrant and iconic destination that offers something for everyone. Known as the "City that Never Sleeps," it offers endless entertainment options, iconic landmarks, world-renowned cuisine and shopping. Visitors can explore the city's history and culture at places like the Statue of Liberty, Empire State Building, Metropolitan Museum of Art and Central Park. New York is also famous for its Broadway shows, Times Square, and the vibrant neighborhoods like SoHo, Greenwich Village and Lower East side. Foodies will love the diverse array of options from street food to Michelin-starred restaurants and shopping enthusiasts will enjoy the high-end designer shops and trendy boutiques. New York City is a destination that offers endless possibilities and is a must-visit for any traveler.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <img className="rounded-circle img-fluid" src={img2} />
              </div>
            </div>
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <h2 className="display-4">Bangkok</h2>
                <p>
                Bangkok, also known as the "City of Angels," is the capital and most populous city of Thailand. It is known for its bustling streets, vibrant nightlife, and delicious street food. Visitors can explore the historic Grand Palace and Wat Arun, also known as the Temple of Dawn, and take a boat tour along the Chao Phraya River. Shopping enthusiasts can visit the famous Chatuchak Weekend Market, or indulge in luxury at one of the city's many high-end malls. Bangkok is also a great starting point for exploring the rest of Thailand, with easy access to destinations like Ayutthaya and Pattaya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="p-5">
                <img className="rounded-circle img-fluid" src={img3} />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-5">
                <h2 className="display-4">Thailand</h2>
                <p>
                Thailand, also known as the "Land of Smiles," is a popular travel destination known for its stunning beaches, ancient temples, and delicious food. Visitors can explore the bustling capital city of Bangkok, with its historic temples and vibrant street life, or head to the tropical islands of Phuket, Koh Samui, and Koh Phi Phi for relaxation and water activities. Northern Thailand offers a different experience with its lush mountains, hill tribes, and ancient cities like Chiang Mai and Chiang Rai. The country is also famous for its rich culture and history, delicious street food and night markets, and traditional Thai massage and spa. Whether you're looking for relaxation, adventure or cultural experiences, Thailand has something to offer for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
