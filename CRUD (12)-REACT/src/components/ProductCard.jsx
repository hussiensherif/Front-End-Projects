/* eslint-disable react/prop-types */
import Image from './image';
import Button from './ui/button';

function ProductCard({ product }) {
    return (
        <div className="border rounded-md p-2 flex flex-col">
            {product.sale == true ? <div className="w-auto px-2 bg-red-500 absolute rounded-ee text-white text-lg">Sale</div> : ''}
            <Image imageURL={product.imageURL} alt={"Product Name"} className={"w-full rounded-sm mb-2 cursor-pointer h-48 object-cover"} />
            <h3 className="text-md font-bold">{product.title}</h3>
            <p className="text-gray-500">{product.description.substring(0, 105) + '...'}</p>
            <div className="flex items-center cursor-pointer my-3 space-x-2">
                {product.colors.map((color, index) => (<span key={index} style={{ background: color }} className="w-5 h-5 rounded-full border-2"></span>))}
            </div>
            <div className="flex items-center justify-between">
                <span className="font-bold text-orange-700">${parseInt(product.price).toLocaleString()}</span>
                <div className="flex items-center space-x-2">
                    <span className="font-light text-gray-500 text-sm">{product.category.name}</span>
                    <Image imageURL={product.category.imageURL} alt={product.category.name} className={"object-cover w-10 h-10 rounded-full"} />
                </div>
            </div>
            <div className="flex items-center justify-evenly space-x-2 mt-3">
                <Button className="bg-orange-500  hover:bg-orange-700 w-full">Edit</Button>
                <Button className="bg-red-600 hover:bg-red-800 w-full">Delete</Button>
            </div>
        </div>
    )
}

export default ProductCard