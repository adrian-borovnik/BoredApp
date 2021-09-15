import React, { useState } from 'react'

export default function useFilters() {
	const [price, setPrice] = useState(0)
	const [participants, setParticipants] = useState(1)
	const [accessability, setAccessability] = useState(0)

	return {
		render: (
			<div className='filters-container'>
				<div className='input-div'>
					<label htmlFor='price'>Price</label>
					<input type='range' id='price' />
				</div>

				<div className='input-div'>
					<label htmlFor='accessability'>Accessability</label>
					<input type='range' id='accessability' />
				</div>

				<div className='input-div'>
					<label htmlFor='participants'>Participants</label>
					<input type='range' id='participants' />
				</div>

				<div className='input-div'>
					<label htmlFor='type'>Type</label>
					<select name='select' id='type'>
						<option value=''>All</option>
						<option value='education'>Education</option>
						<option value='recreational'>Recreational</option>
						<option value='social'>Social</option>
						<option value='diy'>Diy</option>
						<option value='charity'>Charity</option>
						<option value='cooking'>Cooking</option>
						<option value='relaxation'>Relaxation</option>
						<option value='music'>Music</option>
						<option value='busywork'>Busywork</option>
					</select>
				</div>
			</div>
		),
	}
}
