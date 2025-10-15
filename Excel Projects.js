// excel-projects.js
(function () {
    function openEmbed(url) {
        // Fallback: open in a new tab
        window.open(url, '_blank', 'noopener');
    }

    document.addEventListener('click', function (e) {
        const btn = e.target.closest('.btn-view');
        if (!btn) return;
        const url = btn.getAttribute('data-view');
        if (!url) return;

        // If a local details page exists, navigate there with query param
        // Example: details-excel.html?src=<embed-url>
        const detailsPage = btn.getAttribute('data-details') || '';
        if (detailsPage) {
            const q = new URLSearchParams({ src: url });
            window.location.href = detailsPage + '?' + q.toString();
        } else {
            openEmbed(url);
        }
    });
})();
