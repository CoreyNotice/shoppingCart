import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../index.css';

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='row justify-content-center mt-3'>
      <div className='col-lg-8'>
        <div className='carousel-container'>
          <Carousel activeIndex={index} onSelect={handleSelect} fade>
            <Carousel.Item>
              <img className="carousel-image" src='/ca1.jpeg' alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="Second slide" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="carousel-image" src="https://stordfkenticomedia.blob.core.windows.net/df-us/rms/media/recipemediafiles/recipes/retail/x17/rainbow-cake760x580.jpg?ext=.jpg" alt="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;

