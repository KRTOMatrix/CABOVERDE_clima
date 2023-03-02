///////////Creación variable mapa/////////// 
var map = L.map('map', {
		zoomControl: false,
		center: [16, -23.5],
		zoom: 9,
		minZoom: 9,
		maxZoom: 12,
	});




///////////Funcionalidades estructura del visor///////////
//Layers on top
map.createPane('límites');
// This pane is above markers but below popups
map.getPane('límites').style.zIndex = 650;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('límites').style.pointerEvents = 'none';
//Labels on top
map.createPane('labels');
// This pane is above markers but below popups
map.getPane('labels').style.zIndex = 800;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('labels').style.pointerEvents = 'none';
//bindTooltip on top
map.createPane('popups');
// el popup aparece al arrastar encima de todo pero debajo del popup que aparece al clicar
map.getPane('popups').style.zIndex = 1000;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('popups').style.pointerEvents = 'none';
//bindPopup on top
map.createPane('popups1');
// aparece por encima de todas las capas
map.getPane('popups1').style.zIndex = 1500;
// Layers in this pane are non-interactive and do not obscure mouse/touch events
map.getPane('popups1').style.pointerEvents = 'none';
//Barra de interacción de capas	tantaas sildebar como grupos de capas
var sidebar = L.control.sidebar('sidebar', { closeButton:true, position: 'left' });
	map.addControl(sidebar);
	sidebar.hide();			
	sidebar.show();
	sidebar.toggle();
var visible = sidebar.isVisible();
var button = new L.Control.Button(L.DomUtil.get('helpbutton'), { toggleButton: 'active', position: 'topleft'});
	button.addTo(map);
	button.on('click', function () {
	 if (button.isToggled()) {
			sidebar.hide();
		} else {
			sidebar.show();
		}
	});
var sidebar2 = L.control.sidebar('sidebar2', { closeButton:true, position: 'right' });
	map.addControl(sidebar2);
	sidebar2.hide();			
	sidebar2.show();
	sidebar2.toggle();
var visible2 = sidebar.isVisible();

//Buscador
var geocoder = L.Control.geocoder({ position: 'topleft',
	//defaultmarkGeocode: false
	}).addTo(map);


///////////Diseño caracteriticas basicas del visor///////////

//Título
var title2 = L.control({position: 'topright'});
	title2.onAdd = function (map) {
var div = L.DomUtil.create('div', 'info2');
	 div.innerHTML +=
	 'VISOR CARTOGRÁFICO<h2>Clima de Cabo Verde<br>';
	 return div;
	};
	title2.addTo(map);

//Logo Matrix	
var title1 = L.control({position: 'bottomright'});
	title1.onAdd = function (map) {
var div = L.DomUtil.create('div', 'info1');
	 div.innerHTML +=
	 '<a href="https://www.fundacionmatrix.es"><img src="images/composi.png"  width="321px" height="200px" ></img></a>';
	 return div;
	};
	title1.addTo(map);


//Logo CLIMACAVE
var title4 = L.control({position: 'bottomright'});
	title4.onAdd = function (map) {
var div = L.DomUtil.create('div','info4');
	 div.innerHTML +=
	 '<a><img src="images/CLIMACAVE LOGO _transparencia.png" width="135px" height="94px" ></img></a>';
	 return div;
	};
	title4.addTo(map); 



///////////Cartografía de referencia///////////
var Mapa_fondo = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, opacity: 0.4, 
	attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetmap </a>| Map data © 2023 <a href="https://www.fundacionmatrix.es"><strong>@Fundación Matrix 2023</strong></a>',
	}).addTo(map);		
var positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    attribution: '©OpenStreetmap, ©CartoDB',
    attribution: '| <a href="https://www.fundacionmatrix.es"><strong>@Fundación Matrix 2021</strong></a>'
    })
var positronLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
    attribution: '',
    pane: 'labels'
    }).addTo(map)


var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	opacity: 0.5,
	attribution: 'Map data &copy'
	})

