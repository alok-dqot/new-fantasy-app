export const randomInRange = (min: number, max: number) =>
	Math.floor(Math.random() * (max - min)) + min;






// const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL
const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL

export const getImgUrl = (fileName?: string) => {

	if (!fileName || fileName.toLowerCase() == 'na') return ''
	if (fileName.startsWith("http")) return fileName
	return IMAGE_URL + '/images/' + fileName
}


export function roundIfPointSix(num: any) {
	try {
		if (num?.includes('.6')) {
			const roundNumber = Number(num)
			return Math.ceil(roundNumber) + '.0';
		}
	}
	catch (err) {
		console.log(err)
	}

	return num;
}






