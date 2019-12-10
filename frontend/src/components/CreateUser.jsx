import React, { Component } from 'react'
import axios from 'axios'
export default class CreateUser extends Component {
   
   
    state = {
         users :[],
         username :''
    }

    async componentDidMount(){
          this.getUsers()
    }

    getUsers = async () => {
        const res =  await axios.get('http://localhost:4001/api/users/')
        this.setState({ users : res.data }) 
    }


    onChangeUser = (e) =>{
       this.setState({
           username: e.target.value
       })
    }

    onSubmitUser = async (e)=>{
        e.preventDefault()
        await axios.post('http://localhost:4001/api/users/',{
           username: this.state.username
        })
         
        this.setState({
            username:''
        })
         this.getUsers()
    }

    deleteUser = async (id)=> {
         await axios.delete('http://localhost:4001/api/users/'+ id)
         this.getUsers()
    }
   


    render() {
        return (
            <div className="row">
                 <div className="col-md-4">
                     <div className="card ">
                         <div className="card-body">
                             <form onSubmit={this.onSubmitUser}>
                                 <h4>create a user</h4>
                                 <div className="form-group">
                                     <input type="text" 
                                     placeholder="username" 
                                     className="form-control"
                                     onChange={this.onChangeUser}
                                     value={this.state.username}
                                     />
                                 </div>
                                 <button type="submit" className="btn btn-primary">save</button>
                             </form>
                         </div>
                     </div>
                 </div>

                 <div className="col-md-4 ">
                    <ul className="list-group">
                        {this.state.users.map(user => {
                             return <li 
                             className="list-group-item list-group-item-action" 
                             key={user._id}
                             onDoubleClick={() => this.deleteUser(user._id)}
                             >
                                {user.username}
                            </li>
                        })}
                    </ul>
                 </div>
                 
            </div>
        )
    }
}