var osm2 = new L.TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	minZoom: 0, 
	maxZoom: 13,
	});

var osm3 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, opacity: 0.4, 
	attribution: '<a href="http://www.openstreetmap.org/copyright">OpenStreetmap </a>',
	});

//MDT
 var relieve = L.imageOverlay('images/MDT_900_MOD.png',
  imageBounds = [
    [17.2036,-25.3621],
    [17.2032,-22.662],
    [14.7995,-25.3461],
    [14.7991,-22.662]

  ]).addTo(map)


relieve.setOpacity(0.15);


//Mapas en formato imagen
var m1 = L.imageOverlay('images/med_max_900_2_MOD.png',
  imageBounds = [
    [17.20377,-25.35804],
    [17.20385,-22.65760],
    [14.84002,-25.34340],
    [14.80560,-22.67269]

  ])
 
 var m10 = L.imageOverlay('images/temp_medi_91_20.png',
  imageBounds = [
    [17.2,-25.3578],
		/*[17.1993,-22.6785],
		[14.8060,-25.3578],*/
    [14.806,-22.675]

  ]).addTo(map)


var m11 = L.imageOverlay('images/med_min_900_MOD.png',
  imageBounds = [
    [17.1993,-25.3578],
    [17.1995,-22.6758],
    [14.8077,-25.3420],
    [14.8058,-22.6914]

  ])



var m12 = L.imageOverlay('images/dias_cal_900_MOD.png',
  imageBounds = [
    [17.1993,-25.3578],
    [17.1995,-22.6758],
    [14.8077,-25.3420],
    [14.8058,-22.6914]

  ])

var m13 = L.imageOverlay('images/noites_trop_MOD.png',
  imageBounds = [
    [17.1993,-25.3578],
    [17.1995,-22.6758],
    [14.8077,-25.3420],
    [14.8058,-22.6914]

  ])


var m2 = L.imageOverlay('images/prec_humeda900_2_MOD.png',
  imageBounds = [
    [17.20377,-25.36104],
    [17.20385,-22.65760],
    [14.80602,-25.34640],
    [14.80160,-22.67269]

  ])

var m3 = L.imageOverlay('images/prec_med_max_900_MOD.png',
  imageBounds = [
    [17.20377,-25.36104],
    [17.20385,-22.65760],
    [14.80602,-25.34640],
    [14.80160,-22.67269]

  ])

var m4 = L.imageOverlay('images/prec_seca900_MOD.png',
  imageBounds = [
    [17.20377,-25.36104],
    [17.20385,-22.65760],
    [14.80602,-25.34640],
    [14.80160,-22.67269]

  ])




///////////Otras funcionalidades
//minimapa	
var miniMap = new L.Control.MiniMap(osm2, { toggleDisplay: true, position:"bottomright", width:100,height:100,}).addTo(map); 					
//zoomHome
var zoomHome = L.Control.zoomHome({ position: 'topleft', homeCoordinates:[16, -24], zoomHomeTitle:'Posición inicial'}).addTo(map);
//fullscreen						
var fsControl = new L.Control.FullScreen();
	map.addControl(fsControl);
	map.on('enterFullscreen', function(){
	if(window.console) window.console.log('enterFullscreen');
	});
	map.on('exitFullscreen', function(){
	if(window.console) window.console.log('exitFullscreen');
	});
	L.control.scale().addTo(map);

///////////Estilo de las capas especificas del visor///////////

//estilo mapa Cambio
function getColor2(a) {
	
return a < 0.312? '#1A9640' :
	a < 0.625? '#58B352':
	a < 80? '#E75B3A':
	a < 100? '#D7191B':
	
	'#C2523C';
};


function style2(feature) {
	return {
		
		weight: 2,
		opacity: 1,
		color: 'grey',
		dashArray: '0',
		fillOpacity: 0
	};
};

function popup2(feature, layer) {
	if (feature.properties && feature.properties.Ilha1) {
		layer.bindTooltip("<strong>Illa: </strong>"+feature.properties.Ilha1,
			{direction:"centerleft",sticky:true, permanente:true,offset:[0,-5], pane: 'popups',});	
	};
};

