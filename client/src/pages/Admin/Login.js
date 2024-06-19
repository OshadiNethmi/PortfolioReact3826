import React from 'react';
import { HideLoading, Showloading } from '../../redux/rootSlice';
import { message } from 'antd';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function Login() {
    const [user, setUser] = React.useState({
        username: "",
        password: ""
    });
    const dispatch = useDispatch();
    const login = async () => {
        try {
            dispatch(Showloading());
            const response = await axios.post('/api/myapi/admin-login', user);
            dispatch(HideLoading());
            if (response.data.success) {
                message.success(response.data.message);
                localStorage.setItem("token", response.data);
                window.location.href = "/admin";
            } else {
                message.error(response.data.message);
            }
        } catch (error) {
            message.error(error.message);
            dispatch(HideLoading());
        }
    };
    return (
        <div className='login flex justify-center items-center h-screen'>
            <div className='loginContainer w-96 flex gap-5 p-5 flex-col'>
                <h1 className='adminlogin'>Portfolio - Admin Login</h1>
                <hr />
                <input
                    type="text"
                    value={user.username}
                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                    placeholder='username'
                />
                <input
                    type="password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    placeholder='password'
                />
                <button className='text-white p-2' onClick={login}
                    style={{
                        background: 'linear-gradient(to right, #212121, #7000a8)'
                    }}
                >Login</button>
            </div>

        </div>
    );
}

export default Login;