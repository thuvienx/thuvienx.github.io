(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._1win = function() {
	this.initialize(img._1win);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib._5win = function() {
	this.initialize(img._5win);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.base = function() {
	this.initialize(img.base);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bg_0 = function() {
	this.initialize(img.bg_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_000 = function() {
	this.initialize(img.bl_bl_000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_001 = function() {
	this.initialize(img.bl_bl_001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_002 = function() {
	this.initialize(img.bl_bl_002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_003 = function() {
	this.initialize(img.bl_bl_003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_004 = function() {
	this.initialize(img.bl_bl_004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_005 = function() {
	this.initialize(img.bl_bl_005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_006 = function() {
	this.initialize(img.bl_bl_006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_007 = function() {
	this.initialize(img.bl_bl_007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_008 = function() {
	this.initialize(img.bl_bl_008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_009 = function() {
	this.initialize(img.bl_bl_009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_010 = function() {
	this.initialize(img.bl_bl_010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_011 = function() {
	this.initialize(img.bl_bl_011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_012 = function() {
	this.initialize(img.bl_bl_012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_013 = function() {
	this.initialize(img.bl_bl_013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_014 = function() {
	this.initialize(img.bl_bl_014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_015 = function() {
	this.initialize(img.bl_bl_015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_016 = function() {
	this.initialize(img.bl_bl_016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_017 = function() {
	this.initialize(img.bl_bl_017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_018 = function() {
	this.initialize(img.bl_bl_018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_019 = function() {
	this.initialize(img.bl_bl_019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_020 = function() {
	this.initialize(img.bl_bl_020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_021 = function() {
	this.initialize(img.bl_bl_021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_022 = function() {
	this.initialize(img.bl_bl_022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_023 = function() {
	this.initialize(img.bl_bl_023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_024 = function() {
	this.initialize(img.bl_bl_024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_025 = function() {
	this.initialize(img.bl_bl_025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_026 = function() {
	this.initialize(img.bl_bl_026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_027 = function() {
	this.initialize(img.bl_bl_027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_028 = function() {
	this.initialize(img.bl_bl_028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_bl_029 = function() {
	this.initialize(img.bl_bl_029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_000 = function() {
	this.initialize(img.bl_ex_000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_001 = function() {
	this.initialize(img.bl_ex_001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_002 = function() {
	this.initialize(img.bl_ex_002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_003 = function() {
	this.initialize(img.bl_ex_003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_004 = function() {
	this.initialize(img.bl_ex_004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_005 = function() {
	this.initialize(img.bl_ex_005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_006 = function() {
	this.initialize(img.bl_ex_006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_007 = function() {
	this.initialize(img.bl_ex_007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_008 = function() {
	this.initialize(img.bl_ex_008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_009 = function() {
	this.initialize(img.bl_ex_009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_010 = function() {
	this.initialize(img.bl_ex_010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_011 = function() {
	this.initialize(img.bl_ex_011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_012 = function() {
	this.initialize(img.bl_ex_012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_013 = function() {
	this.initialize(img.bl_ex_013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_014 = function() {
	this.initialize(img.bl_ex_014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_015 = function() {
	this.initialize(img.bl_ex_015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_016 = function() {
	this.initialize(img.bl_ex_016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_017 = function() {
	this.initialize(img.bl_ex_017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_018 = function() {
	this.initialize(img.bl_ex_018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_019 = function() {
	this.initialize(img.bl_ex_019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_020 = function() {
	this.initialize(img.bl_ex_020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_021 = function() {
	this.initialize(img.bl_ex_021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_022 = function() {
	this.initialize(img.bl_ex_022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_023 = function() {
	this.initialize(img.bl_ex_023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_024 = function() {
	this.initialize(img.bl_ex_024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_025 = function() {
	this.initialize(img.bl_ex_025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_026 = function() {
	this.initialize(img.bl_ex_026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_027 = function() {
	this.initialize(img.bl_ex_027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_028 = function() {
	this.initialize(img.bl_ex_028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_029 = function() {
	this.initialize(img.bl_ex_029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_030 = function() {
	this.initialize(img.bl_ex_030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_031 = function() {
	this.initialize(img.bl_ex_031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_032 = function() {
	this.initialize(img.bl_ex_032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_033 = function() {
	this.initialize(img.bl_ex_033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_034 = function() {
	this.initialize(img.bl_ex_034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_035 = function() {
	this.initialize(img.bl_ex_035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_036 = function() {
	this.initialize(img.bl_ex_036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_037 = function() {
	this.initialize(img.bl_ex_037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_038 = function() {
	this.initialize(img.bl_ex_038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_039 = function() {
	this.initialize(img.bl_ex_039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_040 = function() {
	this.initialize(img.bl_ex_040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_041 = function() {
	this.initialize(img.bl_ex_041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_042 = function() {
	this.initialize(img.bl_ex_042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_043 = function() {
	this.initialize(img.bl_ex_043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_044 = function() {
	this.initialize(img.bl_ex_044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_045 = function() {
	this.initialize(img.bl_ex_045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_046 = function() {
	this.initialize(img.bl_ex_046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_047 = function() {
	this.initialize(img.bl_ex_047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_048 = function() {
	this.initialize(img.bl_ex_048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_049 = function() {
	this.initialize(img.bl_ex_049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_050 = function() {
	this.initialize(img.bl_ex_050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_051 = function() {
	this.initialize(img.bl_ex_051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_052 = function() {
	this.initialize(img.bl_ex_052);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_053 = function() {
	this.initialize(img.bl_ex_053);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_054 = function() {
	this.initialize(img.bl_ex_054);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_055 = function() {
	this.initialize(img.bl_ex_055);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_056 = function() {
	this.initialize(img.bl_ex_056);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_057 = function() {
	this.initialize(img.bl_ex_057);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_058 = function() {
	this.initialize(img.bl_ex_058);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_059 = function() {
	this.initialize(img.bl_ex_059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_060 = function() {
	this.initialize(img.bl_ex_060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_061 = function() {
	this.initialize(img.bl_ex_061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_062 = function() {
	this.initialize(img.bl_ex_062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_063 = function() {
	this.initialize(img.bl_ex_063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_064 = function() {
	this.initialize(img.bl_ex_064);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_065 = function() {
	this.initialize(img.bl_ex_065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_066 = function() {
	this.initialize(img.bl_ex_066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_067 = function() {
	this.initialize(img.bl_ex_067);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_068 = function() {
	this.initialize(img.bl_ex_068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_069 = function() {
	this.initialize(img.bl_ex_069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_070 = function() {
	this.initialize(img.bl_ex_070);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_071 = function() {
	this.initialize(img.bl_ex_071);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_072 = function() {
	this.initialize(img.bl_ex_072);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_073 = function() {
	this.initialize(img.bl_ex_073);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_074 = function() {
	this.initialize(img.bl_ex_074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_075 = function() {
	this.initialize(img.bl_ex_075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_076 = function() {
	this.initialize(img.bl_ex_076);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_077 = function() {
	this.initialize(img.bl_ex_077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_078 = function() {
	this.initialize(img.bl_ex_078);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_079 = function() {
	this.initialize(img.bl_ex_079);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_080 = function() {
	this.initialize(img.bl_ex_080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_081 = function() {
	this.initialize(img.bl_ex_081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_082 = function() {
	this.initialize(img.bl_ex_082);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_083 = function() {
	this.initialize(img.bl_ex_083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_084 = function() {
	this.initialize(img.bl_ex_084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_085 = function() {
	this.initialize(img.bl_ex_085);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_086 = function() {
	this.initialize(img.bl_ex_086);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_087 = function() {
	this.initialize(img.bl_ex_087);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_088 = function() {
	this.initialize(img.bl_ex_088);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_089 = function() {
	this.initialize(img.bl_ex_089);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_090 = function() {
	this.initialize(img.bl_ex_090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_091 = function() {
	this.initialize(img.bl_ex_091);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_092 = function() {
	this.initialize(img.bl_ex_092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_093 = function() {
	this.initialize(img.bl_ex_093);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_094 = function() {
	this.initialize(img.bl_ex_094);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_095 = function() {
	this.initialize(img.bl_ex_095);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_096 = function() {
	this.initialize(img.bl_ex_096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_097 = function() {
	this.initialize(img.bl_ex_097);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_098 = function() {
	this.initialize(img.bl_ex_098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_099 = function() {
	this.initialize(img.bl_ex_099);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_100 = function() {
	this.initialize(img.bl_ex_100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_101 = function() {
	this.initialize(img.bl_ex_101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_102 = function() {
	this.initialize(img.bl_ex_102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_103 = function() {
	this.initialize(img.bl_ex_103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_104 = function() {
	this.initialize(img.bl_ex_104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_105 = function() {
	this.initialize(img.bl_ex_105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_106 = function() {
	this.initialize(img.bl_ex_106);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_107 = function() {
	this.initialize(img.bl_ex_107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_108 = function() {
	this.initialize(img.bl_ex_108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_109 = function() {
	this.initialize(img.bl_ex_109);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_110 = function() {
	this.initialize(img.bl_ex_110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_111 = function() {
	this.initialize(img.bl_ex_111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_112 = function() {
	this.initialize(img.bl_ex_112);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_113 = function() {
	this.initialize(img.bl_ex_113);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_114 = function() {
	this.initialize(img.bl_ex_114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_115 = function() {
	this.initialize(img.bl_ex_115);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_116 = function() {
	this.initialize(img.bl_ex_116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_117 = function() {
	this.initialize(img.bl_ex_117);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_118 = function() {
	this.initialize(img.bl_ex_118);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_119 = function() {
	this.initialize(img.bl_ex_119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_120 = function() {
	this.initialize(img.bl_ex_120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_121 = function() {
	this.initialize(img.bl_ex_121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_122 = function() {
	this.initialize(img.bl_ex_122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_123 = function() {
	this.initialize(img.bl_ex_123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_124 = function() {
	this.initialize(img.bl_ex_124);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_125 = function() {
	this.initialize(img.bl_ex_125);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_126 = function() {
	this.initialize(img.bl_ex_126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_127 = function() {
	this.initialize(img.bl_ex_127);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_128 = function() {
	this.initialize(img.bl_ex_128);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_129 = function() {
	this.initialize(img.bl_ex_129);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_130 = function() {
	this.initialize(img.bl_ex_130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_131 = function() {
	this.initialize(img.bl_ex_131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_132 = function() {
	this.initialize(img.bl_ex_132);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_133 = function() {
	this.initialize(img.bl_ex_133);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_134 = function() {
	this.initialize(img.bl_ex_134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_135 = function() {
	this.initialize(img.bl_ex_135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_136 = function() {
	this.initialize(img.bl_ex_136);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_137 = function() {
	this.initialize(img.bl_ex_137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_138 = function() {
	this.initialize(img.bl_ex_138);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_139 = function() {
	this.initialize(img.bl_ex_139);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_140 = function() {
	this.initialize(img.bl_ex_140);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_141 = function() {
	this.initialize(img.bl_ex_141);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_142 = function() {
	this.initialize(img.bl_ex_142);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_143 = function() {
	this.initialize(img.bl_ex_143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_144 = function() {
	this.initialize(img.bl_ex_144);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_145 = function() {
	this.initialize(img.bl_ex_145);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_146 = function() {
	this.initialize(img.bl_ex_146);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_147 = function() {
	this.initialize(img.bl_ex_147);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_148 = function() {
	this.initialize(img.bl_ex_148);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_149 = function() {
	this.initialize(img.bl_ex_149);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_150 = function() {
	this.initialize(img.bl_ex_150);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_151 = function() {
	this.initialize(img.bl_ex_151);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_152 = function() {
	this.initialize(img.bl_ex_152);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_153 = function() {
	this.initialize(img.bl_ex_153);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_154 = function() {
	this.initialize(img.bl_ex_154);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_155 = function() {
	this.initialize(img.bl_ex_155);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_156 = function() {
	this.initialize(img.bl_ex_156);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_157 = function() {
	this.initialize(img.bl_ex_157);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_158 = function() {
	this.initialize(img.bl_ex_158);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_159 = function() {
	this.initialize(img.bl_ex_159);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_ex_160 = function() {
	this.initialize(img.bl_ex_160);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_000 = function() {
	this.initialize(img.bl_no_000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_001 = function() {
	this.initialize(img.bl_no_001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_002 = function() {
	this.initialize(img.bl_no_002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_003 = function() {
	this.initialize(img.bl_no_003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_004 = function() {
	this.initialize(img.bl_no_004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_005 = function() {
	this.initialize(img.bl_no_005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_006 = function() {
	this.initialize(img.bl_no_006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_007 = function() {
	this.initialize(img.bl_no_007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_008 = function() {
	this.initialize(img.bl_no_008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_009 = function() {
	this.initialize(img.bl_no_009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_010 = function() {
	this.initialize(img.bl_no_010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_011 = function() {
	this.initialize(img.bl_no_011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_012 = function() {
	this.initialize(img.bl_no_012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_013 = function() {
	this.initialize(img.bl_no_013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_014 = function() {
	this.initialize(img.bl_no_014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_015 = function() {
	this.initialize(img.bl_no_015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_016 = function() {
	this.initialize(img.bl_no_016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_017 = function() {
	this.initialize(img.bl_no_017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_018 = function() {
	this.initialize(img.bl_no_018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_019 = function() {
	this.initialize(img.bl_no_019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_020 = function() {
	this.initialize(img.bl_no_020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_021 = function() {
	this.initialize(img.bl_no_021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_022 = function() {
	this.initialize(img.bl_no_022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_023 = function() {
	this.initialize(img.bl_no_023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_024 = function() {
	this.initialize(img.bl_no_024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_025 = function() {
	this.initialize(img.bl_no_025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_026 = function() {
	this.initialize(img.bl_no_026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_027 = function() {
	this.initialize(img.bl_no_027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_028 = function() {
	this.initialize(img.bl_no_028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_029 = function() {
	this.initialize(img.bl_no_029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_030 = function() {
	this.initialize(img.bl_no_030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_031 = function() {
	this.initialize(img.bl_no_031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_032 = function() {
	this.initialize(img.bl_no_032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_033 = function() {
	this.initialize(img.bl_no_033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_no_034 = function() {
	this.initialize(img.bl_no_034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_000 = function() {
	this.initialize(img.bl_sw_000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_001 = function() {
	this.initialize(img.bl_sw_001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_002 = function() {
	this.initialize(img.bl_sw_002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_003 = function() {
	this.initialize(img.bl_sw_003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_004 = function() {
	this.initialize(img.bl_sw_004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_005 = function() {
	this.initialize(img.bl_sw_005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_006 = function() {
	this.initialize(img.bl_sw_006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_007 = function() {
	this.initialize(img.bl_sw_007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_008 = function() {
	this.initialize(img.bl_sw_008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_009 = function() {
	this.initialize(img.bl_sw_009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_010 = function() {
	this.initialize(img.bl_sw_010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_011 = function() {
	this.initialize(img.bl_sw_011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_012 = function() {
	this.initialize(img.bl_sw_012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_013 = function() {
	this.initialize(img.bl_sw_013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_014 = function() {
	this.initialize(img.bl_sw_014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_015 = function() {
	this.initialize(img.bl_sw_015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_016 = function() {
	this.initialize(img.bl_sw_016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_017 = function() {
	this.initialize(img.bl_sw_017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_018 = function() {
	this.initialize(img.bl_sw_018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_019 = function() {
	this.initialize(img.bl_sw_019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_020 = function() {
	this.initialize(img.bl_sw_020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_021 = function() {
	this.initialize(img.bl_sw_021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_022 = function() {
	this.initialize(img.bl_sw_022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_023 = function() {
	this.initialize(img.bl_sw_023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_024 = function() {
	this.initialize(img.bl_sw_024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_025 = function() {
	this.initialize(img.bl_sw_025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_026 = function() {
	this.initialize(img.bl_sw_026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_027 = function() {
	this.initialize(img.bl_sw_027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_028 = function() {
	this.initialize(img.bl_sw_028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_029 = function() {
	this.initialize(img.bl_sw_029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_030 = function() {
	this.initialize(img.bl_sw_030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_031 = function() {
	this.initialize(img.bl_sw_031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_032 = function() {
	this.initialize(img.bl_sw_032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_033 = function() {
	this.initialize(img.bl_sw_033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_034 = function() {
	this.initialize(img.bl_sw_034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_035 = function() {
	this.initialize(img.bl_sw_035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_036 = function() {
	this.initialize(img.bl_sw_036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_037 = function() {
	this.initialize(img.bl_sw_037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_038 = function() {
	this.initialize(img.bl_sw_038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_039 = function() {
	this.initialize(img.bl_sw_039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_040 = function() {
	this.initialize(img.bl_sw_040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_041 = function() {
	this.initialize(img.bl_sw_041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_042 = function() {
	this.initialize(img.bl_sw_042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_043 = function() {
	this.initialize(img.bl_sw_043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_044 = function() {
	this.initialize(img.bl_sw_044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_045 = function() {
	this.initialize(img.bl_sw_045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_046 = function() {
	this.initialize(img.bl_sw_046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_047 = function() {
	this.initialize(img.bl_sw_047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_048 = function() {
	this.initialize(img.bl_sw_048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_049 = function() {
	this.initialize(img.bl_sw_049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_050 = function() {
	this.initialize(img.bl_sw_050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_051 = function() {
	this.initialize(img.bl_sw_051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_052 = function() {
	this.initialize(img.bl_sw_052);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_053 = function() {
	this.initialize(img.bl_sw_053);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_054 = function() {
	this.initialize(img.bl_sw_054);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_055 = function() {
	this.initialize(img.bl_sw_055);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_056 = function() {
	this.initialize(img.bl_sw_056);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_057 = function() {
	this.initialize(img.bl_sw_057);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_058 = function() {
	this.initialize(img.bl_sw_058);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_059 = function() {
	this.initialize(img.bl_sw_059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_060 = function() {
	this.initialize(img.bl_sw_060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_061 = function() {
	this.initialize(img.bl_sw_061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_062 = function() {
	this.initialize(img.bl_sw_062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_063 = function() {
	this.initialize(img.bl_sw_063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_064 = function() {
	this.initialize(img.bl_sw_064);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_065 = function() {
	this.initialize(img.bl_sw_065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_066 = function() {
	this.initialize(img.bl_sw_066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_067 = function() {
	this.initialize(img.bl_sw_067);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_068 = function() {
	this.initialize(img.bl_sw_068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_069 = function() {
	this.initialize(img.bl_sw_069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_070 = function() {
	this.initialize(img.bl_sw_070);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_071 = function() {
	this.initialize(img.bl_sw_071);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_072 = function() {
	this.initialize(img.bl_sw_072);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_073 = function() {
	this.initialize(img.bl_sw_073);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_074 = function() {
	this.initialize(img.bl_sw_074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_075 = function() {
	this.initialize(img.bl_sw_075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_076 = function() {
	this.initialize(img.bl_sw_076);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_077 = function() {
	this.initialize(img.bl_sw_077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_078 = function() {
	this.initialize(img.bl_sw_078);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_079 = function() {
	this.initialize(img.bl_sw_079);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_080 = function() {
	this.initialize(img.bl_sw_080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_081 = function() {
	this.initialize(img.bl_sw_081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_082 = function() {
	this.initialize(img.bl_sw_082);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_083 = function() {
	this.initialize(img.bl_sw_083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_084 = function() {
	this.initialize(img.bl_sw_084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_085 = function() {
	this.initialize(img.bl_sw_085);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_086 = function() {
	this.initialize(img.bl_sw_086);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_087 = function() {
	this.initialize(img.bl_sw_087);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_088 = function() {
	this.initialize(img.bl_sw_088);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_089 = function() {
	this.initialize(img.bl_sw_089);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_090 = function() {
	this.initialize(img.bl_sw_090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_091 = function() {
	this.initialize(img.bl_sw_091);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_092 = function() {
	this.initialize(img.bl_sw_092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_093 = function() {
	this.initialize(img.bl_sw_093);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_094 = function() {
	this.initialize(img.bl_sw_094);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_095 = function() {
	this.initialize(img.bl_sw_095);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_096 = function() {
	this.initialize(img.bl_sw_096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_097 = function() {
	this.initialize(img.bl_sw_097);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_098 = function() {
	this.initialize(img.bl_sw_098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_099 = function() {
	this.initialize(img.bl_sw_099);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_100 = function() {
	this.initialize(img.bl_sw_100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_101 = function() {
	this.initialize(img.bl_sw_101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_102 = function() {
	this.initialize(img.bl_sw_102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_103 = function() {
	this.initialize(img.bl_sw_103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_104 = function() {
	this.initialize(img.bl_sw_104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_105 = function() {
	this.initialize(img.bl_sw_105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_106 = function() {
	this.initialize(img.bl_sw_106);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_107 = function() {
	this.initialize(img.bl_sw_107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_108 = function() {
	this.initialize(img.bl_sw_108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_109 = function() {
	this.initialize(img.bl_sw_109);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_110 = function() {
	this.initialize(img.bl_sw_110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_111 = function() {
	this.initialize(img.bl_sw_111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_112 = function() {
	this.initialize(img.bl_sw_112);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_113 = function() {
	this.initialize(img.bl_sw_113);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_114 = function() {
	this.initialize(img.bl_sw_114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_115 = function() {
	this.initialize(img.bl_sw_115);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_116 = function() {
	this.initialize(img.bl_sw_116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_117 = function() {
	this.initialize(img.bl_sw_117);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_118 = function() {
	this.initialize(img.bl_sw_118);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_119 = function() {
	this.initialize(img.bl_sw_119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_120 = function() {
	this.initialize(img.bl_sw_120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_121 = function() {
	this.initialize(img.bl_sw_121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_122 = function() {
	this.initialize(img.bl_sw_122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_123 = function() {
	this.initialize(img.bl_sw_123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_124 = function() {
	this.initialize(img.bl_sw_124);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_125 = function() {
	this.initialize(img.bl_sw_125);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_126 = function() {
	this.initialize(img.bl_sw_126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_127 = function() {
	this.initialize(img.bl_sw_127);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_128 = function() {
	this.initialize(img.bl_sw_128);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_129 = function() {
	this.initialize(img.bl_sw_129);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_130 = function() {
	this.initialize(img.bl_sw_130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_131 = function() {
	this.initialize(img.bl_sw_131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_132 = function() {
	this.initialize(img.bl_sw_132);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_133 = function() {
	this.initialize(img.bl_sw_133);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_134 = function() {
	this.initialize(img.bl_sw_134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_135 = function() {
	this.initialize(img.bl_sw_135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_136 = function() {
	this.initialize(img.bl_sw_136);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_137 = function() {
	this.initialize(img.bl_sw_137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_138 = function() {
	this.initialize(img.bl_sw_138);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_139 = function() {
	this.initialize(img.bl_sw_139);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_140 = function() {
	this.initialize(img.bl_sw_140);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_141 = function() {
	this.initialize(img.bl_sw_141);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_142 = function() {
	this.initialize(img.bl_sw_142);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_143 = function() {
	this.initialize(img.bl_sw_143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_144 = function() {
	this.initialize(img.bl_sw_144);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_145 = function() {
	this.initialize(img.bl_sw_145);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_146 = function() {
	this.initialize(img.bl_sw_146);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_147 = function() {
	this.initialize(img.bl_sw_147);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_148 = function() {
	this.initialize(img.bl_sw_148);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_149 = function() {
	this.initialize(img.bl_sw_149);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_150 = function() {
	this.initialize(img.bl_sw_150);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_151 = function() {
	this.initialize(img.bl_sw_151);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_152 = function() {
	this.initialize(img.bl_sw_152);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_153 = function() {
	this.initialize(img.bl_sw_153);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_154 = function() {
	this.initialize(img.bl_sw_154);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_155 = function() {
	this.initialize(img.bl_sw_155);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_156 = function() {
	this.initialize(img.bl_sw_156);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_157 = function() {
	this.initialize(img.bl_sw_157);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_158 = function() {
	this.initialize(img.bl_sw_158);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_159 = function() {
	this.initialize(img.bl_sw_159);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_160 = function() {
	this.initialize(img.bl_sw_160);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_161 = function() {
	this.initialize(img.bl_sw_161);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_162 = function() {
	this.initialize(img.bl_sw_162);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_163 = function() {
	this.initialize(img.bl_sw_163);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_164 = function() {
	this.initialize(img.bl_sw_164);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_165 = function() {
	this.initialize(img.bl_sw_165);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_166 = function() {
	this.initialize(img.bl_sw_166);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_167 = function() {
	this.initialize(img.bl_sw_167);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_168 = function() {
	this.initialize(img.bl_sw_168);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_169 = function() {
	this.initialize(img.bl_sw_169);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_170 = function() {
	this.initialize(img.bl_sw_170);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_171 = function() {
	this.initialize(img.bl_sw_171);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_172 = function() {
	this.initialize(img.bl_sw_172);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_173 = function() {
	this.initialize(img.bl_sw_173);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_174 = function() {
	this.initialize(img.bl_sw_174);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_175 = function() {
	this.initialize(img.bl_sw_175);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_176 = function() {
	this.initialize(img.bl_sw_176);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_177 = function() {
	this.initialize(img.bl_sw_177);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_178 = function() {
	this.initialize(img.bl_sw_178);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_sw_179 = function() {
	this.initialize(img.bl_sw_179);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_000 = function() {
	this.initialize(img.bl_we_000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_001 = function() {
	this.initialize(img.bl_we_001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_002 = function() {
	this.initialize(img.bl_we_002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_003 = function() {
	this.initialize(img.bl_we_003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_004 = function() {
	this.initialize(img.bl_we_004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_005 = function() {
	this.initialize(img.bl_we_005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_006 = function() {
	this.initialize(img.bl_we_006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_007 = function() {
	this.initialize(img.bl_we_007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_008 = function() {
	this.initialize(img.bl_we_008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_009 = function() {
	this.initialize(img.bl_we_009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_010 = function() {
	this.initialize(img.bl_we_010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_011 = function() {
	this.initialize(img.bl_we_011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_012 = function() {
	this.initialize(img.bl_we_012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_013 = function() {
	this.initialize(img.bl_we_013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_014 = function() {
	this.initialize(img.bl_we_014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_015 = function() {
	this.initialize(img.bl_we_015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_016 = function() {
	this.initialize(img.bl_we_016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_017 = function() {
	this.initialize(img.bl_we_017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_018 = function() {
	this.initialize(img.bl_we_018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_019 = function() {
	this.initialize(img.bl_we_019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_020 = function() {
	this.initialize(img.bl_we_020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_021 = function() {
	this.initialize(img.bl_we_021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_022 = function() {
	this.initialize(img.bl_we_022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_023 = function() {
	this.initialize(img.bl_we_023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_024 = function() {
	this.initialize(img.bl_we_024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_025 = function() {
	this.initialize(img.bl_we_025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_026 = function() {
	this.initialize(img.bl_we_026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_027 = function() {
	this.initialize(img.bl_we_027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_028 = function() {
	this.initialize(img.bl_we_028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_029 = function() {
	this.initialize(img.bl_we_029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_030 = function() {
	this.initialize(img.bl_we_030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_031 = function() {
	this.initialize(img.bl_we_031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_032 = function() {
	this.initialize(img.bl_we_032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_033 = function() {
	this.initialize(img.bl_we_033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_034 = function() {
	this.initialize(img.bl_we_034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_035 = function() {
	this.initialize(img.bl_we_035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_036 = function() {
	this.initialize(img.bl_we_036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_037 = function() {
	this.initialize(img.bl_we_037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_038 = function() {
	this.initialize(img.bl_we_038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_039 = function() {
	this.initialize(img.bl_we_039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_040 = function() {
	this.initialize(img.bl_we_040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_041 = function() {
	this.initialize(img.bl_we_041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_042 = function() {
	this.initialize(img.bl_we_042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_043 = function() {
	this.initialize(img.bl_we_043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_044 = function() {
	this.initialize(img.bl_we_044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_045 = function() {
	this.initialize(img.bl_we_045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_046 = function() {
	this.initialize(img.bl_we_046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_047 = function() {
	this.initialize(img.bl_we_047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_048 = function() {
	this.initialize(img.bl_we_048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.bl_we_049 = function() {
	this.initialize(img.bl_we_049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.blush_0 = function() {
	this.initialize(img.blush_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.blush_1 = function() {
	this.initialize(img.blush_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.body = function() {
	this.initialize(img.body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,665,499);


(lib.closeEyes = function() {
	this.initialize(img.closeEyes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,380,62);


(lib.ending_0 = function() {
	this.initialize(img.ending_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.ending_1 = function() {
	this.initialize(img.ending_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.ending_2 = function() {
	this.initialize(img.ending_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.extra_0 = function() {
	this.initialize(img.extra_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.extra_1 = function() {
	this.initialize(img.extra_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_000 = function() {
	this.initialize(img.fa_bl_000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_001 = function() {
	this.initialize(img.fa_bl_001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_002 = function() {
	this.initialize(img.fa_bl_002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_003 = function() {
	this.initialize(img.fa_bl_003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_004 = function() {
	this.initialize(img.fa_bl_004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_005 = function() {
	this.initialize(img.fa_bl_005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_006 = function() {
	this.initialize(img.fa_bl_006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_007 = function() {
	this.initialize(img.fa_bl_007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_008 = function() {
	this.initialize(img.fa_bl_008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_009 = function() {
	this.initialize(img.fa_bl_009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_010 = function() {
	this.initialize(img.fa_bl_010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_011 = function() {
	this.initialize(img.fa_bl_011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_012 = function() {
	this.initialize(img.fa_bl_012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_013 = function() {
	this.initialize(img.fa_bl_013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_014 = function() {
	this.initialize(img.fa_bl_014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_015 = function() {
	this.initialize(img.fa_bl_015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_016 = function() {
	this.initialize(img.fa_bl_016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_017 = function() {
	this.initialize(img.fa_bl_017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_018 = function() {
	this.initialize(img.fa_bl_018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_019 = function() {
	this.initialize(img.fa_bl_019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_020 = function() {
	this.initialize(img.fa_bl_020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_021 = function() {
	this.initialize(img.fa_bl_021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_022 = function() {
	this.initialize(img.fa_bl_022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_023 = function() {
	this.initialize(img.fa_bl_023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_024 = function() {
	this.initialize(img.fa_bl_024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_025 = function() {
	this.initialize(img.fa_bl_025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_026 = function() {
	this.initialize(img.fa_bl_026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_027 = function() {
	this.initialize(img.fa_bl_027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_028 = function() {
	this.initialize(img.fa_bl_028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_bl_029 = function() {
	this.initialize(img.fa_bl_029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_000 = function() {
	this.initialize(img.fa_ex_000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_001 = function() {
	this.initialize(img.fa_ex_001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_002 = function() {
	this.initialize(img.fa_ex_002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_003 = function() {
	this.initialize(img.fa_ex_003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_004 = function() {
	this.initialize(img.fa_ex_004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_005 = function() {
	this.initialize(img.fa_ex_005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_006 = function() {
	this.initialize(img.fa_ex_006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_007 = function() {
	this.initialize(img.fa_ex_007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_008 = function() {
	this.initialize(img.fa_ex_008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_009 = function() {
	this.initialize(img.fa_ex_009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_010 = function() {
	this.initialize(img.fa_ex_010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_011 = function() {
	this.initialize(img.fa_ex_011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_012 = function() {
	this.initialize(img.fa_ex_012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_013 = function() {
	this.initialize(img.fa_ex_013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_014 = function() {
	this.initialize(img.fa_ex_014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_015 = function() {
	this.initialize(img.fa_ex_015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_016 = function() {
	this.initialize(img.fa_ex_016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_017 = function() {
	this.initialize(img.fa_ex_017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_018 = function() {
	this.initialize(img.fa_ex_018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_019 = function() {
	this.initialize(img.fa_ex_019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_020 = function() {
	this.initialize(img.fa_ex_020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_021 = function() {
	this.initialize(img.fa_ex_021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_022 = function() {
	this.initialize(img.fa_ex_022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_023 = function() {
	this.initialize(img.fa_ex_023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_024 = function() {
	this.initialize(img.fa_ex_024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_025 = function() {
	this.initialize(img.fa_ex_025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_026 = function() {
	this.initialize(img.fa_ex_026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_027 = function() {
	this.initialize(img.fa_ex_027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_028 = function() {
	this.initialize(img.fa_ex_028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_029 = function() {
	this.initialize(img.fa_ex_029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_030 = function() {
	this.initialize(img.fa_ex_030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_031 = function() {
	this.initialize(img.fa_ex_031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_032 = function() {
	this.initialize(img.fa_ex_032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_033 = function() {
	this.initialize(img.fa_ex_033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_034 = function() {
	this.initialize(img.fa_ex_034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_035 = function() {
	this.initialize(img.fa_ex_035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_036 = function() {
	this.initialize(img.fa_ex_036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_037 = function() {
	this.initialize(img.fa_ex_037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_038 = function() {
	this.initialize(img.fa_ex_038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_039 = function() {
	this.initialize(img.fa_ex_039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_040 = function() {
	this.initialize(img.fa_ex_040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_041 = function() {
	this.initialize(img.fa_ex_041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_042 = function() {
	this.initialize(img.fa_ex_042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_043 = function() {
	this.initialize(img.fa_ex_043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_044 = function() {
	this.initialize(img.fa_ex_044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_045 = function() {
	this.initialize(img.fa_ex_045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_046 = function() {
	this.initialize(img.fa_ex_046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_047 = function() {
	this.initialize(img.fa_ex_047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_048 = function() {
	this.initialize(img.fa_ex_048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_049 = function() {
	this.initialize(img.fa_ex_049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_050 = function() {
	this.initialize(img.fa_ex_050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_051 = function() {
	this.initialize(img.fa_ex_051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_052 = function() {
	this.initialize(img.fa_ex_052);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_053 = function() {
	this.initialize(img.fa_ex_053);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_054 = function() {
	this.initialize(img.fa_ex_054);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_055 = function() {
	this.initialize(img.fa_ex_055);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_056 = function() {
	this.initialize(img.fa_ex_056);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_057 = function() {
	this.initialize(img.fa_ex_057);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_058 = function() {
	this.initialize(img.fa_ex_058);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_059 = function() {
	this.initialize(img.fa_ex_059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_060 = function() {
	this.initialize(img.fa_ex_060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_061 = function() {
	this.initialize(img.fa_ex_061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_062 = function() {
	this.initialize(img.fa_ex_062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_063 = function() {
	this.initialize(img.fa_ex_063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_064 = function() {
	this.initialize(img.fa_ex_064);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_065 = function() {
	this.initialize(img.fa_ex_065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_066 = function() {
	this.initialize(img.fa_ex_066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_067 = function() {
	this.initialize(img.fa_ex_067);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_068 = function() {
	this.initialize(img.fa_ex_068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_069 = function() {
	this.initialize(img.fa_ex_069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_070 = function() {
	this.initialize(img.fa_ex_070);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_071 = function() {
	this.initialize(img.fa_ex_071);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_072 = function() {
	this.initialize(img.fa_ex_072);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_073 = function() {
	this.initialize(img.fa_ex_073);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_074 = function() {
	this.initialize(img.fa_ex_074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_075 = function() {
	this.initialize(img.fa_ex_075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_076 = function() {
	this.initialize(img.fa_ex_076);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_077 = function() {
	this.initialize(img.fa_ex_077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_078 = function() {
	this.initialize(img.fa_ex_078);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_079 = function() {
	this.initialize(img.fa_ex_079);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_080 = function() {
	this.initialize(img.fa_ex_080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_081 = function() {
	this.initialize(img.fa_ex_081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_082 = function() {
	this.initialize(img.fa_ex_082);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_083 = function() {
	this.initialize(img.fa_ex_083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_084 = function() {
	this.initialize(img.fa_ex_084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_085 = function() {
	this.initialize(img.fa_ex_085);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_086 = function() {
	this.initialize(img.fa_ex_086);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_087 = function() {
	this.initialize(img.fa_ex_087);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_088 = function() {
	this.initialize(img.fa_ex_088);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_089 = function() {
	this.initialize(img.fa_ex_089);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_090 = function() {
	this.initialize(img.fa_ex_090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_091 = function() {
	this.initialize(img.fa_ex_091);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_092 = function() {
	this.initialize(img.fa_ex_092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_093 = function() {
	this.initialize(img.fa_ex_093);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_094 = function() {
	this.initialize(img.fa_ex_094);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_095 = function() {
	this.initialize(img.fa_ex_095);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_096 = function() {
	this.initialize(img.fa_ex_096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_097 = function() {
	this.initialize(img.fa_ex_097);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_098 = function() {
	this.initialize(img.fa_ex_098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_099 = function() {
	this.initialize(img.fa_ex_099);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_100 = function() {
	this.initialize(img.fa_ex_100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_101 = function() {
	this.initialize(img.fa_ex_101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_102 = function() {
	this.initialize(img.fa_ex_102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_103 = function() {
	this.initialize(img.fa_ex_103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_104 = function() {
	this.initialize(img.fa_ex_104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_105 = function() {
	this.initialize(img.fa_ex_105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_106 = function() {
	this.initialize(img.fa_ex_106);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_107 = function() {
	this.initialize(img.fa_ex_107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_108 = function() {
	this.initialize(img.fa_ex_108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_109 = function() {
	this.initialize(img.fa_ex_109);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_110 = function() {
	this.initialize(img.fa_ex_110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_111 = function() {
	this.initialize(img.fa_ex_111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_112 = function() {
	this.initialize(img.fa_ex_112);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_113 = function() {
	this.initialize(img.fa_ex_113);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_114 = function() {
	this.initialize(img.fa_ex_114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_115 = function() {
	this.initialize(img.fa_ex_115);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_116 = function() {
	this.initialize(img.fa_ex_116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_117 = function() {
	this.initialize(img.fa_ex_117);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_118 = function() {
	this.initialize(img.fa_ex_118);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_119 = function() {
	this.initialize(img.fa_ex_119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_120 = function() {
	this.initialize(img.fa_ex_120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_121 = function() {
	this.initialize(img.fa_ex_121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_122 = function() {
	this.initialize(img.fa_ex_122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_123 = function() {
	this.initialize(img.fa_ex_123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_124 = function() {
	this.initialize(img.fa_ex_124);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_125 = function() {
	this.initialize(img.fa_ex_125);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_126 = function() {
	this.initialize(img.fa_ex_126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_127 = function() {
	this.initialize(img.fa_ex_127);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_128 = function() {
	this.initialize(img.fa_ex_128);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_129 = function() {
	this.initialize(img.fa_ex_129);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_130 = function() {
	this.initialize(img.fa_ex_130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_131 = function() {
	this.initialize(img.fa_ex_131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_132 = function() {
	this.initialize(img.fa_ex_132);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_133 = function() {
	this.initialize(img.fa_ex_133);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_134 = function() {
	this.initialize(img.fa_ex_134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_135 = function() {
	this.initialize(img.fa_ex_135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_136 = function() {
	this.initialize(img.fa_ex_136);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_137 = function() {
	this.initialize(img.fa_ex_137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_138 = function() {
	this.initialize(img.fa_ex_138);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_139 = function() {
	this.initialize(img.fa_ex_139);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_140 = function() {
	this.initialize(img.fa_ex_140);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_141 = function() {
	this.initialize(img.fa_ex_141);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_142 = function() {
	this.initialize(img.fa_ex_142);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_143 = function() {
	this.initialize(img.fa_ex_143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_144 = function() {
	this.initialize(img.fa_ex_144);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_145 = function() {
	this.initialize(img.fa_ex_145);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_146 = function() {
	this.initialize(img.fa_ex_146);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_147 = function() {
	this.initialize(img.fa_ex_147);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_148 = function() {
	this.initialize(img.fa_ex_148);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_149 = function() {
	this.initialize(img.fa_ex_149);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_150 = function() {
	this.initialize(img.fa_ex_150);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_151 = function() {
	this.initialize(img.fa_ex_151);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_152 = function() {
	this.initialize(img.fa_ex_152);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_153 = function() {
	this.initialize(img.fa_ex_153);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_154 = function() {
	this.initialize(img.fa_ex_154);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_155 = function() {
	this.initialize(img.fa_ex_155);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_156 = function() {
	this.initialize(img.fa_ex_156);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_157 = function() {
	this.initialize(img.fa_ex_157);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_158 = function() {
	this.initialize(img.fa_ex_158);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_159 = function() {
	this.initialize(img.fa_ex_159);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_160 = function() {
	this.initialize(img.fa_ex_160);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_161 = function() {
	this.initialize(img.fa_ex_161);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_162 = function() {
	this.initialize(img.fa_ex_162);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_163 = function() {
	this.initialize(img.fa_ex_163);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_164 = function() {
	this.initialize(img.fa_ex_164);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_165 = function() {
	this.initialize(img.fa_ex_165);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_166 = function() {
	this.initialize(img.fa_ex_166);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_167 = function() {
	this.initialize(img.fa_ex_167);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_168 = function() {
	this.initialize(img.fa_ex_168);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_169 = function() {
	this.initialize(img.fa_ex_169);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_170 = function() {
	this.initialize(img.fa_ex_170);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_171 = function() {
	this.initialize(img.fa_ex_171);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_172 = function() {
	this.initialize(img.fa_ex_172);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_173 = function() {
	this.initialize(img.fa_ex_173);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_174 = function() {
	this.initialize(img.fa_ex_174);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_175 = function() {
	this.initialize(img.fa_ex_175);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_176 = function() {
	this.initialize(img.fa_ex_176);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_177 = function() {
	this.initialize(img.fa_ex_177);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_178 = function() {
	this.initialize(img.fa_ex_178);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_ex_179 = function() {
	this.initialize(img.fa_ex_179);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_000 = function() {
	this.initialize(img.fa_no_000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_001 = function() {
	this.initialize(img.fa_no_001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_002 = function() {
	this.initialize(img.fa_no_002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_003 = function() {
	this.initialize(img.fa_no_003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_004 = function() {
	this.initialize(img.fa_no_004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_005 = function() {
	this.initialize(img.fa_no_005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_006 = function() {
	this.initialize(img.fa_no_006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_007 = function() {
	this.initialize(img.fa_no_007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_008 = function() {
	this.initialize(img.fa_no_008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_009 = function() {
	this.initialize(img.fa_no_009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_010 = function() {
	this.initialize(img.fa_no_010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_011 = function() {
	this.initialize(img.fa_no_011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_012 = function() {
	this.initialize(img.fa_no_012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_013 = function() {
	this.initialize(img.fa_no_013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_014 = function() {
	this.initialize(img.fa_no_014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_015 = function() {
	this.initialize(img.fa_no_015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_016 = function() {
	this.initialize(img.fa_no_016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_017 = function() {
	this.initialize(img.fa_no_017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_018 = function() {
	this.initialize(img.fa_no_018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_019 = function() {
	this.initialize(img.fa_no_019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_020 = function() {
	this.initialize(img.fa_no_020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_021 = function() {
	this.initialize(img.fa_no_021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_022 = function() {
	this.initialize(img.fa_no_022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_023 = function() {
	this.initialize(img.fa_no_023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_024 = function() {
	this.initialize(img.fa_no_024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_025 = function() {
	this.initialize(img.fa_no_025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_026 = function() {
	this.initialize(img.fa_no_026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_027 = function() {
	this.initialize(img.fa_no_027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_028 = function() {
	this.initialize(img.fa_no_028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_029 = function() {
	this.initialize(img.fa_no_029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_030 = function() {
	this.initialize(img.fa_no_030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_031 = function() {
	this.initialize(img.fa_no_031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_032 = function() {
	this.initialize(img.fa_no_032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_033 = function() {
	this.initialize(img.fa_no_033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_034 = function() {
	this.initialize(img.fa_no_034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_035 = function() {
	this.initialize(img.fa_no_035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_036 = function() {
	this.initialize(img.fa_no_036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_037 = function() {
	this.initialize(img.fa_no_037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_038 = function() {
	this.initialize(img.fa_no_038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_no_039 = function() {
	this.initialize(img.fa_no_039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_000 = function() {
	this.initialize(img.fa_sw_000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_001 = function() {
	this.initialize(img.fa_sw_001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_002 = function() {
	this.initialize(img.fa_sw_002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_003 = function() {
	this.initialize(img.fa_sw_003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_004 = function() {
	this.initialize(img.fa_sw_004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_005 = function() {
	this.initialize(img.fa_sw_005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_006 = function() {
	this.initialize(img.fa_sw_006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_007 = function() {
	this.initialize(img.fa_sw_007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_008 = function() {
	this.initialize(img.fa_sw_008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_009 = function() {
	this.initialize(img.fa_sw_009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_010 = function() {
	this.initialize(img.fa_sw_010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_011 = function() {
	this.initialize(img.fa_sw_011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_012 = function() {
	this.initialize(img.fa_sw_012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_013 = function() {
	this.initialize(img.fa_sw_013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_014 = function() {
	this.initialize(img.fa_sw_014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_015 = function() {
	this.initialize(img.fa_sw_015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_016 = function() {
	this.initialize(img.fa_sw_016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_017 = function() {
	this.initialize(img.fa_sw_017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_018 = function() {
	this.initialize(img.fa_sw_018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_019 = function() {
	this.initialize(img.fa_sw_019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_020 = function() {
	this.initialize(img.fa_sw_020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_021 = function() {
	this.initialize(img.fa_sw_021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_022 = function() {
	this.initialize(img.fa_sw_022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_023 = function() {
	this.initialize(img.fa_sw_023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_024 = function() {
	this.initialize(img.fa_sw_024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_025 = function() {
	this.initialize(img.fa_sw_025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_026 = function() {
	this.initialize(img.fa_sw_026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_027 = function() {
	this.initialize(img.fa_sw_027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_028 = function() {
	this.initialize(img.fa_sw_028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_029 = function() {
	this.initialize(img.fa_sw_029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_030 = function() {
	this.initialize(img.fa_sw_030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_031 = function() {
	this.initialize(img.fa_sw_031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_032 = function() {
	this.initialize(img.fa_sw_032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_033 = function() {
	this.initialize(img.fa_sw_033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_034 = function() {
	this.initialize(img.fa_sw_034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_035 = function() {
	this.initialize(img.fa_sw_035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_036 = function() {
	this.initialize(img.fa_sw_036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_037 = function() {
	this.initialize(img.fa_sw_037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_038 = function() {
	this.initialize(img.fa_sw_038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_039 = function() {
	this.initialize(img.fa_sw_039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_040 = function() {
	this.initialize(img.fa_sw_040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_041 = function() {
	this.initialize(img.fa_sw_041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_042 = function() {
	this.initialize(img.fa_sw_042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_043 = function() {
	this.initialize(img.fa_sw_043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_044 = function() {
	this.initialize(img.fa_sw_044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_045 = function() {
	this.initialize(img.fa_sw_045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_046 = function() {
	this.initialize(img.fa_sw_046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_047 = function() {
	this.initialize(img.fa_sw_047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_048 = function() {
	this.initialize(img.fa_sw_048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_049 = function() {
	this.initialize(img.fa_sw_049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_050 = function() {
	this.initialize(img.fa_sw_050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_051 = function() {
	this.initialize(img.fa_sw_051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_052 = function() {
	this.initialize(img.fa_sw_052);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_053 = function() {
	this.initialize(img.fa_sw_053);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_054 = function() {
	this.initialize(img.fa_sw_054);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_055 = function() {
	this.initialize(img.fa_sw_055);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_056 = function() {
	this.initialize(img.fa_sw_056);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_057 = function() {
	this.initialize(img.fa_sw_057);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_058 = function() {
	this.initialize(img.fa_sw_058);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_059 = function() {
	this.initialize(img.fa_sw_059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_060 = function() {
	this.initialize(img.fa_sw_060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_061 = function() {
	this.initialize(img.fa_sw_061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_062 = function() {
	this.initialize(img.fa_sw_062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_063 = function() {
	this.initialize(img.fa_sw_063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_064 = function() {
	this.initialize(img.fa_sw_064);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_065 = function() {
	this.initialize(img.fa_sw_065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_066 = function() {
	this.initialize(img.fa_sw_066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_067 = function() {
	this.initialize(img.fa_sw_067);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_068 = function() {
	this.initialize(img.fa_sw_068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_069 = function() {
	this.initialize(img.fa_sw_069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_070 = function() {
	this.initialize(img.fa_sw_070);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_071 = function() {
	this.initialize(img.fa_sw_071);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_072 = function() {
	this.initialize(img.fa_sw_072);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_073 = function() {
	this.initialize(img.fa_sw_073);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_074 = function() {
	this.initialize(img.fa_sw_074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_075 = function() {
	this.initialize(img.fa_sw_075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_076 = function() {
	this.initialize(img.fa_sw_076);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_077 = function() {
	this.initialize(img.fa_sw_077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_078 = function() {
	this.initialize(img.fa_sw_078);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_079 = function() {
	this.initialize(img.fa_sw_079);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_080 = function() {
	this.initialize(img.fa_sw_080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_081 = function() {
	this.initialize(img.fa_sw_081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_082 = function() {
	this.initialize(img.fa_sw_082);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_083 = function() {
	this.initialize(img.fa_sw_083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_084 = function() {
	this.initialize(img.fa_sw_084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_085 = function() {
	this.initialize(img.fa_sw_085);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_086 = function() {
	this.initialize(img.fa_sw_086);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_087 = function() {
	this.initialize(img.fa_sw_087);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_088 = function() {
	this.initialize(img.fa_sw_088);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_089 = function() {
	this.initialize(img.fa_sw_089);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_090 = function() {
	this.initialize(img.fa_sw_090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_091 = function() {
	this.initialize(img.fa_sw_091);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_092 = function() {
	this.initialize(img.fa_sw_092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_093 = function() {
	this.initialize(img.fa_sw_093);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_094 = function() {
	this.initialize(img.fa_sw_094);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_095 = function() {
	this.initialize(img.fa_sw_095);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_096 = function() {
	this.initialize(img.fa_sw_096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_097 = function() {
	this.initialize(img.fa_sw_097);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_098 = function() {
	this.initialize(img.fa_sw_098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_099 = function() {
	this.initialize(img.fa_sw_099);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_100 = function() {
	this.initialize(img.fa_sw_100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_101 = function() {
	this.initialize(img.fa_sw_101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_102 = function() {
	this.initialize(img.fa_sw_102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_103 = function() {
	this.initialize(img.fa_sw_103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_104 = function() {
	this.initialize(img.fa_sw_104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_105 = function() {
	this.initialize(img.fa_sw_105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_106 = function() {
	this.initialize(img.fa_sw_106);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_107 = function() {
	this.initialize(img.fa_sw_107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_108 = function() {
	this.initialize(img.fa_sw_108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_109 = function() {
	this.initialize(img.fa_sw_109);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_110 = function() {
	this.initialize(img.fa_sw_110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_111 = function() {
	this.initialize(img.fa_sw_111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_112 = function() {
	this.initialize(img.fa_sw_112);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_113 = function() {
	this.initialize(img.fa_sw_113);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_114 = function() {
	this.initialize(img.fa_sw_114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_115 = function() {
	this.initialize(img.fa_sw_115);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_116 = function() {
	this.initialize(img.fa_sw_116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_117 = function() {
	this.initialize(img.fa_sw_117);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_118 = function() {
	this.initialize(img.fa_sw_118);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_119 = function() {
	this.initialize(img.fa_sw_119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_120 = function() {
	this.initialize(img.fa_sw_120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_121 = function() {
	this.initialize(img.fa_sw_121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_122 = function() {
	this.initialize(img.fa_sw_122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_123 = function() {
	this.initialize(img.fa_sw_123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_124 = function() {
	this.initialize(img.fa_sw_124);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_125 = function() {
	this.initialize(img.fa_sw_125);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_126 = function() {
	this.initialize(img.fa_sw_126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_127 = function() {
	this.initialize(img.fa_sw_127);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_128 = function() {
	this.initialize(img.fa_sw_128);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_129 = function() {
	this.initialize(img.fa_sw_129);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_130 = function() {
	this.initialize(img.fa_sw_130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_131 = function() {
	this.initialize(img.fa_sw_131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_132 = function() {
	this.initialize(img.fa_sw_132);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_133 = function() {
	this.initialize(img.fa_sw_133);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_134 = function() {
	this.initialize(img.fa_sw_134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_135 = function() {
	this.initialize(img.fa_sw_135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_136 = function() {
	this.initialize(img.fa_sw_136);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_137 = function() {
	this.initialize(img.fa_sw_137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_138 = function() {
	this.initialize(img.fa_sw_138);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_139 = function() {
	this.initialize(img.fa_sw_139);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_140 = function() {
	this.initialize(img.fa_sw_140);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_141 = function() {
	this.initialize(img.fa_sw_141);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_142 = function() {
	this.initialize(img.fa_sw_142);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_143 = function() {
	this.initialize(img.fa_sw_143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_144 = function() {
	this.initialize(img.fa_sw_144);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_145 = function() {
	this.initialize(img.fa_sw_145);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_146 = function() {
	this.initialize(img.fa_sw_146);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_147 = function() {
	this.initialize(img.fa_sw_147);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_148 = function() {
	this.initialize(img.fa_sw_148);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_149 = function() {
	this.initialize(img.fa_sw_149);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_150 = function() {
	this.initialize(img.fa_sw_150);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_151 = function() {
	this.initialize(img.fa_sw_151);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_152 = function() {
	this.initialize(img.fa_sw_152);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_153 = function() {
	this.initialize(img.fa_sw_153);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_sw_154 = function() {
	this.initialize(img.fa_sw_154);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_we_000 = function() {
	this.initialize(img.fa_we_000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_we_001 = function() {
	this.initialize(img.fa_we_001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_we_002 = function() {
	this.initialize(img.fa_we_002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_we_003 = function() {
	this.initialize(img.fa_we_003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_we_004 = function() {
	this.initialize(img.fa_we_004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_we_005 = function() {
	this.initialize(img.fa_we_005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_we_006 = function() {
	this.initialize(img.fa_we_006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_we_007 = function() {
	this.initialize(img.fa_we_007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_we_008 = function() {
	this.initialize(img.fa_we_008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_we_009 = function() {
	this.initialize(img.fa_we_009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_we_010 = function() {
	this.initialize(img.fa_we_010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_we_011 = function() {
	this.initialize(img.fa_we_011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_we_012 = function() {
	this.initialize(img.fa_we_012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_we_013 = function() {
	this.initialize(img.fa_we_013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_we_014 = function() {
	this.initialize(img.fa_we_014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_we_015 = function() {
	this.initialize(img.fa_we_015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_we_016 = function() {
	this.initialize(img.fa_we_016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_we_017 = function() {
	this.initialize(img.fa_we_017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_we_018 = function() {
	this.initialize(img.fa_we_018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_we_019 = function() {
	this.initialize(img.fa_we_019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_we_020 = function() {
	this.initialize(img.fa_we_020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_we_021 = function() {
	this.initialize(img.fa_we_021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_we_022 = function() {
	this.initialize(img.fa_we_022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_we_023 = function() {
	this.initialize(img.fa_we_023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.fa_we_024 = function() {
	this.initialize(img.fa_we_024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.flip_1 = function() {
	this.initialize(img.flip_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.flip_2 = function() {
	this.initialize(img.flip_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.halfOpenEyes = function() {
	this.initialize(img.halfOpenEyes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,386,86);


(lib.heart = function() {
	this.initialize(img.heart);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,64);


(lib.li_bl_000 = function() {
	this.initialize(img.li_bl_000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_001 = function() {
	this.initialize(img.li_bl_001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_002 = function() {
	this.initialize(img.li_bl_002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_003 = function() {
	this.initialize(img.li_bl_003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_004 = function() {
	this.initialize(img.li_bl_004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_005 = function() {
	this.initialize(img.li_bl_005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_006 = function() {
	this.initialize(img.li_bl_006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_007 = function() {
	this.initialize(img.li_bl_007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_008 = function() {
	this.initialize(img.li_bl_008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_009 = function() {
	this.initialize(img.li_bl_009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_010 = function() {
	this.initialize(img.li_bl_010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_011 = function() {
	this.initialize(img.li_bl_011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_012 = function() {
	this.initialize(img.li_bl_012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_013 = function() {
	this.initialize(img.li_bl_013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_014 = function() {
	this.initialize(img.li_bl_014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_015 = function() {
	this.initialize(img.li_bl_015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_016 = function() {
	this.initialize(img.li_bl_016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_017 = function() {
	this.initialize(img.li_bl_017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_018 = function() {
	this.initialize(img.li_bl_018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_019 = function() {
	this.initialize(img.li_bl_019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_020 = function() {
	this.initialize(img.li_bl_020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_021 = function() {
	this.initialize(img.li_bl_021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_022 = function() {
	this.initialize(img.li_bl_022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_023 = function() {
	this.initialize(img.li_bl_023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_024 = function() {
	this.initialize(img.li_bl_024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_025 = function() {
	this.initialize(img.li_bl_025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_026 = function() {
	this.initialize(img.li_bl_026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_027 = function() {
	this.initialize(img.li_bl_027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_028 = function() {
	this.initialize(img.li_bl_028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_029 = function() {
	this.initialize(img.li_bl_029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_030 = function() {
	this.initialize(img.li_bl_030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_031 = function() {
	this.initialize(img.li_bl_031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_032 = function() {
	this.initialize(img.li_bl_032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_033 = function() {
	this.initialize(img.li_bl_033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_034 = function() {
	this.initialize(img.li_bl_034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_035 = function() {
	this.initialize(img.li_bl_035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_036 = function() {
	this.initialize(img.li_bl_036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_037 = function() {
	this.initialize(img.li_bl_037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_038 = function() {
	this.initialize(img.li_bl_038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_bl_039 = function() {
	this.initialize(img.li_bl_039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_000 = function() {
	this.initialize(img.li_ex_000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_001 = function() {
	this.initialize(img.li_ex_001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_002 = function() {
	this.initialize(img.li_ex_002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_003 = function() {
	this.initialize(img.li_ex_003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_004 = function() {
	this.initialize(img.li_ex_004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_005 = function() {
	this.initialize(img.li_ex_005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_006 = function() {
	this.initialize(img.li_ex_006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_007 = function() {
	this.initialize(img.li_ex_007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_008 = function() {
	this.initialize(img.li_ex_008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_009 = function() {
	this.initialize(img.li_ex_009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_010 = function() {
	this.initialize(img.li_ex_010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_011 = function() {
	this.initialize(img.li_ex_011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_012 = function() {
	this.initialize(img.li_ex_012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_013 = function() {
	this.initialize(img.li_ex_013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_014 = function() {
	this.initialize(img.li_ex_014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_015 = function() {
	this.initialize(img.li_ex_015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_016 = function() {
	this.initialize(img.li_ex_016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_017 = function() {
	this.initialize(img.li_ex_017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_018 = function() {
	this.initialize(img.li_ex_018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_019 = function() {
	this.initialize(img.li_ex_019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_020 = function() {
	this.initialize(img.li_ex_020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_021 = function() {
	this.initialize(img.li_ex_021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_022 = function() {
	this.initialize(img.li_ex_022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_023 = function() {
	this.initialize(img.li_ex_023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_024 = function() {
	this.initialize(img.li_ex_024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_025 = function() {
	this.initialize(img.li_ex_025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_026 = function() {
	this.initialize(img.li_ex_026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_027 = function() {
	this.initialize(img.li_ex_027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_028 = function() {
	this.initialize(img.li_ex_028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_029 = function() {
	this.initialize(img.li_ex_029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_030 = function() {
	this.initialize(img.li_ex_030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_031 = function() {
	this.initialize(img.li_ex_031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_032 = function() {
	this.initialize(img.li_ex_032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_033 = function() {
	this.initialize(img.li_ex_033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_034 = function() {
	this.initialize(img.li_ex_034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_035 = function() {
	this.initialize(img.li_ex_035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_036 = function() {
	this.initialize(img.li_ex_036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_037 = function() {
	this.initialize(img.li_ex_037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_038 = function() {
	this.initialize(img.li_ex_038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_039 = function() {
	this.initialize(img.li_ex_039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_040 = function() {
	this.initialize(img.li_ex_040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_041 = function() {
	this.initialize(img.li_ex_041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_042 = function() {
	this.initialize(img.li_ex_042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_043 = function() {
	this.initialize(img.li_ex_043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_044 = function() {
	this.initialize(img.li_ex_044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_045 = function() {
	this.initialize(img.li_ex_045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_046 = function() {
	this.initialize(img.li_ex_046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_047 = function() {
	this.initialize(img.li_ex_047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_048 = function() {
	this.initialize(img.li_ex_048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_049 = function() {
	this.initialize(img.li_ex_049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_050 = function() {
	this.initialize(img.li_ex_050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_051 = function() {
	this.initialize(img.li_ex_051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_052 = function() {
	this.initialize(img.li_ex_052);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_053 = function() {
	this.initialize(img.li_ex_053);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_054 = function() {
	this.initialize(img.li_ex_054);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_055 = function() {
	this.initialize(img.li_ex_055);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_056 = function() {
	this.initialize(img.li_ex_056);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_057 = function() {
	this.initialize(img.li_ex_057);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_058 = function() {
	this.initialize(img.li_ex_058);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_059 = function() {
	this.initialize(img.li_ex_059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_060 = function() {
	this.initialize(img.li_ex_060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_061 = function() {
	this.initialize(img.li_ex_061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_062 = function() {
	this.initialize(img.li_ex_062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_063 = function() {
	this.initialize(img.li_ex_063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_064 = function() {
	this.initialize(img.li_ex_064);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_065 = function() {
	this.initialize(img.li_ex_065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_066 = function() {
	this.initialize(img.li_ex_066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_067 = function() {
	this.initialize(img.li_ex_067);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_068 = function() {
	this.initialize(img.li_ex_068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_069 = function() {
	this.initialize(img.li_ex_069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_070 = function() {
	this.initialize(img.li_ex_070);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_071 = function() {
	this.initialize(img.li_ex_071);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_072 = function() {
	this.initialize(img.li_ex_072);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_073 = function() {
	this.initialize(img.li_ex_073);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_074 = function() {
	this.initialize(img.li_ex_074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_075 = function() {
	this.initialize(img.li_ex_075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_076 = function() {
	this.initialize(img.li_ex_076);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_077 = function() {
	this.initialize(img.li_ex_077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_078 = function() {
	this.initialize(img.li_ex_078);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_079 = function() {
	this.initialize(img.li_ex_079);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_080 = function() {
	this.initialize(img.li_ex_080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_081 = function() {
	this.initialize(img.li_ex_081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_082 = function() {
	this.initialize(img.li_ex_082);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_083 = function() {
	this.initialize(img.li_ex_083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_084 = function() {
	this.initialize(img.li_ex_084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_085 = function() {
	this.initialize(img.li_ex_085);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_086 = function() {
	this.initialize(img.li_ex_086);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_087 = function() {
	this.initialize(img.li_ex_087);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_088 = function() {
	this.initialize(img.li_ex_088);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_089 = function() {
	this.initialize(img.li_ex_089);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_090 = function() {
	this.initialize(img.li_ex_090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_091 = function() {
	this.initialize(img.li_ex_091);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_092 = function() {
	this.initialize(img.li_ex_092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_093 = function() {
	this.initialize(img.li_ex_093);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_094 = function() {
	this.initialize(img.li_ex_094);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_095 = function() {
	this.initialize(img.li_ex_095);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_096 = function() {
	this.initialize(img.li_ex_096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_097 = function() {
	this.initialize(img.li_ex_097);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_098 = function() {
	this.initialize(img.li_ex_098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_099 = function() {
	this.initialize(img.li_ex_099);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_100 = function() {
	this.initialize(img.li_ex_100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_101 = function() {
	this.initialize(img.li_ex_101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_102 = function() {
	this.initialize(img.li_ex_102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_103 = function() {
	this.initialize(img.li_ex_103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_104 = function() {
	this.initialize(img.li_ex_104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_105 = function() {
	this.initialize(img.li_ex_105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_106 = function() {
	this.initialize(img.li_ex_106);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_107 = function() {
	this.initialize(img.li_ex_107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_108 = function() {
	this.initialize(img.li_ex_108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_109 = function() {
	this.initialize(img.li_ex_109);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_110 = function() {
	this.initialize(img.li_ex_110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_111 = function() {
	this.initialize(img.li_ex_111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_112 = function() {
	this.initialize(img.li_ex_112);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_113 = function() {
	this.initialize(img.li_ex_113);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_114 = function() {
	this.initialize(img.li_ex_114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_115 = function() {
	this.initialize(img.li_ex_115);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_116 = function() {
	this.initialize(img.li_ex_116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_117 = function() {
	this.initialize(img.li_ex_117);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_118 = function() {
	this.initialize(img.li_ex_118);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_119 = function() {
	this.initialize(img.li_ex_119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_120 = function() {
	this.initialize(img.li_ex_120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_121 = function() {
	this.initialize(img.li_ex_121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_122 = function() {
	this.initialize(img.li_ex_122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_123 = function() {
	this.initialize(img.li_ex_123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_124 = function() {
	this.initialize(img.li_ex_124);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_125 = function() {
	this.initialize(img.li_ex_125);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_126 = function() {
	this.initialize(img.li_ex_126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_127 = function() {
	this.initialize(img.li_ex_127);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_128 = function() {
	this.initialize(img.li_ex_128);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_129 = function() {
	this.initialize(img.li_ex_129);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_130 = function() {
	this.initialize(img.li_ex_130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_131 = function() {
	this.initialize(img.li_ex_131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_132 = function() {
	this.initialize(img.li_ex_132);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_133 = function() {
	this.initialize(img.li_ex_133);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_134 = function() {
	this.initialize(img.li_ex_134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_135 = function() {
	this.initialize(img.li_ex_135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_136 = function() {
	this.initialize(img.li_ex_136);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_137 = function() {
	this.initialize(img.li_ex_137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_138 = function() {
	this.initialize(img.li_ex_138);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_139 = function() {
	this.initialize(img.li_ex_139);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_140 = function() {
	this.initialize(img.li_ex_140);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_141 = function() {
	this.initialize(img.li_ex_141);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_142 = function() {
	this.initialize(img.li_ex_142);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_143 = function() {
	this.initialize(img.li_ex_143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_144 = function() {
	this.initialize(img.li_ex_144);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_145 = function() {
	this.initialize(img.li_ex_145);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_146 = function() {
	this.initialize(img.li_ex_146);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_147 = function() {
	this.initialize(img.li_ex_147);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_148 = function() {
	this.initialize(img.li_ex_148);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_149 = function() {
	this.initialize(img.li_ex_149);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_150 = function() {
	this.initialize(img.li_ex_150);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_151 = function() {
	this.initialize(img.li_ex_151);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_152 = function() {
	this.initialize(img.li_ex_152);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_153 = function() {
	this.initialize(img.li_ex_153);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_154 = function() {
	this.initialize(img.li_ex_154);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_155 = function() {
	this.initialize(img.li_ex_155);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_156 = function() {
	this.initialize(img.li_ex_156);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_157 = function() {
	this.initialize(img.li_ex_157);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_158 = function() {
	this.initialize(img.li_ex_158);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_159 = function() {
	this.initialize(img.li_ex_159);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_160 = function() {
	this.initialize(img.li_ex_160);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_161 = function() {
	this.initialize(img.li_ex_161);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_162 = function() {
	this.initialize(img.li_ex_162);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_163 = function() {
	this.initialize(img.li_ex_163);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_164 = function() {
	this.initialize(img.li_ex_164);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_165 = function() {
	this.initialize(img.li_ex_165);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_166 = function() {
	this.initialize(img.li_ex_166);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_167 = function() {
	this.initialize(img.li_ex_167);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_168 = function() {
	this.initialize(img.li_ex_168);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_169 = function() {
	this.initialize(img.li_ex_169);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_170 = function() {
	this.initialize(img.li_ex_170);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_171 = function() {
	this.initialize(img.li_ex_171);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_172 = function() {
	this.initialize(img.li_ex_172);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_173 = function() {
	this.initialize(img.li_ex_173);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_174 = function() {
	this.initialize(img.li_ex_174);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_175 = function() {
	this.initialize(img.li_ex_175);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_176 = function() {
	this.initialize(img.li_ex_176);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_177 = function() {
	this.initialize(img.li_ex_177);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_178 = function() {
	this.initialize(img.li_ex_178);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_179 = function() {
	this.initialize(img.li_ex_179);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_180 = function() {
	this.initialize(img.li_ex_180);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_181 = function() {
	this.initialize(img.li_ex_181);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_182 = function() {
	this.initialize(img.li_ex_182);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_183 = function() {
	this.initialize(img.li_ex_183);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_184 = function() {
	this.initialize(img.li_ex_184);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_185 = function() {
	this.initialize(img.li_ex_185);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_186 = function() {
	this.initialize(img.li_ex_186);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_187 = function() {
	this.initialize(img.li_ex_187);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_188 = function() {
	this.initialize(img.li_ex_188);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_ex_189 = function() {
	this.initialize(img.li_ex_189);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_no_000 = function() {
	this.initialize(img.li_no_000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_no_001 = function() {
	this.initialize(img.li_no_001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_no_002 = function() {
	this.initialize(img.li_no_002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_no_003 = function() {
	this.initialize(img.li_no_003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_no_004 = function() {
	this.initialize(img.li_no_004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_no_005 = function() {
	this.initialize(img.li_no_005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_no_006 = function() {
	this.initialize(img.li_no_006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_no_007 = function() {
	this.initialize(img.li_no_007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_no_008 = function() {
	this.initialize(img.li_no_008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_no_009 = function() {
	this.initialize(img.li_no_009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_no_010 = function() {
	this.initialize(img.li_no_010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_no_011 = function() {
	this.initialize(img.li_no_011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_no_012 = function() {
	this.initialize(img.li_no_012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_no_013 = function() {
	this.initialize(img.li_no_013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_no_014 = function() {
	this.initialize(img.li_no_014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_no_015 = function() {
	this.initialize(img.li_no_015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_no_016 = function() {
	this.initialize(img.li_no_016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_no_017 = function() {
	this.initialize(img.li_no_017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_no_018 = function() {
	this.initialize(img.li_no_018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_no_019 = function() {
	this.initialize(img.li_no_019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_000 = function() {
	this.initialize(img.li_sw_000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_001 = function() {
	this.initialize(img.li_sw_001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_002 = function() {
	this.initialize(img.li_sw_002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_003 = function() {
	this.initialize(img.li_sw_003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_004 = function() {
	this.initialize(img.li_sw_004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_005 = function() {
	this.initialize(img.li_sw_005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_006 = function() {
	this.initialize(img.li_sw_006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_007 = function() {
	this.initialize(img.li_sw_007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_008 = function() {
	this.initialize(img.li_sw_008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_009 = function() {
	this.initialize(img.li_sw_009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_010 = function() {
	this.initialize(img.li_sw_010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_011 = function() {
	this.initialize(img.li_sw_011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_012 = function() {
	this.initialize(img.li_sw_012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_013 = function() {
	this.initialize(img.li_sw_013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_014 = function() {
	this.initialize(img.li_sw_014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_015 = function() {
	this.initialize(img.li_sw_015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_016 = function() {
	this.initialize(img.li_sw_016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_017 = function() {
	this.initialize(img.li_sw_017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_018 = function() {
	this.initialize(img.li_sw_018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_019 = function() {
	this.initialize(img.li_sw_019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_020 = function() {
	this.initialize(img.li_sw_020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_021 = function() {
	this.initialize(img.li_sw_021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_022 = function() {
	this.initialize(img.li_sw_022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_023 = function() {
	this.initialize(img.li_sw_023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_024 = function() {
	this.initialize(img.li_sw_024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_025 = function() {
	this.initialize(img.li_sw_025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_026 = function() {
	this.initialize(img.li_sw_026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_027 = function() {
	this.initialize(img.li_sw_027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_028 = function() {
	this.initialize(img.li_sw_028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_029 = function() {
	this.initialize(img.li_sw_029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_030 = function() {
	this.initialize(img.li_sw_030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_031 = function() {
	this.initialize(img.li_sw_031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_032 = function() {
	this.initialize(img.li_sw_032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_033 = function() {
	this.initialize(img.li_sw_033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_034 = function() {
	this.initialize(img.li_sw_034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_035 = function() {
	this.initialize(img.li_sw_035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_036 = function() {
	this.initialize(img.li_sw_036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_037 = function() {
	this.initialize(img.li_sw_037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_038 = function() {
	this.initialize(img.li_sw_038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_039 = function() {
	this.initialize(img.li_sw_039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_040 = function() {
	this.initialize(img.li_sw_040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_041 = function() {
	this.initialize(img.li_sw_041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_042 = function() {
	this.initialize(img.li_sw_042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_043 = function() {
	this.initialize(img.li_sw_043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_044 = function() {
	this.initialize(img.li_sw_044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_045 = function() {
	this.initialize(img.li_sw_045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_046 = function() {
	this.initialize(img.li_sw_046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_047 = function() {
	this.initialize(img.li_sw_047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_048 = function() {
	this.initialize(img.li_sw_048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_049 = function() {
	this.initialize(img.li_sw_049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_050 = function() {
	this.initialize(img.li_sw_050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_051 = function() {
	this.initialize(img.li_sw_051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_052 = function() {
	this.initialize(img.li_sw_052);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_053 = function() {
	this.initialize(img.li_sw_053);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_054 = function() {
	this.initialize(img.li_sw_054);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_055 = function() {
	this.initialize(img.li_sw_055);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_056 = function() {
	this.initialize(img.li_sw_056);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_057 = function() {
	this.initialize(img.li_sw_057);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_058 = function() {
	this.initialize(img.li_sw_058);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_059 = function() {
	this.initialize(img.li_sw_059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_060 = function() {
	this.initialize(img.li_sw_060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_061 = function() {
	this.initialize(img.li_sw_061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_062 = function() {
	this.initialize(img.li_sw_062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_063 = function() {
	this.initialize(img.li_sw_063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_064 = function() {
	this.initialize(img.li_sw_064);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_065 = function() {
	this.initialize(img.li_sw_065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_066 = function() {
	this.initialize(img.li_sw_066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_067 = function() {
	this.initialize(img.li_sw_067);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_068 = function() {
	this.initialize(img.li_sw_068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_069 = function() {
	this.initialize(img.li_sw_069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_070 = function() {
	this.initialize(img.li_sw_070);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_071 = function() {
	this.initialize(img.li_sw_071);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_072 = function() {
	this.initialize(img.li_sw_072);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_073 = function() {
	this.initialize(img.li_sw_073);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_074 = function() {
	this.initialize(img.li_sw_074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_075 = function() {
	this.initialize(img.li_sw_075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_076 = function() {
	this.initialize(img.li_sw_076);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_077 = function() {
	this.initialize(img.li_sw_077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_078 = function() {
	this.initialize(img.li_sw_078);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_079 = function() {
	this.initialize(img.li_sw_079);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_080 = function() {
	this.initialize(img.li_sw_080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_081 = function() {
	this.initialize(img.li_sw_081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_082 = function() {
	this.initialize(img.li_sw_082);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_083 = function() {
	this.initialize(img.li_sw_083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_084 = function() {
	this.initialize(img.li_sw_084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_085 = function() {
	this.initialize(img.li_sw_085);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_086 = function() {
	this.initialize(img.li_sw_086);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_087 = function() {
	this.initialize(img.li_sw_087);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_088 = function() {
	this.initialize(img.li_sw_088);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_089 = function() {
	this.initialize(img.li_sw_089);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_090 = function() {
	this.initialize(img.li_sw_090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_091 = function() {
	this.initialize(img.li_sw_091);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_092 = function() {
	this.initialize(img.li_sw_092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_093 = function() {
	this.initialize(img.li_sw_093);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_094 = function() {
	this.initialize(img.li_sw_094);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_095 = function() {
	this.initialize(img.li_sw_095);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_096 = function() {
	this.initialize(img.li_sw_096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_097 = function() {
	this.initialize(img.li_sw_097);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_098 = function() {
	this.initialize(img.li_sw_098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_099 = function() {
	this.initialize(img.li_sw_099);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_100 = function() {
	this.initialize(img.li_sw_100);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_101 = function() {
	this.initialize(img.li_sw_101);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_102 = function() {
	this.initialize(img.li_sw_102);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_103 = function() {
	this.initialize(img.li_sw_103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_104 = function() {
	this.initialize(img.li_sw_104);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_105 = function() {
	this.initialize(img.li_sw_105);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_106 = function() {
	this.initialize(img.li_sw_106);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_107 = function() {
	this.initialize(img.li_sw_107);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_108 = function() {
	this.initialize(img.li_sw_108);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_109 = function() {
	this.initialize(img.li_sw_109);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_110 = function() {
	this.initialize(img.li_sw_110);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_111 = function() {
	this.initialize(img.li_sw_111);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_112 = function() {
	this.initialize(img.li_sw_112);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_113 = function() {
	this.initialize(img.li_sw_113);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_114 = function() {
	this.initialize(img.li_sw_114);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_115 = function() {
	this.initialize(img.li_sw_115);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_116 = function() {
	this.initialize(img.li_sw_116);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_117 = function() {
	this.initialize(img.li_sw_117);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_118 = function() {
	this.initialize(img.li_sw_118);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_119 = function() {
	this.initialize(img.li_sw_119);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_120 = function() {
	this.initialize(img.li_sw_120);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_121 = function() {
	this.initialize(img.li_sw_121);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_122 = function() {
	this.initialize(img.li_sw_122);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_123 = function() {
	this.initialize(img.li_sw_123);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_124 = function() {
	this.initialize(img.li_sw_124);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_125 = function() {
	this.initialize(img.li_sw_125);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_126 = function() {
	this.initialize(img.li_sw_126);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_127 = function() {
	this.initialize(img.li_sw_127);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_128 = function() {
	this.initialize(img.li_sw_128);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_129 = function() {
	this.initialize(img.li_sw_129);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_130 = function() {
	this.initialize(img.li_sw_130);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_131 = function() {
	this.initialize(img.li_sw_131);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_132 = function() {
	this.initialize(img.li_sw_132);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_133 = function() {
	this.initialize(img.li_sw_133);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_134 = function() {
	this.initialize(img.li_sw_134);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_135 = function() {
	this.initialize(img.li_sw_135);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_136 = function() {
	this.initialize(img.li_sw_136);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_137 = function() {
	this.initialize(img.li_sw_137);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_138 = function() {
	this.initialize(img.li_sw_138);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_139 = function() {
	this.initialize(img.li_sw_139);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_140 = function() {
	this.initialize(img.li_sw_140);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_141 = function() {
	this.initialize(img.li_sw_141);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_142 = function() {
	this.initialize(img.li_sw_142);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_143 = function() {
	this.initialize(img.li_sw_143);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_144 = function() {
	this.initialize(img.li_sw_144);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_145 = function() {
	this.initialize(img.li_sw_145);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_146 = function() {
	this.initialize(img.li_sw_146);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_147 = function() {
	this.initialize(img.li_sw_147);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_148 = function() {
	this.initialize(img.li_sw_148);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_149 = function() {
	this.initialize(img.li_sw_149);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_150 = function() {
	this.initialize(img.li_sw_150);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_151 = function() {
	this.initialize(img.li_sw_151);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_152 = function() {
	this.initialize(img.li_sw_152);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_153 = function() {
	this.initialize(img.li_sw_153);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_154 = function() {
	this.initialize(img.li_sw_154);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_155 = function() {
	this.initialize(img.li_sw_155);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_156 = function() {
	this.initialize(img.li_sw_156);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_157 = function() {
	this.initialize(img.li_sw_157);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_158 = function() {
	this.initialize(img.li_sw_158);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_159 = function() {
	this.initialize(img.li_sw_159);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_160 = function() {
	this.initialize(img.li_sw_160);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_161 = function() {
	this.initialize(img.li_sw_161);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_162 = function() {
	this.initialize(img.li_sw_162);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_163 = function() {
	this.initialize(img.li_sw_163);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_164 = function() {
	this.initialize(img.li_sw_164);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_165 = function() {
	this.initialize(img.li_sw_165);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_166 = function() {
	this.initialize(img.li_sw_166);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_167 = function() {
	this.initialize(img.li_sw_167);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_168 = function() {
	this.initialize(img.li_sw_168);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_169 = function() {
	this.initialize(img.li_sw_169);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_170 = function() {
	this.initialize(img.li_sw_170);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_171 = function() {
	this.initialize(img.li_sw_171);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_172 = function() {
	this.initialize(img.li_sw_172);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_173 = function() {
	this.initialize(img.li_sw_173);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_174 = function() {
	this.initialize(img.li_sw_174);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_175 = function() {
	this.initialize(img.li_sw_175);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_176 = function() {
	this.initialize(img.li_sw_176);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_177 = function() {
	this.initialize(img.li_sw_177);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_178 = function() {
	this.initialize(img.li_sw_178);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_sw_179 = function() {
	this.initialize(img.li_sw_179);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_000 = function() {
	this.initialize(img.li_we_000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_001 = function() {
	this.initialize(img.li_we_001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_002 = function() {
	this.initialize(img.li_we_002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_003 = function() {
	this.initialize(img.li_we_003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_004 = function() {
	this.initialize(img.li_we_004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_005 = function() {
	this.initialize(img.li_we_005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_006 = function() {
	this.initialize(img.li_we_006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_007 = function() {
	this.initialize(img.li_we_007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_008 = function() {
	this.initialize(img.li_we_008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_009 = function() {
	this.initialize(img.li_we_009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_010 = function() {
	this.initialize(img.li_we_010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_011 = function() {
	this.initialize(img.li_we_011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_012 = function() {
	this.initialize(img.li_we_012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_013 = function() {
	this.initialize(img.li_we_013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_014 = function() {
	this.initialize(img.li_we_014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_015 = function() {
	this.initialize(img.li_we_015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_016 = function() {
	this.initialize(img.li_we_016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_017 = function() {
	this.initialize(img.li_we_017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_018 = function() {
	this.initialize(img.li_we_018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_019 = function() {
	this.initialize(img.li_we_019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_020 = function() {
	this.initialize(img.li_we_020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_021 = function() {
	this.initialize(img.li_we_021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_022 = function() {
	this.initialize(img.li_we_022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_023 = function() {
	this.initialize(img.li_we_023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_024 = function() {
	this.initialize(img.li_we_024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_025 = function() {
	this.initialize(img.li_we_025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_026 = function() {
	this.initialize(img.li_we_026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_027 = function() {
	this.initialize(img.li_we_027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_028 = function() {
	this.initialize(img.li_we_028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_029 = function() {
	this.initialize(img.li_we_029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_030 = function() {
	this.initialize(img.li_we_030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_031 = function() {
	this.initialize(img.li_we_031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_032 = function() {
	this.initialize(img.li_we_032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_033 = function() {
	this.initialize(img.li_we_033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_034 = function() {
	this.initialize(img.li_we_034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_035 = function() {
	this.initialize(img.li_we_035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_036 = function() {
	this.initialize(img.li_we_036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_037 = function() {
	this.initialize(img.li_we_037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_038 = function() {
	this.initialize(img.li_we_038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_039 = function() {
	this.initialize(img.li_we_039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_040 = function() {
	this.initialize(img.li_we_040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_041 = function() {
	this.initialize(img.li_we_041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_042 = function() {
	this.initialize(img.li_we_042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_043 = function() {
	this.initialize(img.li_we_043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_044 = function() {
	this.initialize(img.li_we_044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_045 = function() {
	this.initialize(img.li_we_045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_046 = function() {
	this.initialize(img.li_we_046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_047 = function() {
	this.initialize(img.li_we_047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_048 = function() {
	this.initialize(img.li_we_048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_049 = function() {
	this.initialize(img.li_we_049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_050 = function() {
	this.initialize(img.li_we_050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_051 = function() {
	this.initialize(img.li_we_051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_052 = function() {
	this.initialize(img.li_we_052);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_053 = function() {
	this.initialize(img.li_we_053);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_054 = function() {
	this.initialize(img.li_we_054);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_055 = function() {
	this.initialize(img.li_we_055);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_056 = function() {
	this.initialize(img.li_we_056);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_057 = function() {
	this.initialize(img.li_we_057);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_058 = function() {
	this.initialize(img.li_we_058);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.li_we_059 = function() {
	this.initialize(img.li_we_059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.lickHead = function() {
	this.initialize(img.lickHead);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,674,648);


(lib.lose = function() {
	this.initialize(img.lose);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.manHand = function() {
	this.initialize(img.manHand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,361,566);


(lib.normal_0 = function() {
	this.initialize(img.normal_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.normal_1 = function() {
	this.initialize(img.normal_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.openEyes = function() {
	this.initialize(img.openEyes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,389,105);


(lib.opening_1 = function() {
	this.initialize(img.opening_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.opening_2 = function() {
	this.initialize(img.opening_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.playBanner = function() {
	this.initialize(img.playBanner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,271,145);


(lib.return_icon = function() {
	this.initialize(img.return_icon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,80);


(lib.schoollovelogo = function() {
	this.initialize(img.schoollovelogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,162);


(lib.scratch = function() {
	this.initialize(img.scratch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.scratchBanner = function() {
	this.initialize(img.scratchBanner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,120);


(lib.sweaty_0 = function() {
	this.initialize(img.sweaty_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.sweaty_1 = function() {
	this.initialize(img.sweaty_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.ticket = function() {
	this.initialize(img.ticket);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,320);


(lib.titlelogo = function() {
	this.initialize(img.titlelogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,430,294);


(lib.triangle = function() {
	this.initialize(img.triangle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,16);


(lib.tutorial = function() {
	this.initialize(img.tutorial);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.tutorialBanner = function() {
	this.initialize(img.tutorialBanner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,97);


(lib.wallet_icon = function() {
	this.initialize(img.wallet_icon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,80);


(lib.wet_0 = function() {
	this.initialize(img.wet_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.wet_1 = function() {
	this.initialize(img.wet_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.window_1 = function() {
	this.initialize(img.window_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,632,193);


(lib.window_2 = function() {
	this.initialize(img.window_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,632,188);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.tutorialButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.tutorialBanner();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tutorialButton, new cjs.Rectangle(0,0,272,97), null);


(lib.shutter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egx/BDMMAAAiGXMBj/AAAMAAACGXg");
	this.shape.setTransform(320,430);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shutter, new cjs.Rectangle(0,0,640,860), null);


(lib.schoolloveLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2
	this.tachStart = new cjs.Text("TOUCH START", "normal 100 65px 'Montserrat'", "#FFFFFF");
	this.tachStart.name = "tachStart";
	this.tachStart.textAlign = "center";
	this.tachStart.lineHeight = 85;
	this.tachStart.lineWidth = 471;
	this.tachStart.parent = this;
	this.tachStart.setTransform(1.3,84.1);
	if(!lib.properties.webfonts['Montserrat']) {
		lib.webFontTxtInst['Montserrat'] = lib.webFontTxtInst['Montserrat'] || [];
		lib.webFontTxtInst['Montserrat'].push(this.tachStart);
	}

	this.timeline.addTween(cjs.Tween.get(this.tachStart).wait(1));

	// レイヤー_1
	this.instance = new lib.schoollovelogo();
	this.instance.parent = this;
	this.instance.setTransform(-80,-81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-236.3,-81,475.1,250.3);


(lib.rec = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgzA0QgWgVAAgfQAAgeAWgVQAVgWAeAAQAfAAAVAWQAVAVAAAeQAAAfgVAVQgVAVgfAAQgeAAgVgVg");
	this.shape.setTransform(7.4,7.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.rec, new cjs.Rectangle(0,0,14.7,14.7), null);


(lib.playButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.playBanner();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.playButton, new cjs.Rectangle(0,0,271,145), null);


(lib.mc_naviButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.triangle();
	this.instance.parent = this;
	this.instance.setTransform(640,370,1,1,90);

	this.instance_1 = new lib.triangle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,402,1,1,-90);

	this.instance_2 = new lib.triangle();
	this.instance_2.parent = this;
	this.instance_2.setTransform(304,1120.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_naviButton, new cjs.Rectangle(0,370,640,766.5), null);


(lib.mc_heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.heart();
	this.instance.parent = this;
	this.instance.setTransform(-32,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_heart, new cjs.Rectangle(-32,-32,64,64), null);


(lib.cutinText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.text = new cjs.Text("Are you ready?", "normal 100 29px 'Montserrat'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 39;
	this.text.lineWidth = 230;
	this.text.parent = this;
	this.text.setTransform(0,2);
	if(!lib.properties.webfonts['Montserrat']) {
		lib.webFontTxtInst['Montserrat'] = lib.webFontTxtInst['Montserrat'] || [];
		lib.webFontTxtInst['Montserrat'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.cutinText, new cjs.Rectangle(-117.1,0,234.3,41.9), null);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("Egx/BYwMAAAixfMBj/AAAMAAACxfg");
	this.shape.setTransform(320,568);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.moji = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.titlelogo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.moji, new cjs.Rectangle(0,0,430,294), null);


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyes
	this.instance = new lib.openEyes();
	this.instance.parent = this;
	this.instance.setTransform(140,363);

	this.instance_1 = new lib.closeEyes();
	this.instance_1.parent = this;
	this.instance_1.setTransform(139,407);

	this.instance_2 = new lib.halfOpenEyes();
	this.instance_2.parent = this;
	this.instance_2.setTransform(142,379);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},89).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(59));

	// head
	this.instance_3 = new lib.lickHead();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(160));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,674,648);


(lib.hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.manHand();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand, new cjs.Rectangle(0,0,361,566), null);


(lib.wetBGI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// レイヤー_1
	this.instance = new lib.wet_0();
	this.instance.parent = this;

	this.instance_1 = new lib.wet_1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.sweatyBGI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// レイヤー_1
	this.instance = new lib.sweaty_0();
	this.instance.parent = this;

	this.instance_1 = new lib.sweaty_1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.normalBGI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// レイヤー_1
	this.instance = new lib.normal_0();
	this.instance.parent = this;

	this.instance_1 = new lib.normal_1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.mc_windows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{ledies:0,mens:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2));

	// レイヤー_4
	this.messageText = new cjs.Text("あのイーハトーヴォのすきとほった風、夏でも底に冷たさをもつ青いそら、", "30px 'Helvetica'", "#FFFFFF");
	this.messageText.name = "messageText";
	this.messageText.lineHeight = 36;
	this.messageText.lineWidth = 576;
	this.messageText.parent = this;
	this.messageText.setTransform(-288,71.8);

	this.timeline.addTween(cjs.Tween.get(this.messageText).wait(3));

	// window
	this.instance = new lib.window_1();
	this.instance.parent = this;
	this.instance.setTransform(-316,0);

	this.instance_1 = new lib.window_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-316,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-316,0,632,193);


(lib.mc_openingBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// レイヤー_1
	this.instance = new lib.bg_0();
	this.instance.parent = this;

	this.instance_1 = new lib.opening_1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.opening_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.extraBGI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// レイヤー_1
	this.instance = new lib.extra_0();
	this.instance.parent = this;

	this.instance_1 = new lib.extra_1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.endingBGI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// レイヤー_1
	this.instance = new lib.ending_0();
	this.instance.parent = this;

	this.instance_1 = new lib.ending_1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.ending_2();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.blushBGI = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// レイヤー_1
	this.instance = new lib.blush_0();
	this.instance.parent = this;

	this.instance_1 = new lib.blush_1();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.win5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_4
	this.instance = new lib._5win();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.win5, new cjs.Rectangle(0,0,120,120), null);


(lib.win1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_4
	this.instance = new lib._1win();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.win1, new cjs.Rectangle(0,0,120,120), null);


(lib.scratch_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.scratch();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.scratch_1, new cjs.Rectangle(0,0,120,120), null);


(lib.lose_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_4
	this.instance = new lib.lose();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.lose_1, new cjs.Rectangle(0,0,120,120), null);


(lib.flipAnime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.flip_1();
	this.instance.parent = this;

	this.instance_1 = new lib.flip_2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.card = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.ticket();
	this.instance.parent = this;
	this.instance.setTransform(80,408);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.card, new cjs.Rectangle(80,408,480,320), null);


(lib.mc_lick_wet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop_0:0});

	// timeline functions:
	this.frame_0 = function() {
		this.alpha = 1;
		exportRoot.fn_changeFPS(10);
	}
	this.frame_3 = function() {
		var s = createjs.Sound;
		var seNum = 2;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_9 = function() {
		var jumpTo = "loop_0";
		var rndTotalNum = 12;
		exportRoot.fn_randomLoop(this, jumpTo, rndTotalNum);
	}
	this.frame_43 = function() {
		var s = createjs.Sound;
		var seNum = 5;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(6).call(this.frame_9).wait(34).call(this.frame_43).wait(17));

	// レイヤー_1
	this.instance = new lib.li_we_000();
	this.instance.parent = this;

	this.instance_1 = new lib.li_we_001();
	this.instance_1.parent = this;

	this.instance_2 = new lib.li_we_002();
	this.instance_2.parent = this;

	this.instance_3 = new lib.li_we_003();
	this.instance_3.parent = this;

	this.instance_4 = new lib.li_we_004();
	this.instance_4.parent = this;

	this.instance_5 = new lib.li_we_005();
	this.instance_5.parent = this;

	this.instance_6 = new lib.li_we_006();
	this.instance_6.parent = this;

	this.instance_7 = new lib.li_we_007();
	this.instance_7.parent = this;

	this.instance_8 = new lib.li_we_008();
	this.instance_8.parent = this;

	this.instance_9 = new lib.li_we_009();
	this.instance_9.parent = this;

	this.instance_10 = new lib.li_we_010();
	this.instance_10.parent = this;

	this.instance_11 = new lib.li_we_011();
	this.instance_11.parent = this;

	this.instance_12 = new lib.li_we_012();
	this.instance_12.parent = this;

	this.instance_13 = new lib.li_we_013();
	this.instance_13.parent = this;

	this.instance_14 = new lib.li_we_014();
	this.instance_14.parent = this;

	this.instance_15 = new lib.li_we_015();
	this.instance_15.parent = this;

	this.instance_16 = new lib.li_we_016();
	this.instance_16.parent = this;

	this.instance_17 = new lib.li_we_017();
	this.instance_17.parent = this;

	this.instance_18 = new lib.li_we_018();
	this.instance_18.parent = this;

	this.instance_19 = new lib.li_we_019();
	this.instance_19.parent = this;

	this.instance_20 = new lib.li_we_020();
	this.instance_20.parent = this;

	this.instance_21 = new lib.li_we_021();
	this.instance_21.parent = this;

	this.instance_22 = new lib.li_we_022();
	this.instance_22.parent = this;

	this.instance_23 = new lib.li_we_023();
	this.instance_23.parent = this;

	this.instance_24 = new lib.li_we_024();
	this.instance_24.parent = this;

	this.instance_25 = new lib.li_we_025();
	this.instance_25.parent = this;

	this.instance_26 = new lib.li_we_026();
	this.instance_26.parent = this;

	this.instance_27 = new lib.li_we_027();
	this.instance_27.parent = this;

	this.instance_28 = new lib.li_we_028();
	this.instance_28.parent = this;

	this.instance_29 = new lib.li_we_029();
	this.instance_29.parent = this;

	this.instance_30 = new lib.li_we_030();
	this.instance_30.parent = this;

	this.instance_31 = new lib.li_we_031();
	this.instance_31.parent = this;

	this.instance_32 = new lib.li_we_032();
	this.instance_32.parent = this;

	this.instance_33 = new lib.li_we_033();
	this.instance_33.parent = this;

	this.instance_34 = new lib.li_we_034();
	this.instance_34.parent = this;

	this.instance_35 = new lib.li_we_035();
	this.instance_35.parent = this;

	this.instance_36 = new lib.li_we_036();
	this.instance_36.parent = this;

	this.instance_37 = new lib.li_we_037();
	this.instance_37.parent = this;

	this.instance_38 = new lib.li_we_038();
	this.instance_38.parent = this;

	this.instance_39 = new lib.li_we_039();
	this.instance_39.parent = this;

	this.instance_40 = new lib.li_we_040();
	this.instance_40.parent = this;

	this.instance_41 = new lib.li_we_041();
	this.instance_41.parent = this;

	this.instance_42 = new lib.li_we_042();
	this.instance_42.parent = this;

	this.instance_43 = new lib.li_we_043();
	this.instance_43.parent = this;

	this.instance_44 = new lib.li_we_044();
	this.instance_44.parent = this;

	this.instance_45 = new lib.li_we_045();
	this.instance_45.parent = this;

	this.instance_46 = new lib.li_we_046();
	this.instance_46.parent = this;

	this.instance_47 = new lib.li_we_047();
	this.instance_47.parent = this;

	this.instance_48 = new lib.li_we_048();
	this.instance_48.parent = this;

	this.instance_49 = new lib.li_we_049();
	this.instance_49.parent = this;

	this.instance_50 = new lib.li_we_050();
	this.instance_50.parent = this;

	this.instance_51 = new lib.li_we_051();
	this.instance_51.parent = this;

	this.instance_52 = new lib.li_we_052();
	this.instance_52.parent = this;

	this.instance_53 = new lib.li_we_053();
	this.instance_53.parent = this;

	this.instance_54 = new lib.li_we_054();
	this.instance_54.parent = this;

	this.instance_55 = new lib.li_we_055();
	this.instance_55.parent = this;

	this.instance_56 = new lib.li_we_056();
	this.instance_56.parent = this;

	this.instance_57 = new lib.li_we_057();
	this.instance_57.parent = this;

	this.instance_58 = new lib.li_we_058();
	this.instance_58.parent = this;

	this.instance_59 = new lib.li_we_059();
	this.instance_59.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.mc_lick_normal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.alpha = 1;
	}
	this.frame_11 = function() {
		afterFrames = 5
		thisMovieClip = this;
		createjs.Ticker.addEventListener('tick', function(event) {
			afterFrames--;
			if(afterFrames != 0){
				
				if(changeValue == 0){
					createjs.Ticker.framerate = createjs.Ticker.framerate - 1 * (5-afterFrames);
					console.log("fps:" + createjs.Ticker.framerate);
				}
			//停止点
			}else{
				if(changeValue == 0){
					console.log("stop");
					thisMovieClip.stop();
					var rnd = Math.floor(Math.random() * 2) + 1;
					countDown = rnd * 12;
					
		
					createjs.Ticker.addEventListener('tick', function(event) {
						if(countDown != 0){
							countDown--;
						}else{
							thisMovieClip.play();
							event.remove();  
						}
					});
				}
		
				//起点
				changeValue = Math.floor(Math.random() * 11);
				var loopFPS = 20 + changeValue * 1;
				console.log("baseFPS"+loopFPS);
				createjs.Ticker.framerate = loopFPS;
		
				event.remove();
			}
		});
	}
	this.frame_15 = function() {
		var s = createjs.Sound;
		var seNum = 2;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(4).call(this.frame_15).wait(5));

	// レイヤー_1
	this.instance = new lib.li_no_000();
	this.instance.parent = this;

	this.instance_1 = new lib.li_no_001();
	this.instance_1.parent = this;

	this.instance_2 = new lib.li_no_002();
	this.instance_2.parent = this;

	this.instance_3 = new lib.li_no_003();
	this.instance_3.parent = this;

	this.instance_4 = new lib.li_no_004();
	this.instance_4.parent = this;

	this.instance_5 = new lib.li_no_005();
	this.instance_5.parent = this;

	this.instance_6 = new lib.li_no_006();
	this.instance_6.parent = this;

	this.instance_7 = new lib.li_no_007();
	this.instance_7.parent = this;

	this.instance_8 = new lib.li_no_008();
	this.instance_8.parent = this;

	this.instance_9 = new lib.li_no_009();
	this.instance_9.parent = this;

	this.instance_10 = new lib.li_no_010();
	this.instance_10.parent = this;

	this.instance_11 = new lib.li_no_011();
	this.instance_11.parent = this;

	this.instance_12 = new lib.li_no_012();
	this.instance_12.parent = this;

	this.instance_13 = new lib.li_no_013();
	this.instance_13.parent = this;

	this.instance_14 = new lib.li_no_014();
	this.instance_14.parent = this;

	this.instance_15 = new lib.li_no_015();
	this.instance_15.parent = this;

	this.instance_16 = new lib.li_no_016();
	this.instance_16.parent = this;

	this.instance_17 = new lib.li_no_017();
	this.instance_17.parent = this;

	this.instance_18 = new lib.li_no_018();
	this.instance_18.parent = this;

	this.instance_19 = new lib.li_no_019();
	this.instance_19.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.mc_lick_blush = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.alpha = 1;
	}
	this.frame_14 = function() {
		var s = createjs.Sound;
		var seNum = 2;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_34 = function() {
		afterFrames = 5
		thisMovieClip = this;
		createjs.Ticker.addEventListener('tick', function(event) {
			afterFrames--;
			if(afterFrames != 0){
				
				if(changeValue == 0){
					createjs.Ticker.framerate = createjs.Ticker.framerate - 1 * (5-afterFrames);
					console.log("fps:" + createjs.Ticker.framerate);
				}
			//停止点
			}else{
				if(changeValue == 0){
					console.log("stop");
					thisMovieClip.stop();
					var rnd = Math.floor(Math.random() * 2) + 1;
					countDown = rnd * 12;
					
		
					createjs.Ticker.addEventListener('tick', function(event) {
						if(countDown != 0){
							countDown--;
						}else{
							thisMovieClip.play();
							event.remove();  
						}
					});
				}
		
				//起点
				changeValue = Math.floor(Math.random() * 11);
				var loopFPS = 20 + changeValue * 1;
				console.log("baseFPS"+loopFPS);
				createjs.Ticker.framerate = loopFPS;
		
				event.remove();
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(20).call(this.frame_34).wait(6));

	// レイヤー_1
	this.instance = new lib.li_bl_000();
	this.instance.parent = this;

	this.instance_1 = new lib.li_bl_001();
	this.instance_1.parent = this;

	this.instance_2 = new lib.li_bl_002();
	this.instance_2.parent = this;

	this.instance_3 = new lib.li_bl_003();
	this.instance_3.parent = this;

	this.instance_4 = new lib.li_bl_004();
	this.instance_4.parent = this;

	this.instance_5 = new lib.li_bl_005();
	this.instance_5.parent = this;

	this.instance_6 = new lib.li_bl_006();
	this.instance_6.parent = this;

	this.instance_7 = new lib.li_bl_007();
	this.instance_7.parent = this;

	this.instance_8 = new lib.li_bl_008();
	this.instance_8.parent = this;

	this.instance_9 = new lib.li_bl_009();
	this.instance_9.parent = this;

	this.instance_10 = new lib.li_bl_010();
	this.instance_10.parent = this;

	this.instance_11 = new lib.li_bl_011();
	this.instance_11.parent = this;

	this.instance_12 = new lib.li_bl_012();
	this.instance_12.parent = this;

	this.instance_13 = new lib.li_bl_013();
	this.instance_13.parent = this;

	this.instance_14 = new lib.li_bl_014();
	this.instance_14.parent = this;

	this.instance_15 = new lib.li_bl_015();
	this.instance_15.parent = this;

	this.instance_16 = new lib.li_bl_016();
	this.instance_16.parent = this;

	this.instance_17 = new lib.li_bl_017();
	this.instance_17.parent = this;

	this.instance_18 = new lib.li_bl_018();
	this.instance_18.parent = this;

	this.instance_19 = new lib.li_bl_019();
	this.instance_19.parent = this;

	this.instance_20 = new lib.li_bl_020();
	this.instance_20.parent = this;

	this.instance_21 = new lib.li_bl_021();
	this.instance_21.parent = this;

	this.instance_22 = new lib.li_bl_022();
	this.instance_22.parent = this;

	this.instance_23 = new lib.li_bl_023();
	this.instance_23.parent = this;

	this.instance_24 = new lib.li_bl_024();
	this.instance_24.parent = this;

	this.instance_25 = new lib.li_bl_025();
	this.instance_25.parent = this;

	this.instance_26 = new lib.li_bl_026();
	this.instance_26.parent = this;

	this.instance_27 = new lib.li_bl_027();
	this.instance_27.parent = this;

	this.instance_28 = new lib.li_bl_028();
	this.instance_28.parent = this;

	this.instance_29 = new lib.li_bl_029();
	this.instance_29.parent = this;

	this.instance_30 = new lib.li_bl_030();
	this.instance_30.parent = this;

	this.instance_31 = new lib.li_bl_031();
	this.instance_31.parent = this;

	this.instance_32 = new lib.li_bl_032();
	this.instance_32.parent = this;

	this.instance_33 = new lib.li_bl_033();
	this.instance_33.parent = this;

	this.instance_34 = new lib.li_bl_034();
	this.instance_34.parent = this;

	this.instance_35 = new lib.li_bl_035();
	this.instance_35.parent = this;

	this.instance_36 = new lib.li_bl_036();
	this.instance_36.parent = this;

	this.instance_37 = new lib.li_bl_037();
	this.instance_37.parent = this;

	this.instance_38 = new lib.li_bl_038();
	this.instance_38.parent = this;

	this.instance_39 = new lib.li_bl_039();
	this.instance_39.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.mc_facial_wet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop_0":0});

	// timeline functions:
	this.frame_0 = function() {
		this.alpha = 1;
		exportRoot.fn_changeFPS(10);
	}
	this.frame_3 = function() {
		var s = createjs.Sound;
		var seNum = 3;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_5 = function() {
		var jumpTo = "loop_0";
		var rndTotalNum = 20;
		exportRoot.fn_randomLoop(this, jumpTo, rndTotalNum);
	}
	this.frame_12 = function() {
		var s = createjs.Sound;
		var sceneNum = 2;
		var rnd = Math.floor(Math.random() * cvArr[sceneNum]);
		console.log("cv:"+rnd);
		s.play("cv_" + sceneNum + rnd);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(2).call(this.frame_5).wait(7).call(this.frame_12).wait(13));

	// レイヤー_1
	this.instance = new lib.fa_we_000();
	this.instance.parent = this;

	this.instance_1 = new lib.fa_we_001();
	this.instance_1.parent = this;

	this.instance_2 = new lib.fa_we_002();
	this.instance_2.parent = this;

	this.instance_3 = new lib.fa_we_003();
	this.instance_3.parent = this;

	this.instance_4 = new lib.fa_we_004();
	this.instance_4.parent = this;

	this.instance_5 = new lib.fa_we_005();
	this.instance_5.parent = this;

	this.instance_6 = new lib.fa_we_006();
	this.instance_6.parent = this;

	this.instance_7 = new lib.fa_we_007();
	this.instance_7.parent = this;

	this.instance_8 = new lib.fa_we_008();
	this.instance_8.parent = this;

	this.instance_9 = new lib.fa_we_009();
	this.instance_9.parent = this;

	this.instance_10 = new lib.fa_we_010();
	this.instance_10.parent = this;

	this.instance_11 = new lib.fa_we_011();
	this.instance_11.parent = this;

	this.instance_12 = new lib.fa_we_012();
	this.instance_12.parent = this;

	this.instance_13 = new lib.fa_we_013();
	this.instance_13.parent = this;

	this.instance_14 = new lib.fa_we_014();
	this.instance_14.parent = this;

	this.instance_15 = new lib.fa_we_015();
	this.instance_15.parent = this;

	this.instance_16 = new lib.fa_we_016();
	this.instance_16.parent = this;

	this.instance_17 = new lib.fa_we_017();
	this.instance_17.parent = this;

	this.instance_18 = new lib.fa_we_018();
	this.instance_18.parent = this;

	this.instance_19 = new lib.fa_we_019();
	this.instance_19.parent = this;

	this.instance_20 = new lib.fa_we_020();
	this.instance_20.parent = this;

	this.instance_21 = new lib.fa_we_021();
	this.instance_21.parent = this;

	this.instance_22 = new lib.fa_we_022();
	this.instance_22.parent = this;

	this.instance_23 = new lib.fa_we_023();
	this.instance_23.parent = this;

	this.instance_24 = new lib.fa_we_024();
	this.instance_24.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.mc_facial_normal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.alpha = 1;
	}
	this.frame_23 = function() {
		var s = createjs.Sound;
		var sceneNum = 2;
		var rnd = Math.floor(Math.random() * cvArr[sceneNum]);
		console.log("cv:"+rnd);
		s.play("cv_" + sceneNum + rnd);
	}
	this.frame_31 = function() {
		var s = createjs.Sound;
		var seNum = 3;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_35 = function() {
		afterFrames = 5
		thisMovieClip = this;
		createjs.Ticker.addEventListener('tick', function(event) {
			afterFrames--;
			if(afterFrames != 0){
				
				if(changeValue == 0){
					createjs.Ticker.framerate = createjs.Ticker.framerate - 1 * (5-afterFrames);
					console.log("fps:" + createjs.Ticker.framerate);
				}
			//停止点
			}else{
				if(changeValue == 0){
					console.log("stop");
					thisMovieClip.stop();
					var rnd = Math.floor(Math.random() * 2) + 1;
					countDown = rnd * 12;
					
		
					createjs.Ticker.addEventListener('tick', function(event) {
						if(countDown != 0){
							countDown--;
						}else{
							thisMovieClip.play();
							event.remove();  
						}
					});
				}
		
				//起点
				changeValue = Math.floor(Math.random() * 11);
				var loopFPS = 20 + changeValue * 1;
				console.log("baseFPS"+loopFPS);
				createjs.Ticker.framerate = loopFPS;
		
				event.remove();
			}
		});  
		
		
		
		
		
		
		
		/*
		if(animeSpeed == 0){
			
			slowTime = 5;
			
			createjs.Ticker.addEventListener('tick', function(event) {
				if(slowTime != 0){
					slowTime--;
					createjs.Ticker.framerate = createjs.Ticker.framerate - 1;
					console.log("fps:" + createjs.Ticker.framerate);
					
				}else{
					event.remove();  
				}
			});  
		
		}
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(8).call(this.frame_31).wait(4).call(this.frame_35).wait(5));

	// レイヤー_1
	this.instance = new lib.fa_no_000();
	this.instance.parent = this;

	this.instance_1 = new lib.fa_no_001();
	this.instance_1.parent = this;

	this.instance_2 = new lib.fa_no_002();
	this.instance_2.parent = this;

	this.instance_3 = new lib.fa_no_003();
	this.instance_3.parent = this;

	this.instance_4 = new lib.fa_no_004();
	this.instance_4.parent = this;

	this.instance_5 = new lib.fa_no_005();
	this.instance_5.parent = this;

	this.instance_6 = new lib.fa_no_006();
	this.instance_6.parent = this;

	this.instance_7 = new lib.fa_no_007();
	this.instance_7.parent = this;

	this.instance_8 = new lib.fa_no_008();
	this.instance_8.parent = this;

	this.instance_9 = new lib.fa_no_009();
	this.instance_9.parent = this;

	this.instance_10 = new lib.fa_no_010();
	this.instance_10.parent = this;

	this.instance_11 = new lib.fa_no_011();
	this.instance_11.parent = this;

	this.instance_12 = new lib.fa_no_012();
	this.instance_12.parent = this;

	this.instance_13 = new lib.fa_no_013();
	this.instance_13.parent = this;

	this.instance_14 = new lib.fa_no_014();
	this.instance_14.parent = this;

	this.instance_15 = new lib.fa_no_015();
	this.instance_15.parent = this;

	this.instance_16 = new lib.fa_no_016();
	this.instance_16.parent = this;

	this.instance_17 = new lib.fa_no_017();
	this.instance_17.parent = this;

	this.instance_18 = new lib.fa_no_018();
	this.instance_18.parent = this;

	this.instance_19 = new lib.fa_no_019();
	this.instance_19.parent = this;

	this.instance_20 = new lib.fa_no_020();
	this.instance_20.parent = this;

	this.instance_21 = new lib.fa_no_021();
	this.instance_21.parent = this;

	this.instance_22 = new lib.fa_no_022();
	this.instance_22.parent = this;

	this.instance_23 = new lib.fa_no_023();
	this.instance_23.parent = this;

	this.instance_24 = new lib.fa_no_024();
	this.instance_24.parent = this;

	this.instance_25 = new lib.fa_no_025();
	this.instance_25.parent = this;

	this.instance_26 = new lib.fa_no_026();
	this.instance_26.parent = this;

	this.instance_27 = new lib.fa_no_027();
	this.instance_27.parent = this;

	this.instance_28 = new lib.fa_no_028();
	this.instance_28.parent = this;

	this.instance_29 = new lib.fa_no_029();
	this.instance_29.parent = this;

	this.instance_30 = new lib.fa_no_030();
	this.instance_30.parent = this;

	this.instance_31 = new lib.fa_no_031();
	this.instance_31.parent = this;

	this.instance_32 = new lib.fa_no_032();
	this.instance_32.parent = this;

	this.instance_33 = new lib.fa_no_033();
	this.instance_33.parent = this;

	this.instance_34 = new lib.fa_no_034();
	this.instance_34.parent = this;

	this.instance_35 = new lib.fa_no_035();
	this.instance_35.parent = this;

	this.instance_36 = new lib.fa_no_036();
	this.instance_36.parent = this;

	this.instance_37 = new lib.fa_no_037();
	this.instance_37.parent = this;

	this.instance_38 = new lib.fa_no_038();
	this.instance_38.parent = this;

	this.instance_39 = new lib.fa_no_039();
	this.instance_39.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.mc_facial_blush = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop_0":0});

	// timeline functions:
	this.frame_0 = function() {
		this.alpha = 1;
	}
	this.frame_5 = function() {
		afterFrames = 5
		thisMovieClip = this;
		createjs.Ticker.addEventListener('tick', function(event) {
			afterFrames--;
			if(afterFrames != 0){
				
				if(randomStop == 0){
					createjs.Ticker.framerate = createjs.Ticker.framerate - 1 * (5-afterFrames);
					console.log("fps:" + createjs.Ticker.framerate);
				}
			//停止点
			}else{
				if(randomStop == 0){
					console.log("stop");
					thisMovieClip.stop();
					var rnd = Math.floor(Math.random() * 2) + 1;
					countDown = rnd * 12;
					
		
					createjs.Ticker.addEventListener('tick', function(event) {
						if(countDown != 0){
							countDown--;
						}else{
							thisMovieClip.play();
							event.remove();  
						}
					});
				}
		
				//起点
				changeValue = Math.floor(Math.random() * 11);
				var loopFPS = 20 + changeValue * 1;
				console.log("baseFPS"+loopFPS);
				createjs.Ticker.framerate = loopFPS;
				randomStop = Math.floor(Math.random() * 21); //停止する確率
				event.remove();
			}
		});
		var s = createjs.Sound;
		var seNum = 3;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_10 = function() {
		var s = createjs.Sound;
		var sceneNum = 2;
		var rnd = Math.floor(Math.random() * cvArr[sceneNum]);
		console.log("cv:"+rnd);
		s.play("cv_" + sceneNum + rnd);
	}
	this.frame_14 = function() {
		var s = createjs.Sound;
		var seNum = 3;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_20 = function() {
		var jumpTo = "loop_0";
		var rndTotalNum = 96;
		exportRoot.fn_randomLoop(this, jumpTo, rndTotalNum);
	}
	this.frame_21 = function() {
		createjs.Ticker.framerate = 15;
	}
	this.frame_29 = function() {
		this.stop();
		createjs.Tween.get(this)
			.wait(1000)
			.call(function(){
				this.play();
			});
		createjs.Ticker.framerate = 20;
	}
	this.frame_39 = function() {
		this.gotoAndPlay("loop_0");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5).call(this.frame_10).wait(4).call(this.frame_14).wait(6).call(this.frame_20).wait(1).call(this.frame_21).wait(8).call(this.frame_29).wait(10).call(this.frame_39).wait(1));

	// レイヤー_1
	this.instance = new lib.fa_bl_000();
	this.instance.parent = this;
	this.instance.setTransform(0,0.4);

	this.instance_1 = new lib.fa_bl_001();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.4);

	this.instance_2 = new lib.fa_bl_002();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0.4);

	this.instance_3 = new lib.fa_bl_003();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0.4);

	this.instance_4 = new lib.fa_bl_004();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0.4);

	this.instance_5 = new lib.fa_bl_005();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0.4);

	this.instance_6 = new lib.fa_bl_006();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,0.4);

	this.instance_7 = new lib.fa_bl_007();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0.4);

	this.instance_8 = new lib.fa_bl_008();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,0.4);

	this.instance_9 = new lib.fa_bl_009();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,0.4);

	this.instance_10 = new lib.fa_bl_010();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,0.4);

	this.instance_11 = new lib.fa_bl_011();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0.4);

	this.instance_12 = new lib.fa_bl_012();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,0.4);

	this.instance_13 = new lib.fa_bl_013();
	this.instance_13.parent = this;
	this.instance_13.setTransform(0,0.4);

	this.instance_14 = new lib.fa_bl_014();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,0.4);

	this.instance_15 = new lib.fa_bl_015();
	this.instance_15.parent = this;
	this.instance_15.setTransform(0,0.4);

	this.instance_16 = new lib.fa_bl_016();
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0.4);

	this.instance_17 = new lib.fa_bl_017();
	this.instance_17.parent = this;
	this.instance_17.setTransform(0,0.4);

	this.instance_18 = new lib.fa_bl_018();
	this.instance_18.parent = this;
	this.instance_18.setTransform(0,0.4);

	this.instance_19 = new lib.fa_bl_019();
	this.instance_19.parent = this;
	this.instance_19.setTransform(0,0.4);

	this.instance_20 = new lib.fa_bl_020();
	this.instance_20.parent = this;
	this.instance_20.setTransform(0,0.4);

	this.instance_21 = new lib.fa_bl_021();
	this.instance_21.parent = this;
	this.instance_21.setTransform(0,0.4);

	this.instance_22 = new lib.fa_bl_022();
	this.instance_22.parent = this;
	this.instance_22.setTransform(0,0.4);

	this.instance_23 = new lib.fa_bl_023();
	this.instance_23.parent = this;
	this.instance_23.setTransform(0,0.4);

	this.instance_24 = new lib.fa_bl_024();
	this.instance_24.parent = this;
	this.instance_24.setTransform(0,0.4);

	this.instance_25 = new lib.fa_bl_025();
	this.instance_25.parent = this;
	this.instance_25.setTransform(0,0.4);

	this.instance_26 = new lib.fa_bl_026();
	this.instance_26.parent = this;
	this.instance_26.setTransform(0,0.4);

	this.instance_27 = new lib.fa_bl_027();
	this.instance_27.parent = this;
	this.instance_27.setTransform(0,0.4);

	this.instance_28 = new lib.fa_bl_028();
	this.instance_28.parent = this;
	this.instance_28.setTransform(0,0.4);

	this.instance_29 = new lib.fa_bl_029();
	this.instance_29.parent = this;
	this.instance_29.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_20}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.4,640,1136);


(lib.mc_blowjob_wet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop_0":0});

	// timeline functions:
	this.frame_0 = function() {
		this.alpha = 1;
		exportRoot.fn_changeFPS(10);
	}
	this.frame_5 = function() {
		var s = createjs.Sound;
		var seNum = 1;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_10 = function() {
		var jumpTo = "loop_0";
		var rndTotalNum = 12;
		exportRoot.fn_randomLoop(this, jumpTo, rndTotalNum);
	}
	this.frame_14 = function() {
		var s = createjs.Sound;
		var seNum = 5;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_35 = function() {
		var s = createjs.Sound;
		var seNum = 4;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5).call(this.frame_10).wait(4).call(this.frame_14).wait(21).call(this.frame_35).wait(15));

	// レイヤー_1
	this.instance = new lib.bl_we_000();
	this.instance.parent = this;

	this.instance_1 = new lib.bl_we_001();
	this.instance_1.parent = this;

	this.instance_2 = new lib.bl_we_002();
	this.instance_2.parent = this;

	this.instance_3 = new lib.bl_we_003();
	this.instance_3.parent = this;

	this.instance_4 = new lib.bl_we_004();
	this.instance_4.parent = this;

	this.instance_5 = new lib.bl_we_005();
	this.instance_5.parent = this;

	this.instance_6 = new lib.bl_we_006();
	this.instance_6.parent = this;

	this.instance_7 = new lib.bl_we_007();
	this.instance_7.parent = this;

	this.instance_8 = new lib.bl_we_008();
	this.instance_8.parent = this;

	this.instance_9 = new lib.bl_we_009();
	this.instance_9.parent = this;

	this.instance_10 = new lib.bl_we_010();
	this.instance_10.parent = this;

	this.instance_11 = new lib.bl_we_011();
	this.instance_11.parent = this;

	this.instance_12 = new lib.bl_we_012();
	this.instance_12.parent = this;

	this.instance_13 = new lib.bl_we_013();
	this.instance_13.parent = this;

	this.instance_14 = new lib.bl_we_014();
	this.instance_14.parent = this;

	this.instance_15 = new lib.bl_we_015();
	this.instance_15.parent = this;

	this.instance_16 = new lib.bl_we_016();
	this.instance_16.parent = this;

	this.instance_17 = new lib.bl_we_017();
	this.instance_17.parent = this;

	this.instance_18 = new lib.bl_we_018();
	this.instance_18.parent = this;

	this.instance_19 = new lib.bl_we_019();
	this.instance_19.parent = this;

	this.instance_20 = new lib.bl_we_020();
	this.instance_20.parent = this;

	this.instance_21 = new lib.bl_we_021();
	this.instance_21.parent = this;

	this.instance_22 = new lib.bl_we_022();
	this.instance_22.parent = this;

	this.instance_23 = new lib.bl_we_023();
	this.instance_23.parent = this;

	this.instance_24 = new lib.bl_we_024();
	this.instance_24.parent = this;

	this.instance_25 = new lib.bl_we_025();
	this.instance_25.parent = this;

	this.instance_26 = new lib.bl_we_026();
	this.instance_26.parent = this;

	this.instance_27 = new lib.bl_we_027();
	this.instance_27.parent = this;

	this.instance_28 = new lib.bl_we_028();
	this.instance_28.parent = this;

	this.instance_29 = new lib.bl_we_029();
	this.instance_29.parent = this;

	this.instance_30 = new lib.bl_we_030();
	this.instance_30.parent = this;

	this.instance_31 = new lib.bl_we_031();
	this.instance_31.parent = this;

	this.instance_32 = new lib.bl_we_032();
	this.instance_32.parent = this;

	this.instance_33 = new lib.bl_we_033();
	this.instance_33.parent = this;

	this.instance_34 = new lib.bl_we_034();
	this.instance_34.parent = this;

	this.instance_35 = new lib.bl_we_035();
	this.instance_35.parent = this;

	this.instance_36 = new lib.bl_we_036();
	this.instance_36.parent = this;

	this.instance_37 = new lib.bl_we_037();
	this.instance_37.parent = this;

	this.instance_38 = new lib.bl_we_038();
	this.instance_38.parent = this;

	this.instance_39 = new lib.bl_we_039();
	this.instance_39.parent = this;

	this.instance_40 = new lib.bl_we_040();
	this.instance_40.parent = this;

	this.instance_41 = new lib.bl_we_041();
	this.instance_41.parent = this;

	this.instance_42 = new lib.bl_we_042();
	this.instance_42.parent = this;

	this.instance_43 = new lib.bl_we_043();
	this.instance_43.parent = this;

	this.instance_44 = new lib.bl_we_044();
	this.instance_44.parent = this;

	this.instance_45 = new lib.bl_we_045();
	this.instance_45.parent = this;

	this.instance_46 = new lib.bl_we_046();
	this.instance_46.parent = this;

	this.instance_47 = new lib.bl_we_047();
	this.instance_47.parent = this;

	this.instance_48 = new lib.bl_we_048();
	this.instance_48.parent = this;

	this.instance_49 = new lib.bl_we_049();
	this.instance_49.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.mc_blowjob_normal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop_0":0,loop_1:10,loop_2:40});

	// timeline functions:
	this.frame_0 = function() {
		this.alpha = 1;
		/*
		this.stop();
		createjs.Tween.get(this, {useTicks: true})
			.wait(10)
			.call(function(){
				this.play();
			});
		*/
	}
	this.frame_15 = function() {
		var s = createjs.Sound;
		var sceneNum = 0;
		var rnd = Math.floor(Math.random() * cvArr[sceneNum]);
		console.log("cv:"+rnd);
		s.play("cv_" + sceneNum + rnd);
	}
	this.frame_18 = function() {
		afterFrames = 5
		thisMovieClip = this;
		createjs.Ticker.addEventListener('tick', function(event) {
			afterFrames--;
			if(afterFrames != 0){
				
				if(changeValue == 0){
					createjs.Ticker.framerate = createjs.Ticker.framerate - 1 * (5-afterFrames);
					console.log("fps:" + createjs.Ticker.framerate);
				}
			//停止点
			}else{
				if(changeValue == 0){
					console.log("stop");
					thisMovieClip.stop();
					var rnd = Math.floor(Math.random() * 2) + 1;
					countDown = rnd * 12;
					
		
					createjs.Ticker.addEventListener('tick', function(event) {
						if(countDown != 0){
							countDown--;
						}else{
							thisMovieClip.play();
							event.remove();  
						}
					});
				}
		
				//起点
				changeValue = Math.floor(Math.random() * 11);
				var loopFPS = 20 + changeValue * 1;
				console.log("baseFPS"+loopFPS);
				createjs.Ticker.framerate = loopFPS;
		
				event.remove();
			}
		});
	}
	this.frame_20 = function() {
		/*
		createjs.Tween.get(this)
			.to({scaleX: 1.2, scaleY: 1.2}, 100, createjs.Ease.cubicOut)
			.to({scaleX: 1, scaleY: 1}, 100, createjs.Ease.cubicIn);
		*/
	}
	this.frame_28 = function() {
		var s = createjs.Sound;
		var seNum = 1;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_30 = function() {
		var jumpTo = "loop_1";
		var rndTotalNum = 24;
		exportRoot.fn_randomLoop(this, jumpTo, rndTotalNum);
	}
	this.frame_31 = function() {
		createjs.Ticker.framerate = 15;
	}
	this.frame_45 = function() {
		var jumpTo = "loop_2";
		var rndTotalNum = 8;
		var rnd = Math.floor(Math.random() * rndTotalNum);
		if(rnd != 0){
			this.gotoAndPlay(jumpTo);
		}else{
			this.gotoAndPlay("loop_0");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(3).call(this.frame_18).wait(2).call(this.frame_20).wait(8).call(this.frame_28).wait(2).call(this.frame_30).wait(1).call(this.frame_31).wait(14).call(this.frame_45).wait(1));

	// anime
	this.instance = new lib.bl_no_029();
	this.instance.parent = this;
	this.instance.setTransform(0,0.4);

	this.instance_1 = new lib.bl_no_028();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0.4);

	this.instance_2 = new lib.bl_no_027();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0.4);

	this.instance_3 = new lib.bl_no_026();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,0.4);

	this.instance_4 = new lib.bl_no_025();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0.4);

	this.instance_5 = new lib.bl_no_024();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0.4);

	this.instance_6 = new lib.bl_no_023();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,0.4);

	this.instance_7 = new lib.bl_no_022();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0.4);

	this.instance_8 = new lib.bl_no_021();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,0.4);

	this.instance_9 = new lib.bl_no_020();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,0.4);

	this.instance_10 = new lib.bl_no_000();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,0.4);

	this.instance_11 = new lib.bl_no_001();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,0.4);

	this.instance_12 = new lib.bl_no_002();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,0.4);

	this.instance_13 = new lib.bl_no_003();
	this.instance_13.parent = this;
	this.instance_13.setTransform(0,0.4);

	this.instance_14 = new lib.bl_no_004();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,0.4);

	this.instance_15 = new lib.bl_no_005();
	this.instance_15.parent = this;
	this.instance_15.setTransform(0,0.4);

	this.instance_16 = new lib.bl_no_006();
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,0.4);

	this.instance_17 = new lib.bl_no_007();
	this.instance_17.parent = this;
	this.instance_17.setTransform(0,0.4);

	this.instance_18 = new lib.bl_no_008();
	this.instance_18.parent = this;
	this.instance_18.setTransform(0,0.4);

	this.instance_19 = new lib.bl_no_009();
	this.instance_19.parent = this;
	this.instance_19.setTransform(0,0.4);

	this.instance_20 = new lib.bl_no_010();
	this.instance_20.parent = this;
	this.instance_20.setTransform(0,0.4);

	this.instance_21 = new lib.bl_no_011();
	this.instance_21.parent = this;
	this.instance_21.setTransform(0,0.4);

	this.instance_22 = new lib.bl_no_012();
	this.instance_22.parent = this;
	this.instance_22.setTransform(0,0.4);

	this.instance_23 = new lib.bl_no_013();
	this.instance_23.parent = this;
	this.instance_23.setTransform(0,0.4);

	this.instance_24 = new lib.bl_no_014();
	this.instance_24.parent = this;
	this.instance_24.setTransform(0,0.4);

	this.instance_25 = new lib.bl_no_015();
	this.instance_25.parent = this;
	this.instance_25.setTransform(0,0.4);

	this.instance_26 = new lib.bl_no_016();
	this.instance_26.parent = this;
	this.instance_26.setTransform(0,0.4);

	this.instance_27 = new lib.bl_no_017();
	this.instance_27.parent = this;
	this.instance_27.setTransform(0,0.4);

	this.instance_28 = new lib.bl_no_018();
	this.instance_28.parent = this;
	this.instance_28.setTransform(0,0.4);

	this.instance_29 = new lib.bl_no_019();
	this.instance_29.parent = this;
	this.instance_29.setTransform(0,0.4);

	this.instance_30 = new lib.bl_no_030();
	this.instance_30.parent = this;
	this.instance_30.setTransform(0,0.4);

	this.instance_31 = new lib.bl_no_031();
	this.instance_31.parent = this;
	this.instance_31.setTransform(0,0.4);

	this.instance_32 = new lib.bl_no_032();
	this.instance_32.parent = this;
	this.instance_32.setTransform(0,0.4);

	this.instance_33 = new lib.bl_no_033();
	this.instance_33.parent = this;
	this.instance_33.setTransform(0,0.4);

	this.instance_34 = new lib.bl_no_034();
	this.instance_34.parent = this;
	this.instance_34.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.4,640,1136);


(lib.mc_blowjob_blush = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.alpha = 1;
	}
	this.frame_18 = function() {
		var s = createjs.Sound;
		var seNum = 1;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_25 = function() {
		afterFrames = 5
		thisMovieClip = this;
		createjs.Ticker.addEventListener('tick', function(event) {
			afterFrames--;
			if(afterFrames != 0){
				
				if(changeValue == 0){
					createjs.Ticker.framerate = createjs.Ticker.framerate - 1 * (5-afterFrames);
					console.log("fps:" + createjs.Ticker.framerate);
				}
			//停止点
			}else{
				if(changeValue == 0){
					console.log("stop");
					thisMovieClip.stop();
					var rnd = Math.floor(Math.random() * 2) + 1;
					countDown = rnd * 12;
					
		
					createjs.Ticker.addEventListener('tick', function(event) {
						if(countDown != 0){
							countDown--;
						}else{
							thisMovieClip.play();
							event.remove();  
						}
					});
				}
		
				//起点
				changeValue = Math.floor(Math.random() * 11);
				var loopFPS = 20 + changeValue * 1;
				console.log("baseFPS"+loopFPS);
				createjs.Ticker.framerate = loopFPS;
		
				event.remove();
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(7).call(this.frame_25).wait(5));

	// レイヤー_1
	this.instance = new lib.bl_bl_000();
	this.instance.parent = this;

	this.instance_1 = new lib.bl_bl_001();
	this.instance_1.parent = this;

	this.instance_2 = new lib.bl_bl_002();
	this.instance_2.parent = this;

	this.instance_3 = new lib.bl_bl_003();
	this.instance_3.parent = this;

	this.instance_4 = new lib.bl_bl_004();
	this.instance_4.parent = this;

	this.instance_5 = new lib.bl_bl_005();
	this.instance_5.parent = this;

	this.instance_6 = new lib.bl_bl_006();
	this.instance_6.parent = this;

	this.instance_7 = new lib.bl_bl_007();
	this.instance_7.parent = this;

	this.instance_8 = new lib.bl_bl_008();
	this.instance_8.parent = this;

	this.instance_9 = new lib.bl_bl_009();
	this.instance_9.parent = this;

	this.instance_10 = new lib.bl_bl_010();
	this.instance_10.parent = this;

	this.instance_11 = new lib.bl_bl_011();
	this.instance_11.parent = this;

	this.instance_12 = new lib.bl_bl_012();
	this.instance_12.parent = this;

	this.instance_13 = new lib.bl_bl_013();
	this.instance_13.parent = this;

	this.instance_14 = new lib.bl_bl_014();
	this.instance_14.parent = this;

	this.instance_15 = new lib.bl_bl_015();
	this.instance_15.parent = this;

	this.instance_16 = new lib.bl_bl_016();
	this.instance_16.parent = this;

	this.instance_17 = new lib.bl_bl_017();
	this.instance_17.parent = this;

	this.instance_18 = new lib.bl_bl_018();
	this.instance_18.parent = this;

	this.instance_19 = new lib.bl_bl_019();
	this.instance_19.parent = this;

	this.instance_20 = new lib.bl_bl_020();
	this.instance_20.parent = this;

	this.instance_21 = new lib.bl_bl_021();
	this.instance_21.parent = this;

	this.instance_22 = new lib.bl_bl_022();
	this.instance_22.parent = this;

	this.instance_23 = new lib.bl_bl_023();
	this.instance_23.parent = this;

	this.instance_24 = new lib.bl_bl_024();
	this.instance_24.parent = this;

	this.instance_25 = new lib.bl_bl_025();
	this.instance_25.parent = this;

	this.instance_26 = new lib.bl_bl_026();
	this.instance_26.parent = this;

	this.instance_27 = new lib.bl_bl_027();
	this.instance_27.parent = this;

	this.instance_28 = new lib.bl_bl_028();
	this.instance_28.parent = this;

	this.instance_29 = new lib.bl_bl_029();
	this.instance_29.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.videoTimerSet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var startTime = Date.now();
		createjs.Ticker.addEventListener("tick", function (){
		    var lapseTime = Date.now() - startTime;
			this.videoTimer.text = exportRoot.fn_timer(lapseTime);
		}.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// レイヤー_2
	this.instance = new lib.rec();
	this.instance.parent = this;
	this.instance.setTransform(14.4,25.1,1,1,0,0,0,7.4,7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// レイヤー_1
	this.videoTimer = new cjs.Text("00:00:00", "40px 'Helvetica'", "#FFFFFF");
	this.videoTimer.name = "videoTimer";
	this.videoTimer.textAlign = "center";
	this.videoTimer.lineHeight = 48;
	this.videoTimer.lineWidth = 222;
	this.videoTimer.parent = this;
	this.videoTimer.setTransform(113.2,2);

	this.timeline.addTween(cjs.Tween.get(this.videoTimer).wait(1));

}).prototype = getMCSymbolPrototype(lib.videoTimerSet, new cjs.Rectangle(0,0,226.4,49.6), null);


(lib.touch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		exportRoot.gotoAndStop('opening_1');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(5).call(this.frame_15).wait(1));

	// logo
	this.instance = new lib.schoolloveLogo("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(320,568);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10).to({alpha:0,mode:"single"},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(83.7,487,475.1,250.3);


(lib.titoleTxt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_20 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(20).call(this.frame_20).wait(1));

	// レイヤー_1
	this.instance = new lib.moji();
	this.instance.parent = this;
	this.instance.setTransform(215.1,147,1.156,1.156,0,0,0,215,147);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:215},20,cjs.Ease.bounceOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.6,-23,497.3,340);


(lib.systemMessage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.stop();
		var systemText = "「1日1回特別ボーナス♡」が支給されました";
		
		exportRoot.fn_boxingText(this, systemText);
	}
	this.frame_5 = function() {
		this.stop();
		
		this.btn_ok.addEventListener("click", function (){
			var s = createjs.Sound;
			s.play("se_73");
			
			var targetMoney = displayMoney + 10000;
			exportRoot.fn_cashAnime(this, targetMoney);
			realMoney = realMoney + 10000;
			localStorage.setItem("sl12_money", realMoney); //local
			
			this.play();
		}.bind(this));
	}
	this.frame_10 = function() {
		this.stop();
		exportRoot.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5).call(this.frame_10).wait(1));

	// レイヤー_4
	this.btn_ok = new lib.button();
	this.btn_ok.name = "btn_ok";
	this.btn_ok.parent = this;
	this.btn_ok._off = true;
	new cjs.ButtonHelper(this.btn_ok, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_ok).wait(5).to({_off:false},0).to({_off:true},1).wait(5));

	// レイヤー_1
	this.windows = new lib.mc_windows();
	this.windows.name = "windows";
	this.windows.parent = this;
	this.windows.setTransform(320,126.3,0.791,0.791,0,0,0,0,96.5);
	this.windows._off = true;

	this.timeline.addTween(cjs.Tween.get(this.windows).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,y:146.5},4,cjs.Ease.quadOut).to({scaleX:0.79,scaleY:0.79,y:126.3},4).to({_off:true},1).wait(1));

	// レイヤー_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.498)").s().p("Egx/BYwMAAAixfMBj/AAAMAAACxfg");
	this.shape.setTransform(320,568);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.shutterAnime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.btn_shutter.addEventListener("click", function ()
		{
			otherInstance.stop();
			otherInstance = createjs.Sound.play("se_72");
			this.gotoAndPlay("start");
		}.bind(this));
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1).call(this.frame_6).wait(1));

	// button
	this.btn_shutter = new lib.button();
	this.btn_shutter.name = "btn_shutter";
	this.btn_shutter.parent = this;
	this.btn_shutter.setTransform(268.5,1010.6,0.156,0.088,0,0,0,0.7,0);
	new cjs.ButtonHelper(this.btn_shutter, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_shutter).wait(7));

	// shutter
	this.instance = new lib.shutter();
	this.instance.parent = this;
	this.instance.setTransform(320,508,1,1,0,0,0,320,430);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},3).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(268.4,1010.6,100,100);


(lib.scratchButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_3
	this.btn = new lib.button();
	this.btn.name = "btn";
	this.btn.parent = this;
	this.btn.setTransform(1.1,620.3,0.423,0.088,0,0,0,-0.1,3.4);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// レイヤー_1
	this.instance = new lib.scratchBanner();
	this.instance.parent = this;
	this.instance.setTransform(0,617.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.scratchButton, new cjs.Rectangle(0,617.2,272.2,120), null);


(lib.mc_cutinMassage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_85 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(85).call(this.frame_85).wait(1));

	// レイヤー_1
	this.instance = new lib.cutinText();
	this.instance.parent = this;
	this.instance.setTransform(459,70.2,1,1,0,0,0,97,20.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:417,alpha:1},5).wait(70).to({x:375,alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(244.9,50,234.3,41.8);


(lib.mc_cursorAnime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":0});

	// timeline functions:
	this.frame_15 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// レイヤー_2
	this.instance = new lib.mc_heart();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.34,scaleY:1.34,y:0.5,alpha:0},13,cjs.Ease.quartOut).to({_off:true},1).wait(2));

	// レイヤー_2
	this.instance_1 = new lib.mc_heart();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.188,0.188);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({regY:0.1,scaleX:1,scaleY:1,y:0.5,alpha:0},13,cjs.Ease.quartOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8,16,16);


(lib.mc_cashButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btn_5.addEventListener("click", function (e){
		
					//支払い
					realMoney = realMoney - 10000;
					var targetMoney = displayMoney - 10000;
					exportRoot.fn_cashAnime(this, targetMoney);
					localStorage.setItem("sl12_money", realMoney);
				
					sceneNum = 5; //extra
					var mcName = exportRoot.currentLabel;
		
					createjs.Tween.get(exportRoot[mcName])
						.to({alpha:0}, 300)
						.call(function (){
							exportRoot.gotoAndStop(sceneLabel[sceneNum]);
						});
					e.remove();
		
		}.bind(this));
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// button
	this.btn_5 = new lib.button();
	this.btn_5.name = "btn_5";
	this.btn_5.parent = this;
	this.btn_5.setTransform(30.1,30.1,0.125,0.07,0,0,0,0.4,0.7);
	new cjs.ButtonHelper(this.btn_5, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_5).wait(2));

	// icon
	this.instance = new lib.wallet_icon();
	this.instance.parent = this;
	this.instance.setTransform(30,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30,30,80,80);


(lib.handAnime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.hand();
	this.instance.parent = this;
	this.instance.setTransform(175.8,320,1,1,0,0,0,180.5,283);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:176.1},0).wait(1).to({x:176.4,y:319.9},0).wait(1).to({x:176.6,y:319.8},0).wait(1).to({x:176.9,y:319.6},0).wait(1).to({x:177.1,y:319.4},0).wait(1).to({x:177.3,y:319.2},0).wait(1).to({x:177.4,y:318.9},0).wait(1).to({x:177.5,y:318.6},0).wait(1).to({x:177.6,y:318.4},0).wait(1).to({x:177.7,y:318.1},0).wait(1).to({x:177.8,y:317.8},0).wait(1).to({x:177.9,y:317.5},0).wait(1).to({y:317.2},0).wait(1).to({x:178,y:316.9},0).wait(1).to({y:316.7},0).wait(1).to({y:316.4},0).wait(1).to({y:316.1},0).wait(1).to({y:315.8},0).wait(1).to({y:315.5},0).wait(1).to({y:315.2},0).wait(1).to({y:314.9},0).wait(1).to({x:177.9,y:314.6},0).wait(1).to({y:314.3},0).wait(1).to({y:314},0).wait(1).to({x:177.8,y:313.7},0).wait(1).to({x:177.7,y:313.5},0).wait(1).to({y:313.2},0).wait(1).to({x:177.6,y:312.9},0).wait(1).to({x:177.5,y:312.6},0).wait(1).to({x:177.4,y:312.3},0).wait(1).to({x:177.3,y:312.1},0).wait(1).to({x:177.2,y:311.8},0).wait(1).to({x:177.1,y:311.5},0).wait(1).to({x:177,y:311.3},0).wait(1).to({x:176.8,y:311},0).wait(1).to({x:176.7,y:310.7},0).wait(1).to({x:176.5,y:310.5},0).wait(1).to({x:176.3,y:310.3},0).wait(1).to({x:176.2,y:310},0).wait(1).to({x:176,y:309.8},0).wait(1).to({x:175.8,y:309.6},0).wait(1).to({x:175.5,y:309.4},0).wait(1).to({x:175.3,y:309.2},0).wait(1).to({x:175.1,y:309.1},0).wait(1).to({x:174.8,y:309},0).wait(1).to({x:174.5,y:308.8},0).wait(1).to({x:174.2},0).wait(1).to({x:174,y:308.7},0).wait(1).to({x:173.7},0).wait(1).to({x:173.4,y:308.6},0).wait(1).to({x:173.1,y:308.7},0).wait(1).to({x:172.7},0).wait(1).to({x:172.4},0).wait(1).to({x:172.1,y:308.8},0).wait(1).to({x:171.8,y:308.9},0).wait(1).to({x:171.5,y:309.1},0).wait(1).to({x:171.3,y:309.3},0).wait(1).to({x:171,y:309.5},0).wait(1).to({x:170.8,y:309.7},0).wait(1).to({x:170.6,y:310},0).wait(1).to({x:170.5,y:310.3},0).wait(1).to({x:170.3,y:310.6},0).wait(1).to({x:170.2,y:310.9},0).wait(1).to({y:311.2},0).wait(1).to({x:170.1,y:311.5},0).wait(1).to({y:311.8},0).wait(1).to({y:312.1},0).wait(1).to({y:312.5},0).wait(1).to({y:312.8},0).wait(1).to({y:313.1},0).wait(1).to({x:170.2,y:313.4},0).wait(1).to({y:313.7},0).wait(1).to({x:170.3,y:314},0).wait(1).to({x:170.4,y:314.4},0).wait(1).to({x:170.5,y:314.7},0).wait(1).to({x:170.6,y:315},0).wait(1).to({x:170.7,y:315.3},0).wait(1).to({x:170.8,y:315.6},0).wait(1).to({x:171,y:315.9},0).wait(1).to({x:171.1,y:316.1},0).wait(1).to({x:171.2,y:316.4},0).wait(1).to({x:171.4,y:316.7},0).wait(1).to({x:171.6,y:317},0).wait(1).to({x:171.7,y:317.3},0).wait(1).to({x:171.9,y:317.5},0).wait(1).to({x:172.1,y:317.8},0).wait(1).to({x:172.3,y:318},0).wait(1).to({x:172.5,y:318.3},0).wait(1).to({x:172.7,y:318.5},0).wait(1).to({x:173,y:318.7},0).wait(1).to({x:173.2,y:318.9},0).wait(1).to({x:173.5,y:319.1},0).wait(1).to({x:173.7,y:319.3},0).wait(1).to({x:174,y:319.5},0).wait(1).to({x:174.3,y:319.6},0).wait(1).to({x:174.6,y:319.8},0).wait(1).to({x:174.9,y:319.9},0).wait(1).to({x:175.2},0).wait(1).to({x:175.5,y:320},0).wait(1).to({x:175.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,37,361,566);


(lib.body_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_60 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(1));

	// head
	this.instance = new lib.head();
	this.instance.parent = this;
	this.instance.setTransform(326.8,166,1.015,1.015,1.4,0,0,336.9,542.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:336.8,regY:542.1,scaleX:1.03,scaleY:1.03,rotation:2.7,x:326.7,y:158.3},40).to({regX:336.9,regY:542.2,scaleX:1.01,scaleY:1.01,rotation:1.4,x:326.8,y:166},20).wait(1));

	// body
	this.instance_1 = new lib.body();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.7,-392.7,700.4,891.7);


(lib.mc_wet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		exportRoot.fn_fadeIn(this);
	}
	this.frame_1 = function() {
		this.stop();
		var textNum = 0;
		exportRoot.fn_boxingText(this,scenarioText[sceneNum][textNum]);
		this.windows.alpha = 1;
		
		
		this.button_1.addEventListener("click", fn_windowClick.bind(this));
		
		function fn_windowClick(e)
		{
			seInstance.stop();
			seInstance = createjs.Sound.play("se_70");
			textNum++;
			if(scenarioText[sceneNum][textNum] != "*"){ 
				exportRoot.fn_boxingText(this,scenarioText[sceneNum][textNum]);
			}else{
				this.windows.alpha = 0;
				this.play();
				e.remove();
			}
		}
	}
	this.frame_2 = function() {
		exportRoot.fn_fadeOut(this);
	}
	this.frame_3 = function() {
		var label = sceneLabel[sceneNum] + "_" + cutNum;
		exportRoot.fn_delayedJump(this, label);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// button
	this.button_1 = new lib.button();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(-320,-568);
	this.button_1._off = true;
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// window
	this.windows = new lib.mc_windows();
	this.windows.name = "windows";
	this.windows.parent = this;
	this.windows.setTransform(316,371.5,1,1,0,0,0,316,96.5);
	this.windows.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.windows).to({_off:true},2).wait(2));

	// レイヤー_1
	this.bgi = new lib.wetBGI();
	this.bgi.name = "bgi";
	this.bgi.parent = this;
	this.bgi.setTransform(0,0,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.bgi).to({_off:true},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-568,640,1136);


(lib.mc_sweaty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		exportRoot.fn_fadeIn(this);
	}
	this.frame_1 = function() {
		this.stop();
		var textNum = 0;
		exportRoot.fn_boxingText(this,scenarioText[sceneNum][textNum]);
		this.windows.alpha = 1;
		
		
		this.button_1.addEventListener("click", fn_windowClick.bind(this));
		
		function fn_windowClick(e)
		{
			seInstance.stop();
			seInstance = createjs.Sound.play("se_70");
			textNum++;
			if(scenarioText[sceneNum][textNum] != "*"){ 
				exportRoot.fn_boxingText(this,scenarioText[sceneNum][textNum]);
			}else{
				this.windows.alpha = 0;
				this.play();
				e.remove();
			}
		}
	}
	this.frame_2 = function() {
		exportRoot.fn_fadeOut(this);
	}
	this.frame_3 = function() {
		var label = sceneLabel[sceneNum] + "_" + cutNum;
		exportRoot.fn_delayedJump(this, label);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// button
	this.button_1 = new lib.button();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(-320,-568);
	this.button_1._off = true;
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// window
	this.windows = new lib.mc_windows();
	this.windows.name = "windows";
	this.windows.parent = this;
	this.windows.setTransform(316,371.5,1,1,0,0,0,316,96.5);
	this.windows.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.windows).to({_off:true},2).wait(2));

	// レイヤー_1
	this.bgi = new lib.sweatyBGI();
	this.bgi.name = "bgi";
	this.bgi.parent = this;
	this.bgi.setTransform(0,0,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.bgi).to({_off:true},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-568,640,1136);


(lib.mc_opening = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{skip:6});

	// timeline functions:
	this.frame_0 = function() {
		exportRoot.fn_fadeIn(this);
		
		/*
		this.stop();
		this.alpha = 0;
		createjs.Tween.get(this)
			.to({alpha:1}, 200)
			.call(fadeInEnd);
		
		function fadeInEnd(){
			this.play();
		}
		*/
	}
	this.frame_1 = function() {
		this.stop();
		
		
		var textNum = 0;
		exportRoot.fn_boxingText(this,scenarioText[sceneNum][textNum]);
		this.windows.alpha = 1;
		
		
		this.button_1.addEventListener("click", fn_windowClick.bind(this));
		
		function fn_windowClick(e)
		{
			console.log("click");
			seInstance.stop();
			seInstance = createjs.Sound.play("se_70");
			textNum++;
			if(scenarioText[sceneNum][textNum] != "*"){ 
				exportRoot.fn_boxingText(this,scenarioText[sceneNum][textNum]);
			}else{
				this.windows.alpha = 0;
				this.play();
				e.remove();
			}
		}
	}
	this.frame_2 = function() {
		exportRoot.fn_fadeOut(this);
		
		//bgm
		bgmInstance.stop();
	}
	this.frame_3 = function() {
		var textNum = 9;
		exportRoot.fn_boxingText(this,scenarioText[sceneNum][textNum]);
		
		exportRoot.fn_fadeIn(this);
		
		bgmInstance.stop();
	}
	this.frame_4 = function() {
		this.stop();
		var textNum = 9;
		this.windows.alpha = 1;
		
		
		this.button_1.addEventListener("click", fn_windowClick.bind(this));
		
		function fn_windowClick(e)
		{
			seInstance.stop();
			seInstance = createjs.Sound.play("se_70");
			textNum++;
			if(scenarioText[sceneNum][textNum] != "*"){ 
				exportRoot.fn_boxingText(this,scenarioText[sceneNum][textNum]);
			}else{
				this.windows.alpha = 0;
				this.play();
				e.remove();
			}
		}
	}
	this.frame_5 = function() {
		exportRoot.fn_fadeOut(this);
	}
	this.frame_6 = function() {
		sceneNum = 1;
		exportRoot.fn_delayedJump(this, sceneLabel[sceneNum]);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1));

	// button
	this.button_1 = new lib.button();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(-320,-567);
	this.button_1._off = true;
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

	// window
	this.windows = new lib.mc_windows();
	this.windows.name = "windows";
	this.windows.parent = this;
	this.windows.setTransform(316,371.5,1,1,0,0,0,316,96.5);
	this.windows.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.windows).to({_off:true},2).wait(1).to({_off:false},0).to({_off:true},2).wait(2));

	// bg
	this.bgi = new lib.mc_openingBG();
	this.bgi.name = "bgi";
	this.bgi.parent = this;
	this.bgi.setTransform(0,0,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.bgi).to({_off:true},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-568,640,1136);


(lib.mc_normal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		exportRoot.fn_fadeIn(this);
	}
	this.frame_1 = function() {
		this.stop();
		var textNum = 0;
		exportRoot.fn_boxingText(this,scenarioText[sceneNum][textNum]);
		this.windows.alpha = 1;
		
		
		this.button_1.addEventListener("click", fn_windowClick.bind(this));
		
		function fn_windowClick(e)
		{
			var s = createjs.Sound;
			seInstance.stop();
			seInstance = createjs.Sound.play("se_70");
			textNum++;
			if(scenarioText[sceneNum][textNum] != "*"){ 
				exportRoot.fn_boxingText(this,scenarioText[sceneNum][textNum]);
			}else{
				this.windows.alpha = 0;
				this.play();
				e.remove();
			}
		}
	}
	this.frame_2 = function() {
		exportRoot.fn_fadeOut(this);
	}
	this.frame_3 = function() {
		cutNum = 1;
		var label = sceneLabel[sceneNum] + "_" + cutNum
		exportRoot.fn_delayedJump(this, label);
		/*
		this.stop();
		
		createjs.Tween.get(this)
			.to({alpha:0}, 200)
			.call(fadeOutEnd);
		
		function fadeOutEnd(){
			exportRoot.gotoAndStop(sceneLabel[sceneNum] + "_" + cutNum);
		}
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// button
	this.button_1 = new lib.button();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(-320,-568);
	this.button_1._off = true;
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// window
	this.windows = new lib.mc_windows();
	this.windows.name = "windows";
	this.windows.parent = this;
	this.windows.setTransform(316,371.5,1,1,0,0,0,316,96.5);
	this.windows.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.windows).to({_off:true},2).wait(2));

	// レイヤー_1
	this.bgi = new lib.normalBGI();
	this.bgi.name = "bgi";
	this.bgi.parent = this;
	this.bgi.setTransform(0,0,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.bgi).to({_off:true},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-568,640,1136);


(lib.mc_extra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		exportRoot.fn_fadeIn(this);
	}
	this.frame_1 = function() {
		this.stop();
		var textNum = 0;
		exportRoot.fn_boxingText(this,scenarioText[sceneNum][textNum]);
		this.windows.alpha = 1;
		
		
		this.button_1.addEventListener("click", fn_windowClick.bind(this));
		
		function fn_windowClick(e)
		{
			seInstance.stop();
			seInstance = createjs.Sound.play("se_70");
			textNum++;
			if(scenarioText[sceneNum][textNum] != "*"){ 
				exportRoot.fn_boxingText(this,scenarioText[sceneNum][textNum]);
			}else{
				this.windows.alpha = 0;
				this.play();
				e.remove();
			}
		}
	}
	this.frame_2 = function() {
		exportRoot.fn_fadeOut(this);
	}
	this.frame_3 = function() {
		var label = sceneLabel[sceneNum] + "_" + cutNum;
		exportRoot.fn_delayedJump(this, label);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// button
	this.button_1 = new lib.button();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(-320,-568);
	this.button_1._off = true;
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// window
	this.windows = new lib.mc_windows();
	this.windows.name = "windows";
	this.windows.parent = this;
	this.windows.setTransform(316,371.5,1,1,0,0,0,316,96.5);
	this.windows.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.windows).to({_off:true},2).wait(2));

	// レイヤー_1
	this.bgi = new lib.extraBGI();
	this.bgi.name = "bgi";
	this.bgi.parent = this;
	this.bgi.setTransform(0,0,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.bgi).to({_off:true},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-568,640,1136);


(lib.mc_ending = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		exportRoot.fn_fadeIn(this);
		sceneNum = 6;
	}
	this.frame_1 = function() {
		this.stop();
		var textNum = 0;
		exportRoot.fn_boxingText(this,scenarioText[sceneNum][textNum]);
		this.windows.alpha = 1;
		
		
		this.button_1.addEventListener("click", fn_windowClick.bind(this));
		
		function fn_windowClick(e)
		{
			seInstance.stop();
			seInstance = createjs.Sound.play("se_70");
			textNum++;
			if(scenarioText[sceneNum][textNum] != "*"){ 
				exportRoot.fn_boxingText(this,scenarioText[sceneNum][textNum]);
			}else{
				this.windows.alpha = 0;
				this.play();
				e.remove();
			}
		}
	}
	this.frame_2 = function() {
		exportRoot.fn_fadeOut(this);
	}
	this.frame_3 = function() {
		sceneNum = 0;
		cutNum = 1;
		exportRoot.gotoAndStop("gameover");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// button
	this.button_1 = new lib.button();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(-316,-568);
	this.button_1._off = true;
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// window
	this.windows = new lib.mc_windows();
	this.windows.name = "windows";
	this.windows.parent = this;
	this.windows.setTransform(316,371.5,1,1,0,0,0,316,96.5);
	this.windows.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.windows).to({_off:true},2).wait(2));

	// レイヤー_1
	this.bgi = new lib.endingBGI();
	this.bgi.name = "bgi";
	this.bgi.parent = this;
	this.bgi.setTransform(4,0,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.bgi).to({_off:true},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-316,-568,640,1136);


(lib.mc_blush = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		exportRoot.fn_fadeIn(this);
	}
	this.frame_1 = function() {
		this.stop();
		var textNum = 0;
		exportRoot.fn_boxingText(this,scenarioText[sceneNum][textNum]);
		this.windows.alpha = 1;
		
		
		this.button_1.addEventListener("click", fn_windowClick.bind(this));
		
		function fn_windowClick(e)
		{
			seInstance.stop();
			seInstance = createjs.Sound.play("se_70");
			textNum++;
			if(scenarioText[sceneNum][textNum] != "*"){ 
				exportRoot.fn_boxingText(this,scenarioText[sceneNum][textNum]);
			}else{
				this.windows.alpha = 0;
				this.play();
				e.remove();
			}
		}
	}
	this.frame_2 = function() {
		exportRoot.fn_fadeOut(this);
	}
	this.frame_3 = function() {
		var label = sceneLabel[sceneNum] + "_" + cutNum;
		exportRoot.fn_delayedJump(this, label);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// button
	this.button_1 = new lib.button();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(-320,-568);
	this.button_1._off = true;
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// window
	this.windows = new lib.mc_windows();
	this.windows.name = "windows";
	this.windows.parent = this;
	this.windows.setTransform(316,371.5,1,1,0,0,0,316,96.5);
	this.windows.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.windows).to({_off:true},2).wait(2));

	// graphic
	this.bgi = new lib.blushBGI();
	this.bgi.name = "bgi";
	this.bgi.parent = this;
	this.bgi.setTransform(0,0,1,1,0,0,0,320,568);

	this.timeline.addTween(cjs.Tween.get(this.bgi).to({_off:true},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320,-568,640,1136);


(lib.win5Anime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{open:151});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.btn.addEventListener("click", function (e)
		{
			if(firstFlag){
				firstFlag = false;
				this.play();
				e.remove ();
			}
		}.bind(this));
	}
	this.frame_71 = function() {
		createjs.Sound.play("se_76");
		
		//金額アップアニメ
		var targetMoney = displayMoney + 50000;
		exportRoot.fn_cashAnime(this, targetMoney);
		realMoney = realMoney + 50000;
		localStorage.setItem("sl12_money", realMoney); //local
		//
		
		//ヒット回数記録
		scratchHits++;
		localStorage.setItem("sl12_scratchHits", scratchHits);
		
		//回数記録
		scratchTimes++;
		localStorage.setItem("sl12_scratchTimes", scratchTimes);
	}
	this.frame_150 = function() {
		this.parent.win1Anime.gotoAndStop("open");
		this.parent.loseAnime.gotoAndStop("open");
	}
	this.frame_179 = function() {
		this.stop();
		exportRoot.luckeyScratch.play();
		//exportRoot.removeChild(exportRoot.luckeyScratch);
		//bgmInstance.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(71).call(this.frame_71).wait(79).call(this.frame_150).wait(29).call(this.frame_179).wait(1));

	// button
	this.btn = new lib.button();
	this.btn.name = "btn";
	this.btn.parent = this;
	this.btn.setTransform(-0.1,-0.1,0.187,0.106,0,0,0,-0.6,-1);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(180));

	// レイヤー_1
	this.instance = new lib.scratch_1();
	this.instance.parent = this;
	this.instance.setTransform(60,60,1,1,0,0,0,60,60);

	this.instance_1 = new lib.flipAnime();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60,30,1,1,0,0,0,60,60);

	this.instance_2 = new lib.win5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(60,30,1,1,0,0,0,60,60);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},50).to({state:[{t:this.instance_2}]},30).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({y:30},4,cjs.Ease.quadOut).to({_off:true},1).wait(170));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({_off:false},0).to({y:60},30,cjs.Ease.bounceOut).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.win1Anime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"open":136});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.btn.addEventListener("click", function (e)
		{
			if(firstFlag){
				firstFlag = false;
				this.play();
				e.remove ();
			}
		}.bind(this));
	}
	this.frame_66 = function() {
		createjs.Sound.play("se_76");
		
		//金額アップアニメ
		var targetMoney = displayMoney + 10000;
		exportRoot.fn_cashAnime(this, targetMoney);
		realMoney = realMoney + 10000;
		localStorage.setItem("sl12_money", realMoney); //local
		//
		
		
		//回数記録
		scratchTimes++;
		localStorage.setItem("sl12_scratchTimes", scratchTimes);
	}
	this.frame_135 = function() {
		this.parent.win5Anime.gotoAndStop("open");
		this.parent.loseAnime.gotoAndStop("open");
	}
	this.frame_164 = function() {
		this.stop();
		exportRoot.luckeyScratch.play();
		//exportRoot.removeChild(exportRoot.luckeyScratch);
		//bgmInstance.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(66).call(this.frame_66).wait(69).call(this.frame_135).wait(29).call(this.frame_164).wait(1));

	// button
	this.btn = new lib.button();
	this.btn.name = "btn";
	this.btn.parent = this;
	this.btn.setTransform(-0.1,-0.1,0.187,0.106,0,0,0,-0.6,-1);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(165));

	// レイヤー_1
	this.instance = new lib.scratch_1();
	this.instance.parent = this;
	this.instance.setTransform(60,60,1,1,0,0,0,60,60);

	this.instance_1 = new lib.flipAnime();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60,30,1,1,0,0,0,60,60);

	this.instance_2 = new lib.win1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(60,30,1,1,0,0,0,60,60);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},50).to({state:[{t:this.instance_2}]},15).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({y:30},4,cjs.Ease.quadOut).to({_off:true},1).wait(155));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60).to({_off:false},0).to({y:60},15,cjs.Ease.bounceOut).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.luckeyScratch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		firstFlag = true;
		
		//ランダムソート
		function fn_lottery(rdm){
			var obj = [];
			for (var i = 0, l = rdm.length; i < l; i++){
				var rndNum = Math.floor(Math.random()*(l-i));
				obj.push(rdm[rndNum]);
				rdm.splice(rndNum, 1);
			}
			return obj;
		}
		
		var result = fn_lottery([ 103, 260.5, 418 ]);
		
		//戦績読み込み
		var t = localStorage.getItem("sl12_scratchResult");
		if (t == null) t = "";
		this.resultDisplay.text = t;
		
		scratchTimes = Number(localStorage.getItem("sl12_scratchTimes"));
		if (scratchTimes == null) scratchTimes = 0;
		
		scratchHits = Number(localStorage.getItem("sl12_scratchHits"));
		if (scratchHits == null) scratchHits = 0;
		
		//勝率
		var a = Math.round((scratchHits / scratchTimes * 100)*100)/100;
		if (isNaN(a)) a = 0;
		this.rateDisplay.text = a;
		
		//過去データ追加
		var txt = this.resultDisplay.text;
		console.log(result[1]);
		switch (result[1]){
		  case 103:
		    txt = "左" + txt;
		    break;
		  case 260.5:
		    txt = "中" + txt;
		    break;
		  case 418:
		    txt = "右" + txt;
		    break;
		}
		txt = txt.substr(0,10);
		localStorage.setItem("sl12_scratchResult", txt);
		
		//配置
		this.card.win1Anime = new lib.win1Anime();
		this.card.addChild(this.card.win1Anime);
		this.card.win1Anime.setTransform(result[0],562);
		
		this.card.win5Anime = new lib.win5Anime();
		this.card.addChild(this.card.win5Anime);
		this.card.win5Anime.setTransform(result[1],562);
		
		this.card.loseAnime = new lib.loseAnime();
		this.card.addChild(this.card.loseAnime);
		this.card.loseAnime.setTransform(result[2],562);
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		var checkDate = new Date();
		var today = String(checkDate.getFullYear()) + String(checkDate.getMonth()) + String(checkDate.getDate());
		localStorage.setItem("sl12_scratched", today); //local
		
		bgmInstance.stop();
		firstFlag = true;
		exportRoot.gotoAndStop("opening_1");
		exportRoot.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(10).call(this.frame_19).wait(1));

	// レイヤー_4
	this.text = new cjs.Text("％", "17px 'Helvetica'", "#FFFFFF");
	this.text.lineHeight = 21;
	this.text.lineWidth = 17;
	this.text.parent = this;
	this.text.setTransform(540,372);

	this.text_1 = new cjs.Text("大当り的中率", "17px 'Helvetica'", "#FFFFFF");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 21;
	this.text_1.lineWidth = 116;
	this.text_1.parent = this;
	this.text_1.setTransform(558,340);

	this.rateDisplay = new cjs.Text("100.00", "17px 'Helvetica'", "#FFFFFF");
	this.rateDisplay.name = "rateDisplay";
	this.rateDisplay.textAlign = "right";
	this.rateDisplay.lineHeight = 21;
	this.rateDisplay.lineWidth = 58;
	this.rateDisplay.parent = this;
	this.rateDisplay.setTransform(538,372);

	this.text_2 = new cjs.Text("Newest", "17px 'Helvetica'", "#FFFFFF");
	this.text_2.lineHeight = 21;
	this.text_2.lineWidth = 59;
	this.text_2.parent = this;
	this.text_2.setTransform(80.1,372);

	this.resultDisplay = new cjs.Text("", "17px 'Helvetica'", "#FFFFFF");
	this.resultDisplay.name = "resultDisplay";
	this.resultDisplay.lineHeight = 21;
	this.resultDisplay.lineWidth = 330;
	this.resultDisplay.parent = this;
	this.resultDisplay.setTransform(146.1,372);

	this.text_3 = new cjs.Text("過去の大当たり位置", "17px 'Helvetica'", "#FFFFFF");
	this.text_3.lineHeight = 21;
	this.text_3.lineWidth = 160;
	this.text_3.parent = this;
	this.text_3.setTransform(81.1,340);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_3},{t:this.resultDisplay},{t:this.text_2},{t:this.rateDisplay},{t:this.text_1},{t:this.text}]},9).to({state:[]},1).wait(10));

	// card
	this.card = new lib.card();
	this.card.name = "card";
	this.card.parent = this;
	this.card.setTransform(880,160,1,1,0,0,0,240,160);

	this.timeline.addTween(cjs.Tween.get(this.card).to({x:240},9,cjs.Ease.elasticOut).to({x:-240},10,cjs.Ease.cubicIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(720,408,480,320);


(lib.loseAnime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"open":90});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.btn.addEventListener("click", function (e){
			if(firstFlag){
				firstFlag = false;
				this.play();
				e.remove ();
			}
		}.bind(this));
	}
	this.frame_24 = function() {
		createjs.Sound.play("se_77");
		
		//金額アップアニメ
		var targetMoney = displayMoney + 500;
		exportRoot.fn_cashAnime(this, targetMoney);
		realMoney = realMoney + 500;
		localStorage.setItem("sl12_money", realMoney); //local
		//
		
		
		//回数記録
		scratchTimes++;
		localStorage.setItem("sl12_scratchTimes", scratchTimes);
	}
	this.frame_89 = function() {
		this.parent.win1Anime.gotoAndStop("open");
		this.parent.win5Anime.gotoAndStop("open");
	}
	this.frame_119 = function() {
		this.stop();
		exportRoot.luckeyScratch.play();
		//exportRoot.removeChild(exportRoot.luckeyScratch);
		//bgmInstance.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(24).call(this.frame_24).wait(65).call(this.frame_89).wait(30).call(this.frame_119).wait(1));

	// button
	this.btn = new lib.button();
	this.btn.name = "btn";
	this.btn.parent = this;
	this.btn.setTransform(-0.1,-0.1,0.187,0.106,0,0,0,-0.6,-1);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(120));

	// レイヤー_1
	this.instance = new lib.scratch_1();
	this.instance.parent = this;
	this.instance.setTransform(60,60,1,1,0,0,0,60,60);

	this.instance_1 = new lib.flipAnime();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60,40,1,1,0,0,0,60,60);

	this.instance_2 = new lib.lose_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(60,40,1,1,0,0,0,60,60);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_2}]},10).wait(90));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({y:40},4,cjs.Ease.quadOut).to({_off:true},1).wait(110));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({y:60},10,cjs.Ease.bounceOut).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.mc_lick_sweaty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop_0":0,"loop_1":30,anime_1:50,"loop_2":55,loop_3:60,loop_4:65,anime_2:100,loop_6:160});

	// timeline functions:
	this.frame_0 = function() {
		this.alpha = 1;
		exportRoot.fn_changeFPS(10);
	}
	this.frame_13 = function() {
		var s = createjs.Sound;
		var seNum = 2;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_20 = function() {
		if(clickFlag){
			this.gotoAndPlay("anime_1");
		}else{
			var jumpTo = "loop_0";
			var rndTotalNum = 8;
			exportRoot.fn_randomLoop(this, jumpTo, rndTotalNum);
		}
	}
	this.frame_30 = function() {
		exportRoot.fn_changeFPS(10);
	}
	this.frame_40 = function() {
		var jumpTo = "loop_1";
		var rndTotalNum = 8;
		exportRoot.fn_randomLoop(this, jumpTo, rndTotalNum);
	}
	this.frame_50 = function() {
		clickFlag
			? clickFlag = false
			: this.gotoAndPlay("loop_0");
	}
	this.frame_55 = function() {
		exportRoot.fn_changeFPS(10);
	}
	this.frame_57 = function() {
		var s = createjs.Sound;
		var seNum = 2;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_59 = function() {
		checkFlag = true;
	}
	this.frame_60 = function() {
		if(checkFlag){
			//checkFlag = false;
			if(clickFlag){
				//clickFlag = false;
				this.gotoAndPlay("anime_2");
			}else{
				checkFlag = false;
				var jumpTo = "loop_2";
				var rndTotalNum = 24;
		
				var rnd = Math.floor(Math.random() * rndTotalNum);
				if(rnd != 0){
					this.gotoAndPlay(jumpTo);
				}else{
					this.gotoAndPlay("loop_4");
				}
			}
		}else{
			exportRoot.fn_changeFPS(10);
		}
	}
	this.frame_62 = function() {
		var s = createjs.Sound;
		var seNum = 2;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_64 = function() {
		checkFlag = true;
	}
	this.frame_65 = function() {
		if(checkFlag){
			//checkFlag = false;
			if(clickFlag){
				//clickFlag = false;
				this.gotoAndPlay("anime_2");
			}else{
				checkFlag = false;
				var jumpTo = "loop_3";
				var rndTotalNum = 24;
				exportRoot.fn_randomLoop(this, jumpTo, rndTotalNum);
			}
		}
	}
	this.frame_99 = function() {
		checkFlag = true;
	}
	this.frame_100 = function() {
		/*
		clickFlag
			? clickFlag = false
			: this.gotoAndPlay("loop_2");
		*/
		if(checkFlag){
			checkFlag = false;
			if(clickFlag){
				exportRoot.fn_changeFPS();
				createjs.Tween.get(this)
				.to({scaleX: 1.3, scaleY: 1.3}, 500, createjs.Ease.cubicOut)
			}else{
				var rnd = Math.floor(Math.random() * 2);
				if(rnd != 0){
					this.gotoAndPlay("loop_2");
				}else{
					this.gotoAndPlay("loop_3");
				}
			}
		}
		if(clickFlag){
			clickFlag = false;
			var s = createjs.Sound;
			var seNum = 0;
			var rnd = Math.floor(Math.random() * seArr[seNum]);
			console.log("se:"+rnd);
			s.play("se_" + seNum + rnd);
		}
	}
	this.frame_116 = function() {
		var s = createjs.Sound;
		var seNum = 0;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_130 = function() {
		var s = createjs.Sound;
		var seNum = 0;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_145 = function() {
		var s = createjs.Sound;
		var seNum = 0;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_159 = function() {
		if(firstFlag){
			this.stop();
			firstFlag = false;
			clickFlag = true;
			createjs.Ticker.framerate = 5;
			createjs.Tween.get(this)
				.wait(2000)
				.set({scaleX: 1, scaleY: 1})
				.call(function (){
					this.gotoAndPlay("anime_2");
				});
		}else{
			firstFlag = true;
			createjs.Ticker.framerate = 20;
		}
	}
	this.frame_160 = function() {
		//exportRoot.fn_changeFPS(10);
		createjs.Ticker.framerate = 16;
	}
	this.frame_177 = function() {
		var s = createjs.Sound;
		var sceneNum = 3;
		var rnd = Math.floor(Math.random() * cvArr[sceneNum]);
		console.log("cv:" + sceneNum + rnd);
		s.play("cv_" + sceneNum + rnd);
	}
	this.frame_180 = function() {
		if(clickFlag){
			clickFlag = false
			if(firstFlag){
				firstFlag = false;
				createjs.Tween.get(this, {override:true})
					.to({alpha:0}, 1000)
					.call(function (){
						firstFlag = true;
						this.alpha = 1;
						exportRoot.gotoAndStop("ending");
					});
			}
			this.gotoAndPlay("loop_6");
		}else{
			this.gotoAndPlay("loop_6");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(7).call(this.frame_20).wait(10).call(this.frame_30).wait(10).call(this.frame_40).wait(10).call(this.frame_50).wait(5).call(this.frame_55).wait(2).call(this.frame_57).wait(2).call(this.frame_59).wait(1).call(this.frame_60).wait(2).call(this.frame_62).wait(2).call(this.frame_64).wait(1).call(this.frame_65).wait(34).call(this.frame_99).wait(1).call(this.frame_100).wait(16).call(this.frame_116).wait(14).call(this.frame_130).wait(15).call(this.frame_145).wait(14).call(this.frame_159).wait(1).call(this.frame_160).wait(17).call(this.frame_177).wait(3).call(this.frame_180).wait(1));

	// レイヤー_2
	this.instance = new lib.mc_cutinMassage();
	this.instance.parent = this;
	this.instance.setTransform(97,20.2,1,1,0,0,0,97,20.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55).to({_off:false},0).to({_off:true},45).wait(81));

	// fx
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("Egx/BYwMAAAixfMBj/AAAMAAACxfg");
	this.shape.setTransform(320,568);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("Egx/BYwMAAAixfMBj/AAAMAAACxfg");
	this.shape_1.setTransform(320.1,568.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},100).to({state:[]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).to({state:[]},75).wait(1));

	// anime
	this.instance_1 = new lib.li_sw_000();
	this.instance_1.parent = this;

	this.instance_2 = new lib.li_sw_001();
	this.instance_2.parent = this;

	this.instance_3 = new lib.li_sw_002();
	this.instance_3.parent = this;

	this.instance_4 = new lib.li_sw_003();
	this.instance_4.parent = this;

	this.instance_5 = new lib.li_sw_004();
	this.instance_5.parent = this;

	this.instance_6 = new lib.li_sw_005();
	this.instance_6.parent = this;

	this.instance_7 = new lib.li_sw_006();
	this.instance_7.parent = this;

	this.instance_8 = new lib.li_sw_007();
	this.instance_8.parent = this;

	this.instance_9 = new lib.li_sw_008();
	this.instance_9.parent = this;

	this.instance_10 = new lib.li_sw_009();
	this.instance_10.parent = this;

	this.instance_11 = new lib.li_sw_010();
	this.instance_11.parent = this;

	this.instance_12 = new lib.li_sw_011();
	this.instance_12.parent = this;

	this.instance_13 = new lib.li_sw_012();
	this.instance_13.parent = this;

	this.instance_14 = new lib.li_sw_013();
	this.instance_14.parent = this;

	this.instance_15 = new lib.li_sw_014();
	this.instance_15.parent = this;

	this.instance_16 = new lib.li_sw_015();
	this.instance_16.parent = this;

	this.instance_17 = new lib.li_sw_016();
	this.instance_17.parent = this;

	this.instance_18 = new lib.li_sw_017();
	this.instance_18.parent = this;

	this.instance_19 = new lib.li_sw_018();
	this.instance_19.parent = this;

	this.instance_20 = new lib.li_sw_019();
	this.instance_20.parent = this;

	this.instance_21 = new lib.li_sw_020();
	this.instance_21.parent = this;

	this.instance_22 = new lib.li_sw_021();
	this.instance_22.parent = this;

	this.instance_23 = new lib.li_sw_022();
	this.instance_23.parent = this;

	this.instance_24 = new lib.li_sw_023();
	this.instance_24.parent = this;

	this.instance_25 = new lib.li_sw_024();
	this.instance_25.parent = this;

	this.instance_26 = new lib.li_sw_025();
	this.instance_26.parent = this;

	this.instance_27 = new lib.li_sw_026();
	this.instance_27.parent = this;

	this.instance_28 = new lib.li_sw_027();
	this.instance_28.parent = this;

	this.instance_29 = new lib.li_sw_028();
	this.instance_29.parent = this;

	this.instance_30 = new lib.li_sw_029();
	this.instance_30.parent = this;

	this.instance_31 = new lib.li_sw_030();
	this.instance_31.parent = this;

	this.instance_32 = new lib.li_sw_031();
	this.instance_32.parent = this;

	this.instance_33 = new lib.li_sw_032();
	this.instance_33.parent = this;

	this.instance_34 = new lib.li_sw_033();
	this.instance_34.parent = this;

	this.instance_35 = new lib.li_sw_034();
	this.instance_35.parent = this;

	this.instance_36 = new lib.li_sw_035();
	this.instance_36.parent = this;

	this.instance_37 = new lib.li_sw_036();
	this.instance_37.parent = this;

	this.instance_38 = new lib.li_sw_037();
	this.instance_38.parent = this;

	this.instance_39 = new lib.li_sw_038();
	this.instance_39.parent = this;

	this.instance_40 = new lib.li_sw_039();
	this.instance_40.parent = this;

	this.instance_41 = new lib.li_sw_040();
	this.instance_41.parent = this;

	this.instance_42 = new lib.li_sw_041();
	this.instance_42.parent = this;

	this.instance_43 = new lib.li_sw_042();
	this.instance_43.parent = this;

	this.instance_44 = new lib.li_sw_043();
	this.instance_44.parent = this;

	this.instance_45 = new lib.li_sw_044();
	this.instance_45.parent = this;

	this.instance_46 = new lib.li_sw_045();
	this.instance_46.parent = this;

	this.instance_47 = new lib.li_sw_046();
	this.instance_47.parent = this;

	this.instance_48 = new lib.li_sw_047();
	this.instance_48.parent = this;

	this.instance_49 = new lib.li_sw_048();
	this.instance_49.parent = this;

	this.instance_50 = new lib.li_sw_049();
	this.instance_50.parent = this;

	this.instance_51 = new lib.li_sw_050();
	this.instance_51.parent = this;

	this.instance_52 = new lib.li_sw_051();
	this.instance_52.parent = this;

	this.instance_53 = new lib.li_sw_052();
	this.instance_53.parent = this;

	this.instance_54 = new lib.li_sw_053();
	this.instance_54.parent = this;

	this.instance_55 = new lib.li_sw_054();
	this.instance_55.parent = this;

	this.instance_56 = new lib.li_sw_055();
	this.instance_56.parent = this;

	this.instance_57 = new lib.li_sw_056();
	this.instance_57.parent = this;

	this.instance_58 = new lib.li_sw_057();
	this.instance_58.parent = this;

	this.instance_59 = new lib.li_sw_058();
	this.instance_59.parent = this;

	this.instance_60 = new lib.li_sw_059();
	this.instance_60.parent = this;

	this.instance_61 = new lib.li_sw_060();
	this.instance_61.parent = this;

	this.instance_62 = new lib.li_sw_061();
	this.instance_62.parent = this;

	this.instance_63 = new lib.li_sw_062();
	this.instance_63.parent = this;

	this.instance_64 = new lib.li_sw_063();
	this.instance_64.parent = this;

	this.instance_65 = new lib.li_sw_064();
	this.instance_65.parent = this;

	this.instance_66 = new lib.li_sw_065();
	this.instance_66.parent = this;

	this.instance_67 = new lib.li_sw_066();
	this.instance_67.parent = this;

	this.instance_68 = new lib.li_sw_067();
	this.instance_68.parent = this;

	this.instance_69 = new lib.li_sw_068();
	this.instance_69.parent = this;

	this.instance_70 = new lib.li_sw_069();
	this.instance_70.parent = this;

	this.instance_71 = new lib.li_sw_070();
	this.instance_71.parent = this;

	this.instance_72 = new lib.li_sw_071();
	this.instance_72.parent = this;

	this.instance_73 = new lib.li_sw_072();
	this.instance_73.parent = this;

	this.instance_74 = new lib.li_sw_073();
	this.instance_74.parent = this;

	this.instance_75 = new lib.li_sw_074();
	this.instance_75.parent = this;

	this.instance_76 = new lib.li_sw_075();
	this.instance_76.parent = this;

	this.instance_77 = new lib.li_sw_076();
	this.instance_77.parent = this;

	this.instance_78 = new lib.li_sw_077();
	this.instance_78.parent = this;

	this.instance_79 = new lib.li_sw_078();
	this.instance_79.parent = this;

	this.instance_80 = new lib.li_sw_079();
	this.instance_80.parent = this;

	this.instance_81 = new lib.li_sw_080();
	this.instance_81.parent = this;

	this.instance_82 = new lib.li_sw_081();
	this.instance_82.parent = this;

	this.instance_83 = new lib.li_sw_082();
	this.instance_83.parent = this;

	this.instance_84 = new lib.li_sw_083();
	this.instance_84.parent = this;

	this.instance_85 = new lib.li_sw_084();
	this.instance_85.parent = this;

	this.instance_86 = new lib.li_sw_085();
	this.instance_86.parent = this;

	this.instance_87 = new lib.li_sw_086();
	this.instance_87.parent = this;

	this.instance_88 = new lib.li_sw_087();
	this.instance_88.parent = this;

	this.instance_89 = new lib.li_sw_088();
	this.instance_89.parent = this;

	this.instance_90 = new lib.li_sw_089();
	this.instance_90.parent = this;

	this.instance_91 = new lib.li_sw_090();
	this.instance_91.parent = this;

	this.instance_92 = new lib.li_sw_091();
	this.instance_92.parent = this;

	this.instance_93 = new lib.li_sw_092();
	this.instance_93.parent = this;

	this.instance_94 = new lib.li_sw_093();
	this.instance_94.parent = this;

	this.instance_95 = new lib.li_sw_094();
	this.instance_95.parent = this;

	this.instance_96 = new lib.li_sw_095();
	this.instance_96.parent = this;

	this.instance_97 = new lib.li_sw_096();
	this.instance_97.parent = this;

	this.instance_98 = new lib.li_sw_097();
	this.instance_98.parent = this;

	this.instance_99 = new lib.li_sw_098();
	this.instance_99.parent = this;

	this.instance_100 = new lib.li_sw_099();
	this.instance_100.parent = this;

	this.instance_101 = new lib.li_sw_100();
	this.instance_101.parent = this;

	this.instance_102 = new lib.li_sw_101();
	this.instance_102.parent = this;

	this.instance_103 = new lib.li_sw_102();
	this.instance_103.parent = this;

	this.instance_104 = new lib.li_sw_103();
	this.instance_104.parent = this;

	this.instance_105 = new lib.li_sw_104();
	this.instance_105.parent = this;

	this.instance_106 = new lib.li_sw_105();
	this.instance_106.parent = this;

	this.instance_107 = new lib.li_sw_106();
	this.instance_107.parent = this;

	this.instance_108 = new lib.li_sw_107();
	this.instance_108.parent = this;

	this.instance_109 = new lib.li_sw_108();
	this.instance_109.parent = this;

	this.instance_110 = new lib.li_sw_109();
	this.instance_110.parent = this;

	this.instance_111 = new lib.li_sw_110();
	this.instance_111.parent = this;

	this.instance_112 = new lib.li_sw_111();
	this.instance_112.parent = this;

	this.instance_113 = new lib.li_sw_112();
	this.instance_113.parent = this;

	this.instance_114 = new lib.li_sw_113();
	this.instance_114.parent = this;

	this.instance_115 = new lib.li_sw_114();
	this.instance_115.parent = this;

	this.instance_116 = new lib.li_sw_115();
	this.instance_116.parent = this;

	this.instance_117 = new lib.li_sw_116();
	this.instance_117.parent = this;

	this.instance_118 = new lib.li_sw_117();
	this.instance_118.parent = this;

	this.instance_119 = new lib.li_sw_118();
	this.instance_119.parent = this;

	this.instance_120 = new lib.li_sw_119();
	this.instance_120.parent = this;

	this.instance_121 = new lib.li_sw_120();
	this.instance_121.parent = this;

	this.instance_122 = new lib.li_sw_121();
	this.instance_122.parent = this;

	this.instance_123 = new lib.li_sw_122();
	this.instance_123.parent = this;

	this.instance_124 = new lib.li_sw_123();
	this.instance_124.parent = this;

	this.instance_125 = new lib.li_sw_124();
	this.instance_125.parent = this;

	this.instance_126 = new lib.li_sw_125();
	this.instance_126.parent = this;

	this.instance_127 = new lib.li_sw_126();
	this.instance_127.parent = this;

	this.instance_128 = new lib.li_sw_127();
	this.instance_128.parent = this;

	this.instance_129 = new lib.li_sw_128();
	this.instance_129.parent = this;

	this.instance_130 = new lib.li_sw_129();
	this.instance_130.parent = this;

	this.instance_131 = new lib.li_sw_130();
	this.instance_131.parent = this;

	this.instance_132 = new lib.li_sw_131();
	this.instance_132.parent = this;

	this.instance_133 = new lib.li_sw_132();
	this.instance_133.parent = this;

	this.instance_134 = new lib.li_sw_133();
	this.instance_134.parent = this;

	this.instance_135 = new lib.li_sw_134();
	this.instance_135.parent = this;

	this.instance_136 = new lib.li_sw_135();
	this.instance_136.parent = this;

	this.instance_137 = new lib.li_sw_136();
	this.instance_137.parent = this;

	this.instance_138 = new lib.li_sw_137();
	this.instance_138.parent = this;

	this.instance_139 = new lib.li_sw_138();
	this.instance_139.parent = this;

	this.instance_140 = new lib.li_sw_139();
	this.instance_140.parent = this;

	this.instance_141 = new lib.li_sw_140();
	this.instance_141.parent = this;

	this.instance_142 = new lib.li_sw_141();
	this.instance_142.parent = this;

	this.instance_143 = new lib.li_sw_142();
	this.instance_143.parent = this;

	this.instance_144 = new lib.li_sw_143();
	this.instance_144.parent = this;

	this.instance_145 = new lib.li_sw_144();
	this.instance_145.parent = this;

	this.instance_146 = new lib.li_sw_145();
	this.instance_146.parent = this;

	this.instance_147 = new lib.li_sw_146();
	this.instance_147.parent = this;

	this.instance_148 = new lib.li_sw_147();
	this.instance_148.parent = this;

	this.instance_149 = new lib.li_sw_148();
	this.instance_149.parent = this;

	this.instance_150 = new lib.li_sw_149();
	this.instance_150.parent = this;

	this.instance_151 = new lib.li_sw_150();
	this.instance_151.parent = this;

	this.instance_152 = new lib.li_sw_151();
	this.instance_152.parent = this;

	this.instance_153 = new lib.li_sw_152();
	this.instance_153.parent = this;

	this.instance_154 = new lib.li_sw_153();
	this.instance_154.parent = this;

	this.instance_155 = new lib.li_sw_154();
	this.instance_155.parent = this;

	this.instance_156 = new lib.li_sw_155();
	this.instance_156.parent = this;

	this.instance_157 = new lib.li_sw_156();
	this.instance_157.parent = this;

	this.instance_158 = new lib.li_sw_157();
	this.instance_158.parent = this;

	this.instance_159 = new lib.li_sw_158();
	this.instance_159.parent = this;

	this.instance_160 = new lib.li_sw_159();
	this.instance_160.parent = this;

	this.instance_161 = new lib.li_sw_160();
	this.instance_161.parent = this;

	this.instance_162 = new lib.li_sw_161();
	this.instance_162.parent = this;

	this.instance_163 = new lib.li_sw_162();
	this.instance_163.parent = this;

	this.instance_164 = new lib.li_sw_163();
	this.instance_164.parent = this;

	this.instance_165 = new lib.li_sw_164();
	this.instance_165.parent = this;

	this.instance_166 = new lib.li_sw_165();
	this.instance_166.parent = this;

	this.instance_167 = new lib.li_sw_166();
	this.instance_167.parent = this;

	this.instance_168 = new lib.li_sw_167();
	this.instance_168.parent = this;

	this.instance_169 = new lib.li_sw_168();
	this.instance_169.parent = this;

	this.instance_170 = new lib.li_sw_169();
	this.instance_170.parent = this;

	this.instance_171 = new lib.li_sw_170();
	this.instance_171.parent = this;

	this.instance_172 = new lib.li_sw_171();
	this.instance_172.parent = this;

	this.instance_173 = new lib.li_sw_172();
	this.instance_173.parent = this;

	this.instance_174 = new lib.li_sw_173();
	this.instance_174.parent = this;

	this.instance_175 = new lib.li_sw_174();
	this.instance_175.parent = this;

	this.instance_176 = new lib.li_sw_175();
	this.instance_176.parent = this;

	this.instance_177 = new lib.li_sw_176();
	this.instance_177.parent = this;

	this.instance_178 = new lib.li_sw_177();
	this.instance_178.parent = this;

	this.instance_179 = new lib.li_sw_178();
	this.instance_179.parent = this;

	this.instance_180 = new lib.li_sw_179();
	this.instance_180.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).to({state:[{t:this.instance_121}]},1).to({state:[{t:this.instance_122}]},1).to({state:[{t:this.instance_123}]},1).to({state:[{t:this.instance_124}]},1).to({state:[{t:this.instance_125}]},1).to({state:[{t:this.instance_126}]},1).to({state:[{t:this.instance_127}]},1).to({state:[{t:this.instance_128}]},1).to({state:[{t:this.instance_129}]},1).to({state:[{t:this.instance_130}]},1).to({state:[{t:this.instance_131}]},1).to({state:[{t:this.instance_132}]},1).to({state:[{t:this.instance_133}]},1).to({state:[{t:this.instance_134}]},1).to({state:[{t:this.instance_135}]},1).to({state:[{t:this.instance_136}]},1).to({state:[{t:this.instance_137}]},1).to({state:[{t:this.instance_138}]},1).to({state:[{t:this.instance_139}]},1).to({state:[{t:this.instance_140}]},1).to({state:[{t:this.instance_141}]},1).to({state:[{t:this.instance_142}]},1).to({state:[{t:this.instance_143}]},1).to({state:[{t:this.instance_144}]},1).to({state:[{t:this.instance_145}]},1).to({state:[{t:this.instance_146}]},1).to({state:[{t:this.instance_147}]},1).to({state:[{t:this.instance_148}]},1).to({state:[{t:this.instance_149}]},1).to({state:[{t:this.instance_150}]},1).to({state:[{t:this.instance_151}]},1).to({state:[{t:this.instance_152}]},1).to({state:[{t:this.instance_153}]},1).to({state:[{t:this.instance_154}]},1).to({state:[{t:this.instance_155}]},1).to({state:[{t:this.instance_156}]},1).to({state:[{t:this.instance_157}]},1).to({state:[{t:this.instance_158}]},1).to({state:[{t:this.instance_159}]},1).to({state:[{t:this.instance_160}]},1).to({state:[{t:this.instance_161}]},1).to({state:[{t:this.instance_162}]},1).to({state:[{t:this.instance_163}]},1).to({state:[{t:this.instance_164}]},1).to({state:[{t:this.instance_165}]},1).to({state:[{t:this.instance_166}]},1).to({state:[{t:this.instance_167}]},1).to({state:[{t:this.instance_168}]},1).to({state:[{t:this.instance_169}]},1).to({state:[{t:this.instance_170}]},1).to({state:[{t:this.instance_171}]},1).to({state:[{t:this.instance_172}]},1).to({state:[{t:this.instance_173}]},1).to({state:[{t:this.instance_174}]},1).to({state:[{t:this.instance_175}]},1).to({state:[{t:this.instance_176}]},1).to({state:[{t:this.instance_177}]},1).to({state:[{t:this.instance_178}]},1).to({state:[{t:this.instance_179}]},1).to({state:[{t:this.instance_180}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.mc_lick_extra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop_0":0,"loop_1":30,"loop_2":60,"anime_1":90,"loop_3":170});

	// timeline functions:
	this.frame_0 = function() {
		this.alpha = 1;
	}
	this.frame_20 = function() {
		var rnd = Math.floor(Math.random() * 6 );
		
		if(rnd != 0){
			this.gotoAndPlay("loop_0");
		}
	}
	this.frame_40 = function() {
		var rnd = Math.floor(Math.random() * 6 );
		
		if(rnd != 0){
			this.gotoAndPlay("loop_1");
		}
	}
	this.frame_50 = function() {
		clickFlag
			? clickFlag = false
			: this.gotoAndPlay("loop_0");
	}
	this.frame_70 = function() {
		var rnd = Math.floor(Math.random() * 6 );
		
		if(rnd != 0){
			this.gotoAndPlay("loop_2");
		}
	}
	this.frame_89 = function() {
		checkFlag = true;
	}
	this.frame_90 = function() {
		if(checkFlag){
			checkFlag =false;
			if(clickFlag){
				exportRoot.fn_changeFPS();
				createjs.Tween.get(this)
					.to({scaleX: 1.3, scaleY: 1.3}, 500, createjs.Ease.cubicOut);
			}else{
				this.gotoAndPlay("loop_2");
			}
		}
		if(clickFlag){
			clickFlag = false;
			var s = createjs.Sound;
			var seNum = 0;
			var rnd = Math.floor(Math.random() * seArr[seNum]);
			console.log("se:"+rnd);
			s.play("se_" + seNum + rnd);
		}
	}
	this.frame_105 = function() {
		var s = createjs.Sound;
		var seNum = 0;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_117 = function() {
		var s = createjs.Sound;
		var seNum = 0;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_130 = function() {
		var s = createjs.Sound;
		var seNum = 0;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_149 = function() {
		var s = createjs.Sound;
		var seNum = 0;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_169 = function() {
		if(firstFlag){
			this.stop();
			firstFlag = false;
			clickFlag = true;
			createjs.Ticker.framerate = 5;
			createjs.Tween.get(this)
				.wait(2000)
				.set({scaleX: 1, scaleY: 1})
				.call(function (){
					this.gotoAndPlay("anime_1");
				});
		}else{
			firstFlag = true;
			createjs.Ticker.framerate = 20;
		}
	}
	this.frame_190 = function() {
		if(clickFlag){
			clickFlag = false
			if(firstFlag){
				firstFlag = false;
				createjs.Tween.get(this, {override:true})
					.to({alpha:0}, 1000)
					.call(function (){
						firstFlag = true;
						this.alpha = 1;
						exportRoot.gotoAndStop("ending");
					});
			}
			this.gotoAndPlay("loop_3");
		}else{
			this.gotoAndPlay("loop_3");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(20).call(this.frame_40).wait(10).call(this.frame_50).wait(20).call(this.frame_70).wait(19).call(this.frame_89).wait(1).call(this.frame_90).wait(15).call(this.frame_105).wait(12).call(this.frame_117).wait(13).call(this.frame_130).wait(19).call(this.frame_149).wait(20).call(this.frame_169).wait(21).call(this.frame_190).wait(1));

	// fx
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("Egx/BYwMAAAixfMBj/AAAMAAACxfg");
	this.shape.setTransform(320,568);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("Egx/BYwMAAAixfMBj/AAAMAAACxfg");
	this.shape_1.setTransform(320.1,568.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},90).to({state:[]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).to({state:[]},97).wait(1));

	// レイヤー_2
	this.instance = new lib.mc_cutinMassage();
	this.instance.parent = this;
	this.instance.setTransform(97,20.2,1,1,0,0,0,97,20.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:false},0).to({_off:true},30).wait(101));

	// timer
	this.instance_1 = new lib.videoTimerSet();
	this.instance_1.parent = this;
	this.instance_1.setTransform(326.4,38.4,1,1,0,0,0,113.2,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(191));

	// anime
	this.instance_2 = new lib.li_ex_000();
	this.instance_2.parent = this;

	this.instance_3 = new lib.li_ex_001();
	this.instance_3.parent = this;

	this.instance_4 = new lib.li_ex_002();
	this.instance_4.parent = this;

	this.instance_5 = new lib.li_ex_003();
	this.instance_5.parent = this;

	this.instance_6 = new lib.li_ex_004();
	this.instance_6.parent = this;

	this.instance_7 = new lib.li_ex_005();
	this.instance_7.parent = this;

	this.instance_8 = new lib.li_ex_006();
	this.instance_8.parent = this;

	this.instance_9 = new lib.li_ex_007();
	this.instance_9.parent = this;

	this.instance_10 = new lib.li_ex_008();
	this.instance_10.parent = this;

	this.instance_11 = new lib.li_ex_009();
	this.instance_11.parent = this;

	this.instance_12 = new lib.li_ex_010();
	this.instance_12.parent = this;

	this.instance_13 = new lib.li_ex_011();
	this.instance_13.parent = this;

	this.instance_14 = new lib.li_ex_012();
	this.instance_14.parent = this;

	this.instance_15 = new lib.li_ex_013();
	this.instance_15.parent = this;

	this.instance_16 = new lib.li_ex_014();
	this.instance_16.parent = this;

	this.instance_17 = new lib.li_ex_015();
	this.instance_17.parent = this;

	this.instance_18 = new lib.li_ex_016();
	this.instance_18.parent = this;

	this.instance_19 = new lib.li_ex_017();
	this.instance_19.parent = this;

	this.instance_20 = new lib.li_ex_018();
	this.instance_20.parent = this;

	this.instance_21 = new lib.li_ex_019();
	this.instance_21.parent = this;

	this.instance_22 = new lib.li_ex_020();
	this.instance_22.parent = this;

	this.instance_23 = new lib.li_ex_021();
	this.instance_23.parent = this;

	this.instance_24 = new lib.li_ex_022();
	this.instance_24.parent = this;

	this.instance_25 = new lib.li_ex_023();
	this.instance_25.parent = this;

	this.instance_26 = new lib.li_ex_024();
	this.instance_26.parent = this;

	this.instance_27 = new lib.li_ex_025();
	this.instance_27.parent = this;

	this.instance_28 = new lib.li_ex_026();
	this.instance_28.parent = this;

	this.instance_29 = new lib.li_ex_027();
	this.instance_29.parent = this;

	this.instance_30 = new lib.li_ex_028();
	this.instance_30.parent = this;

	this.instance_31 = new lib.li_ex_029();
	this.instance_31.parent = this;

	this.instance_32 = new lib.li_ex_030();
	this.instance_32.parent = this;

	this.instance_33 = new lib.li_ex_031();
	this.instance_33.parent = this;

	this.instance_34 = new lib.li_ex_032();
	this.instance_34.parent = this;

	this.instance_35 = new lib.li_ex_033();
	this.instance_35.parent = this;

	this.instance_36 = new lib.li_ex_034();
	this.instance_36.parent = this;

	this.instance_37 = new lib.li_ex_035();
	this.instance_37.parent = this;

	this.instance_38 = new lib.li_ex_036();
	this.instance_38.parent = this;

	this.instance_39 = new lib.li_ex_037();
	this.instance_39.parent = this;

	this.instance_40 = new lib.li_ex_038();
	this.instance_40.parent = this;

	this.instance_41 = new lib.li_ex_039();
	this.instance_41.parent = this;

	this.instance_42 = new lib.li_ex_040();
	this.instance_42.parent = this;

	this.instance_43 = new lib.li_ex_041();
	this.instance_43.parent = this;

	this.instance_44 = new lib.li_ex_042();
	this.instance_44.parent = this;

	this.instance_45 = new lib.li_ex_043();
	this.instance_45.parent = this;

	this.instance_46 = new lib.li_ex_044();
	this.instance_46.parent = this;

	this.instance_47 = new lib.li_ex_045();
	this.instance_47.parent = this;

	this.instance_48 = new lib.li_ex_046();
	this.instance_48.parent = this;

	this.instance_49 = new lib.li_ex_047();
	this.instance_49.parent = this;

	this.instance_50 = new lib.li_ex_048();
	this.instance_50.parent = this;

	this.instance_51 = new lib.li_ex_049();
	this.instance_51.parent = this;

	this.instance_52 = new lib.li_ex_050();
	this.instance_52.parent = this;

	this.instance_53 = new lib.li_ex_051();
	this.instance_53.parent = this;

	this.instance_54 = new lib.li_ex_052();
	this.instance_54.parent = this;

	this.instance_55 = new lib.li_ex_053();
	this.instance_55.parent = this;

	this.instance_56 = new lib.li_ex_054();
	this.instance_56.parent = this;

	this.instance_57 = new lib.li_ex_055();
	this.instance_57.parent = this;

	this.instance_58 = new lib.li_ex_056();
	this.instance_58.parent = this;

	this.instance_59 = new lib.li_ex_057();
	this.instance_59.parent = this;

	this.instance_60 = new lib.li_ex_058();
	this.instance_60.parent = this;

	this.instance_61 = new lib.li_ex_059();
	this.instance_61.parent = this;

	this.instance_62 = new lib.li_ex_060();
	this.instance_62.parent = this;

	this.instance_63 = new lib.li_ex_061();
	this.instance_63.parent = this;

	this.instance_64 = new lib.li_ex_062();
	this.instance_64.parent = this;

	this.instance_65 = new lib.li_ex_063();
	this.instance_65.parent = this;

	this.instance_66 = new lib.li_ex_064();
	this.instance_66.parent = this;

	this.instance_67 = new lib.li_ex_065();
	this.instance_67.parent = this;

	this.instance_68 = new lib.li_ex_066();
	this.instance_68.parent = this;

	this.instance_69 = new lib.li_ex_067();
	this.instance_69.parent = this;

	this.instance_70 = new lib.li_ex_068();
	this.instance_70.parent = this;

	this.instance_71 = new lib.li_ex_069();
	this.instance_71.parent = this;

	this.instance_72 = new lib.li_ex_070();
	this.instance_72.parent = this;

	this.instance_73 = new lib.li_ex_071();
	this.instance_73.parent = this;

	this.instance_74 = new lib.li_ex_072();
	this.instance_74.parent = this;

	this.instance_75 = new lib.li_ex_073();
	this.instance_75.parent = this;

	this.instance_76 = new lib.li_ex_074();
	this.instance_76.parent = this;

	this.instance_77 = new lib.li_ex_075();
	this.instance_77.parent = this;

	this.instance_78 = new lib.li_ex_076();
	this.instance_78.parent = this;

	this.instance_79 = new lib.li_ex_077();
	this.instance_79.parent = this;

	this.instance_80 = new lib.li_ex_078();
	this.instance_80.parent = this;

	this.instance_81 = new lib.li_ex_079();
	this.instance_81.parent = this;

	this.instance_82 = new lib.li_ex_080();
	this.instance_82.parent = this;

	this.instance_83 = new lib.li_ex_081();
	this.instance_83.parent = this;

	this.instance_84 = new lib.li_ex_082();
	this.instance_84.parent = this;

	this.instance_85 = new lib.li_ex_083();
	this.instance_85.parent = this;

	this.instance_86 = new lib.li_ex_084();
	this.instance_86.parent = this;

	this.instance_87 = new lib.li_ex_085();
	this.instance_87.parent = this;

	this.instance_88 = new lib.li_ex_086();
	this.instance_88.parent = this;

	this.instance_89 = new lib.li_ex_087();
	this.instance_89.parent = this;

	this.instance_90 = new lib.li_ex_088();
	this.instance_90.parent = this;

	this.instance_91 = new lib.li_ex_089();
	this.instance_91.parent = this;

	this.instance_92 = new lib.li_ex_090();
	this.instance_92.parent = this;

	this.instance_93 = new lib.li_ex_091();
	this.instance_93.parent = this;

	this.instance_94 = new lib.li_ex_092();
	this.instance_94.parent = this;

	this.instance_95 = new lib.li_ex_093();
	this.instance_95.parent = this;

	this.instance_96 = new lib.li_ex_094();
	this.instance_96.parent = this;

	this.instance_97 = new lib.li_ex_095();
	this.instance_97.parent = this;

	this.instance_98 = new lib.li_ex_096();
	this.instance_98.parent = this;

	this.instance_99 = new lib.li_ex_097();
	this.instance_99.parent = this;

	this.instance_100 = new lib.li_ex_098();
	this.instance_100.parent = this;

	this.instance_101 = new lib.li_ex_099();
	this.instance_101.parent = this;

	this.instance_102 = new lib.li_ex_100();
	this.instance_102.parent = this;

	this.instance_103 = new lib.li_ex_101();
	this.instance_103.parent = this;

	this.instance_104 = new lib.li_ex_102();
	this.instance_104.parent = this;

	this.instance_105 = new lib.li_ex_103();
	this.instance_105.parent = this;

	this.instance_106 = new lib.li_ex_104();
	this.instance_106.parent = this;

	this.instance_107 = new lib.li_ex_105();
	this.instance_107.parent = this;

	this.instance_108 = new lib.li_ex_106();
	this.instance_108.parent = this;

	this.instance_109 = new lib.li_ex_107();
	this.instance_109.parent = this;

	this.instance_110 = new lib.li_ex_108();
	this.instance_110.parent = this;

	this.instance_111 = new lib.li_ex_109();
	this.instance_111.parent = this;

	this.instance_112 = new lib.li_ex_110();
	this.instance_112.parent = this;

	this.instance_113 = new lib.li_ex_111();
	this.instance_113.parent = this;

	this.instance_114 = new lib.li_ex_112();
	this.instance_114.parent = this;

	this.instance_115 = new lib.li_ex_113();
	this.instance_115.parent = this;

	this.instance_116 = new lib.li_ex_114();
	this.instance_116.parent = this;

	this.instance_117 = new lib.li_ex_115();
	this.instance_117.parent = this;

	this.instance_118 = new lib.li_ex_116();
	this.instance_118.parent = this;

	this.instance_119 = new lib.li_ex_117();
	this.instance_119.parent = this;

	this.instance_120 = new lib.li_ex_118();
	this.instance_120.parent = this;

	this.instance_121 = new lib.li_ex_119();
	this.instance_121.parent = this;

	this.instance_122 = new lib.li_ex_120();
	this.instance_122.parent = this;

	this.instance_123 = new lib.li_ex_121();
	this.instance_123.parent = this;

	this.instance_124 = new lib.li_ex_122();
	this.instance_124.parent = this;

	this.instance_125 = new lib.li_ex_123();
	this.instance_125.parent = this;

	this.instance_126 = new lib.li_ex_124();
	this.instance_126.parent = this;

	this.instance_127 = new lib.li_ex_125();
	this.instance_127.parent = this;

	this.instance_128 = new lib.li_ex_126();
	this.instance_128.parent = this;

	this.instance_129 = new lib.li_ex_127();
	this.instance_129.parent = this;

	this.instance_130 = new lib.li_ex_128();
	this.instance_130.parent = this;

	this.instance_131 = new lib.li_ex_129();
	this.instance_131.parent = this;

	this.instance_132 = new lib.li_ex_130();
	this.instance_132.parent = this;

	this.instance_133 = new lib.li_ex_131();
	this.instance_133.parent = this;

	this.instance_134 = new lib.li_ex_132();
	this.instance_134.parent = this;

	this.instance_135 = new lib.li_ex_133();
	this.instance_135.parent = this;

	this.instance_136 = new lib.li_ex_134();
	this.instance_136.parent = this;

	this.instance_137 = new lib.li_ex_135();
	this.instance_137.parent = this;

	this.instance_138 = new lib.li_ex_136();
	this.instance_138.parent = this;

	this.instance_139 = new lib.li_ex_137();
	this.instance_139.parent = this;

	this.instance_140 = new lib.li_ex_138();
	this.instance_140.parent = this;

	this.instance_141 = new lib.li_ex_139();
	this.instance_141.parent = this;

	this.instance_142 = new lib.li_ex_140();
	this.instance_142.parent = this;

	this.instance_143 = new lib.li_ex_141();
	this.instance_143.parent = this;

	this.instance_144 = new lib.li_ex_142();
	this.instance_144.parent = this;

	this.instance_145 = new lib.li_ex_143();
	this.instance_145.parent = this;

	this.instance_146 = new lib.li_ex_144();
	this.instance_146.parent = this;

	this.instance_147 = new lib.li_ex_145();
	this.instance_147.parent = this;

	this.instance_148 = new lib.li_ex_146();
	this.instance_148.parent = this;

	this.instance_149 = new lib.li_ex_147();
	this.instance_149.parent = this;

	this.instance_150 = new lib.li_ex_148();
	this.instance_150.parent = this;

	this.instance_151 = new lib.li_ex_149();
	this.instance_151.parent = this;

	this.instance_152 = new lib.li_ex_150();
	this.instance_152.parent = this;

	this.instance_153 = new lib.li_ex_151();
	this.instance_153.parent = this;

	this.instance_154 = new lib.li_ex_152();
	this.instance_154.parent = this;

	this.instance_155 = new lib.li_ex_153();
	this.instance_155.parent = this;

	this.instance_156 = new lib.li_ex_154();
	this.instance_156.parent = this;

	this.instance_157 = new lib.li_ex_155();
	this.instance_157.parent = this;

	this.instance_158 = new lib.li_ex_156();
	this.instance_158.parent = this;

	this.instance_159 = new lib.li_ex_157();
	this.instance_159.parent = this;

	this.instance_160 = new lib.li_ex_158();
	this.instance_160.parent = this;

	this.instance_161 = new lib.li_ex_159();
	this.instance_161.parent = this;

	this.instance_162 = new lib.li_ex_160();
	this.instance_162.parent = this;

	this.instance_163 = new lib.li_ex_161();
	this.instance_163.parent = this;

	this.instance_164 = new lib.li_ex_162();
	this.instance_164.parent = this;

	this.instance_165 = new lib.li_ex_163();
	this.instance_165.parent = this;

	this.instance_166 = new lib.li_ex_164();
	this.instance_166.parent = this;

	this.instance_167 = new lib.li_ex_165();
	this.instance_167.parent = this;

	this.instance_168 = new lib.li_ex_166();
	this.instance_168.parent = this;

	this.instance_169 = new lib.li_ex_167();
	this.instance_169.parent = this;

	this.instance_170 = new lib.li_ex_168();
	this.instance_170.parent = this;

	this.instance_171 = new lib.li_ex_169();
	this.instance_171.parent = this;

	this.instance_172 = new lib.li_ex_170();
	this.instance_172.parent = this;

	this.instance_173 = new lib.li_ex_171();
	this.instance_173.parent = this;

	this.instance_174 = new lib.li_ex_172();
	this.instance_174.parent = this;

	this.instance_175 = new lib.li_ex_173();
	this.instance_175.parent = this;

	this.instance_176 = new lib.li_ex_174();
	this.instance_176.parent = this;

	this.instance_177 = new lib.li_ex_175();
	this.instance_177.parent = this;

	this.instance_178 = new lib.li_ex_176();
	this.instance_178.parent = this;

	this.instance_179 = new lib.li_ex_177();
	this.instance_179.parent = this;

	this.instance_180 = new lib.li_ex_178();
	this.instance_180.parent = this;

	this.instance_181 = new lib.li_ex_179();
	this.instance_181.parent = this;

	this.instance_182 = new lib.li_ex_180();
	this.instance_182.parent = this;

	this.instance_183 = new lib.li_ex_181();
	this.instance_183.parent = this;

	this.instance_184 = new lib.li_ex_182();
	this.instance_184.parent = this;

	this.instance_185 = new lib.li_ex_183();
	this.instance_185.parent = this;

	this.instance_186 = new lib.li_ex_184();
	this.instance_186.parent = this;

	this.instance_187 = new lib.li_ex_185();
	this.instance_187.parent = this;

	this.instance_188 = new lib.li_ex_186();
	this.instance_188.parent = this;

	this.instance_189 = new lib.li_ex_187();
	this.instance_189.parent = this;

	this.instance_190 = new lib.li_ex_188();
	this.instance_190.parent = this;

	this.instance_191 = new lib.li_ex_189();
	this.instance_191.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).to({state:[{t:this.instance_121}]},1).to({state:[{t:this.instance_122}]},1).to({state:[{t:this.instance_123}]},1).to({state:[{t:this.instance_124}]},1).to({state:[{t:this.instance_125}]},1).to({state:[{t:this.instance_126}]},1).to({state:[{t:this.instance_127}]},1).to({state:[{t:this.instance_128}]},1).to({state:[{t:this.instance_129}]},1).to({state:[{t:this.instance_130}]},1).to({state:[{t:this.instance_131}]},1).to({state:[{t:this.instance_132}]},1).to({state:[{t:this.instance_133}]},1).to({state:[{t:this.instance_134}]},1).to({state:[{t:this.instance_135}]},1).to({state:[{t:this.instance_136}]},1).to({state:[{t:this.instance_137}]},1).to({state:[{t:this.instance_138}]},1).to({state:[{t:this.instance_139}]},1).to({state:[{t:this.instance_140}]},1).to({state:[{t:this.instance_141}]},1).to({state:[{t:this.instance_142}]},1).to({state:[{t:this.instance_143}]},1).to({state:[{t:this.instance_144}]},1).to({state:[{t:this.instance_145}]},1).to({state:[{t:this.instance_146}]},1).to({state:[{t:this.instance_147}]},1).to({state:[{t:this.instance_148}]},1).to({state:[{t:this.instance_149}]},1).to({state:[{t:this.instance_150}]},1).to({state:[{t:this.instance_151}]},1).to({state:[{t:this.instance_152}]},1).to({state:[{t:this.instance_153}]},1).to({state:[{t:this.instance_154}]},1).to({state:[{t:this.instance_155}]},1).to({state:[{t:this.instance_156}]},1).to({state:[{t:this.instance_157}]},1).to({state:[{t:this.instance_158}]},1).to({state:[{t:this.instance_159}]},1).to({state:[{t:this.instance_160}]},1).to({state:[{t:this.instance_161}]},1).to({state:[{t:this.instance_162}]},1).to({state:[{t:this.instance_163}]},1).to({state:[{t:this.instance_164}]},1).to({state:[{t:this.instance_165}]},1).to({state:[{t:this.instance_166}]},1).to({state:[{t:this.instance_167}]},1).to({state:[{t:this.instance_168}]},1).to({state:[{t:this.instance_169}]},1).to({state:[{t:this.instance_170}]},1).to({state:[{t:this.instance_171}]},1).to({state:[{t:this.instance_172}]},1).to({state:[{t:this.instance_173}]},1).to({state:[{t:this.instance_174}]},1).to({state:[{t:this.instance_175}]},1).to({state:[{t:this.instance_176}]},1).to({state:[{t:this.instance_177}]},1).to({state:[{t:this.instance_178}]},1).to({state:[{t:this.instance_179}]},1).to({state:[{t:this.instance_180}]},1).to({state:[{t:this.instance_181}]},1).to({state:[{t:this.instance_182}]},1).to({state:[{t:this.instance_183}]},1).to({state:[{t:this.instance_184}]},1).to({state:[{t:this.instance_185}]},1).to({state:[{t:this.instance_186}]},1).to({state:[{t:this.instance_187}]},1).to({state:[{t:this.instance_188}]},1).to({state:[{t:this.instance_189}]},1).to({state:[{t:this.instance_190}]},1).to({state:[{t:this.instance_191}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.mc_facial_sweaty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop_0":0,"loop_1":15,"anime_1":30,"loop_2":40,"anime_2":50,"loop_3":125});

	// timeline functions:
	this.frame_0 = function() {
		this.alpha = 1;
		exportRoot.fn_changeFPS(10);
	}
	this.frame_4 = function() {
		var s = createjs.Sound;
		var seNum = 3;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_10 = function() {
		if(clickFlag){
			this.gotoAndPlay("anime_1");
		}else{
			var jumpTo = "loop_0";
			var rndTotalNum = 8;
			exportRoot.fn_randomLoop(this, jumpTo, rndTotalNum);
		}
	}
	this.frame_11 = function() {
		exportRoot.fn_changeFPS();
	}
	this.frame_14 = function() {
		var s = createjs.Sound;
		var sceneNum = 2;
		var rnd = Math.floor(Math.random() * cvArr[sceneNum]);
		console.log("cv:"+rnd);
		s.play("cv_" + sceneNum + rnd);
		var s = createjs.Sound;
		var seNum = 3;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_15 = function() {
		exportRoot.fn_changeFPS(10);
	}
	this.frame_24 = function() {
		var s = createjs.Sound;
		var seNum = 3;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_25 = function() {
		var jumpTo = "loop_1";
		var rndTotalNum = 6;
		exportRoot.fn_randomLoop(this, jumpTo, rndTotalNum);
	}
	this.frame_30 = function() {
		clickFlag
			? clickFlag = false
			: this.gotoAndPlay("loop_0");
	}
	this.frame_32 = function() {
		var s = createjs.Sound;
		var seNum = 3;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_37 = function() {
		var s = createjs.Sound;
		var seNum = 3;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_40 = function() {
		exportRoot.fn_changeFPS(10);
	}
	this.frame_42 = function() {
		var s = createjs.Sound;
		var seNum = 3;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_47 = function() {
		var s = createjs.Sound;
		var seNum = 3;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_49 = function() {
		checkFlag = true;
	}
	this.frame_50 = function() {
		if(checkFlag){
			checkFlag = false;
			if(clickFlag){
				//clickFlag = false;
				exportRoot.fn_changeFPS();
				createjs.Tween.get(this)
					.to({scaleX: 1.3, scaleY: 1.3}, 500, createjs.Ease.cubicOut)
			}else{
				this.gotoAndPlay("loop_2");
			}
		}
		if(clickFlag){
			clickFlag = false;
			var s = createjs.Sound;
			var seNum = 0;
			var rnd = Math.floor(Math.random() * seArr[seNum]);
			console.log("se:"+rnd);
			s.play("se_" + seNum + rnd);
		}
	}
	this.frame_55 = function() {
		var s = createjs.Sound;
		var seNum = 3;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_59 = function() {
		var s = createjs.Sound;
		var sceneNum = 2;
		var rnd = Math.floor(Math.random() * cvArr[sceneNum]);
		console.log("cv:"+rnd);
		
		s.play("cv_" + sceneNum + rnd);
	}
	this.frame_65 = function() {
		var s = createjs.Sound;
		var seNum = 0;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_70 = function() {
		var s = createjs.Sound;
		var seNum = 3;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_72 = function() {
		var s = createjs.Sound;
		var sceneNum = 2;
		var rnd = Math.floor(Math.random() * cvArr[sceneNum]);
		console.log("cv:"+rnd);
		
		s.play("cv_" + sceneNum + rnd);
	}
	this.frame_80 = function() {
		var s = createjs.Sound;
		var seNum = 0;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_86 = function() {
		var s = createjs.Sound;
		var seNum = 3;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_100 = function() {
		var s = createjs.Sound;
		var seNum = 0;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_104 = function() {
		var s = createjs.Sound;
		var seNum = 3;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_124 = function() {
		if(firstFlag){
			this.stop();
			firstFlag = false;
			clickFlag = true;
			createjs.Ticker.framerate = 5;
			createjs.Tween.get(this)
				.wait(2000)
				.set({scaleX: 1, scaleY: 1})
				.call(function (){
					this.gotoAndPlay("anime_2");
				});
		}else{
			firstFlag = true;
			createjs.Ticker.framerate = 20;
		}
	}
	this.frame_125 = function() {
		//exportRoot.fn_changeFPS(10);
		createjs.Ticker.framerate = 16;
	}
	this.frame_147 = function() {
		var s = createjs.Sound;
		var sceneNum = 3;
		var rnd = Math.floor(Math.random() * cvArr[sceneNum]);
		console.log("cv:" + sceneNum + rnd);
		s.play("cv_" + sceneNum + rnd);
	}
	this.frame_155 = function() {
		if(clickFlag){
			clickFlag = false
			if(firstFlag){
				firstFlag = false;
				createjs.Tween.get(this, {override:true})
					.to({alpha:0}, 1000)
					.call(function (){
						firstFlag = true;
						this.alpha = 1;
						exportRoot.gotoAndStop("ending");
					});
			}
			this.gotoAndPlay("loop_3");
		}else{
			this.gotoAndPlay("loop_3");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(6).call(this.frame_10).wait(1).call(this.frame_11).wait(3).call(this.frame_14).wait(1).call(this.frame_15).wait(9).call(this.frame_24).wait(1).call(this.frame_25).wait(5).call(this.frame_30).wait(2).call(this.frame_32).wait(5).call(this.frame_37).wait(3).call(this.frame_40).wait(2).call(this.frame_42).wait(5).call(this.frame_47).wait(2).call(this.frame_49).wait(1).call(this.frame_50).wait(5).call(this.frame_55).wait(4).call(this.frame_59).wait(6).call(this.frame_65).wait(5).call(this.frame_70).wait(2).call(this.frame_72).wait(8).call(this.frame_80).wait(6).call(this.frame_86).wait(14).call(this.frame_100).wait(4).call(this.frame_104).wait(20).call(this.frame_124).wait(1).call(this.frame_125).wait(22).call(this.frame_147).wait(8).call(this.frame_155).wait(1));

	// fx
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("Egx/BYwMAAAixfMBj/AAAMAAACxfg");
	this.shape.setTransform(320,568);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("Egx/BYwMAAAixfMBj/AAAMAAACxfg");
	this.shape_1.setTransform(320.1,568.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},50).to({state:[]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).to({state:[]},100).wait(1));

	// レイヤー_2
	this.instance = new lib.mc_cutinMassage();
	this.instance.parent = this;
	this.instance.setTransform(97,20.2,1,1,0,0,0,97,20.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).to({_off:true},10).wait(106));

	// レイヤー_1
	this.instance_1 = new lib.fa_sw_000();
	this.instance_1.parent = this;

	this.instance_2 = new lib.fa_sw_001();
	this.instance_2.parent = this;

	this.instance_3 = new lib.fa_sw_002();
	this.instance_3.parent = this;

	this.instance_4 = new lib.fa_sw_003();
	this.instance_4.parent = this;

	this.instance_5 = new lib.fa_sw_004();
	this.instance_5.parent = this;

	this.instance_6 = new lib.fa_sw_005();
	this.instance_6.parent = this;

	this.instance_7 = new lib.fa_sw_006();
	this.instance_7.parent = this;

	this.instance_8 = new lib.fa_sw_007();
	this.instance_8.parent = this;

	this.instance_9 = new lib.fa_sw_008();
	this.instance_9.parent = this;

	this.instance_10 = new lib.fa_sw_009();
	this.instance_10.parent = this;

	this.instance_11 = new lib.fa_sw_010();
	this.instance_11.parent = this;

	this.instance_12 = new lib.fa_sw_011();
	this.instance_12.parent = this;

	this.instance_13 = new lib.fa_sw_012();
	this.instance_13.parent = this;

	this.instance_14 = new lib.fa_sw_013();
	this.instance_14.parent = this;

	this.instance_15 = new lib.fa_sw_014();
	this.instance_15.parent = this;

	this.instance_16 = new lib.fa_sw_015();
	this.instance_16.parent = this;

	this.instance_17 = new lib.fa_sw_016();
	this.instance_17.parent = this;

	this.instance_18 = new lib.fa_sw_017();
	this.instance_18.parent = this;

	this.instance_19 = new lib.fa_sw_018();
	this.instance_19.parent = this;

	this.instance_20 = new lib.fa_sw_019();
	this.instance_20.parent = this;

	this.instance_21 = new lib.fa_sw_020();
	this.instance_21.parent = this;

	this.instance_22 = new lib.fa_sw_021();
	this.instance_22.parent = this;

	this.instance_23 = new lib.fa_sw_022();
	this.instance_23.parent = this;

	this.instance_24 = new lib.fa_sw_023();
	this.instance_24.parent = this;

	this.instance_25 = new lib.fa_sw_024();
	this.instance_25.parent = this;

	this.instance_26 = new lib.fa_sw_025();
	this.instance_26.parent = this;

	this.instance_27 = new lib.fa_sw_026();
	this.instance_27.parent = this;

	this.instance_28 = new lib.fa_sw_027();
	this.instance_28.parent = this;

	this.instance_29 = new lib.fa_sw_028();
	this.instance_29.parent = this;

	this.instance_30 = new lib.fa_sw_029();
	this.instance_30.parent = this;

	this.instance_31 = new lib.fa_sw_030();
	this.instance_31.parent = this;

	this.instance_32 = new lib.fa_sw_031();
	this.instance_32.parent = this;

	this.instance_33 = new lib.fa_sw_032();
	this.instance_33.parent = this;

	this.instance_34 = new lib.fa_sw_033();
	this.instance_34.parent = this;

	this.instance_35 = new lib.fa_sw_034();
	this.instance_35.parent = this;

	this.instance_36 = new lib.fa_sw_035();
	this.instance_36.parent = this;

	this.instance_37 = new lib.fa_sw_036();
	this.instance_37.parent = this;

	this.instance_38 = new lib.fa_sw_037();
	this.instance_38.parent = this;

	this.instance_39 = new lib.fa_sw_038();
	this.instance_39.parent = this;

	this.instance_40 = new lib.fa_sw_039();
	this.instance_40.parent = this;

	this.instance_41 = new lib.fa_sw_040();
	this.instance_41.parent = this;

	this.instance_42 = new lib.fa_sw_041();
	this.instance_42.parent = this;

	this.instance_43 = new lib.fa_sw_042();
	this.instance_43.parent = this;

	this.instance_44 = new lib.fa_sw_043();
	this.instance_44.parent = this;

	this.instance_45 = new lib.fa_sw_044();
	this.instance_45.parent = this;

	this.instance_46 = new lib.fa_sw_045();
	this.instance_46.parent = this;

	this.instance_47 = new lib.fa_sw_046();
	this.instance_47.parent = this;

	this.instance_48 = new lib.fa_sw_047();
	this.instance_48.parent = this;

	this.instance_49 = new lib.fa_sw_048();
	this.instance_49.parent = this;

	this.instance_50 = new lib.fa_sw_049();
	this.instance_50.parent = this;

	this.instance_51 = new lib.fa_sw_050();
	this.instance_51.parent = this;

	this.instance_52 = new lib.fa_sw_051();
	this.instance_52.parent = this;

	this.instance_53 = new lib.fa_sw_052();
	this.instance_53.parent = this;

	this.instance_54 = new lib.fa_sw_053();
	this.instance_54.parent = this;

	this.instance_55 = new lib.fa_sw_054();
	this.instance_55.parent = this;

	this.instance_56 = new lib.fa_sw_055();
	this.instance_56.parent = this;

	this.instance_57 = new lib.fa_sw_056();
	this.instance_57.parent = this;

	this.instance_58 = new lib.fa_sw_057();
	this.instance_58.parent = this;

	this.instance_59 = new lib.fa_sw_058();
	this.instance_59.parent = this;

	this.instance_60 = new lib.fa_sw_059();
	this.instance_60.parent = this;

	this.instance_61 = new lib.fa_sw_060();
	this.instance_61.parent = this;

	this.instance_62 = new lib.fa_sw_061();
	this.instance_62.parent = this;

	this.instance_63 = new lib.fa_sw_062();
	this.instance_63.parent = this;

	this.instance_64 = new lib.fa_sw_063();
	this.instance_64.parent = this;

	this.instance_65 = new lib.fa_sw_064();
	this.instance_65.parent = this;

	this.instance_66 = new lib.fa_sw_065();
	this.instance_66.parent = this;

	this.instance_67 = new lib.fa_sw_066();
	this.instance_67.parent = this;

	this.instance_68 = new lib.fa_sw_067();
	this.instance_68.parent = this;

	this.instance_69 = new lib.fa_sw_068();
	this.instance_69.parent = this;

	this.instance_70 = new lib.fa_sw_069();
	this.instance_70.parent = this;

	this.instance_71 = new lib.fa_sw_070();
	this.instance_71.parent = this;

	this.instance_72 = new lib.fa_sw_071();
	this.instance_72.parent = this;

	this.instance_73 = new lib.fa_sw_072();
	this.instance_73.parent = this;

	this.instance_74 = new lib.fa_sw_073();
	this.instance_74.parent = this;

	this.instance_75 = new lib.fa_sw_074();
	this.instance_75.parent = this;

	this.instance_76 = new lib.fa_sw_075();
	this.instance_76.parent = this;

	this.instance_77 = new lib.fa_sw_076();
	this.instance_77.parent = this;

	this.instance_78 = new lib.fa_sw_077();
	this.instance_78.parent = this;

	this.instance_79 = new lib.fa_sw_078();
	this.instance_79.parent = this;

	this.instance_80 = new lib.fa_sw_079();
	this.instance_80.parent = this;

	this.instance_81 = new lib.fa_sw_080();
	this.instance_81.parent = this;

	this.instance_82 = new lib.fa_sw_081();
	this.instance_82.parent = this;

	this.instance_83 = new lib.fa_sw_082();
	this.instance_83.parent = this;

	this.instance_84 = new lib.fa_sw_083();
	this.instance_84.parent = this;

	this.instance_85 = new lib.fa_sw_084();
	this.instance_85.parent = this;

	this.instance_86 = new lib.fa_sw_085();
	this.instance_86.parent = this;

	this.instance_87 = new lib.fa_sw_086();
	this.instance_87.parent = this;

	this.instance_88 = new lib.fa_sw_087();
	this.instance_88.parent = this;

	this.instance_89 = new lib.fa_sw_088();
	this.instance_89.parent = this;

	this.instance_90 = new lib.fa_sw_089();
	this.instance_90.parent = this;

	this.instance_91 = new lib.fa_sw_090();
	this.instance_91.parent = this;

	this.instance_92 = new lib.fa_sw_091();
	this.instance_92.parent = this;

	this.instance_93 = new lib.fa_sw_092();
	this.instance_93.parent = this;

	this.instance_94 = new lib.fa_sw_093();
	this.instance_94.parent = this;

	this.instance_95 = new lib.fa_sw_094();
	this.instance_95.parent = this;

	this.instance_96 = new lib.fa_sw_095();
	this.instance_96.parent = this;

	this.instance_97 = new lib.fa_sw_096();
	this.instance_97.parent = this;

	this.instance_98 = new lib.fa_sw_097();
	this.instance_98.parent = this;

	this.instance_99 = new lib.fa_sw_098();
	this.instance_99.parent = this;

	this.instance_100 = new lib.fa_sw_099();
	this.instance_100.parent = this;

	this.instance_101 = new lib.fa_sw_100();
	this.instance_101.parent = this;

	this.instance_102 = new lib.fa_sw_101();
	this.instance_102.parent = this;

	this.instance_103 = new lib.fa_sw_102();
	this.instance_103.parent = this;

	this.instance_104 = new lib.fa_sw_103();
	this.instance_104.parent = this;

	this.instance_105 = new lib.fa_sw_104();
	this.instance_105.parent = this;

	this.instance_106 = new lib.fa_sw_105();
	this.instance_106.parent = this;

	this.instance_107 = new lib.fa_sw_106();
	this.instance_107.parent = this;

	this.instance_108 = new lib.fa_sw_107();
	this.instance_108.parent = this;

	this.instance_109 = new lib.fa_sw_108();
	this.instance_109.parent = this;

	this.instance_110 = new lib.fa_sw_109();
	this.instance_110.parent = this;

	this.instance_111 = new lib.fa_sw_110();
	this.instance_111.parent = this;

	this.instance_112 = new lib.fa_sw_111();
	this.instance_112.parent = this;

	this.instance_113 = new lib.fa_sw_112();
	this.instance_113.parent = this;

	this.instance_114 = new lib.fa_sw_113();
	this.instance_114.parent = this;

	this.instance_115 = new lib.fa_sw_114();
	this.instance_115.parent = this;

	this.instance_116 = new lib.fa_sw_115();
	this.instance_116.parent = this;

	this.instance_117 = new lib.fa_sw_116();
	this.instance_117.parent = this;

	this.instance_118 = new lib.fa_sw_117();
	this.instance_118.parent = this;

	this.instance_119 = new lib.fa_sw_118();
	this.instance_119.parent = this;

	this.instance_120 = new lib.fa_sw_119();
	this.instance_120.parent = this;

	this.instance_121 = new lib.fa_sw_120();
	this.instance_121.parent = this;

	this.instance_122 = new lib.fa_sw_121();
	this.instance_122.parent = this;

	this.instance_123 = new lib.fa_sw_122();
	this.instance_123.parent = this;

	this.instance_124 = new lib.fa_sw_123();
	this.instance_124.parent = this;

	this.instance_125 = new lib.fa_sw_124();
	this.instance_125.parent = this;

	this.instance_126 = new lib.fa_sw_125();
	this.instance_126.parent = this;

	this.instance_127 = new lib.fa_sw_126();
	this.instance_127.parent = this;

	this.instance_128 = new lib.fa_sw_127();
	this.instance_128.parent = this;

	this.instance_129 = new lib.fa_sw_128();
	this.instance_129.parent = this;

	this.instance_130 = new lib.fa_sw_129();
	this.instance_130.parent = this;

	this.instance_131 = new lib.fa_sw_130();
	this.instance_131.parent = this;

	this.instance_132 = new lib.fa_sw_131();
	this.instance_132.parent = this;

	this.instance_133 = new lib.fa_sw_132();
	this.instance_133.parent = this;

	this.instance_134 = new lib.fa_sw_133();
	this.instance_134.parent = this;

	this.instance_135 = new lib.fa_sw_134();
	this.instance_135.parent = this;

	this.instance_136 = new lib.fa_sw_135();
	this.instance_136.parent = this;

	this.instance_137 = new lib.fa_sw_136();
	this.instance_137.parent = this;

	this.instance_138 = new lib.fa_sw_137();
	this.instance_138.parent = this;

	this.instance_139 = new lib.fa_sw_138();
	this.instance_139.parent = this;

	this.instance_140 = new lib.fa_sw_139();
	this.instance_140.parent = this;

	this.instance_141 = new lib.fa_sw_140();
	this.instance_141.parent = this;

	this.instance_142 = new lib.fa_sw_141();
	this.instance_142.parent = this;

	this.instance_143 = new lib.fa_sw_142();
	this.instance_143.parent = this;

	this.instance_144 = new lib.fa_sw_143();
	this.instance_144.parent = this;

	this.instance_145 = new lib.fa_sw_144();
	this.instance_145.parent = this;

	this.instance_146 = new lib.fa_sw_145();
	this.instance_146.parent = this;

	this.instance_147 = new lib.fa_sw_146();
	this.instance_147.parent = this;

	this.instance_148 = new lib.fa_sw_147();
	this.instance_148.parent = this;

	this.instance_149 = new lib.fa_sw_148();
	this.instance_149.parent = this;

	this.instance_150 = new lib.fa_sw_149();
	this.instance_150.parent = this;

	this.instance_151 = new lib.fa_sw_150();
	this.instance_151.parent = this;

	this.instance_152 = new lib.fa_sw_151();
	this.instance_152.parent = this;

	this.instance_153 = new lib.fa_sw_152();
	this.instance_153.parent = this;

	this.instance_154 = new lib.fa_sw_153();
	this.instance_154.parent = this;

	this.instance_155 = new lib.fa_sw_154();
	this.instance_155.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).to({state:[{t:this.instance_121}]},1).to({state:[{t:this.instance_122}]},1).to({state:[{t:this.instance_123}]},1).to({state:[{t:this.instance_124}]},1).to({state:[{t:this.instance_125}]},1).to({state:[{t:this.instance_126}]},1).to({state:[{t:this.instance_127}]},1).to({state:[{t:this.instance_128}]},1).to({state:[{t:this.instance_129}]},1).to({state:[{t:this.instance_130}]},1).to({state:[{t:this.instance_131}]},1).to({state:[{t:this.instance_132}]},1).to({state:[{t:this.instance_133}]},1).to({state:[{t:this.instance_134}]},1).to({state:[{t:this.instance_135}]},1).to({state:[{t:this.instance_136}]},1).to({state:[{t:this.instance_137}]},1).to({state:[{t:this.instance_138}]},1).to({state:[{t:this.instance_139}]},1).to({state:[{t:this.instance_140}]},1).to({state:[{t:this.instance_141}]},1).to({state:[{t:this.instance_142}]},1).to({state:[{t:this.instance_143}]},1).to({state:[{t:this.instance_144}]},1).to({state:[{t:this.instance_145}]},1).to({state:[{t:this.instance_146}]},1).to({state:[{t:this.instance_147}]},1).to({state:[{t:this.instance_148}]},1).to({state:[{t:this.instance_149}]},1).to({state:[{t:this.instance_150}]},1).to({state:[{t:this.instance_151}]},1).to({state:[{t:this.instance_152}]},1).to({state:[{t:this.instance_153}]},1).to({state:[{t:this.instance_154}]},1).to({state:[{t:this.instance_155}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.mc_facial_extra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop_0":0,"loop_1":30,"anime_1":50,"loop_2":55,"anime_2":75,"loop_3":160});

	// timeline functions:
	this.frame_0 = function() {
		this.alpha = 1;
		exportRoot.fn_changeFPS(10);
	}
	this.frame_20 = function() {
		if(clickFlag){
			this.gotoAndPlay("anime_1");
		}else{
			var jumpTo = "loop_0";
			var rndTotalNum = 8;
			exportRoot.fn_randomLoop(this, jumpTo, rndTotalNum);
		}
	}
	this.frame_30 = function() {
		exportRoot.fn_changeFPS(10);
	}
	this.frame_40 = function() {
		var jumpTo = "loop_1";
		var rndTotalNum = 6;
		exportRoot.fn_randomLoop(this, jumpTo, rndTotalNum);
	}
	this.frame_50 = function() {
		clickFlag
			? clickFlag = false
			: this.gotoAndPlay("loop_0");
	}
	this.frame_55 = function() {
		exportRoot.fn_changeFPS(10);
	}
	this.frame_74 = function() {
		checkFlag = true;
	}
	this.frame_75 = function() {
		if(checkFlag){
			checkFlag =false;
			if(clickFlag){
				exportRoot.fn_changeFPS();
				createjs.Tween.get(this)
					.to({scaleX: 1.3, scaleY: 1.3}, 500, createjs.Ease.cubicOut);
			}else{
				this.gotoAndPlay("loop_2");
			}
		}
		if(clickFlag){
			clickFlag = false;
			
			var s = createjs.Sound;
			var seNum = 0;
			var rnd = Math.floor(Math.random() * seArr[seNum]);
			console.log("se:"+rnd);
			s.play("se_" + seNum + rnd);
		}
	}
	this.frame_88 = function() {
		var s = createjs.Sound;
		var seNum = 0;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_102 = function() {
		var s = createjs.Sound;
		var seNum = 0;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_117 = function() {
		var s = createjs.Sound;
		var seNum = 0;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_133 = function() {
		var s = createjs.Sound;
		var seNum = 0;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_159 = function() {
		if(firstFlag){
			this.stop();
			firstFlag = false;
			clickFlag = true;
			createjs.Ticker.framerate = 5;
			createjs.Tween.get(this)
				.wait(2000)
				.set({scaleX: 1, scaleY: 1})
				.call(function (){
					this.gotoAndPlay("anime_2");
				});
		}else{
			firstFlag = true;
			createjs.Ticker.framerate = 20;
		}
	}
	this.frame_160 = function() {
		exportRoot.fn_changeFPS(10);
	}
	this.frame_180 = function() {
		if(clickFlag){
			clickFlag = false
			if(firstFlag){
				firstFlag = false;
				createjs.Tween.get(this, {override:true})
					.to({alpha:0}, 1000)
					.call(function (){
						firstFlag = true;
						this.alpha = 1;
						exportRoot.gotoAndStop("ending");
					});
			}
			this.gotoAndPlay("loop_3");
		}else{
			this.gotoAndPlay("loop_3");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(10).call(this.frame_30).wait(10).call(this.frame_40).wait(10).call(this.frame_50).wait(5).call(this.frame_55).wait(19).call(this.frame_74).wait(1).call(this.frame_75).wait(13).call(this.frame_88).wait(14).call(this.frame_102).wait(15).call(this.frame_117).wait(16).call(this.frame_133).wait(26).call(this.frame_159).wait(1).call(this.frame_160).wait(20).call(this.frame_180).wait(1));

	// fx
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("Egx/BYwMAAAixfMBj/AAAMAAACxfg");
	this.shape.setTransform(320,568);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("Egx/BYwMAAAixfMBj/AAAMAAACxfg");
	this.shape_1.setTransform(320.1,568.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},75).to({state:[]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[]},100).wait(1));

	// レイヤー_2
	this.instance = new lib.mc_cutinMassage();
	this.instance.parent = this;
	this.instance.setTransform(97,20.2,1,1,0,0,0,97,20.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55).to({_off:false},0).to({_off:true},20).wait(106));

	// anime
	this.instance_1 = new lib.fa_ex_000();
	this.instance_1.parent = this;

	this.instance_2 = new lib.fa_ex_001();
	this.instance_2.parent = this;

	this.instance_3 = new lib.fa_ex_002();
	this.instance_3.parent = this;

	this.instance_4 = new lib.fa_ex_003();
	this.instance_4.parent = this;

	this.instance_5 = new lib.fa_ex_004();
	this.instance_5.parent = this;

	this.instance_6 = new lib.fa_ex_005();
	this.instance_6.parent = this;

	this.instance_7 = new lib.fa_ex_006();
	this.instance_7.parent = this;

	this.instance_8 = new lib.fa_ex_007();
	this.instance_8.parent = this;

	this.instance_9 = new lib.fa_ex_008();
	this.instance_9.parent = this;

	this.instance_10 = new lib.fa_ex_009();
	this.instance_10.parent = this;

	this.instance_11 = new lib.fa_ex_010();
	this.instance_11.parent = this;

	this.instance_12 = new lib.fa_ex_011();
	this.instance_12.parent = this;

	this.instance_13 = new lib.fa_ex_012();
	this.instance_13.parent = this;

	this.instance_14 = new lib.fa_ex_013();
	this.instance_14.parent = this;

	this.instance_15 = new lib.fa_ex_014();
	this.instance_15.parent = this;

	this.instance_16 = new lib.fa_ex_015();
	this.instance_16.parent = this;

	this.instance_17 = new lib.fa_ex_016();
	this.instance_17.parent = this;

	this.instance_18 = new lib.fa_ex_017();
	this.instance_18.parent = this;

	this.instance_19 = new lib.fa_ex_018();
	this.instance_19.parent = this;

	this.instance_20 = new lib.fa_ex_019();
	this.instance_20.parent = this;

	this.instance_21 = new lib.fa_ex_020();
	this.instance_21.parent = this;

	this.instance_22 = new lib.fa_ex_021();
	this.instance_22.parent = this;

	this.instance_23 = new lib.fa_ex_022();
	this.instance_23.parent = this;

	this.instance_24 = new lib.fa_ex_023();
	this.instance_24.parent = this;

	this.instance_25 = new lib.fa_ex_024();
	this.instance_25.parent = this;

	this.instance_26 = new lib.fa_ex_025();
	this.instance_26.parent = this;

	this.instance_27 = new lib.fa_ex_026();
	this.instance_27.parent = this;

	this.instance_28 = new lib.fa_ex_027();
	this.instance_28.parent = this;

	this.instance_29 = new lib.fa_ex_028();
	this.instance_29.parent = this;

	this.instance_30 = new lib.fa_ex_029();
	this.instance_30.parent = this;

	this.instance_31 = new lib.fa_ex_030();
	this.instance_31.parent = this;

	this.instance_32 = new lib.fa_ex_031();
	this.instance_32.parent = this;

	this.instance_33 = new lib.fa_ex_032();
	this.instance_33.parent = this;

	this.instance_34 = new lib.fa_ex_033();
	this.instance_34.parent = this;

	this.instance_35 = new lib.fa_ex_034();
	this.instance_35.parent = this;

	this.instance_36 = new lib.fa_ex_035();
	this.instance_36.parent = this;

	this.instance_37 = new lib.fa_ex_036();
	this.instance_37.parent = this;

	this.instance_38 = new lib.fa_ex_037();
	this.instance_38.parent = this;

	this.instance_39 = new lib.fa_ex_038();
	this.instance_39.parent = this;

	this.instance_40 = new lib.fa_ex_039();
	this.instance_40.parent = this;

	this.instance_41 = new lib.fa_ex_040();
	this.instance_41.parent = this;

	this.instance_42 = new lib.fa_ex_041();
	this.instance_42.parent = this;

	this.instance_43 = new lib.fa_ex_042();
	this.instance_43.parent = this;

	this.instance_44 = new lib.fa_ex_043();
	this.instance_44.parent = this;

	this.instance_45 = new lib.fa_ex_044();
	this.instance_45.parent = this;

	this.instance_46 = new lib.fa_ex_045();
	this.instance_46.parent = this;

	this.instance_47 = new lib.fa_ex_046();
	this.instance_47.parent = this;

	this.instance_48 = new lib.fa_ex_047();
	this.instance_48.parent = this;

	this.instance_49 = new lib.fa_ex_048();
	this.instance_49.parent = this;

	this.instance_50 = new lib.fa_ex_049();
	this.instance_50.parent = this;

	this.instance_51 = new lib.fa_ex_050();
	this.instance_51.parent = this;

	this.instance_52 = new lib.fa_ex_051();
	this.instance_52.parent = this;

	this.instance_53 = new lib.fa_ex_052();
	this.instance_53.parent = this;

	this.instance_54 = new lib.fa_ex_053();
	this.instance_54.parent = this;

	this.instance_55 = new lib.fa_ex_054();
	this.instance_55.parent = this;

	this.instance_56 = new lib.fa_ex_055();
	this.instance_56.parent = this;

	this.instance_57 = new lib.fa_ex_056();
	this.instance_57.parent = this;

	this.instance_58 = new lib.fa_ex_057();
	this.instance_58.parent = this;

	this.instance_59 = new lib.fa_ex_058();
	this.instance_59.parent = this;

	this.instance_60 = new lib.fa_ex_059();
	this.instance_60.parent = this;

	this.instance_61 = new lib.fa_ex_060();
	this.instance_61.parent = this;

	this.instance_62 = new lib.fa_ex_061();
	this.instance_62.parent = this;

	this.instance_63 = new lib.fa_ex_062();
	this.instance_63.parent = this;

	this.instance_64 = new lib.fa_ex_063();
	this.instance_64.parent = this;

	this.instance_65 = new lib.fa_ex_064();
	this.instance_65.parent = this;

	this.instance_66 = new lib.fa_ex_065();
	this.instance_66.parent = this;

	this.instance_67 = new lib.fa_ex_066();
	this.instance_67.parent = this;

	this.instance_68 = new lib.fa_ex_067();
	this.instance_68.parent = this;

	this.instance_69 = new lib.fa_ex_068();
	this.instance_69.parent = this;

	this.instance_70 = new lib.fa_ex_069();
	this.instance_70.parent = this;

	this.instance_71 = new lib.fa_ex_070();
	this.instance_71.parent = this;

	this.instance_72 = new lib.fa_ex_071();
	this.instance_72.parent = this;

	this.instance_73 = new lib.fa_ex_072();
	this.instance_73.parent = this;

	this.instance_74 = new lib.fa_ex_073();
	this.instance_74.parent = this;

	this.instance_75 = new lib.fa_ex_074();
	this.instance_75.parent = this;

	this.instance_76 = new lib.fa_ex_075();
	this.instance_76.parent = this;

	this.instance_77 = new lib.fa_ex_076();
	this.instance_77.parent = this;

	this.instance_78 = new lib.fa_ex_077();
	this.instance_78.parent = this;

	this.instance_79 = new lib.fa_ex_078();
	this.instance_79.parent = this;

	this.instance_80 = new lib.fa_ex_079();
	this.instance_80.parent = this;

	this.instance_81 = new lib.fa_ex_080();
	this.instance_81.parent = this;

	this.instance_82 = new lib.fa_ex_081();
	this.instance_82.parent = this;

	this.instance_83 = new lib.fa_ex_082();
	this.instance_83.parent = this;

	this.instance_84 = new lib.fa_ex_083();
	this.instance_84.parent = this;

	this.instance_85 = new lib.fa_ex_084();
	this.instance_85.parent = this;

	this.instance_86 = new lib.fa_ex_085();
	this.instance_86.parent = this;

	this.instance_87 = new lib.fa_ex_086();
	this.instance_87.parent = this;

	this.instance_88 = new lib.fa_ex_087();
	this.instance_88.parent = this;

	this.instance_89 = new lib.fa_ex_088();
	this.instance_89.parent = this;

	this.instance_90 = new lib.fa_ex_089();
	this.instance_90.parent = this;

	this.instance_91 = new lib.fa_ex_090();
	this.instance_91.parent = this;

	this.instance_92 = new lib.fa_ex_091();
	this.instance_92.parent = this;

	this.instance_93 = new lib.fa_ex_092();
	this.instance_93.parent = this;

	this.instance_94 = new lib.fa_ex_093();
	this.instance_94.parent = this;

	this.instance_95 = new lib.fa_ex_094();
	this.instance_95.parent = this;

	this.instance_96 = new lib.fa_ex_095();
	this.instance_96.parent = this;

	this.instance_97 = new lib.fa_ex_096();
	this.instance_97.parent = this;

	this.instance_98 = new lib.fa_ex_097();
	this.instance_98.parent = this;

	this.instance_99 = new lib.fa_ex_098();
	this.instance_99.parent = this;

	this.instance_100 = new lib.fa_ex_099();
	this.instance_100.parent = this;

	this.instance_101 = new lib.fa_ex_100();
	this.instance_101.parent = this;

	this.instance_102 = new lib.fa_ex_101();
	this.instance_102.parent = this;

	this.instance_103 = new lib.fa_ex_102();
	this.instance_103.parent = this;

	this.instance_104 = new lib.fa_ex_103();
	this.instance_104.parent = this;

	this.instance_105 = new lib.fa_ex_104();
	this.instance_105.parent = this;

	this.instance_106 = new lib.fa_ex_105();
	this.instance_106.parent = this;

	this.instance_107 = new lib.fa_ex_106();
	this.instance_107.parent = this;

	this.instance_108 = new lib.fa_ex_107();
	this.instance_108.parent = this;

	this.instance_109 = new lib.fa_ex_108();
	this.instance_109.parent = this;

	this.instance_110 = new lib.fa_ex_109();
	this.instance_110.parent = this;

	this.instance_111 = new lib.fa_ex_110();
	this.instance_111.parent = this;

	this.instance_112 = new lib.fa_ex_111();
	this.instance_112.parent = this;

	this.instance_113 = new lib.fa_ex_112();
	this.instance_113.parent = this;

	this.instance_114 = new lib.fa_ex_113();
	this.instance_114.parent = this;

	this.instance_115 = new lib.fa_ex_114();
	this.instance_115.parent = this;

	this.instance_116 = new lib.fa_ex_115();
	this.instance_116.parent = this;

	this.instance_117 = new lib.fa_ex_116();
	this.instance_117.parent = this;

	this.instance_118 = new lib.fa_ex_117();
	this.instance_118.parent = this;

	this.instance_119 = new lib.fa_ex_118();
	this.instance_119.parent = this;

	this.instance_120 = new lib.fa_ex_119();
	this.instance_120.parent = this;

	this.instance_121 = new lib.fa_ex_120();
	this.instance_121.parent = this;

	this.instance_122 = new lib.fa_ex_121();
	this.instance_122.parent = this;

	this.instance_123 = new lib.fa_ex_122();
	this.instance_123.parent = this;

	this.instance_124 = new lib.fa_ex_123();
	this.instance_124.parent = this;

	this.instance_125 = new lib.fa_ex_124();
	this.instance_125.parent = this;

	this.instance_126 = new lib.fa_ex_125();
	this.instance_126.parent = this;

	this.instance_127 = new lib.fa_ex_126();
	this.instance_127.parent = this;

	this.instance_128 = new lib.fa_ex_127();
	this.instance_128.parent = this;

	this.instance_129 = new lib.fa_ex_128();
	this.instance_129.parent = this;

	this.instance_130 = new lib.fa_ex_129();
	this.instance_130.parent = this;

	this.instance_131 = new lib.fa_ex_130();
	this.instance_131.parent = this;

	this.instance_132 = new lib.fa_ex_131();
	this.instance_132.parent = this;

	this.instance_133 = new lib.fa_ex_132();
	this.instance_133.parent = this;

	this.instance_134 = new lib.fa_ex_133();
	this.instance_134.parent = this;

	this.instance_135 = new lib.fa_ex_134();
	this.instance_135.parent = this;

	this.instance_136 = new lib.fa_ex_135();
	this.instance_136.parent = this;

	this.instance_137 = new lib.fa_ex_136();
	this.instance_137.parent = this;

	this.instance_138 = new lib.fa_ex_137();
	this.instance_138.parent = this;

	this.instance_139 = new lib.fa_ex_138();
	this.instance_139.parent = this;

	this.instance_140 = new lib.fa_ex_139();
	this.instance_140.parent = this;

	this.instance_141 = new lib.fa_ex_140();
	this.instance_141.parent = this;

	this.instance_142 = new lib.fa_ex_141();
	this.instance_142.parent = this;

	this.instance_143 = new lib.fa_ex_142();
	this.instance_143.parent = this;

	this.instance_144 = new lib.fa_ex_143();
	this.instance_144.parent = this;

	this.instance_145 = new lib.fa_ex_144();
	this.instance_145.parent = this;

	this.instance_146 = new lib.fa_ex_145();
	this.instance_146.parent = this;

	this.instance_147 = new lib.fa_ex_146();
	this.instance_147.parent = this;

	this.instance_148 = new lib.fa_ex_147();
	this.instance_148.parent = this;

	this.instance_149 = new lib.fa_ex_148();
	this.instance_149.parent = this;

	this.instance_150 = new lib.fa_ex_149();
	this.instance_150.parent = this;

	this.instance_151 = new lib.fa_ex_150();
	this.instance_151.parent = this;

	this.instance_152 = new lib.fa_ex_151();
	this.instance_152.parent = this;

	this.instance_153 = new lib.fa_ex_152();
	this.instance_153.parent = this;

	this.instance_154 = new lib.fa_ex_153();
	this.instance_154.parent = this;

	this.instance_155 = new lib.fa_ex_154();
	this.instance_155.parent = this;

	this.instance_156 = new lib.fa_ex_155();
	this.instance_156.parent = this;

	this.instance_157 = new lib.fa_ex_156();
	this.instance_157.parent = this;

	this.instance_158 = new lib.fa_ex_157();
	this.instance_158.parent = this;

	this.instance_159 = new lib.fa_ex_158();
	this.instance_159.parent = this;

	this.instance_160 = new lib.fa_ex_159();
	this.instance_160.parent = this;

	this.instance_161 = new lib.fa_ex_160();
	this.instance_161.parent = this;

	this.instance_162 = new lib.fa_ex_161();
	this.instance_162.parent = this;

	this.instance_163 = new lib.fa_ex_162();
	this.instance_163.parent = this;

	this.instance_164 = new lib.fa_ex_163();
	this.instance_164.parent = this;

	this.instance_165 = new lib.fa_ex_164();
	this.instance_165.parent = this;

	this.instance_166 = new lib.fa_ex_165();
	this.instance_166.parent = this;

	this.instance_167 = new lib.fa_ex_166();
	this.instance_167.parent = this;

	this.instance_168 = new lib.fa_ex_167();
	this.instance_168.parent = this;

	this.instance_169 = new lib.fa_ex_168();
	this.instance_169.parent = this;

	this.instance_170 = new lib.fa_ex_169();
	this.instance_170.parent = this;

	this.instance_171 = new lib.fa_ex_170();
	this.instance_171.parent = this;

	this.instance_172 = new lib.fa_ex_171();
	this.instance_172.parent = this;

	this.instance_173 = new lib.fa_ex_172();
	this.instance_173.parent = this;

	this.instance_174 = new lib.fa_ex_173();
	this.instance_174.parent = this;

	this.instance_175 = new lib.fa_ex_174();
	this.instance_175.parent = this;

	this.instance_176 = new lib.fa_ex_175();
	this.instance_176.parent = this;

	this.instance_177 = new lib.fa_ex_176();
	this.instance_177.parent = this;

	this.instance_178 = new lib.fa_ex_177();
	this.instance_178.parent = this;

	this.instance_179 = new lib.fa_ex_178();
	this.instance_179.parent = this;

	this.instance_180 = new lib.fa_ex_179();
	this.instance_180.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).to({state:[{t:this.instance_121}]},1).to({state:[{t:this.instance_122}]},1).to({state:[{t:this.instance_123}]},1).to({state:[{t:this.instance_124}]},1).to({state:[{t:this.instance_125}]},1).to({state:[{t:this.instance_126}]},1).to({state:[{t:this.instance_127}]},1).to({state:[{t:this.instance_128}]},1).to({state:[{t:this.instance_129}]},1).to({state:[{t:this.instance_130}]},1).to({state:[{t:this.instance_131}]},1).to({state:[{t:this.instance_132}]},1).to({state:[{t:this.instance_133}]},1).to({state:[{t:this.instance_134}]},1).to({state:[{t:this.instance_135}]},1).to({state:[{t:this.instance_136}]},1).to({state:[{t:this.instance_137}]},1).to({state:[{t:this.instance_138}]},1).to({state:[{t:this.instance_139}]},1).to({state:[{t:this.instance_140}]},1).to({state:[{t:this.instance_141}]},1).to({state:[{t:this.instance_142}]},1).to({state:[{t:this.instance_143}]},1).to({state:[{t:this.instance_144}]},1).to({state:[{t:this.instance_145}]},1).to({state:[{t:this.instance_146}]},1).to({state:[{t:this.instance_147}]},1).to({state:[{t:this.instance_148}]},1).to({state:[{t:this.instance_149}]},1).to({state:[{t:this.instance_150}]},1).to({state:[{t:this.instance_151}]},1).to({state:[{t:this.instance_152}]},1).to({state:[{t:this.instance_153}]},1).to({state:[{t:this.instance_154}]},1).to({state:[{t:this.instance_155}]},1).to({state:[{t:this.instance_156}]},1).to({state:[{t:this.instance_157}]},1).to({state:[{t:this.instance_158}]},1).to({state:[{t:this.instance_159}]},1).to({state:[{t:this.instance_160}]},1).to({state:[{t:this.instance_161}]},1).to({state:[{t:this.instance_162}]},1).to({state:[{t:this.instance_163}]},1).to({state:[{t:this.instance_164}]},1).to({state:[{t:this.instance_165}]},1).to({state:[{t:this.instance_166}]},1).to({state:[{t:this.instance_167}]},1).to({state:[{t:this.instance_168}]},1).to({state:[{t:this.instance_169}]},1).to({state:[{t:this.instance_170}]},1).to({state:[{t:this.instance_171}]},1).to({state:[{t:this.instance_172}]},1).to({state:[{t:this.instance_173}]},1).to({state:[{t:this.instance_174}]},1).to({state:[{t:this.instance_175}]},1).to({state:[{t:this.instance_176}]},1).to({state:[{t:this.instance_177}]},1).to({state:[{t:this.instance_178}]},1).to({state:[{t:this.instance_179}]},1).to({state:[{t:this.instance_180}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.mc_blowjob_sweaty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop_0":0,"anime_1":40,"loop_1":50,"loop_2":178});

	// timeline functions:
	this.frame_0 = function() {
		this.alpha = 1;
		exportRoot.fn_changeFPS(10);
	}
	this.frame_19 = function() {
		var s = createjs.Sound;
		var seNum = 1;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_20 = function() {
		if(clickFlag){
			this.gotoAndPlay("anime_1");
		}else{
			var jumpTo = "loop_0";
			var rndTotalNum = 8;
			exportRoot.fn_randomLoop(this, jumpTo, rndTotalNum);
		}
	}
	this.frame_40 = function() {
		clickFlag
			? clickFlag = false
			: this.gotoAndPlay("loop_0");
	}
	this.frame_50 = function() {
		exportRoot.fn_changeFPS(10);
	}
	this.frame_59 = function() {
		var s = createjs.Sound;
		var seNum = 1;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_60 = function() {
		if(clickFlag){
			clickFlag = false
			exportRoot.fn_changeFPS();
			createjs.Tween.get(this)
				.to({scaleX: 1.3, scaleY: 1.3}, 500, createjs.Ease.cubicOut)
		}else{
			this.gotoAndPlay("loop_1");
		}
	}
	this.frame_61 = function() {
		var s = createjs.Sound;
		var seNum = 6;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_71 = function() {
		var s = createjs.Sound;
		var seNum = 6;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_86 = function() {
		var s = createjs.Sound;
		var seNum = 6;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_101 = function() {
		var s = createjs.Sound;
		var seNum = 6;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_121 = function() {
		var s = createjs.Sound;
		var seNum = 6;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_157 = function() {
		this.stop();
		createjs.Tween.get(this)
			.wait(600)
			.call(function(){
				var s = createjs.Sound;
				s.play("se_74");
			})
			.wait(1900)
			.call(function(){
				this.play();
			});
	}
	this.frame_177 = function() {
		createjs.Tween.get(this)
			.to({scaleX: 1, scaleY: 1}, 500, createjs.Ease.cubicOut)
	}
	this.frame_179 = function() {
		if(clickFlag){
			clickFlag = false
			if(firstFlag){
				firstFlag = false;
				createjs.Tween.get(this, {override:true})
					.to({alpha:0}, 1000)
					.call(function (){
						firstFlag = true;
						this.alpha = 1;
						exportRoot.gotoAndStop("ending");
					});
			}
			this.gotoAndPlay("loop_2");
		}else{
			this.gotoAndPlay("loop_2");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1).call(this.frame_20).wait(20).call(this.frame_40).wait(10).call(this.frame_50).wait(9).call(this.frame_59).wait(1).call(this.frame_60).wait(1).call(this.frame_61).wait(10).call(this.frame_71).wait(15).call(this.frame_86).wait(15).call(this.frame_101).wait(20).call(this.frame_121).wait(36).call(this.frame_157).wait(20).call(this.frame_177).wait(2).call(this.frame_179).wait(1));

	// レイヤー_3
	this.instance = new lib.mc_cutinMassage();
	this.instance.parent = this;
	this.instance.setTransform(97,20.2,1,1,0,0,0,97,20.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({_off:false},0).to({_off:true},10).wait(120));

	// fx
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("Egx/BYwMAAAixfMBj/AAAMAAACxfg");
	this.shape.setTransform(320,568);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("Egx/BYwMAAAixfMBj/AAAMAAACxfg");
	this.shape_1.setTransform(320.1,568.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},60).to({state:[]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(117));

	// anime
	this.instance_1 = new lib.bl_sw_000();
	this.instance_1.parent = this;

	this.instance_2 = new lib.bl_sw_001();
	this.instance_2.parent = this;

	this.instance_3 = new lib.bl_sw_002();
	this.instance_3.parent = this;

	this.instance_4 = new lib.bl_sw_003();
	this.instance_4.parent = this;

	this.instance_5 = new lib.bl_sw_004();
	this.instance_5.parent = this;

	this.instance_6 = new lib.bl_sw_005();
	this.instance_6.parent = this;

	this.instance_7 = new lib.bl_sw_006();
	this.instance_7.parent = this;

	this.instance_8 = new lib.bl_sw_007();
	this.instance_8.parent = this;

	this.instance_9 = new lib.bl_sw_008();
	this.instance_9.parent = this;

	this.instance_10 = new lib.bl_sw_009();
	this.instance_10.parent = this;

	this.instance_11 = new lib.bl_sw_010();
	this.instance_11.parent = this;

	this.instance_12 = new lib.bl_sw_011();
	this.instance_12.parent = this;

	this.instance_13 = new lib.bl_sw_012();
	this.instance_13.parent = this;

	this.instance_14 = new lib.bl_sw_013();
	this.instance_14.parent = this;

	this.instance_15 = new lib.bl_sw_014();
	this.instance_15.parent = this;

	this.instance_16 = new lib.bl_sw_015();
	this.instance_16.parent = this;

	this.instance_17 = new lib.bl_sw_016();
	this.instance_17.parent = this;

	this.instance_18 = new lib.bl_sw_017();
	this.instance_18.parent = this;

	this.instance_19 = new lib.bl_sw_018();
	this.instance_19.parent = this;

	this.instance_20 = new lib.bl_sw_019();
	this.instance_20.parent = this;

	this.instance_21 = new lib.bl_sw_020();
	this.instance_21.parent = this;

	this.instance_22 = new lib.bl_sw_021();
	this.instance_22.parent = this;

	this.instance_23 = new lib.bl_sw_022();
	this.instance_23.parent = this;

	this.instance_24 = new lib.bl_sw_023();
	this.instance_24.parent = this;

	this.instance_25 = new lib.bl_sw_024();
	this.instance_25.parent = this;

	this.instance_26 = new lib.bl_sw_025();
	this.instance_26.parent = this;

	this.instance_27 = new lib.bl_sw_026();
	this.instance_27.parent = this;

	this.instance_28 = new lib.bl_sw_027();
	this.instance_28.parent = this;

	this.instance_29 = new lib.bl_sw_028();
	this.instance_29.parent = this;

	this.instance_30 = new lib.bl_sw_029();
	this.instance_30.parent = this;

	this.instance_31 = new lib.bl_sw_030();
	this.instance_31.parent = this;

	this.instance_32 = new lib.bl_sw_031();
	this.instance_32.parent = this;

	this.instance_33 = new lib.bl_sw_032();
	this.instance_33.parent = this;

	this.instance_34 = new lib.bl_sw_033();
	this.instance_34.parent = this;

	this.instance_35 = new lib.bl_sw_034();
	this.instance_35.parent = this;

	this.instance_36 = new lib.bl_sw_035();
	this.instance_36.parent = this;

	this.instance_37 = new lib.bl_sw_036();
	this.instance_37.parent = this;

	this.instance_38 = new lib.bl_sw_037();
	this.instance_38.parent = this;

	this.instance_39 = new lib.bl_sw_038();
	this.instance_39.parent = this;

	this.instance_40 = new lib.bl_sw_039();
	this.instance_40.parent = this;

	this.instance_41 = new lib.bl_sw_040();
	this.instance_41.parent = this;

	this.instance_42 = new lib.bl_sw_041();
	this.instance_42.parent = this;

	this.instance_43 = new lib.bl_sw_042();
	this.instance_43.parent = this;

	this.instance_44 = new lib.bl_sw_043();
	this.instance_44.parent = this;

	this.instance_45 = new lib.bl_sw_044();
	this.instance_45.parent = this;

	this.instance_46 = new lib.bl_sw_045();
	this.instance_46.parent = this;

	this.instance_47 = new lib.bl_sw_046();
	this.instance_47.parent = this;

	this.instance_48 = new lib.bl_sw_047();
	this.instance_48.parent = this;

	this.instance_49 = new lib.bl_sw_048();
	this.instance_49.parent = this;

	this.instance_50 = new lib.bl_sw_049();
	this.instance_50.parent = this;

	this.instance_51 = new lib.bl_sw_050();
	this.instance_51.parent = this;

	this.instance_52 = new lib.bl_sw_051();
	this.instance_52.parent = this;

	this.instance_53 = new lib.bl_sw_052();
	this.instance_53.parent = this;

	this.instance_54 = new lib.bl_sw_053();
	this.instance_54.parent = this;

	this.instance_55 = new lib.bl_sw_054();
	this.instance_55.parent = this;

	this.instance_56 = new lib.bl_sw_055();
	this.instance_56.parent = this;

	this.instance_57 = new lib.bl_sw_056();
	this.instance_57.parent = this;

	this.instance_58 = new lib.bl_sw_057();
	this.instance_58.parent = this;

	this.instance_59 = new lib.bl_sw_058();
	this.instance_59.parent = this;

	this.instance_60 = new lib.bl_sw_059();
	this.instance_60.parent = this;

	this.instance_61 = new lib.bl_sw_060();
	this.instance_61.parent = this;

	this.instance_62 = new lib.bl_sw_061();
	this.instance_62.parent = this;

	this.instance_63 = new lib.bl_sw_062();
	this.instance_63.parent = this;

	this.instance_64 = new lib.bl_sw_063();
	this.instance_64.parent = this;

	this.instance_65 = new lib.bl_sw_064();
	this.instance_65.parent = this;

	this.instance_66 = new lib.bl_sw_065();
	this.instance_66.parent = this;

	this.instance_67 = new lib.bl_sw_066();
	this.instance_67.parent = this;

	this.instance_68 = new lib.bl_sw_067();
	this.instance_68.parent = this;

	this.instance_69 = new lib.bl_sw_068();
	this.instance_69.parent = this;

	this.instance_70 = new lib.bl_sw_069();
	this.instance_70.parent = this;

	this.instance_71 = new lib.bl_sw_070();
	this.instance_71.parent = this;

	this.instance_72 = new lib.bl_sw_071();
	this.instance_72.parent = this;

	this.instance_73 = new lib.bl_sw_072();
	this.instance_73.parent = this;

	this.instance_74 = new lib.bl_sw_073();
	this.instance_74.parent = this;

	this.instance_75 = new lib.bl_sw_074();
	this.instance_75.parent = this;

	this.instance_76 = new lib.bl_sw_075();
	this.instance_76.parent = this;

	this.instance_77 = new lib.bl_sw_076();
	this.instance_77.parent = this;

	this.instance_78 = new lib.bl_sw_077();
	this.instance_78.parent = this;

	this.instance_79 = new lib.bl_sw_078();
	this.instance_79.parent = this;

	this.instance_80 = new lib.bl_sw_079();
	this.instance_80.parent = this;

	this.instance_81 = new lib.bl_sw_080();
	this.instance_81.parent = this;

	this.instance_82 = new lib.bl_sw_081();
	this.instance_82.parent = this;

	this.instance_83 = new lib.bl_sw_082();
	this.instance_83.parent = this;

	this.instance_84 = new lib.bl_sw_083();
	this.instance_84.parent = this;

	this.instance_85 = new lib.bl_sw_084();
	this.instance_85.parent = this;

	this.instance_86 = new lib.bl_sw_085();
	this.instance_86.parent = this;

	this.instance_87 = new lib.bl_sw_086();
	this.instance_87.parent = this;

	this.instance_88 = new lib.bl_sw_087();
	this.instance_88.parent = this;

	this.instance_89 = new lib.bl_sw_088();
	this.instance_89.parent = this;

	this.instance_90 = new lib.bl_sw_089();
	this.instance_90.parent = this;

	this.instance_91 = new lib.bl_sw_090();
	this.instance_91.parent = this;

	this.instance_92 = new lib.bl_sw_091();
	this.instance_92.parent = this;

	this.instance_93 = new lib.bl_sw_092();
	this.instance_93.parent = this;

	this.instance_94 = new lib.bl_sw_093();
	this.instance_94.parent = this;

	this.instance_95 = new lib.bl_sw_094();
	this.instance_95.parent = this;

	this.instance_96 = new lib.bl_sw_095();
	this.instance_96.parent = this;

	this.instance_97 = new lib.bl_sw_096();
	this.instance_97.parent = this;

	this.instance_98 = new lib.bl_sw_097();
	this.instance_98.parent = this;

	this.instance_99 = new lib.bl_sw_098();
	this.instance_99.parent = this;

	this.instance_100 = new lib.bl_sw_099();
	this.instance_100.parent = this;

	this.instance_101 = new lib.bl_sw_100();
	this.instance_101.parent = this;

	this.instance_102 = new lib.bl_sw_101();
	this.instance_102.parent = this;

	this.instance_103 = new lib.bl_sw_102();
	this.instance_103.parent = this;

	this.instance_104 = new lib.bl_sw_103();
	this.instance_104.parent = this;

	this.instance_105 = new lib.bl_sw_104();
	this.instance_105.parent = this;

	this.instance_106 = new lib.bl_sw_105();
	this.instance_106.parent = this;

	this.instance_107 = new lib.bl_sw_106();
	this.instance_107.parent = this;

	this.instance_108 = new lib.bl_sw_107();
	this.instance_108.parent = this;

	this.instance_109 = new lib.bl_sw_108();
	this.instance_109.parent = this;

	this.instance_110 = new lib.bl_sw_109();
	this.instance_110.parent = this;

	this.instance_111 = new lib.bl_sw_110();
	this.instance_111.parent = this;

	this.instance_112 = new lib.bl_sw_111();
	this.instance_112.parent = this;

	this.instance_113 = new lib.bl_sw_112();
	this.instance_113.parent = this;

	this.instance_114 = new lib.bl_sw_113();
	this.instance_114.parent = this;

	this.instance_115 = new lib.bl_sw_114();
	this.instance_115.parent = this;

	this.instance_116 = new lib.bl_sw_115();
	this.instance_116.parent = this;

	this.instance_117 = new lib.bl_sw_116();
	this.instance_117.parent = this;

	this.instance_118 = new lib.bl_sw_117();
	this.instance_118.parent = this;

	this.instance_119 = new lib.bl_sw_118();
	this.instance_119.parent = this;

	this.instance_120 = new lib.bl_sw_119();
	this.instance_120.parent = this;

	this.instance_121 = new lib.bl_sw_120();
	this.instance_121.parent = this;

	this.instance_122 = new lib.bl_sw_121();
	this.instance_122.parent = this;

	this.instance_123 = new lib.bl_sw_122();
	this.instance_123.parent = this;

	this.instance_124 = new lib.bl_sw_123();
	this.instance_124.parent = this;

	this.instance_125 = new lib.bl_sw_124();
	this.instance_125.parent = this;

	this.instance_126 = new lib.bl_sw_125();
	this.instance_126.parent = this;

	this.instance_127 = new lib.bl_sw_126();
	this.instance_127.parent = this;

	this.instance_128 = new lib.bl_sw_127();
	this.instance_128.parent = this;

	this.instance_129 = new lib.bl_sw_128();
	this.instance_129.parent = this;

	this.instance_130 = new lib.bl_sw_129();
	this.instance_130.parent = this;

	this.instance_131 = new lib.bl_sw_130();
	this.instance_131.parent = this;

	this.instance_132 = new lib.bl_sw_131();
	this.instance_132.parent = this;

	this.instance_133 = new lib.bl_sw_132();
	this.instance_133.parent = this;

	this.instance_134 = new lib.bl_sw_133();
	this.instance_134.parent = this;

	this.instance_135 = new lib.bl_sw_134();
	this.instance_135.parent = this;

	this.instance_136 = new lib.bl_sw_135();
	this.instance_136.parent = this;

	this.instance_137 = new lib.bl_sw_136();
	this.instance_137.parent = this;

	this.instance_138 = new lib.bl_sw_137();
	this.instance_138.parent = this;

	this.instance_139 = new lib.bl_sw_138();
	this.instance_139.parent = this;

	this.instance_140 = new lib.bl_sw_139();
	this.instance_140.parent = this;

	this.instance_141 = new lib.bl_sw_140();
	this.instance_141.parent = this;

	this.instance_142 = new lib.bl_sw_141();
	this.instance_142.parent = this;

	this.instance_143 = new lib.bl_sw_142();
	this.instance_143.parent = this;

	this.instance_144 = new lib.bl_sw_143();
	this.instance_144.parent = this;

	this.instance_145 = new lib.bl_sw_144();
	this.instance_145.parent = this;

	this.instance_146 = new lib.bl_sw_145();
	this.instance_146.parent = this;

	this.instance_147 = new lib.bl_sw_146();
	this.instance_147.parent = this;

	this.instance_148 = new lib.bl_sw_147();
	this.instance_148.parent = this;

	this.instance_149 = new lib.bl_sw_148();
	this.instance_149.parent = this;

	this.instance_150 = new lib.bl_sw_149();
	this.instance_150.parent = this;

	this.instance_151 = new lib.bl_sw_150();
	this.instance_151.parent = this;

	this.instance_152 = new lib.bl_sw_151();
	this.instance_152.parent = this;

	this.instance_153 = new lib.bl_sw_152();
	this.instance_153.parent = this;

	this.instance_154 = new lib.bl_sw_153();
	this.instance_154.parent = this;

	this.instance_155 = new lib.bl_sw_154();
	this.instance_155.parent = this;

	this.instance_156 = new lib.bl_sw_155();
	this.instance_156.parent = this;

	this.instance_157 = new lib.bl_sw_156();
	this.instance_157.parent = this;

	this.instance_158 = new lib.bl_sw_157();
	this.instance_158.parent = this;

	this.instance_159 = new lib.bl_sw_158();
	this.instance_159.parent = this;

	this.instance_160 = new lib.bl_sw_159();
	this.instance_160.parent = this;

	this.instance_161 = new lib.bl_sw_160();
	this.instance_161.parent = this;

	this.instance_162 = new lib.bl_sw_161();
	this.instance_162.parent = this;

	this.instance_163 = new lib.bl_sw_162();
	this.instance_163.parent = this;

	this.instance_164 = new lib.bl_sw_163();
	this.instance_164.parent = this;

	this.instance_165 = new lib.bl_sw_164();
	this.instance_165.parent = this;

	this.instance_166 = new lib.bl_sw_165();
	this.instance_166.parent = this;

	this.instance_167 = new lib.bl_sw_166();
	this.instance_167.parent = this;

	this.instance_168 = new lib.bl_sw_167();
	this.instance_168.parent = this;

	this.instance_169 = new lib.bl_sw_168();
	this.instance_169.parent = this;

	this.instance_170 = new lib.bl_sw_169();
	this.instance_170.parent = this;

	this.instance_171 = new lib.bl_sw_170();
	this.instance_171.parent = this;

	this.instance_172 = new lib.bl_sw_171();
	this.instance_172.parent = this;

	this.instance_173 = new lib.bl_sw_172();
	this.instance_173.parent = this;

	this.instance_174 = new lib.bl_sw_173();
	this.instance_174.parent = this;

	this.instance_175 = new lib.bl_sw_174();
	this.instance_175.parent = this;

	this.instance_176 = new lib.bl_sw_175();
	this.instance_176.parent = this;

	this.instance_177 = new lib.bl_sw_176();
	this.instance_177.parent = this;

	this.instance_178 = new lib.bl_sw_177();
	this.instance_178.parent = this;

	this.instance_179 = new lib.bl_sw_178();
	this.instance_179.parent = this;

	this.instance_180 = new lib.bl_sw_179();
	this.instance_180.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).to({state:[{t:this.instance_121}]},1).to({state:[{t:this.instance_122}]},1).to({state:[{t:this.instance_123}]},1).to({state:[{t:this.instance_124}]},1).to({state:[{t:this.instance_125}]},1).to({state:[{t:this.instance_126}]},1).to({state:[{t:this.instance_127}]},1).to({state:[{t:this.instance_128}]},1).to({state:[{t:this.instance_129}]},1).to({state:[{t:this.instance_130}]},1).to({state:[{t:this.instance_131}]},1).to({state:[{t:this.instance_132}]},1).to({state:[{t:this.instance_133}]},1).to({state:[{t:this.instance_134}]},1).to({state:[{t:this.instance_135}]},1).to({state:[{t:this.instance_136}]},1).to({state:[{t:this.instance_137}]},1).to({state:[{t:this.instance_138}]},1).to({state:[{t:this.instance_139}]},1).to({state:[{t:this.instance_140}]},1).to({state:[{t:this.instance_141}]},1).to({state:[{t:this.instance_142}]},1).to({state:[{t:this.instance_143}]},1).to({state:[{t:this.instance_144}]},1).to({state:[{t:this.instance_145}]},1).to({state:[{t:this.instance_146}]},1).to({state:[{t:this.instance_147}]},1).to({state:[{t:this.instance_148}]},1).to({state:[{t:this.instance_149}]},1).to({state:[{t:this.instance_150}]},1).to({state:[{t:this.instance_151}]},1).to({state:[{t:this.instance_152}]},1).to({state:[{t:this.instance_153}]},1).to({state:[{t:this.instance_154}]},1).to({state:[{t:this.instance_155}]},1).to({state:[{t:this.instance_156}]},1).to({state:[{t:this.instance_157}]},1).to({state:[{t:this.instance_158}]},1).to({state:[{t:this.instance_159}]},1).to({state:[{t:this.instance_160}]},1).to({state:[{t:this.instance_161}]},1).to({state:[{t:this.instance_162}]},1).to({state:[{t:this.instance_163}]},1).to({state:[{t:this.instance_164}]},1).to({state:[{t:this.instance_165}]},1).to({state:[{t:this.instance_166}]},1).to({state:[{t:this.instance_167}]},1).to({state:[{t:this.instance_168}]},1).to({state:[{t:this.instance_169}]},1).to({state:[{t:this.instance_170}]},1).to({state:[{t:this.instance_171}]},1).to({state:[{t:this.instance_172}]},1).to({state:[{t:this.instance_173}]},1).to({state:[{t:this.instance_174}]},1).to({state:[{t:this.instance_175}]},1).to({state:[{t:this.instance_176}]},1).to({state:[{t:this.instance_177}]},1).to({state:[{t:this.instance_178}]},1).to({state:[{t:this.instance_179}]},1).to({state:[{t:this.instance_180}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.mc_blowjob_extra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop_0":0,"anime_1":40,"loop_1":44,"loop_2":150});

	// timeline functions:
	this.frame_0 = function() {
		this.alpha = 1;
		exportRoot.fn_changeFPS(10);
	}
	this.frame_5 = function() {
		var s = createjs.Sound;
		var seNum = 1;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_10 = function() {
		if(clickFlag){
			this.gotoAndPlay("anime_1");
		}else{
			var jumpTo = "loop_0";
			var rndTotalNum = 12;
			exportRoot.fn_randomLoop(this, jumpTo, rndTotalNum);
		}
	}
	this.frame_40 = function() {
		clickFlag
			? clickFlag = false
			: this.gotoAndPlay("loop_0");
	}
	this.frame_44 = function() {
		exportRoot.fn_changeFPS(10);
	}
	this.frame_47 = function() {
		var s = createjs.Sound;
		var seNum = 1;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_50 = function() {
		if(clickFlag){
			clickFlag = false
			exportRoot.fn_changeFPS();
			createjs.Tween.get(this)
				.to({scaleX: 1.3, scaleY: 1.3}, 500, createjs.Ease.cubicOut)
		}else{
			this.gotoAndPlay("loop_1");
		}
	}
	this.frame_60 = function() {
		var s = createjs.Sound;
		var seNum = 6;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_76 = function() {
		var s = createjs.Sound;
		var seNum = 6;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_89 = function() {
		var s = createjs.Sound;
		var seNum = 6;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_102 = function() {
		var s = createjs.Sound;
		var seNum = 6;
		var rnd = Math.floor(Math.random() * seArr[seNum]);
		console.log("se:"+rnd);
		s.play("se_" + seNum + rnd);
	}
	this.frame_149 = function() {
		createjs.Tween.get(this)
			.to({scaleX: 1, scaleY: 1}, 500, createjs.Ease.cubicOut)
	}
	this.frame_150 = function() {
		exportRoot.fn_changeFPS(10);
	}
	this.frame_180 = function() {
		if(clickFlag){
			clickFlag = false
			if(firstFlag){
				firstFlag = false;
				createjs.Tween.get(this, {override:true})
					.to({alpha:0}, 1000)
					.call(function (){
						firstFlag = true;
						this.alpha = 1;
						exportRoot.gotoAndStop("ending");
					});
			}
			this.gotoAndPlay("loop_2");
		}else{
			this.gotoAndPlay("loop_2");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(5).call(this.frame_10).wait(30).call(this.frame_40).wait(4).call(this.frame_44).wait(3).call(this.frame_47).wait(3).call(this.frame_50).wait(10).call(this.frame_60).wait(16).call(this.frame_76).wait(13).call(this.frame_89).wait(13).call(this.frame_102).wait(47).call(this.frame_149).wait(1).call(this.frame_150).wait(30).call(this.frame_180).wait(1));

	// fx
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("Egx/BYwMAAAixfMBj/AAAMAAACxfg");
	this.shape.setTransform(320,568);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("Egx/BYwMAAAixfMBj/AAAMAAACxfg");
	this.shape_1.setTransform(320.1,568.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},50).to({state:[]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).to({state:[]},125).wait(1));

	// レイヤー_2
	this.instance = new lib.mc_cutinMassage();
	this.instance.parent = this;
	this.instance.setTransform(97,20.2,1,1,0,0,0,97,20.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).to({_off:true},6).wait(131));

	// レイヤー_1
	this.instance_1 = new lib.bl_ex_000();
	this.instance_1.parent = this;

	this.instance_2 = new lib.bl_ex_001();
	this.instance_2.parent = this;

	this.instance_3 = new lib.bl_ex_002();
	this.instance_3.parent = this;

	this.instance_4 = new lib.bl_ex_003();
	this.instance_4.parent = this;

	this.instance_5 = new lib.bl_ex_004();
	this.instance_5.parent = this;

	this.instance_6 = new lib.bl_ex_005();
	this.instance_6.parent = this;

	this.instance_7 = new lib.bl_ex_006();
	this.instance_7.parent = this;

	this.instance_8 = new lib.bl_ex_007();
	this.instance_8.parent = this;

	this.instance_9 = new lib.bl_ex_008();
	this.instance_9.parent = this;

	this.instance_10 = new lib.bl_ex_009();
	this.instance_10.parent = this;

	this.instance_11 = new lib.bl_ex_010();
	this.instance_11.parent = this;

	this.instance_12 = new lib.bl_ex_011();
	this.instance_12.parent = this;

	this.instance_13 = new lib.bl_ex_012();
	this.instance_13.parent = this;

	this.instance_14 = new lib.bl_ex_013();
	this.instance_14.parent = this;

	this.instance_15 = new lib.bl_ex_014();
	this.instance_15.parent = this;

	this.instance_16 = new lib.bl_ex_015();
	this.instance_16.parent = this;

	this.instance_17 = new lib.bl_ex_016();
	this.instance_17.parent = this;

	this.instance_18 = new lib.bl_ex_017();
	this.instance_18.parent = this;

	this.instance_19 = new lib.bl_ex_018();
	this.instance_19.parent = this;

	this.instance_20 = new lib.bl_ex_019();
	this.instance_20.parent = this;

	this.instance_21 = new lib.bl_ex_020();
	this.instance_21.parent = this;

	this.instance_22 = new lib.bl_ex_021();
	this.instance_22.parent = this;

	this.instance_23 = new lib.bl_ex_022();
	this.instance_23.parent = this;

	this.instance_24 = new lib.bl_ex_023();
	this.instance_24.parent = this;

	this.instance_25 = new lib.bl_ex_024();
	this.instance_25.parent = this;

	this.instance_26 = new lib.bl_ex_025();
	this.instance_26.parent = this;

	this.instance_27 = new lib.bl_ex_026();
	this.instance_27.parent = this;

	this.instance_28 = new lib.bl_ex_027();
	this.instance_28.parent = this;

	this.instance_29 = new lib.bl_ex_028();
	this.instance_29.parent = this;

	this.instance_30 = new lib.bl_ex_029();
	this.instance_30.parent = this;

	this.instance_31 = new lib.bl_ex_030();
	this.instance_31.parent = this;

	this.instance_32 = new lib.bl_ex_031();
	this.instance_32.parent = this;

	this.instance_33 = new lib.bl_ex_032();
	this.instance_33.parent = this;

	this.instance_34 = new lib.bl_ex_033();
	this.instance_34.parent = this;

	this.instance_35 = new lib.bl_ex_034();
	this.instance_35.parent = this;

	this.instance_36 = new lib.bl_ex_035();
	this.instance_36.parent = this;

	this.instance_37 = new lib.bl_ex_036();
	this.instance_37.parent = this;

	this.instance_38 = new lib.bl_ex_037();
	this.instance_38.parent = this;

	this.instance_39 = new lib.bl_ex_038();
	this.instance_39.parent = this;

	this.instance_40 = new lib.bl_ex_039();
	this.instance_40.parent = this;

	this.instance_41 = new lib.bl_ex_040();
	this.instance_41.parent = this;

	this.instance_42 = new lib.bl_ex_041();
	this.instance_42.parent = this;

	this.instance_43 = new lib.bl_ex_042();
	this.instance_43.parent = this;

	this.instance_44 = new lib.bl_ex_043();
	this.instance_44.parent = this;

	this.instance_45 = new lib.bl_ex_044();
	this.instance_45.parent = this;

	this.instance_46 = new lib.bl_ex_045();
	this.instance_46.parent = this;

	this.instance_47 = new lib.bl_ex_046();
	this.instance_47.parent = this;

	this.instance_48 = new lib.bl_ex_047();
	this.instance_48.parent = this;

	this.instance_49 = new lib.bl_ex_048();
	this.instance_49.parent = this;

	this.instance_50 = new lib.bl_ex_049();
	this.instance_50.parent = this;

	this.instance_51 = new lib.bl_ex_050();
	this.instance_51.parent = this;

	this.instance_52 = new lib.bl_ex_051();
	this.instance_52.parent = this;

	this.instance_53 = new lib.bl_ex_052();
	this.instance_53.parent = this;

	this.instance_54 = new lib.bl_ex_053();
	this.instance_54.parent = this;

	this.instance_55 = new lib.bl_ex_054();
	this.instance_55.parent = this;

	this.instance_56 = new lib.bl_ex_055();
	this.instance_56.parent = this;

	this.instance_57 = new lib.bl_ex_056();
	this.instance_57.parent = this;

	this.instance_58 = new lib.bl_ex_057();
	this.instance_58.parent = this;

	this.instance_59 = new lib.bl_ex_058();
	this.instance_59.parent = this;

	this.instance_60 = new lib.bl_ex_059();
	this.instance_60.parent = this;

	this.instance_61 = new lib.bl_ex_060();
	this.instance_61.parent = this;

	this.instance_62 = new lib.bl_ex_061();
	this.instance_62.parent = this;

	this.instance_63 = new lib.bl_ex_062();
	this.instance_63.parent = this;

	this.instance_64 = new lib.bl_ex_063();
	this.instance_64.parent = this;

	this.instance_65 = new lib.bl_ex_064();
	this.instance_65.parent = this;

	this.instance_66 = new lib.bl_ex_065();
	this.instance_66.parent = this;

	this.instance_67 = new lib.bl_ex_066();
	this.instance_67.parent = this;

	this.instance_68 = new lib.bl_ex_067();
	this.instance_68.parent = this;

	this.instance_69 = new lib.bl_ex_068();
	this.instance_69.parent = this;

	this.instance_70 = new lib.bl_ex_069();
	this.instance_70.parent = this;

	this.instance_71 = new lib.bl_ex_070();
	this.instance_71.parent = this;

	this.instance_72 = new lib.bl_ex_071();
	this.instance_72.parent = this;

	this.instance_73 = new lib.bl_ex_072();
	this.instance_73.parent = this;

	this.instance_74 = new lib.bl_ex_073();
	this.instance_74.parent = this;

	this.instance_75 = new lib.bl_ex_074();
	this.instance_75.parent = this;

	this.instance_76 = new lib.bl_ex_075();
	this.instance_76.parent = this;

	this.instance_77 = new lib.bl_ex_076();
	this.instance_77.parent = this;

	this.instance_78 = new lib.bl_ex_077();
	this.instance_78.parent = this;

	this.instance_79 = new lib.bl_ex_078();
	this.instance_79.parent = this;

	this.instance_80 = new lib.bl_ex_079();
	this.instance_80.parent = this;

	this.instance_81 = new lib.bl_ex_080();
	this.instance_81.parent = this;

	this.instance_82 = new lib.bl_ex_081();
	this.instance_82.parent = this;

	this.instance_83 = new lib.bl_ex_082();
	this.instance_83.parent = this;

	this.instance_84 = new lib.bl_ex_083();
	this.instance_84.parent = this;

	this.instance_85 = new lib.bl_ex_084();
	this.instance_85.parent = this;

	this.instance_86 = new lib.bl_ex_085();
	this.instance_86.parent = this;

	this.instance_87 = new lib.bl_ex_086();
	this.instance_87.parent = this;

	this.instance_88 = new lib.bl_ex_087();
	this.instance_88.parent = this;

	this.instance_89 = new lib.bl_ex_088();
	this.instance_89.parent = this;

	this.instance_90 = new lib.bl_ex_089();
	this.instance_90.parent = this;

	this.instance_91 = new lib.bl_ex_090();
	this.instance_91.parent = this;

	this.instance_92 = new lib.bl_ex_091();
	this.instance_92.parent = this;

	this.instance_93 = new lib.bl_ex_092();
	this.instance_93.parent = this;

	this.instance_94 = new lib.bl_ex_093();
	this.instance_94.parent = this;

	this.instance_95 = new lib.bl_ex_094();
	this.instance_95.parent = this;

	this.instance_96 = new lib.bl_ex_095();
	this.instance_96.parent = this;

	this.instance_97 = new lib.bl_ex_096();
	this.instance_97.parent = this;

	this.instance_98 = new lib.bl_ex_097();
	this.instance_98.parent = this;

	this.instance_99 = new lib.bl_ex_098();
	this.instance_99.parent = this;

	this.instance_100 = new lib.bl_ex_099();
	this.instance_100.parent = this;

	this.instance_101 = new lib.bl_ex_100();
	this.instance_101.parent = this;

	this.instance_102 = new lib.bl_ex_101();
	this.instance_102.parent = this;

	this.instance_103 = new lib.bl_ex_102();
	this.instance_103.parent = this;

	this.instance_104 = new lib.bl_ex_103();
	this.instance_104.parent = this;

	this.instance_105 = new lib.bl_ex_104();
	this.instance_105.parent = this;

	this.instance_106 = new lib.bl_ex_105();
	this.instance_106.parent = this;

	this.instance_107 = new lib.bl_ex_106();
	this.instance_107.parent = this;

	this.instance_108 = new lib.bl_ex_107();
	this.instance_108.parent = this;

	this.instance_109 = new lib.bl_ex_108();
	this.instance_109.parent = this;

	this.instance_110 = new lib.bl_ex_109();
	this.instance_110.parent = this;

	this.instance_111 = new lib.bl_ex_110();
	this.instance_111.parent = this;

	this.instance_112 = new lib.bl_ex_111();
	this.instance_112.parent = this;

	this.instance_113 = new lib.bl_ex_112();
	this.instance_113.parent = this;

	this.instance_114 = new lib.bl_ex_113();
	this.instance_114.parent = this;

	this.instance_115 = new lib.bl_ex_114();
	this.instance_115.parent = this;

	this.instance_116 = new lib.bl_ex_115();
	this.instance_116.parent = this;

	this.instance_117 = new lib.bl_ex_116();
	this.instance_117.parent = this;

	this.instance_118 = new lib.bl_ex_117();
	this.instance_118.parent = this;

	this.instance_119 = new lib.bl_ex_118();
	this.instance_119.parent = this;

	this.instance_120 = new lib.bl_ex_119();
	this.instance_120.parent = this;

	this.instance_121 = new lib.bl_ex_120();
	this.instance_121.parent = this;

	this.instance_122 = new lib.bl_ex_121();
	this.instance_122.parent = this;

	this.instance_123 = new lib.bl_ex_122();
	this.instance_123.parent = this;

	this.instance_124 = new lib.bl_ex_123();
	this.instance_124.parent = this;

	this.instance_125 = new lib.bl_ex_124();
	this.instance_125.parent = this;

	this.instance_126 = new lib.bl_ex_125();
	this.instance_126.parent = this;

	this.instance_127 = new lib.bl_ex_126();
	this.instance_127.parent = this;

	this.instance_128 = new lib.bl_ex_127();
	this.instance_128.parent = this;

	this.instance_129 = new lib.bl_ex_128();
	this.instance_129.parent = this;

	this.instance_130 = new lib.bl_ex_129();
	this.instance_130.parent = this;

	this.instance_131 = new lib.bl_ex_130();
	this.instance_131.parent = this;

	this.instance_132 = new lib.bl_ex_131();
	this.instance_132.parent = this;

	this.instance_133 = new lib.bl_ex_132();
	this.instance_133.parent = this;

	this.instance_134 = new lib.bl_ex_133();
	this.instance_134.parent = this;

	this.instance_135 = new lib.bl_ex_134();
	this.instance_135.parent = this;

	this.instance_136 = new lib.bl_ex_135();
	this.instance_136.parent = this;

	this.instance_137 = new lib.bl_ex_136();
	this.instance_137.parent = this;

	this.instance_138 = new lib.bl_ex_137();
	this.instance_138.parent = this;

	this.instance_139 = new lib.bl_ex_138();
	this.instance_139.parent = this;

	this.instance_140 = new lib.bl_ex_139();
	this.instance_140.parent = this;

	this.instance_141 = new lib.bl_ex_140();
	this.instance_141.parent = this;

	this.instance_142 = new lib.bl_ex_141();
	this.instance_142.parent = this;

	this.instance_143 = new lib.bl_ex_142();
	this.instance_143.parent = this;

	this.instance_144 = new lib.bl_ex_143();
	this.instance_144.parent = this;

	this.instance_145 = new lib.bl_ex_144();
	this.instance_145.parent = this;

	this.instance_146 = new lib.bl_ex_145();
	this.instance_146.parent = this;

	this.instance_147 = new lib.bl_ex_146();
	this.instance_147.parent = this;

	this.instance_148 = new lib.bl_ex_147();
	this.instance_148.parent = this;

	this.instance_149 = new lib.bl_ex_148();
	this.instance_149.parent = this;

	this.instance_150 = new lib.bl_ex_149();
	this.instance_150.parent = this;

	this.instance_151 = new lib.bl_ex_150();
	this.instance_151.parent = this;

	this.instance_152 = new lib.bl_ex_151();
	this.instance_152.parent = this;

	this.instance_153 = new lib.bl_ex_152();
	this.instance_153.parent = this;

	this.instance_154 = new lib.bl_ex_153();
	this.instance_154.parent = this;

	this.instance_155 = new lib.bl_ex_154();
	this.instance_155.parent = this;

	this.instance_156 = new lib.bl_ex_155();
	this.instance_156.parent = this;

	this.instance_157 = new lib.bl_ex_156();
	this.instance_157.parent = this;

	this.instance_158 = new lib.bl_ex_157();
	this.instance_158.parent = this;

	this.instance_159 = new lib.bl_ex_158();
	this.instance_159.parent = this;

	this.instance_160 = new lib.bl_ex_159();
	this.instance_160.parent = this;

	this.instance_161 = new lib.bl_ex_160();
	this.instance_161.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).to({state:[{t:this.instance_121}]},1).to({state:[{t:this.instance_122}]},1).to({state:[{t:this.instance_123}]},1).to({state:[{t:this.instance_124}]},1).to({state:[{t:this.instance_125}]},1).to({state:[{t:this.instance_126}]},1).to({state:[{t:this.instance_127}]},1).to({state:[{t:this.instance_128}]},1).to({state:[{t:this.instance_129}]},1).to({state:[{t:this.instance_130}]},1).to({state:[{t:this.instance_131}]},1).to({state:[{t:this.instance_132}]},1).to({state:[{t:this.instance_133}]},1).to({state:[{t:this.instance_134}]},1).to({state:[{t:this.instance_135}]},1).to({state:[{t:this.instance_136}]},1).to({state:[{t:this.instance_137}]},1).to({state:[{t:this.instance_138}]},1).to({state:[{t:this.instance_139}]},1).to({state:[{t:this.instance_140}]},1).to({state:[{t:this.instance_141}]},1).to({state:[{t:this.instance_142}]},1).to({state:[{t:this.instance_143}]},1).to({state:[{t:this.instance_144}]},1).to({state:[{t:this.instance_145}]},1).to({state:[{t:this.instance_146}]},1).to({state:[{t:this.instance_147}]},1).to({state:[{t:this.instance_148}]},1).to({state:[{t:this.instance_149}]},1).to({state:[{t:this.instance_150}]},1).to({state:[{t:this.instance_151}]},1).to({state:[{t:this.instance_152}]},1).to({state:[{t:this.instance_153}]},1).to({state:[{t:this.instance_154}]},1).to({state:[{t:this.instance_155}]},1).to({state:[{t:this.instance_156}]},1).to({state:[{t:this.instance_157}]},1).to({state:[{t:this.instance_158}]},1).to({state:[{t:this.instance_159}]},1).to({state:[{t:this.instance_160}]},1).to({state:[{t:this.instance_161}]},1).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,1136);


(lib.titleAnime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_60 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(1));

	// レイヤー_2
	this.instance = new lib.titoleTxt();
	this.instance.parent = this;
	this.instance.setTransform(0,-398.9,1,1,0,0,0,215,147);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(61));

	// hand
	this.instance_1 = new lib.handAnime();
	this.instance_1.parent = this;
	this.instance_1.setTransform(175.8,320,1,1,0,0,0,180.5,283);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(61));

	// body
	this.instance_2 = new lib.body_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.5,8.2,1,1,0,0,0,329.7,246.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:337.5,regY:42.8,x:6.8,y:-195.6},0).wait(1).to({x:6.4,y:-195.7},0).wait(1).to({x:6,y:-196},0).wait(1).to({x:5.7,y:-196.3},0).wait(1).to({x:5.4,y:-196.6},0).wait(1).to({x:5.1,y:-197},0).wait(1).to({x:4.9,y:-197.4},0).wait(1).to({x:4.7,y:-197.8},0).wait(1).to({x:4.5,y:-198.2},0).wait(1).to({x:4.3,y:-198.6},0).wait(1).to({x:4.2,y:-199},0).wait(1).to({x:4.1,y:-199.5},0).wait(1).to({x:4,y:-199.9},0).wait(1).to({x:3.9,y:-200.4},0).wait(1).to({x:3.8,y:-200.8},0).wait(1).to({y:-201.3},0).wait(1).to({x:3.7,y:-201.7},0).wait(1).to({y:-202.2},0).wait(1).to({y:-202.6},0).wait(1).to({y:-203.1},0).wait(1).to({y:-203.5},0).wait(1).to({x:3.8,y:-204},0).wait(1).to({y:-204.4},0).wait(1).to({x:3.9,y:-204.9},0).wait(1).to({x:4,y:-205.3},0).wait(1).to({x:4.1,y:-205.8},0).wait(1).to({x:4.2,y:-206.2},0).wait(1).to({x:4.4,y:-206.6},0).wait(1).to({x:4.6,y:-207.1},0).wait(1).to({x:4.8,y:-207.5},0).wait(1).to({x:5,y:-207.9},0).wait(1).to({x:5.2,y:-208.2},0).wait(1).to({x:5.5,y:-208.6},0).wait(1).to({x:5.9,y:-208.9},0).wait(1).to({x:6.2,y:-209.2},0).wait(1).to({x:6.6,y:-209.4},0).wait(1).to({x:7,y:-209.6},0).wait(1).to({x:7.4,y:-209.7},0).wait(1).to({x:7.8,y:-209.8},0).wait(1).to({x:8.3},0).wait(1).to({x:9.3,y:-209.7},0).wait(1).to({x:10.2,y:-209.4},0).wait(1).to({x:11,y:-208.8},0).wait(1).to({x:11.6,y:-208.1},0).wait(1).to({x:12.1,y:-207.2},0).wait(1).to({x:12.4,y:-206.3},0).wait(1).to({x:12.6,y:-205.4},0).wait(1).to({x:12.8,y:-204.5},0).wait(1).to({y:-203.5},0).wait(1).to({y:-202.5},0).wait(1).to({x:12.7,y:-201.6},0).wait(1).to({x:12.5,y:-200.6},0).wait(1).to({x:12.2,y:-199.7},0).wait(1).to({x:11.8,y:-198.8},0).wait(1).to({x:11.3,y:-198},0).wait(1).to({x:10.7,y:-197.3},0).wait(1).to({x:10,y:-196.6},0).wait(1).to({x:9.2,y:-196.2},0).wait(1).to({x:8.3,y:-195.8},0).wait(1).to({x:7.3,y:-195.7},0).wait(1));

	// base
	this.instance_3 = new lib.base();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-320,-568);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-348,-631.1,700.4,1271.1);


// stage content:
(lib.project_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{logo:1,opening_1:2,opening_2:3,opening_3:4,opening_4:5,normal:6,normal_1:7,normal_2:8,normal_3:9,blush:10,blush_1:11,blush_2:12,blush_3:13,wet:14,wet_1:15,wet_2:16,wet_3:17,sweaty:18,sweaty_1:19,sweaty_2:20,sweaty_3:21,extra:22,extra_1:23,extra_2:24,extra_3:25,ending:26,gameover:27});

	// timeline functions:
	this.frame_0 = function() {
		//グローバル変数
		sceneNum = 0;
		cutNum = 1;
		sceneLabel = ['opening','normal','blush','wet','sweaty','extra', 'ending'];
		clickFlag = false;
		firstFlag = true;
		changeValue = 1;
		randomStop = 1;
		coundDown = 0;
		thisMovieClip = null;
		realMoney = 0; //所持金
		
		this.cursorAnime.framerate = 20;
		
		// localStorageが使用出来るかチェック
		if (!window.localStorage) {
		    alert("お使いのブラウザがセーブに対応してません。他のブラウザをお使いください");
		}
		
		playTimes = localStorage.getItem("sl12_playTimes"); //local
		playTimes = Number(playTimes) + 1;
		
		//playTimes = 1; //リセット
		
		localStorage.setItem("sl12_playTimes", playTimes); //local
		console.log("sl12_playTimes:" + playTimes);
		
		//soundjs
		//createjs.Sound.registerPlugins([createjs.WebAudioPlugin]);
		
		//お金
		if(playTimes == 1){
			realMoney = 200000;
		}else{
			realMoney = Number(localStorage.getItem("sl12_money")); //local
		}
		console.log("sl12_money:" + realMoney);
		displayMoney = realMoney;
		this.money.text = String(displayMoney).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
		localStorage.setItem("sl12_money", realMoney); //local
		
		
		
		//ボタン
		this.btn_0.addEventListener("click", fn_transition.bind(this, 'play'));
		this.btn_1.addEventListener("click", fn_transition.bind(this, 'left'));
		this.btn_2.addEventListener("click", fn_transition.bind(this, 'right'));
		this.btn_3.addEventListener("click", fn_transition.bind(this, 'down'));
		this.btn_4.addEventListener("click", fn_transition.bind(this, 'click'));
		this.btn_5.addEventListener("click", fn_transition.bind(this, 'skip'));
		
		function fn_transition(transitionCommand)
		{
			switch (transitionCommand){
				case 'play':
					var mcName = exportRoot.currentLabel;
					exportRoot[mcName].play();
					break;
				case 'left':
					cutNum == 1 ? cutNum = 3 : cutNum--; 
					console.log("jumpTo " + sceneLabel[sceneNum] + "_" + cutNum);
					this.gotoAndStop(sceneLabel[sceneNum] + "_" + cutNum);
					break;
				case 'right':
					cutNum == 3 ? cutNum = 1 : cutNum++;
					console.log("jumpTo " + sceneLabel[sceneNum] + "_" + cutNum);
					this.gotoAndStop(sceneLabel[sceneNum] + "_" + cutNum);
					break;
				case 'down':
					if(firstFlag){
						firstFlag = false;
						sceneNum++;
						var mcName = exportRoot.currentLabel;
						console.log("jumpTo " + sceneLabel[sceneNum] + "_" + cutNum);
						createjs.Tween.get(exportRoot[mcName], {override:true})
							.to({alpha:0}, 300)
							.call(function (){
								firstFlag = true;
								this.alpha = 1;
								//exportRoot.removeChild(exportRoot[mcName]);
								exportRoot.gotoAndStop(sceneLabel[sceneNum]);
							});
						
					}
					break;
				case 'click':
					clickFlag = true;
					break;
				case 'skip':
					var mcName = exportRoot.currentLabel;
					this[mcName].gotoAndPlay("skip");
					break;
				
			}
		}
		
		
		//サウンド登録
		seArr = [3,10,10,6,4,4,3,8];
		var seArrLng = seArr.length;
		for(var i = 0; i < seArrLng; i++){
			for(var j = 0; j < seArr[i]; j++){
				createjs.Sound.registerSound("sounds/se_"+i+j+".mp3", "se_"+i+j, 1);
			}
		}
		
		cvArr = [6,0,8,10];
		var cvArrLng = cvArr.length;
		for(var i = 0; i < cvArrLng; i++){
			for(var j = 0; j < cvArr[i]; j++){
				createjs.Sound.registerSound("sounds/cv_"+i+j+".mp3", "cv_"+i+j, 1);
			}
		}
		
		cqArr = [5];
		var cqArrLng = cqArr.length;
		for(var i = 0; i < cqArrLng; i++){
			for(var j = 0; j < cqArr[i]; j++){
				createjs.Sound.registerSound("sounds/cq_"+i+j+".mp3", "cq_"+i+j, 1);
			}
		}
		
		bgmArr = [3];
		var bgmArrLng = bgmArr.length;
		for(var i = 0; i < bgmArrLng; i++){
			for(var j = 0; j < bgmArr[i]; j++){
				createjs.Sound.registerSound("sounds/bgm_"+i+j+".m4a", "bgm_"+i+j, 1);
			}
		}
		
		//サウンドインスタンス
		var s = createjs.Sound
		bgmInstance = s.createInstance("bgm_00");
		seInstance = s.createInstance("se_00");
		otherInstance = s.createInstance("se_00");
		cvInstance = s.createInstance("cv_00");
		
		
		//カーソルアニメ
		stage.addEventListener("stagemousedown", function(event) { 
		
			var pt = stage.globalToLocal(stage.mouseX, stage.mouseY);
			console.log("x:" + pt.x +" y:"+ pt.y);
			exportRoot.cursorAnime.x = pt.x;
		    exportRoot.cursorAnime.y = pt.y;
			exportRoot.cursorAnime.gotoAndPlay("start");
		})
		
		
		
		
		//マイ関数
		//金額増減アニメ
		this.fn_cashAnime = function(_this, targetAmount)
		{
			var startMoney = displayMoney;
			if(startMoney < targetAmount){
				createjs.Ticker.addEventListener("tick", incMoney);
			}else{
				createjs.Ticker.addEventListener("tick", decMoney);
			}
		
			function incMoney(e){
				
				if(displayMoney < targetAmount){
					displayMoney = displayMoney + 250;
					exportRoot.money.text = String(displayMoney).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
				}else{
					e.remove();
				}
			}
			function decMoney(e){
				
				if(displayMoney > targetAmount){
					displayMoney = displayMoney - 250;
					exportRoot.money.text = String(displayMoney).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
				}else{
					e.remove();
				}
			}
		}
		
		this.fn_randomLoop = function (_this, labelName, randomNum)
		{
			var rnd = Math.floor(Math.random() * randomNum);
			if(rnd != 0) _this.gotoAndPlay(labelName);
		}
		
		this.fn_changeFPS = function (maxPlus){
			if(maxPlus){
				var changedFPS = 20 + Math.floor(Math.random() * (maxPlus + 1));
				console.log("baseFPS:" + changedFPS);
				createjs.Ticker.framerate = changedFPS;
			}else{
				createjs.Ticker.framerate = 20;
			}
		}
		
		//テキスト詰め
		this.fn_boxingText = function (_this, text) {
			var textData = text.split("|");
			
			if(textData[1]){
				textData[1] == "f"
					? _this.windows.gotoAndStop("ledies")
					: _this.windows.gotoAndStop("mens");
			}
			
			if(textData[2]){
				_this.bgi.gotoAndStop(textData[2]);
			}
			
			if(textData[3]){
				createjs.Sound.play(textData[3]);
			}
			
			var textInstance = _this.windows.messageText;
			var initWidth = textInstance.lineWidth;
			var textArray = textData[0].split('');
			var i = -1;
			var prevText = '';
			var lines = [];
		
			textInstance.text = '';
		
			while (textArray[++i]) {
				//console.log(i);
				textInstance.text += textArray[i];
		
				if (textInstance.getMeasuredWidth() > initWidth) {
					lines.push(prevText);
					//console.log(lines);
					textInstance.text = textArray[i];
				}
				prevText = textInstance.text;
			}
			lines.push(prevText);
			textInstance.text = lines.join('\n');
		}
		
		this.fn_fadeIn = function(_this) {
			_this.stop();
			_this.alpha = 0;
			createjs.Tween.get(_this, {override:true})
			.to({alpha:1}, 500)
			.call(function(){
				this.play();
			});
		}
		
		
		this.fn_fadeOut = function(_this) {
			_this.stop();
			createjs.Tween.get(_this, {override:true})
			.to({alpha:0}, 500)
			.call(function(){
				this.play();
			});
		}
		
		this.fn_delayedJump = function(_this, label){
			createjs.Tween.get(_this, {override:true})
			.call(function(){
				exportRoot.gotoAndStop(label);
			});
		}
		
		//試作　そのフレームからgoto
		this.delayedGotoAndPlay = function(_this, label){
			_this.stop();
			createjs.Tween.get(_this, {useTicks: true}, {override:true})
			.wait(1)
			.call(function(label){
				this.gotoAndStop(label);
			},[label])
			.wait(1)
			.call(function(){
				this.play();
			});
		}
		/*
		this.fn_resetMC = function(){
			var mcName = exportRoot.currentLabel;
			console.log("current:"+ mcName);
			//exportRoot[mcName].gotoAndPlay(0);
		}
		*/
		this.fn_getPast = function() {
			var lastDate = NaN;
			return function() {
				var now = Date.now();
				var past = now - lastDate;
				lastDate = now;
				return past;
			};
		};
		/**
		 * ミリ秒を時分秒へ変換
		 * ms ミリ秒
		 */
		this.fn_timer = function(ms){
			var t = ms / 1000 | 0;
			var h=""+(t/36000|0)+(t/3600%10|0);
			var m=""+(t%3600/600|0)+(t%3600/60%10|0);
			var s=""+(t%60/10|0)+(t%60%10);
		    return h+':'+m+':'+s;
		}
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		// 告知バナー読み込み
		this.banner = new createjs.Bitmap("http://schoollove.jp/publicity/banner.gif");
		this.addChild(this.banner);
		
		
		//bgm
		bgmInstance.stop();
		bgmInstance = createjs.Sound.play("bgm_00", {loop:-1});
		
		
		
		
		//日付
		var payday = localStorage.getItem("sl12_payday"); //local
		
		var checkDate = new Date();
		var today = String(checkDate.getFullYear()) + String(checkDate.getMonth()) + String(checkDate.getDate());
		console.log("today:" + today);
		
		if(payday != today){
			//支給
			var systemMessage_mc = new lib.systemMessage();
			this.addChild(systemMessage_mc);
			localStorage.setItem("sl12_payday", today);
		}
		
		
		//スクラッチボタン配置
		var scratched = localStorage.getItem("sl12_scratched"); //local
		if(playTimes > 0 && scratched != today){
			this.scratchButton = new lib.scratchButton();
			this.addChild(this.scratchButton);
			
			this.scratchButton.btn.addEventListener("click", function (){
				createjs.Ticker.removeEventListener('tick', particleListener);
				stage.removeChild(particleSystem.container);
				this.removeChild(this.banner);
				createjs.Ticker.framerate = 30;
				
				this.gotoAndStop("opening_4");
				this.removeChild(this.scratchButton);
			}.bind(this));
			
		}
		
		
		//ボタン
		this.gamePlay.addEventListener("click", function (){
			if(realMoney < 10000){
					alert("所持金が足りません");
			}else{
				var s = createjs.Sound;
				s.play("se_71");
				createjs.Ticker.removeEventListener('tick', particleListener);
				stage.removeChild(particleSystem.container);
				this.removeChild(this.banner);
				createjs.Ticker.framerate = 20;
				if(this.scratchButton) this.removeChild(this.scratchButton);
				exportRoot.gotoAndStop("opening_3");
			}
		}.bind(this));
		
		this.tutorial.addEventListener("click", function (){
			createjs.Ticker.removeEventListener('tick', particleListener);
			stage.removeChild(particleSystem.container);
			this.removeChild(this.banner);
			createjs.Ticker.framerate = 20;
			if(this.scratchButton) this.removeChild(this.scratchButton);
			cutNum = 2;
			exportRoot.gotoAndStop("opening_2");
			
		}.bind(this));
		
		
		// パーティクルシステム作成します。
		particleSystem = new particlejs.ParticleSystem();
		 
		// パーティクルシステムの描画コンテナーを表示リストに登録します。
		stage.addChild(particleSystem.container);
		
		
		// Particle Developから保存したパラメーターを反映します。
		particleSystem.importFromJson(
		// JSONテキストのコピー＆ペースト ここから--
		{
		    "bgColor": "#00000",
		    "width": 640,
		    "height": 1136,
		    "emitFrequency": 20,
		    "startX": 335,
		    "startXVariance": 1024,
		    "startY": 558,
		    "startYVariance": 1024,
		    "initialDirection": "192.5",
		    "initialDirectionVariance": 360,
		    "initialSpeed": 1,
		    "initialSpeedVariance": 0,
		    "friction": "0.0035",
		    "accelerationSpeed": 0,
		    "accelerationDirection": 186.2,
		    "startScale": 0.01,
		    "startScaleVariance": 0.5,
		    "finishScale": "0",
		    "finishScaleVariance": "0",
		    "lifeSpan": "136",
		    "lifeSpanVariance": "500",
		    "startAlpha": "0.51",
		    "startAlphaVariance": "1",
		    "finishAlpha": "0",
		    "finishAlphaVariance": "0",
		    "shapeIdList": [
		        "blur_circle",
		        "circle"
		    ],
		    "startColor": {
		        "hue": "0",
		        "hueVariance": 158,
		        "saturation": 35,
		        "saturationVariance": 19,
		        "luminance": "100",
		        "luminanceVariance": "47"
		    },
		    "blendMode": true,
		    "alphaCurveType": "0",
		    "VERSION": "0.1.3"
		}
		// JSONテキストのコピー＆ペースト ここまで--
		);
		
		
		// フレームレートの設定
		createjs.Ticker.framerate = 30;
		// requestAnimationFrameに従った呼び出し
		//createjs.Ticker.timingMode = createjs.Ticker.RAF;
		// 定期的に呼ばれる関数を登録
		var particleListener = createjs.Ticker.addEventListener("tick", handleTick2);
		function handleTick2() {
		  // パーティクルの発生・更新
		  particleSystem.update();
		 
		}
	}
	this.frame_5 = function() {
		//配置
		this.luckeyScratch = new lib.luckeyScratch();
		this.addChild(this.luckeyScratch);
		
		//BGM
		bgmInstance.stop();
		bgmInstance = createjs.Sound.play("bgm_02", {loop:-1});
	}
	this.frame_6 = function() {
		//前払い
		realMoney = realMoney - 10000;
		localStorage.setItem("sl12_money", realMoney); //local
		
		//bgm
		bgmInstance.stop();
		bgmInstance = createjs.Sound.play("bgm_01", {loop:-1});
	}
	this.frame_15 = function() {
		if(realMoney < 10000){
			this.cashButton.visible = false;
		}
	}
	this.frame_16 = function() {
		if(realMoney < 10000){
			this.cashButton.visible = false;
		}
	}
	this.frame_17 = function() {
		if(realMoney < 10000){
			this.cashButton.visible = false;
		}
	}
	this.frame_26 = function() {
		var targetMoney = displayMoney - 10000;
		exportRoot.fn_cashAnime(this, targetMoney);
		//bgm
		bgmInstance.stop();
	}
	this.frame_27 = function() {
		sceneNum = 0;
		cutNum = 1;
		exportRoot.gotoAndStop("opening_1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(3).call(this.frame_5).wait(1).call(this.frame_6).wait(9).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(9).call(this.frame_26).wait(1).call(this.frame_27).wait(1));

	// cursor
	this.cursorAnime = new lib.mc_cursorAnime();
	this.cursorAnime.name = "cursorAnime";
	this.cursorAnime.parent = this;
	this.cursorAnime.setTransform(-48.3,445);
	this.cursorAnime.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.cursorAnime).to({_off:true},27).wait(1));

	// レイヤー_1
	this.instance = new lib.mc_naviButton();
	this.instance.parent = this;
	this.instance.setTransform(16,16,1,1,0,0,0,16,16);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({_off:true},3).wait(1).to({_off:false},0).to({_off:true},3).wait(1).to({_off:false},0).to({_off:true},3).wait(10));

	// button2
	this.cashButton = new lib.mc_cashButton();
	this.cashButton.name = "cashButton";
	this.cashButton.parent = this;
	this.cashButton.setTransform(100,100,1,1,0,0,0,100,100);
	this.cashButton.compositeOperation = "lighter";

	this.shutterAnime = new lib.shutterAnime();
	this.shutterAnime.name = "shutterAnime";
	this.shutterAnime.parent = this;
	this.shutterAnime.setTransform(320,430,1,1,0,0,0,320,430);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.cashButton}]},15).to({state:[]},3).to({state:[{t:this.shutterAnime}]},7).to({state:[]},1).wait(2));

	// button
	this.btn_0 = new lib.button();
	this.btn_0.name = "btn_0";
	this.btn_0.parent = this;
	this.btn_0.setTransform(320,568,1,1,0,0,0,320,568);
	new cjs.ButtonHelper(this.btn_0, 0, 1, 2, false, new lib.button(), 3);

	this.tutorial = new lib.button();
	this.tutorial.name = "tutorial";
	this.tutorial.parent = this;
	this.tutorial.setTransform(-0.3,928.1,0.422,0.07,0,180,0,-0.8,1135.6);
	new cjs.ButtonHelper(this.tutorial, 0, 1, 2, false, new lib.button(), 3);

	this.gamePlay = new lib.button();
	this.gamePlay.name = "gamePlay";
	this.gamePlay.parent = this;
	this.gamePlay.setTransform(0,791.8,0.422,0.07,0,180,0,0,1135.8);
	new cjs.ButtonHelper(this.gamePlay, 0, 1, 2, false, new lib.button(), 3);

	this.instance_1 = new lib.return_icon();
	this.instance_1.parent = this;
	this.instance_1.setTransform(35,35);

	this.btn_1 = new lib.button();
	this.btn_1.name = "btn_1";
	this.btn_1.parent = this;
	this.btn_1.setTransform(34.2,35,0.125,0.07,0,180,0,1.2,1135.8);
	new cjs.ButtonHelper(this.btn_1, 0, 1, 2, false, new lib.button(), 3);

	this.btn_5 = new lib.button();
	this.btn_5.name = "btn_5";
	this.btn_5.parent = this;
	this.btn_5.setTransform(32.6,30.5,0.125,0.062,0,180,0,0.8,1135.5);
	new cjs.ButtonHelper(this.btn_5, 0, 1, 2, false, new lib.button(), 3);

	this.btn_3 = new lib.button();
	this.btn_3.name = "btn_3";
	this.btn_3.parent = this;
	this.btn_3.setTransform(0,836.1,1,0.264,0,0,0,0,0.2);
	new cjs.ButtonHelper(this.btn_3, 0, 1, 2, false, new lib.button(), 3);

	this.btn_2 = new lib.button();
	this.btn_2.name = "btn_2";
	this.btn_2.parent = this;
	this.btn_2.setTransform(480,418,0.5,0.736,0,0,0,320,568);
	new cjs.ButtonHelper(this.btn_2, 0, 1, 2, false, new lib.button(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAAADIAAgF");
	this.shape.setTransform(2.6,1136.3);

	this.btn_4 = new lib.button();
	this.btn_4.name = "btn_4";
	this.btn_4.parent = this;
	this.btn_4.setTransform(0,0.2,1,1,0,0,0,0,0.2);
	new cjs.ButtonHelper(this.btn_4, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_0}]},1).to({state:[{t:this.gamePlay},{t:this.tutorial}]},1).to({state:[{t:this.btn_1,p:{regX:1.2,regY:1135.8,scaleX:0.125,scaleY:0.07,skewX:180,x:34.2,y:35}},{t:this.instance_1}]},1).to({state:[{t:this.btn_5}]},1).to({state:[]},1).to({state:[{t:this.shape},{t:this.btn_1,p:{regX:320,regY:568,scaleX:0.5,scaleY:0.736,skewX:0,x:160,y:418}},{t:this.btn_2},{t:this.btn_3}]},2).to({state:[]},3).to({state:[{t:this.shape},{t:this.btn_1,p:{regX:320,regY:568,scaleX:0.5,scaleY:0.736,skewX:0,x:160,y:418}},{t:this.btn_2},{t:this.btn_3}]},1).to({state:[]},3).to({state:[{t:this.shape},{t:this.btn_1,p:{regX:320,regY:568,scaleX:0.5,scaleY:0.736,skewX:0,x:160,y:418}},{t:this.btn_2},{t:this.btn_3}]},1).to({state:[]},3).to({state:[{t:this.shape},{t:this.btn_4}]},1).to({state:[]},3).to({state:[{t:this.shape},{t:this.btn_4}]},1).to({state:[]},3).wait(2));

	// money
	this.text = new cjs.Text("MONEY ¥", "normal 100 13px 'Montserrat'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 19;
	this.text.lineWidth = 74;
	this.text.parent = this;
	this.text.setTransform(517.4,20);
	if(!lib.properties.webfonts['Montserrat']) {
		lib.webFontTxtInst['Montserrat'] = lib.webFontTxtInst['Montserrat'] || [];
		lib.webFontTxtInst['Montserrat'].push(this.text);
	}

	this.money = new cjs.Text("000,000", "normal 100 13px 'Montserrat'", "#FFFFFF");
	this.money.name = "money";
	this.money.lineHeight = 19;
	this.money.lineWidth = 113;
	this.money.parent = this;
	this.money.setTransform(521,20);
	if(!lib.properties.webfonts['Montserrat']) {
		lib.webFontTxtInst['Montserrat'] = lib.webFontTxtInst['Montserrat'] || [];
		lib.webFontTxtInst['Montserrat'].push(this.money);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.money},{t:this.text}]},2).to({state:[]},25).wait(1));

	// anime
	this.logo = new lib.touch();
	this.logo.name = "logo";
	this.logo.parent = this;

	this.instance_2 = new lib.tutorialButton();
	this.instance_2.parent = this;
	this.instance_2.setTransform(136,975.2,1,1,0,0,0,136,48.5);

	this.instance_3 = new lib.playButton();
	this.instance_3.parent = this;
	this.instance_3.setTransform(135.5,814.2,1,1,0,0,0,135.5,72.5);

	this.text_1 = new cjs.Text("(c) 2017 School Love.jp  ver 1.0", "normal 100 16px 'Montserrat'");
	this.text_1.lineHeight = 23;
	this.text_1.lineWidth = 254;
	this.text_1.parent = this;
	this.text_1.setTransform(383.7,1109.2);
	if(!lib.properties.webfonts['Montserrat']) {
		lib.webFontTxtInst['Montserrat'] = lib.webFontTxtInst['Montserrat'] || [];
		lib.webFontTxtInst['Montserrat'].push(this.text_1);
	}

	this.instance_4 = new lib.titleAnime();
	this.instance_4.parent = this;
	this.instance_4.setTransform(329.5,558.6,1,1,0,0,0,9.5,-10.5);

	this.instance_5 = new lib.tutorial();
	this.instance_5.parent = this;

	this.opening_3 = new lib.mc_opening();
	this.opening_3.name = "opening_3";
	this.opening_3.parent = this;
	this.opening_3.setTransform(320,568);

	this.normal = new lib.mc_normal();
	this.normal.name = "normal";
	this.normal.parent = this;
	this.normal.setTransform(320,569);

	this.normal_1 = new lib.mc_blowjob_normal();
	this.normal_1.name = "normal_1";
	this.normal_1.parent = this;
	this.normal_1.setTransform(320.1,568,1,1,0,0,0,320.1,568);

	this.normal_2 = new lib.mc_lick_normal();
	this.normal_2.name = "normal_2";
	this.normal_2.parent = this;
	this.normal_2.setTransform(320,568,1,1,0,0,0,320,568);

	this.normal_3 = new lib.mc_facial_normal();
	this.normal_3.name = "normal_3";
	this.normal_3.parent = this;
	this.normal_3.setTransform(320,568,1,1,0,0,0,320,568);

	this.blush = new lib.mc_blush();
	this.blush.name = "blush";
	this.blush.parent = this;
	this.blush.setTransform(320,569);

	this.blush_1 = new lib.mc_blowjob_blush();
	this.blush_1.name = "blush_1";
	this.blush_1.parent = this;
	this.blush_1.setTransform(320,568,1,1,0,0,0,320,568);

	this.blush_2 = new lib.mc_lick_blush();
	this.blush_2.name = "blush_2";
	this.blush_2.parent = this;
	this.blush_2.setTransform(320,568,1,1,0,0,0,320,568);

	this.blush_3 = new lib.mc_facial_blush();
	this.blush_3.name = "blush_3";
	this.blush_3.parent = this;
	this.blush_3.setTransform(320,568,1,1,0,0,0,320,568);

	this.wet = new lib.mc_wet();
	this.wet.name = "wet";
	this.wet.parent = this;
	this.wet.setTransform(320,569);

	this.wet_1 = new lib.mc_blowjob_wet();
	this.wet_1.name = "wet_1";
	this.wet_1.parent = this;
	this.wet_1.setTransform(320,568,1,1,0,0,0,320,568);

	this.wet_2 = new lib.mc_lick_wet();
	this.wet_2.name = "wet_2";
	this.wet_2.parent = this;
	this.wet_2.setTransform(320,568,1,1,0,0,0,320,568);

	this.wet_3 = new lib.mc_facial_wet();
	this.wet_3.name = "wet_3";
	this.wet_3.parent = this;
	this.wet_3.setTransform(320,568,1,1,0,0,0,320,568);

	this.sweaty = new lib.mc_sweaty();
	this.sweaty.name = "sweaty";
	this.sweaty.parent = this;
	this.sweaty.setTransform(320,569);

	this.sweaty_1 = new lib.mc_blowjob_sweaty();
	this.sweaty_1.name = "sweaty_1";
	this.sweaty_1.parent = this;
	this.sweaty_1.setTransform(320,568,1,1,0,0,0,320,568);

	this.sweaty_2 = new lib.mc_lick_sweaty();
	this.sweaty_2.name = "sweaty_2";
	this.sweaty_2.parent = this;
	this.sweaty_2.setTransform(320,568,1,1,0,0,0,320,568);

	this.sweaty_3 = new lib.mc_facial_sweaty();
	this.sweaty_3.name = "sweaty_3";
	this.sweaty_3.parent = this;
	this.sweaty_3.setTransform(320,568,1,1,0,0,0,320,568);

	this.extra = new lib.mc_extra();
	this.extra.name = "extra";
	this.extra.parent = this;
	this.extra.setTransform(320,568);

	this.extra_1 = new lib.mc_blowjob_extra();
	this.extra_1.name = "extra_1";
	this.extra_1.parent = this;
	this.extra_1.setTransform(320,568,1,1,0,0,0,320,568);

	this.extra_2 = new lib.mc_lick_extra();
	this.extra_2.name = "extra_2";
	this.extra_2.parent = this;
	this.extra_2.setTransform(320,568,1,1,0,0,0,320,568);

	this.extra_3 = new lib.mc_facial_extra();
	this.extra_3.name = "extra_3";
	this.extra_3.parent = this;
	this.extra_3.setTransform(320,568,1,1,0,0,0,320,568);

	this.ending = new lib.mc_ending();
	this.ending.name = "ending";
	this.ending.parent = this;
	this.ending.setTransform(316,568);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.logo}]},1).to({state:[{t:this.instance_4},{t:this.text_1,p:{x:383.7,y:1109.2,text:"(c) 2017 School Love.jp  ver 1.0",font:"normal 100 16px 'Montserrat'",color:"#000000",textAlign:"",lineHeight:22.5,lineWidth:254}},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.opening_3},{t:this.text_1,p:{x:72.1,y:33.8,text:">>\nSKIP",font:"normal 100 29px 'Montserrat'",color:"#FFFFFF",textAlign:"center",lineHeight:27.1,lineWidth:72}}]},1).to({state:[{t:this.text_1,p:{x:320,y:176.5,text:"1日1回、現金獲得のチャンス！",font:"normal 100 29px 'Montserrat'",color:"#FFFFFF",textAlign:"center",lineHeight:22.7,lineWidth:419}}]},1).to({state:[{t:this.normal}]},1).to({state:[{t:this.normal_1}]},1).to({state:[{t:this.normal_2}]},1).to({state:[{t:this.normal_3}]},1).to({state:[{t:this.blush}]},1).to({state:[{t:this.blush_1}]},1).to({state:[{t:this.blush_2}]},1).to({state:[{t:this.blush_3}]},1).to({state:[{t:this.wet}]},1).to({state:[{t:this.wet_1}]},1).to({state:[{t:this.wet_2}]},1).to({state:[{t:this.wet_3}]},1).to({state:[{t:this.sweaty}]},1).to({state:[{t:this.sweaty_1}]},1).to({state:[{t:this.sweaty_2}]},1).to({state:[{t:this.sweaty_3}]},1).to({state:[{t:this.extra}]},1).to({state:[{t:this.extra_1}]},1).to({state:[{t:this.extra_2}]},1).to({state:[{t:this.extra_3}]},1).to({state:[{t:this.ending}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(263.7,1005,16,16);
// library properties:
lib.properties = {
	id: '1E2B34C2326343C99233F03CB50FD629',
	width: 640,
	height: 1136,
	fps: 20,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_1win.png?1514269289631", id:"_1win"},
		{src:"images/_5win.png?1514269289631", id:"_5win"},
		{src:"images/base.jpg?1514269289631", id:"base"},
		{src:"images/bg_0.jpg?1514269289631", id:"bg_0"},
		{src:"images/bl_bl_000.jpg?1514269289631", id:"bl_bl_000"},
		{src:"images/bl_bl_001.jpg?1514269289631", id:"bl_bl_001"},
		{src:"images/bl_bl_002.jpg?1514269289631", id:"bl_bl_002"},
		{src:"images/bl_bl_003.jpg?1514269289631", id:"bl_bl_003"},
		{src:"images/bl_bl_004.jpg?1514269289631", id:"bl_bl_004"},
		{src:"images/bl_bl_005.jpg?1514269289631", id:"bl_bl_005"},
		{src:"images/bl_bl_006.jpg?1514269289631", id:"bl_bl_006"},
		{src:"images/bl_bl_007.jpg?1514269289631", id:"bl_bl_007"},
		{src:"images/bl_bl_008.jpg?1514269289631", id:"bl_bl_008"},
		{src:"images/bl_bl_009.jpg?1514269289631", id:"bl_bl_009"},
		{src:"images/bl_bl_010.jpg?1514269289631", id:"bl_bl_010"},
		{src:"images/bl_bl_011.jpg?1514269289631", id:"bl_bl_011"},
		{src:"images/bl_bl_012.jpg?1514269289631", id:"bl_bl_012"},
		{src:"images/bl_bl_013.jpg?1514269289631", id:"bl_bl_013"},
		{src:"images/bl_bl_014.jpg?1514269289631", id:"bl_bl_014"},
		{src:"images/bl_bl_015.jpg?1514269289631", id:"bl_bl_015"},
		{src:"images/bl_bl_016.jpg?1514269289631", id:"bl_bl_016"},
		{src:"images/bl_bl_017.jpg?1514269289631", id:"bl_bl_017"},
		{src:"images/bl_bl_018.jpg?1514269289631", id:"bl_bl_018"},
		{src:"images/bl_bl_019.jpg?1514269289631", id:"bl_bl_019"},
		{src:"images/bl_bl_020.jpg?1514269289631", id:"bl_bl_020"},
		{src:"images/bl_bl_021.jpg?1514269289631", id:"bl_bl_021"},
		{src:"images/bl_bl_022.jpg?1514269289631", id:"bl_bl_022"},
		{src:"images/bl_bl_023.jpg?1514269289631", id:"bl_bl_023"},
		{src:"images/bl_bl_024.jpg?1514269289631", id:"bl_bl_024"},
		{src:"images/bl_bl_025.jpg?1514269289631", id:"bl_bl_025"},
		{src:"images/bl_bl_026.jpg?1514269289631", id:"bl_bl_026"},
		{src:"images/bl_bl_027.jpg?1514269289631", id:"bl_bl_027"},
		{src:"images/bl_bl_028.jpg?1514269289631", id:"bl_bl_028"},
		{src:"images/bl_bl_029.jpg?1514269289631", id:"bl_bl_029"},
		{src:"images/bl_ex_000.jpg?1514269289631", id:"bl_ex_000"},
		{src:"images/bl_ex_001.jpg?1514269289631", id:"bl_ex_001"},
		{src:"images/bl_ex_002.jpg?1514269289631", id:"bl_ex_002"},
		{src:"images/bl_ex_003.jpg?1514269289631", id:"bl_ex_003"},
		{src:"images/bl_ex_004.jpg?1514269289631", id:"bl_ex_004"},
		{src:"images/bl_ex_005.jpg?1514269289631", id:"bl_ex_005"},
		{src:"images/bl_ex_006.jpg?1514269289631", id:"bl_ex_006"},
		{src:"images/bl_ex_007.jpg?1514269289631", id:"bl_ex_007"},
		{src:"images/bl_ex_008.jpg?1514269289631", id:"bl_ex_008"},
		{src:"images/bl_ex_009.jpg?1514269289631", id:"bl_ex_009"},
		{src:"images/bl_ex_010.jpg?1514269289631", id:"bl_ex_010"},
		{src:"images/bl_ex_011.jpg?1514269289631", id:"bl_ex_011"},
		{src:"images/bl_ex_012.jpg?1514269289631", id:"bl_ex_012"},
		{src:"images/bl_ex_013.jpg?1514269289631", id:"bl_ex_013"},
		{src:"images/bl_ex_014.jpg?1514269289631", id:"bl_ex_014"},
		{src:"images/bl_ex_015.jpg?1514269289631", id:"bl_ex_015"},
		{src:"images/bl_ex_016.jpg?1514269289631", id:"bl_ex_016"},
		{src:"images/bl_ex_017.jpg?1514269289631", id:"bl_ex_017"},
		{src:"images/bl_ex_018.jpg?1514269289631", id:"bl_ex_018"},
		{src:"images/bl_ex_019.jpg?1514269289631", id:"bl_ex_019"},
		{src:"images/bl_ex_020.jpg?1514269289631", id:"bl_ex_020"},
		{src:"images/bl_ex_021.jpg?1514269289631", id:"bl_ex_021"},
		{src:"images/bl_ex_022.jpg?1514269289631", id:"bl_ex_022"},
		{src:"images/bl_ex_023.jpg?1514269289631", id:"bl_ex_023"},
		{src:"images/bl_ex_024.jpg?1514269289631", id:"bl_ex_024"},
		{src:"images/bl_ex_025.jpg?1514269289631", id:"bl_ex_025"},
		{src:"images/bl_ex_026.jpg?1514269289631", id:"bl_ex_026"},
		{src:"images/bl_ex_027.jpg?1514269289631", id:"bl_ex_027"},
		{src:"images/bl_ex_028.jpg?1514269289631", id:"bl_ex_028"},
		{src:"images/bl_ex_029.jpg?1514269289631", id:"bl_ex_029"},
		{src:"images/bl_ex_030.jpg?1514269289631", id:"bl_ex_030"},
		{src:"images/bl_ex_031.jpg?1514269289631", id:"bl_ex_031"},
		{src:"images/bl_ex_032.jpg?1514269289631", id:"bl_ex_032"},
		{src:"images/bl_ex_033.jpg?1514269289631", id:"bl_ex_033"},
		{src:"images/bl_ex_034.jpg?1514269289631", id:"bl_ex_034"},
		{src:"images/bl_ex_035.jpg?1514269289631", id:"bl_ex_035"},
		{src:"images/bl_ex_036.jpg?1514269289631", id:"bl_ex_036"},
		{src:"images/bl_ex_037.jpg?1514269289631", id:"bl_ex_037"},
		{src:"images/bl_ex_038.jpg?1514269289631", id:"bl_ex_038"},
		{src:"images/bl_ex_039.jpg?1514269289631", id:"bl_ex_039"},
		{src:"images/bl_ex_040.jpg?1514269289631", id:"bl_ex_040"},
		{src:"images/bl_ex_041.jpg?1514269289631", id:"bl_ex_041"},
		{src:"images/bl_ex_042.jpg?1514269289631", id:"bl_ex_042"},
		{src:"images/bl_ex_043.jpg?1514269289631", id:"bl_ex_043"},
		{src:"images/bl_ex_044.jpg?1514269289631", id:"bl_ex_044"},
		{src:"images/bl_ex_045.jpg?1514269289631", id:"bl_ex_045"},
		{src:"images/bl_ex_046.jpg?1514269289631", id:"bl_ex_046"},
		{src:"images/bl_ex_047.jpg?1514269289631", id:"bl_ex_047"},
		{src:"images/bl_ex_048.jpg?1514269289631", id:"bl_ex_048"},
		{src:"images/bl_ex_049.jpg?1514269289631", id:"bl_ex_049"},
		{src:"images/bl_ex_050.jpg?1514269289631", id:"bl_ex_050"},
		{src:"images/bl_ex_051.jpg?1514269289631", id:"bl_ex_051"},
		{src:"images/bl_ex_052.jpg?1514269289631", id:"bl_ex_052"},
		{src:"images/bl_ex_053.jpg?1514269289631", id:"bl_ex_053"},
		{src:"images/bl_ex_054.jpg?1514269289631", id:"bl_ex_054"},
		{src:"images/bl_ex_055.jpg?1514269289631", id:"bl_ex_055"},
		{src:"images/bl_ex_056.jpg?1514269289631", id:"bl_ex_056"},
		{src:"images/bl_ex_057.jpg?1514269289631", id:"bl_ex_057"},
		{src:"images/bl_ex_058.jpg?1514269289631", id:"bl_ex_058"},
		{src:"images/bl_ex_059.jpg?1514269289631", id:"bl_ex_059"},
		{src:"images/bl_ex_060.jpg?1514269289631", id:"bl_ex_060"},
		{src:"images/bl_ex_061.jpg?1514269289631", id:"bl_ex_061"},
		{src:"images/bl_ex_062.jpg?1514269289631", id:"bl_ex_062"},
		{src:"images/bl_ex_063.jpg?1514269289631", id:"bl_ex_063"},
		{src:"images/bl_ex_064.jpg?1514269289631", id:"bl_ex_064"},
		{src:"images/bl_ex_065.jpg?1514269289631", id:"bl_ex_065"},
		{src:"images/bl_ex_066.jpg?1514269289631", id:"bl_ex_066"},
		{src:"images/bl_ex_067.jpg?1514269289631", id:"bl_ex_067"},
		{src:"images/bl_ex_068.jpg?1514269289631", id:"bl_ex_068"},
		{src:"images/bl_ex_069.jpg?1514269289631", id:"bl_ex_069"},
		{src:"images/bl_ex_070.jpg?1514269289631", id:"bl_ex_070"},
		{src:"images/bl_ex_071.jpg?1514269289632", id:"bl_ex_071"},
		{src:"images/bl_ex_072.jpg?1514269289632", id:"bl_ex_072"},
		{src:"images/bl_ex_073.jpg?1514269289632", id:"bl_ex_073"},
		{src:"images/bl_ex_074.jpg?1514269289632", id:"bl_ex_074"},
		{src:"images/bl_ex_075.jpg?1514269289632", id:"bl_ex_075"},
		{src:"images/bl_ex_076.jpg?1514269289632", id:"bl_ex_076"},
		{src:"images/bl_ex_077.jpg?1514269289632", id:"bl_ex_077"},
		{src:"images/bl_ex_078.jpg?1514269289632", id:"bl_ex_078"},
		{src:"images/bl_ex_079.jpg?1514269289632", id:"bl_ex_079"},
		{src:"images/bl_ex_080.jpg?1514269289632", id:"bl_ex_080"},
		{src:"images/bl_ex_081.jpg?1514269289632", id:"bl_ex_081"},
		{src:"images/bl_ex_082.jpg?1514269289632", id:"bl_ex_082"},
		{src:"images/bl_ex_083.jpg?1514269289632", id:"bl_ex_083"},
		{src:"images/bl_ex_084.jpg?1514269289632", id:"bl_ex_084"},
		{src:"images/bl_ex_085.jpg?1514269289632", id:"bl_ex_085"},
		{src:"images/bl_ex_086.jpg?1514269289632", id:"bl_ex_086"},
		{src:"images/bl_ex_087.jpg?1514269289632", id:"bl_ex_087"},
		{src:"images/bl_ex_088.jpg?1514269289632", id:"bl_ex_088"},
		{src:"images/bl_ex_089.jpg?1514269289632", id:"bl_ex_089"},
		{src:"images/bl_ex_090.jpg?1514269289632", id:"bl_ex_090"},
		{src:"images/bl_ex_091.jpg?1514269289632", id:"bl_ex_091"},
		{src:"images/bl_ex_092.jpg?1514269289632", id:"bl_ex_092"},
		{src:"images/bl_ex_093.jpg?1514269289632", id:"bl_ex_093"},
		{src:"images/bl_ex_094.jpg?1514269289632", id:"bl_ex_094"},
		{src:"images/bl_ex_095.jpg?1514269289632", id:"bl_ex_095"},
		{src:"images/bl_ex_096.jpg?1514269289632", id:"bl_ex_096"},
		{src:"images/bl_ex_097.jpg?1514269289632", id:"bl_ex_097"},
		{src:"images/bl_ex_098.jpg?1514269289632", id:"bl_ex_098"},
		{src:"images/bl_ex_099.jpg?1514269289632", id:"bl_ex_099"},
		{src:"images/bl_ex_100.jpg?1514269289632", id:"bl_ex_100"},
		{src:"images/bl_ex_101.jpg?1514269289632", id:"bl_ex_101"},
		{src:"images/bl_ex_102.jpg?1514269289632", id:"bl_ex_102"},
		{src:"images/bl_ex_103.jpg?1514269289632", id:"bl_ex_103"},
		{src:"images/bl_ex_104.jpg?1514269289632", id:"bl_ex_104"},
		{src:"images/bl_ex_105.jpg?1514269289632", id:"bl_ex_105"},
		{src:"images/bl_ex_106.jpg?1514269289632", id:"bl_ex_106"},
		{src:"images/bl_ex_107.jpg?1514269289632", id:"bl_ex_107"},
		{src:"images/bl_ex_108.jpg?1514269289632", id:"bl_ex_108"},
		{src:"images/bl_ex_109.jpg?1514269289632", id:"bl_ex_109"},
		{src:"images/bl_ex_110.jpg?1514269289632", id:"bl_ex_110"},
		{src:"images/bl_ex_111.jpg?1514269289632", id:"bl_ex_111"},
		{src:"images/bl_ex_112.jpg?1514269289632", id:"bl_ex_112"},
		{src:"images/bl_ex_113.jpg?1514269289632", id:"bl_ex_113"},
		{src:"images/bl_ex_114.jpg?1514269289632", id:"bl_ex_114"},
		{src:"images/bl_ex_115.jpg?1514269289632", id:"bl_ex_115"},
		{src:"images/bl_ex_116.jpg?1514269289632", id:"bl_ex_116"},
		{src:"images/bl_ex_117.jpg?1514269289632", id:"bl_ex_117"},
		{src:"images/bl_ex_118.jpg?1514269289632", id:"bl_ex_118"},
		{src:"images/bl_ex_119.jpg?1514269289632", id:"bl_ex_119"},
		{src:"images/bl_ex_120.jpg?1514269289632", id:"bl_ex_120"},
		{src:"images/bl_ex_121.jpg?1514269289632", id:"bl_ex_121"},
		{src:"images/bl_ex_122.jpg?1514269289632", id:"bl_ex_122"},
		{src:"images/bl_ex_123.jpg?1514269289632", id:"bl_ex_123"},
		{src:"images/bl_ex_124.jpg?1514269289632", id:"bl_ex_124"},
		{src:"images/bl_ex_125.jpg?1514269289632", id:"bl_ex_125"},
		{src:"images/bl_ex_126.jpg?1514269289632", id:"bl_ex_126"},
		{src:"images/bl_ex_127.jpg?1514269289632", id:"bl_ex_127"},
		{src:"images/bl_ex_128.jpg?1514269289632", id:"bl_ex_128"},
		{src:"images/bl_ex_129.jpg?1514269289632", id:"bl_ex_129"},
		{src:"images/bl_ex_130.jpg?1514269289632", id:"bl_ex_130"},
		{src:"images/bl_ex_131.jpg?1514269289632", id:"bl_ex_131"},
		{src:"images/bl_ex_132.jpg?1514269289632", id:"bl_ex_132"},
		{src:"images/bl_ex_133.jpg?1514269289632", id:"bl_ex_133"},
		{src:"images/bl_ex_134.jpg?1514269289632", id:"bl_ex_134"},
		{src:"images/bl_ex_135.jpg?1514269289632", id:"bl_ex_135"},
		{src:"images/bl_ex_136.jpg?1514269289632", id:"bl_ex_136"},
		{src:"images/bl_ex_137.jpg?1514269289632", id:"bl_ex_137"},
		{src:"images/bl_ex_138.jpg?1514269289632", id:"bl_ex_138"},
		{src:"images/bl_ex_139.jpg?1514269289632", id:"bl_ex_139"},
		{src:"images/bl_ex_140.jpg?1514269289632", id:"bl_ex_140"},
		{src:"images/bl_ex_141.jpg?1514269289632", id:"bl_ex_141"},
		{src:"images/bl_ex_142.jpg?1514269289632", id:"bl_ex_142"},
		{src:"images/bl_ex_143.jpg?1514269289632", id:"bl_ex_143"},
		{src:"images/bl_ex_144.jpg?1514269289632", id:"bl_ex_144"},
		{src:"images/bl_ex_145.jpg?1514269289632", id:"bl_ex_145"},
		{src:"images/bl_ex_146.jpg?1514269289632", id:"bl_ex_146"},
		{src:"images/bl_ex_147.jpg?1514269289632", id:"bl_ex_147"},
		{src:"images/bl_ex_148.jpg?1514269289632", id:"bl_ex_148"},
		{src:"images/bl_ex_149.jpg?1514269289632", id:"bl_ex_149"},
		{src:"images/bl_ex_150.jpg?1514269289632", id:"bl_ex_150"},
		{src:"images/bl_ex_151.jpg?1514269289632", id:"bl_ex_151"},
		{src:"images/bl_ex_152.jpg?1514269289632", id:"bl_ex_152"},
		{src:"images/bl_ex_153.jpg?1514269289632", id:"bl_ex_153"},
		{src:"images/bl_ex_154.jpg?1514269289632", id:"bl_ex_154"},
		{src:"images/bl_ex_155.jpg?1514269289632", id:"bl_ex_155"},
		{src:"images/bl_ex_156.jpg?1514269289632", id:"bl_ex_156"},
		{src:"images/bl_ex_157.jpg?1514269289632", id:"bl_ex_157"},
		{src:"images/bl_ex_158.jpg?1514269289632", id:"bl_ex_158"},
		{src:"images/bl_ex_159.jpg?1514269289632", id:"bl_ex_159"},
		{src:"images/bl_ex_160.jpg?1514269289632", id:"bl_ex_160"},
		{src:"images/bl_no_000.jpg?1514269289632", id:"bl_no_000"},
		{src:"images/bl_no_001.jpg?1514269289632", id:"bl_no_001"},
		{src:"images/bl_no_002.jpg?1514269289632", id:"bl_no_002"},
		{src:"images/bl_no_003.jpg?1514269289632", id:"bl_no_003"},
		{src:"images/bl_no_004.jpg?1514269289632", id:"bl_no_004"},
		{src:"images/bl_no_005.jpg?1514269289632", id:"bl_no_005"},
		{src:"images/bl_no_006.jpg?1514269289632", id:"bl_no_006"},
		{src:"images/bl_no_007.jpg?1514269289632", id:"bl_no_007"},
		{src:"images/bl_no_008.jpg?1514269289632", id:"bl_no_008"},
		{src:"images/bl_no_009.jpg?1514269289632", id:"bl_no_009"},
		{src:"images/bl_no_010.jpg?1514269289632", id:"bl_no_010"},
		{src:"images/bl_no_011.jpg?1514269289632", id:"bl_no_011"},
		{src:"images/bl_no_012.jpg?1514269289632", id:"bl_no_012"},
		{src:"images/bl_no_013.jpg?1514269289632", id:"bl_no_013"},
		{src:"images/bl_no_014.jpg?1514269289632", id:"bl_no_014"},
		{src:"images/bl_no_015.jpg?1514269289632", id:"bl_no_015"},
		{src:"images/bl_no_016.jpg?1514269289632", id:"bl_no_016"},
		{src:"images/bl_no_017.jpg?1514269289632", id:"bl_no_017"},
		{src:"images/bl_no_018.jpg?1514269289632", id:"bl_no_018"},
		{src:"images/bl_no_019.jpg?1514269289632", id:"bl_no_019"},
		{src:"images/bl_no_020.jpg?1514269289632", id:"bl_no_020"},
		{src:"images/bl_no_021.jpg?1514269289632", id:"bl_no_021"},
		{src:"images/bl_no_022.jpg?1514269289632", id:"bl_no_022"},
		{src:"images/bl_no_023.jpg?1514269289632", id:"bl_no_023"},
		{src:"images/bl_no_024.jpg?1514269289632", id:"bl_no_024"},
		{src:"images/bl_no_025.jpg?1514269289632", id:"bl_no_025"},
		{src:"images/bl_no_026.jpg?1514269289632", id:"bl_no_026"},
		{src:"images/bl_no_027.jpg?1514269289632", id:"bl_no_027"},
		{src:"images/bl_no_028.jpg?1514269289632", id:"bl_no_028"},
		{src:"images/bl_no_029.jpg?1514269289632", id:"bl_no_029"},
		{src:"images/bl_no_030.jpg?1514269289632", id:"bl_no_030"},
		{src:"images/bl_no_031.jpg?1514269289632", id:"bl_no_031"},
		{src:"images/bl_no_032.jpg?1514269289632", id:"bl_no_032"},
		{src:"images/bl_no_033.jpg?1514269289632", id:"bl_no_033"},
		{src:"images/bl_no_034.jpg?1514269289632", id:"bl_no_034"},
		{src:"images/bl_sw_000.jpg?1514269289632", id:"bl_sw_000"},
		{src:"images/bl_sw_001.jpg?1514269289632", id:"bl_sw_001"},
		{src:"images/bl_sw_002.jpg?1514269289632", id:"bl_sw_002"},
		{src:"images/bl_sw_003.jpg?1514269289632", id:"bl_sw_003"},
		{src:"images/bl_sw_004.jpg?1514269289632", id:"bl_sw_004"},
		{src:"images/bl_sw_005.jpg?1514269289632", id:"bl_sw_005"},
		{src:"images/bl_sw_006.jpg?1514269289632", id:"bl_sw_006"},
		{src:"images/bl_sw_007.jpg?1514269289632", id:"bl_sw_007"},
		{src:"images/bl_sw_008.jpg?1514269289632", id:"bl_sw_008"},
		{src:"images/bl_sw_009.jpg?1514269289632", id:"bl_sw_009"},
		{src:"images/bl_sw_010.jpg?1514269289632", id:"bl_sw_010"},
		{src:"images/bl_sw_011.jpg?1514269289632", id:"bl_sw_011"},
		{src:"images/bl_sw_012.jpg?1514269289632", id:"bl_sw_012"},
		{src:"images/bl_sw_013.jpg?1514269289632", id:"bl_sw_013"},
		{src:"images/bl_sw_014.jpg?1514269289632", id:"bl_sw_014"},
		{src:"images/bl_sw_015.jpg?1514269289632", id:"bl_sw_015"},
		{src:"images/bl_sw_016.jpg?1514269289632", id:"bl_sw_016"},
		{src:"images/bl_sw_017.jpg?1514269289632", id:"bl_sw_017"},
		{src:"images/bl_sw_018.jpg?1514269289632", id:"bl_sw_018"},
		{src:"images/bl_sw_019.jpg?1514269289632", id:"bl_sw_019"},
		{src:"images/bl_sw_020.jpg?1514269289632", id:"bl_sw_020"},
		{src:"images/bl_sw_021.jpg?1514269289632", id:"bl_sw_021"},
		{src:"images/bl_sw_022.jpg?1514269289632", id:"bl_sw_022"},
		{src:"images/bl_sw_023.jpg?1514269289632", id:"bl_sw_023"},
		{src:"images/bl_sw_024.jpg?1514269289632", id:"bl_sw_024"},
		{src:"images/bl_sw_025.jpg?1514269289632", id:"bl_sw_025"},
		{src:"images/bl_sw_026.jpg?1514269289632", id:"bl_sw_026"},
		{src:"images/bl_sw_027.jpg?1514269289632", id:"bl_sw_027"},
		{src:"images/bl_sw_028.jpg?1514269289632", id:"bl_sw_028"},
		{src:"images/bl_sw_029.jpg?1514269289632", id:"bl_sw_029"},
		{src:"images/bl_sw_030.jpg?1514269289632", id:"bl_sw_030"},
		{src:"images/bl_sw_031.jpg?1514269289632", id:"bl_sw_031"},
		{src:"images/bl_sw_032.jpg?1514269289632", id:"bl_sw_032"},
		{src:"images/bl_sw_033.jpg?1514269289632", id:"bl_sw_033"},
		{src:"images/bl_sw_034.jpg?1514269289632", id:"bl_sw_034"},
		{src:"images/bl_sw_035.jpg?1514269289632", id:"bl_sw_035"},
		{src:"images/bl_sw_036.jpg?1514269289632", id:"bl_sw_036"},
		{src:"images/bl_sw_037.jpg?1514269289632", id:"bl_sw_037"},
		{src:"images/bl_sw_038.jpg?1514269289632", id:"bl_sw_038"},
		{src:"images/bl_sw_039.jpg?1514269289632", id:"bl_sw_039"},
		{src:"images/bl_sw_040.jpg?1514269289632", id:"bl_sw_040"},
		{src:"images/bl_sw_041.jpg?1514269289632", id:"bl_sw_041"},
		{src:"images/bl_sw_042.jpg?1514269289632", id:"bl_sw_042"},
		{src:"images/bl_sw_043.jpg?1514269289632", id:"bl_sw_043"},
		{src:"images/bl_sw_044.jpg?1514269289632", id:"bl_sw_044"},
		{src:"images/bl_sw_045.jpg?1514269289632", id:"bl_sw_045"},
		{src:"images/bl_sw_046.jpg?1514269289632", id:"bl_sw_046"},
		{src:"images/bl_sw_047.jpg?1514269289632", id:"bl_sw_047"},
		{src:"images/bl_sw_048.jpg?1514269289632", id:"bl_sw_048"},
		{src:"images/bl_sw_049.jpg?1514269289632", id:"bl_sw_049"},
		{src:"images/bl_sw_050.jpg?1514269289632", id:"bl_sw_050"},
		{src:"images/bl_sw_051.jpg?1514269289632", id:"bl_sw_051"},
		{src:"images/bl_sw_052.jpg?1514269289632", id:"bl_sw_052"},
		{src:"images/bl_sw_053.jpg?1514269289632", id:"bl_sw_053"},
		{src:"images/bl_sw_054.jpg?1514269289632", id:"bl_sw_054"},
		{src:"images/bl_sw_055.jpg?1514269289632", id:"bl_sw_055"},
		{src:"images/bl_sw_056.jpg?1514269289632", id:"bl_sw_056"},
		{src:"images/bl_sw_057.jpg?1514269289632", id:"bl_sw_057"},
		{src:"images/bl_sw_058.jpg?1514269289632", id:"bl_sw_058"},
		{src:"images/bl_sw_059.jpg?1514269289632", id:"bl_sw_059"},
		{src:"images/bl_sw_060.jpg?1514269289632", id:"bl_sw_060"},
		{src:"images/bl_sw_061.jpg?1514269289632", id:"bl_sw_061"},
		{src:"images/bl_sw_062.jpg?1514269289632", id:"bl_sw_062"},
		{src:"images/bl_sw_063.jpg?1514269289632", id:"bl_sw_063"},
		{src:"images/bl_sw_064.jpg?1514269289632", id:"bl_sw_064"},
		{src:"images/bl_sw_065.jpg?1514269289632", id:"bl_sw_065"},
		{src:"images/bl_sw_066.jpg?1514269289632", id:"bl_sw_066"},
		{src:"images/bl_sw_067.jpg?1514269289632", id:"bl_sw_067"},
		{src:"images/bl_sw_068.jpg?1514269289632", id:"bl_sw_068"},
		{src:"images/bl_sw_069.jpg?1514269289632", id:"bl_sw_069"},
		{src:"images/bl_sw_070.jpg?1514269289632", id:"bl_sw_070"},
		{src:"images/bl_sw_071.jpg?1514269289632", id:"bl_sw_071"},
		{src:"images/bl_sw_072.jpg?1514269289632", id:"bl_sw_072"},
		{src:"images/bl_sw_073.jpg?1514269289632", id:"bl_sw_073"},
		{src:"images/bl_sw_074.jpg?1514269289632", id:"bl_sw_074"},
		{src:"images/bl_sw_075.jpg?1514269289632", id:"bl_sw_075"},
		{src:"images/bl_sw_076.jpg?1514269289632", id:"bl_sw_076"},
		{src:"images/bl_sw_077.jpg?1514269289632", id:"bl_sw_077"},
		{src:"images/bl_sw_078.jpg?1514269289632", id:"bl_sw_078"},
		{src:"images/bl_sw_079.jpg?1514269289632", id:"bl_sw_079"},
		{src:"images/bl_sw_080.jpg?1514269289632", id:"bl_sw_080"},
		{src:"images/bl_sw_081.jpg?1514269289632", id:"bl_sw_081"},
		{src:"images/bl_sw_082.jpg?1514269289632", id:"bl_sw_082"},
		{src:"images/bl_sw_083.jpg?1514269289632", id:"bl_sw_083"},
		{src:"images/bl_sw_084.jpg?1514269289632", id:"bl_sw_084"},
		{src:"images/bl_sw_085.jpg?1514269289632", id:"bl_sw_085"},
		{src:"images/bl_sw_086.jpg?1514269289632", id:"bl_sw_086"},
		{src:"images/bl_sw_087.jpg?1514269289632", id:"bl_sw_087"},
		{src:"images/bl_sw_088.jpg?1514269289632", id:"bl_sw_088"},
		{src:"images/bl_sw_089.jpg?1514269289632", id:"bl_sw_089"},
		{src:"images/bl_sw_090.jpg?1514269289632", id:"bl_sw_090"},
		{src:"images/bl_sw_091.jpg?1514269289632", id:"bl_sw_091"},
		{src:"images/bl_sw_092.jpg?1514269289632", id:"bl_sw_092"},
		{src:"images/bl_sw_093.jpg?1514269289632", id:"bl_sw_093"},
		{src:"images/bl_sw_094.jpg?1514269289632", id:"bl_sw_094"},
		{src:"images/bl_sw_095.jpg?1514269289632", id:"bl_sw_095"},
		{src:"images/bl_sw_096.jpg?1514269289632", id:"bl_sw_096"},
		{src:"images/bl_sw_097.jpg?1514269289632", id:"bl_sw_097"},
		{src:"images/bl_sw_098.jpg?1514269289632", id:"bl_sw_098"},
		{src:"images/bl_sw_099.jpg?1514269289632", id:"bl_sw_099"},
		{src:"images/bl_sw_100.jpg?1514269289632", id:"bl_sw_100"},
		{src:"images/bl_sw_101.jpg?1514269289632", id:"bl_sw_101"},
		{src:"images/bl_sw_102.jpg?1514269289632", id:"bl_sw_102"},
		{src:"images/bl_sw_103.jpg?1514269289632", id:"bl_sw_103"},
		{src:"images/bl_sw_104.jpg?1514269289632", id:"bl_sw_104"},
		{src:"images/bl_sw_105.jpg?1514269289632", id:"bl_sw_105"},
		{src:"images/bl_sw_106.jpg?1514269289632", id:"bl_sw_106"},
		{src:"images/bl_sw_107.jpg?1514269289632", id:"bl_sw_107"},
		{src:"images/bl_sw_108.jpg?1514269289632", id:"bl_sw_108"},
		{src:"images/bl_sw_109.jpg?1514269289632", id:"bl_sw_109"},
		{src:"images/bl_sw_110.jpg?1514269289632", id:"bl_sw_110"},
		{src:"images/bl_sw_111.jpg?1514269289632", id:"bl_sw_111"},
		{src:"images/bl_sw_112.jpg?1514269289632", id:"bl_sw_112"},
		{src:"images/bl_sw_113.jpg?1514269289633", id:"bl_sw_113"},
		{src:"images/bl_sw_114.jpg?1514269289633", id:"bl_sw_114"},
		{src:"images/bl_sw_115.jpg?1514269289633", id:"bl_sw_115"},
		{src:"images/bl_sw_116.jpg?1514269289633", id:"bl_sw_116"},
		{src:"images/bl_sw_117.jpg?1514269289633", id:"bl_sw_117"},
		{src:"images/bl_sw_118.jpg?1514269289633", id:"bl_sw_118"},
		{src:"images/bl_sw_119.jpg?1514269289633", id:"bl_sw_119"},
		{src:"images/bl_sw_120.jpg?1514269289633", id:"bl_sw_120"},
		{src:"images/bl_sw_121.jpg?1514269289633", id:"bl_sw_121"},
		{src:"images/bl_sw_122.jpg?1514269289633", id:"bl_sw_122"},
		{src:"images/bl_sw_123.jpg?1514269289633", id:"bl_sw_123"},
		{src:"images/bl_sw_124.jpg?1514269289633", id:"bl_sw_124"},
		{src:"images/bl_sw_125.jpg?1514269289633", id:"bl_sw_125"},
		{src:"images/bl_sw_126.jpg?1514269289633", id:"bl_sw_126"},
		{src:"images/bl_sw_127.jpg?1514269289633", id:"bl_sw_127"},
		{src:"images/bl_sw_128.jpg?1514269289633", id:"bl_sw_128"},
		{src:"images/bl_sw_129.jpg?1514269289633", id:"bl_sw_129"},
		{src:"images/bl_sw_130.jpg?1514269289633", id:"bl_sw_130"},
		{src:"images/bl_sw_131.jpg?1514269289633", id:"bl_sw_131"},
		{src:"images/bl_sw_132.jpg?1514269289633", id:"bl_sw_132"},
		{src:"images/bl_sw_133.jpg?1514269289633", id:"bl_sw_133"},
		{src:"images/bl_sw_134.jpg?1514269289633", id:"bl_sw_134"},
		{src:"images/bl_sw_135.jpg?1514269289633", id:"bl_sw_135"},
		{src:"images/bl_sw_136.jpg?1514269289633", id:"bl_sw_136"},
		{src:"images/bl_sw_137.jpg?1514269289633", id:"bl_sw_137"},
		{src:"images/bl_sw_138.jpg?1514269289633", id:"bl_sw_138"},
		{src:"images/bl_sw_139.jpg?1514269289633", id:"bl_sw_139"},
		{src:"images/bl_sw_140.jpg?1514269289633", id:"bl_sw_140"},
		{src:"images/bl_sw_141.jpg?1514269289633", id:"bl_sw_141"},
		{src:"images/bl_sw_142.jpg?1514269289633", id:"bl_sw_142"},
		{src:"images/bl_sw_143.jpg?1514269289633", id:"bl_sw_143"},
		{src:"images/bl_sw_144.jpg?1514269289633", id:"bl_sw_144"},
		{src:"images/bl_sw_145.jpg?1514269289633", id:"bl_sw_145"},
		{src:"images/bl_sw_146.jpg?1514269289633", id:"bl_sw_146"},
		{src:"images/bl_sw_147.jpg?1514269289633", id:"bl_sw_147"},
		{src:"images/bl_sw_148.jpg?1514269289633", id:"bl_sw_148"},
		{src:"images/bl_sw_149.jpg?1514269289633", id:"bl_sw_149"},
		{src:"images/bl_sw_150.jpg?1514269289633", id:"bl_sw_150"},
		{src:"images/bl_sw_151.jpg?1514269289633", id:"bl_sw_151"},
		{src:"images/bl_sw_152.jpg?1514269289633", id:"bl_sw_152"},
		{src:"images/bl_sw_153.jpg?1514269289633", id:"bl_sw_153"},
		{src:"images/bl_sw_154.jpg?1514269289633", id:"bl_sw_154"},
		{src:"images/bl_sw_155.jpg?1514269289633", id:"bl_sw_155"},
		{src:"images/bl_sw_156.jpg?1514269289633", id:"bl_sw_156"},
		{src:"images/bl_sw_157.jpg?1514269289633", id:"bl_sw_157"},
		{src:"images/bl_sw_158.jpg?1514269289633", id:"bl_sw_158"},
		{src:"images/bl_sw_159.jpg?1514269289633", id:"bl_sw_159"},
		{src:"images/bl_sw_160.jpg?1514269289633", id:"bl_sw_160"},
		{src:"images/bl_sw_161.jpg?1514269289633", id:"bl_sw_161"},
		{src:"images/bl_sw_162.jpg?1514269289633", id:"bl_sw_162"},
		{src:"images/bl_sw_163.jpg?1514269289633", id:"bl_sw_163"},
		{src:"images/bl_sw_164.jpg?1514269289633", id:"bl_sw_164"},
		{src:"images/bl_sw_165.jpg?1514269289633", id:"bl_sw_165"},
		{src:"images/bl_sw_166.jpg?1514269289633", id:"bl_sw_166"},
		{src:"images/bl_sw_167.jpg?1514269289633", id:"bl_sw_167"},
		{src:"images/bl_sw_168.jpg?1514269289633", id:"bl_sw_168"},
		{src:"images/bl_sw_169.jpg?1514269289633", id:"bl_sw_169"},
		{src:"images/bl_sw_170.jpg?1514269289633", id:"bl_sw_170"},
		{src:"images/bl_sw_171.jpg?1514269289633", id:"bl_sw_171"},
		{src:"images/bl_sw_172.jpg?1514269289633", id:"bl_sw_172"},
		{src:"images/bl_sw_173.jpg?1514269289633", id:"bl_sw_173"},
		{src:"images/bl_sw_174.jpg?1514269289633", id:"bl_sw_174"},
		{src:"images/bl_sw_175.jpg?1514269289633", id:"bl_sw_175"},
		{src:"images/bl_sw_176.jpg?1514269289633", id:"bl_sw_176"},
		{src:"images/bl_sw_177.jpg?1514269289633", id:"bl_sw_177"},
		{src:"images/bl_sw_178.jpg?1514269289633", id:"bl_sw_178"},
		{src:"images/bl_sw_179.jpg?1514269289633", id:"bl_sw_179"},
		{src:"images/bl_we_000.jpg?1514269289633", id:"bl_we_000"},
		{src:"images/bl_we_001.jpg?1514269289633", id:"bl_we_001"},
		{src:"images/bl_we_002.jpg?1514269289633", id:"bl_we_002"},
		{src:"images/bl_we_003.jpg?1514269289633", id:"bl_we_003"},
		{src:"images/bl_we_004.jpg?1514269289633", id:"bl_we_004"},
		{src:"images/bl_we_005.jpg?1514269289633", id:"bl_we_005"},
		{src:"images/bl_we_006.jpg?1514269289633", id:"bl_we_006"},
		{src:"images/bl_we_007.jpg?1514269289633", id:"bl_we_007"},
		{src:"images/bl_we_008.jpg?1514269289633", id:"bl_we_008"},
		{src:"images/bl_we_009.jpg?1514269289633", id:"bl_we_009"},
		{src:"images/bl_we_010.jpg?1514269289633", id:"bl_we_010"},
		{src:"images/bl_we_011.jpg?1514269289633", id:"bl_we_011"},
		{src:"images/bl_we_012.jpg?1514269289633", id:"bl_we_012"},
		{src:"images/bl_we_013.jpg?1514269289633", id:"bl_we_013"},
		{src:"images/bl_we_014.jpg?1514269289633", id:"bl_we_014"},
		{src:"images/bl_we_015.jpg?1514269289633", id:"bl_we_015"},
		{src:"images/bl_we_016.jpg?1514269289633", id:"bl_we_016"},
		{src:"images/bl_we_017.jpg?1514269289633", id:"bl_we_017"},
		{src:"images/bl_we_018.jpg?1514269289633", id:"bl_we_018"},
		{src:"images/bl_we_019.jpg?1514269289633", id:"bl_we_019"},
		{src:"images/bl_we_020.jpg?1514269289633", id:"bl_we_020"},
		{src:"images/bl_we_021.jpg?1514269289633", id:"bl_we_021"},
		{src:"images/bl_we_022.jpg?1514269289633", id:"bl_we_022"},
		{src:"images/bl_we_023.jpg?1514269289633", id:"bl_we_023"},
		{src:"images/bl_we_024.jpg?1514269289633", id:"bl_we_024"},
		{src:"images/bl_we_025.jpg?1514269289633", id:"bl_we_025"},
		{src:"images/bl_we_026.jpg?1514269289633", id:"bl_we_026"},
		{src:"images/bl_we_027.jpg?1514269289633", id:"bl_we_027"},
		{src:"images/bl_we_028.jpg?1514269289633", id:"bl_we_028"},
		{src:"images/bl_we_029.jpg?1514269289633", id:"bl_we_029"},
		{src:"images/bl_we_030.jpg?1514269289633", id:"bl_we_030"},
		{src:"images/bl_we_031.jpg?1514269289633", id:"bl_we_031"},
		{src:"images/bl_we_032.jpg?1514269289633", id:"bl_we_032"},
		{src:"images/bl_we_033.jpg?1514269289633", id:"bl_we_033"},
		{src:"images/bl_we_034.jpg?1514269289633", id:"bl_we_034"},
		{src:"images/bl_we_035.jpg?1514269289633", id:"bl_we_035"},
		{src:"images/bl_we_036.jpg?1514269289633", id:"bl_we_036"},
		{src:"images/bl_we_037.jpg?1514269289633", id:"bl_we_037"},
		{src:"images/bl_we_038.jpg?1514269289633", id:"bl_we_038"},
		{src:"images/bl_we_039.jpg?1514269289633", id:"bl_we_039"},
		{src:"images/bl_we_040.jpg?1514269289633", id:"bl_we_040"},
		{src:"images/bl_we_041.jpg?1514269289633", id:"bl_we_041"},
		{src:"images/bl_we_042.jpg?1514269289633", id:"bl_we_042"},
		{src:"images/bl_we_043.jpg?1514269289633", id:"bl_we_043"},
		{src:"images/bl_we_044.jpg?1514269289633", id:"bl_we_044"},
		{src:"images/bl_we_045.jpg?1514269289633", id:"bl_we_045"},
		{src:"images/bl_we_046.jpg?1514269289633", id:"bl_we_046"},
		{src:"images/bl_we_047.jpg?1514269289633", id:"bl_we_047"},
		{src:"images/bl_we_048.jpg?1514269289633", id:"bl_we_048"},
		{src:"images/bl_we_049.jpg?1514269289633", id:"bl_we_049"},
		{src:"images/blush_0.jpg?1514269289633", id:"blush_0"},
		{src:"images/blush_1.jpg?1514269289633", id:"blush_1"},
		{src:"images/body.png?1514269289633", id:"body"},
		{src:"images/closeEyes.png?1514269289633", id:"closeEyes"},
		{src:"images/ending_0.jpg?1514269289633", id:"ending_0"},
		{src:"images/ending_1.jpg?1514269289633", id:"ending_1"},
		{src:"images/ending_2.jpg?1514269289633", id:"ending_2"},
		{src:"images/extra_0.jpg?1514269289633", id:"extra_0"},
		{src:"images/extra_1.jpg?1514269289633", id:"extra_1"},
		{src:"images/fa_bl_000.jpg?1514269289633", id:"fa_bl_000"},
		{src:"images/fa_bl_001.jpg?1514269289633", id:"fa_bl_001"},
		{src:"images/fa_bl_002.jpg?1514269289633", id:"fa_bl_002"},
		{src:"images/fa_bl_003.jpg?1514269289633", id:"fa_bl_003"},
		{src:"images/fa_bl_004.jpg?1514269289633", id:"fa_bl_004"},
		{src:"images/fa_bl_005.jpg?1514269289633", id:"fa_bl_005"},
		{src:"images/fa_bl_006.jpg?1514269289633", id:"fa_bl_006"},
		{src:"images/fa_bl_007.jpg?1514269289633", id:"fa_bl_007"},
		{src:"images/fa_bl_008.jpg?1514269289633", id:"fa_bl_008"},
		{src:"images/fa_bl_009.jpg?1514269289633", id:"fa_bl_009"},
		{src:"images/fa_bl_010.jpg?1514269289633", id:"fa_bl_010"},
		{src:"images/fa_bl_011.jpg?1514269289633", id:"fa_bl_011"},
		{src:"images/fa_bl_012.jpg?1514269289633", id:"fa_bl_012"},
		{src:"images/fa_bl_013.jpg?1514269289633", id:"fa_bl_013"},
		{src:"images/fa_bl_014.jpg?1514269289633", id:"fa_bl_014"},
		{src:"images/fa_bl_015.jpg?1514269289633", id:"fa_bl_015"},
		{src:"images/fa_bl_016.jpg?1514269289633", id:"fa_bl_016"},
		{src:"images/fa_bl_017.jpg?1514269289633", id:"fa_bl_017"},
		{src:"images/fa_bl_018.jpg?1514269289633", id:"fa_bl_018"},
		{src:"images/fa_bl_019.jpg?1514269289633", id:"fa_bl_019"},
		{src:"images/fa_bl_020.jpg?1514269289633", id:"fa_bl_020"},
		{src:"images/fa_bl_021.jpg?1514269289633", id:"fa_bl_021"},
		{src:"images/fa_bl_022.jpg?1514269289633", id:"fa_bl_022"},
		{src:"images/fa_bl_023.jpg?1514269289633", id:"fa_bl_023"},
		{src:"images/fa_bl_024.jpg?1514269289633", id:"fa_bl_024"},
		{src:"images/fa_bl_025.jpg?1514269289633", id:"fa_bl_025"},
		{src:"images/fa_bl_026.jpg?1514269289633", id:"fa_bl_026"},
		{src:"images/fa_bl_027.jpg?1514269289633", id:"fa_bl_027"},
		{src:"images/fa_bl_028.jpg?1514269289633", id:"fa_bl_028"},
		{src:"images/fa_bl_029.jpg?1514269289633", id:"fa_bl_029"},
		{src:"images/fa_ex_000.jpg?1514269289633", id:"fa_ex_000"},
		{src:"images/fa_ex_001.jpg?1514269289633", id:"fa_ex_001"},
		{src:"images/fa_ex_002.jpg?1514269289633", id:"fa_ex_002"},
		{src:"images/fa_ex_003.jpg?1514269289633", id:"fa_ex_003"},
		{src:"images/fa_ex_004.jpg?1514269289633", id:"fa_ex_004"},
		{src:"images/fa_ex_005.jpg?1514269289633", id:"fa_ex_005"},
		{src:"images/fa_ex_006.jpg?1514269289633", id:"fa_ex_006"},
		{src:"images/fa_ex_007.jpg?1514269289633", id:"fa_ex_007"},
		{src:"images/fa_ex_008.jpg?1514269289633", id:"fa_ex_008"},
		{src:"images/fa_ex_009.jpg?1514269289633", id:"fa_ex_009"},
		{src:"images/fa_ex_010.jpg?1514269289633", id:"fa_ex_010"},
		{src:"images/fa_ex_011.jpg?1514269289633", id:"fa_ex_011"},
		{src:"images/fa_ex_012.jpg?1514269289633", id:"fa_ex_012"},
		{src:"images/fa_ex_013.jpg?1514269289633", id:"fa_ex_013"},
		{src:"images/fa_ex_014.jpg?1514269289633", id:"fa_ex_014"},
		{src:"images/fa_ex_015.jpg?1514269289633", id:"fa_ex_015"},
		{src:"images/fa_ex_016.jpg?1514269289633", id:"fa_ex_016"},
		{src:"images/fa_ex_017.jpg?1514269289633", id:"fa_ex_017"},
		{src:"images/fa_ex_018.jpg?1514269289633", id:"fa_ex_018"},
		{src:"images/fa_ex_019.jpg?1514269289633", id:"fa_ex_019"},
		{src:"images/fa_ex_020.jpg?1514269289633", id:"fa_ex_020"},
		{src:"images/fa_ex_021.jpg?1514269289633", id:"fa_ex_021"},
		{src:"images/fa_ex_022.jpg?1514269289633", id:"fa_ex_022"},
		{src:"images/fa_ex_023.jpg?1514269289633", id:"fa_ex_023"},
		{src:"images/fa_ex_024.jpg?1514269289633", id:"fa_ex_024"},
		{src:"images/fa_ex_025.jpg?1514269289633", id:"fa_ex_025"},
		{src:"images/fa_ex_026.jpg?1514269289633", id:"fa_ex_026"},
		{src:"images/fa_ex_027.jpg?1514269289633", id:"fa_ex_027"},
		{src:"images/fa_ex_028.jpg?1514269289633", id:"fa_ex_028"},
		{src:"images/fa_ex_029.jpg?1514269289633", id:"fa_ex_029"},
		{src:"images/fa_ex_030.jpg?1514269289633", id:"fa_ex_030"},
		{src:"images/fa_ex_031.jpg?1514269289633", id:"fa_ex_031"},
		{src:"images/fa_ex_032.jpg?1514269289633", id:"fa_ex_032"},
		{src:"images/fa_ex_033.jpg?1514269289633", id:"fa_ex_033"},
		{src:"images/fa_ex_034.jpg?1514269289633", id:"fa_ex_034"},
		{src:"images/fa_ex_035.jpg?1514269289633", id:"fa_ex_035"},
		{src:"images/fa_ex_036.jpg?1514269289633", id:"fa_ex_036"},
		{src:"images/fa_ex_037.jpg?1514269289633", id:"fa_ex_037"},
		{src:"images/fa_ex_038.jpg?1514269289633", id:"fa_ex_038"},
		{src:"images/fa_ex_039.jpg?1514269289633", id:"fa_ex_039"},
		{src:"images/fa_ex_040.jpg?1514269289633", id:"fa_ex_040"},
		{src:"images/fa_ex_041.jpg?1514269289633", id:"fa_ex_041"},
		{src:"images/fa_ex_042.jpg?1514269289633", id:"fa_ex_042"},
		{src:"images/fa_ex_043.jpg?1514269289633", id:"fa_ex_043"},
		{src:"images/fa_ex_044.jpg?1514269289633", id:"fa_ex_044"},
		{src:"images/fa_ex_045.jpg?1514269289633", id:"fa_ex_045"},
		{src:"images/fa_ex_046.jpg?1514269289633", id:"fa_ex_046"},
		{src:"images/fa_ex_047.jpg?1514269289633", id:"fa_ex_047"},
		{src:"images/fa_ex_048.jpg?1514269289633", id:"fa_ex_048"},
		{src:"images/fa_ex_049.jpg?1514269289633", id:"fa_ex_049"},
		{src:"images/fa_ex_050.jpg?1514269289633", id:"fa_ex_050"},
		{src:"images/fa_ex_051.jpg?1514269289633", id:"fa_ex_051"},
		{src:"images/fa_ex_052.jpg?1514269289633", id:"fa_ex_052"},
		{src:"images/fa_ex_053.jpg?1514269289633", id:"fa_ex_053"},
		{src:"images/fa_ex_054.jpg?1514269289633", id:"fa_ex_054"},
		{src:"images/fa_ex_055.jpg?1514269289633", id:"fa_ex_055"},
		{src:"images/fa_ex_056.jpg?1514269289633", id:"fa_ex_056"},
		{src:"images/fa_ex_057.jpg?1514269289633", id:"fa_ex_057"},
		{src:"images/fa_ex_058.jpg?1514269289633", id:"fa_ex_058"},
		{src:"images/fa_ex_059.jpg?1514269289633", id:"fa_ex_059"},
		{src:"images/fa_ex_060.jpg?1514269289633", id:"fa_ex_060"},
		{src:"images/fa_ex_061.jpg?1514269289633", id:"fa_ex_061"},
		{src:"images/fa_ex_062.jpg?1514269289633", id:"fa_ex_062"},
		{src:"images/fa_ex_063.jpg?1514269289633", id:"fa_ex_063"},
		{src:"images/fa_ex_064.jpg?1514269289633", id:"fa_ex_064"},
		{src:"images/fa_ex_065.jpg?1514269289633", id:"fa_ex_065"},
		{src:"images/fa_ex_066.jpg?1514269289633", id:"fa_ex_066"},
		{src:"images/fa_ex_067.jpg?1514269289633", id:"fa_ex_067"},
		{src:"images/fa_ex_068.jpg?1514269289633", id:"fa_ex_068"},
		{src:"images/fa_ex_069.jpg?1514269289633", id:"fa_ex_069"},
		{src:"images/fa_ex_070.jpg?1514269289634", id:"fa_ex_070"},
		{src:"images/fa_ex_071.jpg?1514269289634", id:"fa_ex_071"},
		{src:"images/fa_ex_072.jpg?1514269289634", id:"fa_ex_072"},
		{src:"images/fa_ex_073.jpg?1514269289634", id:"fa_ex_073"},
		{src:"images/fa_ex_074.jpg?1514269289634", id:"fa_ex_074"},
		{src:"images/fa_ex_075.jpg?1514269289634", id:"fa_ex_075"},
		{src:"images/fa_ex_076.jpg?1514269289634", id:"fa_ex_076"},
		{src:"images/fa_ex_077.jpg?1514269289634", id:"fa_ex_077"},
		{src:"images/fa_ex_078.jpg?1514269289634", id:"fa_ex_078"},
		{src:"images/fa_ex_079.jpg?1514269289634", id:"fa_ex_079"},
		{src:"images/fa_ex_080.jpg?1514269289634", id:"fa_ex_080"},
		{src:"images/fa_ex_081.jpg?1514269289634", id:"fa_ex_081"},
		{src:"images/fa_ex_082.jpg?1514269289634", id:"fa_ex_082"},
		{src:"images/fa_ex_083.jpg?1514269289634", id:"fa_ex_083"},
		{src:"images/fa_ex_084.jpg?1514269289634", id:"fa_ex_084"},
		{src:"images/fa_ex_085.jpg?1514269289634", id:"fa_ex_085"},
		{src:"images/fa_ex_086.jpg?1514269289634", id:"fa_ex_086"},
		{src:"images/fa_ex_087.jpg?1514269289634", id:"fa_ex_087"},
		{src:"images/fa_ex_088.jpg?1514269289634", id:"fa_ex_088"},
		{src:"images/fa_ex_089.jpg?1514269289634", id:"fa_ex_089"},
		{src:"images/fa_ex_090.jpg?1514269289634", id:"fa_ex_090"},
		{src:"images/fa_ex_091.jpg?1514269289634", id:"fa_ex_091"},
		{src:"images/fa_ex_092.jpg?1514269289634", id:"fa_ex_092"},
		{src:"images/fa_ex_093.jpg?1514269289634", id:"fa_ex_093"},
		{src:"images/fa_ex_094.jpg?1514269289634", id:"fa_ex_094"},
		{src:"images/fa_ex_095.jpg?1514269289634", id:"fa_ex_095"},
		{src:"images/fa_ex_096.jpg?1514269289634", id:"fa_ex_096"},
		{src:"images/fa_ex_097.jpg?1514269289634", id:"fa_ex_097"},
		{src:"images/fa_ex_098.jpg?1514269289634", id:"fa_ex_098"},
		{src:"images/fa_ex_099.jpg?1514269289634", id:"fa_ex_099"},
		{src:"images/fa_ex_100.jpg?1514269289634", id:"fa_ex_100"},
		{src:"images/fa_ex_101.jpg?1514269289634", id:"fa_ex_101"},
		{src:"images/fa_ex_102.jpg?1514269289634", id:"fa_ex_102"},
		{src:"images/fa_ex_103.jpg?1514269289634", id:"fa_ex_103"},
		{src:"images/fa_ex_104.jpg?1514269289634", id:"fa_ex_104"},
		{src:"images/fa_ex_105.jpg?1514269289634", id:"fa_ex_105"},
		{src:"images/fa_ex_106.jpg?1514269289634", id:"fa_ex_106"},
		{src:"images/fa_ex_107.jpg?1514269289634", id:"fa_ex_107"},
		{src:"images/fa_ex_108.jpg?1514269289634", id:"fa_ex_108"},
		{src:"images/fa_ex_109.jpg?1514269289634", id:"fa_ex_109"},
		{src:"images/fa_ex_110.jpg?1514269289634", id:"fa_ex_110"},
		{src:"images/fa_ex_111.jpg?1514269289634", id:"fa_ex_111"},
		{src:"images/fa_ex_112.jpg?1514269289634", id:"fa_ex_112"},
		{src:"images/fa_ex_113.jpg?1514269289634", id:"fa_ex_113"},
		{src:"images/fa_ex_114.jpg?1514269289634", id:"fa_ex_114"},
		{src:"images/fa_ex_115.jpg?1514269289634", id:"fa_ex_115"},
		{src:"images/fa_ex_116.jpg?1514269289634", id:"fa_ex_116"},
		{src:"images/fa_ex_117.jpg?1514269289634", id:"fa_ex_117"},
		{src:"images/fa_ex_118.jpg?1514269289634", id:"fa_ex_118"},
		{src:"images/fa_ex_119.jpg?1514269289634", id:"fa_ex_119"},
		{src:"images/fa_ex_120.jpg?1514269289634", id:"fa_ex_120"},
		{src:"images/fa_ex_121.jpg?1514269289634", id:"fa_ex_121"},
		{src:"images/fa_ex_122.jpg?1514269289634", id:"fa_ex_122"},
		{src:"images/fa_ex_123.jpg?1514269289634", id:"fa_ex_123"},
		{src:"images/fa_ex_124.jpg?1514269289634", id:"fa_ex_124"},
		{src:"images/fa_ex_125.jpg?1514269289634", id:"fa_ex_125"},
		{src:"images/fa_ex_126.jpg?1514269289634", id:"fa_ex_126"},
		{src:"images/fa_ex_127.jpg?1514269289634", id:"fa_ex_127"},
		{src:"images/fa_ex_128.jpg?1514269289634", id:"fa_ex_128"},
		{src:"images/fa_ex_129.jpg?1514269289634", id:"fa_ex_129"},
		{src:"images/fa_ex_130.jpg?1514269289634", id:"fa_ex_130"},
		{src:"images/fa_ex_131.jpg?1514269289634", id:"fa_ex_131"},
		{src:"images/fa_ex_132.jpg?1514269289634", id:"fa_ex_132"},
		{src:"images/fa_ex_133.jpg?1514269289634", id:"fa_ex_133"},
		{src:"images/fa_ex_134.jpg?1514269289634", id:"fa_ex_134"},
		{src:"images/fa_ex_135.jpg?1514269289634", id:"fa_ex_135"},
		{src:"images/fa_ex_136.jpg?1514269289634", id:"fa_ex_136"},
		{src:"images/fa_ex_137.jpg?1514269289634", id:"fa_ex_137"},
		{src:"images/fa_ex_138.jpg?1514269289634", id:"fa_ex_138"},
		{src:"images/fa_ex_139.jpg?1514269289634", id:"fa_ex_139"},
		{src:"images/fa_ex_140.jpg?1514269289634", id:"fa_ex_140"},
		{src:"images/fa_ex_141.jpg?1514269289634", id:"fa_ex_141"},
		{src:"images/fa_ex_142.jpg?1514269289634", id:"fa_ex_142"},
		{src:"images/fa_ex_143.jpg?1514269289634", id:"fa_ex_143"},
		{src:"images/fa_ex_144.jpg?1514269289634", id:"fa_ex_144"},
		{src:"images/fa_ex_145.jpg?1514269289634", id:"fa_ex_145"},
		{src:"images/fa_ex_146.jpg?1514269289634", id:"fa_ex_146"},
		{src:"images/fa_ex_147.jpg?1514269289634", id:"fa_ex_147"},
		{src:"images/fa_ex_148.jpg?1514269289634", id:"fa_ex_148"},
		{src:"images/fa_ex_149.jpg?1514269289634", id:"fa_ex_149"},
		{src:"images/fa_ex_150.jpg?1514269289634", id:"fa_ex_150"},
		{src:"images/fa_ex_151.jpg?1514269289634", id:"fa_ex_151"},
		{src:"images/fa_ex_152.jpg?1514269289634", id:"fa_ex_152"},
		{src:"images/fa_ex_153.jpg?1514269289634", id:"fa_ex_153"},
		{src:"images/fa_ex_154.jpg?1514269289634", id:"fa_ex_154"},
		{src:"images/fa_ex_155.jpg?1514269289634", id:"fa_ex_155"},
		{src:"images/fa_ex_156.jpg?1514269289634", id:"fa_ex_156"},
		{src:"images/fa_ex_157.jpg?1514269289634", id:"fa_ex_157"},
		{src:"images/fa_ex_158.jpg?1514269289634", id:"fa_ex_158"},
		{src:"images/fa_ex_159.jpg?1514269289634", id:"fa_ex_159"},
		{src:"images/fa_ex_160.jpg?1514269289634", id:"fa_ex_160"},
		{src:"images/fa_ex_161.jpg?1514269289634", id:"fa_ex_161"},
		{src:"images/fa_ex_162.jpg?1514269289634", id:"fa_ex_162"},
		{src:"images/fa_ex_163.jpg?1514269289634", id:"fa_ex_163"},
		{src:"images/fa_ex_164.jpg?1514269289634", id:"fa_ex_164"},
		{src:"images/fa_ex_165.jpg?1514269289634", id:"fa_ex_165"},
		{src:"images/fa_ex_166.jpg?1514269289634", id:"fa_ex_166"},
		{src:"images/fa_ex_167.jpg?1514269289634", id:"fa_ex_167"},
		{src:"images/fa_ex_168.jpg?1514269289634", id:"fa_ex_168"},
		{src:"images/fa_ex_169.jpg?1514269289634", id:"fa_ex_169"},
		{src:"images/fa_ex_170.jpg?1514269289634", id:"fa_ex_170"},
		{src:"images/fa_ex_171.jpg?1514269289634", id:"fa_ex_171"},
		{src:"images/fa_ex_172.jpg?1514269289634", id:"fa_ex_172"},
		{src:"images/fa_ex_173.jpg?1514269289634", id:"fa_ex_173"},
		{src:"images/fa_ex_174.jpg?1514269289634", id:"fa_ex_174"},
		{src:"images/fa_ex_175.jpg?1514269289634", id:"fa_ex_175"},
		{src:"images/fa_ex_176.jpg?1514269289634", id:"fa_ex_176"},
		{src:"images/fa_ex_177.jpg?1514269289634", id:"fa_ex_177"},
		{src:"images/fa_ex_178.jpg?1514269289634", id:"fa_ex_178"},
		{src:"images/fa_ex_179.jpg?1514269289634", id:"fa_ex_179"},
		{src:"images/fa_no_000.jpg?1514269289634", id:"fa_no_000"},
		{src:"images/fa_no_001.jpg?1514269289634", id:"fa_no_001"},
		{src:"images/fa_no_002.jpg?1514269289634", id:"fa_no_002"},
		{src:"images/fa_no_003.jpg?1514269289634", id:"fa_no_003"},
		{src:"images/fa_no_004.jpg?1514269289634", id:"fa_no_004"},
		{src:"images/fa_no_005.jpg?1514269289634", id:"fa_no_005"},
		{src:"images/fa_no_006.jpg?1514269289634", id:"fa_no_006"},
		{src:"images/fa_no_007.jpg?1514269289634", id:"fa_no_007"},
		{src:"images/fa_no_008.jpg?1514269289634", id:"fa_no_008"},
		{src:"images/fa_no_009.jpg?1514269289634", id:"fa_no_009"},
		{src:"images/fa_no_010.jpg?1514269289634", id:"fa_no_010"},
		{src:"images/fa_no_011.jpg?1514269289634", id:"fa_no_011"},
		{src:"images/fa_no_012.jpg?1514269289634", id:"fa_no_012"},
		{src:"images/fa_no_013.jpg?1514269289634", id:"fa_no_013"},
		{src:"images/fa_no_014.jpg?1514269289634", id:"fa_no_014"},
		{src:"images/fa_no_015.jpg?1514269289634", id:"fa_no_015"},
		{src:"images/fa_no_016.jpg?1514269289634", id:"fa_no_016"},
		{src:"images/fa_no_017.jpg?1514269289634", id:"fa_no_017"},
		{src:"images/fa_no_018.jpg?1514269289634", id:"fa_no_018"},
		{src:"images/fa_no_019.jpg?1514269289634", id:"fa_no_019"},
		{src:"images/fa_no_020.jpg?1514269289634", id:"fa_no_020"},
		{src:"images/fa_no_021.jpg?1514269289634", id:"fa_no_021"},
		{src:"images/fa_no_022.jpg?1514269289634", id:"fa_no_022"},
		{src:"images/fa_no_023.jpg?1514269289634", id:"fa_no_023"},
		{src:"images/fa_no_024.jpg?1514269289634", id:"fa_no_024"},
		{src:"images/fa_no_025.jpg?1514269289634", id:"fa_no_025"},
		{src:"images/fa_no_026.jpg?1514269289634", id:"fa_no_026"},
		{src:"images/fa_no_027.jpg?1514269289634", id:"fa_no_027"},
		{src:"images/fa_no_028.jpg?1514269289634", id:"fa_no_028"},
		{src:"images/fa_no_029.jpg?1514269289634", id:"fa_no_029"},
		{src:"images/fa_no_030.jpg?1514269289634", id:"fa_no_030"},
		{src:"images/fa_no_031.jpg?1514269289634", id:"fa_no_031"},
		{src:"images/fa_no_032.jpg?1514269289634", id:"fa_no_032"},
		{src:"images/fa_no_033.jpg?1514269289634", id:"fa_no_033"},
		{src:"images/fa_no_034.jpg?1514269289634", id:"fa_no_034"},
		{src:"images/fa_no_035.jpg?1514269289634", id:"fa_no_035"},
		{src:"images/fa_no_036.jpg?1514269289634", id:"fa_no_036"},
		{src:"images/fa_no_037.jpg?1514269289634", id:"fa_no_037"},
		{src:"images/fa_no_038.jpg?1514269289634", id:"fa_no_038"},
		{src:"images/fa_no_039.jpg?1514269289634", id:"fa_no_039"},
		{src:"images/fa_sw_000.jpg?1514269289634", id:"fa_sw_000"},
		{src:"images/fa_sw_001.jpg?1514269289634", id:"fa_sw_001"},
		{src:"images/fa_sw_002.jpg?1514269289634", id:"fa_sw_002"},
		{src:"images/fa_sw_003.jpg?1514269289634", id:"fa_sw_003"},
		{src:"images/fa_sw_004.jpg?1514269289634", id:"fa_sw_004"},
		{src:"images/fa_sw_005.jpg?1514269289634", id:"fa_sw_005"},
		{src:"images/fa_sw_006.jpg?1514269289634", id:"fa_sw_006"},
		{src:"images/fa_sw_007.jpg?1514269289634", id:"fa_sw_007"},
		{src:"images/fa_sw_008.jpg?1514269289634", id:"fa_sw_008"},
		{src:"images/fa_sw_009.jpg?1514269289634", id:"fa_sw_009"},
		{src:"images/fa_sw_010.jpg?1514269289634", id:"fa_sw_010"},
		{src:"images/fa_sw_011.jpg?1514269289634", id:"fa_sw_011"},
		{src:"images/fa_sw_012.jpg?1514269289634", id:"fa_sw_012"},
		{src:"images/fa_sw_013.jpg?1514269289634", id:"fa_sw_013"},
		{src:"images/fa_sw_014.jpg?1514269289634", id:"fa_sw_014"},
		{src:"images/fa_sw_015.jpg?1514269289634", id:"fa_sw_015"},
		{src:"images/fa_sw_016.jpg?1514269289634", id:"fa_sw_016"},
		{src:"images/fa_sw_017.jpg?1514269289634", id:"fa_sw_017"},
		{src:"images/fa_sw_018.jpg?1514269289634", id:"fa_sw_018"},
		{src:"images/fa_sw_019.jpg?1514269289634", id:"fa_sw_019"},
		{src:"images/fa_sw_020.jpg?1514269289634", id:"fa_sw_020"},
		{src:"images/fa_sw_021.jpg?1514269289634", id:"fa_sw_021"},
		{src:"images/fa_sw_022.jpg?1514269289634", id:"fa_sw_022"},
		{src:"images/fa_sw_023.jpg?1514269289634", id:"fa_sw_023"},
		{src:"images/fa_sw_024.jpg?1514269289634", id:"fa_sw_024"},
		{src:"images/fa_sw_025.jpg?1514269289634", id:"fa_sw_025"},
		{src:"images/fa_sw_026.jpg?1514269289634", id:"fa_sw_026"},
		{src:"images/fa_sw_027.jpg?1514269289634", id:"fa_sw_027"},
		{src:"images/fa_sw_028.jpg?1514269289634", id:"fa_sw_028"},
		{src:"images/fa_sw_029.jpg?1514269289634", id:"fa_sw_029"},
		{src:"images/fa_sw_030.jpg?1514269289634", id:"fa_sw_030"},
		{src:"images/fa_sw_031.jpg?1514269289634", id:"fa_sw_031"},
		{src:"images/fa_sw_032.jpg?1514269289634", id:"fa_sw_032"},
		{src:"images/fa_sw_033.jpg?1514269289634", id:"fa_sw_033"},
		{src:"images/fa_sw_034.jpg?1514269289634", id:"fa_sw_034"},
		{src:"images/fa_sw_035.jpg?1514269289634", id:"fa_sw_035"},
		{src:"images/fa_sw_036.jpg?1514269289634", id:"fa_sw_036"},
		{src:"images/fa_sw_037.jpg?1514269289634", id:"fa_sw_037"},
		{src:"images/fa_sw_038.jpg?1514269289634", id:"fa_sw_038"},
		{src:"images/fa_sw_039.jpg?1514269289634", id:"fa_sw_039"},
		{src:"images/fa_sw_040.jpg?1514269289634", id:"fa_sw_040"},
		{src:"images/fa_sw_041.jpg?1514269289634", id:"fa_sw_041"},
		{src:"images/fa_sw_042.jpg?1514269289634", id:"fa_sw_042"},
		{src:"images/fa_sw_043.jpg?1514269289634", id:"fa_sw_043"},
		{src:"images/fa_sw_044.jpg?1514269289634", id:"fa_sw_044"},
		{src:"images/fa_sw_045.jpg?1514269289634", id:"fa_sw_045"},
		{src:"images/fa_sw_046.jpg?1514269289634", id:"fa_sw_046"},
		{src:"images/fa_sw_047.jpg?1514269289634", id:"fa_sw_047"},
		{src:"images/fa_sw_048.jpg?1514269289634", id:"fa_sw_048"},
		{src:"images/fa_sw_049.jpg?1514269289634", id:"fa_sw_049"},
		{src:"images/fa_sw_050.jpg?1514269289634", id:"fa_sw_050"},
		{src:"images/fa_sw_051.jpg?1514269289634", id:"fa_sw_051"},
		{src:"images/fa_sw_052.jpg?1514269289634", id:"fa_sw_052"},
		{src:"images/fa_sw_053.jpg?1514269289634", id:"fa_sw_053"},
		{src:"images/fa_sw_054.jpg?1514269289634", id:"fa_sw_054"},
		{src:"images/fa_sw_055.jpg?1514269289634", id:"fa_sw_055"},
		{src:"images/fa_sw_056.jpg?1514269289634", id:"fa_sw_056"},
		{src:"images/fa_sw_057.jpg?1514269289634", id:"fa_sw_057"},
		{src:"images/fa_sw_058.jpg?1514269289634", id:"fa_sw_058"},
		{src:"images/fa_sw_059.jpg?1514269289634", id:"fa_sw_059"},
		{src:"images/fa_sw_060.jpg?1514269289634", id:"fa_sw_060"},
		{src:"images/fa_sw_061.jpg?1514269289634", id:"fa_sw_061"},
		{src:"images/fa_sw_062.jpg?1514269289634", id:"fa_sw_062"},
		{src:"images/fa_sw_063.jpg?1514269289634", id:"fa_sw_063"},
		{src:"images/fa_sw_064.jpg?1514269289634", id:"fa_sw_064"},
		{src:"images/fa_sw_065.jpg?1514269289634", id:"fa_sw_065"},
		{src:"images/fa_sw_066.jpg?1514269289634", id:"fa_sw_066"},
		{src:"images/fa_sw_067.jpg?1514269289634", id:"fa_sw_067"},
		{src:"images/fa_sw_068.jpg?1514269289634", id:"fa_sw_068"},
		{src:"images/fa_sw_069.jpg?1514269289634", id:"fa_sw_069"},
		{src:"images/fa_sw_070.jpg?1514269289634", id:"fa_sw_070"},
		{src:"images/fa_sw_071.jpg?1514269289634", id:"fa_sw_071"},
		{src:"images/fa_sw_072.jpg?1514269289634", id:"fa_sw_072"},
		{src:"images/fa_sw_073.jpg?1514269289634", id:"fa_sw_073"},
		{src:"images/fa_sw_074.jpg?1514269289634", id:"fa_sw_074"},
		{src:"images/fa_sw_075.jpg?1514269289634", id:"fa_sw_075"},
		{src:"images/fa_sw_076.jpg?1514269289634", id:"fa_sw_076"},
		{src:"images/fa_sw_077.jpg?1514269289635", id:"fa_sw_077"},
		{src:"images/fa_sw_078.jpg?1514269289635", id:"fa_sw_078"},
		{src:"images/fa_sw_079.jpg?1514269289635", id:"fa_sw_079"},
		{src:"images/fa_sw_080.jpg?1514269289635", id:"fa_sw_080"},
		{src:"images/fa_sw_081.jpg?1514269289635", id:"fa_sw_081"},
		{src:"images/fa_sw_082.jpg?1514269289635", id:"fa_sw_082"},
		{src:"images/fa_sw_083.jpg?1514269289635", id:"fa_sw_083"},
		{src:"images/fa_sw_084.jpg?1514269289635", id:"fa_sw_084"},
		{src:"images/fa_sw_085.jpg?1514269289635", id:"fa_sw_085"},
		{src:"images/fa_sw_086.jpg?1514269289635", id:"fa_sw_086"},
		{src:"images/fa_sw_087.jpg?1514269289635", id:"fa_sw_087"},
		{src:"images/fa_sw_088.jpg?1514269289635", id:"fa_sw_088"},
		{src:"images/fa_sw_089.jpg?1514269289635", id:"fa_sw_089"},
		{src:"images/fa_sw_090.jpg?1514269289635", id:"fa_sw_090"},
		{src:"images/fa_sw_091.jpg?1514269289635", id:"fa_sw_091"},
		{src:"images/fa_sw_092.jpg?1514269289635", id:"fa_sw_092"},
		{src:"images/fa_sw_093.jpg?1514269289635", id:"fa_sw_093"},
		{src:"images/fa_sw_094.jpg?1514269289635", id:"fa_sw_094"},
		{src:"images/fa_sw_095.jpg?1514269289635", id:"fa_sw_095"},
		{src:"images/fa_sw_096.jpg?1514269289635", id:"fa_sw_096"},
		{src:"images/fa_sw_097.jpg?1514269289635", id:"fa_sw_097"},
		{src:"images/fa_sw_098.jpg?1514269289635", id:"fa_sw_098"},
		{src:"images/fa_sw_099.jpg?1514269289635", id:"fa_sw_099"},
		{src:"images/fa_sw_100.jpg?1514269289635", id:"fa_sw_100"},
		{src:"images/fa_sw_101.jpg?1514269289635", id:"fa_sw_101"},
		{src:"images/fa_sw_102.jpg?1514269289635", id:"fa_sw_102"},
		{src:"images/fa_sw_103.jpg?1514269289635", id:"fa_sw_103"},
		{src:"images/fa_sw_104.jpg?1514269289635", id:"fa_sw_104"},
		{src:"images/fa_sw_105.jpg?1514269289635", id:"fa_sw_105"},
		{src:"images/fa_sw_106.jpg?1514269289635", id:"fa_sw_106"},
		{src:"images/fa_sw_107.jpg?1514269289635", id:"fa_sw_107"},
		{src:"images/fa_sw_108.jpg?1514269289635", id:"fa_sw_108"},
		{src:"images/fa_sw_109.jpg?1514269289635", id:"fa_sw_109"},
		{src:"images/fa_sw_110.jpg?1514269289635", id:"fa_sw_110"},
		{src:"images/fa_sw_111.jpg?1514269289635", id:"fa_sw_111"},
		{src:"images/fa_sw_112.jpg?1514269289635", id:"fa_sw_112"},
		{src:"images/fa_sw_113.jpg?1514269289635", id:"fa_sw_113"},
		{src:"images/fa_sw_114.jpg?1514269289635", id:"fa_sw_114"},
		{src:"images/fa_sw_115.jpg?1514269289635", id:"fa_sw_115"},
		{src:"images/fa_sw_116.jpg?1514269289635", id:"fa_sw_116"},
		{src:"images/fa_sw_117.jpg?1514269289635", id:"fa_sw_117"},
		{src:"images/fa_sw_118.jpg?1514269289635", id:"fa_sw_118"},
		{src:"images/fa_sw_119.jpg?1514269289635", id:"fa_sw_119"},
		{src:"images/fa_sw_120.jpg?1514269289635", id:"fa_sw_120"},
		{src:"images/fa_sw_121.jpg?1514269289635", id:"fa_sw_121"},
		{src:"images/fa_sw_122.jpg?1514269289635", id:"fa_sw_122"},
		{src:"images/fa_sw_123.jpg?1514269289635", id:"fa_sw_123"},
		{src:"images/fa_sw_124.jpg?1514269289635", id:"fa_sw_124"},
		{src:"images/fa_sw_125.jpg?1514269289635", id:"fa_sw_125"},
		{src:"images/fa_sw_126.jpg?1514269289635", id:"fa_sw_126"},
		{src:"images/fa_sw_127.jpg?1514269289635", id:"fa_sw_127"},
		{src:"images/fa_sw_128.jpg?1514269289635", id:"fa_sw_128"},
		{src:"images/fa_sw_129.jpg?1514269289635", id:"fa_sw_129"},
		{src:"images/fa_sw_130.jpg?1514269289635", id:"fa_sw_130"},
		{src:"images/fa_sw_131.jpg?1514269289635", id:"fa_sw_131"},
		{src:"images/fa_sw_132.jpg?1514269289635", id:"fa_sw_132"},
		{src:"images/fa_sw_133.jpg?1514269289635", id:"fa_sw_133"},
		{src:"images/fa_sw_134.jpg?1514269289635", id:"fa_sw_134"},
		{src:"images/fa_sw_135.jpg?1514269289635", id:"fa_sw_135"},
		{src:"images/fa_sw_136.jpg?1514269289635", id:"fa_sw_136"},
		{src:"images/fa_sw_137.jpg?1514269289635", id:"fa_sw_137"},
		{src:"images/fa_sw_138.jpg?1514269289635", id:"fa_sw_138"},
		{src:"images/fa_sw_139.jpg?1514269289635", id:"fa_sw_139"},
		{src:"images/fa_sw_140.jpg?1514269289635", id:"fa_sw_140"},
		{src:"images/fa_sw_141.jpg?1514269289635", id:"fa_sw_141"},
		{src:"images/fa_sw_142.jpg?1514269289635", id:"fa_sw_142"},
		{src:"images/fa_sw_143.jpg?1514269289635", id:"fa_sw_143"},
		{src:"images/fa_sw_144.jpg?1514269289635", id:"fa_sw_144"},
		{src:"images/fa_sw_145.jpg?1514269289635", id:"fa_sw_145"},
		{src:"images/fa_sw_146.jpg?1514269289635", id:"fa_sw_146"},
		{src:"images/fa_sw_147.jpg?1514269289635", id:"fa_sw_147"},
		{src:"images/fa_sw_148.jpg?1514269289635", id:"fa_sw_148"},
		{src:"images/fa_sw_149.jpg?1514269289635", id:"fa_sw_149"},
		{src:"images/fa_sw_150.jpg?1514269289635", id:"fa_sw_150"},
		{src:"images/fa_sw_151.jpg?1514269289635", id:"fa_sw_151"},
		{src:"images/fa_sw_152.jpg?1514269289635", id:"fa_sw_152"},
		{src:"images/fa_sw_153.jpg?1514269289635", id:"fa_sw_153"},
		{src:"images/fa_sw_154.jpg?1514269289635", id:"fa_sw_154"},
		{src:"images/fa_we_000.jpg?1514269289635", id:"fa_we_000"},
		{src:"images/fa_we_001.jpg?1514269289635", id:"fa_we_001"},
		{src:"images/fa_we_002.jpg?1514269289635", id:"fa_we_002"},
		{src:"images/fa_we_003.jpg?1514269289635", id:"fa_we_003"},
		{src:"images/fa_we_004.jpg?1514269289635", id:"fa_we_004"},
		{src:"images/fa_we_005.jpg?1514269289635", id:"fa_we_005"},
		{src:"images/fa_we_006.jpg?1514269289635", id:"fa_we_006"},
		{src:"images/fa_we_007.jpg?1514269289635", id:"fa_we_007"},
		{src:"images/fa_we_008.jpg?1514269289635", id:"fa_we_008"},
		{src:"images/fa_we_009.jpg?1514269289635", id:"fa_we_009"},
		{src:"images/fa_we_010.jpg?1514269289635", id:"fa_we_010"},
		{src:"images/fa_we_011.jpg?1514269289635", id:"fa_we_011"},
		{src:"images/fa_we_012.jpg?1514269289635", id:"fa_we_012"},
		{src:"images/fa_we_013.jpg?1514269289635", id:"fa_we_013"},
		{src:"images/fa_we_014.jpg?1514269289635", id:"fa_we_014"},
		{src:"images/fa_we_015.jpg?1514269289635", id:"fa_we_015"},
		{src:"images/fa_we_016.jpg?1514269289635", id:"fa_we_016"},
		{src:"images/fa_we_017.jpg?1514269289635", id:"fa_we_017"},
		{src:"images/fa_we_018.jpg?1514269289635", id:"fa_we_018"},
		{src:"images/fa_we_019.jpg?1514269289635", id:"fa_we_019"},
		{src:"images/fa_we_020.jpg?1514269289635", id:"fa_we_020"},
		{src:"images/fa_we_021.jpg?1514269289635", id:"fa_we_021"},
		{src:"images/fa_we_022.jpg?1514269289635", id:"fa_we_022"},
		{src:"images/fa_we_023.jpg?1514269289635", id:"fa_we_023"},
		{src:"images/fa_we_024.jpg?1514269289635", id:"fa_we_024"},
		{src:"images/flip_1.png?1514269289635", id:"flip_1"},
		{src:"images/flip_2.png?1514269289635", id:"flip_2"},
		{src:"images/halfOpenEyes.png?1514269289635", id:"halfOpenEyes"},
		{src:"images/heart.png?1514269289635", id:"heart"},
		{src:"images/li_bl_000.jpg?1514269289635", id:"li_bl_000"},
		{src:"images/li_bl_001.jpg?1514269289635", id:"li_bl_001"},
		{src:"images/li_bl_002.jpg?1514269289635", id:"li_bl_002"},
		{src:"images/li_bl_003.jpg?1514269289635", id:"li_bl_003"},
		{src:"images/li_bl_004.jpg?1514269289635", id:"li_bl_004"},
		{src:"images/li_bl_005.jpg?1514269289635", id:"li_bl_005"},
		{src:"images/li_bl_006.jpg?1514269289635", id:"li_bl_006"},
		{src:"images/li_bl_007.jpg?1514269289635", id:"li_bl_007"},
		{src:"images/li_bl_008.jpg?1514269289635", id:"li_bl_008"},
		{src:"images/li_bl_009.jpg?1514269289635", id:"li_bl_009"},
		{src:"images/li_bl_010.jpg?1514269289635", id:"li_bl_010"},
		{src:"images/li_bl_011.jpg?1514269289635", id:"li_bl_011"},
		{src:"images/li_bl_012.jpg?1514269289635", id:"li_bl_012"},
		{src:"images/li_bl_013.jpg?1514269289635", id:"li_bl_013"},
		{src:"images/li_bl_014.jpg?1514269289635", id:"li_bl_014"},
		{src:"images/li_bl_015.jpg?1514269289635", id:"li_bl_015"},
		{src:"images/li_bl_016.jpg?1514269289635", id:"li_bl_016"},
		{src:"images/li_bl_017.jpg?1514269289635", id:"li_bl_017"},
		{src:"images/li_bl_018.jpg?1514269289635", id:"li_bl_018"},
		{src:"images/li_bl_019.jpg?1514269289635", id:"li_bl_019"},
		{src:"images/li_bl_020.jpg?1514269289635", id:"li_bl_020"},
		{src:"images/li_bl_021.jpg?1514269289635", id:"li_bl_021"},
		{src:"images/li_bl_022.jpg?1514269289635", id:"li_bl_022"},
		{src:"images/li_bl_023.jpg?1514269289635", id:"li_bl_023"},
		{src:"images/li_bl_024.jpg?1514269289635", id:"li_bl_024"},
		{src:"images/li_bl_025.jpg?1514269289635", id:"li_bl_025"},
		{src:"images/li_bl_026.jpg?1514269289635", id:"li_bl_026"},
		{src:"images/li_bl_027.jpg?1514269289635", id:"li_bl_027"},
		{src:"images/li_bl_028.jpg?1514269289635", id:"li_bl_028"},
		{src:"images/li_bl_029.jpg?1514269289635", id:"li_bl_029"},
		{src:"images/li_bl_030.jpg?1514269289635", id:"li_bl_030"},
		{src:"images/li_bl_031.jpg?1514269289635", id:"li_bl_031"},
		{src:"images/li_bl_032.jpg?1514269289635", id:"li_bl_032"},
		{src:"images/li_bl_033.jpg?1514269289635", id:"li_bl_033"},
		{src:"images/li_bl_034.jpg?1514269289635", id:"li_bl_034"},
		{src:"images/li_bl_035.jpg?1514269289635", id:"li_bl_035"},
		{src:"images/li_bl_036.jpg?1514269289635", id:"li_bl_036"},
		{src:"images/li_bl_037.jpg?1514269289635", id:"li_bl_037"},
		{src:"images/li_bl_038.jpg?1514269289635", id:"li_bl_038"},
		{src:"images/li_bl_039.jpg?1514269289635", id:"li_bl_039"},
		{src:"images/li_ex_000.jpg?1514269289635", id:"li_ex_000"},
		{src:"images/li_ex_001.jpg?1514269289635", id:"li_ex_001"},
		{src:"images/li_ex_002.jpg?1514269289635", id:"li_ex_002"},
		{src:"images/li_ex_003.jpg?1514269289635", id:"li_ex_003"},
		{src:"images/li_ex_004.jpg?1514269289635", id:"li_ex_004"},
		{src:"images/li_ex_005.jpg?1514269289635", id:"li_ex_005"},
		{src:"images/li_ex_006.jpg?1514269289635", id:"li_ex_006"},
		{src:"images/li_ex_007.jpg?1514269289635", id:"li_ex_007"},
		{src:"images/li_ex_008.jpg?1514269289635", id:"li_ex_008"},
		{src:"images/li_ex_009.jpg?1514269289635", id:"li_ex_009"},
		{src:"images/li_ex_010.jpg?1514269289635", id:"li_ex_010"},
		{src:"images/li_ex_011.jpg?1514269289635", id:"li_ex_011"},
		{src:"images/li_ex_012.jpg?1514269289635", id:"li_ex_012"},
		{src:"images/li_ex_013.jpg?1514269289635", id:"li_ex_013"},
		{src:"images/li_ex_014.jpg?1514269289635", id:"li_ex_014"},
		{src:"images/li_ex_015.jpg?1514269289635", id:"li_ex_015"},
		{src:"images/li_ex_016.jpg?1514269289635", id:"li_ex_016"},
		{src:"images/li_ex_017.jpg?1514269289635", id:"li_ex_017"},
		{src:"images/li_ex_018.jpg?1514269289635", id:"li_ex_018"},
		{src:"images/li_ex_019.jpg?1514269289635", id:"li_ex_019"},
		{src:"images/li_ex_020.jpg?1514269289635", id:"li_ex_020"},
		{src:"images/li_ex_021.jpg?1514269289635", id:"li_ex_021"},
		{src:"images/li_ex_022.jpg?1514269289635", id:"li_ex_022"},
		{src:"images/li_ex_023.jpg?1514269289635", id:"li_ex_023"},
		{src:"images/li_ex_024.jpg?1514269289635", id:"li_ex_024"},
		{src:"images/li_ex_025.jpg?1514269289635", id:"li_ex_025"},
		{src:"images/li_ex_026.jpg?1514269289635", id:"li_ex_026"},
		{src:"images/li_ex_027.jpg?1514269289635", id:"li_ex_027"},
		{src:"images/li_ex_028.jpg?1514269289635", id:"li_ex_028"},
		{src:"images/li_ex_029.jpg?1514269289635", id:"li_ex_029"},
		{src:"images/li_ex_030.jpg?1514269289635", id:"li_ex_030"},
		{src:"images/li_ex_031.jpg?1514269289635", id:"li_ex_031"},
		{src:"images/li_ex_032.jpg?1514269289635", id:"li_ex_032"},
		{src:"images/li_ex_033.jpg?1514269289635", id:"li_ex_033"},
		{src:"images/li_ex_034.jpg?1514269289635", id:"li_ex_034"},
		{src:"images/li_ex_035.jpg?1514269289635", id:"li_ex_035"},
		{src:"images/li_ex_036.jpg?1514269289635", id:"li_ex_036"},
		{src:"images/li_ex_037.jpg?1514269289635", id:"li_ex_037"},
		{src:"images/li_ex_038.jpg?1514269289635", id:"li_ex_038"},
		{src:"images/li_ex_039.jpg?1514269289635", id:"li_ex_039"},
		{src:"images/li_ex_040.jpg?1514269289635", id:"li_ex_040"},
		{src:"images/li_ex_041.jpg?1514269289635", id:"li_ex_041"},
		{src:"images/li_ex_042.jpg?1514269289635", id:"li_ex_042"},
		{src:"images/li_ex_043.jpg?1514269289635", id:"li_ex_043"},
		{src:"images/li_ex_044.jpg?1514269289635", id:"li_ex_044"},
		{src:"images/li_ex_045.jpg?1514269289635", id:"li_ex_045"},
		{src:"images/li_ex_046.jpg?1514269289635", id:"li_ex_046"},
		{src:"images/li_ex_047.jpg?1514269289635", id:"li_ex_047"},
		{src:"images/li_ex_048.jpg?1514269289635", id:"li_ex_048"},
		{src:"images/li_ex_049.jpg?1514269289635", id:"li_ex_049"},
		{src:"images/li_ex_050.jpg?1514269289635", id:"li_ex_050"},
		{src:"images/li_ex_051.jpg?1514269289635", id:"li_ex_051"},
		{src:"images/li_ex_052.jpg?1514269289635", id:"li_ex_052"},
		{src:"images/li_ex_053.jpg?1514269289635", id:"li_ex_053"},
		{src:"images/li_ex_054.jpg?1514269289635", id:"li_ex_054"},
		{src:"images/li_ex_055.jpg?1514269289635", id:"li_ex_055"},
		{src:"images/li_ex_056.jpg?1514269289635", id:"li_ex_056"},
		{src:"images/li_ex_057.jpg?1514269289635", id:"li_ex_057"},
		{src:"images/li_ex_058.jpg?1514269289635", id:"li_ex_058"},
		{src:"images/li_ex_059.jpg?1514269289635", id:"li_ex_059"},
		{src:"images/li_ex_060.jpg?1514269289635", id:"li_ex_060"},
		{src:"images/li_ex_061.jpg?1514269289635", id:"li_ex_061"},
		{src:"images/li_ex_062.jpg?1514269289635", id:"li_ex_062"},
		{src:"images/li_ex_063.jpg?1514269289635", id:"li_ex_063"},
		{src:"images/li_ex_064.jpg?1514269289635", id:"li_ex_064"},
		{src:"images/li_ex_065.jpg?1514269289635", id:"li_ex_065"},
		{src:"images/li_ex_066.jpg?1514269289635", id:"li_ex_066"},
		{src:"images/li_ex_067.jpg?1514269289635", id:"li_ex_067"},
		{src:"images/li_ex_068.jpg?1514269289635", id:"li_ex_068"},
		{src:"images/li_ex_069.jpg?1514269289635", id:"li_ex_069"},
		{src:"images/li_ex_070.jpg?1514269289635", id:"li_ex_070"},
		{src:"images/li_ex_071.jpg?1514269289635", id:"li_ex_071"},
		{src:"images/li_ex_072.jpg?1514269289635", id:"li_ex_072"},
		{src:"images/li_ex_073.jpg?1514269289635", id:"li_ex_073"},
		{src:"images/li_ex_074.jpg?1514269289635", id:"li_ex_074"},
		{src:"images/li_ex_075.jpg?1514269289635", id:"li_ex_075"},
		{src:"images/li_ex_076.jpg?1514269289635", id:"li_ex_076"},
		{src:"images/li_ex_077.jpg?1514269289635", id:"li_ex_077"},
		{src:"images/li_ex_078.jpg?1514269289635", id:"li_ex_078"},
		{src:"images/li_ex_079.jpg?1514269289635", id:"li_ex_079"},
		{src:"images/li_ex_080.jpg?1514269289635", id:"li_ex_080"},
		{src:"images/li_ex_081.jpg?1514269289635", id:"li_ex_081"},
		{src:"images/li_ex_082.jpg?1514269289635", id:"li_ex_082"},
		{src:"images/li_ex_083.jpg?1514269289635", id:"li_ex_083"},
		{src:"images/li_ex_084.jpg?1514269289635", id:"li_ex_084"},
		{src:"images/li_ex_085.jpg?1514269289636", id:"li_ex_085"},
		{src:"images/li_ex_086.jpg?1514269289636", id:"li_ex_086"},
		{src:"images/li_ex_087.jpg?1514269289636", id:"li_ex_087"},
		{src:"images/li_ex_088.jpg?1514269289636", id:"li_ex_088"},
		{src:"images/li_ex_089.jpg?1514269289636", id:"li_ex_089"},
		{src:"images/li_ex_090.jpg?1514269289636", id:"li_ex_090"},
		{src:"images/li_ex_091.jpg?1514269289636", id:"li_ex_091"},
		{src:"images/li_ex_092.jpg?1514269289636", id:"li_ex_092"},
		{src:"images/li_ex_093.jpg?1514269289636", id:"li_ex_093"},
		{src:"images/li_ex_094.jpg?1514269289636", id:"li_ex_094"},
		{src:"images/li_ex_095.jpg?1514269289636", id:"li_ex_095"},
		{src:"images/li_ex_096.jpg?1514269289636", id:"li_ex_096"},
		{src:"images/li_ex_097.jpg?1514269289636", id:"li_ex_097"},
		{src:"images/li_ex_098.jpg?1514269289636", id:"li_ex_098"},
		{src:"images/li_ex_099.jpg?1514269289636", id:"li_ex_099"},
		{src:"images/li_ex_100.jpg?1514269289636", id:"li_ex_100"},
		{src:"images/li_ex_101.jpg?1514269289636", id:"li_ex_101"},
		{src:"images/li_ex_102.jpg?1514269289636", id:"li_ex_102"},
		{src:"images/li_ex_103.jpg?1514269289636", id:"li_ex_103"},
		{src:"images/li_ex_104.jpg?1514269289636", id:"li_ex_104"},
		{src:"images/li_ex_105.jpg?1514269289636", id:"li_ex_105"},
		{src:"images/li_ex_106.jpg?1514269289636", id:"li_ex_106"},
		{src:"images/li_ex_107.jpg?1514269289636", id:"li_ex_107"},
		{src:"images/li_ex_108.jpg?1514269289636", id:"li_ex_108"},
		{src:"images/li_ex_109.jpg?1514269289636", id:"li_ex_109"},
		{src:"images/li_ex_110.jpg?1514269289636", id:"li_ex_110"},
		{src:"images/li_ex_111.jpg?1514269289636", id:"li_ex_111"},
		{src:"images/li_ex_112.jpg?1514269289636", id:"li_ex_112"},
		{src:"images/li_ex_113.jpg?1514269289636", id:"li_ex_113"},
		{src:"images/li_ex_114.jpg?1514269289636", id:"li_ex_114"},
		{src:"images/li_ex_115.jpg?1514269289636", id:"li_ex_115"},
		{src:"images/li_ex_116.jpg?1514269289636", id:"li_ex_116"},
		{src:"images/li_ex_117.jpg?1514269289636", id:"li_ex_117"},
		{src:"images/li_ex_118.jpg?1514269289636", id:"li_ex_118"},
		{src:"images/li_ex_119.jpg?1514269289636", id:"li_ex_119"},
		{src:"images/li_ex_120.jpg?1514269289636", id:"li_ex_120"},
		{src:"images/li_ex_121.jpg?1514269289636", id:"li_ex_121"},
		{src:"images/li_ex_122.jpg?1514269289636", id:"li_ex_122"},
		{src:"images/li_ex_123.jpg?1514269289636", id:"li_ex_123"},
		{src:"images/li_ex_124.jpg?1514269289636", id:"li_ex_124"},
		{src:"images/li_ex_125.jpg?1514269289636", id:"li_ex_125"},
		{src:"images/li_ex_126.jpg?1514269289636", id:"li_ex_126"},
		{src:"images/li_ex_127.jpg?1514269289636", id:"li_ex_127"},
		{src:"images/li_ex_128.jpg?1514269289636", id:"li_ex_128"},
		{src:"images/li_ex_129.jpg?1514269289636", id:"li_ex_129"},
		{src:"images/li_ex_130.jpg?1514269289636", id:"li_ex_130"},
		{src:"images/li_ex_131.jpg?1514269289636", id:"li_ex_131"},
		{src:"images/li_ex_132.jpg?1514269289636", id:"li_ex_132"},
		{src:"images/li_ex_133.jpg?1514269289636", id:"li_ex_133"},
		{src:"images/li_ex_134.jpg?1514269289636", id:"li_ex_134"},
		{src:"images/li_ex_135.jpg?1514269289636", id:"li_ex_135"},
		{src:"images/li_ex_136.jpg?1514269289636", id:"li_ex_136"},
		{src:"images/li_ex_137.jpg?1514269289636", id:"li_ex_137"},
		{src:"images/li_ex_138.jpg?1514269289636", id:"li_ex_138"},
		{src:"images/li_ex_139.jpg?1514269289636", id:"li_ex_139"},
		{src:"images/li_ex_140.jpg?1514269289636", id:"li_ex_140"},
		{src:"images/li_ex_141.jpg?1514269289636", id:"li_ex_141"},
		{src:"images/li_ex_142.jpg?1514269289636", id:"li_ex_142"},
		{src:"images/li_ex_143.jpg?1514269289636", id:"li_ex_143"},
		{src:"images/li_ex_144.jpg?1514269289636", id:"li_ex_144"},
		{src:"images/li_ex_145.jpg?1514269289636", id:"li_ex_145"},
		{src:"images/li_ex_146.jpg?1514269289636", id:"li_ex_146"},
		{src:"images/li_ex_147.jpg?1514269289636", id:"li_ex_147"},
		{src:"images/li_ex_148.jpg?1514269289636", id:"li_ex_148"},
		{src:"images/li_ex_149.jpg?1514269289636", id:"li_ex_149"},
		{src:"images/li_ex_150.jpg?1514269289636", id:"li_ex_150"},
		{src:"images/li_ex_151.jpg?1514269289636", id:"li_ex_151"},
		{src:"images/li_ex_152.jpg?1514269289636", id:"li_ex_152"},
		{src:"images/li_ex_153.jpg?1514269289636", id:"li_ex_153"},
		{src:"images/li_ex_154.jpg?1514269289636", id:"li_ex_154"},
		{src:"images/li_ex_155.jpg?1514269289636", id:"li_ex_155"},
		{src:"images/li_ex_156.jpg?1514269289636", id:"li_ex_156"},
		{src:"images/li_ex_157.jpg?1514269289636", id:"li_ex_157"},
		{src:"images/li_ex_158.jpg?1514269289636", id:"li_ex_158"},
		{src:"images/li_ex_159.jpg?1514269289636", id:"li_ex_159"},
		{src:"images/li_ex_160.jpg?1514269289636", id:"li_ex_160"},
		{src:"images/li_ex_161.jpg?1514269289636", id:"li_ex_161"},
		{src:"images/li_ex_162.jpg?1514269289636", id:"li_ex_162"},
		{src:"images/li_ex_163.jpg?1514269289636", id:"li_ex_163"},
		{src:"images/li_ex_164.jpg?1514269289636", id:"li_ex_164"},
		{src:"images/li_ex_165.jpg?1514269289636", id:"li_ex_165"},
		{src:"images/li_ex_166.jpg?1514269289636", id:"li_ex_166"},
		{src:"images/li_ex_167.jpg?1514269289636", id:"li_ex_167"},
		{src:"images/li_ex_168.jpg?1514269289636", id:"li_ex_168"},
		{src:"images/li_ex_169.jpg?1514269289636", id:"li_ex_169"},
		{src:"images/li_ex_170.jpg?1514269289636", id:"li_ex_170"},
		{src:"images/li_ex_171.jpg?1514269289636", id:"li_ex_171"},
		{src:"images/li_ex_172.jpg?1514269289636", id:"li_ex_172"},
		{src:"images/li_ex_173.jpg?1514269289636", id:"li_ex_173"},
		{src:"images/li_ex_174.jpg?1514269289636", id:"li_ex_174"},
		{src:"images/li_ex_175.jpg?1514269289636", id:"li_ex_175"},
		{src:"images/li_ex_176.jpg?1514269289636", id:"li_ex_176"},
		{src:"images/li_ex_177.jpg?1514269289636", id:"li_ex_177"},
		{src:"images/li_ex_178.jpg?1514269289636", id:"li_ex_178"},
		{src:"images/li_ex_179.jpg?1514269289636", id:"li_ex_179"},
		{src:"images/li_ex_180.jpg?1514269289636", id:"li_ex_180"},
		{src:"images/li_ex_181.jpg?1514269289636", id:"li_ex_181"},
		{src:"images/li_ex_182.jpg?1514269289636", id:"li_ex_182"},
		{src:"images/li_ex_183.jpg?1514269289636", id:"li_ex_183"},
		{src:"images/li_ex_184.jpg?1514269289636", id:"li_ex_184"},
		{src:"images/li_ex_185.jpg?1514269289636", id:"li_ex_185"},
		{src:"images/li_ex_186.jpg?1514269289636", id:"li_ex_186"},
		{src:"images/li_ex_187.jpg?1514269289636", id:"li_ex_187"},
		{src:"images/li_ex_188.jpg?1514269289636", id:"li_ex_188"},
		{src:"images/li_ex_189.jpg?1514269289636", id:"li_ex_189"},
		{src:"images/li_no_000.jpg?1514269289636", id:"li_no_000"},
		{src:"images/li_no_001.jpg?1514269289636", id:"li_no_001"},
		{src:"images/li_no_002.jpg?1514269289636", id:"li_no_002"},
		{src:"images/li_no_003.jpg?1514269289636", id:"li_no_003"},
		{src:"images/li_no_004.jpg?1514269289636", id:"li_no_004"},
		{src:"images/li_no_005.jpg?1514269289636", id:"li_no_005"},
		{src:"images/li_no_006.jpg?1514269289636", id:"li_no_006"},
		{src:"images/li_no_007.jpg?1514269289636", id:"li_no_007"},
		{src:"images/li_no_008.jpg?1514269289636", id:"li_no_008"},
		{src:"images/li_no_009.jpg?1514269289636", id:"li_no_009"},
		{src:"images/li_no_010.jpg?1514269289636", id:"li_no_010"},
		{src:"images/li_no_011.jpg?1514269289636", id:"li_no_011"},
		{src:"images/li_no_012.jpg?1514269289636", id:"li_no_012"},
		{src:"images/li_no_013.jpg?1514269289636", id:"li_no_013"},
		{src:"images/li_no_014.jpg?1514269289636", id:"li_no_014"},
		{src:"images/li_no_015.jpg?1514269289636", id:"li_no_015"},
		{src:"images/li_no_016.jpg?1514269289636", id:"li_no_016"},
		{src:"images/li_no_017.jpg?1514269289636", id:"li_no_017"},
		{src:"images/li_no_018.jpg?1514269289636", id:"li_no_018"},
		{src:"images/li_no_019.jpg?1514269289636", id:"li_no_019"},
		{src:"images/li_sw_000.jpg?1514269289636", id:"li_sw_000"},
		{src:"images/li_sw_001.jpg?1514269289636", id:"li_sw_001"},
		{src:"images/li_sw_002.jpg?1514269289636", id:"li_sw_002"},
		{src:"images/li_sw_003.jpg?1514269289636", id:"li_sw_003"},
		{src:"images/li_sw_004.jpg?1514269289636", id:"li_sw_004"},
		{src:"images/li_sw_005.jpg?1514269289636", id:"li_sw_005"},
		{src:"images/li_sw_006.jpg?1514269289636", id:"li_sw_006"},
		{src:"images/li_sw_007.jpg?1514269289636", id:"li_sw_007"},
		{src:"images/li_sw_008.jpg?1514269289636", id:"li_sw_008"},
		{src:"images/li_sw_009.jpg?1514269289636", id:"li_sw_009"},
		{src:"images/li_sw_010.jpg?1514269289636", id:"li_sw_010"},
		{src:"images/li_sw_011.jpg?1514269289636", id:"li_sw_011"},
		{src:"images/li_sw_012.jpg?1514269289636", id:"li_sw_012"},
		{src:"images/li_sw_013.jpg?1514269289636", id:"li_sw_013"},
		{src:"images/li_sw_014.jpg?1514269289636", id:"li_sw_014"},
		{src:"images/li_sw_015.jpg?1514269289636", id:"li_sw_015"},
		{src:"images/li_sw_016.jpg?1514269289636", id:"li_sw_016"},
		{src:"images/li_sw_017.jpg?1514269289636", id:"li_sw_017"},
		{src:"images/li_sw_018.jpg?1514269289636", id:"li_sw_018"},
		{src:"images/li_sw_019.jpg?1514269289636", id:"li_sw_019"},
		{src:"images/li_sw_020.jpg?1514269289636", id:"li_sw_020"},
		{src:"images/li_sw_021.jpg?1514269289636", id:"li_sw_021"},
		{src:"images/li_sw_022.jpg?1514269289636", id:"li_sw_022"},
		{src:"images/li_sw_023.jpg?1514269289636", id:"li_sw_023"},
		{src:"images/li_sw_024.jpg?1514269289636", id:"li_sw_024"},
		{src:"images/li_sw_025.jpg?1514269289636", id:"li_sw_025"},
		{src:"images/li_sw_026.jpg?1514269289636", id:"li_sw_026"},
		{src:"images/li_sw_027.jpg?1514269289636", id:"li_sw_027"},
		{src:"images/li_sw_028.jpg?1514269289636", id:"li_sw_028"},
		{src:"images/li_sw_029.jpg?1514269289636", id:"li_sw_029"},
		{src:"images/li_sw_030.jpg?1514269289636", id:"li_sw_030"},
		{src:"images/li_sw_031.jpg?1514269289636", id:"li_sw_031"},
		{src:"images/li_sw_032.jpg?1514269289636", id:"li_sw_032"},
		{src:"images/li_sw_033.jpg?1514269289636", id:"li_sw_033"},
		{src:"images/li_sw_034.jpg?1514269289636", id:"li_sw_034"},
		{src:"images/li_sw_035.jpg?1514269289636", id:"li_sw_035"},
		{src:"images/li_sw_036.jpg?1514269289636", id:"li_sw_036"},
		{src:"images/li_sw_037.jpg?1514269289636", id:"li_sw_037"},
		{src:"images/li_sw_038.jpg?1514269289636", id:"li_sw_038"},
		{src:"images/li_sw_039.jpg?1514269289636", id:"li_sw_039"},
		{src:"images/li_sw_040.jpg?1514269289636", id:"li_sw_040"},
		{src:"images/li_sw_041.jpg?1514269289636", id:"li_sw_041"},
		{src:"images/li_sw_042.jpg?1514269289636", id:"li_sw_042"},
		{src:"images/li_sw_043.jpg?1514269289636", id:"li_sw_043"},
		{src:"images/li_sw_044.jpg?1514269289636", id:"li_sw_044"},
		{src:"images/li_sw_045.jpg?1514269289636", id:"li_sw_045"},
		{src:"images/li_sw_046.jpg?1514269289636", id:"li_sw_046"},
		{src:"images/li_sw_047.jpg?1514269289636", id:"li_sw_047"},
		{src:"images/li_sw_048.jpg?1514269289636", id:"li_sw_048"},
		{src:"images/li_sw_049.jpg?1514269289636", id:"li_sw_049"},
		{src:"images/li_sw_050.jpg?1514269289636", id:"li_sw_050"},
		{src:"images/li_sw_051.jpg?1514269289636", id:"li_sw_051"},
		{src:"images/li_sw_052.jpg?1514269289636", id:"li_sw_052"},
		{src:"images/li_sw_053.jpg?1514269289636", id:"li_sw_053"},
		{src:"images/li_sw_054.jpg?1514269289636", id:"li_sw_054"},
		{src:"images/li_sw_055.jpg?1514269289636", id:"li_sw_055"},
		{src:"images/li_sw_056.jpg?1514269289636", id:"li_sw_056"},
		{src:"images/li_sw_057.jpg?1514269289636", id:"li_sw_057"},
		{src:"images/li_sw_058.jpg?1514269289636", id:"li_sw_058"},
		{src:"images/li_sw_059.jpg?1514269289636", id:"li_sw_059"},
		{src:"images/li_sw_060.jpg?1514269289636", id:"li_sw_060"},
		{src:"images/li_sw_061.jpg?1514269289636", id:"li_sw_061"},
		{src:"images/li_sw_062.jpg?1514269289636", id:"li_sw_062"},
		{src:"images/li_sw_063.jpg?1514269289636", id:"li_sw_063"},
		{src:"images/li_sw_064.jpg?1514269289636", id:"li_sw_064"},
		{src:"images/li_sw_065.jpg?1514269289636", id:"li_sw_065"},
		{src:"images/li_sw_066.jpg?1514269289636", id:"li_sw_066"},
		{src:"images/li_sw_067.jpg?1514269289636", id:"li_sw_067"},
		{src:"images/li_sw_068.jpg?1514269289636", id:"li_sw_068"},
		{src:"images/li_sw_069.jpg?1514269289636", id:"li_sw_069"},
		{src:"images/li_sw_070.jpg?1514269289636", id:"li_sw_070"},
		{src:"images/li_sw_071.jpg?1514269289636", id:"li_sw_071"},
		{src:"images/li_sw_072.jpg?1514269289636", id:"li_sw_072"},
		{src:"images/li_sw_073.jpg?1514269289636", id:"li_sw_073"},
		{src:"images/li_sw_074.jpg?1514269289636", id:"li_sw_074"},
		{src:"images/li_sw_075.jpg?1514269289636", id:"li_sw_075"},
		{src:"images/li_sw_076.jpg?1514269289636", id:"li_sw_076"},
		{src:"images/li_sw_077.jpg?1514269289636", id:"li_sw_077"},
		{src:"images/li_sw_078.jpg?1514269289636", id:"li_sw_078"},
		{src:"images/li_sw_079.jpg?1514269289636", id:"li_sw_079"},
		{src:"images/li_sw_080.jpg?1514269289636", id:"li_sw_080"},
		{src:"images/li_sw_081.jpg?1514269289636", id:"li_sw_081"},
		{src:"images/li_sw_082.jpg?1514269289636", id:"li_sw_082"},
		{src:"images/li_sw_083.jpg?1514269289636", id:"li_sw_083"},
		{src:"images/li_sw_084.jpg?1514269289636", id:"li_sw_084"},
		{src:"images/li_sw_085.jpg?1514269289636", id:"li_sw_085"},
		{src:"images/li_sw_086.jpg?1514269289636", id:"li_sw_086"},
		{src:"images/li_sw_087.jpg?1514269289636", id:"li_sw_087"},
		{src:"images/li_sw_088.jpg?1514269289636", id:"li_sw_088"},
		{src:"images/li_sw_089.jpg?1514269289636", id:"li_sw_089"},
		{src:"images/li_sw_090.jpg?1514269289636", id:"li_sw_090"},
		{src:"images/li_sw_091.jpg?1514269289636", id:"li_sw_091"},
		{src:"images/li_sw_092.jpg?1514269289636", id:"li_sw_092"},
		{src:"images/li_sw_093.jpg?1514269289636", id:"li_sw_093"},
		{src:"images/li_sw_094.jpg?1514269289636", id:"li_sw_094"},
		{src:"images/li_sw_095.jpg?1514269289636", id:"li_sw_095"},
		{src:"images/li_sw_096.jpg?1514269289636", id:"li_sw_096"},
		{src:"images/li_sw_097.jpg?1514269289636", id:"li_sw_097"},
		{src:"images/li_sw_098.jpg?1514269289636", id:"li_sw_098"},
		{src:"images/li_sw_099.jpg?1514269289636", id:"li_sw_099"},
		{src:"images/li_sw_100.jpg?1514269289636", id:"li_sw_100"},
		{src:"images/li_sw_101.jpg?1514269289636", id:"li_sw_101"},
		{src:"images/li_sw_102.jpg?1514269289636", id:"li_sw_102"},
		{src:"images/li_sw_103.jpg?1514269289636", id:"li_sw_103"},
		{src:"images/li_sw_104.jpg?1514269289636", id:"li_sw_104"},
		{src:"images/li_sw_105.jpg?1514269289636", id:"li_sw_105"},
		{src:"images/li_sw_106.jpg?1514269289636", id:"li_sw_106"},
		{src:"images/li_sw_107.jpg?1514269289636", id:"li_sw_107"},
		{src:"images/li_sw_108.jpg?1514269289636", id:"li_sw_108"},
		{src:"images/li_sw_109.jpg?1514269289636", id:"li_sw_109"},
		{src:"images/li_sw_110.jpg?1514269289637", id:"li_sw_110"},
		{src:"images/li_sw_111.jpg?1514269289637", id:"li_sw_111"},
		{src:"images/li_sw_112.jpg?1514269289637", id:"li_sw_112"},
		{src:"images/li_sw_113.jpg?1514269289637", id:"li_sw_113"},
		{src:"images/li_sw_114.jpg?1514269289637", id:"li_sw_114"},
		{src:"images/li_sw_115.jpg?1514269289637", id:"li_sw_115"},
		{src:"images/li_sw_116.jpg?1514269289637", id:"li_sw_116"},
		{src:"images/li_sw_117.jpg?1514269289637", id:"li_sw_117"},
		{src:"images/li_sw_118.jpg?1514269289637", id:"li_sw_118"},
		{src:"images/li_sw_119.jpg?1514269289637", id:"li_sw_119"},
		{src:"images/li_sw_120.jpg?1514269289637", id:"li_sw_120"},
		{src:"images/li_sw_121.jpg?1514269289637", id:"li_sw_121"},
		{src:"images/li_sw_122.jpg?1514269289637", id:"li_sw_122"},
		{src:"images/li_sw_123.jpg?1514269289637", id:"li_sw_123"},
		{src:"images/li_sw_124.jpg?1514269289637", id:"li_sw_124"},
		{src:"images/li_sw_125.jpg?1514269289637", id:"li_sw_125"},
		{src:"images/li_sw_126.jpg?1514269289637", id:"li_sw_126"},
		{src:"images/li_sw_127.jpg?1514269289637", id:"li_sw_127"},
		{src:"images/li_sw_128.jpg?1514269289637", id:"li_sw_128"},
		{src:"images/li_sw_129.jpg?1514269289637", id:"li_sw_129"},
		{src:"images/li_sw_130.jpg?1514269289637", id:"li_sw_130"},
		{src:"images/li_sw_131.jpg?1514269289637", id:"li_sw_131"},
		{src:"images/li_sw_132.jpg?1514269289637", id:"li_sw_132"},
		{src:"images/li_sw_133.jpg?1514269289637", id:"li_sw_133"},
		{src:"images/li_sw_134.jpg?1514269289637", id:"li_sw_134"},
		{src:"images/li_sw_135.jpg?1514269289637", id:"li_sw_135"},
		{src:"images/li_sw_136.jpg?1514269289637", id:"li_sw_136"},
		{src:"images/li_sw_137.jpg?1514269289637", id:"li_sw_137"},
		{src:"images/li_sw_138.jpg?1514269289637", id:"li_sw_138"},
		{src:"images/li_sw_139.jpg?1514269289637", id:"li_sw_139"},
		{src:"images/li_sw_140.jpg?1514269289637", id:"li_sw_140"},
		{src:"images/li_sw_141.jpg?1514269289637", id:"li_sw_141"},
		{src:"images/li_sw_142.jpg?1514269289637", id:"li_sw_142"},
		{src:"images/li_sw_143.jpg?1514269289637", id:"li_sw_143"},
		{src:"images/li_sw_144.jpg?1514269289637", id:"li_sw_144"},
		{src:"images/li_sw_145.jpg?1514269289637", id:"li_sw_145"},
		{src:"images/li_sw_146.jpg?1514269289637", id:"li_sw_146"},
		{src:"images/li_sw_147.jpg?1514269289637", id:"li_sw_147"},
		{src:"images/li_sw_148.jpg?1514269289637", id:"li_sw_148"},
		{src:"images/li_sw_149.jpg?1514269289637", id:"li_sw_149"},
		{src:"images/li_sw_150.jpg?1514269289637", id:"li_sw_150"},
		{src:"images/li_sw_151.jpg?1514269289637", id:"li_sw_151"},
		{src:"images/li_sw_152.jpg?1514269289637", id:"li_sw_152"},
		{src:"images/li_sw_153.jpg?1514269289637", id:"li_sw_153"},
		{src:"images/li_sw_154.jpg?1514269289637", id:"li_sw_154"},
		{src:"images/li_sw_155.jpg?1514269289637", id:"li_sw_155"},
		{src:"images/li_sw_156.jpg?1514269289637", id:"li_sw_156"},
		{src:"images/li_sw_157.jpg?1514269289637", id:"li_sw_157"},
		{src:"images/li_sw_158.jpg?1514269289637", id:"li_sw_158"},
		{src:"images/li_sw_159.jpg?1514269289637", id:"li_sw_159"},
		{src:"images/li_sw_160.jpg?1514269289637", id:"li_sw_160"},
		{src:"images/li_sw_161.jpg?1514269289637", id:"li_sw_161"},
		{src:"images/li_sw_162.jpg?1514269289637", id:"li_sw_162"},
		{src:"images/li_sw_163.jpg?1514269289637", id:"li_sw_163"},
		{src:"images/li_sw_164.jpg?1514269289637", id:"li_sw_164"},
		{src:"images/li_sw_165.jpg?1514269289637", id:"li_sw_165"},
		{src:"images/li_sw_166.jpg?1514269289637", id:"li_sw_166"},
		{src:"images/li_sw_167.jpg?1514269289637", id:"li_sw_167"},
		{src:"images/li_sw_168.jpg?1514269289637", id:"li_sw_168"},
		{src:"images/li_sw_169.jpg?1514269289637", id:"li_sw_169"},
		{src:"images/li_sw_170.jpg?1514269289637", id:"li_sw_170"},
		{src:"images/li_sw_171.jpg?1514269289637", id:"li_sw_171"},
		{src:"images/li_sw_172.jpg?1514269289637", id:"li_sw_172"},
		{src:"images/li_sw_173.jpg?1514269289637", id:"li_sw_173"},
		{src:"images/li_sw_174.jpg?1514269289637", id:"li_sw_174"},
		{src:"images/li_sw_175.jpg?1514269289637", id:"li_sw_175"},
		{src:"images/li_sw_176.jpg?1514269289637", id:"li_sw_176"},
		{src:"images/li_sw_177.jpg?1514269289637", id:"li_sw_177"},
		{src:"images/li_sw_178.jpg?1514269289637", id:"li_sw_178"},
		{src:"images/li_sw_179.jpg?1514269289637", id:"li_sw_179"},
		{src:"images/li_we_000.jpg?1514269289637", id:"li_we_000"},
		{src:"images/li_we_001.jpg?1514269289637", id:"li_we_001"},
		{src:"images/li_we_002.jpg?1514269289637", id:"li_we_002"},
		{src:"images/li_we_003.jpg?1514269289637", id:"li_we_003"},
		{src:"images/li_we_004.jpg?1514269289637", id:"li_we_004"},
		{src:"images/li_we_005.jpg?1514269289637", id:"li_we_005"},
		{src:"images/li_we_006.jpg?1514269289637", id:"li_we_006"},
		{src:"images/li_we_007.jpg?1514269289637", id:"li_we_007"},
		{src:"images/li_we_008.jpg?1514269289637", id:"li_we_008"},
		{src:"images/li_we_009.jpg?1514269289637", id:"li_we_009"},
		{src:"images/li_we_010.jpg?1514269289637", id:"li_we_010"},
		{src:"images/li_we_011.jpg?1514269289637", id:"li_we_011"},
		{src:"images/li_we_012.jpg?1514269289637", id:"li_we_012"},
		{src:"images/li_we_013.jpg?1514269289637", id:"li_we_013"},
		{src:"images/li_we_014.jpg?1514269289637", id:"li_we_014"},
		{src:"images/li_we_015.jpg?1514269289637", id:"li_we_015"},
		{src:"images/li_we_016.jpg?1514269289637", id:"li_we_016"},
		{src:"images/li_we_017.jpg?1514269289637", id:"li_we_017"},
		{src:"images/li_we_018.jpg?1514269289637", id:"li_we_018"},
		{src:"images/li_we_019.jpg?1514269289637", id:"li_we_019"},
		{src:"images/li_we_020.jpg?1514269289637", id:"li_we_020"},
		{src:"images/li_we_021.jpg?1514269289637", id:"li_we_021"},
		{src:"images/li_we_022.jpg?1514269289637", id:"li_we_022"},
		{src:"images/li_we_023.jpg?1514269289637", id:"li_we_023"},
		{src:"images/li_we_024.jpg?1514269289637", id:"li_we_024"},
		{src:"images/li_we_025.jpg?1514269289637", id:"li_we_025"},
		{src:"images/li_we_026.jpg?1514269289637", id:"li_we_026"},
		{src:"images/li_we_027.jpg?1514269289637", id:"li_we_027"},
		{src:"images/li_we_028.jpg?1514269289637", id:"li_we_028"},
		{src:"images/li_we_029.jpg?1514269289637", id:"li_we_029"},
		{src:"images/li_we_030.jpg?1514269289637", id:"li_we_030"},
		{src:"images/li_we_031.jpg?1514269289637", id:"li_we_031"},
		{src:"images/li_we_032.jpg?1514269289637", id:"li_we_032"},
		{src:"images/li_we_033.jpg?1514269289637", id:"li_we_033"},
		{src:"images/li_we_034.jpg?1514269289637", id:"li_we_034"},
		{src:"images/li_we_035.jpg?1514269289637", id:"li_we_035"},
		{src:"images/li_we_036.jpg?1514269289637", id:"li_we_036"},
		{src:"images/li_we_037.jpg?1514269289637", id:"li_we_037"},
		{src:"images/li_we_038.jpg?1514269289637", id:"li_we_038"},
		{src:"images/li_we_039.jpg?1514269289637", id:"li_we_039"},
		{src:"images/li_we_040.jpg?1514269289637", id:"li_we_040"},
		{src:"images/li_we_041.jpg?1514269289637", id:"li_we_041"},
		{src:"images/li_we_042.jpg?1514269289637", id:"li_we_042"},
		{src:"images/li_we_043.jpg?1514269289637", id:"li_we_043"},
		{src:"images/li_we_044.jpg?1514269289637", id:"li_we_044"},
		{src:"images/li_we_045.jpg?1514269289637", id:"li_we_045"},
		{src:"images/li_we_046.jpg?1514269289637", id:"li_we_046"},
		{src:"images/li_we_047.jpg?1514269289637", id:"li_we_047"},
		{src:"images/li_we_048.jpg?1514269289637", id:"li_we_048"},
		{src:"images/li_we_049.jpg?1514269289637", id:"li_we_049"},
		{src:"images/li_we_050.jpg?1514269289637", id:"li_we_050"},
		{src:"images/li_we_051.jpg?1514269289637", id:"li_we_051"},
		{src:"images/li_we_052.jpg?1514269289637", id:"li_we_052"},
		{src:"images/li_we_053.jpg?1514269289637", id:"li_we_053"},
		{src:"images/li_we_054.jpg?1514269289637", id:"li_we_054"},
		{src:"images/li_we_055.jpg?1514269289637", id:"li_we_055"},
		{src:"images/li_we_056.jpg?1514269289637", id:"li_we_056"},
		{src:"images/li_we_057.jpg?1514269289637", id:"li_we_057"},
		{src:"images/li_we_058.jpg?1514269289637", id:"li_we_058"},
		{src:"images/li_we_059.jpg?1514269289637", id:"li_we_059"},
		{src:"images/lickHead.png?1514269289637", id:"lickHead"},
		{src:"images/lose.png?1514269289637", id:"lose"},
		{src:"images/manHand.png?1514269289637", id:"manHand"},
		{src:"images/normal_0.jpg?1514269289637", id:"normal_0"},
		{src:"images/normal_1.jpg?1514269289637", id:"normal_1"},
		{src:"images/openEyes.png?1514269289637", id:"openEyes"},
		{src:"images/opening_1.jpg?1514269289637", id:"opening_1"},
		{src:"images/opening_2.jpg?1514269289637", id:"opening_2"},
		{src:"images/playBanner.png?1514269289637", id:"playBanner"},
		{src:"images/return_icon.png?1514269289637", id:"return_icon"},
		{src:"images/schoollovelogo.png?1514269289637", id:"schoollovelogo"},
		{src:"images/scratch.png?1514269289637", id:"scratch"},
		{src:"images/scratchBanner.png?1514269289637", id:"scratchBanner"},
		{src:"images/sweaty_0.jpg?1514269289637", id:"sweaty_0"},
		{src:"images/sweaty_1.jpg?1514269289637", id:"sweaty_1"},
		{src:"images/ticket.png?1514269289637", id:"ticket"},
		{src:"images/titlelogo.png?1514269289637", id:"titlelogo"},
		{src:"images/triangle.png?1514269289637", id:"triangle"},
		{src:"images/tutorial.jpg?1514269289637", id:"tutorial"},
		{src:"images/tutorialBanner.png?1514269289637", id:"tutorialBanner"},
		{src:"images/wallet_icon.png?1514269289637", id:"wallet_icon"},
		{src:"images/wet_0.jpg?1514269289637", id:"wet_0"},
		{src:"images/wet_1.jpg?1514269289637", id:"wet_1"},
		{src:"images/window_1.png?1514269289637", id:"window_1"},
		{src:"images/window_2.png?1514269289637", id:"window_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1E2B34C2326343C99233F03CB50FD629'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;