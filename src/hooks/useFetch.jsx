import { useEffect, useState } from 'react'

export default function useFetch(url) {
	const [isloading, setIsloading] = useState(false)
	const [isError, setError] = useState()
	const [data, setData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			setIsloading(true)
			try {
				const res = await fetch(url)
				const data = await res.json()

				setData(data.data)
				setIsloading(false)
			} catch (error) {
				setError(error)
				setIsloading(false)
			}
		}

		fetchData()
	}, [url])

	return {
		isloading,
		data,
		isError,
	}
}
