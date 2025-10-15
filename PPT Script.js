// sample-ppts.js
(function () {
    function openEmbed(url) {
        window.open(url, '_blank', 'noopener');
    }

    document.addEventListener('click', function (e) {
        const btn = e.target.closest('.btn-view');
        if (!btn) return;

        const url = btn.getAttribute('data-view');
        if (!url) return;

        // Optional: navigate to a local details page if provided
        const detailsPage = btn.getAttribute('data-details') || '';
        if (detailsPage) {
            const q = new URLSearchParams({ src: url });
            window.location.href = detailsPage + '?' + q.toString();
        } else {
            openEmbed(url);
        }
    });
})();
