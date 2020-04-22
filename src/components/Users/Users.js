import React, {Component} from 'react';
import UserItem from './UserItem';

export class Users extends Component {
    state = {
        users: [
                {
                    id: '1',
                    login: 'Mojombo',
                    avatar_url: 'https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg',
                    html_url: 'https://github.com/',
                }, 
                {
                    id: '2',
                    login: 'Mojombo',
                    avatar_url: 'https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg',
                    html_url: 'https://github.com/',
                },
                {
                    id: '3',
                    login: 'Mojombo',
                    avatar_url: 'https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg',
                    html_url: 'https://github.com/',
                },
                {
                    id: '4',
                    login: 'Mojombo',
                    avatar_url: 'https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg',
                    html_url: 'https://github.com/',
                }       
            ]
        }

    render() {
        return (
           <div style={userStyle}>
               {this.state.users.map(user => (
                  <UserItem key={user.id} user={user}/>
               ))}
           </div>
        )
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)'
}
export default Users;
