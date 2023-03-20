
# JqueryInputPlaceholderTypewriter
This jquery plugin amis to create typewriting effect to the placeholders to bring more attention to the input. It mainly accepts three input speed, delay and keywords. It uses the keywords and display characters with a typewriting effect using the speed and delay parameters

## Demo
You Can see an Online Demo of this project here
[Demo Homepage](http://samuelj90.github.io/JqueryInputPlaceholderTypewriter/ "Demo Homepage")

## Usage
Include the jquery plugin file along with jquery to the html file 
Place the below configuration
```javascript
$('#demo').jqueryInputTypeWriting({
	speed: 100,
	delay: 2000,
	keywords: ['Sachin Tendulkar','Samuel James Mathew','Barack Obama','Apple News','India','Iam Feeling Happy'],
});

