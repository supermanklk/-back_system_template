import React from 'react'
import { history } from 'umi';
export default function index(props) {
    if(props.location.pathname.includes('/nanyang/xinye/hansangshu')) {
        history.push('/nanyang/xinye/hansangshu');
    }
    return (
        <div>
            xinye
        </div>
    )
}
