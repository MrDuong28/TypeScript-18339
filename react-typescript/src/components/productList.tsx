import { TProduct } from '~/interfaces/TProduct'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
function ProductList() {
  // ! Dump component va smart component
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {
    // Cach 1:
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProducts(data)
      })

    // Cach 2:
    // const getProducts = async () => {
    //   try {
    //     const { data } = await instance.get('/products')
    //     console.log(data)
    //     setProducts(data)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // getProducts()
  }, [])

  // ! DependencyList = Danh sách phụ thuộc

  return products.map((product) => (
    <div className='product-container'>
      <Card style={{ width: '20rem' }}>
        <Card.Img width={100} src={product.thumbnail} alt={product.title} />
        <Card.Body>
          <div className='title'>
            {' '}
            <Card.Title>{product.title}</Card.Title>{' '}
          </div>
          <Card.Text className='description'>{product.description}</Card.Text>
          <div className='price'>
            {' '}
            <Card.Text>{product.price}</Card.Text>
          </div>
          <div className='button'>
            <Button variant='dark'>Đặt hàng</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  ))
}

export default ProductList
