import { Cursor, useTypewriter } from 'react-simple-typewriter'
// import { API_URL } from '../../../config'
import { API_URL } from '../../../config'
import useFetch from '../../../hooks/useFetch'
import './heroSection.scss'
function HeroSection() {
	const { isLoading, data, isError } = useFetch(
		`${API_URL}/hero-section?populate=*`
	)
	const [text] = useTypewriter({
		words: data?.desc?.split(','),
		loop: {},
		typeSpeed: 100,
		delaySpeed: 80,
	})

	if (isError) <div>Error .(</div>

	return isLoading ? (
		<div>Loading...</div>
	) : (
		<section className='hero'>
			<div className='container'>
				<div className='hero-wrapper'>
					<div
						className='hero-wrapper__start'
						data-aos='fade-up'
						data-aos-duration='1000'
					>
						<img
							className='hero-wrapper__logo'
							src={data?.logo?.url}
							alt='Udevs'
							width={267}
							height={89}
						/>
						<h2 className='hero-wrapper__title'>{data.title}</h2>
						<h2 className='hero-wrapper__typewriter'>
							{text}
							<Cursor />
						</h2>
						<a className='hero-wrapper__contact-link' href='#contact'>
							Contact
						</a>
					</div>
					<div className='hero-wrapper__end'>
						<img
							src={data?.image?.url}
							alt='Hero-img'
							width={547}
							height={414}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
