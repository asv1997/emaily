import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Payments from './Payments'


class Header extends React.Component {


  renderLoginStatus(){
   if(this.props.currentUser){
     return(
       <div>
      <ul id="nav-mobile" className="right">
        <li style={{marginRight:"10px"}}>Credits : {this.props.currentUser.credits}</li>
        <li><Payments /></li>
      <li><a href="/api/logout">Logout</a></li>
      </ul>
      </div>

      
   
     );

   }
   else if (this.props.currentUser === false){
      return(
        <ul id="nav-mobile" className="right">
    <li><a href="/auth/google">Login</a></li>
    </ul>
 
      );
   }

   else{
     return(
       <div></div>
     )

   }

  }

   render(){
     console.log(this.props.currentUser)
    return(
     
        <nav>
    <div className="nav-wrapper">
      <Link to={this.props.currentUser ?'/surveys' : '/'} className="brand-logo left">EMaily</Link>
     
      {this.renderLoginStatus()}
      
     
    </div>
  </nav>
  
    )
   }
}
const mapStatetoProps = (state) => {
  return {
      currentUser : state.auth
  } 
}

export default connect(mapStatetoProps)(Header);