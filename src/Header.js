import React from 'react';

const Title = () => {
    const headerTitle = "My Todo App";
    return <h1 className="text-2xl">{headerTitle}</h1>;
};

const Header = () => {
    return (
        <header>
        <div className="bg-green-700 p-4 rounded-t-lg text-white">
            <Title />
        </div>
        </header>
    );
};

export default Header;
