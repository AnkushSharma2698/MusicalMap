import SearchBar from "./SearchBar";
import React,{Component} from 'react';
import '../Styling/Homepage.css';


class Homepage extends Component {
    render() {
        return (
             <div className="App">
                Music Discovery 
                <div>
                    <SearchBar />
                </div>
            </div>
            
        )
    }
}

export default Homepage