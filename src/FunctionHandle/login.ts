import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { login } from '../DataHandle/Slice/AuthSlice';
import { getData } from '../WebService/Apiendpoint';
import { setProperties, setIsLoading, setError } from '../DataHandle/Slice/PropertySlice';

export default function LoginHandler() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [fielderror, setFieldError] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validate = () => {
        if (!username || !password) {
            setFieldError('Username and password are required.');
            return false;
        }
        return true;
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        if (username === 'cheran' && password === 'starberry') {
            setFieldError('');
            dispatch(login({ data: { username } }));
            try {
                dispatch(setIsLoading(true));
                const response = await getData('properties', { _limit: 25 });

                if (response?.data && response?.meta?.pagination) {
                    dispatch(setProperties({
                        data: response.data,
                        pagination: response.meta.pagination
                    }));
                    navigate('/Dashboard');
                } else {
                    dispatch(setError('No data found'));
                }

            } catch (err) {
                dispatch(setError('API Error'));
            } finally {
                dispatch(setIsLoading(false));
            }
        } else {
            setFieldError('Invalid username or password.');
        }
    };



    return {
        username,
        password,
        fielderror,
        setUsername,
        setPassword,
        handleLogin
    }
}


