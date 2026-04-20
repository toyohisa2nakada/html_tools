const folders = (function () {
    const tocList = document.getElementById('toc-list');
    const anchorTags = tocList.querySelectorAll('li a');

    const pythonLessons = [];

    anchorTags.forEach(anchor => {
        const href = anchor.getAttribute('href');
        // Extract the "original" string by taking the part after '#folder-' and before the next '_' or end
        const originalMatch = href.match(/#folder-(python_\d{2}_[a-zA-Z_]+)/);
        const original = originalMatch ? originalMatch[1] : null;

        // Extract the "number" from the href, assuming it's always two digits after 'python_'
        const numberMatch = href.match(/python_(\d{2})/);
        const number = numberMatch ? parseInt(numberMatch[1], 10) : null;

        // The display text is simply the text content of the anchor tag
        const display = anchor.textContent.trim();

        if (original && number !== null && display) {
            pythonLessons.push({
                original: original,
                number: number,
                display: display
            });
        }
    });
    console.log(pythonLessons);
    return pythonLessons;
})();

const fixedHeader = document.getElementById('fixed-header');
const currentFolderTitle = fixedHeader.querySelector('.current-folder-title');
const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -80% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const folderId = entry.target.id;
            const originalFolderName = folderId.replace('folder-', '');
            const folderData = folders.find(f => f.original === originalFolderName);
            if (folderData) {
                currentFolderTitle.textContent = `現在表示中: ${folderData.display}`;
            }

            document.querySelectorAll('#toc-list a').forEach(link => {
                link.classList.remove('active');
            });
            // document.querySelector(`#toc-list a[href="#${folderId}"]`).classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll(".folder-section").forEach(section => {
    observer.observe(section);
});

document.querySelectorAll(".try-button").forEach(e => {
    e.addEventListener("click", function () {
        const elem = this.parentElement.parentElement;
        const filename = elem.querySelector(".file-label").textContent;
        const code = elem.querySelector(".code-container").textContent;
        const quest = elem.querySelector(".question-container").textContent;
        const ans = elem.querySelector(".answer-container").textContent;

        parent.postMessage({ cmd: "code", filename, code, ans, quest }, "*");
    })
})

document.getElementById("back-button").addEventListener("click", e => {
    parent.postMessage({ cmd: "back" }, "*");
})

window.addEventListener('message', (event) => {
    const { cmd, scrollY } = event.data;
    if (cmd === 'save-scroll') {
        const scrollY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        parent.postMessage({ cmd: 'scroll-saved', scrollY }, '*');
    } else if (cmd === 'restore-scroll' && typeof scrollY === 'number') {
        window.scrollTo(0, scrollY);
    }
});
