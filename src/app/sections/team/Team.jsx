/* eslint-disable react/prop-types */
import { animated, useSpring } from 'react-spring'
import { API_URL } from '../../../config'
import useFetch from '../../../hooks/useFetch'
import './Team.scss'

function Number({ n }) {
	const { number } = useSpring({
		from: { number: 0 },
		number: n,
		delay: 1000,
		config: { mass: 1, tension: 20, friction: 10 },
		onFrame: props => {
			// Clamp the value to a maximum of 100
			props.number = Math.min(props.number, 100)
		},
	})

	const animatedNumber = number.to(n => n.toFixed(0))

	// Ishga tushgandan so'ng + belgisini paydo qilish
	const animatedNumberWithPlus = animatedNumber.to(n =>
		n === '100' ? `${n}+` : n
	)

	return <animated.div>{animatedNumberWithPlus}</animated.div>
}
function Team() {
	const { isLoading, data, isError } = useFetch(
		`${API_URL}/team-section?populate=image`
	)
	if (isLoading) <div>Loading...</div>
	if (isError) <div>Error .(</div>

	console.log(data)

	return (
		<section className='team-section' id='command'>
			<div className='container'>
				<h2
					className='team-wrapper__start-title'
					data-aos='fade-up'
					data-aos-duration='500'
				>
					{data.title}
				</h2>
				<div className='team-wrapper'>
					<div
						className='team-wrapper__start'
						data-aos='fade-up'
						data-aos-duration='500'
					>
						<p className='team-wrapper__start-desc'>{data.desc}</p>
						<div className='team-wrapper__start-num' data-aos='fade-up'>
							<Number n={data.count} />
						</div>
						<p className='team-wrapper__start-text'>{data.paragraph}</p>
					</div>
					<div className='team-wrapper__end'>
						<img data-aos='zoom-in' src={data?.image?.url} alt='' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Team
