import FileSaver from "file-saver";

export const getImgHeight = (imageUrl: string) => {
    const img = new Image();
    img.src = imageUrl;

    let newheight: number;
    newheight = 0;
    if (img.height > 1500) {
        newheight = img.height / 2;
    }

    return newheight;
}

export const getImgWidth = (imageUrl: string) => {
    const img = new Image();
    img.src = imageUrl;

    let newWidth: number;
    newWidth = 0;

    if (img.width > 1500) {
        newWidth = img.width / 2;
    }

    return newWidth;
}

export const downloadImage = (src: string) => {
    FileSaver.saveAs(`http://localhost:3000${src}`, 'KETAON FAIR.jpg');
}