export const fetchProducts = async () => {
    // Simulating an API call to fetch product data
    return [
        {
            id: 1,
            title: "Product 1",
            price: 29.99,
            image: "https://via.placeholder.com/150",
            description: "Description for Product 1",
            link: "/product/1"
        },
        {
            id: 2,
            title: "Product 2",
            price: 39.99,
            image: "https://via.placeholder.com/150",
            description: "Description for Product 2",
            link: "/product/2"
        },
        {
            id: 3,
            title: "Product 3",
            price: 49.99,
            image: "https://via.placeholder.com/150",
            description: "Description for Product 3",
            link: "/product/3"
        }
    ];
};