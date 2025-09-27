import { useLocation } from 'react-router-dom'
import Footer from '../app/sections/common/footer/footer'
import Header from '../app/sections/common/header/header'
import '../index.scss'
import AppRoutes from '../routing/app-routes'

export default function RootLayout() {
	const currentpath = useLocation().pathname

	return (
		<>
			<div className='page-wrapper'>
				{!currentpath?.startsWith('/error') && <Header />}

				{/* CONTENT START */}
				<div className='page-content'>
					<AppRoutes />
				</div>
				{/* CONTENT END */}

				{!currentpath?.startsWith('/error') && <Footer />}
			</div>
		</>
	)
}
