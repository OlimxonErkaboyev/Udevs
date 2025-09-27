import { API_URL } from '../../../config'
import useFetch from '../../../hooks/useFetch'
import './SystemsSection.scss'

function SystemsSection() {
	const { isLoading, data, isError } = useFetch(
		`${API_URL}/erp-system?populate[system_tools][populate]=icon&populate=image`
	)
	if (isError) <div>Error .(</div>

	return isLoading ? (
		<div>Loading ...</div>
	) : (
		<section
			className='system-section'
			id='system'
			data-aos='fade-up'
			data-aos-duration='500'
		>
			<div className='container'>
				<h2 className='system-title'>{data.title}</h2>
				<div className='system-wrapper'>
					<div
						className='system-wrapper__start'
						data-aos='zoom-in'
						data-aos-duration='500'
					>
						<img
							className='system-wrapper__start-img'
							src={data?.image?.url}
							alt='System'
						/>
					</div>
					<div className='system-wrapper__end'>
						<p
							className='system-wrapper__end-title'
							data-aos='fade-up'
							data-aos-duration='500'
						>
							{data.desc}
						</p>
						<ul
							className='system-wrapper__end-list'
							data-aos='fade-up'
							data-aos-duration='500'
						>
							{data?.system_tools?.map((item, index) => (
								<li className='system-wrapper__end-item' key={index}>
									<img
										className='system-wrapper__end-item-img'
										src={item.icon.url}
										alt={item.title}
										width={56}
										height={56}
									/>
									<p className='system-wrapper__end-item-title'>{item.title}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SystemsSection
