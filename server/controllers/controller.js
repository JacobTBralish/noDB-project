const axios = require('axios')
const foodList = require('./foodList');
let id = 21;



module.exports = {
//START 3
    getAllFoods: (req, res) => {
        // console.log('hit')
        res.status(200).send(foodList)
    },

    createFood: (req, res) => {
        // console.log('hit')
        let { foodName, calories, protein, carbohydrates, fats } = req.body
        let newFood = {
            foodName: foodName,
            calories:calories,
            protein:protein,
            carbohydrates:carbohydrates,
            fats:fats,
            id:id
        }
        id++
        foodList.push(newFood)
        res.status(200).send(foodList)
    },

    editFood: (req, res) => {
        let { foodName, calories, protein, carbohydrates, fats} = req.body;
        let { id } = req.params;
        if ( e.id === id){
            
        }
    }

    // getFoodItem: (req, res) => {
    //     const { name } = req.params;
    //     let item = foods.filter(e => e.name === name)
    //     console.log(item)
    //     axios.get(`https://api.nal.usda.gov/ndb/reports/?ndbno=${item[0].ndbno}&type=f&format=json&api_key=jJwYb4N4BKJEW9jEXU8NbDXltGlKqIqTtcTcJ1Rz`).then(response => {
    //         // console.log(response.data)
    //         res.send(response.data)
    //     }).catch(err => console.log(err))
    // },

    // postFoodItem: (req, res) => {
    //     console.log(req.body)
    //     const { id } = req.body;
    //     let newItem = {
    //             group: group,
    //             name: name,
    //             servings: servings,
    //             protein: protein,
    //             carbohydrates: carbohydrates,
    //             fats: fats,
    //             id: ndbno || id
    //             }
    //         id++
    //         foods.push(newItem)
    //         res.send(foods)
    // },
    
    // updateFoodItem: (req, res) => {
    //     let { name, id } = req.params;
    //     let index = foods.findIndex(food => food.id == id);

    //     if (index != -1){
    //         foods[index].food = food;
    //         res.send(response.data)
    //     }
    // }
}

