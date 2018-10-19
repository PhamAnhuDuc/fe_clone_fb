import React, { Component } from 'react';
import { connect }  from 'react-redux';
import ChildItem from './ChildItem';
class Item extends Component {
    render() {
        let {totalSearch} = this.props;
        console.log(totalSearch);
        return(
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Add</th>
                </tr>
                </thead>
                <tbody>
                    {this.showChilItem(totalSearch)}
                </tbody>
            </table>
        );
    }
    showChilItem(childs) {
        var result = null;
        if (childs.length > 0) {
            result = childs.map((child, index) => {
                return (
                    <ChildItem
                        key={index}
                        child={child}
                        index={index}
                    />
                );
            });
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        totalSearch : state.user.resultSearch
    }
}
export default connect (mapStateToProps, null)(Item);





