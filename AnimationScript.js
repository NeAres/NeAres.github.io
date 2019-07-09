// JavaScript Document
var expandedMenu = 0;
var TArray = ["T1","T2","T3"];
var TitleCall = {"T2":["物流软件","MES系统","固定资产"],"T3":["气泡柱","气枕","纸箱"],"T1":["仓储管理软件","仓储运营"," "]};
var Flag=0;
// 0 Means Index Page, 1 means software system, 2 means wrapping services, 3 means storage system
var intervalT1 = 1;
var intervalT2 = 1;
var intervalT3 = 1;
// 1 means first call, 2 means second call, 3 means third call

window.setInterval("intervalChangeT1()",13000);
window.setInterval("intervalChangeT2()",11000);
window.setInterval("intervalChangeT3()",15000);

function intervalChangeT1(){
	intervalT1++;
	if(intervalT1 > 2){
		intervalT1 = 1;
	}
	if (expandedMenu != 0 && expandedMenu != 1) {
		return
	}
	OpacityFrom(1,0,"T1");
	window.setTimeout("document.getElementById(\"T1\").src = \"Resource Image/T1/\"+intervalT1+\".jpg\"",1000);
	window.setTimeout("OpacityFrom(0,1,\"T1\")",1100);
	if (expandedMenu == 1) {
		for(var inte=1;inte<=2;inte++){
			if (inte==intervalT1) {
				OpacityFrom(0.5,1,"T1_"+inte);
			} else {
				OpacityFrom(1,0.5,"T1_"+inte);
			}
		}
		OpacityFrom(1,0,"CaptionContent");
		window.setTimeout("document.getElementById(\"CaptionContent\").innerHTML=CaptionCallT1[intervalT1-1]",1000);
		window.setTimeout("OpacityFrom(0,1,\"CaptionContent\")",1100);
	}
}

function intervalChangeT2(){
	intervalT2++;
	if(intervalT2 > 3){
		intervalT2 = 1;
	}
	if (expandedMenu == 1||expandedMenu == 3) {
		return
	}
	OpacityFrom(1,0,"T2");
	window.setTimeout("if (expandedMenu!=0){return}",900);
	window.setTimeout("document.getElementById(\"T2\").src = \"Resource Image/T2/\"+intervalT2+\".jpg\"",1000);
	window.setTimeout("OpacityFrom(0,1,\"T2\")",1100);
	if (expandedMenu == 2) {
		for(var inte=1;inte<=3;inte++){
			if (inte==intervalT2) {
				OpacityFrom(0.5,1,"T1_"+inte);
			} else if (inte == intervalT2+2 || inte == intervalT2-1) {
				OpacityFrom(1,0.5,"T1_"+inte);
			}
		}
		OpacityFrom(1,0,"CaptionContent");
		window.setTimeout("document.getElementById(\"CaptionContent\").innerHTML=CaptionCallT2[intervalT2-1]",1000);
		window.setTimeout("OpacityFrom(0,1,\"CaptionContent\")",1100);
	}
}

function intervalChangeT3(){
	intervalT3++;
	if(intervalT3 > 3){
		intervalT3 = 1;
	}
	if (expandedMenu != 0 && expandedMenu != 3) {
		return
	}
	OpacityFrom(1,0,"T3");
	window.setTimeout("document.getElementById(\"T3\").src = \"Resource Image/T3/\"+intervalT3+\".jpg\"",1000);
	window.setTimeout("OpacityFrom(0,1,\"T3\")",1100);
	if (expandedMenu == 3) {
		for(var inte=1;inte<=3;inte++){
			if (inte==intervalT3) {
				OpacityFrom(0.5,1,"T1_"+inte);
			} else if (inte == intervalT3+2 || inte == intervalT3-1) {
				OpacityFrom(1,0.5,"T1_"+inte);
			}
		}
		OpacityFrom(1,0,"CaptionContent");
		window.setTimeout("document.getElementById(\"CaptionContent\").innerHTML=CaptionCallT3[intervalT3-1]",1000);
		window.setTimeout("OpacityFrom(0,1,\"CaptionContent\")",1100);
	}
}

