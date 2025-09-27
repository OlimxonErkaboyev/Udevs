// import { API_URL } from '../../../config'
import { API_URL } from '../../../config'
import useFetch from '../../../hooks/useFetch'
import './servicesSection.scss'

function ServicesSection() {
	const { isLoading, data, isError } = useFetch(
		`${API_URL}/services?populate=icon`
	)
	if (isLoading) <div>Loading...</div>
	if (isError) <div>Error .(</div>

	return (
		<section className='services' id='direction'>
			<div className='container'>
				<div className='services-wrapper'>
					<h2
						className='services-wrapper__title'
						data-aos='fade-up'
						data-aos-duration='500'
					>
						Our services
					</h2>
					<ul
						className='services-card__list'
						data-aos='fade-up'
						data-aos-duration='500'
					>
						{data.map((service, index) => (
							<li className='services-card__item' key={index}>
								<img src={service?.icon?.url} alt={service.title} />
								<p className='services-card__title'>{service.title}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default ServicesSection
