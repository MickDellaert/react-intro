import React from 'react';

const Title = () => {
    const headerTitle = "My Todo App";
    return <h1>{headerTitle}</h1>;
};

const Header = () => {
    return (
        <header>
        <div className="header">
            <Title />
        </div>
        </header>
    );
};

export default Header;
