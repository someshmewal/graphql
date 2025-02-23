
const getProductList = async () => {
    try {
        const product = "get product"

        const result = product

        return {
            result: true,
            status: 200,
            message: "Product fetched successfully",
            data: result
        };

    } catch (error) {
        throw new Error('Error getting product: ' + error.message);
    }

}
const createProduct = async (name, desc) => {
    try {
        const result = "create product"

        return {
            result: true,
            status: 200,
            message: "Product created successfully",
            data: result
        };

    } catch (error) {
        throw new Error('Error creating product: ' + error.message);
    }

}

const getProductbyID = async (id) => {
    try {
        //filter Object
        const filter = {}

        if (id) {
            filter.id = id
        }

        if (Object.keys(filter).length === 0) {
            throw new APIError("Missing required field", 400);
        }

        const result = "get product by ID"
        return {
            result: true,
            status: 200,
            message: "product fetched successfully",
            data: result
        };

    } catch (error) {
        throw new Error('Error getting product: ' + error.message);
    }

}

export { getProductList, createProduct, getProductbyID };