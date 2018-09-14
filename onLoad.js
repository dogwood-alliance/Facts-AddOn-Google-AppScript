/*
This app script is designed to auto-add text that is needed by Dogwood staff to defend positions or more quickly write blogs, emails, opeds, etc. 

To add a new item, you'll need to do the following: 
1. Add your insertable text in insertableText as a key/value pair. (insertableText doc)
2. Add a menu item. (insertableText doc)
3. Test it to make sure it's what you want!
*/



//add menu item in here
function onOpen() {
  var ui = DocumentApp.getUi();
  ui.createMenu('Hey Sam! Tell Me About...')
      .addItem('This App', 'appAbout')
      .addSeparator()
      .addItem('Acreage Calculator', 'calculateAcres')
      .addSeparator()
      .addSubMenu(ui.createMenu('Ecosystem Services (General Knowledge)')
          .addItem('What are ecosystem services?', 'esBasics')
          .addItem('What are ecosystem services? (Citation)', 'esBasicsCite')
          .addSeparator()
                  
          .addItem('Ecosystem services protect us from climate change', 'esClimateChange')
          .addItem('Ecosystem services protect us from climate change (Citation)', 'esClimateChangeCite')
          .addSeparator()
                    
          .addItem('Ecosystem services give us clean air and clean water', 'esCleanAir')
          .addItem('Ecosystem services give us clean air and clean water (Citation)', 'esCleanAirCite') 
          .addSeparator()
                    
          .addItem('Conserving species helps protect all ecosystem services', 'esSpecies')
          .addItem('Conserving species helps protect all ecosystem services (Citation)', 'esSpeciesCite')
          .addSeparator()
                    
          .addItem('Standing forests benefit our economic systems', 'esEconBen')
          .addItem('Standing forests benefit our economic systems (Citation)', 'esEconBenCite')  
          .addSeparator()
                    
          .addItem('Forests improve our quality of life', 'esQualLife')
          .addItem('Forests improve our quality of life (Citation)', 'esQualLifeCite')
          .addSeparator()
                 )
  
        .addSubMenu(ui.createMenu('Forests & Climate (General Knowledge)')
          .addItem('What did forests used to look like? ', 'fcOldForests')
          .addItem('What did forests used to look like? (Citation)', 'fcOldForestsCite')
          .addSeparator()
                    
          .addItem('Why do forests matter to climate change? ', 'fcForestsClimChange')
          .addItem('Why do forests matter to climate change? (Citation)', 'fcForestsClimChangeCite')
          .addSeparator()    
                    
          .addItem('How do we fix the climate crisis? ', 'fcFixClimate')
          .addItem('How do we fix the climate crisis? (Citation)', 'fcFixClimateCite')
          .addSeparator()    
                    
          .addItem('What are global policies on forests and climate? ', 'fcGlobalPolicy')
          .addItem('What are global policies on forests and climate? (Citation)', 'fcGlobalPolicyCite')
          .addSeparator()
                           
                                        
                    
                    
                    
                 )
 
  .addToUi();
}



//other functions you shouldn't need to touch



function appAbout() {
  DocumentApp.getUi().alert('This app is a collection of mostly text-insert functions to help you with developing materials. The text is inserted at your cursor. There is also an acreage calculator. ');
}



 function insertTextAtCursor(myArr){     
      var cursor = DocumentApp.getActiveDocument().getCursor(); 
   
      if (cursor) {
        var element = cursor.insertText(myArr.join('\n\n'));
        if (!element) {
          DocumentApp.getUi().alert('Cannot insert text here, sorry!');
        }
      } else {
        DocumentApp.getUi().alert('Cannot find a cursor, sorry! You can\'t have text highlighted while trying to insert.');
      }        
    }

function numberWithCommas(x){
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calculateAcres(){
  var ui = DocumentApp.getUi();
  var response = ui.prompt('How many tons of pellets do you want to convert to acres?', '(If you put in American tons, click yes. If you put in metric tonnes, click no)', ui.ButtonSet.YES_NO);

  // Process the user's response.
  if (response.getSelectedButton() == ui.Button.YES) {
       var responseString = numberWithCommas(Number(response.getResponseText())) + ' tons of pellets is equal to ' + 
                            numberWithCommas(Math.round(Number(response.getResponseText())*0.024)) + ' acres per year, or ' + 
                            numberWithCommas(Math.round(Number(response.getResponseText())*0.024/365)) + ' acres per day. ';
       ui.alert(responseString);
       insertTextAtCursor([responseString]);

 //start if NO
     } else if (response.getSelectedButton() == ui.Button.NO) {
       
       var responseString = numberWithCommas(Number(response.getResponseText())) + ' tons of pellets is equal to ' + 
                            numberWithCommas(Math.round(Number(response.getResponseText())*0.0265)) + ' acres per year, or ' + 
                            numberWithCommas(Math.round(Number(response.getResponseText())*0.0265/365)) + ' acres per day. ';           
       ui.alert(responseString);
       insertTextAtCursor([responseString]);
       
       
       //closed out of dialogue completely
     } else {
       
   //if you need to tell the user they're dumb.
       
       
    }
  
}

    
//code from a previous experiment
    
function addTimelineTable(){

    
// Create a two-dimensional array containing the cell contents.
var cells = [
  ['Task', 'People', 'Due Date']
];
    //var element = cursor.appendTable(cells);
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var cursor = doc.getCursor();
  body.insertTable(cursor.getElement().getParent().getChildIndex(element) + 1, cells);
  
}
