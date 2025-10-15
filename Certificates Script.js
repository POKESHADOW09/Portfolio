// certificates.js
(function () {
    document.addEventListener('click', function (e) {
        const viewBtn = e.target.closest('.btn-view');
        const verifyBtn = e.target.closest('.btn-verify');

        if (viewBtn) {
            const url = viewBtn.getAttribute('data-view');
            if (url) window.open(url, '_blank', 'noopener');
        }
        if (verifyBtn) {
            const url = verifyBtn.getAttribute('data-verify');
            if (url) window.open(url, '_blank', 'noopener');
        }
    });
})();
