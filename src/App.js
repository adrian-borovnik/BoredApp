import React, { useState } from 'react'
import Activity from './components/Activity'
import Filters from './components/Filters'
import './style.css'

function App() {
	const API_URL = 'https://www.boredapi.com/api/activity/'

	const [activityObject, setActivityObject] = useState({})
	const { accessibility, activity, link, participants, price, type } =
		activityObject

	const getActivity = async () => {
		const res = await fetch(API_URL)
		const data = await res.json()
		setActivityObject(data)
		console.log(activityObject)
	}

	return (
		<div className='container'>
			<h1>Bored App</h1>
			<Filters></Filters>
			<Activity
				activity={activity}
				type={type}
				link={link}></Activity>
			<button onClick={getActivity}>Generate</button>
		</div>
	)
}

export default App
