import { v4 as uuid } from "uuid";


export const productList = [{
    id: uuid(),
    title: "Portable SSD T7 USB 3.2 2TB",
    description: "Create. Explore. Store. The T7 Portable SSD delivers fast speeds and durable features to back up any endeavor. Build your video-editing empire, file your photographs or back up your blogs all in an instant.",
    imageURL: "https://images.unsplash.com/photo-1659543038858-9673fc324a89?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "169.99",
    priceAfterSale: "99,99",
    colors: ["#2189FF", "#C7C8CA", "#CC5952"],
    sale: true,
    category: {
        name: "Hard Drives",
        imageURL: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?q=80&w=2616&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
}, {
    id: uuid(),
    title: "Galaxy Buds Live",
    description: "The earbud designed to tune in to every moment. With an iconic shape and ergonomic design, a fit that lets in your natural surroundings, and a speaker optimized for a better experience. This is sound made for your ears.",
    imageURL: "https://images.squarespace-cdn.com/content/v1/5beb251ab40b9dd2724c2f46/1316060a-39b4-482b-9ee5-e15045a78e7d/Samsung+Galaxy+Buds+Live+2+2022+review.jpg",
    price: "500",
    priceAfterSale: undefined,
    colors: ["#9A716E", "#3C3934", "#DAD9DB"],
    sale: false,
    category: {
        name: "HeadPhones",
        imageURL: "https://images.unsplash.com/photo-1698296725423-9ede5de2d624?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
}, {
    id: uuid(),
    title: "Polo T-shirt",
    description: "The T-shirt model, made of 100% cotton piqué fabric, is one of the pieces that provide comfort for hot weather with its breathing texture and thin structure.",
    imageURL: "https://images.unsplash.com/photo-1714317438040-0e8584215699?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "20",
    priceAfterSale: "14,99",
    colors: ["#1C1A1D", "#FBCBC2", "#6E6872", "#FAFAFA", "#FF0032"],
    sale: true,
    category: {
        name: "Clothes",
        imageURL: "https://images.unsplash.com/photo-1523199455310-87b16c0eed11?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
}, {
    id: uuid(),
    title: "Iphone 15 Pro Max",
    description: "Introducing the iPhone 15 Pro, a remarkable innovation that showcases an aerospace-grade titanium construction, employing the same high-performance alloy found in spacecraft engineered for journeys to Mars.",
    imageURL: "https://images.unsplash.com/photo-1695639509828-d4260075e370?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1200",
    priceAfterSale: undefined,
    colors: ["#AEAAA1", "#494947", "#3C2A21", "#585E6E", "#ECEAE3"],
    sale: false,
    category: {
        name: "Phones",
        imageURL: "https://images.unsplash.com/photo-1584206863352-ce8b3a1c10e3?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
}, {
    id: uuid(),
    title: "Nike Shoes",
    description: "As luxury T-Shirt is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageURL: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "120",
    priceAfterSale: "99,99",
    colors: ["#A31ACB", "#FF6E31", "#3C2A21", "#CB1C8D", "#645CBB", "#FF0032", "#820000", "#13005A", "#1F8A70", "#84D2C5"],
    sale: true,
    category: {
        name: "Shoes",
        imageURL: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
}, {
    id: uuid(),
    title: "Ather 450 Apex TM",
    description: "ADo you feel the spark ⚡⚡ Ather Energy is building India's best and largest EV network. If you'd like to use one of our photos in an article or communication that promotes Electric Vehicles, just reach out 😀",
    imageURL: "https://images.unsplash.com/photo-1648204834832-78e68052c04f?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "5000",
    priceAfterSale: "4500",
    colors: ["#082899", "#DD5906", "#2B3030"],
    sale: true,
    category: {
        name: "Electric Scooters",
        imageURL: "https://images.unsplash.com/photo-1621447108182-92ad9852acd6?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
}, {
    id: uuid(),
    title: "Chevrolet Spark. 995cc Petrol",
    description: "As luxury brands go, South Korea’s Genesis is still in its infancy, having sold its first cars (as an independent Hyundai spinoff), the G80 and G90 sedans, for the 2017 model year. Despite its relative youth, Genesis has had a string of successes: We named the automaker’s G70 sports sedan our Best of 2019 award winner, and its GV80 mid-size SUV was a nominee last year for our Best of the Year award. New for 2022, the GV70 compact luxury SUV impresses on a number of fronts. Sleek exterior styling bridges the gap between a traditional SUV and the coupelike SUV look that’s increasingly popular among luxury marques. The cabin is just as distinctive and can be trimmed with premium materials like Nappa leather and carbon fiber.",
    imageURL: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    price: "120000",
    priceAfterSale: undefined,
    sale: false,
    colors: ["#A31ACB", "#3C2A21", "#1F8A70", "#820000", "#FF0032"],
    category: {
        name: "Cars",
        imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
}, {
    id: uuid(),
    title: "Samsung Galaxy s24",
    description: "Explore the specs for Samsung Galaxy S24 and S24+, including color availability, display size, camera features, storage options, battery life and more.",
    imageURL: "https://images.unsplash.com/photo-1706469980834-36cc556c02c2?q=80&w=2968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "1500",
    colors: ["#EDDDB2", "#443E56", "#585755", "#948E86"],
    sale: false,
    category: {
        name: "Phones",
        imageURL: "https://images.unsplash.com/photo-1584206863352-ce8b3a1c10e3?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
}];


export const formInputsList = [{
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text"
}, {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text"
}, {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text"
}, {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text"
}];


export const colors = ["#a855f7", "#2563eb", "#84D2C5", "#13005A", "#A31ACB", "#FF6E31", "#3C2A21", "#6C4AB6", "#CB1C8D", "#000000", "#645CBB"];


export const categories = [{
    id: uuid(),
    name: "HardDrives",
    imageURL: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?q=80&w=2616&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}, {
    id: uuid(),
    name: "HeadPhones",
    imageURL: "https://images.unsplash.com/photo-1698296725423-9ede5de2d624?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}, {
    id: uuid(),
    name: "Clothes",
    imageURL: "https://images.unsplash.com/photo-1523199455310-87b16c0eed11?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}, {
    id: uuid(),
    name: "Phones",
    imageURL: "https://images.unsplash.com/photo-1584206863352-ce8b3a1c10e3?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}, {
    id: uuid(),
    name: "Shoes",
    imageURL: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
}, {
    id: uuid(),
    name: "ElectricScooters",
    imageURL: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
}, {
    id: uuid(),
    name: "Cars",
    imageURL: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
}];
