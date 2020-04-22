import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const UserItem = ({ user: { login, avatar_url, html_url }}) =>  {
        return (
           <div className='card text-center'>
               <img src={avatar_url} alt='' className='round-img' style={{ width: '60px', height: '60px'}} />
               <h3>{login}</h3>
               <div>
                   <a href={html_url} className="btn btn-dark bt-sm my-1">More</a>
               </div>
           </div>
        )
    };

    UserItem.PropTypes = {
        user: PropTypes.object.isRequired,
        avatar_url: PropTypes.object.isRequired,
    }

export default UserItem;
