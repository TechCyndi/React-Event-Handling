import React, { useState } from 'react'
import { users } from '../Users';
import UserProfile from './UserProfile';


const Searchbar = () => {
    const [search, setSearch] =useState("");
    const [filteredusers, setFilteredUsers] = useState([users]);

    const handleSearchChange = (event) =>{
        setSearch(event.target.value);
    

    const filteredUsers=users.filter((users) =>
    users.firstName.toLowerCase().includes(event.target.value.toLowerCase()));
    setFilteredUsers(filteredUsers)
    };

  return (
    <div className='inputbar'>
        <div className='search-container'>
            <input type="text" placeholder='Search by name' value={search} onChange={handleSearchChange}/>
        </div>
        <table className='users-table'>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    </tr>
            </thead>
            <tbody>
                {filteredusers.map((users) => (
                    <tr key={users.id}>
                        <td>
                            
                        </td>
                        <td>{users.name}</td>
                    </tr>
                )
                )}
            </tbody>
        </table>
    </div>
  );
}

export default Searchbar