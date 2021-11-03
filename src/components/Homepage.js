import React from 'react';

function Home(desserts){
    return(
      <div className="container">
        <div className="row">
            <img src={desserts.image} alt={desserts.description} />
        </div>
      </div>
    );
}

export default Home;