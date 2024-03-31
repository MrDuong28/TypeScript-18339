import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TProduct } from '~/interfaces/TProduct'
import instance from '~/apis'

type Props = {}

const ProductDetail = (props: Props) => {
  const { id } = useParams()
  const [product, setProduct] = useState<TProduct | null>(null)
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await instance.get(`/products/${id}`)
      setProduct(data)
    }
    getProduct()
  }, [])
  return (
    <main className='container'>
      <div className='left-column'>
        <img src={product?.thumbnail} alt={product?.title} />
      </div>
      <div className='right-column'>
        <h2>{product?.title}</h2>
        <div>{product?.price}</div>
        <div className='des'>{product?.description}</div>
        <div>Con lai: {product?.stock}</div>
        <div>Rating: {product?.rating}</div>
      </div>
    </main>
  )
}
export default ProductDetail
