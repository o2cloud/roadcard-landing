import { useEffect, useState } from 'react'

import { X } from 'react-feather'

function CookieBanner() {
	const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

	useEffect(() => {
		const isClosed = sessionStorage.getItem('cookie-banner-closed')

		if (!isClosed) {
			setIsVisible(true)
      setTimeout(() => {
				setIsAnimating(true)
			}, 10)
		}
	}, [])

	const closeBanner = () => {
    setIsAnimating(false)

    setTimeout(()=>{
      sessionStorage.setItem('cookie-banner-closed', 'true')
      setIsVisible(false)
    },300)

	}

	if (!isVisible) return null

	return (
		<div
			className={`fixed bottom-5 left-5 right-5 z-[100] rounded-[30px] bg-white p-5 shadow-[0px_0px_30px_5px_rgba(0,0,0,0.1)] transition-all duration-300 md:left-auto md:max-w-[800px] 
      ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
		>
			<div className='flex items-start justify-between gap-0'>
				<p className='text-[14px] font-medium leading-relaxed text-[#0F1111] md:text-[16px]'>
					Этот сайт использует cookie-файлы для корректной работы личного
					кабинета и улучшения пользовательского опыта. Продолжая использовать
					сайт, вы соглашаетесь с условиями{' '}
					<a
						href='../../../public/files/ПОЛИТИКА_ИСПОЛЬЗОВАНИЯ_ФАЙЛОВ_COOKIE.pdf'
						target='_blank'
						rel='noopener noreferrer'
						className='no-underline hover:underline text-[#FE8C00]'
					>
						Политики использования cookie
					</a>
				</p>

				<button
					onClick={closeBanner}
					className='shrink-0 text-[#000000]/70 transition-colors duration-200 hover:text-[#000000] cursor-pointer'
				>
					<X className='h-5 w-5' />
				</button>
			</div>
		</div>
	)
}

export default CookieBanner
