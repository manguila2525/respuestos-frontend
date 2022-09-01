import {
	ContentSpare,
	ImgSpare,
	ListCommunication,
	ContentList,
	Descripcion,
	BtnIcon,
	ListStar,
	ContentTools,
	BtnCountLeft,
	BtnCountRight,
	// Title,
	// TitleInfo,
	ContentImg,
} from './styled'

// import CallIcon from '@mui/icons-material/Call'
// import WhatsAppIcon from '@mui/icons-material/WhatsApp'
// import EmailIcon from '@mui/icons-material/Email'
// import InstagramIcon from '@mui/icons-material/Instagram'
import StarIcon from '@mui/icons-material/Star'

import { Container, TitleBig, FlexJustify } from '../../theme'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from '../../axiosConfig'

const Spare = () => {
	const { id } = useParams()
	const [data, setData] = useState({
		title: '',
		description: '',
		imageUrl: '',
	})
	const getApiSpare = async () => {
		const { data } = await axios.get(`/spare/${id}`)
		setData(data.data)
	}
	useEffect(() => {
		getApiSpare()
	}, [])
	return (
		<>
			<Container>
				<FlexJustify>
					<ContentSpare>
						<div>
							<TitleBig>
								{data.title === '' ? 'Cargando' : data.title}
								<ListStar>
									<StarIcon fontSize="large" style={{ color: '#4285f4' }} />

									<StarIcon fontSize="large" style={{ color: '#25d366' }} />

									<StarIcon fontSize="large" style={{ color: '#dd4b39' }} />

									<StarIcon fontSize="large" style={{ color: '#c13584' }} />

									<StarIcon fontSize="large" style={{ color: '#c13584' }} />
								</ListStar>
							</TitleBig>
						</div>
						<ContentImg>
							{data.imageUrl === '' ? null : (
								<ImgSpare src={data.imageUrl} alt={data.title} />
							)}
						</ContentImg>

						<ContentList>
							<Descripcion>{data.description}</Descripcion>
						</ContentList>
						<BtnCountLeft>-</BtnCountLeft>
						<BtnCountRight>+</BtnCountRight>
					</ContentSpare>
					{/* <ContentTools>
            <Title>Cantidad</Title>
            <Title>1</Title>
            <FlexJustify>
              <div>
                <BtnCount>+</BtnCount>
                <BtnCount>-</BtnCount>
              </div>
              <div>
                <TitleBig>
                  Total <TitleInfo>50$</TitleInfo>
                </TitleBig>
              </div>
            </FlexJustify>
            <TitleInfo>Contactanos mediante</TitleInfo>
            <ListCommunication>
              <BtnIcon>
                <CallIcon fontSize='large' style={{ color: '#4285f4' }} />
              </BtnIcon>
              <BtnIcon>
                <WhatsAppIcon fontSize='large' style={{ color: '#25d366' }} />
              </BtnIcon>
              <BtnIcon>
                <EmailIcon fontSize='large' style={{ color: '#dd4b39' }} />
              </BtnIcon>
              <BtnIcon>
                <InstagramIcon fontSize='large' style={{ color: '#c13584' }} />
              </BtnIcon>
            </ListCommunication>
          </ContentTools> */}
				</FlexJustify>
			</Container>
		</>
	)
}

export default Spare
