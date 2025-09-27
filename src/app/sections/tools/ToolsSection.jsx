import { useState } from 'react'
import { API_URL } from '../../../config'
import useFetch from '../../../hooks/useFetch'
import './ToolsSection.scss'

function Tools() {
	const { isLoading, data, isError } = useFetch(
		`${API_URL}/tools-section?populate[tools][populate]=icon&populate[categories]populate=*`
	)
	if (isError) <div>Error .(</div>

	const [category, setCategory] = useState('')
	const [isChecked, setIsChecked] = useState(false)

	function changeCategory(selectedCategory, category) {
		if (selectedCategory === category) {
			setIsChecked(!isChecked)
			setCategory(selectedCategory)
		} else {
			setIsChecked(true)
			setCategory(selectedCategory)
		}
	}

	return isLoading ? (
		<div>Loading...</div>
	) : (
		<section className='tools-section' id='tools'>
			<div className='container'>
				<div className='tools-wrapper'>
					<h2 className='tools-wrapper__title'>{data.title}</h2>
					<ul className='tools-wrapper__check-list'>
						{data?.categories?.map((item, id) => (
							<li key={id} className='tools-wrapper__check-list-item'>
								<p
									className={`tools-wrapper__category  ${
										item.label === category && isChecked ? 'active' : ''
									}`}
									onClick={() => changeCategory(item.label, category)}
								>
									{item.name}
								</p>
							</li>
						))}
					</ul>
					<ul className='tools-wrapper__icon-list'>
						{data?.tools?.map((item, index) => (
							<li
								key={index}
								className={`tools-wrapper__icon-item ${
									!isChecked || item.category === category ? 'selected' : ''
								} ${item.category}`}
							>
								<img
									className='tools-wrapper__icon-img'
									src={item.icon.url}
									alt={item.title}
									width={24}
									height={24}
								/>
								<p className='tools-wrapper__icon-title'>{item.title}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	)
}

export default Tools
