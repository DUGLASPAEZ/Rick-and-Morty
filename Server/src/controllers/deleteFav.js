const {Favorite} = require("../DB_connection")

const deleteFav = async (id) => {
    try {
        const userDelete =  await Favorite.findByPk (id);
        if (!userDelete) throw new Error("User not found")
        await userDelete.destroy();
        return "deleted completely";
    }
    catch (error) {
        return ({error: error.message});
    }
}
module.exports = deleteFav;