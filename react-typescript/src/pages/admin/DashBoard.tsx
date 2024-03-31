import { TProduct } from '~/interfaces/TProduct'
import { Link } from 'react-router-dom'

type Props = {
  products: TProduct[]
}

const Dashboard = ({ products }: Props) => {
  return (
    <div className='container'>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Thumbnail</th>
            <th>Description</th>
            <th>
              Action{' '}
              <Link className='btn btn-primary ' to='/admin/add'>
                Add
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <img width={140} src={item.thumbnail} alt={item.title} />
              </td>
              <td>{item.description}</td>
              <td>
                Action{' '}
                <Link className='btn btn-warning ' to={`/admin/edit/${item.id}`}>
                  Update
                </Link>
                <button className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
