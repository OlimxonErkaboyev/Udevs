import React from 'react'
import { API_URL } from '../../../config'
import useFetch from '../../../hooks/useFetch'
import './contactUs.scss'

const Contact = () => {
	const { isLoading, data, isError } = useFetch(
		`${API_URL}/contact-us-section?populate[contact_uses][populate]=icon`
	)
	if (isError) <div>Error .(</div>

	const handleSubmit = e => {
		e.preventDefault()
		alert(
			'Name: ' +
				e.target.name.value +
				'\n' +
				'Email: ' +
				e.target.email.value +
				'\n' +
				'Message: ' +
				e.target.textarea.value
		)
	}
	return isLoading ? (
		<div>Loading...</div>
	) : (
		<section className='contact-section'>
			<div className='container'>
				<h2 className='contact-title'>{data.title}</h2>
				<div className='contact-wrapper'>
					<h3 className='contact-wrapper__content-title'>Leave us a message</h3>
					<div className='contact-wrapper__all'>
						<div className='contact-wrapper__content'>
							<form method='GET' onSubmit={e => handleSubmit(e)}>
								<div className='form-group'>
									<input
										type='text'
										className='input-field'
										id='name'
										name='name'
										required
										placeholder=' '
									/>
									<label className='floating-label' htmlFor='username'>
										Name
									</label>
								</div>
								<div className='form-group'>
									<input
										type='email'
										className='input-field'
										id='email'
										name='email'
										required
										placeholder=' '
									/>
									<label className='floating-label' htmlFor='email'>
										Your email
									</label>
								</div>
								<div className='form-group'>
									<textarea
										type='text'
										className='input-field text-area'
										id='textarea'
										name='textarea'
										placeholder=' '
									/>
									<label className='floating-label' htmlFor='textarea'>
										Briefly describe your project
									</label>
								</div>
								<button className='submit-button' role='submit'>
									Send
								</button>
							</form>
						</div>
						<div className='contact-wrapper__address'>
							<ul className='contact-wrapper__address-list'>
								{data &&
									data.contact_uses?.map((address, index) => (
										<li className='contact-wrapper__address-item' key={index}>
											<a
												className='contact-wrapper__address-item__link'
												href={address.path}
												target='_blank'
											>
												<img
													src={address.icon.url}
													alt={address.title}
													width={24}
													height={24}
												/>
												{address.title}
											</a>
										</li>
									))}
							</ul>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.2103862077647!2d69.33907017933778!3d41.34778063119769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5d2e826dd91%3A0x47b8110b47f46ba4!2sU%20ACADEMY!5e0!3m2!1suz!2s!4v1699893964938!5m2!1suz!2s'
								width='400'
								height='200'
								loading='lazy'
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
