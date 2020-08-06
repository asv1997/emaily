import React from 'react'
import {connect} from 'react-redux'
import {submitSurvey} from '../../actions/index'
import {withRouter} from 'react-router-dom'

const SurveyReview = (props) => {
    return (
        <div>
            <h5>Please confirm your entries</h5>

            <div>
                <div>
                    <label>Survey Title</label>
                    <div>{props.formValues.title}</div>
                </div>
                <div>
                    <label>Survey Subject</label>
                    <div>{props.formValues.subject}</div>
                </div>
                <div>
                    <label>Email Body</label>
                    <div>{props.formValues.body}</div>
                </div>
                <div>
                    <label>Email Recipients</label>
                    <div>{props.formValues.recipients}</div>
                </div>
            </div>
            <button className="yellow darken-3 btn-flat white-text" onClick={props.onCancel} >Go Back</button>
            <button  onClick={() => props.submitSurvey(props.formValues, props.history)} className="green btn-flat white-text right"><i className="material-icons right">email</i>Send Survey </button>
        </div>
    )
}

const mapStatetoProps = (state) => {
   
    return{ formValues: state.form.surveyForm.values}
}


export default connect(mapStatetoProps,{submitSurvey})(withRouter(SurveyReview))