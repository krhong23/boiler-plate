import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {authUser} from "../actions/user_action";

export default function (SpecificComponent, option, adminRoute = null) {
    const dispatch = useDispatch();

    function AuthenticationCheck(props) {
        useEffect(() => {
            dispatch(authUser())
                .then(response => {
                    console.log(response)

                    if (!response.payload.isAuth) {
                        // 로그인하지 않은 상태
                        if (option) {
                            props.history.push('/login')
                        }
                    } else {
                        // 로그인한 상태
                        if (adminRoute && !response.payload.isAdmin) {
                            props.history.push('/')
                        } else {
                            if (option === false)
                                props.history.push('/')
                        }
                    }
                })
        }, [])
    }

    return AuthenticationCheck;
}