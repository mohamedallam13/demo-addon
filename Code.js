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
  var scriptProperties = PropertiesService.getScriptProperties();
  var apiKey = scriptProperties.getProperty('OPENAI_API_KEY');
  if (!apiKey) {
    throw new Error('OpenAI API key not found in script properties');
  }

  var url = 'https://api.openai.com/v1/chat/completions';
  var payload = {
    "model": "gpt-3.5-turbo",  // or the appropriate model for your use case
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": userInput}
    ],
    "max_tokens": 150,
    "n": 1,
    "stop": null,
    "temperature": 0.7
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
  var botResponse = data.choices[0].message.content.trim();

  // Save conversation history
  saveConversationHistory(userInput, botResponse);

  return botResponse;
}

function saveConversationHistory(userInput, botResponse) {
  var scriptProperties = PropertiesService.getScriptProperties();
  var conversationHistory = scriptProperties.getProperty('conversationHistory');
  var history = conversationHistory ? JSON.parse(conversationHistory) : [];

  history.push({ user: userInput, bot: botResponse });

  scriptProperties.setProperty('conversationHistory', JSON.stringify(history));
}

function getConversationHistory() {
  var scriptProperties = PropertiesService.getScriptProperties();
  var conversationHistory = scriptProperties.getProperty('conversationHistory');
  return conversationHistory ? JSON.parse(conversationHistory) : [];
}
