import React from "react";
import {reduxForm,Field} from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../src/utils/validators/validators"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} validate ={[required]}  component={Input} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} validate ={[required]}  component={Input} />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const onSubmit = (formData) => {
    console.log(formData);
}

const LoginReduxForm = reduxForm({
    form: 'login'
  })(LoginForm)
const Login = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

}

export default Login