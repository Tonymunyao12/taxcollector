const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const servicesMenu = document.querySelector('.services-menu');
const servicesToggle = document.querySelector('.services-toggle');
const quoteForm = document.querySelector('#quote-form');
const whatsappNumber = '254725281624';

menuToggle?.addEventListener('click', () => {
	const isOpen = navLinks.classList.toggle('is-open');
	menuToggle.setAttribute('aria-expanded', String(isOpen));
});

servicesToggle?.addEventListener('click', () => {
	const isOpen = servicesMenu.classList.toggle('is-open');
	servicesToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.querySelectorAll('a').forEach((link) => {
	link.addEventListener('click', () => {
		navLinks.classList.remove('is-open');
		menuToggle?.setAttribute('aria-expanded', 'false');
		servicesMenu?.classList.remove('is-open');
		servicesToggle?.setAttribute('aria-expanded', 'false');
	});
});

document.querySelectorAll('.service-list a').forEach((serviceLink) => {
	serviceLink.addEventListener('click', () => {
		const serviceName = serviceLink.querySelector('strong')?.textContent.trim();
		const serviceSelect = document.querySelector('#quote-service');
		if (serviceName && serviceSelect) serviceSelect.value = serviceName;
	});
});

quoteForm?.addEventListener('submit', (event) => {
	event.preventDefault();
	const formData = new FormData(quoteForm);
	const details = String(formData.get('details') || '').trim();
	const message = [
		'Hello Tax Collector, I would like to request a quote.',
		'',
		`Name: ${formData.get('name')}`,
		`Phone: ${formData.get('phone')}`,
		`Service: ${formData.get('service')}`,
		details ? `Details: ${details}` : '',
	].filter(Boolean).join('\n');

	window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
