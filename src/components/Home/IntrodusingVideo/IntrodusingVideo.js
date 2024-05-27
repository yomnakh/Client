import React from 'react'
import { Container,Button } from 'react-bootstrap'
import './IntrodusingVideo.css'

const IntrodusingVideo = () => {
  return (
    <div >
        <Container fluid className='imgVideo' >
        <Button 
      variant="link" 
      href="https://www.youtube.com/watch?v=YwrHGratByU" 
      
      style={{ fontSize: '60px', color: '#fff', textDecoration: 'none' }}
      className='videobtn'
    >
      <i className="fas fa-play-circle "></i>
    </Button>
        </Container>
    
    </div>
  )
}
export default IntrodusingVideo ;


