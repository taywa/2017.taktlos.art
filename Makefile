
https:
	sed -i 's|action="http://www.taktlos.com/"|action=""|' *.html
	sed -i 's|action="http://www.taktlos.com/"|action=""|' */*.html
	sed -i 's|action="http://www.taktlos.com/"|action=""|' */*/*.html
	sed -i 's|action="http://www.taktlos.com/wp-comments-post.php"|action=""|' *.html
	sed -i 's|action="http://www.taktlos.com/wp-comments-post.php"|action=""|' */*.html
	sed -i 's|action="http://www.taktlos.com/wp-comments-post.php"|action=""|' */*/*.html
