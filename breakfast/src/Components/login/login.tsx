import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import io from 'socket.io-client';
import Cookies from 'universal-cookie';
import dotenv from 'dotenv'
dotenv.config()

import "../main.css";

var connectionOptions: any =  {
	"force new connection" : true,
	"reconnectionAttempts": "Infinity", 
	"timeout" : 10000,                  
	"transports" : ["websocket"]
};

let socket: any;

const Login = ({ location }: any) => {
	const ENDPOINT = 'localhost:5000';
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const cookies = new Cookies();

    const link = `https://github.com/login/oauth/authorize?client_id=${process.env.ID}`

	useEffect(() => {
		socket = io(ENDPOINT, connectionOptions);
	}, [ENDPOINT, location.search])


	return (
		<div>
            <a href={link}>Login Using GitHub</a>
		</div>
	);
}

export default Login;
