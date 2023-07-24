import React from "react";
import style from "./logicForm.module.css";

const LoginForm = () => {
   
    return (

        <div className={style.container}>
            <div className="contenedorchildern">
            <div className={style.containertitles}>
                <h1 className={style.title}>Hello Again!</h1>
                <span className={style.subtitle}>Please log in to continue</span>
            </div>
            <div className={style.LoginForm}>
                <form action="" method="post" autocomplete="off" enctype="multipart/form-data">
                    <div className={style.emailbox}>
                        <input className={style.email} type="email"  placeholder="Email" id="email" name="email"/>
                    </div>

                    <div className={style.passwordbox}>
                        <input className={style.password} type="password"  placeholder="password" id="password" name="password"/>
                    </div>

                    <div className={style.loginbox}>
                        <input className={style.login} type="submit" value="Log In" name="login" id="login" />
                    </div>

                </form>

                <a className={style.resetpassword} href="/">Need Help?</a>
            </div>
            </div>
        </div>

    );
};
  

export default LoginForm;