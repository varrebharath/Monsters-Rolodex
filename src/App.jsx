import { Component } from "react";
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-bar.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((Response) => Response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      }))
    
  }
  
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }





  render() {
    // destructuring
    const { monsters, searchField } = this.state
     const {onSearchChange}=this
    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })
    return (
      <>
        <div className="App">
          <h1 className="app-title">Monsters Rolodex</h1>
          <SearchBox onChangeHandler={onSearchChange}
            placeholder='search monsters'
          className='monsters-search-box'/>
          {/* <input className="search-box" type="serach" placeholder="search monsters" onChange={this.onSearchChange}></input> */}
          {/* {
            filterMonsters.map((monster) => { 
              
              return <div key={monster.id}>
                <h1 >{monster.name}</h1>
                </div>
            })
          } */}
          <CardList monsters={filterMonsters} />
        </div>
       
      </>
    )
  }

}
export default App