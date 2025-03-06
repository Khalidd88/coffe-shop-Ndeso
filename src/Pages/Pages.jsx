import React,{useState} from 'react'
import Hero from './Hero'
import TentangKami from './TentangKami'
import BestCOffee from './BestCOffee'
import Product from '../components/Product'
import { items } from '../components/Data'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'


 function Pages() {

  const [data,setData] = useState([...items])
  const [cart, setCart] = useState([])

  return (
    <>
  <Hero/>
  <TentangKami/>
  <BestCOffee/>
    </>
  )
}
export default Pages
