import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
    static propTypes = {
        title: PropTypes.string,
    }

    render() {
        return (
            <section className = {styles.component}>
                <h3 className = {styles.title}>
                    {this.props.title}
                </h3>
            </section>
        )
    }
}

export default Column;