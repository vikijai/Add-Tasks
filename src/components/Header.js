import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';
function Header() {
  const tasks = useSelector((state) => state.alltask);
    return (
        <Link className="headerlink" to="/Createtask">
        <div className="header">
        <h2>Task: {tasks.length}</h2><button>+</button>
      </div>
        </Link>
    )
}

export default Header
