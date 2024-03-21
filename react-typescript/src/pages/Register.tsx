function Register() {
  return (
    <section className='vh-100'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-6 px-0 d-none d-sm-block'>
            <img
              src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3e2c9d42940979.57dd87848cf8c.png'
              alt='Login image'
              className='w-100 vh-100'
              style={{ objectFit: 'cover', objectPosition: 'left' }}
            />
          </div>
          <div className='col-sm-6 text-black'>
            <div className='px-5 ms-xl-4'></div>
            <div className='d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5'>
              <form style={{ width: '23rem' }}>
                <h3 className='fw-normal mb-3 pb-3' style={{ letterSpacing: 1 }}>
                  Đăng ký
                </h3>
                <div className='form-outline mb-4'>
                  <input type='email' id='form2Example18' className='form-control form-control-lg' />
                  <label className='form-label' htmlFor='form2Example18'>
                    Your name
                  </label>
                </div>
                <div className='form-outline mb-4'>
                  <input type='password' id='form2Example28' className='form-control form-control-lg' />
                  <label className='form-label' htmlFor='form2Example28'>
                    Your email
                  </label>
                </div>
                <div className='form-outline mb-4'>
                  <input type='password' id='form2Example28' className='form-control form-control-lg' />
                  <label className='form-label' htmlFor='form2Example28'>
                    Your password
                  </label>
                </div>
                <div className='form-outline mb-4'>
                  <input type='password' id='form2Example28' className='form-control form-control-lg' />
                  <label className='form-label' htmlFor='form2Example28'>
                    Repeat your password
                  </label>
                </div>
                <div className='pt-1 mb-4'>
                  <button className='btn btn-info btn-lg btn-block' type='button'>
                    Login
                  </button>
                </div>

                <p>
                  Do have an account?{' '}
                  <a href='#!' className='link-info'>
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
