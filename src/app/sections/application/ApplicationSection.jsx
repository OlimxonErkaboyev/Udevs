import { API_URL } from '../../../config'
import useFetch from '../../../hooks/useFetch'
import './ApplicationSection.scss'

function ApplicationSection() {
	const { isLoading, data, isError } = useFetch(
		`${API_URL}/mobile-section?populate[mobile_apps][populate]=icon&populate[mobile_tools][populate]=icon&populate=image`
	)

	if (isError) <div>Error .(</div>

	const { mobile_apps, mobile_tools } = data
	return isLoading ? (
		<div>Loading ...</div>
	) : (
		<section
			className='application-section'
			id='application'
			data-aos='fade-up'
			data-aos-duration='500'
		>
			<div className='container'>
				<h2 className='application-title'>{data?.title}</h2>
				<div className='application-wrapper'>
					<div className='application-wrapper__start'>
						<p className='application-wrapper__start-title'>{data?.desc}</p>
						<ul
							className='application-wrapper__start-list'
							data-aos='fade-up'
							data-aos-duration='600'
						>
							{mobile_apps?.map((app, index) => (
								<li className='application-wrapper__start-item' key={index}>
									<img
										className='application-wrapper__start-item-img'
										src={app?.icon?.url}
										alt='Apple'
										width={56}
										height={56}
									/>
									<p className='application-wrapper__start-item-title'>
										{app.title}
									</p>
								</li>
							))}
						</ul>
						<div className='application-wrapper__start-tech'>
							<h3 className='application-wrapper__start-tech-title'>
								{data?.paragraph}
							</h3>
							<ul
								className='application-wrapper__start-tech-list'
								data-aos='fade-up'
								data-aos-duration='700'
							>
								{mobile_tools?.map((technique, index) => (
									<li
										className='application-wrapper__start-tech-item'
										key={index}
									>
										<img
											className='application-wrapper__start-tech-item-img'
											src={technique?.icon?.url}
											alt={technique.title}
											width={56}
											height={56}
										/>
										<p className='application-wrapper__start-tech-item-title'>
											{technique.title}
										</p>
									</li>
								))}
							</ul>
						</div>
					</div>
					<div
						className='application-wrapper__end'
						data-aos='zoom-in'
						data-aos-duration='500'
					>
						<img
							className='application-wrapper__start-tech-item-img'
							src={data?.image?.url}
							alt='Application'
							width={500}
							height={472}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ApplicationSection
