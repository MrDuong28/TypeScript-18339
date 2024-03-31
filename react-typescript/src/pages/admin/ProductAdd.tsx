import { TProduct } from '~/interfaces/TProduct'
import { useForm, SubmitHandler } from 'react-hook-form'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'

type Props = {
  onAdd: (product: TProduct) => void
}
const schemaProduct = Joi.object({
  title: Joi.string().required().min(3).max(255),
  price: Joi.number().required().min(0),
  description: Joi.string().allow('')
})

const ProductAdd = ({ onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TProduct>({
    resolver: joiResolver(schemaProduct)
  })

  const onSubmit: SubmitHandler<TProduct> = (data) => {
    console.log(data)
    onAdd(data)
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)} className='form-add'>
        <h2 className='text-sp'>Thêm sản phẩm</h2>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            className='form-control'
            id='title'
            placeholder='Title'
            {...register('title', { required: true })}
          />
          {errors.title && <span className='text-danger'>{errors.title.message}</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            className='form-control'
            id='price'
            placeholder='Price'
            {...register('price', { required: true, min: 0 })}
          />
          {errors.price && <span className='text-danger'>{errors.price.message} </span>}
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            className='form-control'
            id='description'
            placeholder='Description'
            {...register('description')}
          />
        </div>

        <button type='submit' className='btn btn-primary w-100'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ProductAdd
