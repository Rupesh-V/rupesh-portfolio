import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd'; // Ensure you have imported Layout and Menu from Ant Design

const { Header } = Layout; 

const Navbar = () => {
    const items = [
        { key: '1', label: 'Home', path: '/' },
        { key: '2', label: 'About', path: '#about' },
        { key: '3', label: 'Skills', path: '#skills' },
        { key: '4', label: 'Projects', path: '#projects' },
        { key: '5', label: 'Experience', path: '#experience' },
        { key: '6', label: 'Contact', path: '#contact' },
      ];

  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#001529', // Set a background color to match Ant Design's dark theme
        padding: '0 100px'
      }}
    >
      <div
        className="nav-brand me-4"
        style={{
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          Rupesh Vakati
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        // defaultSelectedKeys={['1']}
        style={{
          flex: 1,
          minWidth: 0,
          lineHeight: '64px', // Aligns the menu items vertically in the center
        }}
      >
        {items.map(item => (
          <Menu.Item key={item.key}>
             <a href={item.path} style={{ color: 'white', textDecoration: 'none' }}>
              {item.label}
            </a>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};

export default Navbar;
