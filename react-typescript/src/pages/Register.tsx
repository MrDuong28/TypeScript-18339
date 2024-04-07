import { User } from '~/interfaces/user'
import { useForm, SubmitHandler } from 'react-hook-form'
import Joi from 'joi'
import { joiResolver } from '@hookform/resolvers/joi'
import instance from '~/apis'
import { useNavigate } from 'react-router-dom'

const schemaUser = Joi.object({
  email: Joi.string().required().email({ tlds: false }),
  password: Joi.string().required().min(6)
})
const Register = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({
    resolver: joiResolver(schemaUser)
  })

  const onSubmit = (user: User) => {
    ;(async () => {
      const { data } = await instance.post(`/register`, user)
      console.log(data)
      if (data.user) {
        const isConfirm = confirm('Đăng ký thành công')
        if (isConfirm) {
          navigate('/login')
        }
      }
    })()
  }

  return (
    <section className='vh-100'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-6 px-0 d-none d-sm-block'>
            <img
              src='https://i.pinimg.com/originals/c1/93/b6/c193b603f82348383a8a134752a03810.jpg'
              alt='Login image'
              className='w-100 vh-100'
              style={{ objectFit: 'cover', objectPosition: 'left' }}
            />
          </div>
          <div className='col-sm-6 text-black'>
            <div className='px-5 ms-xl-4'></div>
            <div className='d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5'>
              <form style={{ width: '23rem' }} onSubmit={handleSubmit(onSubmit)}>
                <h3 className='fw-normal mb-3 pb-3' style={{ letterSpacing: 1 }}>
                  Đăng ký
                </h3>

                <label className='form-label' htmlFor='form2Example18'>
                  Your Email
                </label>
                <div className='form-outline mb-4'>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    placeholder='Email'
                    {...register('email', { required: true })}
                  />
                  {errors.email && <span className='text-danger'>{errors.email.message}</span>}
                </div>
                <label className='form-label' htmlFor='form2Example28'>
                  Your password
                </label>
                <div className='form-outline mb-4'>
                  <input
                    type='password'
                    className='form-control'
                    id='password'
                    placeholder='Password'
                    {...register('password', { required: true, minLength: 6 })}
                  />
                  {errors.password && <span className='text-danger'>{errors.password.message}</span>}
                </div>

                <div className='pt-1 mb-4'>
                  <button type='submit' className='btn btn-info btn-lg btn-block'>
                    Đăng ký
                  </button>
                </div>
                <p>
                  Do have an account?{' '}
                  <a href='/login' className='link-info'>
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Register
