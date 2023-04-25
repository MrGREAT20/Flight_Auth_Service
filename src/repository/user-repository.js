const { where } = require('sequelize');
const {User} = require('../models/index');

class UserRepository{
    async create(data){
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log('Something went wrong on user repository level');
            throw error;
        }
    }
    async delete(userId){
        try {
            await User.destroy({where:{
                id: userId
            }});
            
        } catch (error) {
            console.log('Something went wrong on user repository level');
            throw error;
        }
    }
}
module.exports = UserRepository;