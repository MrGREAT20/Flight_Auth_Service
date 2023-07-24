const { where} = require('sequelize');
const {User, Role} = require('../models/index');
const ValidationErrors = require('../utils/validation-errors');

class UserRepository{
    async create(data){
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            if(error.name === 'SequelizeValidationError'){
                throw new ValidationErrors(error);
            }
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
    async getByID(userId){
        try {
            const user = await User.findByPk(userId, {
                attributes: ['email', 'id']
            });
            return user;
        } catch (error) {
            console.log('Something went wrong on user repository level');
            throw error;   
        }
    }
    async getByEmail(userEmail){
        try {
            const user = await User.findOne({where:{email:userEmail}});
            return user;
        } catch (error) {
            console.log('Something went wrong on user repository level');
            throw error;  
        }
    }
    async isAdmin(userId){
        try {
            const user = await User.findByPk(userId);
            const AdminRole = await Role.findOne({
                where : {
                    name: 'ADMIN'
                }
            })
            console.log(user, AdminRole);
            return user.hasRole(AdminRole);
        } catch (error) {
            console.log("Something went wrong in isAdmin");
            throw error;
        }
    }
}
module.exports = UserRepository;