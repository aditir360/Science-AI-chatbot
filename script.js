// Using Wizard Orpheus JS library to make this AI game

var myGame = new WizardOrpheus('', `You're an expert in the field of english and writing. Your job is to help students with learning english/writing and clarify any questions they might have.`)

myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
})

// Using the button and text box to get user input
document.getElementById('submit-button').addEventListener('click', function() {
    
  let userInput = document.getElementById('user-input').value;
    myGame.message(userInput);

    document.getElementById('conversation').innerHTML += '<p>' + userInput + '</p>';

    document.getElementById('user-input').value = '';
});

myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'
})


myGame.variable('score', 'Current score. Changes (positive and negatively) as the user does things.', 0)

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {

document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>' + '<hr></hr>'

document.getElementById('score').innerHTML = data.currentVariables.score.value
})
