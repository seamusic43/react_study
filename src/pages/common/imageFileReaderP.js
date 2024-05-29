// 여러 이미지 파일 가져오는 함수 만들기
export const imageFileReaderP = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const result = e.target.result;
            if (result && typeof result === 'string' && result.startsWith('data:image'))
                resolve(e.target.result);
            else reject(new Error('Invalid image file'));
        }
        reader.onerror = (e) => {
            reject(e);
        }
        reader.readAsDataURL(file);
    });
}