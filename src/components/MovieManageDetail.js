import React, { Component } from 'react';

class MovieManageDetail extends Component {
    render() {
        const { id, title, description, url, image } = this.props.item;
        const { editTitle, editDescription, editUrl, editImage } = this.props.EditItemManageState;
        const { setManageState } = this.props;
        if(this.props.selectEditId !== id) {
            return(
                <tr>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{description}</td>
                    <td>{url}</td>
                    <td><img style={{ height: "100px"}} className="img-responsive" src={image} alt="Movie"/></td>
                    <td>
                        <input type="button" className="btn btn-success" value="Edit" onClick={this.props.fnEdit} />
                    </td>
                    <td>
                        <input type="button" className="btn btn-danger" value="Delete" onClick={this.props.fnDel}/>
                    </td>
                </tr>
            );
        }

        return(
            <tr>
                <td>{id}</td>
                <td><input ref="inputEditTitle" type="text" className="form-control" value={editTitle} onInput={(text) => setManageState(text.value, "Title")} /></td>
                <td><textarea ref="inputEditDesc" className="form-control" value={editDescription} onInput={(text) => setManageState(text.value, "Description")} /></td>
                <td><input ref="inputEditUrl" type="text" className="form-control" value={editUrl} onInput={(text) => setManageState(text.value, "Url")} /></td>
                <td><input ref="inputEditImage" type="text" className="form-control" value={editImage} onInput={(text) => setManageState(text.value, "Image")} /></td>
                <td>
                    <input type="button" className="btn btn-success" value="Update" onClick={() => this.props.fnUpdate(this.refs)} />
                </td>
                <td>
                    <input type="button" className="btn btn-danger" value="Delete" onClick={this.props.fnDel}/>
                </td>
            </tr>
        );
    }
}

export default MovieManageDetail;