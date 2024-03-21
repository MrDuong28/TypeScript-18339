import Banner from '~/components/Banner'

// import Header from '~/components/Header'
import ProductList from '~/components/productList'

type Props = {}
const Home = (props: Props) => {
  return (
    <div>
      <Banner />
      <ProductList />
    </div>
  )
}

export default Home
