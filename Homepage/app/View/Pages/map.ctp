<?php echo $this->Html->css('map');?>
<script
	src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&language=de"></script>
<?php echo $this->Html->script('map');?>
<div class="container">
	<div class="row-fluid">
		<div class="span12">
			<div class="row-fluid">
				<div class="span4">
					<div class="row-fluid">
						<div class="span12">
							<div id="routepanel">
								<div class="span6">
									<b>Start: </b><br>
									<input id="start" type="textbox">
								</div>
								<div class="span6">
									<b>End: </b><br>
									<input id="end" type="textbox"><br>
								</div>
								<input type="button" value="Route" onclick="calcRoute()"><br>
								<input id="address" type="textbox"><br>
								<input type="button" value="Geocode" onclick="codeAddress()">
							</div>
						</div>
						<div class="span12">
							<div id="directions-panel"></div>
						</div>
					</div>
				</div>
				<div class="span8">
					<div id="map-canvas"></div>
				</div>
			</div>
		</div>
	</div>
</div>			