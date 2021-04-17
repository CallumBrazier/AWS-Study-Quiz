export const CDAQuestions = [
  {
    question:
      "What is used in S3 to enable client web applications that are loaded in one domain to interact with resources of the different domain? Choose the correct answer from the options below",
    answers: [
      "A. CORS Configuration",
      "B. Public Object Permissions",
      "C. Public ACL Permissions",
      "D. None of the above",
    ],
    correct_answer: "A. CORS Configuration",
    incorrect_answers: [
      "B. Public Object Permissions",
      "C. Public ACL Permissions",
      "D. None of the above",
    ],
    note:
      "Cross-origin resource sharing (CORS) configuration is a way to interact with resources in a different domain for the client web applications loaded in one domain. With CORS, you can build client-side web applications with Amazon S3 and also allow cross-origin to have access to the S3 resources selectively.",
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
      "A. It allows read or write actions on the bucket ‘mybucket’",
      "B. It allows read access to the bucket ‘mybucket’ but only if it is accessed from example.com or demo.com",
      "C. It allows unlimited access to the bucket ‘mybucket’",
      "D. It allows read or write access to the bucket ‘mybucket’ but only if it is accessed from example.com or demo.com",
    ],
    correct_answer:
      "D. It allows read or write access to the bucket ‘mybucket’ but only if it is accessed from example.com or demo.com",
    incorrect_answers: [
      "A. It allows read or write actions on the bucket ‘mybucket’",
      "B. It allows read access to the bucket ‘mybucket’ but only if it is accessed from example.com or demo.com",
      "C. It allows unlimited access to the bucket ‘mybucket’",
    ],
    note: "The PutObject allows one to put objects in an S3 bucket.",
  },
  {
    question: "Is the default visibility timeout for an SQS queue 1 minute?",
    answers: ["A. True", "B. False"],
    correct_answer: "B. False",
    incorrect_answers: ["A. True"],
    note:
      "The visibility timeout of each queue is 30 seconds by default. It is possible to change this setting for all the queues. Typically, the visibility timeout is set to the average time it takes in processing and deleting a message from the queue. While receiving messages, special visibility timeout can be set for the returned messages without making any change in the overall timeout of the queue.",
  },
  {
    question:
      "When a failure occurs during stack creation in Cloudformation, does a rollback occur?",
    answers: ["A. True", "B. False"],
    correct_answer: "A. True",
    incorrect_answers: ["B. False"],
    note:
      "By default, the “automatic rollback on error” feature is enabled. It causes AWS CloudFormation to be created successfully for a stack until the point of error is deleted. This is useful when the default limit for Elastic IP addresses is exceeded accidentally, or you can’t access an EC2 AMI you want to run. This feature makes you depend on the fact that stacks may either be fully created or not at all. It simplifies the layered solutions system administration built on the top of the AWS CloudFormation.",
  },
  {
    question:
      "An administrator is getting an error while trying to create a new bucket in S3? You feel that bucket limit has been crossed. What is the bucket limit per account in AWS? Choose the correct answer from the options below:",
    answers: ["A. 100", "B. 50", "C. 1000", "D. 150"],
    correct_answer: "A. 100",
    incorrect_answers: ["B. 50", "C. 1000", "D. 150"],
    note:
      "By default, you can create up to 100 buckets in each of your AWS accounts. If you need additional buckets, you can increase your account bucket limit to a maximum of 1,000 buckets by submitting a service limit increase. There is no difference in performance whether you use many buckets or just a few.",
  },
  {
    question:
      "Which of the below functions is used in Cloudformation to retrieve an object from a set of objects? Choose an answer from the options below:",
    answers: [
      "A. Fn::GetAtt",
      "B. Fn::Combine",
      "C. Fn::Join",
      "D. Fn::Select",
    ],
    correct_answer: "D. Fn::Select",
    incorrect_answers: ["A. Fn::GetAtt", "B. Fn::Combine", "C. Fn::Join"],
    note:
      "The intrinsic function Fn::Select returns a single object from a list of objects by index.",
  },
  {
    question:
      "Which of the below functions is used in Cloudformation to append a set of values into a single value? Choose an answer from the options below:",
    answers: [
      "A. Fn::GetAtt",
      "B. Fn::Combine",
      "C. Fn::Join",
      "D. Fn::Select",
    ],
    correct_answer: "C. Fn::Join",
    incorrect_answers: ["A. Fn::GetAtt", "B. Fn::Combine", "D. Fn::Select"],
    note:
      "The intrinsic function Fn::Join appends a set of values into a single value, separated by the specified delimiter. If a delimiter is the empty string, the set of values are concatenated with no delimiter.",
  },
  {
    question:
      "What is the max size of an item that corresponds to a single write capacity unit? (While creating an index or table in Amazon DynamoDB, it is required to specify the capacity requirements for the read and write activity). Choose an answer from the options below:",
    answers: ["A. 1 KB", "B. 4 KB", "C. 2 KB", "D. 8 KB"],
    correct_answer: "A. 1 KB",
    incorrect_answers: ["B. 4 KB", "C. 2 KB", "D. 8 KB"],
    note:
      "One write request unit represents one write for an item up to 1 KB in size. If you need to write an item that is larger than 1 KB, DynamoDB needs to consume additional write request units. Transactional write requests require 2 write request units to perform one write for items up to 1 KB. The total number of write request units required depends on the item size. For example, if your item size is 2 KB, you require 2 write request units to sustain one write request or 4 write request units for a transactional write request.",
  },
  {
    question:
      "What can be used in DynamoDB as a part of the Query API call for the filtration of results based on the primary keys’ values? Choose an answer from the options below:",
    answers: ["A. Expressions", "B. Conditions", "C. Query API", "D. Scan API"],
    correct_answer: "A. Expressions",
    incorrect_answers: ["B. Conditions", "C. Query API", "D. Scan API"],
    note:
      "You can specify an expression as part of the Query API call to filter based on values of primary keys on a table using the KeyConditionExpression parameter.",
  },
  {
    question:
      "Can a global secondary index be created at the same time as the table creation?",
    answers: ["A. True", "B. False"],
    correct_answer: "A. True",
    incorrect_answers: ["B. False"],
    note:
      "Global secondary index — An index with a partition key and a sort key that can be different from those on the base table. A global secondary index is considered 'global' because queries on the index can span all of the data in the base table, across all partitions. A global secondary index is stored in its own partition space away from the base table and scales separately from the base table.",
  },
  {
    question:
      "Can a Global Secondary Index have a different partition key and sort key from those of its base table?",
    answers: ["A. True", "B. False"],
    correct_answer: "A. True",
    incorrect_answers: ["B. False"],
    note:
      "GSI can also use the same partition key as the base table. Even in the AWS documentation, they say that GSI can use a different partition key and sort key. However, anywhere in the document, they are not saying that it has to be different.",
  },
  {
    question: "What in AWS can be used to restrict access to SWF?",
    answers: ["A. ACL", "B. SWF Roles", "C. IAM", "D. None of the above"],
    correct_answer: "C. IAM",
    incorrect_answers: ["A. ACL", "B. SWF Roles", "D. None of the above"],
    note: "",
  },
  {
    question:
      "An IT admin has enabled long polling in their SQS queue. What must be done for long polling to be enabled in SQS? Choose the correct answer from the options below:",
    answers: [
      "A. Create a dead letter queue",
      "B. Set the message size to 256KB",
      "C. Set the ReceiveMessageWaitTimeSeconds property of the queue to 0 seconds",
      "D. Set the ReceiveMessageWaitTimeSeconds property of the queue to 20 seconds",
    ],
    correct_answer:
      "D. Set the ReceiveMessageWaitTimeSeconds property of the queue to 20 seconds",
    incorrect_answers: [
      "A. Create a dead letter queue",
      "B. Set the message size to 256KB",
      "C. Set the ReceiveMessageWaitTimeSeconds property of the queue to 0 seconds",
    ],
    note:
      "Amazon SQS long polling is a method of retrieval of messages from SQS queues. It returns a response only when a message arrives in the message queue instead of short polling where the response returns immediately even when the message is empty. As the messages are available, the retrieval of messages from Amazon SQS becomes inexpensive due to long polling. It may also reduce the cost of using SQS as it can reduce the empty receipts.",
  },
  {
    question: "",
    answers: [],
    correct_answer: "",
    incorrect_answers: [],
    note: "",
  },
];
