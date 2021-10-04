import React from 'react';

const Title = () => {
    const headerTitle = "Reminder App";
    return <h1 className="text-2xl ml-6">{headerTitle}</h1>;
};

const Header = () => {
    return (
        <header>
        <div className="bg-gray-700 p-4 2xl:rounded-t-2xl text-white">
            <Title />
        </div>
        </header>
    );
};

export default Header;
