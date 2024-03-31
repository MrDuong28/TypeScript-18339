import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import { Routes, Route, useNavigate } from 'react-router-dom'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import DashBoard from './pages/admin/DashBoard'
import { useEffect, useState } from 'react'
import { TProduct } from './interfaces/TProduct'
import ProductAdd from './pages/admin/ProductAdd'
import { createProduct, editProduct } from './apis/product'
import ProductEdit from './pages/admin/ProductEdit'

function App() {
  const [products, setProducts] = useState<TProduct[]>([])
  const navigate = useNavigate()
  useEffect(() => {
    // Cach 1:
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProducts(data)
      })
  }, [])
  const handleAdd = (product: TProduct) => {
    ;(async () => {
      const data = await createProduct(product)
      // setProducts((prev) => [...prev, data])
      setProducts([...products, data])
      navigate('/admin')
    })()
  }
  const handleEdit = (product: TProduct) => {
    ;(async () => {
      const data = await editProduct(product)

      setProducts(products.map((p) => (p.id === data.id ? data : p)))
    })()
    navigate('/admin')
  }
  return (
    <>
      <Header />
      <main className='container main'>
        <Routes>
          <Route path='/'>
            <Route index element={<Home products={products} />} />
            <Route path='/shop/:id' element={<ProductDetail />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
          <Route path='/admin'>
            <Route index element={<DashBoard products={products} />} />
            <Route path='/admin/add' element={<ProductAdd onAdd={handleAdd} />} />
            <Route path='/admin/edit/:id' element={<ProductEdit onEdit={handleEdit} />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
