import { Fragment } from "react";
import {Navbar, AuthLogin } from "../../components/index";

export const Login = () => {
    return (
        <Fragment>
            <Navbar route="login"/>
            <AuthLogin/>
        </Fragment>

    )
}