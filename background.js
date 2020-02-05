/*
Open a new tab, and load "my-page.html" into it.
*/


function openMyPage() {
  console.log("injecting");
   browser.tabs.create({
     "url": "http://www.compsci.hunter.cuny.edu/~sweiss/course_materials/csci395.86/cs395.86_s20.php"
   });
}


/*
Add openMyPage() as a listener to clicks on the browser action.
*/
browser.browserAction.onClicked.addListener(openMyPage);
 
