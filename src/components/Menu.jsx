import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
	return (
		<div>
			<Link to={'/'}><button>home</button></Link>
			<Link to={'/next'}><button>next</button></Link>
		</div>
	)
}
