import './About.css'
function About() {
	return (
		<section id='about' className='section-scroll'>
			<div className='grid lg:grid-rows-3 grid-cols-1 lg:grid-cols-2 gap-6 bg-white p-[20px] lg:px-[40px] xl:px-[150px] lg:py-[40px] rounded-[30px] leading-[1.1]'>
				<div className='order-2 lg:order-1 lg:col-start-1 lg:row-start-1 about-card'>
					<h2>24/7</h2>
					<p>бесперебойная работа вашего автопарка</p>
				</div>

				<div className='order-3 lg:order-1 lg:col-start-1 lg:row-start-2 about-card'>
					<h2>до 28%</h2>
					<p>выгода при использовании топливных карт</p>
				</div>

				<div className='order-4 lg:order-1 lg:col-start-1 lg:row-start-3 about-card'>
					<h2>&gt;15 000</h2>
					<p>АЗС по всей России</p>
				</div>

				<div className='order-1 lg:order-2 lg:col-start-2 lg:row-start-1 lg:row-span-3 flex items-center text-center lg:text-right'>
					<h1>эффективное управление автопарком</h1>
				</div>
			</div>
		</section>
	)
}

export default About
