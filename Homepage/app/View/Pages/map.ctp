<?php echo $this->Html->css('defult');?>
<?php echo $this->Html->css('map');?>
<script
	src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&language=de">
</script>
<?php echo $this->Html->script('map');?>


<div id="map-canvas"></div>


<div id="directions-panel">
	<div id="control">
		<div class="row-fluid">
			<div class="span8">
				<b>Start: </b>
				<input id="start" type="textbox"><br>
				<b>End: </b>
				<input id="end" type="textbox"><br>
				<b>Verkehrsmittel: </b>
				<select id="mode">
					<option value="DRIVING">Auto</option>
					<option value="WALKING">Laufen</option>
					<option value="BICYCLING">Fahrad</option>
					<option value="TRANSIT">Transit</option>
				</select>
				<input type="button" value="Route" onclick="calcRoute()"><br>
			</div>
			<div class="span4">
				<b>Zwischenstops</b><br>
				<select multiple id="waypoints" type="textbox">
					<option value="Radolfzell"> Radolfzell</input>
					<option value="Allensbach"> Allensbach</input>
					<option value="78465 Dettingen"> Dettingen</input>
				</select>
				<input id="singlepoint" type="textbox"><br>
			</div>
		</div>
	</div>
</div>
<div class="row-fluid">
	<input id="address" type="textbox"> <input type="button" value="Suche"
		onclick="codeAddress()">
</div>
<button id="drop" onclick="drop()">Drop Markers</button>
