import React from 'react';
import '../css/links.css';
import Link from './Link';
import FB from '../Image/facebook.webp';

class Links extends React.Component {
    render() {
        return (
            <div id = 'container'>
                <div id = 'link'>
                    <Link src = {FB} />
                    <Link src = {FB} />
                    <Link src = {FB} />
                    <Link src = {FB} />
                </div>
            </div>
        )
    }
}

export default Links;