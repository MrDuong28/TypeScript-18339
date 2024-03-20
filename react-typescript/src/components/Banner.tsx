import Carousel from 'react-bootstrap/Carousel'

function Banner() {
  return (
    <Carousel data-bs-theme='white'>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://i.pinimg.com/originals/fa/45/96/fa4596ad9a9d39901eeb455ed4f74e44.jpg'
          alt='First slide'
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://www.sneakerbaas.com/cdn/shop/collections/Brand_banner_NIKE_462543bb-f65a-4fea-852a-60bf2015b8b9.jpg?v=1668086262'
          alt='Seco nd slide'
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          src='https://cdna.artstation.com/p/assets/video_clips/images/040/796/044/large/jatin-samel-thumb.jpg?1629900834'
          alt='Third slide'
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Banner
