/* 

Bookmarklet/scriptlets to inject scrumtimer into e.g. Jira instead of creating a popup

These can either be put in a tool for creating a bookmarklet like 
https://www.yourjs.com/bookmarklet/
https://mrcoles.com/bookmarklet/

or pasted into the devtools console ( press F12 and choose console.)

They will create a div element in the right hand side of the screen with the scrumtimer included.

REFRESHING THE PAGE REMOVES THE TIMER - if you want the timer to stay, please use the popout link.

*/

/* ***** Generic version. ****** */
//TODO - resize window contents instead of sitting on top of the page
let d = document.createElement("div");
d.innerHTML = '<iframe src="http://localhost:4200/#/" style=" width:100%; height:100%"> Hello World </iframe>';
d.style='position: relative; top: 0; right:0; width:250px; bottom: 0; z-index: 100; background-color: rgba(100,100,100,0.9) ';
document.getElementsByTagName('body')[0].append(d);

/* ***** Jira Specific version. ****** 
 This scriptlet will add the scrumtimer in the Jira details pane which shows details of a story, as long as you are in the "Active Sprints" view.
*/
let d = document.createElement("div");
d.id = "ScrumTimerDiv";
d.innerHTML = "<a href=\"javascript:console.log(document.getElementById('ScrumTimerDiv').remove())\">X close ScrumTimer</a><iframe src=\"https://josste.github.io/ScrumTimer/\" style=\" width:100%; height:100%\"> Hello World </iframe>";
d.class="ghx-detail-view gh-editable-detail-view ui-resizable";
document.getElementById('ghx-work').append(d);

