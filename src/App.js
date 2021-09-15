import React, { useState } from 'react'
import Activity from './components/Activity'
import useFilters from './components/Filters'
import Filters from './components/Filters'
import './style.css'

function App() {
	const API_URL = 'https://www.boredapi.com/api/activity'

	const [activityObject, setActivityObject] = useState({})
	const { activity, link, type } = activityObject

	const {
		render,
		accessabilityParam,
		participantsParam,
		typeParam,
		priceParam,
	} = useFilters()

	const getActivity = async () => {
		const res = await fetch(`${API_URL}?type=${typeParam}`)
		const data = await res.json()
		setActivityObject(data)
		console.log(activityObject)
	}

	return (
		<div className='container'>
			<h1>Bored App</h1>
			<div className='input-div'>
				{render}
				<button className='generate-button' onClick={getActivity}>
					Generate
				</button>
			</div>
			<Activity {...{ activity, type, link }}></Activity>
		</div>
	)
}

export default App
