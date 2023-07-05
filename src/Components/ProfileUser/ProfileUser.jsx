import React, { Component } from 'react';
import Navbar from '../Navbar';
import { SearchBar } from '../SearchBar';
const role = localStorage.getItem("role");

class ProfileUsr extends Component {
    render() {
        return (
            <div>
                <div></div>
                <Navbar />
                <SearchBar />
            </div>
        );
    }
}
 
export default ProfileUsr;