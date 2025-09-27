/* eslint-disable react/prop-types */
import './projectsMobile.scss'

const ProjectMobile = ({ data }) => {
	return (
		<section
			className='mobile__project-section'
			id={data?.path}
			data-aos='fade-up'
			data-aos-duration='500'
		>
			<div className='container'>
				<div className='mobile__project-wrapper'>
					<div className='mobile__project-top'>
						<h2
							className='mobile__project-title'
							style={{ color: data.color_title }}
						>
							{data.title}
						</h2>
						<span
							className='mobile__project-title__icon'
							style={{
								color: data?.color_title,
								backgroundColor: data?.project_badge?.bg,
							}}
						>
							<img
								src={data.project_badge.img.url}
								alt={data.project_badge.title}
								width={25}
								height={25}
							/>
							{data.project_badge.title}
						</span>
					</div>
					<div
						className='mobile__project-middle'
						data-aos='zoom-in'
						data-aos-duration='500'
					>
						<img
							className='mobile__project-middle__img'
							data-aos='zoom-in'
							src={data.image.url}
							alt={data.title}
						/>
					</div>
					<div className='mobile__project-end'>
						<p
							className='mobile__project-end__title'
							data-aos='fade-up'
							data-aos-duration='500'
						>
							{data.description}
						</p>
						<h3 className='mobile__project-end__branch'>{data.branch}</h3>
						<ul
							className='mobile__project-end__list'
							data-aos='fade-up'
							data-aos-duration='500'
						>
							{data.tools.map((item, index) => (
								<li className='mobile__project-end__item' key={index}>
									<img
										className='mobile__project-end__item-img'
										src={item.icon.url}
										alt={item.title}
										width={56}
										height={56}
									/>
									<p className='mobile__project-end__item-title'>
										{item.title}
									</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProjectMobile
