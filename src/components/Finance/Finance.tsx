import { Tag, Slash, Zap, PieChart, FileText } from 'react-feather'

type FeatureCardProps = {
	icon: React.ReactNode
	title: string
	description: string
	className?: string
}

function FeatureCard({
	icon,
	title,
	description,
	className = '',
}: FeatureCardProps) {
	return (
		<div className={`rounded-[30px] bg-[#F3F3F3] p-6 lg:p-8 min-h-[220px] flex flex-col ${className}`}
		>
			<div className='w-16 h-16 rounded-full bg-[#E8E5E0] flex items-center justify-center'>
				{icon}
			</div>

			<div className='mt-8'>
				<h3 className='text-[24px] font-semibold leading-tight text-[#0F1111]'>
					{title}
				</h3>

				<p className='mt-4 text-[18px] leading-[1.4] text-[#3D3D3D]'>
					{description}
				</p>
			</div>
		</div>
	)
}

function Features() {
	return (
		<section id='services' className='section-scroll'>
			<div className='rounded-4xl bg-[#FE8D03] p-[20px] lg:px-[40px] lg:py-[40px]'>
				<div className='flex flex-col items-center text-center leading-[1.1] gap-2 sm:gap-4'>
					<h1>финансовая выгода</h1>
					<p className='description-text'>
						снижайте расходы за счёт множества финансовых преимуществ
					</p>
				</div>

				{/* Карточки */}
				<div className='mt-4 sm:mt-8 flex flex-col gap-6'>
					{/* Первый ряд */}
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
						<FeatureCard
							icon={<Tag size={28} color='#FE8D03' />}
							title='Экономия на топливе без ограничений'
							description='Скидка предоставляется независимо от объёма заправок — вы экономите с первого литра'
						/>

						<FeatureCard
							icon={<Slash size={28} color='#FE8D03' />}
							title='Без комиссий и скрытых платежей'
							description='Никаких сборов за обслуживание — вы платите только за топливо и услуги'
						/>

						<FeatureCard
							icon={<Zap size={28} color='#FE8D03' />}
							title='Мгновенное пополнение и оплата'
							description='Баланс пополняется моментально, без задержек и простоев. Ваш автопарк всегда готов к работе'
						/>
					</div>

					{/* второй ряд */}
					<div className='grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6'>
						<FeatureCard
							icon={<PieChart size={28} color='#FE8D03' />}
							title='Полный контроль транзакций онлайн'
							description='Отслеживайте все операции в реальном времени и управляйте расходами автопарка из одного интерфейса'
						/>

						<FeatureCard
							icon={<FileText size={28} color='#FE8D03' />}
							title='Возврат НДС и оптимизация расходов'
							description='Снижайте налоговую нагрузку за счёт возврата НДС и эффективного управления затратами'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Features
