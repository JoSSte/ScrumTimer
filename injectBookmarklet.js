//bookmarklet to inject scrumtimer into e.g. Jira instead of creating a popup
//TODO - resize window instead of sitting onm top of the page
let d = document.createElement("div");
d.innerHTML = '<iframe src="http://localhost:4200/#/" style=" width:100%; height:100%"> Hello World </iframe>';
d.style='position: relative; top: 0; right:0; width:250px; bottom: 0; z-index: 100; background-color: rgba(100,100,100,0.9) ';
document.getElementsByTagName('body')[0].append(d);

 //Jira specific - inserts into div next to Jira details

let d = document.createElement("div");
d.innerHTML = '<iframe src="http://localhost:4200/#/" style=" width:100%; height:100%"> Hello World </iframe>';
d.class="ghx-detail-view gh-editable-detail-view ui-resizable";
d.style="width:400px";
document.getElementById('ghx-work').append(d);

//Jira Specific - including close link

let d = document.createElement("div");
d.id = "ScrumTimerDiv";
d.innerHTML = "<a href=\"javascript:console.log(document.getElementById('ScrumTimerDiv').remove())\">X close ScrumTimer</a><iframe src=\"https://josste.github.io/ScrumTimer/\" style=\" width:100%; height:100%\"> Hello World </iframe>";
d.class="ghx-detail-view gh-editable-detail-view ui-resizable";
document.getElementById('ghx-work').append(d);

