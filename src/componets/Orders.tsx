import React, { useContext } from 'react'
import {Link, useParams} from 'react-router-dom';
import data from '../data/data.json'
import { Button, Card } from 'react-bootstrap';
import { Typography } from '@mui/material';
import { CurrencyDollarSimple } from 'phosphor-react';


export default function Orders() {

    const { id } = useParams<{ id: string }>();
  const info = data.find((x) => x._id === parseInt(id ?? '10'));
  if (!info){
    return(
      <div>Sorry this cakes is not found</div>
      )
    }
    const quantity=0
    
  return (
    <Card className='h-100'>
    <Card.Header>
      <Link to='/Order'>Back to Order Page</Link>
    </Card.Header>
  
    <Card.Body className='d-flex flex-column'>
        <Card.Title >
        <Typography align='center' variant='h5' >
          {info.name}
        </Typography>
          </Card.Title>
        <Card.Img className='w-50 mx-auto' src={info.pic} alt={info.name} style={{objectFit:"cover"}} />
        <Card.Text>
       <span className='text-muted'> <Typography variant='body1'>
        Price:
        <CurrencyDollarSimple size={12} />
         {info.price}
        </Typography></span>
        <span className='fs-2'><Typography variant='body1'>
        <p>{info.description}</p>      
        </Typography></span>
        </Card.Text>
       <div className='mt-auto'>
        {quantity ===0?(
          <Button className='w-100'>+ Add to Cart </Button>
        ):<div className='d-flex align-items-center flex-column' style={{gap:".5rem"}}>
          <div className='d-flex align-items-center justify-content-center' style={{gap:'.5rem'}}>
            <Button>+</Button>
            <div>
            <span className='fs-3'>{quantity}</span> in cart
            </div>
           <Button>-</Button>
        </div> 
        <Button variant='danger' size='sm'>Remove</Button>
     </div>}
     </div>
    </Card.Body>

  </Card>
   
    
  )

}
