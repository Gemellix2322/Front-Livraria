import { useState } from 'react';

const ImageInput = ({ className, name, maxHeight = 200 }) => {
    const [preview, setPreview] = useState('');

    const readAndResizeImage = async (file) => {
        // Criar uma Promise para ler o arquivo
        const readFile = new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.readAsDataURL(file);
        });

        // Ler o arquivo
        const imageUrl = await readFile;

        // Criar uma Promise para redimensionar a imagem
        const resizeImage = new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                // Calcular as novas dimensões
                let width = img.width;
                let height = img.height;

                if (height > maxHeight) {
                    width = (maxHeight * width) / height;
                    height = maxHeight;
                }

                // Definir dimensões do canvas
                canvas.width = width;
                canvas.height = height;

                // Desenhar imagem redimensionada
                ctx.drawImage(img, 0, 0, width, height);

                // Converter para JPEG
                resolve(canvas.toDataURL('image/jpeg'));
            };
            img.src = imageUrl;
        });

        return await resizeImage;
    };

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        
        if (file && file.type.match(/^image\//)) {
            try {
                const resizedImage = await readAndResizeImage(file);
                setPreview(resizedImage);
            } catch (error) {
                console.error('Erro ao processar imagem:', error);
                setPreview('');
            }
        }
    };

    return (
        <div 
            className={className} 
            style={{
                backgroundImage: preview ? `url(${preview})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative'
            }}
        >
            <input 
                type="hidden" 
                name={name} 
                value={preview} 
            />
            <input
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0,
                    cursor: 'pointer'
                }}
            />
        </div>
    );
};

export default ImageInput;