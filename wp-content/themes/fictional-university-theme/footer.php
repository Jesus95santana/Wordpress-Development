<nav>
    <ul>
        <li><a href="<?= get_site_url() ?>">Home</a></li>
        <li><a href="<?= get_site_url( '', 'test-post' ) ?>">Single Blog</a></li>
        <li><a href="<?= get_site_url( '', 'test-page-123' ) ?>">Page</a></li>
    </ul>
</nav>
<?= wp_footer(); ?>
</body>
</html>