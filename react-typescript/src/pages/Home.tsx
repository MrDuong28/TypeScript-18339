import Banner from '~/components/Banner'
import Footer from '~/components/Footer'
// import Header from '~/components/Header'
import ProductList from '~/components/productList'

type Props = {}
const Home = (props: Props) => {
  return (
    <div>
      <Banner />
      <ProductList />
      <Footer />
    </div>
  )
}

export default Home
