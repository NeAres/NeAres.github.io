// JavaScript Document
var expandedMenu = 0;
var TArray = ["T1","T2","T3"];
var TitleCall = {"T2":["物流软件","固定资产","MES系统"],"T3":["气泡柱","气枕","纸箱"],"T1":["仓储管理软件","仓储代管"," "]};
var CaptionCall = ["此处是软件系统的详情介绍页，根据长度我们会调整其宽度，不过可以多写，也不要写太多，客户看太多的字会烦,虽然填满整个文章会比较有使用美感：春江潮水连海平，海上明月共潮生，滟滟随波千万里，何处春江无月明，江流宛转绕芳甸，月照花林皆似霰，空里流霜不觉飞，汀上白沙看不见，江天一色无纤尘，皎皎空中孤月轮，江畔何人初见月，江月何年初照人","此处是包材业务的详情介绍页，根据长度我们会调整其宽度，估计包材也写不了多少，努力写一些东西就行,填满整个文章会比较有使用美感：春江潮水连海平，海上明月共潮生，滟滟随波千万里，何处春江无月明，江流宛转绕芳甸，月照花林皆似霰，空里流霜不觉飞，汀上白沙看不见，江天一色无纤尘，皎皎空中孤月轮，江畔何人初见月，江月何年初照人","此处是仓储管理系统的详情介绍页，根据长度我们会调整其宽度，不过可以多写，反正没坏处，不过太长还是算了,填满整个文章会比较有使用美感：春江潮水连海平，海上明月共潮生，滟滟随波千万里，何处春江无月明，江流宛转绕芳甸，月照花林皆似霰，空里流霜不觉飞，汀上白沙看不见，江天一色无纤尘，皎皎空中孤月轮，江畔何人初见月，江月何年初照人"];

function animationT2expand(TAT) {
	//alert('I am running');
	var Array = [];
	for(var i=0;i<TArray.length;i++){
		if(TArray[i]!=TAT){
			Array.push(TArray[i]);
		}
	}
	Array.push("TT")
	var nameArray = TitleCall.T2;
	document.getElementById("T1_1").innerHTML = nameArray[1];
	document.getElementById("T1_2").innerHTML = nameArray[2];
	document.getElementById("T1_3").innerHTML = nameArray[0];
	document.getElementById("CaptionContent").innerHTML = CaptionCall[0];
	if(expandedMenu==1){
		expandedMenu=0;
		arrayedOpacityFrom(0,1,Array);
		arrayedOpacityFrom(1,0,["T1_","Caption"]);
		document.getElementById("T2").style.animation = TAT+"AnimationBack 2s";
		document.getElementById("T2").style.animationFillMode = "forwards";
	} else if (expandedMenu==0){
		arrayedOpacityFrom(1,0,["T1","T3","TT"]);
		arrayedOpacityFrom(0,1,["T1_","Caption"]);
		document.getElementById("T2").style.animation = TAT+"Animation 2s";
		document.getElementById("T2").style.animationFillMode = "forwards";
		expandedMenu=1;
	}
}

function animationT1expand(TAT) {
	//alert('I am running');
	var Array = [];
	for(var i=0;i<TArray.length;i++){
		if(TArray[i]!=TAT){
			Array.push(TArray[i]);
		}
	}
	Array.push("TT")
	var nameArray = TitleCall.T1;
	document.getElementById("T1_1").innerHTML = nameArray[0];
	document.getElementById("T1_2").innerHTML = nameArray[1];
	document.getElementById("T1_3").innerHTML = nameArray[2];
	document.getElementById("CaptionContent").innerHTML = CaptionCall[2];
	if(expandedMenu==3){
		expandedMenu=0;
		arrayedOpacityFrom(0,1,Array);
		arrayedOpacityFrom(1,0,["T1_","Caption"]);
		document.getElementById("T1").style.animation = TAT+"AnimationBack 2s";
		document.getElementById("T1").style.animationFillMode = "forwards";
	} else if (expandedMenu==0){
		arrayedOpacityFrom(1,0,Array);
		arrayedOpacityFrom(0,1,["T1_","Caption"]);
		document.getElementById("T1").style.animation = TAT+"Animation 2s";
		document.getElementById("T1").style.animationFillMode = "forwards";
		expandedMenu=3;
	}
}

function animationT3expand(TAT) {
	//alert('I am running');
	var Array = [];
	for(var i=0;i<TArray.length;i++){
		if(TArray[i]!=TAT){
			Array.push(TArray[i]);
		}
	}
	Array.push("TT")
	var nameArray = TitleCall.T3;
	document.getElementById("T1_1").innerHTML = nameArray[0];
	document.getElementById("T1_2").innerHTML = nameArray[1];
	document.getElementById("T1_3").innerHTML = nameArray[2];
	document.getElementById("CaptionContent").innerHTML = CaptionCall[1];
	if(expandedMenu!=0){
		expandedMenu=0;
		arrayedOpacityFrom(0,1,Array);
		arrayedOpacityFrom(1,0,["T1_","Caption"]);
		document.getElementById("T3").style.animation = TAT+"AnimationBack 2s";
		document.getElementById("T3").style.animationFillMode = "forwards";
	} else if (expandedMenu==0){
		arrayedOpacityFrom(1,0,Array);
		arrayedOpacityFrom(0,1,["T1_","Caption"]);
		document.getElementById("T3").style.animation = TAT+"Animation 2s";
		document.getElementById("T3").style.animationFillMode = "forwards";
		expandedMenu=2;
	}
}

function arrayedOpacityFrom(FromValue,ToValue,selectorIDs){
	for(var i=0;i<selectorIDs.length;i++){
		OpacityFrom(FromValue,ToValue,selectorIDs[i]);
	}
}

function OpacityFrom(FromValue,ToValue,selectorID){
	document.getElementById(selectorID).animate ([
		{opacity: FromValue},{opacity: ToValue}
	], {duration: 1000, fill: 'forwards', iteration: Infinity});
}

/*function clippedPathFrom(FromValue,selectorID){
	document.getElementById(selectorID).animate ([
		{
			clippath: "polygon(0 0, 0 100%, 33% 100%, 33% 0)",
			webkitclippath: "polygon(0 0, 0 100%, 33% 100%, 33% 0)"
		} , {
			clippath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
			webkitclippath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)"
		}
	], {duration: 1000, fill: 'forwards', iteration: Infinity});
}*/