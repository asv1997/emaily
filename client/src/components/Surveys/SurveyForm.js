import React from 'react'
import {reduxForm, Field} from 'redux-form'
import {Link} from 'react-router-dom'
import validateEmails from '../../utils/validateEmails'

const SurveyField = ({input , label, meta: {error, touched}}) => {
    return (
        <div>
            <label>{label}</label>
           <input {...input} style={{margin:"10px"}}/>
           <div className="red-text" style={{marginBottom:"20px"}}>

           {touched && error} 
           </div>
          
        </div>
    )
}



class SurveyForm extends React.Component{

    renderFields() {
        return(
            

            <div>
                
                <Field label="Survey Title" type="text" name="title" component={SurveyField} />
                <Field label="Email Subject" type="text" name="subject" component={SurveyField} />
                <Field label="Email Body" type="text" name="body" component={SurveyField} />
                <Field label="Recipients" type="text" name="recipients" component={SurveyField}  />
               
            </div>
        )
    }




    render(){
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                {this.renderFields()}
                <button type="submit" className="teal btn-flat right white-text">Next
                <i className="material-icons right">done</i>
                </button>
                <Link  className="red btn-flat left white-text" to="/surveys">Cancel
                <i className="material-icons right">cancel</i>
                </Link>
                </form>
            </div>
        );
    }
}

const validate = (values) => {
    const errors = {};

    if(!values.title){
       
        errors.title = 'You must provide a title';
    }

    if(!values.subject){
        errors.subject = 'You must provide a subject';
    }

    if(!values.body){
        errors.body = 'You must provide a body';
    }

    errors.recipients = validateEmails(values.recipients || '');

    if(!values.recipients){
        errors.recipients = 'You must provide atleast one recipient';
    }

     return errors;
}
export default reduxForm({
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);