function animationT2expand(TAT) {
	//alert('I am running');
	if(expandedMenu==1){
		animationT1expand("T1");
		window.setTimeout("animationT2expand('T2')",1000);
		return;
	} else if (expandedMenu==3){
		animationT3expand("T3");
		window.setTimeout("animationT2expand('T2')",1000);
		return;
	}
	var Array = [];
	for(var i=0;i<TArray.length;i++){
		if(TArray[i]!=TAT){
			Array.push(TArray[i]);
		}
	}
	Array.push("TT")
	var nameArray = TitleCall.T2;
	document.getElementById("T1_1").innerHTML = nameArray[0];
	document.getElementById("T1_2").innerHTML = nameArray[1];
	document.getElementById("T1_3").innerHTML = nameArray[2];
	document.getElementById("CaptionContent").innerHTML = CaptionCallT2[intervalT2-1];
	if(expandedMenu==2){
		expandedMenu=0;
		arrayedOpacityFrom(0,1,Array);
		arrayedOpacityFrom(1,0,["T1_","Caption"]);
		document.getElementById("T2").style.animation = TAT+"AnimationBack 2s";
		document.getElementById("T2").style.animationFillMode = "forwards";
	} else if (expandedMenu!=2){
		arrayedOpacityFrom(1,0,["T1","T3","TT"]);
		arrayedOpacityFrom(0,1,["T1_","Caption"]);
		document.getElementById("T2").style.animation = TAT+"Animation 2s";
		document.getElementById("T2").style.animationFillMode = "forwards";
		expandedMenu=2;
		window.setTimeout("arrayedOpacityDir(1,0,Array)",1200);
	}
}

function animationT1expand(TAT) {
	//alert('I am running');
	var Array = [];
	if(expandedMenu==2){
		animationT2expand("T2");
		window.setTimeout("animationT1expand('T1')",1000);
		return;
	} else if (expandedMenu==3){
		animationT3expand("T3");
		window.setTimeout("animationT1expand('T1')",1000);
		return;
	}
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
	document.getElementById("CaptionContent").innerHTML = CaptionCallT1[intervalT1-1];
	if(expandedMenu==1){
		expandedMenu=0;
		arrayedOpacityFrom(0,1,Array);
		arrayedOpacityFrom(1,0,["T1_","Caption"]);
		document.getElementById("T1").style.animation = TAT+"AnimationBack 2s";
		document.getElementById("T1").style.animationFillMode = "forwards";
	} else if (expandedMenu!=1){
		arrayedOpacityFrom(1,0,Array);
		arrayedOpacityFrom(0,1,["T1_","Caption"]);
		document.getElementById("T1").style.animation = TAT+"Animation 2s";
		document.getElementById("T1").style.animationFillMode = "forwards";
		expandedMenu=1;
		window.setTimeout("arrayedOpacityDir(0,Array)",1200);
	}
}

function animationT3expand(TAT) {
	//alert('I am running');
	if(expandedMenu==1){
		animationT1expand("T1");
		window.setTimeout("animationT3expand('T3')",1000);
		return;
	} else if (expandedMenu==2){
		animationT2expand("T2");
		window.setTimeout("animationT3expand('T3')",1000);
		return;
	}
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
	document.getElementById("CaptionContent").innerHTML = CaptionCallT3[intervalT3-1];
	if(expandedMenu==3){
		expandedMenu=0;
		arrayedOpacityFrom(0,1,Array);
		arrayedOpacityFrom(1,0,["T1_","Caption"]);
		document.getElementById("T3").style.animation = TAT+"AnimationBack 2s";
		document.getElementById("T3").style.animationFillMode = "forwards";
	} else if (expandedMenu!=3){
		arrayedOpacityFrom(1,0,Array); //无关的
		arrayedOpacityFrom(0,1,["T1_","Caption"]);
		document.getElementById("T3").style.animation = TAT+"Animation 2s";
		document.getElementById("T3").style.animationFillMode = "forwards";
		expandedMenu=3;
		window.setTimeout("arrayedOpacityDir(0,Array)",1200);
	}
	
}

function arrayedOpacityFrom(FromValue,ToValue,selectorIDs){
	for(var i=0;i<selectorIDs.length;i++){
		OpacityFrom(FromValue,ToValue,selectorIDs[i]);
	}
}

