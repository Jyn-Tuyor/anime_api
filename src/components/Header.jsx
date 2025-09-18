import React from 'react'
import '/src/index.css'

function Header({ handleSubmit, search, setSearch, handleMenu, menu }) {
	return (
		<form
			onSubmit={handleSubmit}
			className="container-header w-full text-white  bg-blue-500 p-3  rounded-sm"
		>
			<h1 class='text-xl'>
				<a href='/Anime-Search-App/'>HEYYYYY!!</a>
			</h1>
			<div>

				<input
					autoFocus
					placeholder='Search...'
					className='outline-none p-2 text-black mr-2'
					type='text'
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>

				<button
					className='bg-blue-600 p-2 rounded-sm hover:shadow-sm'
					type='submit'
					>Submit</button>
				<div
					onClick={handleMenu}
					className={`menu ${menu ? 'active' : ''}`}>
					<div className={`bar bar1 ${menu ? 'active' : ''}`}></div>
					<div className={`bar bar2 ${menu ? 'active' : ''}`}></div>
					<div className={`bar bar3 ${menu ? 'active' : ''}`}></div>
				</div>
			</div>

		</form>
	)

}

export default Header;
