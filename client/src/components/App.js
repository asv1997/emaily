import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchUser} from '../actions/index'

import Header from './Header'
import Landing from'./Landing'
import Dashboard from './Dashboard'
import SurveyNew from './Surveys/SurveyNew'






class App extends React.Component {

    componentDidMount(){
        this.props.fetchUser();
      }

    render (){
        return(
            
            <BrowserRouter>
                 <div className="container" >
                  <Header/>
                 <Route path="/" component={Landing} exact></Route>
                
                 <Route exact path="/surveys" component={Dashboard}></Route>
                 <Route exact path="/surveys/new" component={SurveyNew}></Route>
                
                 </div>
             </BrowserRouter>
        
        )
    }

}



export default connect(null,{fetchUser})(App);