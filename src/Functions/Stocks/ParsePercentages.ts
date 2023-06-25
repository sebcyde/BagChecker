export const parsePercentages = (Percentage: number): string => {
	const roundedPercentage = Percentage.toFixed(2);
	return `${roundedPercentage}%`;
};
