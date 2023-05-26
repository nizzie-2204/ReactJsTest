export const convertFileToBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
    return new Promise<string | ArrayBuffer | null>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(file);
    });
};