var geojson2 = L.geoJson(TCR, {
	style: style2,
	onEachFeature: popup2
});

var mapa2 = L.layerGroup([geojson2]).addTo(map);


//BASE TREE
var baseTree = [
	{ label: "<strong>Limpiar mapa", layer: osm3 },
	{
	label: '<strong>Mapas de temperatura',
	children: [
		{ label: "Temperatura media anual", layer: m10 },
		{ label: "Temperatura media máxima anual", layer: m1 },
		{ label: "Temperatura media mínima anual", layer: m11 },
		{ label: "Número medio anual de días cálidos", layer: m12 },
		{ label: "Número medio anual de noites tropicais", layer: m13 },
		
	]
	},
	{
	label: '<strong>Mapas precipitación',
	children: [
		{ label: "Precipitación total anual anual media na estación húmida", layer: m2 },
		{ label: "Precipitación total anual anual media na estación seca", layer: m4 },
		{ label: "Precipitación media máxima", layer: m3 },

		
	]},
	
];	
	
//OVERLAY TREE	
var overlayTree = {
	label: 'Mapas de referencia',
	children: [
	
		//{ label: "<b>Límites de Comunidades Autónomas", layer: comunidades},
		{ label: "Relevo", layer: relieve},
		{ label: "OpenStreetMap", layer: osm},
		{ label: "Toponimia", layer: positronLabels},

	]
};	

//leyenda modelo espacial 

var htmlLegend1 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Temperatura media máxima anual <br>Período 1991-2020<br>'+"<\h3>",
			layer: m1,
		image:'<img src="images/lenda1.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial<br> <br>Resolución: 100 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:'<br><img src="images/lenda1.png" ></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: Elaboración propia (2023) con datos do Instituto Nacional de Meteorologia e Geofísica (INMG) e o Instituto Nacional de Gestão do Territorio (INGT).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 1, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend1);

var htmlLegend10 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Temperatura media anual <br>Período 1991-2020<br>'+"<\h3>",
			layer: m10,
		image:'<img src="images/lenda1.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial<br> <br>Resolución: 100 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:'<br><img src="images/lenda1.png",></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: Elaboración propia (2023) con datos do Instituto Nacional de Meteorologia e Geofísica (INMG) e o Instituto Nacional de Gestão do Territorio (INGT).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 1, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend10);


var htmlLegend11 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Temperatura media mínima anual <br>Período 1991-2020<br>'+"<\h3>",
			layer: m11,
		image:'<img src="images/lenda1.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial<br><br> Resolución: 100 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:'<br><img src="images/lenda1.png",></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: Elaboración propia (2023) con datos do Instituto Nacional de Meteorologia e Geofísica (INMG) e o Instituto Nacional de Gestão do Territorio (INGT).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 1, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend11);

var htmlLegend12 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Número medio anual de días cálidos <br>Período 1991-2020<br>'+"<\h3>",
			layer: m12,
		image:'<img src="images/lenda12.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Día cálido: día con temperatura máxima ≥ 25°C <br><br> Método: modelización estatística e interpolación espacial<br><br>  Resolución: 100 m <br> '+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:'<br><img src="images/lenda12.png" width="160px" height="400px" ></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: Elaboración propia (2023) con datos do Instituto Nacional de Meteorologia e Geofísica (INMG) e o Instituto Nacional de Gestão do Territorio (INGT).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 1, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend12);

var htmlLegend13 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Número medio anual de noites tropicais <br>Período 1991-2020<br>'+"<\h3>",
			layer: m13,
		image:'<img src="images/lenda1.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Noite tropical: noite con temperatura minima ≥ 20°C <br> <br>Método: modelización estatística e interpolación espacial<br> <br> Resolución: 100 m '+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:'<br><img src="images/lenda13.png" width="160px" height="400px" ></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: Elaboración propia (2023) con datos do Instituto Nacional de Meteorologia e Geofísica (INMG) e o Instituto Nacional de Gestão do Territorio (INGT).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 1, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend13);