function arrayedOpacityDir(ToValue,selectorIDs){
	for(var i=0;i<selectorIDs.length;i++){
		document.getElementById(selectorIDs[i]).style.opacity = ToValue;
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


//仓储
var CaptionCallT1 = ["T1此处是软件系统的详情介绍页，根据长度我们会调整其宽度，不过可以多写，也不要写太多，客户看太多的字会烦,虽然填满整个文章会比较有使用美感：春江潮水连海平，海上明月共潮生，滟滟随波千万里，何处春江无月明，江流宛转绕芳甸，月照花林皆似霰，空里流霜不觉飞，汀上白沙看不见，江天一色无纤尘，皎皎空中孤月轮，江畔何人初见月，江月何年初照人","T1此处是业务的详情介绍页，根据长度我们会调整其宽度，估计包材也写不了多少，努力写一些东西就行,填满整个文章会比较有使用美感：春江潮水连海平，海上明月共潮生，滟滟随波千万里，何处春江无月明，江流宛转绕芳甸，月照花林皆似霰，空里流霜不觉飞，汀上白沙看不见，江天一色无纤尘，皎皎空中孤月轮，江畔何人初见月，江月何年初照人"];


//软件系统
var CaptionCallT2 = ["T2此处是软件系统的详情介绍页，根据长度我们会调整其宽度，不过可以多写，也不要写太多，客户看太多的字会烦,虽然填满整个文章会比较有使用美感：春江潮水连海平，海上明月共潮生，滟滟随波千万里，何处春江无月明，江流宛转绕芳甸，月照花林皆似霰，空里流霜不觉飞，汀上白沙看不见，江天一色无纤尘，皎皎空中孤月轮，江畔何人初见月，江月何年初照人","T2此处是业务的详情介绍页，根据长度我们会调整其宽度，估计包材也写不了多少，努力写一些东西就行,填满整个文章会比较有使用美感：春江潮水连海平，海上明月共潮生，滟滟随波千万里，何处春江无月明，江流宛转绕芳甸，月照花林皆似霰，空里流霜不觉飞，汀上白沙看不见，江天一色无纤尘，皎皎空中孤月轮，江畔何人初见月，江月何年初照人","T2此处是系统的详情介绍页，根据长度我们会调整其宽度，不过可以多写，反正没坏处，不过太长还是算了,填满整个文章会比较有使用美感：春江潮水连海平，海上明月共潮生，滟滟随波千万里，何处春江无月明，江流宛转绕芳甸，月照花林皆似霰，空里流霜不觉飞，汀上白沙看不见，江天一色无纤尘，皎皎空中孤月轮，江畔何人初见月，江月何年初照人"];


//包材的详情介绍
var CaptionCallT3 = ["T3此处是软件系统的详情介绍页，根据长度我们会调整其宽度，不过可以多写，也不要写太多，客户看太多的字会烦,虽然填满整个文章会比较有使用美感：春江潮水连海平，海上明月共潮生，滟滟随波千万里，何处春江无月明，江流宛转绕芳甸，月照花林皆似霰，空里流霜不觉飞，汀上白沙看不见，江天一色无纤尘，皎皎空中孤月轮，江畔何人初见月，江月何年初照人","T3此处是业务的详情介绍页，根据长度我们会调整其宽度，估计包材也写不了多少，努力写一些东西就行,填满整个文章会比较有使用美感：春江潮水连海平，海上明月共潮生，滟滟随波千万里，何处春江无月明，江流宛转绕芳甸，月照花林皆似霰，空里流霜不觉飞，汀上白沙看不见，江天一色无纤尘，皎皎空中孤月轮，江畔何人初见月，江月何年初照人","T3此处是业务的详情介绍页，根据长度我们会调整其宽度，估计包材也写不了多少，努力写一些东西就行,填满整个文章会比较有使用美感：春江潮水连海平，海上明月共潮生，滟滟随波千万里，何处春江无月明，江流宛转绕芳甸，月照花林皆似霰，空里流霜不觉飞，汀上白沙看不见，江天一色无纤尘，皎皎空中孤月轮，江畔何人初见月，江月何年初照人"];