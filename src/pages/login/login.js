import React, { Component } from 'react';
import "./login.less"
class Login extends Component {

    render() { 
        return ( 
            <div className="login">
               <div className="login-header">
                   <img/>
                   <h1>欢网电商后台管理平台</h1>
               </div>
               <div className="login-content">
                    <h1>用户登录</h1>
                    <div>from组件</div>
               </div>
            </div>
         );
    }
}
 
export default Login;