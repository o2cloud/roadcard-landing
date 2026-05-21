function Contacts() {
	return (
		<section id='contacts' className='section-scroll'>
			<div className='flex sm:flex-row flex-col justify-between items-center gap-6 bg-white py-[40px] px-[20px] lg:px-[40px] xl:px-[150px] lg:py-[40px] rounded-[30px] leading-[1.1]'>
				<div className='text-center sm:text-left'>
					<h2>остались вопросы?</h2>
					<h2>свяжитесь с нами!</h2>
				</div>
				<div className='text-center sm:text-right items-end'>
					<div className='text-[clamp(26px,4vw,32px)] font-medium '>
						<p>+7(927)-709-71-56</p>
						<p>info@roadkard.ru</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contacts
