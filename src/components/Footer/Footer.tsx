import { useState } from 'react'
function Footer() {
	const [, setIsOpen] = useState(false)
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
		<footer>
			<div className='grid grid-cols gap-6 bg-[#1B1D20] p-[20px] lg:px-[40px] xl:px-[150px] lg:py-[40px] rounded-[30px] leading-[1.1]'>
				<div className='grid gap-6 text-center justify-center items-center'>
					<div className='grid gap-2'>
						<h2 className='text-white'>
							<button onClick={() => scrollToSection('hero')}>РОАДКАРД</button>
						</h2>
						<p className='footer-text'>
							<p>современная система для управления автопарком.</p>
							<p>помогаем бизнесу работать прозрачно и эффективно.</p>
						</p>
					</div>

					<div className='w-full flex justify-center items-center'>
						<nav className='flex flex-wrap justify-center gap-4 md:gap-10 text-[20px] text-white font-semibold'>
							<button onClick={() => scrollToSection('system')}>система</button>
							<button onClick={() => scrollToSection('about')}>о нас</button>
							<button onClick={() => scrollToSection('services')}>услуги</button>
							<button onClick={() => scrollToSection('contacts')}>контакты</button>
							<a href='https://roadkard.fuel-store.ru/'>вход</a>
						</nav>
					</div>
				</div>
				<div>
					<hr className='border-0 h-[2px] bg-[#5B5B5B]' />
					<div className='footer-text'>
						<div className='justify-between w-full flex flex-row mt-[15px]'>
							<p>ООО “РОАДКАРД”</p>
							<p>Тольятти, 2026</p>
						</div>
						<div className='justify-between w-full gap-3 md:gap-0 flex flex-col md:flex-row mt-[15px]'>
							<p className='text-left'>
								<a
									href='../../../public/files/ПОЛИТИКА_В_ОТНОШЕНИИ_ОБРАБОТКИ_ПЕРСОНАЛЬНЫХ_ДАННЫХ.pdf'
									target='_blank'
									rel='noopener noreferrer'
								>
									Политика в отношении персональных данных
								</a>
							</p>
							<p className='text-left md:text-right'>
								<a
									href='../../../public/files/ПОЛИТИКА_ИСПОЛЬЗОВАНИЯ_ФАЙЛОВ_COOKIE.pdf'
									target='_blank'
									rel='noopener noreferrer'
								>
									Политика использования файлов cookie
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
