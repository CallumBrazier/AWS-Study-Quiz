export const CDAQuestions = [
  {
    question:
      "What is used in S3 to enable client web applications that are loaded in one domain to interact with resources of the different domain? Choose the correct answer from the options below",
    answers: [
      "CORS Configuration",
      "Public Object Permissions",
      "Public ACL Permissions",
      "None of the above",
    ],
    correct_answer: "CORS Configuration",
    incorrect_answers: [
      "Public Object Permissions",
      "Public ACL Permissions",
      "None of the above",
    ],
    note: "Cross-origin resource sharing (CORS) configuration is a way to interact with resources in a different domain for the client web applications loaded in one domain. With CORS, you can build client-side web applications with Amazon S3 and also allow cross-origin to have access to the S3 resources selectively.",
  },
  {
    question: `Which of the descriptions below best describes what the following bucket policy does? {  
       “Version”:”2012-10-17″,
       “Id”:”Statement1”, 
       “Statement”:[  
          {  
             “Sid”:” Statement2″,
             “Effect”:”Allow”,
             “Principal”:”*”,
             “Action”:[  
                “s3:GetObject”,
                “s3:PutObject”
             ],
             “Resource”:”arn:aws:s3:::mybucket/*”,
             “Condition”:{  
                “StringLike”:{  
                   “aws:Referer”:[  
                      “http://www.example.com/*”,
                      “http://www.demo.com/*”
                   ]
                }
             }
          }
       ]
    }`,
    answers: [
      "It allows read or write actions on the bucket ‘mybucket’",
      "It allows read access to the bucket ‘mybucket’ but only if it is accessed from example.com or demo.com",
      "It allows unlimited access to the bucket ‘mybucket’",
      "It allows read or write access to the bucket ‘mybucket’ but only if it is accessed from example.com or demo.com",
    ],
    correct_answer:
      "It allows read or write access to the bucket ‘mybucket’ but only if it is accessed from example.com or demo.com",
    incorrect_answers: [
      "It allows read or write actions on the bucket ‘mybucket’",
      "It allows read access to the bucket ‘mybucket’ but only if it is accessed from example.com or demo.com",
      "It allows unlimited access to the bucket ‘mybucket’",
    ],
    note: "The PutObject allows one to put objects in an S3 bucket.",
  },
  {
    question: "Is the default visibility timeout for an SQS queue 1 minute?",
    answers: ["True", "False"],
    correct_answer: "False",
    incorrect_answers: ["True"],
    note: "The visibility timeout of each queue is 30 seconds by default. It is possible to change this setting for all the queues. Typically, the visibility timeout is set to the average time it takes in processing and deleting a message from the queue. While receiving messages, special visibility timeout can be set for the returned messages without making any change in the overall timeout of the queue.",
  },
  {
    question:
      "When a failure occurs during stack creation in Cloudformation, does a rollback occur?",
    answers: ["True", "False"],
    correct_answer: "True",
    incorrect_answers: ["False"],
    note: "By default, the “automatic rollback on error” feature is enabled. It causes AWS CloudFormation to be created successfully for a stack until the point of error is deleted. This is useful when the default limit for Elastic IP addresses is exceeded accidentally, or you can’t access an EC2 AMI you want to run. This feature makes you depend on the fact that stacks may either be fully created or not at all. It simplifies the layered solutions system administration built on the top of the AWS CloudFormation.",
  },
  {
    question:
      "An administrator is getting an error while trying to create a new bucket in S3? You feel that bucket limit has been crossed. What is the bucket limit per account in AWS? Choose the correct answer from the options below:",
    answers: ["100", "50", "1000", "150"],
    correct_answer: "100",
    incorrect_answers: ["50", "1000", "150"],
    note: "By default, you can create up to 100 buckets in each of your AWS accounts. If you need additional buckets, you can increase your account bucket limit to a maximum of 1,000 buckets by submitting a service limit increase. There is no difference in performance whether you use many buckets or just a few.",
  },
  {
    question:
      "Which of the below functions is used in Cloudformation to retrieve an object from a set of objects? Choose an answer from the options below:",
    answers: ["Fn::GetAtt", "Fn::Combine", "Fn::Join", "Fn::Select"],
    correct_answer: "Fn::Select",
    incorrect_answers: ["Fn::GetAtt", "Fn::Combine", "Fn::Join"],
    note: "The intrinsic function Fn::Select returns a single object from a list of objects by index.",
  },
  {
    question:
      "Which of the below functions is used in Cloudformation to append a set of values into a single value? Choose an answer from the options below:",
    answers: ["Fn::GetAtt", "Fn::Combine", "Fn::Join", "Fn::Select"],
    correct_answer: "Fn::Join",
    incorrect_answers: ["Fn::GetAtt", "Fn::Combine", "Fn::Select"],
    note: "The intrinsic function Fn::Join appends a set of values into a single value, separated by the specified delimiter. If a delimiter is the empty string, the set of values are concatenated with no delimiter.",
  },
  {
    question:
      "What is the max size of an item that corresponds to a single write capacity unit? (While creating an index or table in Amazon DynamoDB, it is required to specify the capacity requirements for the read and write activity). Choose an answer from the options below:",
    answers: ["1 KB", "4 KB", "2 KB", "8 KB"],
    correct_answer: "1 KB",
    incorrect_answers: ["4 KB", "2 KB", "8 KB"],
    note: "One write request unit represents one write for an item up to 1 KB in size. If you need to write an item that is larger than 1 KB, DynamoDB needs to consume additional write request units. Transactional write requests require 2 write request units to perform one write for items up to 1 KB. The total number of write request units required depends on the item size. For example, if your item size is 2 KB, you require 2 write request units to sustain one write request or 4 write request units for a transactional write request.",
  },
  {
    question:
      "What can be used in DynamoDB as a part of the Query API call for the filtration of results based on the primary keys’ values? Choose an answer from the options below:",
    answers: ["Expressions", "Conditions", "Query API", "Scan API"],
    correct_answer: "Expressions",
    incorrect_answers: ["Conditions", "Query API", "Scan API"],
    note: "You can specify an expression as part of the Query API call to filter based on values of primary keys on a table using the KeyConditionExpression parameter.",
  },
  {
    question:
      "Can a global secondary index be created at the same time as the table creation?",
    answers: ["True", "False"],
    correct_answer: "True",
    incorrect_answers: ["False"],
    note: "Global secondary index — An index with a partition key and a sort key that can be different from those on the base table. A global secondary index is considered 'global' because queries on the index can span all of the data in the base table, across all partitions. A global secondary index is stored in its own partition space away from the base table and scales separately from the base table.",
  },
  {
    question:
      "Can a Global Secondary Index have a different partition key and sort key from those of its base table?",
    answers: ["True", "False"],
    correct_answer: "True",
    incorrect_answers: ["False"],
    note: "GSI can also use the same partition key as the base table. Even in the AWS documentation, they say that GSI can use a different partition key and sort key. However, anywhere in the document, they are not saying that it has to be different.",
  },
  {
    question: "What in AWS can be used to restrict access to SWF?",
    answers: ["ACL", "SWF Roles", "IAM", "None of the above"],
    correct_answer: "IAM",
    incorrect_answers: ["ACL", "SWF Roles", "None of the above"],
    note: "",
  },
  {
    question:
      "An IT admin has enabled long polling in their SQS queue. What must be done for long polling to be enabled in SQS? Choose the correct answer from the options below:",
    answers: [
      "Create a dead letter queue",
      "Set the message size to 256KB",
      "Set the ReceiveMessageWaitTimeSeconds property of the queue to 0 seconds",
      "Set the ReceiveMessageWaitTimeSeconds property of the queue to 20 seconds",
    ],
    correct_answer:
      "Set the ReceiveMessageWaitTimeSeconds property of the queue to 20 seconds",
    incorrect_answers: [
      "Create a dead letter queue",
      "Set the message size to 256KB",
      "Set the ReceiveMessageWaitTimeSeconds property of the queue to 0 seconds",
    ],
    note: "Amazon SQS long polling is a method of retrieval of messages from SQS queues. It returns a response only when a message arrives in the message queue instead of short polling where the response returns immediately even when the message is empty. As the messages are available, the retrieval of messages from Amazon SQS becomes inexpensive due to long polling. It may also reduce the cost of using SQS as it can reduce the empty receipts.",
  },
  {
    question: `A web application hosted in Elastic Beanstalk has a configuration file named .ebextensions/debugging.config which has the following: 
          content: option_settings: 
          aws:elasticbeanstalk:xray: 
          XRayEnabled: true 
       For its database tier, it uses RDS with Multi-AZ deployments configuration and Read Replicas. 
       There is a new requirement to record calls that your application makes to RDS and other internal or external HTTP web APIs. 
       The tracing information should also include the actual SQL database queries sent by the application, which can be searched using the filter expressions in the X-Ray Console. 
       Which of the following should you do to satisfy the above task?`,
    answers: [
      "Add metadata in the segment document.",
      "Add annotations in the segment document.",
      "Add metadata in the subsegment section of the segment document.",
      "Add annotations in the subsegment section of the segment document.",
    ],
    correct_answer:
      "Add annotations in the subsegment section of the segment document.",
    incorrect_answers: [
      "Add metadata in the segment document.",
      "Add annotations in the segment document.",
      "Add metadata in the subsegment section of the segment document.",
    ],
    note: "Even with sampling, a complex application generates a lot of data. The AWS X-Ray console provides an easy-to-navigate view of the service graph. It shows health and performance information that helps you identify issues and opportunities for optimization in your application. For advanced tracing, you can drill down to traces for individual requests, or use filter expressions to find traces related to specific paths or users. When you instrument your application, the X-Ray SDK records information about incoming and outgoing requests, the AWS resources used, and the application itself. You can add other information to the segment document as annotations and metadata. Annotations are simple key-value pairs that are indexed for use with filter expressions. Use annotations to record data that you want to use to group traces in the console, or when calling the GetTraceSummaries API. X-Ray indexes up to 50 annotations per trace. Metadata are key-value pairs with values of any type, including objects and lists, but that are not indexed. Use metadata to record data you want to store in the trace but don’t need to use for searching traces. You can view annotations and metadata in the segment or subsegment details in the X-Ray console. A trace segment is a JSON representation of a request that your application serves. A trace segment records information about the original request, information about the work that your application does locally, and subsegments with information about downstream calls that your application makes to AWS resources, HTTP APIs, and SQL databases. Hence, adding annotations in the subsegment section of the segment document is the correct answer. Adding annotations in the segment document is incorrect because although the use of annotations is correct, you have to add this in the subsegment section of the segment document since you want to trace the downstream call to RDS and not the actual request to your application. Adding metadata in the segment document is incorrect because metadata is primarily used to record custom data that you want to store in the trace but not for searching traces since this can’t be picked up by filter expressions in the X-Ray Console. You have to use annotations instead. In addition, you have to add this in the subsegment section of the segment document since you want to trace the downstream call to RDS and not the actual request to your application. Adding metadata in the subsegment section of the segment document is incorrect because, just as mentioned above, metadata is just used to record custom data that you want to store in the trace but not for searching traces.",
  },
  {
    question:
      "A developer wants to expose a legacy web service that uses an XML-based Simple Object Access Protocol (SOAP) interface through API Gateway. However, there is a compatibility issue since most modern applications communicate data in JSON format. Which is the most cost-effective method that will overcome this issue?",
    answers: [
      "Use API Gateway to create a WebSocket API. Transform the incoming JSON into XML using mapping templates. Forward the request into the SOAP interface by using a Lambda function and parse the response (XML) into JSON before sending back to API Gateway.",
      "Use API Gateway to create a RESTful API. Transform the incoming JSON into XML for the SOAP interface through an Application Load Balancer and vice versa. Put the legacy web service behind the ALB.",
      "Use API Gateway to create a RESTful API. Send the incoming JSON to an HTTP server hosted on an EC2 instance and have it transform the data into XML and vice versa before sending it to the legacy application.",
      "Use API Gateway to create a RESTful API. Transform the incoming JSON into XML using mapping templates. Forward the request into the SOAP interface by using a Lambda function and parse the response (XML) into JSON before sending back to API Gateway.",
    ],
    correct_answer:
      "Use API Gateway to create a RESTful API. Transform the incoming JSON into XML using mapping templates. Forward the request into the SOAP interface by using a Lambda function and parse the response (XML) into JSON before sending back to API Gateway.",
    incorrect_answers: [
      "Use API Gateway to create a WebSocket API. Transform the incoming JSON into XML using mapping templates. Forward the request into the SOAP interface by using a Lambda function and parse the response (XML) into JSON before sending back to API Gateway.",
      "Use API Gateway to create a RESTful API. Transform the incoming JSON into XML for the SOAP interface through an Application Load Balancer and vice versa. Put the legacy web service behind the ALB.",
      "Use API Gateway to create a RESTful API. Send the incoming JSON to an HTTP server hosted on an EC2 instance and have it transform the data into XML and vice versa before sending it to the legacy application.",
    ],
    note: "Use API Gateway to create a RESTful API. Transform the incoming JSON into XML using mapping templates. Forward the request into the SOAP interface by using a Lambda function and parse the response (XML) into JSON before sending back to API Gateway. Hence, the correct answer is: Use API Gateway to create a RESTful API. Transform the incoming JSON into XML using mapping templates. Forward the request into the SOAP interface by using a Lambda function and parse the response (XML) into JSON before sending back to API Gateway. The option that says: Use API Gateway to create a WebSocket API. Transform the incoming JSON into XML using mapping templates. Forward the request into the SOAP interface by using a Lambda function and parse the response (XML) into JSON before sending back to API Gateway is incorrect. The WebSocket protocol is mainly used for applications that require bidirectional persistent connection such as push notifications and chat messaging applications. For this scenario, using a REST-based approach is the more appropriate solution. The option that says: Use API Gateway to create a RESTful API. Transform the incoming JSON into XML for the SOAP interface through an Application Load Balancer and vice versa. Put the legacy web service behind the ALB is incorrect because ALB is not capable of transforming data. The option that says: Use API Gateway to create a RESTful API. Send the incoming JSON to an HTTP server hosted on an EC2 instance and have it transform the data into XML and vice versa before sending it to the legacy application is incorrect. Although this could work, this means that you’ll have to provision and run an EC2 instance 24/7, which is more expensive than just using a Lambda Function.",
  },
  {
    question:
      "A Developer is configuring Amazon EC2 Auto Scaling group to scale dynamically. Which metric below is NOT part of Target Tracking Scaling Policy?",
    answers: [
      "ASGAverageCPUUtilization",
      "ApproximateNumberOfMessagesVisible",
      "ASGAverageNetworkOut",
      "ALBRequestCountPerTarget",
    ],
    correct_answer: "ApproximateNumberOfMessagesVisible",
    incorrect_answers: [
      "ASGAverageCPUUtilization",
      "ASGAverageNetworkOut",
      "ALBRequestCountPerTarget",
    ],
    note: "ApproximateNumberOfMessagesVisible - This is a CloudWatch Amazon SQS queue metric. The number of messages in a queue might not change proportionally to the size of the Auto Scaling group that processes messages from the queue. Hence, this metric does not work for target tracking. Incorrect options: With target tracking scaling policies, you select a scaling metric and set a target value. Amazon EC2 Auto Scaling creates and manages the CloudWatch alarms that trigger the scaling policy and calculates the scaling adjustment based on the metric and the target value. It is important to note that a target tracking scaling policy assumes that it should scale out your Auto Scaling group when the specified metric is above the target value. You cannot use a target tracking scaling policy to scale out your Auto Scaling group when the specified metric is below the target value. ASGAverageCPUUtilization - This is a predefined metric for target tracking scaling policy. This represents the Average CPU utilization of the Auto Scaling group. ASGAverageNetworkOut - This is a predefined metric for target tracking scaling policy. This represents the Average number of bytes sent out on all network interfaces by the Auto Scaling group. ALBRequestCountPerTarget - This is a predefined metric for target tracking scaling policy. This represents the Number of requests completed per target in an Application Load Balancer target group.",
  },
  {
    question:
      "You are a developer handling a deployment service that automates application deployments to Amazon EC2 instances. Most of the deployments consist of code, but sometimes web and configuration files. One of your deployments failed and was rolled back by AWS CodeDeploy to the last known good application revision. During rollback which of the following instances did AWS CodeDeploy deploy first to?",
    answers: [
      "To the non-failed instances",
      "To the new instances",
      "To the failed instancs",
      "You cannot rollback a CodeDeploy deployment",
    ],
    correct_answer: "To the failed instancs",
    incorrect_answers: [
      "To the non-failed instances",
      "To the new instances",
      "You cannot rollback a CodeDeploy deployment",
    ],
    note: "Correct option: AWS CodeDeploy is a fully managed deployment service that automates software deployments to a variety of compute services such as Amazon EC2, AWS Fargate, AWS Lambda, and your on-premises servers. AWS CodeDeploy makes it easier for you to rapidly release new features, helps you avoid downtime during application deployment, and handles the complexity of updating your applications. To the failed instances: AWS CodeDeploy rolls back deployments by redeploying a previously deployed revision of an application as a new deployment on the failed instances. Incorrect options: To the non-failed instances - Nothing happens to the non-failed instances if any. To new instances - Nothing is deployed to the new instances. You cannot rollback a CodeDeploy deployment - You can rollback a CodeDeploy deployment. This option is incorrect.",
  },
  {
    question:
      "You are planning to build a fleet of EBS-optimized EC2 instances to handle the load of your new application. Due to security compliance, your organization wants any secret strings used in the application to be encrypted to prevent exposing values as clear text. The solution requires that decryption events be audited and API calls to be simple. How can this be achieved? (select two) A) Audit using CloudTrail, B) Store the secret as SecureString in SSM Parameter Store, C) Store the secret as PlainText in SSM Parameter Store, D) Audit using SSM Audit Trail, E) Encrypt first with KMS then store in SSM Parameter store",
    answers: ["AB", "CD", "BE", "AD"],
    correct_answer: "AB",
    incorrect_answers: ["CD", "BE", "AD"],
    note: "Store the secret as SecureString in SSM Parameter Store - With AWS Systems Manager Parameter Store, you can create SecureString parameters, which are parameters that have a plaintext parameter name and an encrypted parameter value. Parameter Store uses AWS KMS to encrypt and decrypt the parameter values of Secure String parameters. Also, if you are using customer-managed CMKs, you can use IAM policies and key policies to manage to encrypt and decrypt permissions. To retrieve the decrypted value you only need to do one API call. Audit using CloudTrail - AWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account. With CloudTrail, you can log, continuously monitor, and retain account activity related to actions across your AWS infrastructure. CloudTrail provides an event history of your AWS account activity, including actions taken through the AWS Management Console, AWS SDKs, command-line tools, and other AWS services. CloudTrail will allow you to see all API calls made to SSM and KMS. Incorrect options: Encrypt first with KMS then store in SSM Parameter store - This could work but will require two API calls to get the decrypted value instead of one. So this is not the right option. Store the secret as PlainText in SSM Parameter Store - Plaintext parameters are not secure and shouldn't be used to store secrets. Audit using SSM Audit Trail - This is a made-up option and has been added as a distractor.",
  },
  {
    question:
      "The development team at an e-commerce company wants to run a serverless data store service on two docker containers using shared memory. Which of the following ECS configurations can be used to facilitate this use-case?",
    answers: [
      "Put the two containers into two separate task definitions using a Fargate Launch Type",
      "Put the two containers into a single task definition using a Fargate Launch Type",
      "Put the two containers into two separate task defintions using an EC2 Launch Type",
      "Put the two containers into a single task definition using an EC2 Launch Type.",
    ],
    correct_answer:
      "Put the two containers into a single task definition using a Fargate Launch Type",
    incorrect_answers: [
      "Put the two containers into two separate task definitions using a Fargate Launch Type",
      "Put the two containers into two separate task defintions using an EC2 Launch Type",
      "Put the two containers into a single task definition using an EC2 Launch Type",
    ],
    note: "Put the two containers into a single task definition using a Fargate Launch Type - Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast, container management service that makes it easy to run, stop, and manage Docker containers on a cluster. You can host your cluster on a serverless infrastructure that is managed by Amazon ECS by launching your services or tasks using the Fargate launch type. For more control over your infrastructure, you can host your tasks on a cluster of Amazon Elastic Compute Cloud (Amazon EC2) instances that you manage by using the EC2 launch type. As the development team is looking for a serverless data store service, therefore the two containers should be launched into a single task definition using a Fargate Launch Type. Using a single task definition allows the two containers to share memory. Please see these use-cases for Fargate Launch type when you should put multiple containers into the same task definition: 1) Containers share a common lifecycle (that is, they should be launched and terminated together); 2) Containers are required to be run on the same underlying host (that is, one container references the other on a localhost port); 3) You want your container to share resources; or 4) your containers share data volumes. Otherwise, you should define your containers in separate tasks definitions so that you can scale, provision, and deprovision them separately. Incorrect options: Put the two containers into two separate task definitions using a Fargate Launch Type - This option contradicts the details provided in the explanation above, so this option is ruled out. Put the two containers into two separate task definitions using an EC2 Launch Type AND Put the two containers into a single task definition using an EC2 Launch Type - As the development team is looking for a serverless data store service, therefore EC2 Launch Type is ruled out. So both these options are incorrect.",
  },
  {
    question:
      "You are working with a t2.small instance bastion host that has the AWS CLI installed to help manage all the AWS services installed on it. You would like to know the security group and the instance id of the current instance. Which of the following will help you fetch the needed information?",
    answers: [
      "Create an IAM role and attach it to your EC2 instance that helps you perform a 'describe' API call",
      "Query the user data at http://254.169.254.169/latest/meta-data",
      "Query the user data at http://169.254.169.254/latest/user-data",
      "Query the metadata at http://169.254.169.254/latest/meta-data",
    ],
    correct_answer:
      "Query the metadata at http://169.254.169.254/latest/meta-data",
    incorrect_answers: [
      "Create an IAM role and attach it to your EC2 instance that helps you perform a 'describe' API call",
      "Query the user data at http://254.169.254.169/latest/meta-data",
      "Query the user data at http://169.254.169.254/latest/user-data",
    ],
    note: "Query the metadata at http://169.254.169.254/latest/meta-data - Because your instance metadata is available from your running instance, you do not need to use the Amazon EC2 console or the AWS CLI. This can be helpful when you're writing scripts to run from your instance. For example, you can access the local IP address of your instance from instance metadata to manage a connection to an external application. To view all categories of instance metadata from within a running instance, use the following URI - http://169.254.169.254/latest/meta-data/. The IP address 169.254.169.254 is a link-local address and is valid only from the instance. All instance metadata is returned as text (HTTP content type text/plain). Incorrect options: Create an IAM role and attach it to your EC2 instance that helps you perform a 'describe' API call - The AWS CLI has a describe-instances API call needs instance ID as an input. So, this will not work for the current use case wherein we do not know the instance ID. Query the user data at http://169.254.169.254/latest/user-data - This address retrieves the user data that you specified when launching your instance. Query the user data at http://254.169.254.169/latest/meta-data - The IP address specified is wrong.",
  },
  {
    question:
      "A startup manages its Cloud resources with Elastic Beanstalk. The environment consists of few Amazon EC2 instances, an Auto Scaling Group (ASG), and an Elastic Load Balancer. Even after the Load Balancer marked an EC2 instance as unhealthy, the ASG has not replaced it with a healthy instance. As a Developer, suggest the necessary configurations to automate the replacement of unhealthy instance.",
    answers: [
      "Auto Scaling group doesn't automatically replace the unhealthy instances marked by the load balancer. They have to be manually replaced from AWS console.",
      "The health check type of your instance's Auto Scaling group must be changed from EC2 to ELB by using a configuration file.",
      "Health check parameters were configured for checking the instance health alone. The instance failed because of application failure which was not configured as a parameter for health check status.",
      "The ping path field of the Load Balancer is configured incorrectly.",
    ],
    correct_answer:
      "The health check type of your instance's Auto Scaling group must be changed from EC2 to ELB by using a configuration file.",
    incorrect_answers: [
      "Auto Scaling group doesn't automatically replace the unhealthy instances marked by the load balancer. They have to be manually replaced from AWS console.",
      "Health check parameters were configured for checking the instance health alone. The instance failed because of application failure which was not configured as a parameter for health check status.",
      "The ping path field of the Load Balancer is configured incorrectly.",
    ],
    note: `The health check type of your instance's Auto Scaling group, must be changed from EC2 to ELB by using a configuration file - By default, the health check configuration of your Auto Scaling group is set as an EC2 type that performs a status check of EC2 instances. To automate the replacement of unhealthy EC2 instances, you must change the health check type of your instance's Auto Scaling group from EC2 to ELB by using a configuration file. 
    Incorrect options:
    Health check parameters were configured for checking the instance health alone. The instance failed because of application failure which was not configured as a parameter for health check status - This is an incorrect statement. Status checks, by definition, cover only an EC2 instance's health, and not the health of your application, server, or any Docker containers running on the instance. 
    Auto Scaling group doesn't automatically replace the unhealthy instances marked by the load balancer. They have to be manually replaced from AWS Console - Incorrect statement. As discussed above, if the health check type of ASG is changed from EC2 to ELB, Auto Scaling will be able to replace the unhealthy instance. 
    The ping path field of the Load Balancer is configured incorrectly - Ping path is a health check configuration field of Elastic Load Balancer. If the ping path is configured wrong, ELB will not be able to reach the instance and hence will consider the instance unhealthy. However, this would then apply to all instances, not just one instance. So it does not address the issue given in the use-case.`,
  },
  {
    question:
      "A junior developer working on ECS instances terminated a container instance in Amazon Elastic Container Service (Amazon ECS) as per instructions from the team lead. But the container instance continues to appear as a resource in the ECS cluster. As a Developer Associate, which of the following solutions would you recommend to fix this behavior?",
    answers: [
      "The container instance has been terminated with AWS CLI, whereas, for ECS instances",
      "You terminated the container instance while it was in STOPPED state, that lead to this synchronization issues",
      "You terminated the container instance while it was in RUNNING state, that lead to this synchronization issues",
      "A custom software on the container instance could have failed and resulted in the container hanging in an unhealthy state till restarted again",
    ],
    correct_answer:
      "You terminated the container instance while it was in STOPPED state, that lead to this synchronization issues",
    incorrect_answers: [
      "The container instance has been terminated with AWS CLI, whereas, for ECS instances",
      "You terminated the container instance while it was in RUNNING state, that lead to this synchronization issues",
      "A custom software on the container instance could have failed and resulted in the container hanging in an unhealthy state till restarted again",
    ],
    note: `You terminated the container instance while it was in STOPPED state, that lead to this synchronization issues - If you terminate a container instance while it is in the STOPPED state, that container instance isn't automatically removed from the cluster. You will need to deregister your container instance in the STOPPED state by using the Amazon ECS console or AWS Command Line Interface. Once deregistered, the container instance will no longer appear as a resource in your Amazon ECS cluster.
    Incorrect options:
    You terminated the container instance while it was in RUNNING state, that lead to this synchronization issues - This is an incorrect statement. If you terminate a container instance in the RUNNING state, that container instance is automatically removed, or deregistered, from the cluster.
    The container instance has been terminated with AWS CLI, whereas, for ECS instances, Amazon ECS CLI should be used to avoid any synchronization issues - This is incorrect and has been added as a distractor.
    A custom software on the container instance could have failed and resulted in the container hanging in an unhealthy state till restarted again - This is an incorrect statement. It is already mentioned in the question that the developer has terminated the instance.`,
  },
  {
    question:
      "An organization with online transaction processing (OLTP) workloads have successfully moved to DynamoDB after having many issues with traditional database systems. However, a few months into production, DynamoDB tables are consistently recording high latency. As a Developer Associate, which of the following would you suggest to reduce the latency? (Select two) A) Consider using Global tables if your application is accessed by globally distributed users; B) Use eventually consistent reads in place of strongly consistent reads whenever possible; C) Increase the request timeout settings, so the client gets enough time to complete the requests, thereby reducing retries on the system; D) Reduce connection pooling, which keeps the connections alive even when user requests are not present, thereby, blocking the services; or E) Use DynamoDB Accelerator (DAX) for businesses with heavy write-only workloads",
    answers: ["AB", "DE", "BD", "AE"],
    correct_answer: "AB",
    incorrect_answers: ["DE", "BD", "AE"],
    note: `Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale. It's a fully managed, multi-Region, multi-master, durable database with built-in security, backup, and restore and in-memory caching for internet-scale applications.
    Consider using Global tables if your application is accessed by globally distributed users - If you have globally dispersed users, consider using global tables. With global tables, you can specify the AWS Regions where you want the table to be available. This can significantly reduce latency for your users. So, reducing the distance between the client and the DynamoDB endpoint is an important performance fix to be considered.    
    Use eventually consistent reads in place of strongly consistent reads whenever possible - If your application doesn't require strongly consistent reads, consider using eventually consistent reads. Eventually consistent reads are cheaper and are less likely to experience high latency. For more information    
    Incorrect options:    
    Increase the request timeout settings, so the client gets enough time to complete the requests, thereby reducing retries on the system - This statement is incorrect. The right way is to reduce the request timeout settings. This causes the client to abandon high latency requests after the specified time period and then send a second request that usually completes much faster than the first.    
    Reduce connection pooling, which keeps the connections alive even when user requests are not present, thereby, blocking the services - This is not correct. When you're not making requests, consider having the client send dummy traffic to a DynamoDB table. Alternatively, you can reuse client connections or use connection pooling. All of these techniques keep internal caches warm, which helps keep latency low.
    Use DynamoDB Accelerator (DAX) for businesses with heavy write-only workloads - This is not correct. If your traffic is read-heavy, consider using a caching service such as DynamoDB Accelerator (DAX). DAX is a fully managed, highly available, in-memory cache for DynamoDB that delivers up to a 10x performance improvement—from milliseconds to microseconds—even at millions of requests per second.`,
  },
  {
    question:
      "A multi-national enterprise uses AWS Organizations to manage its users across different divisions. Even though CloudTrail is enabled on the member accounts, managers have noticed that access issues to CloudTrail logs across different divisions and AWS Regions is becoming a bottleneck in troubleshooting issues. They have decided to use the organization trail to keep things simple. What are the important points to remember when configuring an organization trail? (Select two) A) By default, CloudTrail tracks only bucket-level actions. To track object-level actions, you need to enable Amazon S3 data events; B) Member accounts will be able to see the organization trail, but cannot modify or delete it; C) There is nothing called Organization Trail. The master account can, however, enable CloudTrail logging, to keep track of all activities across AWS accounts; D) Member accounts do not have access to the organization trail, neither do they have access to the Amazon S3 bucket that logs the files; or E) By default, CloudTrail event log files are not encrypted.",
    answers: ["AB", "CD", "BE", "AC"],
    correct_answer: "AB",
    incorrect_answers: ["CD", "BE", "AC"],
    note: `If you have created an organization in AWS Organizations, you can also create a trail that will log all events for all AWS accounts in that organization. This is referred to as an organization trail.
    By default, CloudTrail tracks only bucket-level actions. To track object-level actions, you need to enable Amazon S3 data events - This is a correct statement. AWS CloudTrail supports Amazon S3 Data Events, apart from bucket Events. You can record all API actions on S3 Objects and receive detailed information such as the AWS account of the caller, IAM user role of the caller, time of the API call, IP address of the API, and other details. All events are delivered to an S3 bucket and CloudWatch Events, allowing you to take programmatic actions on the events.
    Member accounts will be able to see the organization trail, but cannot modify or delete it - Organization trails must be created in the master account, and when specified as applying to an organization, are automatically applied to all member accounts in the organization. Member accounts will be able to see the organization trail, but cannot modify or delete it. By default, member accounts will not have access to the log files for the organization trail in the Amazon S3 bucket.
    Incorrect options:
    There is nothing called Organization Trail. The master account can, however, enable CloudTrail logging, to keep track of all activities across AWS accounts - This statement is incorrect. AWS offers Organization Trail for easy management and monitoring.
    Member accounts do not have access to the organization trail, neither do they have access to the Amazon S3 bucket that logs the files - This statement is only partially correct. Member accounts will be able to see the organization trail, but cannot modify or delete it. By default, member accounts will not have access to the log files for the organization trail in the Amazon S3 bucket.
    By default, CloudTrail event log files are not encrypted - This is an incorrect statement. By default, CloudTrail event log files are encrypted using Amazon S3 server-side encryption (SSE).`,
  },
  {
    question:
      "A company that specializes in cloud communications platform as a service allows software developers to programmatically use their services to send and receive text messages. The initial platform did not have a scalable architecture as all components were hosted on one server and should be redesigned for high availability and scalability. Which of the following options can be used to implement the new architecture? (select two) A) API Gateway + Lambda; B) CloudWatch + CloudFront; C) ALB + ECS; D) SES + S3; or E) EBS + RDS",
    answers: ["AC", "BD", "AE", "CD"],
    correct_answer: "AC",
    incorrect_answers: ["BD", "AE", "CD"],
    note: `ALB + ECS - Amazon Elastic Container Service (ECS) is a highly scalable, high-performance container management service that supports Docker containers and allows you to easily run applications on a managed cluster of Amazon EC2 instances.
    Elastic Load Balancing automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and Lambda functions. It can handle the varying load of your application traffic in a single Availability Zone or across multiple Availability Zones.
    When you use ECS with a load balancer such as ALB deployed across multiple Availability Zones, it helps provide a scalable and highly available REST API.
    API Gateway + Lambda - Amazon API Gateway is a fully managed service that makes it easy for developers to publish, maintain, monitor, and secure APIs at any scale. Using API Gateway, you can create an API that acts as a “front door” for applications to access data, business logic, or functionality from your back-end services, such as EC2 or Lambda functions.
    AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume.
    API Gateway and Lambda help achieve the same purpose integrating some capabilities such as authentication in a serverless fashion, with fully scalable and highly available architectures.
    Incorrect options:
    SES + S3 - The combination of these services only provide email and object storage services.
    CloudWatch + CloudFront - The combination of these services only provide monitoring and fast content delivery network (CDN) services.
    EBS + RDS - The combination of these services only provide elastic block storage and database services.`,
  },
  {
    question:
      "A security company is requiring all developers to perform server-side encryption with customer-provided encryption keys when performing operations in AWS S3. Developers should write software with C# using the AWS SDK and implement the requirement in the PUT, GET, Head, and Copy operations. Which of the following encryption methods meets this requirement?",
    answers: ["Client-Side Encryption", "SSE-C", "SSE-S3", "SSE-KMS"],
    correct_answer: "SSE-C",
    incorrect_answers: ["Client-Side Encryption", "SSE-S3", "SSE-KMS"],
    note: `SSE-C - You have the following options for protecting data at rest in Amazon S3:
    Server-Side Encryption – Request Amazon S3 to encrypt your object before saving it on disks in its data centers and then decrypt it when you download the objects.    
    Client-Side Encryption – Encrypt data client-side and upload the encrypted data to Amazon S3. In this case, you manage the encryption process, the encryption keys, and related tools.    
    For the given use-case, the company wants to manage the encryption keys via its custom application and let S3 manage the encryption, therefore you must use Server-Side Encryption with Customer-Provided Keys (SSE-C). 
    Using server-side encryption with customer-provided encryption keys (SSE-C) allows you to set your encryption keys. With the encryption key you provide as part of your request, Amazon S3 manages both the encryption, as it writes to disks, and decryption, when you access your objects.
    Incorrect options:
    SSE-KMS - Server-Side Encryption with Customer Master Keys (CMKs) stored in AWS Key Management Service (SSE-KMS) is similar to SSE-S3. SSE-KMS provides you with an audit trail that shows when your CMK was used and by whom. Additionally, you can create and manage customer-managed CMKs or use AWS managed CMKs that are unique to you, your service, and your Region.
    Client-Side Encryption - You can encrypt the data client-side and upload the encrypted data to Amazon S3. In this case, you manage the encryption process, the encryption keys, and related tools.
    SSE-S3 - When you use Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3), each object is encrypted with a unique key. As an additional safeguard, it encrypts the key itself with a master key that it regularly rotates. So this option is incorrect.`,
  },
  {
    question:
      "You are a developer working at a cloud company that embraces serverless. You have performed your initial deployment and would like to work towards adding API Gateway stages and associate them with existing deployments. Your stages will include prod, test, and dev and will need to match a Lambda function variant that can be updated over time. Which of the following features must you add to achieve this? (select two) A) Lambda X-Ray integration; B) Lambda Aliases; C) Mapping Templates; D) Stage Variables; or E) Lambda Versions",
    answers: ["AB", "BD", "DE", "AC"],
    correct_answer: "BD",
    incorrect_answers: ["AB", "DE", "AC"],
    note: `Stage Variables - Stage variables are name-value pairs that you can define as configuration attributes associated with a deployment stage of an API. They act like environment variables and can be used in your API setup and mapping templates. With deployment stages in API Gateway, you can manage multiple release stages for each API, such as alpha, beta, and production. Using stage variables you can configure an API deployment stage to interact with different backend endpoints.    
    For example, your API can pass a GET request as an HTTP proxy to the backend web host (for example, http://example.com). In this case, the backend web host is configured in a stage variable so that when developers call your production endpoint, API Gateway calls example.com. When you call your beta endpoint, API Gateway uses the value configured in the stage variable for the beta stage and calls a different web host (for example, beta.example.com).
    Lambda Aliases - A Lambda alias is like a pointer to a specific Lambda function version. Users can access the function version using the alias ARN.    
    Lambda Aliases allow you to create a "mutable" Lambda version that points to whatever version you want in the backend. This allows you to have a "dev", "test", prod" Lambda alias that can remain stable over time.
    
    Incorrect options:
    Lambda Versions - Versions are immutable and cannot be updated over time. So this option is not correct.
    Lambda X-Ray integration - This is good for tracing and debugging requests so it can be looked at as a good option for troubleshooting issues in the future. This is not the right fit for the given use-case.
    Mapping Templates - Mapping template overrides provides you with the flexibility to perform many-to-one parameter mappings; override parameters after standard API Gateway mappings have been applied; conditionally map parameters based on body content or other parameter values; programmatically create new parameters on the fly, and override status codes returned by your integration endpoint. This is not the right fit for the given use-case.`,
  },
  {
    question:
      "You have a Java-based application running on EC2 instances loaded with AWS CodeDeploy agents. You are considering different options for deployment, one is the flexibility that allows for incremental deployment of your new application versions and replaces existing versions in the EC2 instances. The other option is a strategy in which an Auto Scaling group is used to perform a deployment. Which of the following options will allow you to deploy in this manner? (Select two) A) Warm Standby Deployment; B) Blue/Green Deployment; C) In-Place Deployment; D) Pilot Light Deployment; or E) Cattle Deployment",
    answers: ["AB", "BC", "AC", "DE"],
    correct_answer: "BC",
    incorrect_answers: ["AB", "AC", "DE"],
    note: `In-place Deployment -The application on each instance in the deployment group is stopped, the latest application revision is installed, and the new version of the application is started and validated. You can use a load balancer so that each instance is deregistered during its deployment and then restored to service after the deployment is complete.
    Blue/green Deployment - With a blue/green deployment, you provision a new set of instances on which CodeDeploy installs the latest version of your application. CodeDeploy then re-routes load balancer traffic from an existing set of instances running the previous version of your application to the new set of instances running the latest version. After traffic is re-routed to the new instances, the existing instances can be terminated.
    
    Incorrect options:
    Cattle Deployment - This is a good option if you have cattle in a farm.
    Warm Standby Deployment - This is not a valid CodeDeploy deployment option. The term "Warm Standby" is used to describe a Disaster Recovery scenario in which a scaled-down version of a fully functional environment is always running in the cloud.
    Pilot Light Deployment - This is not a valid CodeDeploy deployment option. "Pilot Light" is a Disaster Recovery approach where you simply replicate part of your IT structure for a limited set of core services so that the AWS cloud environment seamlessly takes over in the event of a disaster.
    `,
  },
  {
    question:
      "The development team at an e-commerce company is preparing for the upcoming Thanksgiving sale. The product manager wants the development team to implement appropriate caching strategy on Amazon ElastiCache to withstand traffic spikes on the website during the sale. A key requirement is to facilitate consistent updates to the product prices and product description, so that the cache never goes out of sync with the backend. As a Developer Associate, which of the following solutions would you recommend for the given use-case?",
    answers: [
      "Use a caching strategy to write to the backend first and then invalidate the cache",
      "Use a caching strategy to update the cache and the backend at the same time",
      "Use a caching strategy to write to the backend first and wait for the cache to expire via TTL",
      "Use a caching strategy to write to the cache directly and sync the backend at a later time",
    ],
    correct_answer:
      "Use a caching strategy to write to the backend first and then invalidate the cache",
    incorrect_answers: [
      "Use a caching strategy to update the cache and the backend at the same time",
      "Use a caching strategy to write to the backend first and wait for the cache to expire via TTL",
      "Use a caching strategy to write to the cache directly and sync the backend at a later time",
    ],
    note: `Amazon ElastiCache allows you to seamlessly set up, run, and scale popular open-Source compatible in-memory data stores in the cloud. Build data-intensive apps or boost the performance of your existing databases by retrieving data from high throughput and low latency in-memory data stores. Amazon ElastiCache is a popular choice for real-time use cases like Caching, Session Stores, Gaming, Geospatial Services, Real-Time Analytics, and Queuing.
    Broadly, you can set up two types of caching strategies:
    1. Lazy Loading - lazy loading is a caching strategy that loads data into a cache only when necessary. If the data exists in the cache and is current, ElastiCache returns the data to your application. If the data doesn't exist in the cache or has expired, your application requests the data from your data store. Your data store then returns the data to your application. Your application next writes the data received from the store to the cache. 
    2. Write-Through - The write through strategy adds data or updates data in the cache whenever data is written to the database. Advantages - 1) data in the cache is never stale; AND 2) Write penalty vs. Read penalty. Disadvantages - 1) Missing data; AND 2) Cache churn.
    Use a caching strategy to write to the backend first and then invalidate the cache
    This option is similar to the write-through strategy wherein the application writes to the backend first and then invalidate the cache. As the cache gets invalidated, the caching engine would then fetch the latest value from the backend, thereby making sure that the product prices and product description stay consistent with the backend.

    Incorrect options:
    Use a caching strategy to update the cache and the backend at the same time - The cache and the backend cannot be updated at the same time via a single atomic operation as these are two separate systems. Therefore this option is incorrect.
    Use a caching strategy to write to the backend first and wait for the cache to expire via TTL - This strategy could work if the TTL is really short. However, for the duration of this TTL, the cache would be out of sync with the backend, hence this option is not correct for the given use-case.
    Use a caching strategy to write to the cache directly and sync the backend at a later time - This option is given as a distractor as this strategy is not viable to address the given use-case. The product prices and description on the cache must always stay consistent with the backend. You cannot sync the backend at a later time.`,
  },
  {
    question:
      "You team maintains a public API Gateway that is accessed by clients from another domain. Usage has been consistent for the last few months but recently it has more than doubled. As a result, your costs have gone up and would like to prevent other unauthorized domains from accessing your API. Which of the following actions should you take?",
    answers: [
      "Assign a Security Group to your API Gateway",
      "Use Mapping Templates",
      "Restrict access by using CORS",
      "Use Account-level throttling",
    ],
    correct_answer: "Restrict access by using CORS",
    incorrect_answers: [
      "Assign a Security Group to your API Gateway",
      "Use Mapping Templates",
      "Use Account-level throttling",
    ],
    note: `Restrict access by using CORS - Cross-origin resource sharing (CORS) defines a way for client web applications that are loaded in one domain to interact with resources in a different domain. When your API's resources receive requests from a domain other than the API's own domain and you want to restrict servicing these requests, you must disable cross-origin resource sharing (CORS) for selected methods on the resource.

    Incorrect options:
    Use Account-level throttling - To prevent your API from being overwhelmed by too many requests, Amazon API Gateway throttles requests to your API. By default, API Gateway limits the steady-state request rate to 10,000 requests per second (rps). It limits the burst (that is, the maximum bucket size) to 5,000 requests across all APIs within an AWS account. This is Account-level throttling. As you see, this is about limit on the number of requests and is not a suitable answer for the current scenario.
    Use Mapping Templates - A mapping template is a script expressed in Velocity Template Language (VTL) and applied to the payload using JSONPath expressions. Mapping templates help format/structure the data in a way that it is easily readable, unlike a server response that might not always be easy to read. Mapping Templates have nothing to do with access and are not useful for the current scenario.
    Assign a Security Group to your API Gateway - API Gateway does not use security groups but uses resource policies, which are JSON policy documents that you attach to an API to control whether a specified principal (typically an IAM user or role) can invoke the API. You can restrict IP address using this, the downside being, an IP address can be changed by the accessing user. So, this is not an optimal solution for the current use case.`,
  },
  {
    question:
      "A development team at a social media company uses AWS Lambda for its serverless stack on AWS Cloud. For a new deployment, the Team Lead wants to send only a certain portion of the traffic to the new Lambda version. In case the deployment goes wrong, the solution should also support the ability to roll back to a previous version of the Lambda function, with MIMINUM downtime for the application. As a Developer Associate, which of the following options would you recommend to address this use-case?",
    answers: [
      "Set up the application to use an alias that points to the current version. Deploy the new version of the code and configure the alias to send 10% of the users to this new version. If the deployment goes wrong, reset the alias to point all traffic to the current version",
      "Set up the application to use an alias that points to the current version. Deploy the new version of the code and configure alias to send all users to this new version. If the deployment goes wrong, reset the alias to point to the current version",
      "Set up the application to directly deploy the new Lambda version. If the deployment goes wrong, reset the application back to the current version using the version number in the ARN",
      "Set up the application to have multiple alias of the Lambda function. Deploy the new version of the code. Configure a new alias that points to the current alias of the Lambda function for handling 10% of the traffic. If the deployment goes wrong, reset the new alias to point all traffic to the most recent working alias of the Lambda function",
    ],
    correct_answer:
      "Set up the application to use an alias that points to the current version. Deploy the new version of the code and configure the alias to send 10% of the users to this new version. If the deployment goes wrong, reset the alias to point all traffic to the current version",
    incorrect_answers: [
      "Set up the application to use an alias that points to the current version. Deploy the new version of the code and configure alias to send all users to this new version. If the deployment goes wrong, reset the alias to point to the current version",
      "Set up the application to directly deploy the new Lambda version. If the deployment goes wrong, reset the application back to the current version using the version number in the ARN",
      "Set up the application to have multiple alias of the Lambda function. Deploy the new version of the code. Configure a new alias that points to the current alias of the Lambda function for handling 10% of the traffic. If the deployment goes wrong, reset the new alias to point all traffic to the most recent working alias of the Lambda function",
    ],
    note: `Set up the application to use an alias that points to the current version. Deploy the new version of the code and configure the alias to send 10% of the users to this new version. If the deployment goes wrong, reset the alias to point all traffic to the current version
    You can use versions to manage the deployment of your AWS Lambda functions. For example, you can publish a new version of a function for beta testing without affecting users of the stable production version. You can change the function code and settings only on the unpublished version of a function. When you publish a version, the code and most of the settings are locked to ensure a consistent experience for users of that version.
    You can create one or more aliases for your AWS Lambda function. A Lambda alias is like a pointer to a specific Lambda function version. You can use routing configuration on an alias to send a portion of traffic to a Lambda function version. For example, you can reduce the risk of deploying a new version by configuring the alias to send most of the traffic to the existing version, and only a small percentage of traffic to the new version.
    
    Incorrect options:
    Set up the application to use an alias that points to the current version. Deploy the new version of the code and configure alias to send all users to this new version. If the deployment goes wrong, reset the alias to point to the current version - In this case, the application uses an alias to send all traffic to the new version which does not meet the requirement of sending only a certain portion of the traffic to the new Lambda version. In addition, if the deployment goes wrong, the application would see a downtime. Hence this option is incorrect.
    Set up the application to directly deploy the new Lambda version. If the deployment goes wrong, reset the application back to the current version using the version number in the ARN - In this case, the application sends all traffic to the new version which does not meet the requirement of sending only a certain portion of the traffic to the new Lambda version. In addition, if the deployment goes wrong, the application would see a downtime. Hence this option is incorrect.
    Set up the application to have multiple alias of the Lambda function. Deploy the new version of the code. Configure a new alias that points to the current alias of the Lambda function for handling 10% of the traffic. If the deployment goes wrong, reset the new alias to point all traffic to the most recent working alias of the Lambda function - This option has been added as a distractor. The alias for a Lambda function can only point to a Lambda function version. It cannot point to another alias.
    `,
  },
  {
    question:
      "You are working for a technology startup building web and mobile applications. You would like to pull Docker images from the ECR repository called demo so you can start running local tests against the latest application version. Which of the following commands must you run to pull existing Docker images from ECR? (Select two) A) $(aws ecr get-login --no-include-email); B) docker pull 1234567890.dkr.ecr.eu-west-1.amazonaws.com/demo:latest; C) docker login -u $AWS_ACCESS_KEY_ID -p $AWS_SECRET_ACCESS_KEY; D) aws docker push 1234567890.dkr.ecr.eu-west-1.amazonaws.com/demo:latest; or E) docker build -t 1234567890.dkr.ecr.eu-west-1.amazonaws.com/demo:latest",
    answers: ["AB", "BC", "DE", "AD"],
    correct_answer: "AB",
    incorrect_answers: ["BC", "DE", "AD"],
    note: `$(aws ecr get-login --no-include-email)
    docker pull 1234567890.dkr.ecr.eu-west-1.amazonaws.com/demo:latest
    The get-login command retrieves a token that is valid for a specified registry for 12 hours, and then it prints a docker login command with that authorization token. You can execute the printed command to log in to your registry with Docker, or just run it automatically using the $() command wrapper. After you have logged in to an Amazon ECR registry with this command, you can use the Docker CLI to push and pull images from that registry until the token expires. The docker pull command is used to pull an image from the ECR registry.
    
    Incorrect options:
    docker login -u $AWS_ACCESS_KEY_ID -p $AWS_SECRET_ACCESS_KEY - You cannot login to AWS ECR this way. AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY are only used by the CLI and not by docker.
    aws docker push 1234567890.dkr.ecr.eu-west-1.amazonaws.com/demo:latest - docker push here is the wrong answer, you need to use docker pull.
    docker build -t 1234567890.dkr.ecr.eu-west-1.amazonaws.com/demo:latest - This is a docker command that is used to build Docker images from a Dockerfile.`,
  },
  {
    question:
      "A .NET developer team works with many ASP.NET web applications that use EC2 instances to host them on IIS. The deployment process needs to be configured so that multiple versions of the application can run in AWS Elastic Beanstalk. One version would be used for development, testing, and another version for load testing. Which of the following methods do you recommend?",
    answers: [
      "Define a dev environment with a single instance and a 'load test' environment that has settings close to production environment",
      "You cannot have multiple development environments in Elastic Beanstalk, just one development, and one production environment",
      "Use only one Beanstalk environment and perform configuration changes using an Ansible script",
      "Create an Application Load Balancer to route based on hostname so you can pass on parameters to the development Elastic Beanstalk environment. Create a file in .ebextensions/ to know how to handle the traffic coming from the ALB",
    ],
    correct_answer:
      "Define a dev environment with a single instance and a 'load test' environment that has settings close to production environment",
    incorrect_answers: [
      "You cannot have multiple development environments in Elastic Beanstalk, just one development, and one production environment",
      "Use only one Beanstalk environment and perform configuration changes using an Ansible script",
      "Create an Application Load Balancer to route based on hostname so you can pass on parameters to the development Elastic Beanstalk environment. Create a file in .ebextensions/ to know how to handle the traffic coming from the ALB",
    ],
    note: `Define a dev environment with a single instance and a 'load test' environment that has settings close to production environment
    AWS Elastic Beanstalk makes it easy to create new environments for your application. You can create and manage separate environments for development, testing, and production use, and you can deploy any version of your application to any environment. Environments can be long-running or temporary. When you terminate an environment, you can save its configuration to recreate it later.
    It is common practice to have many environments for the same application. You can deploy multiple environments when you need to run multiple versions of an application. So for the given use-case, you can set up 'dev' and 'load test' environment.
    
    Incorrect Options:
    You cannot have multiple development environments in Elastic Beanstalk, just one development, and one production environment - Incorrect, use the Create New Environment wizard in the AWS Management Console for BeanStalk to guide you on this.
    Use only one Beanstalk environment and perform configuration changes using an Ansible script - Ansible is an open-source deployment tool that integrates with AWS. It allows us to deploy the infrastructure. Elastic Beanstalk provisions the servers that you need for hosting the application and it also handles multiple environments, so Beanstalk is a better option.
    Create an Application Load Balancer to route based on hostname so you can pass on parameters to the development Elastic Beanstalk environment. Create a file in .ebextensions/ to know how to handle the traffic coming from the ALB - This is not a good design if you need to load test because you will have two versions on the same instances and may not be able to access resources in the system due to the load testing.
    `,
  },
  {
    question:
      "Your team-mate has configured an Amazon S3 event notification for an S3 bucket that holds sensitive audit data of a firm. As the Team Lead, you are receiving the SNS notifications for every event in this bucket. After validating the event data, you realized that few events are missing. What could be the reason for this behavior and how to avoid this in the future?",
    answers: [
      "Someone could have created a new notification configuration and that has overridden your existing configuration",
      "Versioning is enabled on the S3 bucket and event notifications are getting fired for only one version",
      "If two writes are made to a single non-versioned object at the same time, it is possible that only a single event notification will be sent",
      "Your notification action is writing to the same bucket that triggers the notification",
    ],
    correct_answer:
      "If two writes are made to a single non-versioned object at the same time, it is possible that only a single event notification will be sent ",
    incorrect_answers: [
      "Someone could have created a new notification configuration and that has overridden your existing configuration",
      "Versioning is enabled on the S3 bucket and event notifications are getting fired for only one version",
      "Your notification action is writing to the same bucket that triggers the notification",
    ],
    note: `If two writes are made to a single non-versioned object at the same time, it is possible that only a single event notification will be sent - Amazon S3 event notifications are designed to be delivered at least once. Typically, event notifications are delivered in seconds but can sometimes take a minute or longer.
    If two writes are made to a single non-versioned object at the same time, it is possible that only a single event notification will be sent. If you want to ensure that an event notification is sent for every successful write, you can enable versioning on your bucket. With versioning, every successful write will create a new version of your object and will also send event notification.
    
    Incorrect options:
    Someone could have created a new notification configuration and that has overridden your existing configuration - It is possible that the configuration can be overridden. But, in the current scenario, the team lead is receiving notifications for most of the events, which nullifies the claim that the configuration is overridden.
    Versioning is enabled on the S3 bucket and event notifications are getting fired for only one version - This is an incorrect statement. If you want to ensure that an event notification is sent for every successful write, you should enable versioning on your bucket. With versioning, every successful write will create a new version of your object and will also send event notification.
    Your notification action is writing to the same bucket that triggers the notification - If your notification ends up writing to the bucket that triggers the notification, this could cause an execution loop. But it will not result in missing events.`,
  },
  {
    question:
      "A new recruit is trying to understand the nuances of EC2 Auto Scaling. As an AWS Certified Developer Associate, you have been asked to mentor the new recruit. Can you identify and explain the correct statements about Auto Scaling to the new recruit? (Select two). A) Amazon EC2 Auto Scaling cannot add a volume to an existing instance if the existing volume is approaching capacity; B) EC2 Auto Scaling groups are regional constructs. They span across Availability Zones and AWS regions; C) Every time you create an Auto Scaling group from an existing instance, it creates a new AMI (Amazon Machine Image); D) Amazon EC2 Auto Scaling works with both Application Load Balancers and Network Load Balancers; or E) You cannot use Amazon EC2 Auto Scaling for health checks (to replace unhealthy instances) if you are not using Elastic Load Balancing (ELB)",
    answers: ["AB", "AD", "BC", "DE"],
    correct_answer: "AD",
    incorrect_answers: ["AB", "BC", "DE"],
    note: `Amazon EC2 Auto Scaling is a fully managed service designed to launch or terminate Amazon EC2 instances automatically to help ensure you have the correct number of Amazon EC2 instances available to handle the load for your application.
    Amazon EC2 Auto Scaling cannot add a volume to an existing instance if the existing volume is approaching capacity - A volume is attached to a new instance when it is added. Amazon EC2 Auto Scaling doesn't automatically add a volume when the existing one is approaching capacity. You can use the EC2 API to add a volume to an existing instance.
    Amazon EC2 Auto Scaling works with both Application Load Balancers and Network Load Balancers - Amazon EC2 Auto Scaling works with Application Load Balancers and Network Load Balancers including their health check feature.
    
    Incorrect options:
    EC2 Auto Scaling groups are regional constructs. They span across Availability Zones and AWS regions - This is an incorrect statement. EC2 Auto Scaling groups are regional constructs. They can span Availability Zones, but not AWS regions.
    Every time you create an Auto Scaling group from an existing instance, it creates a new AMI (Amazon Machine Image) - This is an incorrect statement. When you create an Auto Scaling group from an existing instance, it does not create a new AMI.
    You cannot use Amazon EC2 Auto Scaling for health checks (to replace unhealthy instances) if you are not using Elastic Load Balancing (ELB) - This is an incorrect statement. You don't have to use ELB to use Auto Scaling. You can use the EC2 health check to identify and replace unhealthy instances.`,
  },
  {
    question:
      "A Developer at a company is working on a CloudFormation template to set up resources. Resources will be defined using code and provisioned based on certain conditions. Which section of a CloudFormation template does not allow for conditions?",
    answers: ["Outputs", "Parameters", "Resources", "Conditions"],
    correct_answer: "Parameters",
    incorrect_answers: ["Outputs", "Resources", "Conditions"],
    note: `Parameters - Parameters enable you to input custom values to your CloudFormation template each time you create or update a stack.
    The optional Conditions section contains statements that define the circumstances under which entities are created or configured. For example, you can create a condition and then associate it with a resource or output so that AWS CloudFormation only creates the resource or output if the condition is true.
    You might use conditions when you want to reuse a template that can create resources in different contexts, such as a test environment versus a production environment. In your template, you can add an EnvironmentType input parameter, which accepts either prod or test as inputs. For the production environment, you might include Amazon EC2 instances with certain capabilities; however, for the test environment, you want to use reduced capabilities to save money.
    Conditions cannot be used within the Parameters section. After you define all your conditions, you can associate them with resources and resource properties only in the Resources and Outputs sections of a template.
    
    Incorrect options:
    Resources - Resources section describes the resources that you want to provision in your AWS CloudFormation stacks. You can associate conditions with the resources that you want to conditionally create.
    Conditions - You actually define conditions in this section of the CloudFormation template.
    Outputs - The optional Outputs section declares output values that you can import into other stacks (to create cross-stack references), return in response (to describe stack calls), or view on the AWS CloudFormation console. For example, you can output the S3 bucket name for a stack to make the bucket easier to find. You can associate conditions with the outputs that you want to conditionally create.
    `,
  },
];
