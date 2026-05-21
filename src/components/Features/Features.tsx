import trucks from '../../assets/images/features/two-trucks.png'
import {
	User,
	Search,
	Phone,
	Globe,
	CreditCard,
	Droplet,
	FileText,
	MapPin,
} from 'react-feather'

function Features() {
	const features = [
		{
			icon: User,
			text: 'личный кабинет',
		},
		{
			icon: Search,
			text: 'бесплатный топливный аудит',
		},
		{
			icon: Phone,
			text: 'индивидуальный менеджер 24/7',
		},
		{
			icon: Globe,
			text: 'по всей РФ',
		},
		{
			icon: MapPin,
			text: 'все виды топлива',
		},
		{
			icon: CreditCard,
			text: 'онлайн управление картами',
		},
		{
			icon: Droplet,
			text: 'брендовые АЗС',
		},
		{
			icon: FileText,
			text: 'единый счет на все карты',
		},
	]
	return (
		<section>
			<div className='flex flex-col items-center gap-2 sm:gap-6 bg-white px-[10px] py-[20px] lg:px-[40px] lg:py-[40px] rounded-[30px]'>
				<div className='flex flex-col justify-center items-center gap-0 sm:gap-2'>
					<h1>удобный сервис</h1>
					<p className='description-text'>
						<span className='hidden sm:inline'>
							мы объединяем все инструменты для управления автопарком в одном
							месте, обеспечивая полный контроль и поддержку 24/7
						</span>
						<span className='inline sm:hidden'>
							все инструменты для управления автопарком в одном месте
						</span>
					</p>
				</div>

				<div className='grid grid-cols-1 w-full lg:grid-cols-2 lg:items-center gap-6'>
					<div className='border border-[#FE8D03] rounded-[30px] overflow-hidden hidden lg:block h-full lg:max-h-[450px]'>
						<img src={trucks} className='w-full h-full object-cover' />
					</div>

					<div className='flex flex-wrap justify-center gap-2 sm:gap-4 lg:justify-start'>
						{features.map((feature, index) => {
							const Icon = feature.icon
							return (
								<div
									key={index}
									className='flex w-fit items-center gap-1 sm:gap-3 rounded-full bg-[#FFE8CC] whitespace-nowrap border border-[#FE8D03] px-[4px] py-[2px] sm:px-[20px] sm:py-[10px] text-[#0F1111]'
								>
									<Icon className='text-[#0F1111] w-4 h-4 md:w-6 md:h-6 shrink-0' />
									<p className='font-medium leading-none text-[clamp(14px,3vw,24px)]'>
										{feature.text}
									</p>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Features
