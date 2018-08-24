
https:
	sed -i 's|action="http://www.taktlos.com/"|action=""|' *.html
	sed -i 's|action="http://www.taktlos.com/"|action=""|' */*.html
	sed -i 's|action="http://www.taktlos.com/"|action=""|' */*/*.html
	sed -i 's|action="http://www.taktlos.com/wp-comments-post.php"|action=""|' *.html
	sed -i 's|action="http://www.taktlos.com/wp-comments-post.php"|action=""|' */*.html
	sed -i 's|action="http://www.taktlos.com/wp-comments-post.php"|action=""|' */*/*.html

https2:
	sed -i 's|action="http://www.taktlos.com/notifyme.php"|action=""|' */*.html
	sed -i 's|action="http://www.taktlos.com/kontakt/"|action=""|' */*.html
	sed -i 's|action="http://www.taktlos.com/reservation"|action=""|' */*.html
	sed -i 's|action="http://www.taktlos.com"|action=""|' *.html
	sed -i 's|action="http://www.taktlos.com"|action=""|' */*.html
	sed -i 's|action="http://www.taktlos.com"|action=""|' */*/*.html

taywa:
	sed -i 's|<a href="http://www.pixilla.org/" target="_blank">Sabine R\&ouml;diger </a>|<a href="http://www.pixilla.org/" target="_blank">Sabine R\&ouml;diger</a> Support <a href="https://www.taywa.ch/" target="_blank">www.taywa.ch</a>|' *.html
	sed -i 's|<a href="http://www.pixilla.org/" target="_blank">Sabine R\&ouml;diger </a>|<a href="http://www.pixilla.org/" target="_blank">Sabine R\&ouml;diger</a> Support <a href="https://www.taywa.ch/" target="_blank">www.taywa.ch</a>|' */*.html
	sed -i 's|<a href="http://www.pixilla.org/" target="_blank">Sabine R\&ouml;diger </a>|<a href="http://www.pixilla.org/" target="_blank">Sabine R\&ouml;diger</a> Support <a href="https://www.taywa.ch/" target="_blank">www.taywa.ch</a>|' */*/*.html
