import Products from "./Products";

function ProductFeed({ products }) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -mt-16 md:-mt-24 lg:-mt-48 xl:-mt-96">
            {products
            .slice(0, 4)
            .map(({ id, title, price, description, category, image, widthvalue}) => (
                <Products
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                    widthvalue="200"
                />
            ))}
            <div className="md:col-span-2">
                {products
                    .slice(4, 5)
                    .map(({ id, title, price, description, category, image, widthvalue}) => (
                        <Products
                            key={id}
                            id={id}
                            title={title}
                            price={price}
                            description={description}
                            category={category}
                            image={image}
                            widthvalue="400"
                        />
                ))}
            </div>
            <div className="md:col-span-full p-4">
                <img className="rounded-lg mx-auto" src="ad_middle2.jpg" alt="" />
            </div>
            {products
                    .slice(5, 19)
                    .map(({ id, title, price, description, category, image}) => (
                        <Products
                            key={id}
                            id={id}
                            title={title}
                            price={price}
                            description={description}
                            category={category}
                            image={image}
                            widthvalue="200"
                        />
                ))}
            <div className="md:col-span-full p-4">
                <img className="rounded-lg mx-auto" src="ad_middle3.jpg" alt="" />
            </div>
            {products
                    .slice(19, products.length)
                    .map(({ id, title, price, description, category, image}) => (
                        <Products
                            key={id}
                            id={id}
                            title={title}
                            price={price}
                            description={description}
                            category={category}
                            image={image}
                            widthvalue="200"
                        />
                ))}
        </div>
    )
}

export default ProductFeed;
