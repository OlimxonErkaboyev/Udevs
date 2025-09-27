import { API_URL } from '../../../config'
import useFetch from '../../../hooks/useFetch'
import './ClientsSection.scss'

function Clients() {
	const { isLoading, data, isError } = useFetch(
		`${API_URL}/clients-section?populate[left_clients][populate]=image&populate[right_clients][populate]=image`
	)

	console.log(data)

	if (isError) <div>Error .(</div>
	return isLoading ? (
		<div>Loading...</div>
	) : (
		<section className='clients-section' id='clients'>
			<div className='container'>
				<h2 className='clients-title'>Our clients</h2>
			</div>
			<div className='clients-wrapper'>
				<div className='clients-wrapper__slide-right'>
					{[...Array(3)].map((_, index) => (
						<ul className='clients-wrapper__slide-right-box' key={index}>
							{data?.right_clients?.map((img, index) => (
								<li
									className='clients-wrapper__slide-right__min-box'
									key={index}
								>
									<div className='clients-wrapper__slide-right-box__img'>
										<img
											className='clients-wrapper__slide-right-img'
											src={img.image[0].url}
											alt='hi'
										/>
									</div>
								</li>
							))}
						</ul>
					))}
				</div>
				<div className='clients-wrapper__slide-left'>
					{[...Array(3)].map((_, index) => (
						<ul className='clients-wrapper__slide-left-box' key={index}>
							{data?.left_clients?.map((img, index) => (
								<li
									className='clients-wrapper__slide-left__min-box'
									key={index}
								>
									<div className='clients-wrapper__slide-left-box__img'>
										<img
											className='clients-wrapper__slide-left-img'
											src={img.image[0].url}
											alt='hi'
										/>
									</div>
								</li>
							))}
						</ul>
					))}
				</div>
			</div>
		</section>
	)
}

export default Clients
