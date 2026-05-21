import fuelCards from '../../assets/images/system/ui/fuel-cards.svg'
import contractInfo from '../../assets/images/system/ui/contract-info.svg'
import finance from '../../assets/images/system/ui/finance.svg'
import purchasesChart from '../../assets/images/system/ui/purchases-chart.svg'

import clouds from '../../assets/images/system/backgrounds/clouds.png'
import desert from '../../assets/images/system/backgrounds/desert.png'
import skyDesert from '../../assets/images/system/backgrounds/sky-desert.png'

import './System.css'

type CardType = {
	bg: string
	title: string
	description: string
	images: string[]
}

const cards: CardType[] = [
	{
		bg: skyDesert,
		title: 'Отслеживайте показатели',
		description: 'Контролируйте расходы, географию заправок и многое другое при помощи графиков',
		images: [purchasesChart],
	},
	{
		bg: clouds,
		title: 'Следите за топливными картами',
		description: 'Наблюдайте за всеми добавленными топливными картами и управляйте ими',
		images: [fuelCards],
	},
	{
		bg: desert,
		title: 'Контролируйте финансы',
		description: 'Отслеживайте расходы и управляйте финансами автопарка в режиме реального времени',
		images: [contractInfo, finance],
	},
]

function System() {
	return (
		<section
			id='system'
			className='section-scroll bg-white p-[20px] lg:px-[40px] lg:py-[40px] rounded-[30px]'
		>
			<div className='flex flex-col items-center gap-6'>
				{/* заголовок раздела */}
				<div className='flex flex-col items-center'>
					<h1>полный контроль</h1>

					<p className='description-text'>
						<span className='hidden sm:inline'>
							мы предлагаем единый сервис, позволяющий полностью контролировать
							ваш бизнес — от мониторинга до управления закупками и заключения
							договоров
						</span>
						<span className='inline sm:hidden'>
							полный контроль вашего бизнеса — от мониторинга до заключения
							договоров
						</span>
					</p>
				</div>

				{/* карточки */}
				<div className='grid w-full gap-6 md:grid-cols-2 xl:grid-cols-3'>
					{cards.map((card, index) => (
						<div
							key={index}
							className={`card h-full   ${
								index === 2
									? 'md:translate-x-[calc(50%+12px)] xl:translate-x-0'
									: ''
							}`}
							style={
								{
									'--bg': `url(${card.bg})`,
								} as React.CSSProperties
							}
						>
							<div className='flex h-full flex-col gap-4'>
								{/* изображение */}
								<div className='flex flex-col gap-3'>
									{card.images.map((image, imageIndex) => (
										<div key={imageIndex} className='flex justify-center'>
											<div className='card-image-container'>
												<img src={image} alt={card.title} />
											</div>
										</div>
									))}
								</div>

								{/* текст - заголовок и описание */}
								<div className='mt-auto'>
									<h3 className='card-text-header'>{card.title}</h3>
									<p className='card-text-main'>{card.description}</p>
								</div>
								
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default System