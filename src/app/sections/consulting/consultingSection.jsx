import { API_URL } from '../../../config'
import useFetch from '../../../hooks/useFetch'
import './consultingSection.scss'

function ConsultingSection() {
	const { isLoading, data, isError } = useFetch(
		`${API_URL}/consulting-section?populate[contulting_tools][populate]=icon&populate=image`
	)
	if (isError) <div>Error .(</div>

	return isLoading ? (
		<div>Loading...</div>
	) : (
		<section
			className='consult-section'
			id='consult'
			data-aos='fade-up'
			data-aos-duration='500'
		>
			<div className='container'>
				<h2 className='consult-title'>{data.title}</h2>
				<div className='consult-wrapper'>
					<div className='consult-wrapper__start'>
						<p className='consult-wrapper__start-title'>{data.desc}</p>
						<ul
							className='consult-wrapper__start-list'
							data-aos='fade-up'
							data-aos-duration='600'
						>
							{data?.contulting_tools?.map((item, index) => (
								<li className='consult-wrapper__start-item' key={index}>
									<img
										className='consult-wrapper__start-item-img'
										src={item.icon.url}
										alt={item.title}
										width={56}
										height={56}
									/>
									<p className='consult-wrapper__start-item-title'>
										{item.title}
									</p>
								</li>
							))}
						</ul>
					</div>
					<div className='consult-wrapper__end' data-aos='zoom-in'>
						<img
							className='consult-wrapper__start-tech-img'
							src={data?.image?.url}
							alt='IT Consulting'
							width={500}
							height={313}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ConsultingSection
