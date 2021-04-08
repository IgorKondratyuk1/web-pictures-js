const showPicture = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => showImg(block));
        block.addEventListener('mouseout', () => hideImg(block));
    });

    function showImg(block) {
        const img = block.querySelector('img');
        img.src = img.src.slice(0,-4) + "-1.png";

        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = "none";
        });
    }

    function hideImg(block) {
        const img = block.querySelector('img');
        img.src = img.src.slice(0,-6) + ".png";

        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = "block";
        });
    }
};

export default showPicture;