import React, { useState } from 'react'

export default function useFilters() {
	const [typeParam, setTypeParam] = useState('')

	const handleOnTypeSelected = (element) => {
		let type = element.target.value
		setTypeParam(type)
	}

	return {
		typeParam,
		render: (
			<label htmlFor='type'>
				Type&ensp;
				<select
					name='select'
					id='type'
					onChange={handleOnTypeSelected}>
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
			</label>
		),
	}
}
