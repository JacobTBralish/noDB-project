import React, { Component } from 'react';
import './App.css';
import axios from 'axios'


class App extends Component {
  constructor() {
    super();
    this.state = {
      foodName: '',
      calories: '',
      protein: '',
      carbohydrates: '',
      fats: '',
      foodArr: []
    }
  }
//START HERE//////////////////STEP4 AT THE .THEN
componentDidMount(){
  axios.get('/api/foodList').then(res => {
    this.setState({
      foodArr: res.data
    })
    
  // let handleChange = ({target}) => {
  //     this.setState({
  //       foodArr: target.value
  //     })
  //   }

    axios.post('/api/foodList', this.state).then(res => {
      this.setState({
        foodArr: res.data
      
      })
    })
    
  
    // let {}
    // this.setState({foodArr: res.data.report.food.name})
  })

  // axios.post('/api/getfood/', this.state).then(res =>{
  // })
}



  render() {
//STEP 5
    let mapped = this.state.foodArr.map(e => {
      return <div key={ e.id }>
        {e.name}
      </div>
    })

//STEP 6
    return (
      <div className="App">
        {mapped}
        <button>enter</button>
      </div>
    );
  }
}

export default App;
