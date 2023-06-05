import React from 'react';

const LoginContext = React.createContext({
    isLoggedIn: false,
    onLogin: () => {}
});

export default LoginContext;