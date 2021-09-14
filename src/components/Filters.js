import React, { useState } from 'react'

export default function useFilters() {
	const [price, setPrice] = useState(0)
	const [participants, setParticipants] = useState(1)
	const [accessability, setAccessability] = useState(0)

	return {
		render: (
			<div className='filters-container'>
				<label htmlFor='price'>Price</label>
				<input type='range' id='price' />
				<label htmlFor='accessability'>Accessability</label>
				<input type='range' id='accessability' min='1' max='10' />
				<label htmlFor='participants'>Participants</label>
				<input type='range' id='participants' min='1' max='5' />
			</div>
		),
	}
}
