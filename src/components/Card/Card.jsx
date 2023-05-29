import data from '../../data.json'
import { Head } from '../Head/Head'

import { ImgContainer, Image, CardTitleContainer, CardLink } from '../Card.styled'

export const Card = () => {
	return data.map((photo) => {
		return (
			<ImgContainer
				key={photo.id}
			>
				<Image
					src={photo.url}
					
					alt={photo.title}
				/>
				<CardTitleContainer>
					<h5>Card title: {photo.title}</h5>
					{/* {Head({ id: 'id-123', clas: 'card-title' })} */}

					<Head id='id-123'>
						<p>jjjljdj</p>
					</Head>

					<CardLink href='http'>
						Go somewhere
					</CardLink>
				</CardTitleContainer>
			</ImgContainer>
		)
	})
}