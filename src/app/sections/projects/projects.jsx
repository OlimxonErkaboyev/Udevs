import { useEffect, useState } from 'react'
import { API_URL } from '../../../config'
import useFetch from '../../../hooks/useFetch'
import ProjectDesktop from '../../components/projectsDesktop/projectsDesktop'
import ProjectMobile from '../../components/projectsMobile/projectsMobile'

const Projects = () => {
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900)
	const { isLoading, data, isError } = useFetch(
		`${API_URL}/projects?populate[tools][populate]=icon&populate[project_badge][populate]=img&populate=image`
	)

	const updateMedia = () => {
		setIsDesktop(window.innerWidth > 900)
	}

	useEffect(() => {
		window.addEventListener('resize', updateMedia)
		return () => window.removeEventListener('resize', updateMedia)
	})

	if (isError) <div>Error (</div>
	return isLoading ? (
		<div>Loading...</div>
	) : (
		<>
			{data.map((project, index) => {
				return isDesktop ? (
					<ProjectDesktop key={index} data={project} />
				) : (
					<ProjectMobile key={index} data={project} />
				)
			})}
		</>
	)
}

export default Projects
