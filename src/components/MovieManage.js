import React, { Component } from 'react';
import axios from 'axios';
import { API_URL_1 } from '../supports/api-url/apiurl';
import MovieManageDetail from './MovieManageDetail';


class MovieManage extends Component {
    state = { movieList: [], selectedEditId: 0, editItem : {
        editTitle: "",
        editDescription: "",
        editUrl: "",
        editImage: ""
    }, editing: false}

    componentWillMount() {
        this.getMovieList();
    }

    getMovieList = () => {
        axios.get(API_URL_1 + "/movies")
        .then((response) => {
            this.setState({ movieList: response.data, selectedEditId: 0, editing: false });
        }).catch((err) => {
            console.log(err);
        })
    }

    onBtnAddClick = () => {
        axios.post(API_URL_1 + "/movies", {
            title: this.refs.inputAddTitle.value,
            description: this.refs.inputAddDesc.value,
            url: this.refs.inputAddUrl.value,
            image: this.refs.inputAddImage.value
        }).then((response) => {
            this.getMovieList();
        }).catch((err) => {
            alert("Add Error!");
            console.log(err);
        });
    }

    onBtnDeleteClick = (movieId) => {
        var check = window.confirm("Are you sure to delete this?");
        if(check) {
            axios.delete(API_URL_1 + "/movies/" + movieId)
            .then((response) => {
                this.getMovieList();
            }).catch((err) => {
                alert("Delete Error!");
                console.log(err);
            })
        }    
    }

    onBtnEditClick = (movieId) => {
        this.setState({ selectedEditId: movieId });
    }

    onBtnUpdateClick = (movieId, refsEdit) => {
        axios.put(API_URL_1 + "/movies/" + movieId, {
            title: refsEdit.inputEditTitle.value,
            description: refsEdit.inputEditDesc.value,
            url: refsEdit.inputEditUrl.value,
            image: refsEdit.inputEditImage.value
        }).then((response) => {
            this.getMovieList();
        }).catch((err) => {
            alert("Edit Error!");
            console.log(err);
        });
    }

    onInputEditItem = (value, theInput) => {
        if(theInput === "Title") {
            this.setState({ editItem : { editTitle: value }});
        }
        else if(theInput === "Description") {
            this.setState({ editItem : { editDescription: value }});
        }
        else if(theInput === "Url") {
            this.setState({ editItem : { editUrl: value }});
        }
        else if(theInput === "Image") {
            this.setState({ editItem : { editImage: value }});
        }
    }

    renderMovieList = () => {
        const list = this.state.movieList.map((item) => {
            if(item.id === this.state.selectedEditId 
                && this.state.editing === false) {
                this.state.editItem = {
                    editTitle: item.title,
                    editDescription: item.description,
                    editUrl: item.url,
                    editImage: item.image
                }
                this.state.editing = true;
            }  
            return (
                <MovieManageDetail item={item} selectEditId={this.state.selectedEditId} 
                    fnDel={() => this.onBtnDeleteClick(item.id)} fnEdit={() => this.onBtnEditClick(item.id)}
                    fnUpdate={(editRef) => this.onBtnUpdateClick(item.id, editRef)}
                    setManageState={this.onInputEditItem}
                    EditItemManageState={this.state.editItem}/>
            );
        });
        return list;
    }

    render() {
        return (
            <div style={{paddingTop: "100px"}} className="container">
                <div className="row">
                    <div className="col-xs-12">
                    <div className="box">
                        <div className="box-header">
                        <h3 className="box-title">Movie List</h3>
                        </div>
                        <div className="box-body">
                        <table id="example2" className="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Url</th>
                                <th>Image</th>
                                <th></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.renderMovieList()}
                            </tbody>
                            <tfoot>
                            <tr>
                                <th></th>
                                <th><input ref="inputAddTitle" type="text" className="form-control" /></th>
                                <th><textarea ref="inputAddDesc" className="form-control" /></th>
                                <th><input ref="inputAddUrl" type="text" className="form-control" /></th>
                                <th><input ref="inputAddImage" type="text" className="form-control" /></th>
                                <th><input type="button" className="btn btn-primary" value="Add" onClick={this.onBtnAddClick}/></th>
                                <th></th>
                            </tr>
                            </tfoot>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieManage;