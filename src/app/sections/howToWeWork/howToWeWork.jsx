// import React from 'react'
import { API_URL } from '../../../config'
import useFetch from '../../../hooks/useFetch'
import './howToWeWork.scss'

const Work = () => {
	const { isLoading, data, isError } = useFetch(
		`${API_URL}/work-section?populate[work_steps][populate]=icon`
	)
	if (isError) <div>Error .(</div>

	return isLoading ? (
		<div>Loading...</div>
	) : (
		<section className='work-section'>
			<div className='container'>
				<h2 className='work-title'>{data.title}</h2>
			</div>
			<div className='Container'>
				<div className='work-wrapper'>
					<ul className='work-wrapper__content'>
						{data?.work_steps?.map((item, index) => (
							<li className='work-wrapper__content-item' key={index}>
								<img
									className='work-wrapper__content-item-img'
									src={item.icon.url}
									alt={item.title}
									width={81}
									height={80}
								/>
								<div>
									<h3 className='work-wrapper__content-item-title'>
										{item.title}
									</h3>
									<p className='work-wrapper__content-item-text'>
										{item.desc[0].children[0].text}
									</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Work
