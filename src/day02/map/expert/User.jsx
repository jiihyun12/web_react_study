import React from 'react';

const User = ({users}) => {

    const { name, phone, company, address } = users;

    return (
            <il>
                <p> 이름 : {name}</p>
                <p> 전화번호 : {phone}</p>
                <p> 회사 이름 : {company.name}</p>
                <p> 도시 이름 : {address.city}</p>
            </il>
    );
};


export default User;





















                              
  
  

