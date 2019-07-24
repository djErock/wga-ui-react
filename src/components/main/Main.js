
import React from 'react';
import './main.css';
import AppContext from '../../state/AppContext';

const Main = () => (
    <AppContext.Consumer>
        { value => {
            const { content, currentPage } = value;

            return (
                <div className="body">
                    <header>
                        <p>{ currentPage }</p>
                    </header>
                    <article className="content">
                        <p>{ content }</p>
                    </article>
                    <footer>
                        <p>{`Copyright ${new Date().getFullYear()}`}</p>
                    </footer>
                </div>
            );
        } }
    </AppContext.Consumer>
);

export default Main;
