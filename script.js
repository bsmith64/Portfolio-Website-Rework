$(document).ready(function() {
	
	var $next = $('#next');
	var $prev = $('#previous');
	
	// PHOTOS

	var $routes = $('#routes');
	var $noah = $('#noah');
	var $moto = $('#moto');
	var $diablo = $('#diablo');
	var $beach = $('#beach');

	var $afb_blur = $('#afb_blur');
	var $afb_sf = $('#afb_sf');
	var $bbdh = $('#bbdh');
	var $bridge = $('#bridge');
	var $building = $('#building');

	var $byron_bbdh = $('#byron_bbdh');
	var $bl_bw = $('#bl_bw');
	var $byron_blur = $('#byron_blur');
	var $byron_orinda = $('#byron_orinda');
	var $cindercone = $('#cindercone');

	var $dave_carve = $('#dave_carve');
	var $dave_daisy = $('#dave_daisy');
	var $dave_loop = $('#dave_loop');
	var $deer = $('#deer');
	var $ebbets = $('#ebbets');

	var $flis_cradle = $('#flis_cradle');
	var $flis_glasses = $('#flis_glasses');
	var $fog_building = $('#fog_building');
	var $jeff_bridge = $('#jeff_bridge');
	var $jeff_embarc = $('#jeff_embarc');

	var $jensen_fun = $('#jensen_fun');
	var $jensen_gaps = $('#jensen_gaps');
	var $jensen_marina = $('#jensen_marina');
	var $jensen_mountain = $('#jensen_mountain');
	var $jensen_speed = $('#jensen_speed');

	var $lassen_stars = $('#lassen_stars');
	var $liam_byron = $('#liam_byron');
	var $martino_ed = $('#martino_ed');
	var $mcway = $('#mcway');
	var $mirror = $('#mirror');

	var $oakland_layers = $('#oakland_layers');
	var $radzani_coit = $('#radzani_coit');
	var $radzani_pano = $('#radzani_pano');
	var $ronzani_alley = $('#ronzani_alley');
	var $ronzani_beach = $('#ronzani_beach');

	var $sinjin_bbdh = $('#sinjin_bbdh');
	var $sonora = $('#sonora');
	var $sunrise = $('#sunrise');
	var $sunset = $('#sunset');
	var $tissen_film = $('#tissen_film');

	var $tissen_log = $('#tissen_log');
	var $tissen_sonora = $('#tissen_sonora');


	var photos = [$noah, $routes, $moto, $beach, $diablo,
					$afb_blur, $afb_sf, $bbdh, $bridge, $building,
					$byron_bbdh, $bl_bw, $byron_blur, $byron_orinda, $cindercone,
					$dave_carve, $dave_daisy, $dave_loop, $deer, $ebbets,
					$flis_cradle, $flis_glasses, $fog_building, $jeff_bridge, $jeff_embarc,
					$jensen_fun, $jensen_gaps, $jensen_marina, $jensen_mountain, $jensen_speed,
					$lassen_stars, $liam_byron, $martino_ed, $mcway, $mirror,
					$oakland_layers, $radzani_coit, $radzani_pano, $ronzani_alley, $ronzani_beach,
					$sinjin_bbdh, $sonora, $sunrise, $sunset, $tissen_film,
					$tissen_log, $tissen_sonora
				];

	var counter = 0;

	// LETS HIDE THOSE IMAGES...

	$(window).load(function() {
		$routes.hide();
		$moto.hide();
		$diablo.hide();
		$beach.hide();

		$afb_blur.hide();
		$afb_sf.hide();
		$bbdh.hide();
		$bridge.hide();
		$building.hide();

		$byron_bbdh.hide();
		$bl_bw.hide();
		$byron_blur.hide();
		$byron_orinda.hide();
		$cindercone.hide();

		$dave_carve.hide();
		$dave_daisy.hide();
		$dave_loop.hide();
		$deer.hide();
		$ebbets.hide();

		$flis_cradle.hide();
		$flis_glasses.hide();
		$fog_building.hide();
		$jeff_bridge.hide();
		$jeff_embarc.hide();

		$jensen_fun.hide();
		$jensen_gaps.hide();
		$jensen_marina.hide();
		$jensen_mountain.hide();
		$jensen_speed.hide();

		$lassen_stars.hide();
		$liam_byron.hide();
		$martino_ed.hide();
		$mcway.hide();
		$mirror.hide();

		$oakland_layers.hide();
		$radzani_coit.hide();
		$radzani_pano.hide();
		$ronzani_alley.hide();
		$ronzani_beach.hide();

		$sinjin_bbdh.hide();
		$sonora.hide();
		$sunrise.hide();
		$sunset.hide();
		$tissen_film.hide();

		$tissen_log.hide();
		$tissen_sonora.hide();

	});

	

	$next.click(function() {

		if (counter === photos.length -1) {
			photos[photos.length-1].hide();
			counter = 0;
			
			photos[counter].fadeIn(500);
		
		} else { 

		photos[counter].hide();
		counter += 1;
		photos[counter].fadeIn(300);

		//return counter;
		}

		
		
	});

		// Previous click fn
		$prev.click(function() {
			
			if (counter === 0) {
				photos[counter].hide();
				counter = photos.length -1;
				photos[counter].fadeIn(300);

			} else {

			photos[counter].hide();
			counter -= 1;
			photos[counter].fadeIn(300);
			}
		});


});