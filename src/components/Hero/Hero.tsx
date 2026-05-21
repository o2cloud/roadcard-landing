import { Button } from '../ui/button'
import truckImage from '../../assets/images/hero/truck-hero.png'
function Hero() {
	return (
		<section id='hero' className='section-scroll !scroll-mt-[85px]'>
			<div className='relative bg-[#666666] flex items-center justify-center rounded-[30px] overflow-hidden min-h-[650px] md:min-h-[680px] 2xl:min-h-[850px]'>
				<img
					src={truckImage}
					alt='cargo truck'
					className='absolute inset-0 h-full w-full object-cover'
				></img>
				<div className='relative z-1 flex flex-col items-center text-center px-4 gap-[20px]'>
					<h1 className='leading-[1] md:leading-[0.9] text-white'>
						<span className='text-[#FE8C00] text-[clamp(46px,5vw,72px)]'>
							комплексное решение
						</span>{' '}
						<br />
						<span>для вашего автопарка</span>
					</h1>
					<div className='max-w-[900px]'>
						<p className='description-text text-white'>
							<span className='hidden sm:inline'>
								мы обеспечиваем полный цикл обслуживания автопарка — от
								топливных решений до страхования и сервиса, гарантируя
								стабильную и бесперебойную работу с контролем расходов по всей
								России
							</span>
							<span className='inline sm:hidden'>
								полный цикл обслуживания автопарка — от топлива до страхования с
								контролем расходов по всей России
							</span>
						</p>
					</div>
					<div className='flex flex-col sm:flex-row gap-4'>
						<Button
							className='
						bg-[#FE8C00] color-white hover:bg-[#D57500] !px-[20px] !py-[10px] !font-semibold !text-[20px]'
							onClick={() =>
								(window.location.href = 'https://roadkard.fuel-store.ru/')
							}
						>
							узнать подробнее
						</Button>
						<Button
							variant='outline'
							className='border-[#FE8C00] text-[#FE8C00] bg-white/30 hover:bg-white/40 hover:text-[#FE8C00] !font-semibold backdrop-blur-xs !px-[20px] !py-[10px] !text-[20px]'
							onClick={() => {
								document
									.getElementById('contacts')
									?.scrollIntoView({ behavior: 'smooth' })
							}}
						>
							<a href='#contacts'>связаться с нами</a>
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
