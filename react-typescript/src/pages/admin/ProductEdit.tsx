import { TProduct } from '~/interfaces/TProduct'
import { useForm, SubmitHandler } from 'react-hook-form'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '~/apis/product'

type Props = {
  onEdit: (product: TProduct) => void
}
const schemaProduct = Joi.object({
  title: Joi.string().required().min(3).max(255),
  price: Joi.number().required().min(0),
  description: Joi.string().allow(''),
  thumbnail: Joi.string().required().label('thumbnail')
})

const ProductEdit = ({ onEdit }: Props) => {
  const [product, setProduct] = useState<TProduct | null>(null)
  const { id } = useParams()
  useEffect(() => {
    ;(async () => {
      const data = await getProduct(Number(id))
      setProduct(data)
    })()
  }, [id])
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TProduct>({
    resolver: joiResolver(schemaProduct)
  })

  const onSubmit: SubmitHandler<TProduct> = (data: TProduct) => {
    onEdit({ ...data, id })
  }
  return (
    <div className='container'>
      <form className='form-add' onSubmit={handleSubmit(onSubmit)}>
        <h2 className='text-sp'>Sửa sản phẩm</h2>
        <div className='form-group'>
          <label htmlFor='title'>Name</label>
          <input
            type='text'
            className='form-control'
            id='title'
            defaultValue={product?.title}
            placeholder='Nhập tên sản phẩm'
            {...register('title', { required: true, minLength: 3, maxLength: 100 })}
          />
          {errors.title && <span className='text-danger'>{errors.title.message}</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Price</label>
          <input
            type='text'
            className='form-control'
            id='price'
            defaultValue={product?.price as number}
            placeholder='Nhập giá sản phẩm'
            {...register('price', { required: true, min: 0 })}
          />
          {errors.price && <span className='text-danger'>{errors.price.message}</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='thumbnail'>Image</label>
          <input
            type='text'
            className='form-control'
            id='thumbnail'
            defaultValue={product?.thumbnail}
            placeholder='Đia chỉ hình ảnh'
            {...register('thumbnail', { required: true, min: 0 })}
          />
          {errors.thumbnail && <span className='text-danger'>{errors.thumbnail.message}</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            className='form-control'
            id='description'
            defaultValue={product?.description}
            placeholder='Nhập mô tả'
            {...register('description')}
          />
        </div>
        <button type='submit' className='btn btn-primary w-100'>
          Sửa
        </button>
      </form>
    </div>
  )
}

export default ProductEdit
