![image](https://user-images.githubusercontent.com/38820651/111684684-e3e1f480-888b-11eb-9fca-83ef95c80894.png)

# AWS Quiz 🧩

## About 📝
This is a quiz app created to assist with studying for the AWS Certified Cloud Practicioner exam. <br/>
The 90-minute exam consists of 65 multiple-choice/multiple-response questions. 
See [here](https://aws.amazon.com/certification/certified-cloud-practitioner/) for more details.

## Stack 📚
This app was built using React.js with TypeScript.

## Current Features 🎯
- [x] Click answers and get instant feedback on whether the answer is right or wrong. 
- [x] Track your score over a ten question quiz (and get a final passing mark if you are higher than the required 70% mark). 
- [x] Get feedback providing details of why an answer is correct. 
- [x] See a summary of results at the end of the quiz. 

## Future Features 🛠
- [ ] Add in additional questions for the AWS CCP exam. 
- [ ] Add in support for more AWS quizzes/Azure fundamental cloud quizzes (AZ-900).
- [ ] Add in options for timed quizzes to emulate the exam. 

## Deployment ⚡️
The app has been deployed using a CI/CD pipeline with AWS. 
This has utilised AWS CodePipeline (CodeBuild and CodeDeploy) to get the details from this repository and move them to an S3 bucket for deployment. 
This github repository is monitored for changes, and the Pipeline will re-run the build and deploy stages if this occurs to ensure that the app is up-to-date.

The app can be accessed [here](http://aws-cloud-practicioner-quiz-app.s3-website-us-east-1.amazonaws.com/).⭐️
