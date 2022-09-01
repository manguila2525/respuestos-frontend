import {
	FlexColum,
	FlexColumMarginInline,
	InputForm,
	Button,
	Message,
	MessageError,
} from '../../theme'

import axios from '../../axiosConfig'
import { useState } from 'react'

const SignUp = () => {
	const [account, setAccount] = useState({
		email: '',
		password: '',
		nombre: '',
		apellido: '',
	})
	const [message, setMessage] = useState({
		message: '',
		state: false,
	})
	const handleLoginSubmit = async (e: any) => {
		e.preventDefault()
		const { data } = await axios.post('/users', account)
		if (data.error) {
			setMessage({
				message: 'Error al crear Usuario',
				state: false,
			})
		} else {
			setMessage({
				message: 'Usuario Registrado correctamente',
				state: true,
			})
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
			<form onSubmit={handleLoginSubmit} autoComplete="off">
				<FlexColum>
					<label htmlFor="nombre">Nombre</label>
					<InputForm
						type="text"
						placeholder="Introduce tu primer nombre"
						id="nombre"
						name="nombre"
						onChange={handleInputsForm}
					/>
				</FlexColum>
				<FlexColum>
					<label htmlFor="apellido">Apellido</label>
					<InputForm
						type="text"
						placeholder="Introduce tu apellido"
						id="apellido"
						name="apellido"
						onChange={handleInputsForm}
					/>
				</FlexColum>
				<FlexColum>
					<label htmlFor="email">Email</label>
					<InputForm
						type="mail"
						placeholder="Introduce tu correo electronico"
						id="email"
						name="email"
						value={account.email}
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
						value={account.password}
						onChange={handleInputsForm}
					/>
				</FlexColum>
				<FlexColumMarginInline>
					<Button type="submit">Registrate</Button>
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

export default SignUp
