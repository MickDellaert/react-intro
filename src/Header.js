import React from 'react';

const Title = () => {
    const headerTitle = "My Todo App";
    return <h1 className="text-2xl">{headerTitle}</h1>;
};

const Header = () => {
    return (
        <header>
        <div className="bg-gray-800 p-4 xl:rounded-t-2xl text-white">
            <Title />
        </div>
        </header>
    );
};

export default Header;
