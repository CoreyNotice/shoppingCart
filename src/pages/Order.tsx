import React from 'react'
import '../index.css'
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import data from '../data/data.json'
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Order() {
  const navigate = useNavigate();

  return (
    <div>
        <main>
           <div className='row'><div className='col1'>
           <div className="container mt-auto">
            {data.map(info=>
           <CardGroup  className='h-100'>
           <Card key={info._id} className='h-100' onClick={() => navigate(`/Orders/${info._id}`)}>
            <div className='mt-auto'>
            <Card.Body>
                <Card.Title className='text-center'>{info.name}</Card.Title>
            <Card.Img className='card w-25  mx-auto' src={info.pic} alt={info.name} />
           </Card.Body>
           </div>
          </Card>
          </CardGroup>
            )}
           </div>
           </div></div>
        </main>
      

    </div>
  )
}

