import React, {Component} from 'react';
import BurgerMenu from 'react-burger-menu';
import MenuWrap from '../menu/MenuWarp.jsx'
import styled from 'styled-components';

export default class MainLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMenu: 'elastic'
        };
    }

    getItems() {
        let items = [
            <a key="0" href=""><i className="fa fa-fw fa-star-o"/><span>Favorites</span></a>,
            <a key="1" href=""><i className="fa fa-fw fa-bell-o"/><span>Alerts</span></a>,
            <a key="2" href=""><i className="fa fa-fw fa-envelope-o"/><span>Messages</span></a>,
            <a key="3" href=""><i className="fa fa-fw fa-comment-o"/><span>Comments</span></a>,
            <a key="4" href=""><i className="fa fa-fw fa-bar-chart-o"/><span>Analytics</span></a>,
            <a key="5" href=""><i className="fa fa-fw fa-newspaper-o"/><span>Reading List</span></a>
        ];
        return items;
    }


    getMenu() {
        const Menu = BurgerMenu[this.state.currentMenu];
        const StyledMenu = styled(Menu)`
              .bm-cross {
                background: #888;
              }
            
              .bm-menu {
                padding: 2em 1em;
                font-size: 1.15em;
              }
            
              i {
                opacity: 0.5;
              }
            
              span {
                text-transform: uppercase;
                letter-spacing: 1px;
                font-size: 0.75em;
              }
              
              .side-button {
                  display: inline-block;
                  width: 5em;
                  height: 2.5em;
                  line-height: 2.5em;
                  cursor: pointer;
                  background: #fffce1;
                  text-transform: uppercase;
                  letter-spacing: 1px;
                  font-size: 0.8em;
                  font-weight: 800;
               } 
               .side-button.left {
                    border-top-left-radius: 10px;
                    border-bottom-left-radius: 10px;
               }
               .side-button.right {
                    border-top-right-radius: 10px;
                    border-bottom-right-radius: 10px;
               }
               .side-button.active {
                    background: #c94e50;
                    color: #fffce1;
                }
        `;

        const items = this.getItems();
        let jsx = (
            <MenuWrap wait={20}>
                <StyledMenu id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
                    {items}
                </StyledMenu>
            </MenuWrap>
        );
        return jsx;
    }

    render() {

        return (
            <div id="outer-container" style={{height: '100%'}}>
                {this.getMenu()}
                <main id="page-wrap">
                    <h1>Hello world</h1>
                </main>
            </div>
        );
    }
}

