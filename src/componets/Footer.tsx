import { MDBFooter } from 'mdb-react-ui-kit'
import React from 'react'

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(235, 94, 40)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          CMH Cakes
        </a>
      </div>
    </MDBFooter>
  )
}
