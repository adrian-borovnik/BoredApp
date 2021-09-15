import React from 'react'

export default function Activity({ activity, type, link }) {
	return (
		<div className='activity-container'>
			<p className='type'>
				{type &&
					type.substring(0, 1).toUpperCase() +
						type.substring(1, type.length)}
			</p>
			<p className='activity'>{activity}</p>
			<a className='link' href={link} target='_blank'>
				{link}
			</a>
		</div>
	)
}
