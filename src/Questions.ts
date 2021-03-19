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
  {
    question:
      "Under the shared responsibility model, which of the following is the customer responsible for?",
    answers: [
      "Ensuring that disk drives are wiped after use.",
      "Ensuring that firmware is updated on hardware devices.",
      "Ensuring that data is encrypted at rest.",
      "Ensuring that network cables are category six or higher.",
    ],
    correct_answer: "Ensuring that data is encrypted at rest.",
    incorrect_answers: [
      "Ensuring that disk drives are wiped after use.",
      "Ensuring that firmware is updated on hardware devices.",
      "Ensuring that network cables are category six or higher.",
    ],
    note: "",
  },
  {
    question:
      "The use of what AWS feature or service allows companies to track and categorize spending on a detailed level?",
    answers: [
      "Cost allocation tags",
      "Consolidated billing",
      "AWS Budgets",
      "AWS Marketplace",
    ],
    correct_answer: "Cost allocation tags",
    incorrect_answers: [
      "Consolidated billing",
      "AWS Budgets",
      "AWS Marketplace",
    ],
    note:
      "You can use tags to organize your resources, and cost allocation tags to track your AWS costs on a detailed level.",
  },
  {
    question:
      "Which service stores objects, provides real-time access to those objects, and offers versioning and lifecycle capabilities?",
    answers: [
      "Amazon Glacier",
      "AWS Storage Gateway",
      "Amazon S3",
      "Amazon EBS",
    ],
    correct_answer: "Amazon S3",
    incorrect_answers: ["Amazon Glacier", "AWS Storage Gateway", "Amazon EBS"],
    note:
      "Amazon Simple Storage Service (S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. This means customers of all sizes and industries can use it to store and protect any amount of data for a range of use case, such as websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics. Amazon S3 provides easy-to-use management features so you can organize your data and configure finely-tuned access controls to meet your specific business, organizational, and compliance requirements. Amazon S3 is designed for 99.999999999% (11 9's) of durability, and stores data for millions of applications for companies all around the world.",
  },
  {
    question:
      "What AWS team assists customers with accelerating cloud adoption through paid engagements in any of several specialty practice areas?",
    answers: [
      "AWS Enterprise Support",
      "AWS Solutions Architects",
      "AWS Professional Services",
      "AWS Account Managers",
    ],
    correct_answer: "AWS Professional Services",
    incorrect_answers: [
      "AWS Enterprise Support",
      "AWS Solutions Architects",
      "AWS Account Managers",
    ],
    note:
      "The AWS Professional Services organization is a global team of experts that can help you realize your desired business outcomes when using the AWS Cloud. They work together with your team and your chosen member of the AWS Partner Network (APN) to execute your enterprise cloud computing initiatives. The team provides assistance through a collection of offerings which help you achieve specific outcomes related to enterprise cloud adoption. They also deliver focused guidance through their global specialty practices, which cover a variety of solutions, technologies, and industries.",
  },
  {
    question:
      "A customer would like to design and build a new workload on AWS Cloud but does not have the AWS-related software technical expertise in-house. Which of the following AWS programs can a customer take advantage of to achieve that outcome?",
    answers: [
      "AWS Partner Network Technology Partners",
      "AWS Marketplace",
      "AWS Partner Network Consulting Partners",
      "AWS Service Catalog",
    ],
    correct_answer: "AWS Partner Network Consulting Partners",
    incorrect_answers: [
      "AWS Partner Network Technology Partners",
      "AWS Marketplace",
      "AWS Service Catalog",
    ],
    note:
      "APN Consulting Partners are professional services firms that help customers of all types and sizes design, architect, build, migrate, and manage their workloads and applications on AWS, accelerating their journey to the cloud.",
  },
  {
    question:
      "Distributing workloads across multiple Availability Zones supports which cloud architecture design principle?",
    answers: [
      "Implement automation",
      "Design for agility",
      "Design for failure",
      "Implement elasticity",
    ],
    correct_answer: "Design for failure",
    incorrect_answers: [
      " Implement automation",
      "Design for agility",
      "Implement elasticity",
    ],
    note: "",
  },
  {
    question:
      "Which AWS services can host a Microsoft SQL Server database? (Choose two.) A. Amazon EC2, B. Amazon Relational Database Service (Amazon RDS), C. Amazon Aurora, D. Amazon Redshift, E. Amazon S3",
    answers: ["AC", "AB", "DE", "CE"],
    correct_answer: "AB",
    incorrect_answers: ["AC", "DE", "CE"],
    note:
      "Amazon offer the most options for using new and existing Microsoft software licenses on AWS. By purchasing Amazon Elastic Compute Cloud (Amazon EC2) or Amazon Relational Database Service (Amazon RDS) license-included instances, you get new, fully compliant Windows Server and SQL Server licenses from AWS. Amazon Aurora only supports MySQL and PostgreSQL relational databases, not MS SQL.",
  },
  {
    question:
      "Which of the following inspects AWS environments to find opportunities that can save money for users and also improve system performance?",
    answers: [
      "AWS Cost Explorer",
      "AWS Trusted Advisor",
      "Consolidated billing",
      "Detailed billing",
    ],
    correct_answer: "AWS Trusted Advisor",
    incorrect_answers: [
      "AWS Cost Explorer",
      "Consolidated billing",
      "Detailed billing",
    ],
    note:
      "AWS Trusted Advisor is an online resource to help you reduce cost, increase performance, and improve security by optimising your AWS environment. Trusted Advisor provides real-time guidance to help you provision your resources following AWS best practices.",
  },
  {
    question:
      "Which of the following Amazon EC2 pricing models allow customers to use existing server-bound software licenses?",
    answers: [
      "Spot Instances",
      "Reserved Instances",
      "Dedicated Hosts",
      "On-Demand Instances",
    ],
    correct_answer: "Dedicated Hosts",
    incorrect_answers: [
      "Spot Instances",
      "Reserved Instances",
      "On-Demand Instances",
    ],
    note:
      "A Dedicated Host is a physical EC2 server dedicated for your use. Dedicated Hosts can help you reduce costs by allowing you to use your existing server-bound software licenses, including Windows Server, SQL Server, and SUSE Linux Enterprise Server (subject to your license terms), and can also help you meet compliance requirements.",
  },
  {
    question:
      "Which AWS characteristics make AWS cost effective for a workload with dynamic user demand? (Choose two.) A. High availability, B. Shared security model, C. Elasticity, D. Pay-as-you-go pricing, E. Reliability",
    answers: ["CD", "AE", "BD", "DE"],
    correct_answer: "CD",
    incorrect_answers: ["AE", "BD", "DE"],
    note: "",
  },
  {
    question:
      "Which service enables risk auditing by continuously monitoring and logging account activity, including user actions in the AWS Management Console and AWS SDKs?",
    answers: [
      "Amazon CloudWatch",
      "AWS CloudTrail",
      "AWS Config",
      "AWS Health",
    ],
    correct_answer: "AWS CloudTrail",
    incorrect_answers: ["Amazon CloudWatch", "AWS Config", "AWS Health"],
    note:
      "AWS CloudTrail is a web service that records AWS API calls for your account and delivers log files to you. The recorded information includes the identity of the API caller, the time of the API call, the source IP address of the API caller, the request parameters, and the response elements returned by the AWS service. CloudWatch focuses on the activity of AWS services and resources, reporting on their health and performance. On the other hand, CloudTrail is a log of all actions that have taken place inside your AWS environment.",
  },
  {
    question:
      "Which of the following are characteristics of Amazon S3? (Choose two.) A. A global file system, B. An object store, C. A local file store, D. A network file system, E. A durable storage system",
    answers: ["AE", "BD", "CE", "BE"],
    correct_answer: "BE",
    incorrect_answers: ["AE", "BD", "CE"],
    note:
      "Amazon Simple Storage Service (S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. This means customers of all sizes and industries can use it to store and protect any amount of data for a range of use case, such as websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics. Amazon S3 provides easy-to-use management features so you can organize your data and configure finely-tuned access controls to meet your specific business, organizational, and compliance requirements. Amazon S3 is designed for 99.999999999% (11 9's) of durability, and stores data for millions of applications for companies all around the world.",
  },
  {
    question:
      "Which services can be used across hybrid AWS Cloud architectures? (Choose two.) A. Amazon Route 53, B. Virtual Private Gateway, C. Classic Load Balancer, D. Auto Scaling, E. Amazon CloudWatch default metrics",
    answers: ["AB", "BD", "CE", "AD"],
    correct_answer: "AB",
    incorrect_answers: ["BD", "CE", "AD"],
    note:
      "With AWS Direct Connect customers can establish a private virtual interface from their on-premise network directly to their Amazon VPC. Amazon Route 53 is a highly available, scalable DNS web service. With Amazon Route 53 Resolver customers get recursive DNS for their Amazon VPC and on-premises networks over AWS Direct Connect or AWS Managed VPN.",
  },
  {
    question:
      "What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?",
    answers: [
      "Project management",
      "Antivirus software licensing",
      "Data center security",
      "Software development",
    ],
    correct_answer: "Data center security",
    incorrect_answers: [
      "Project management",
      "Antivirus software licensing",
      "Software development",
    ],
    note: "",
  },
  {
    question:
      "A company is considering using AWS for a self-hosted database that requires a nightly shutdown for maintenance and cost-saving purposes. Which service should the company use?",
    answers: [
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store",
      "Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)",
    ],
    correct_answer: "Amazon EC2 with Amazon Elastic Block Store (Amazon EBS)",
    incorrect_answers: [
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon Elastic Compute Cloud (Amazon EC2) with Amazon EC2 instance store",
    ],
    note:
      "Some Amazon Elastic Compute Cloud (Amazon EC2) instance types come with a form of directly attached, block-device storage known as the instance store. The instance store is ideal for temporary storage, because the data stored in instance store volumes is not persistent through instance stops, terminations, or hardware failures. For data you want to retain longer, or if you want to encrypt the data, use Amazon Elastic Block Store (Amazon EBS) volumes instead. EBS volumes preserve their data through instance stops and terminations, can be easily backed up with EBS snapshots, can be removed from one instance and reattached to another, and support full-volume encryption.",
  },
];
