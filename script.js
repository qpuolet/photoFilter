document.addEventListener('DOMContentLoaded', () => {
    const img = document.getElementById('img');
    const canvas = document.getElementById('canvas');
    const downloadButton = document.getElementById('downloadButton');

    img.addEventListener('load', () => {
        // canvas.height = img.height;
        // canvas.width = img.width;
        const context = canvas.getContext('2d');
        context.filter = 'contrast(1.4) sepia(1) blur(3)';
        context.drawImage(img, 0, 0, img.width * 1, img.height * 1);
    });

    downloadButton.addEventListener('click', () => {
        // get canvas data
        const image = canvas.toDataURL();

        // create temporary link
        const tmpLink = document.createElement('a');
        tmpLink.download = 'filteredImage.png'; // set the name of the download file
        tmpLink.href = image;

        // temporarily add link to body and initiate the download
        document.body.appendChild(tmpLink);
        tmpLink.click();
        document.body.removeChild(tmpLink);
    });
});