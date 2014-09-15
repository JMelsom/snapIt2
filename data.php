<?php for($i=0 ; $i < 10; $i++){ ?>

<li>
	<figure>
		<img src="http://lorempixel.com/300/20<?=$i?>/people" alt="selfie">
		<figcaption>
			<a data-icon="flag" data-iconpos="notext" data-pos="left" id="flagthis">Flag</a>
			<a data-icon="star" data-iconpos="right" data-pos="right" id="likethis">9,999</a>
		</figcaption>
	</figure>
</li>

<?php } ?>