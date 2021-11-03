import React from 'react';

function Home(){
    return(
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={process.env.PUBLIC_URL + "/assets/images/mypic.jpg"} alt="Brownie images" />
          </div>
        </div>
        <div className="row">

        </div>
      </div>
    );
}

export default Home;