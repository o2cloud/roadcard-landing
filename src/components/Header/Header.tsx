import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'react-feather'
import { Button } from '../ui/button'
import './Header.css'
function Navbar() {
	const [isOpen, setIsOpen] = useState(false)
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id)
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			})
		}
		setIsOpen(false)
	}
	return (
		<header>
			<div className='flex fixed max-w-[2816px] mx-auto top-[10px] md:top-[20px] right-[10px] left-[10px] md:right-5 md:left-5 bg-white justify-between items-center py-[5px] px-[10px] rounded-full z-50 shadow-[0px_0px_30px_5px_rgba(0,0,0,0.1)]'>
				<div className='logo'>
					<button
						onClick={() => scrollToSection('hero')}
						className='text-[#0F1111]'
					>
						РОАД
					</button>
					<button
						onClick={() => scrollToSection('hero')}
						className='text-[#ED8507]'
					>
						КАРД
					</button>
				</div>
				<nav className='hidden md:flex gap-10 text-[20px] font-semibold'>
					<button
						onClick={() => scrollToSection('system')}
						className='nav-item'
					>
						система
					</button>
					<button onClick={() => scrollToSection('about')} className='nav-item'>
						о нас
					</button>
					<button
						onClick={() => scrollToSection('services')}
						className='nav-item'
					>
						услуги
					</button>
					<button
						onClick={() => scrollToSection('contacts')}
						className='nav-item'
					>
						контакты
					</button>
				</nav>
				<div className='flex'>
					<div className='hidden sm:block'>
						<Button
							className='navbar-button'
							variant='outline'
							onClick={() =>
								(window.location.href = 'https://roadkard.fuel-store.ru/')
							}
						>
							<ArrowUpRight className='!w-6 !h-6 -ml-1' />
							вход
						</Button>
					</div>

					<Button
						variant='outline'
						className='sm:hidden rounded-full navbar-button !px-4.5'
						onClick={() => setIsOpen(prev => !prev)}
					>
						{isOpen ? (
							<X className='w-7 h-7 -m-3' />
						) : (
							<Menu className='w-7 h-7 -m-3' />
						)}
					</Button>
				</div>
			</div>

			{/* mobile dropdown */}
			<div
				className={`fixed top-[80px] right-[10px] left-[10px] md:right-5 md:left-5 md:top-25 mobile-dropdown sm:hidden ${isOpen ? 'mobile-dropdown-open' : 'mobile-dropdown-closed'}`}
			>
				<nav className='flex flex-col w-full items-center gap-5 text-[20px] font-semibold'>
					<button onClick={() => scrollToSection('system')}>система</button>
					<button onClick={() => scrollToSection('about')} className='nav-item'>
						о нас
					</button>
					<button onClick={() => scrollToSection('services')}>услуги</button>
					<button onClick={() => scrollToSection('contacts')}>контакты</button>
					<a href='https://roadkard.fuel-store.ru/'>
						<div
							className='flex items-center justify-center mr-2 text-[#FE8C00]'
							onClick={() => setIsOpen(false)}
						>
							<ArrowUpRight />
							<span>вход</span>
						</div>
					</a>
				</nav>
			</div>
		</header>
	)
}

export default Navbar
