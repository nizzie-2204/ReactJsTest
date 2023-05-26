export const formatPrice = (price: string): string => {
    return Number(price).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
};
