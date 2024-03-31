import Banner from '~/components/Banner'

// import Header from '~/components/Header'

import Button from 'react-bootstrap/Button'

import { TProduct } from '~/interfaces/TProduct'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
type Props = { products: TProduct[] }
const Home = ({ products }: Props) => {
  return (
    <div className='container'>
      <div className='sp'>
        {products.map((product) => (
          <Card style={{ width: '20rem' }}>
            <Link to={`/shop/${product.id}`}>
              <Card.Img width={100} src={product.thumbnail} alt={product.title} />
            </Link>
            <Card.Body>
              <div key={product.id}>
                <Link to={`/shop/${product.id}`}>
                  <div className='title'>
                    {' '}
                    <Card.Title>{product.title}</Card.Title>{' '}
                  </div>
                </Link>
                <Card.Text className='description'>{product.description}</Card.Text>
                <div className='price'>
                  {' '}
                  <Card.Text>{product.price}</Card.Text>
                </div>
                <div className='button'>
                  <Button variant='dark'>Đặt hàng</Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Home
