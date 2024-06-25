import React from 'react'
import '/src/index.css'

function Header({handleSubmit, search, setSearch}) {
	return (
	<form onSubmit={handleSubmit}
		className="container-header w-full text-white text-2xl font-bold bg-blue-700 px-4 py-2 mb-5 rounded">
    	<h1><a href='/Anime-Search-App/'>Search Anime</a></h1>
    	<input
    		autoFocus
    		className='rounded'
    		type='text'
    		value={search}
    		onChange={e => setSearch(e.target.value)}
    		style={{color: 'black',
    		fontSize: '1rem',
    		paddingLeft: '12px'
    	}}
    	/>
    	<button 
    	style={{
    		fontSize: '1rem',
    		fontWeight: '400',
    		backgroundColor: 'transparent',
    		padding: '8px 12px 8px 12px',
    		borderRadius: '6px',
    		border: '2px solid steelblue'
    	}}
    	type='submit'>Submit</button>
	</form>
	)

}

export default Header;