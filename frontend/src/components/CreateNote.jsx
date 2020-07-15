import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

class CreateNote extends Component {

    state = {
        users: [],
        userSelected: '',
        date: new Date()
    }

    async componentDidMount () {
        const res = await axios.get('http://localhost:4000/api/users');
        this.setState({users: res.data.map(user => user.username)})
        console.log(this.state.users)
    }

    onSubmit = (e) => {
        e.preventDefault();
    }

    onInputChange = (e) => {
        this.setState({
            userSelected: e.target.value
        })
    }

    onChangeDate = (date) => {
        this.setState({date})
    }


    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Create a Note</h4>

                    <div className="form-group">
                        <select 
                            className="form-control"
                            name="userSelected"
                            onChange={this.onInputChange}
                        >
                            {
                                this.state.users.map(user => 
                                <option key={user} value={user}>
                                    {user}
                                </option>)
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="Title"
                            name="title"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <textarea 
                            name="content"
                            className="form-control"
                            placeholder="Content"
                            required
                        >
                        </textarea>
                    </div>

                    <div className="form-group">
                        <DatePicker 
                            className="form-control"
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>

                    <form onSubmit={this.onSubmit}>
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateNote;
