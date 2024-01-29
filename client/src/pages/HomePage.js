import React,{useState,useEffect} from 'react';
import Layout from './../components/Layout/Layout';
import { useAuth } from '../context/auth';
import axios from 'axios';
const HomePage = () => {
  const [auth,setAuth] = useAuth();
  const [products,setProducts] = useState([])
  const [categories,setCategories] = useState([])

  //get products
  const getAllProducts = async()=>{
    try {
      const {data} = await axios.get('/api/v1/product/get-product')
      setProducts(data.products);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(()=>{
    getAllProducts();
  })



  return (
    <Layout title={"All Product - Best Offers"}>
      <div className='row mt-3'>
        <div className='col-md-3'>
          <h6 className='text-center'>Filter By Category</h6>
        </div>
        <div className='col-md-9'>
          <h1 className='text-center'>All products List</h1>
          <div className='d-flex flex-wrap'>
            <h1>Products</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;