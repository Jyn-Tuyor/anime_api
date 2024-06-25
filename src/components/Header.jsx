import React from 'react'
import '/src/index.css'

function Header({handleSubmit, search, setSearch, handleMenu, menu, menuRef}) {
	return (
	<form onSubmit={handleSubmit}
		className="container-header w-full text-white text-2xl font-bold bg-blue-700 px-4 py-2 mb-5 rounded">
    	<h1><a href='/Anime-Search-App/'>Search Anime</a></h1>
    	<div className={`input-container ${menu ? 'active' : ''}`}>
    		
    		<input
    		autoFocus
    		placeholder='Search'
    		className='rounded'
    		type='text'
    		value={search}
    		onChange={e => setSearch(e.target.value)}
    		style={{color: 'black',
    		fontSize: '1rem',
    		paddingLeft: '12px'
    	}}
    	/>

    	</div>
    	
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
    	<div 
    	onClick={handleMenu}
    	ref={menuRef}
    	className={`menu ${menu ? 'active' : ''}`}>
    		<div className={`bar bar1 ${menu ? 'active' : ''}`}></div>
    		<div className={`bar bar2 ${menu ? 'active' : ''}`}></div>
    		<div className={`bar bar3 ${menu ? 'active' : ''}`}></div>
    	</div>
	</form>
	)

}

export default Header;