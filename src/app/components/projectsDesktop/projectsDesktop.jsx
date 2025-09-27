/* eslint-disable react/prop-types */
import './projectsDesktop.scss'

const ProjectDesktop = ({ data }) => {
	return (
		<section
			className='project-section'
			id={data.path}
			data-aos='fade-up'
			data-aos-duration='500'
		>
			<div className='container'>
				<div className={`project-wrapper `}>
					<div
						className='project-wrapper__start'
						data-aos='zoom-in'
						data-aos-duration='500'
					>
						<img
							className='project-wrapper__start-img'
							data-aos='zoom-in'
							src={data.image.url}
							alt={data.title}
						/>
					</div>
					<div className='project-wrapper__end'>
						<h2
							className='mobile__project-title'
							style={{ color: data.color_title }}
						>
							{data.title}
						</h2>

						<span
							className='project-title__icon'
							style={{
								color: data.color_title,
								backgroundColor: data.project_badge.bg,
							}}
						>
							<img
								src={data.project_badge?.img?.url}
								alt={data.project_badge.title}
								width={25}
								height={25}
							/>
							{data.project_badge.title}
						</span>
						<p
							className='project-wrapper__end-title'
							data-aos='fade-up'
							data-aos-duration='500'
						>
							{data.description}
						</p>
						<h3 className='project-wrapper__end-branch'>{data.branch}</h3>
						<ul
							className='project-wrapper__end-list'
							data-aos='fade-up'
							data-aos-duration='500'
						>
							{data.tools.map((item, index) => {
								return (
									<li className='project-wrapper__end-item' key={index}>
										<img
											className='project-wrapper__end-item-img'
											src={item.icon.url}
											alt={item.title}
											width={56}
											height={56}
										/>
										<p className='project-wrapper__end-item-title'>
											{item.title}
										</p>
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProjectDesktop
