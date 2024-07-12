function onOpen() {
  DocumentApp.getUi().createAddonMenu()
      .addItem('Open Chatbot', 'showSidebar')
      .addToUi();
}

function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Sidebar')
      .setTitle('Chatbot');
  DocumentApp.getUi().showSidebar(html);
}

function getOpenAIResponse(userInput) {
  var apiKey = 'YOUR_OPENAI_API_KEY';
  var url = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  var payload = {
    "prompt": userInput,
    "max_tokens": 100
  };

  var options = {
    'method': 'post',
    'contentType': 'application/json',
    'headers': {
      'Authorization': 'Bearer ' + apiKey
    },
    'payload': JSON.stringify(payload)
  };

  var response = UrlFetchApp.fetch(url, options);
  var json = response.getContentText();
  var data = JSON.parse(json);
  return data.choices[0].text.trim();
}
