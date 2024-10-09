import { useState } from 'react'
import './App.css'
import { productList } from './components/data/Data'
import ProductCard from './components/ProductCard'
import Modal from './components/ui/modal'
import Button from './components/ui/button'
import { formInputsList } from '../src/components/data/Data'

function App() {

  // **-------STATE--------**
  const [isOpen, setIsOpen] = useState(false)

  
  const [product, setProduct] = useState({
    title: '',
    description: '',
    imgURL: '',
    price: '',
    colors: '',
    categories: {
      name: '',
      imageURL: '',
    }
  });

  // **-------HANDLER--------**
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value
    })
  }

  // **-------RENDER--------**
  const renderProductList = productList.map(product => (<ProductCard key={product.id} product={product} />))

  const renderFormInput = formInputsList.map((input) => (
    <div key={input.id} className='mb-2 text-sm font-medium text-gray-700 flex flex-col'>
      <label htmlFor={input.id}>{input.label}</label>
      <input value={''} onChange={onChangeHandler} type={input.type} name={input.name} id={input.id} className='mb-2 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-md' />
    </div>));

  return (
    <>
      {/* <div className='flex justify-end margin '>
    <Button onClick={openModal} className="bg-sky-600  hover:bg-sky-800 text-white w-fit px-2">Add Product</Button>
    </div> */}
      <main className='container mx-auto px-10'>
        <div className='mt-5 flex justify-between items-center'>
          <h2 className='font-extrabold text-3xl'>Latest <span className='text-red-600'>Product</span></h2>
          <Button onClick={openModal} className="bg-red-600  hover:bg-red-800 text-white w-fit px-3">Add Product</Button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 rounded-md'>
          {renderProductList}
        </div>
        <Modal isOpen={isOpen} closeModal={closeModal} title={"Add New Product."}>
          <div className='space-y-3'>
            {renderFormInput}
          </div>
          <div className='flex items-center space-x-3 mt-3'>
            <Button className="bg-green-600  hover:bg-green-800 text-white w-full">Submit</Button>
            <Button onClick={closeModal} className="bg-gray-600  hover:bg-gray-800 text-white w-full">Cancel</Button>
          </div>
        </Modal>
      </main>
    </>
  )
}

export default App
