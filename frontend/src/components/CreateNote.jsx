import React, { Component } from 'react'
import axios from 'axios'

import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
export default class CreateNote extends Component {

    

    state = {

        users : [],
        userSelected :'',
        title: '',
        content: '',
        editing : false,
        _id : '',
        author: ''
    }


    async componentDidMount(){
        const res =  await axios.get('http://localhost:4001/api/users/')
        this.setState({
            users: res.data,
            userSelected: res.data[0].username
        })

        if(this.props.match.params.id){
            const res =  await axios.get('http://localhost:4001/api/notes/'+this.props.match.params.id)
            console.log(res.data)
            this.setState({
                editing:true,
                _id: this.props.match.params.id,
                title:res.data.title,
                content:res.data.content,
                userSelected:res.data.author , 
                date: new Date(res.data.date)
            })
        }
    }


   onSubmitNote = async (e)=> {
      e.preventDefault()
        const newNote = {
            title : this.state.title,
            content: this.state.content,
            author:this.state.userSelected,
            date: this.state.date
        }

        if(this.state.editing){
            await axios.put('http://localhost:4001/api/notes/'+this.state._id, newNote)
        }else{
          
           await axios.post('http://localhost:4001/api/notes/', newNote)
        }

       window.location.href='/'
   }

   onChangeInput =  e => {
      this.setState({
          [e.target.name]: e.target.value
      })
   }

   onChangeDate = (date)=> {

       this.setState({
           date:date
       })
   }
    render() {
        return (
           <div className="row">
               <div className="col-md-6 mx-auto">
                   <div className="card">
                       <div className="card-body">
                           <form onSubmit={this.onSubmitNote}>
                               <h5>create a notes</h5>
                                 {/* SELECT USER */}
                               <div className="form-group">
                                <select
                                    className="form-control" 
                                    name="userSelected"
                                    value={this.state.userSelected}
                                    onChange={this.onChangeInput}
                                    >
                                     
                                     {  
                                      this.state.users.map((user)=>{
                                    return <option key={user._id} value={user.username}>
                                                {user.username}
                                          </option>
                                      })

                                     } 
                                </select>
                                </div>

                                <div className="form-group">
                                    <input type="text"
                                     placeholder="title" 
                                     value={this.state.title}
                                     className="form-control" 
                                     name="title"
                                     onChange={this.onChangeInput}
                                     required
                                     />
                                </div>

                                <div className="form-group">
                                    <textarea 
                                    className="form-control" 
                                    placeholder="content"
                                    name="content"
                                    value={this.state.content}
                                    onChange={this.onChangeInput}
                                    required
                                    ></textarea>
                                </div>

                                <div className="form-group">
                                    <Datepicker 
                                    className="form-control"
                                    selected={this.state.date}
                                    onChange={this.onChangeDate}
                                     />
                                </div>
                             <button className="btn btn-success">Save</button>
                           </form>
                       </div>
                   </div>
               </div>
           </div>
        )
    }
}
