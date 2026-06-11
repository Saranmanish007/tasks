import React from "react"
import {connect} from  "react-redux"
class UserTable extends React.Component {
    render() {
        const {users} = this.props

        return(
            <div>
                <h1>User Details</h1>  

                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Date of Birth</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user,index) => (
                            <tr key={index}>
                                <td>{user.fname}</td>
                                <td>{user.lname}</td>
                                <td>{user.email}</td>
                                <td>{user.pass}</td>
                                <td>{user.dob}</td>
                            </tr>
                        ))}
                    </tbody>
                </table> 
                <button onClick={this.props.goBack}>Back</button>     
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.user.users,
  });
  
  export default connect(mapStateToProps)(UserTable);