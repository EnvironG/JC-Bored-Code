import React, { Component } from 'react';

class Header extends Component {

    changecolor() {
        document.getElementById('icon').classList.add('red')
    }

  render() {
    return (
        <div className='header'>
            <div className='header-left'>
                <div className ='header-left-navbar'>
                    <i className="fas fa-bars" id='icon' onClick={() => this.changecolor()}></i>
                </div>
            </div>
            <div className ='header-right'>

            </div>
            
        </div>
    );
  }
}

export default Header;