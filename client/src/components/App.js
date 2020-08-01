import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchUser} from '../actions/index'

import Header from './Header'
import Landing from'./Landing'



const Edit = () => <div>Edit Page</div>
const Delete = () => <div>Delete Page</div>
const Dashboard = () => <div>Dashboard</div>

class App extends React.Component {

    componentDidMount(){
        this.props.fetchUser();
        

    }

    render (){
        return(
            <div>
            <BrowserRouter>
                 <div >
                  <Header/>
                 <Route path="/" component={Landing} exact></Route>
                 <Route path="/edit" component={Edit} exact></Route>
                 <Route exact path="/surveys" component={Dashboard}></Route>
                 <Route path="/delete" component={Delete} exact></Route>
                 </div>
             </BrowserRouter>
         </div>
        )
    }

}



export default connect(null,{fetchUser})(App);