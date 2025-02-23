// import { prisma } from '../../config.js';

const getUsersList = async () => {
    try {
        const result = "ram"
        return {
            result: true,
            status: 200,
            message: "Users fetched successfully",
            data: result
        };

    } catch (error) {
        throw new Error('Error getting user: ' + error.message);
    }

}

const getUserbyID = async (id) => {
    try {

        //filter Object
        const filter = {}

        if (id) {
            filter.id = id
        }

        if (Object.keys(filter).length === 0) {
            throw new APIError("Missing required field", 400);
        }

        const result = "create user"
        
        return {
            result: true,
            status: 200,
            message: "Users fetched successfully",
            data: result
        };

    } catch (error) {
        throw new Error('Error getting user: ' + error.message);
    }

}

export { getUsersList, getUserbyID };