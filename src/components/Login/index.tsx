import {
	InputForm,
	FlexColum,
	FlexColumMarginInline,
	Button,
	Message,
	MessageError,
} from '../../theme'

import axios from '../../axiosConfig'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const Login = () => {
	// const state = useSelector((state) => state.sesion)
	const dispatch = useDispatch()
	const [account, setAccount] = useState({
		email: '',
		password: '',
	})
	const [message, setMessage] = useState({
		message: '',
		state: false,
	})
	const handleLogin = async (e: any) => {
		e.preventDefault()
		const { data } = await axios.post('/auth', account)
		console.log(data)
		if (data.data.length === 0) {
			setMessage({
				message: 'Error al iniciar sesión',
				state: false,
			})
			dispatch({ type: '@login/close', state: false, payload: [] })
		} else {
			setMessage({
				message: 'Inicio de sesión correctamente',
				state: true,
			})
			dispatch({ type: '@login/open', state: true, payload: data.data[0] })
			dispatch({ type: 'close' })
		}
	}

	const handleInputsForm = (e: any) => {
		setAccount({
			...account,
			[e.target.name]: e.target.value,
		})
	}

	return (
		<>
			<form onSubmit={handleLogin}>
				<FlexColum>
					<label htmlFor="email">Email</label>
					<InputForm
						type="mail"
						placeholder="Introduce tu correo electronico"
						id="email"
						name="email"
						onChange={handleInputsForm}
					/>
				</FlexColum>
				<FlexColum>
					<label htmlFor="password">Password</label>
					<InputForm
						type="password"
						placeholder="Introduce tu correo electronico"
						id="password"
						name="password"
						onChange={handleInputsForm}
					/>
				</FlexColum>
				<FlexColumMarginInline>
					<Button type="submit">Iniciar Sesión</Button>
				</FlexColumMarginInline>
			</form>
			{message.state ? (
				<Message>{message.message}</Message>
			) : (
				<MessageError>{message.message}</MessageError>
			)}
		</>
	)
}

export default Login
