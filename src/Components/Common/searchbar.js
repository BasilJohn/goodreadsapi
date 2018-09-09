import React, { Component } from "react";
import '../../App.css';

const developerKey="rgG39BTxQ7xdQQpHdZw6tw";
let API_URL="https://www.goodreads.com/search/index.xml?key="+developerKey;
let pageNumber=1;
export default class SearchBar extends Component {

    state = {

        filterText: ""
    }

    getBooksList = () => {
        return fetch(
            API_URL+"&q="+this.state.filterText+"&page="+pageNumber,{
                mode:"no-cors",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                  }
            }
          )
            .then(response => {
              if (response.ok) {
                //console.log("response")
                return response.json();
              } else {
                // handle error
              }
            })
            .then(responseJson => {
                console.log(responseJson)
              //this.setState({ moviesList: responseJson.results });
              //return responseJson;
            })
            .catch(error => {
              console.error(error);
            });

    }

    onFilterTextChange = (evt) => {

        this.setState({
            filterText: evt.target.value
        }, () => {
            //if (this.state.filterText && this.state.filterText >= 1) {
               // if (this.state.filterText.length % 2 === 0) {
                    this.getBooksList()
                //}
            //}
        })
    }
    render() {
        return (
            <div>
                <input className="SearchBar-input" type="text"
                    placeholder="Search..."
                    value={this.state.filterText}
                    onChange={this.onFilterTextChange.bind(this)}
                />
            </div>
        )
    }
}