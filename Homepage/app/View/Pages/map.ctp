<?php echo $this->Html->css('defult');?>
<?php echo $this->Html->css('map');?>
<script
	src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&language=de">
</script>
<?php echo $this->Html->script('map');?>
<div id="map-canvas"></div>
<div id="directions-panel">
<p>Total Distance: <span id="total"></span></p>
<div>
	<b>Start: </b>
	<input id="start" type="textbox"><br>
	<b>End: </b>
	<input id="end" type="textbox"><br>
	<b>Zwischenstop</b><br>
	
	<select multiple id="waypoints" type="textbox">
      <option value="Radolfzell">Radolfzell</input>
      <option value="Allensbach">Allensbach</input>
      <option value="78465 Dettingen">Dettingen</input>
    </select>
    <b>Mode of Travel: </b>
    <select id="mode">
      <option value="DRIVING">Driving</option>
      <option value="WALKING">Walking</option>
      <option value="BICYCLING">Bicycling</option>
      <option value="TRANSIT">Transit</option>
    </select>
	<input type="button" value="Route" onclick="calcRoute()"><br>
	<b>Suche</b><br>
	<input id="address" type="textbox"><br>
	<input type="button" value="Geocode" onclick="codeAddress()">
</div>		
</div>