var htmlLegend2 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Precipitación total anual media na estación húmida <br>Período 1991-2020<br>'+"<\h3>",
			layer: m2,
		image:'<img src="images/lenda2.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Estación húmida: meses de xullo, agosto, setembro e outubro'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial <br><br> Resolución: 100 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:'<br><img src="images/lenda2.png" width="212px" height="400px" ></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: Elaboración propia (2023) con datos do Instituto Nacional de Meteorologia e Geofísica (INMG) e o Instituto Nacional de Gestão do Territorio (INGT).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 1, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend2);

var htmlLegend3 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Precipitación media máxima anual <br>Período 1991-2020<br>'+"<\h3>",
			layer: m3,
		image:'<img src="images/lenda1.png"',
			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial.<br><br> Resolución: 100 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:'<br><img src="images/lenda4.png" width="212px" height="400px" ></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: Elaboración propia (2023) con datos do Instituto Nacional de Meteorologia e Geofísica (INMG) e o Instituto Nacional de Gestão do Territorio (INGT).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 1, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend3);

var htmlLegend4 = L.control.htmllegend({
		position: 'bottomleft',
		legends: [{
			name: "<h3>"+ 'Precipitación total anual media na estación seca <br>Período 1991-2020<br>'+"<\h3>",
			layer: m4,
		image:'<img src="images/lenda1.png"',

			
			elements: [{

				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, { 
				label:"<h4>"+  'Estación seca: meses de xaneiro, febreiro, marzo, abril, maio, xuño, novembro e decembro'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h5>"+'<br>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:"<h4>"+  'Método: modelización estatística e interpolación espacial<br><br> Resolución: 100 m'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				label:'<br><img src="images/lenda3.png" width="150px" height="220px"></img><br>',
				IMG:"<h3>"+  'Unidades: ‰'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {
				//label:"<h3>"+'<br>Unidades: %<br>'+"<\h4>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}}, {

				//label:"<h4>"+  ' ≤-1,5'+"<\h4>",html: '',style: {'background-color': '#FAE278','width': '40px','height': '14px', 'border': 'black 1px solid'}}, {		
			
				label: "<h5>" +'<BR><i>Fonte: Elaboración propia (2023) con datos do Instituto Nacional de Meteorologia e Geofísica (INMG) e o Instituto Nacional de Gestão do Territorio (INGT).<i><BR>'+"<\h5>",html: '',style: {'background-color': 'write','width': '0px','height': '0px'}																
			

			}]

		}],
		collapseSimple: false,  // if true, legend entries that are from a simple renderer will use compact presentation
		detectStretched: true,  // if true, will test to see if legend entries look stretched.  These are usually in sets of 3 with the middle element having no label.
		collapsedOnInit: false,  // if true, legends will be collapsed when a new instance is initialized.
		defaultOpacity: 1, // default opacity for layers in specified in legends.
		visibleIcon: '',// 'leaflet-html-legend-icon-eye',  // css class for the visible icon on opacity slider
		hiddenIcon: '',//'leaflet-html-legend-icon-eye-slash',  // css class for the hidden icon on opacity slider
		toggleIcon:'',// 'leaflet-html-legend-icon-eye-slash'  // css class for the icon on visibility toggle button
	}).addTo(map);
	map.addControl(htmlLegend4);

		


//Visualizar capas
// L.control.layers(baseLayers, overlays,{collapsed:true, position: 'topright',}).addTo(map);
L.control.layers.tree(baseTree, overlayTree,{collapsed:true}).collapseTree(baseTree,overlayTree).addTo(map);

//boton de informacion 
var button2 = new L.Control.Button(L.DomUtil.get('helpbutton2'), { toggleButton: 'active', position: 'topright'});
	button2.addTo(map);
	button2.on('click', function () {
	 if (button2.isToggled()) {
			sidebar2.hide();
		} else {
			sidebar2.show();
		}
	});