<script>
document.addEventListener('DOMContentLoaded', () => {
    const headerName = document.querySelector('header h1');
    headerName.style.transition = 'all 0.5s ease-in-out';

    headerName.addEventListener('mouseover', () => {
        headerName.style.transform = 'scale(1.2)';
        headerName.style.color = '#ffeb3b';
    });

    headerName.addEventListener('mouseout', () => {
        headerName.style.transform = 'scale(1)';
        headerName.style.color = '#fff';
    });
});
</script>

