import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from './usersSlice';

function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password || !confirmPassword) {
            setError('Все поля должны быть заполнены');
            return;
        }
        if (password !== confirmPassword) {
            setError('Пароли не совпадают');
            return;
        }
        try {
            dispatch(registerUser({ username, password }));
            setError('');
            setUsername('');
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="mb-3">Регистрация</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Имя пользователя:</label>
                            <input type="text" className="form-control" id="username" value={username} onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Пароль:</label>
                            <input type="password" className="form-control" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Подтвердите пароль:</label>
                            <input type="password" className="form-control" id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
                        </div>
                        {error && <div className="alert alert-danger mt-3">{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegistrationForm;
