import React from 'react'
import '/src/index.css'
import searchIcon from "../assets/images/search.png"

function Header({ handleSubmit, search, setSearch, handleMenu, menu }) {
	return (
		<form
			onSubmit={handleSubmit}
			className="flex items-center justify-between container-header w-full text-white  bg-[#282828] p-3 shadow-sm"
		>
			{/* <a href='/'>HEYYYYY!!</a> */}
			<div className='flex items-center'>

				<input
					autoFocus
					placeholder='Search...'
					className='outline-none p-2 text-black mr-2 text-sm'
					type='text'
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>

				<button
					className='bg-[#1d1d1d] p-2 text-sm rounded-lg hover:shadow-sm'
					type='submit'
					>
						<img className='w-[20px]' src={searchIcon} alt="" />
					</button>

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
