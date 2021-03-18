export const Questions = [
  {
    question:
      "What are the 6 benefits of cloud computing over on-premise servers?",
    answers: [
      "1) Trade capital expense for variable expense 2) Benefit from economies of scale 3) Stop guessing capacity 4) Increase speed and agility 5) Stop spending money on running and maintaining data centers 6) Go global in minutes",
      "1) Trade variable expense for capital expense 2) Gain increased customer engagement 3) Enhanced security provided by cloud services 4) Get easy access to a wide array of services 5) Stop guessing capacity 6) Increase interactions and improve scalability",
      "1) Improve your business profit margins 2) Get easy access to a wide array of services 3) Get increased customer engagement 4) Increase speed and agility 5) Enhanced security provided by cloud services 6) Go global in minutes",
      "1) Gain increased customer engagement 2) Benefit from economies of scale 3) Increase interactions and improve scalability 4) Increase speed and agility 5) Stop spending money on running and maintaining data centers 6) Improve user access to your services",
    ],
    correct_answer:
      "1) Trade capital expense for variable expense 2) Benefit from economies of scale 3) Stop guessing capacity 4) Increase speed and agility 5) Stop spending money on running and maintaining data centers 6) Go global in minutes",
    incorrect_answers: [
      "1) Trade variable expense for capital expense 2) Gain increased customer engagement 3) Enhanced security provided by cloud services 4) Get easy access to a wide array of services 5) Stop guessing capacity 6) Increase interactions and improve scalability",
      "1) Improve your business profit margins 2) Get easy access to a wide array of services 3) Get increased customer engagement 4) Increase speed and agility 5) Enhanced security provided by cloud services 6) Go global in minutes",
      "1) Gain increased customer engagement 2) Benefit from economies of scale 3) Increase interactions and improve scalability 4) Increase speed and agility 5) Stop spending money on running and maintaining data centers 6) Improve user access to your services",
    ],
    note: "No additional information",
  },
  {
    question:
      "What are the benefits of using Amazon EC2 instances compared to physical servers in your infrastructure? A) Resizable, B) The ability to hot-add additional RAM, C) Automatic automated backups, D) Pay only for the capacity you use, E) The ability to have different storage requirements. (Choose 3)",
    answers: ["A, D, E", "A, B, E", "B, C, E", "B, C, D"],
    correct_answer: "A, D, E",
    incorrect_answers: ["A, B, E", "B, C, E", "B, C, D"],
    note: "No additional information",
  },
  {
    question:
      "Which of the following best describes the types of data for which Amazon S3 Glacier is best suited?" +
      "A) Frequently erased within 30 days," +
      "B) Is available after a three to five-hour restore period," +
      "C) Is infrequently or rarely accessed," +
      "D) Requires block storage." +
      "(Choose two)",
    answers: ["A, D", "C, D", "A B", "B, C"],
    correct_answer: "B, C",
    incorrect_answers: ["A, D", "C, D", "A B"],
    note:
      "A - not frequently erased, can be set up, but not default. D - this is EBS, not S3.",
  },
  {
    question:
      "You have an application composed of individual services. You need to route a request to a service based on the content of the request." +
      "What type of load balancer should you use?",
    answers: [
      "Auto Scaling Load Balancer",
      "Network Load Balancer",
      "Application Load Balancer",
      "Any type of load balancer",
    ],
    correct_answer: "Application Load Balancer",
    incorrect_answers: [
      "Auto Scaling Load Balancer",
      "Network Load Balancer",
      "Any type of load balancer",
    ],
    note: "No additional information",
  },
  {
    question: "Which of the following is a key-value (NoSQL) database?",
    answers: [
      "Amazon Aurora",
      "Amazon DynamoDB",
      "Amazon RDS",
      "Amazon NoSQL-DB",
    ],
    correct_answer: "Amazon DynamoDB",
    incorrect_answers: ["Amazon Aurora", "Amazon RDS", "Amazon NoSQL-DB"],
    note: "No additional information",
  },
  {
    question: "What is the first step in getting started with AWS Lambda?",
    answers: [
      "Provision EC2 Instances",
      "Deploy an OS image",
      "Pay for estimated compute time",
      "Upload your code",
    ],
    correct_answer: "Upload your code",
    incorrect_answers: [
      "Provision EC2 Instances",
      "Deploy an OS image",
      "Pay for estimated compute time",
    ],
    note: "No additional information",
  },
  {
    question:
      "Which of the following are best practices for security?" +
      "A) Delete Root user access keys," +
      "B) Use the same password for all users," +
      "C) Use roles for applications," +
      "D) Embed Secrets in your code," +
      "E) Activate multi-factor authentication (MFA)." +
      "(Choose three)",
    answers: ["A, C, E", "B, C, E", "A, D, E", "A, B, D"],
    correct_answer: "A, C, E",
    incorrect_answers: ["B, C, E", "A, D, E", "A, B, D"],
    note: "No additional information",
  },
  {
    question:
      "Now that you have started your migration to the cloud, you want to find out which service you use the most and where the majority of your traffic is coming from." +
      "Which tool do you use?",
    answers: [
      "AWS Free Tier",
      "AWS Cost Explorer",
      "AWS Simple Monthly Calculator",
      "AWS Annual Calculator",
    ],
    correct_answer: "AWS Cost Explorer",
    incorrect_answers: [
      "AWS Free Tier",
      "AWS Simple Monthly Calculator",
      "AWS Annual Calculator",
    ],
    note: "No additional information",
  },
  {
    question:
      "Which of the following is NOT a pillar of the AWS Well-Architected Framework?",
    answers: [
      "Security",
      "Persistence",
      "Cost Optimization",
      "Operational Excellence",
    ],
    correct_answer: "Persistence",
    incorrect_answers: [
      "Security",
      "Cost Optimization",
      "Operational Excellence",
    ],
    note: "No additional information",
  },
  {
    question:
      "Why is AWS more economical than traditional data centers for applications with varying compute workloads?",
    answers: [
      "Amazon EC2 costs are billed on a monthly basis",
      "Users retain full administrative access to their Amazon EC2 instances",
      "Amazon EC2 instances can be launched on demand when needed",
      "Users can permanently run enough instances to handle peak workloads",
    ],
    correct_answer:
      "Amazon EC2 instances can be launched on demand when needed",
    incorrect_answers: [
      "Amazon EC2 costs are billed on a monthly basis",
      "Users retain full administrative access to their Amazon EC2 instances",
      "Users can permanently run enough instances to handle peak workloads",
    ],
    note:
      "The ability to launch instances on demand when needed allows users to launch and terminate instances in response to a varying workload. This is a more economical practice than purchasing enough on-premise servers to handle the peak load.",
  },
  {
    question:
      "Which AWS service would simplify the migration of a database to AWS?",
    answers: [
      "AWS Storage Gateway",
      "AWS Database Migration Service (AWS DMS)",
      "Amazon EC2",
      "Amazon AppStream 2.0",
    ],
    correct_answer: "AWS Database Migration Service (AWS DMS)",
    incorrect_answers: [
      "AWS Storage Gateway",
      "Amazon EC2",
      "Amazon AppStream 2.0",
    ],
    note:
      "AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases.",
  },
  {
    question:
      "Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?",
    answers: ["AWS Config", "AWS OpsWorks", "AWS SDK", "AWS Marketplace"],
    correct_answer: "AWS Marketplace",
    incorrect_answers: ["AWS Config", "AWS OpsWorks", "AWS SDK"],
    note:
      "AWS Marketplace is a digital catalogue with thousands of software listings from independent software vendors that make it easy to find, test, buy, and deploy software that runs on AWS.",
  },
  {
    question:
      "Which AWS networking service enables a company to create a virtual network with AWS?",
    answers: [
      "AWS Config",
      "Amazon Route53",
      "AWS Direct Connect",
      "Amazon Virtual Private Cloud (Amazon VPC)",
    ],
    correct_answer: "Amazon Virtual Private Cloud (Amazon VPC)",
    incorrect_answers: ["AWS Config", "Amazon Route53", "AWS Direct Connect"],
    note:
      "Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch AWS resources in a virtual network that they define.",
  },
  {
    question:
      "Which of the following is an AWS responsibility under the AWS shared responsibility model?",
    answers: [
      "Configuring third-party applications",
      "Maintaining physical hardware",
      "Securing application access and data",
      "Managing guest operating systems",
    ],
    correct_answer: "Maintaining physical hardware",
    incorrect_answers: [
      "Configuring third-party applications",
      "Securing application access and data",
      "Managing guest operating systems",
    ],
    note:
      "Maintaining physical hardware is an AWS responsibility under the AWS Shared Responsibility Model",
  },
  {
    question:
      "Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?",
    answers: [
      "AWS Regions",
      "Edge Locations",
      "Availability Zones",
      "Virtual Private Cloud (VPC)",
    ],
    correct_answer: "Edge Locations",
    incorrect_answers: [
      "AWS Regions",
      "Availability Zones",
      "Virtual Private Cloud (VPC)",
    ],
    note:
      "To deliver content to users with lower latency, Amazon CloudFront uses a global network of points of presence (edge locations and regional edge caches) worldwide.",
  },
  {
    question:
      "How would a system administrator add an additional layer of login security to a user's AWS Management Console?",
    answers: [
      "Use Amazon Cloud Directory",
      "Audit AWS Identity and Access Management (IAM) roles",
      "Enable multi-factor authentication",
      "Enable AWS CloudTrail",
    ],
    correct_answer: "Enable multi-factor authentication",
    incorrect_answers: [
      "Use Amazon Cloud Directory",
      "Audit AWS Identity and Access Management (IAM) roles",
      "Enable AWS CloudTrail",
    ],
    note:
      "Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be  prompted for their username and password (the first factor - what they know), as well as for an authentication code from their MFA device (the second factor - what they have). Taken together, these multiple factors provide increased security for AWS account settings and resources.",
  },
  {
    question:
      "Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?",
    answers: [
      "AWS Trusted Advisor",
      "AWS CloudTrail",
      "AWS X-Ray",
      "AWS Identity and Access Management (AWS IAM)",
    ],
    correct_answer: "AWS CloudTrail",
    incorrect_answers: [
      "AWS Trusted Advisor",
      "AWS X-Ray",
      "AWS Identity and Access Management (AWS IAM)",
    ],
    note:
      "AWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface (CLI), and AWS SDKs and APIs.",
  },
  {
    question:
      "Which service would be used to send alerts based on Amazon CloudWatch alarms?",
    answers: [
      "Amazon Simplified Notification Service (SNS)",
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "Amazon Route53",
    ],
    correct_answer: "Amazon Simplified Notification Service (SNS)",
    incorrect_answers: [
      "AWS CloudTrail",
      "AWS Trusted Advisor",
      "Amazon Route53",
    ],
    note:
      "Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for every active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the performance of their Amazon SNS topics, push notifications, and SMS deliveries.",
  },
  {
    question:
      "Where can a user find information about prohibited actions on the AWS infrastructure?",
    answers: [
      "AWS Trusted Advisor",
      "AWS Identity and Access Management (IAM)",
      "AWS Billing Console",
      "AWS Acceptable Use Policy",
    ],
    correct_answer: "AWS Acceptable Use Policy",
    incorrect_answers: [
      "AWS Trusted Advisor",
      "AWS Identity and Access Management (IAM)",
      "AWS Billing Console",
    ],
    note:
      "The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure.",
  },
];
