# motaive

## Inspiration
As remote work becomes more prevalent in today's society, more people seem to be getting burnt out quicker than ever. There is a new need for at-home lifestyle tracking to improve the confidence of those working remotely.

## What it does
Motaive is a web app that is meant to help increase the confidence in the lifestyle of people working from home using Cohere’s API. The app uses the API to give the user suggestions based on a preliminary questionnaire and input given through a chat bot. 
There are 5 main features of motaive:
- a questionnaire given to the user that takes in the information necessary for the dynamic ML model
- a Cohere API chat bot that will converse with the user to gain information to later give suggestions
- a user mood indicator for the user to be conscious of how they are feeling
- an overall company mood indicator for companies to anonymously receive information on the well-being of their employees
- a summary of suggestions for the user to look back on previous suggestions made by the AI

## How we built it
We built the web app using React JS and CSS. The chatbot was built using the Cohere API with prompt engineering to craft more natural responses to simulate a normal conversation. We used the API to also create a wider variety of questions to ask a user based on their areas of need.

## Challenges we ran into
The solution to how to make the lives of people who work remotely healthier was not explicitly clear at first. We had to explore different technologies and see how each technology could benefit people working from home.

Another challenge we ran into was how we wanted the user to track the progress of their improvements made over time. We decided to allow them to see previous suggestions made so that they can not only see the difference in suggestions over time but also take inspiration from those suggestions if today's suggestions perhaps are not applicable.

We were also debating on how we wanted to gather user data: if from a singular preliminary questionnaire or if we should ask the questionnaire monthly as we should expect change from the user over time. We decided to integrate a monthly questionnaire that will update the existing user data to provide more accurate suggestions.

## Accomplishments that we're proud of
We are proud of our ability to connect a back-end AI API with front-end web development for the first time in our careers.

## What we learned
The most important thing we learned was how to build an API that uses machine learning. 

## What's next for motaive
The next steps for motaive are mobile app integration for better accessibility and graph analytics to track user data over time with ML integration to predict user data.
