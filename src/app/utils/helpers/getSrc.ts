import image from '../../assets/images/no-image.png';

export const imgSrc = (endpoint?: string) => {
	if (endpoint) {
		return import.meta.env.VITE_BASE_URL.replace('v1', '') + endpoint;
	}
	return image;
};
