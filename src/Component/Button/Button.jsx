import React from 'react';

const Button = ({ btnText, classes }) => {
    return (
        <button className={`rounded-[5px] font-poppins bg-theme-primary text-white leading-6 text-base ${ classes }`}>{ btnText }</button>
    );
};

export default Button;