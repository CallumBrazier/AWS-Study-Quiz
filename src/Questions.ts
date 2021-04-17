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
    note: "",
  },
  {
    question:
      "What are the benefits of using Amazon EC2 instances compared to physical servers in your infrastructure? A) Resizable, B) The ability to hot-add additional RAM, C) Automatic automated backups, D) Pay only for the capacity you use, E) The ability to have different storage requirements. (Choose 3)",
    answers: ["A, D, E", "A, B, E", "B, C, E", "B, C, D"],
    correct_answer: "A, D, E",
    incorrect_answers: ["A, B, E", "B, C, E", "B, C, D"],
    note:
      "Amazon Elastic Compute Cloud is a web service that provides secure, resizable compute capacity in the cloud. Amazon EC2 reduces the time required to obtain and boot new server instances (called Amazon EC2 instances) to minutes, allowing you to quickly scale, both up and down, as your computing requirements change. Amazon EC2 changes the economics of computing by allowing you to pay only for the capacity that you actually use.",
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
    note:
      "Elastic Load Balancing (ELB) automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, and IP addresses. Elastic Load Balancing offers three types of load balancers that all feature the high availability, automatic scaling, and robust security necessary to make your applications fault tolerant. Application Load Balancer: is best suited for load balancing of HTTP and HTTPS traffic and provides advanced request routing targeted at the delivery of modern application architectures, including microservices and containers. Operating at the individual request level (Layer 7), Application Load Balancer routes traffic to targets within Amazon VPC based on the content of the request. Network Load Balancer: is best suited for load balancing of TCP traffic where extreme performance is required. Operating at the connection level (layer 4), Network Load Balancer routes traffic to targets within Amazon VPC and is capable of handling millions of requests. Classic Load Balancer: provides basic load balancing across multiple Amazon EC2 instances and operates at both the request level and connection level. Classic Load Balancer is intended for applications that were built within the EC2-Classic Network.",
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
    note:
      "Amazon DynamoDB is a key-value and document database (NoSQL database) that delivers single-digit millisecond performance at any scale. It's a full managed, multiregion, multimaster database with built-in security, backup and restore, and in-memory caching for internet-scale applications. DynamoDB can handle more than 10 trillion requests per day and support peaks of more than 20 million requests per second.",
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
    note:
      "AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume - there is no charge when your code is not running. With Lambda, you can run code for virtually any type of application or backend service - all with zero administration. Just upload your code and Lambda takes care of everything required to run and scale your code with high availability. ",
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
    note: "",
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
    note:
      "AWS Cost Explorer has an easy-to-use interface that lets you visualise, understand, and manage your costs and usage over time.",
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
    note:
      "The five pillars are Opertional Excellence, Security, Reliability, Performance Efficiency, and Cost Optimisation.",
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
  {
    question:
      "Under the shared responsibility model, what are examples of shared controls? (Select TWO) A) Service and Communications Protection, B) Patch management, C) Storage system patching, D) Physical and environmental, E) Configuration management",
    answers: ["AB", "CD", "BE", "AD"],
    correct_answer: "BE",
    incorrect_answers: ["AB", "CD", "AD"],
    note:
      "Shared Controls– Controls which apply to both the infrastructure layer and customer layers, but in completely separate contexts or perspectives. Patch Management– AWS is responsible for patching and fixing flaws within the infrastructure, but customers are responsible for patching their guest OS and applications. Configuration Management– AWS maintains the configuration of its infrastructure devices, but a customer is responsible for configuring their own guest operating systems, databases, and applications. Storage system patching is an AWS responsibility. Physical and Environmental controls is an example of an inherited control (a customer fully inherits from AWS). Service and Communications Protection is an example of a customer specific control.",
  },
  {
    question:
      "Which AWS service lets you add user sign up, sign-in and access control to web and mobile apps?",
    answers: [
      "AWS Directory Service",
      "Amazon Cognito",
      "AWS Artifact",
      "AWS CloudHSM",
    ],
    correct_answer: "Amazon Cognito",
    incorrect_answers: [
      "AWS Directory Service",
      "AWS Artifact",
      "AWS CloudHSM",
    ],
    note:
      "Amazon Cognito lets you add user sign-up, sign-in, and access control to your web and mobile apps quickly and easily. Amazon Cognito scales to millions of users and supports sign-in with social identity providers, such as Facebook, Google, and Amazon, and enterprise identity providers via SAML 2.0. AWS Artifact is your go-to, central resource for compliance-related information that matters to you. AWS CloudHSM is a cloud-based hardware security module (HSM) that enables you to easily generate and use your own encryption keys on the AWS Cloud. AWS Directory Service for Microsoft Active Directory, also known as AWS Managed Microsoft AD, enables your directory-aware workloads and AWS resources to use managed Active Directory in the AWS Cloud.",
  },
  {
    question:
      "Which of the statements below is correct in relation to Consolidated Billing? (Select TWO) A) You receive one bill per AWS account, B) You receive a single bill for multiple accounts, C) You are charged a fee per user, D) You pay a fee per linked account, E) You can combine usage and share volume pricing discounts",
    answers: ["AE", "BE", "CD", "AC"],
    correct_answer: "BE",
    incorrect_answers: ["AE", "CD", "AC"],
    note:
      "Consolidated billing has the following benefits: One bill – You get one bill for multiple accounts. Easy tracking – You can track the charges across multiple accounts and download the combined cost and usage data. Combined usage – You can combine the usage across all accounts in the organization to share the volume pricing discounts and Reserved Instance discounts. This can result in a lower charge for your project, department, or company than with individual standalone accounts.",
  },
  {
    question:
      "Which of the facts below are accurate in relation to AWS Regions? (Select TWO) A) Each region consists of 2 or more availability zones, B) Each region consists of a collection of VPCs, C) Regions are Content Delivery Network (CDN) endpoints for CloudFront, D) Regions have direct, low-latency, high throughput and redundant network connections between each other, E) Each region is designed to be completely isolated from the other Amazon Regions",
    answers: ["CD", "AE", "AB", "BD"],
    correct_answer: "AE",
    incorrect_answers: ["CD", "AB", "BD"],
    note:
      "Availability Zones (not regions) have direct, low-latency, high throughput and redundant network connections between each other. Each AWS Region consist of 2 or more Availability Zones. AWS Regions are geographical areas and each AWS Region is designed to be completely isolated from other AWS Regions. Edge locations (not regions) are Content Delivery Network (CDN) endpoints for CloudFront",
  },
  {
    question:
      "Which statement is true in relation to data stored within an AWS Region?",
    answers: [
      "Data is always replicated to another region",
      "Data is not replicated outside of a region unless you configure it",
      "Data is automatically archived after 90 days",
      "Data is always automatically replicated to at least one other availability zone",
    ],
    correct_answer:
      "Data is not replicated outside of a region unless you configure it",
    incorrect_answers: [
      "Data is always replicated to another region",
      "Data is automatically archived after 90 days",
      "Data is always automatically replicated to at least one other availability zone",
    ],
    note:
      "Data stored within an AWS region is not replicated outside of that region automatically. It is up to customers of AWS to determine whether they want to replicate their data to other regions. You must always consider compliance and network latency when making this decision. Data is never automatically archived. You must configure data to be archived. Data is not automatically replicated to at least one availability zone – this is specific to each service and you must check how your data is stored and whether the availability and durability is acceptable.",
  },
  {
    question:
      "Which service allows you to automatically expand and shrink your application in response to demand?",
    answers: [
      "AWS ElastiCache",
      "Amazon Elastic Load Balancing",
      "Amazon EC2 Auto Scaling",
      "Amazon DynamoDB",
    ],
    correct_answer: "Amazon EC2 Auto Scaling",
    incorrect_answers: [
      "AWS ElastiCache",
      "Amazon Elastic Load Balancing",
      "Amazon DynamoDB",
    ],
    note:
      "Amazon EC2 Auto Scaling automatically responds to demand by adding or removing EC2 instances to ensure the right amount of compute capacity is available at any time. This can help to automatically adjust the number of instances based on the load on your application. AWS ElastiCache provides in-memory cache and database services. Amazon ELB distributes incoming requests to EC2 instances. It can be used in conjunction with Auto Scaling. DynamoDB is a non-relational (NoSQL).",
  },
  {
    question:
      "Which AWS program can help an organization to design, build, and manage their workloads on AWS?",
    answers: [
      "APN Technology Consultants",
      "AWS Technical Account Manager",
      "APN Consulting Partners",
      "AWS Business Development Manager",
    ],
    correct_answer: "APN Consulting Partners",
    incorrect_answers: [
      "APN Technology Consultants",
      "AWS Technical Account Manager",
      "AWS Business Development Manager",
    ],
    note:
      "APN Consulting Partners are professional services firms that help customers of all sizes design, architect, build, migrate, and manage their workloads and applications on AWS. Consulting Partners include System Integrators (SIs), Strategic Consultancies, Agencies, Managed Service Providers (MSPs), and Value-Added Resellers (VARs). None of the other options are AWS Programs that can assist a customer with the design, build and management of their workloads.",
  },
  {
    question:
      "You need to ensure you have the right amount of compute available to service demand. Which AWS service can automatically scale the number of EC2 instances for your application?",
    answers: [
      "Amazon ElastiCache",
      "Amazon Elastic Load Balancer",
      "Amazon EC2 Auto Scaling",
      "Amazon RedShift",
    ],
    correct_answer: "Amazon EC2 Auto Scaling",
    incorrect_answers: [
      "Amazon ElastiCache",
      "Amazon Elastic Load Balancer",
      "Amazon RedShift",
    ],
    note:
      "Auto Scaling automates the process of adding (scaling up) OR removing (scaling down) EC2 instances based on the traffic demand for your application. ELB automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, and IP addresses. Amazon ElastiCache offers fully managed Redis and Memcached database services. Amazon Redshift is a fast, scalable data warehouse that makes it simple and cost-effective to analyze all your data across your data warehouse and data lake.",
  },
  {
    question:
      "Which AWS services can be utilized at no cost? (Select TWO) A) Identity and Access Management (IAM), B) Amazon VPC, C) Amazon CloudFront, D) Amazon RedShift, E) Amazon S3",
    answers: ["AE", "AB", "DC", "BE"],
    correct_answer: "AB",
    incorrect_answers: ["AE", "DC", "BE"],
    note:
      "AWS offer many services without charge. These include the AWS IAM services for creating users, groups, roles and policies and the Amazon VPC service for creating virtual private clouds, subnets, route tables etc.",
  },
  {
    question:
      "Which of the following would be good reasons to move from on-premises to the AWS Cloud? (Select TWO) A) Outsource all security responsibility, B) Reduce costs through easier right-sizing of workloads, C) Gain access to free technical support services, D) Improve agility and elasticity, E) Gain end-to-end operational management of the entire infrastructure stack",
    answers: ["AE", "BC", "BD", "AC"],
    correct_answer: "BD",
    incorrect_answers: ["AE", "BC", "AC"],
    note:
      "There are many benefits to moving to the AWS Cloud and these include reducing costs through right-sizing workloads. This is easier with elastic computing and the ability to easily adjust workloads, monitor utilization and programmatically make changes. You can improve agility and elasticity through services such as Auto Scaling, Elastic Load Balancing and highly scalable services such as S3 and Lambda. You do not get free technical support services with AWS. You do not gain end-to-end operational management of your entire infrastructure stack. AWS manage the infrastructure and, for some services, the application too. You do not outsource all security responsibility with AWS – you are still responsible for ensuring the security of your applications, users, and data.",
  },
  {
    question:
      "Which service allows an organization to view operational data from multiple AWS services through a unified user interface and automate operational tasks?",
    answers: [
      "AWS Config",
      "AWS Systems Manager",
      "Amazon CloudWatch",
      "AWS OpsWorks",
    ],
    correct_answer: "AWS Systems Manager",
    incorrect_answers: ["AWS Config", "Amazon CloudWatch", "AWS OpsWorks"],
    note:
      "AWS Systems Manager gives you visibility and control of your infrastructure on AWS. Systems Manager provides a unified user interface so you can view operational data from multiple AWS services and allows you to automate operational tasks across your AWS resources. AWS Config is a fully-managed service that provides you with an AWS resource inventory, configuration history, and configuration change notifications to enable security and regulatory compliance. AWS OpsWorks is a configuration management service that provides managed instances of Chef and Puppet. Amazon CloudWatch is a monitoring service for AWS cloud resources and the applications you run on AWS. You use CloudWatch for performance monitoring, not automating operational tasks.",
  },
  {
    question:
      "With which service can a developer upload code using a ZIP or WAR file and have the service handle the end-to-end deployment of the resources?",
    answers: [
      "Amazon ECS",
      "AWS CodeCommit",
      "AWS Elastic Beanstalk",
      "AWS CodeDeploy",
    ],
    correct_answer: "AWS Elastic Beanstalk",
    incorrect_answers: ["Amazon ECS", "AWS CodeCommit", "AWS CodeDeploy"],
    note:
      "AWS Elastic Beanstalk can be used to quickly deploy and manage applications in the AWS Cloud. Developers upload applications and Elastic Beanstalk handles the deployment details of capacity provisioning, load balancing, auto-scaling, and application health monitoring. You can upload code directly using a ZIP or WAR file. You can also use a Git archive. AWS CodeDeploy is a fully managed deployment service that automates software deployments to a variety of compute services such as Amazon EC2, AWS Lambda, and on-premises servers. Amazon Elastic Container Service is a managed service for running Docker containers. AWS CodeCommit is a fully-managed source control service that hosts secure Git-based repositories. It does not actually automate the build of the code or infrastructure on which it runs.",
  },
  {
    question:
      "How does AWS assist organizations’ with their capacity requirements?",
    answers: [
      "With AWS you only pay for what you use",
      "You don’t need to guess your capacity needs",
      "You don’t own the infrastructure",
      "With AWS you don’t pay for data centres",
    ],
    correct_answer: "You don’t need to guess your capacity needs",
    incorrect_answers: [
      "With AWS you only pay for what you use",
      "You don’t own the infrastructure",
      "With AWS you don’t pay for data centres",
    ],
    note:
      "All of these statements are true. However, the question is specifically asking how AWS can assist with capacity requirements. i.e. how does AWS enable organizations to ensure they don’t over or under-provision their resources? The ability to scale on demand is the key advantage that can help them here as they can deploy what they know they need today and scale it as they need to tomorrow.",
  },
  {
    question:
      "Which AWS support plan comes with a Technical Account Manager (TAM)?",
    answers: ["Enterprise", "Business", "Developer", "Basic"],
    correct_answer: "Enterprise",
    incorrect_answers: ["Business", "Developer", "Basic"],
    note: "Only the Enterprise plan comes with a TAM.",
  },
  {
    question:
      "What architectural best practice aims to reduce the interdependencies between services?",
    answers: [
      "Loose Coupling",
      "Services, Not Servers",
      "Removing Single Points of Failure",
      "Automation",
    ],
    correct_answer: "Loose Coupling",
    incorrect_answers: [
      "Services, Not Servers",
      "Removing Single Points of Failure",
      "Automation",
    ],
    note:
      "As application complexity increases, a desirable attribute of an IT system is that it can be broken into smaller, loosely coupled components. This means that IT systems should be designed in a way that reduces interdependencies—a change or a failure in one component should not cascade to other components. The concept of loose coupling includes “well-defined interfaces” which reduce interdependencies in a system by enabling interaction only through specific, technology-agnostic interfaces (e.g. RESTful APIs). Services, not servers - This best practice encourages the use of a wider variety of AWS services in your application architectures. Removing single points of failure - This best practice aims to increase system availability. Automation - This best practice encourages the use of automation for efficiency and consistency",
  },
  {
    question:
      "Which of the below are components that can be configured in the VPC section of the AWS management console? (Select TWO) A) EBS volumes, B) Endpoints, C) Elastic Load Balancer, D) DNS records, E) Subnet",
    answers: ["AE", "CD", "BE", "AC"],
    correct_answer: "BE",
    incorrect_answers: ["AE", "CD", "AC"],
    note:
      "You can configure subnets and endpoints within the VPC section of AWS management console. EBS volumes and ELB must be configured in the EC2 section of the AWS management console and DNS records must be configured in Amazon Route 53.",
  },
  {
    question:
      "Which aspects of security on AWS are customer responsibilities? (Select TWO) A) Setting up account password policies, B) Availability of AWS regions, C) Server-side encryption, D) Physical access controls, E) Patching of storage systems",
    answers: ["AD", "BE", "CE", "AC"],
    correct_answer: "AC",
    incorrect_answers: ["AD", "BE", "CE"],
    note:
      "AWS are responsible for the “security of the cloud”. This includes protecting the infrastructure that runs all of the services offered in the AWS Cloud. This infrastructure is composed of the hardware, software, networking, and facilities that run AWS Cloud services. The customer is responsible for “security in the cloud”. Customer responsibility depends on the service consumed but includes aspects such as Identity and Access Management (includes password policies), encryption of data, protection of network traffic, and operating system, network and firewall configuration.",
  },
  {
    question:
      "What are two ways that moving to an AWS cloud can benefit an organization? (Select TWO) A) Switch to a CAPEX model, B) Depreciate assets over a longer timeframe, C) Gain greater control of data center security, D) Increase speed and agility, E) Stop guessing about capacity",
    answers: ["DE", "AD", "BE", "AC"],
    correct_answer: "DE",
    incorrect_answers: ["AD", "BE", "AC"],
    note:
      "Increase speed and agility - In a cloud computing environment, new IT resources are only a click away, which means that you reduce the time to make those resources available to your developers from weeks to just minutes. This results in a dramatic increase in agility for the organization, since the cost and time it takes to experiment and develop is significantly lower. Stop guessing about capacity - Eliminate guessing on your infrastructure capacity needs. When you make a capacity decision prior to deploying an application, you often end up either sitting on expensive idle resources or dealing with limited capacity. With cloud computing, these problems go away. You can access as much or as little capacity as you need, and scale up and down as required with only a few minutes’ notice. Switch to a CAPEX model - Cloud is based on an operational expenditure (OPEX) model, not a capital expenditure (CAPEX) model. Depreciate assets over a longer timeframe - Cloud does not provide the ability to depreciate assets over a longer timeframe as you generally do not own the assets. Gain greater control of data center security - Though the AWS cloud does provide significant security standards for the data center, you do not get more control as this is an AWS responsibility.",
  },
  {
    question:
      "Which type of storage stores objects comprised of key, value pairs?",
    answers: ["Amazon DynamoDB", "Amazon EFS", "Amazon S3", "Amazon EBS"],
    correct_answer: "Amazon S3",
    incorrect_answers: ["Amazon DynamoDB", "Amazon EFS", "Amazon EBS"],
    note:
      "Amazon Simple Storage Service is storage for the Internet. It is designed to make web-scale computing easier for developers. Amazon S3 is an object-based storage system that stores objects that are comprised of key, value pairs. Amazon DynamoDB stores items, not objects, based on key, value pairs. Amazon EBS is a block-based storage system. Amazon EFS is a file-based storage system.",
  },
  {
    question:
      "An Amazon EC2 instance running the Amazon Linux 2 AMI is billed in what increment?",
    answers: ["Per GB", "Per CPU", "Per hour", "Per second"],
    correct_answer: "Per second",
    incorrect_answers: ["Per GB", "Per CPU", "Per hour"],
    note:
      "Amazon EC2 instances running Linux are billed in one second increments, with a minimum of 60 seconds. You pay for Amazon EBS on a per GB of provisioned storage basis.",
  },
  {
    question: "A characteristic of edge locations is that they:",
    answers: [
      "Host Amazon EC2 instances closer to users",
      "Help lower latency and improve performance for users",
      "Cache frequently changing data without reaching the origin server",
      "Refresh data changes daily",
    ],
    correct_answer:
      "Cache frequently changing data without reaching the origin server",
    incorrect_answers: [
      "Host Amazon EC2 instances closer to users",
      "Help lower latency and improve performance for users",
      "Refresh data changes daily",
    ],
    note:
      "An edge location is a site that CloudFront uses to cache copies of your content for faster delivery to users at any location. Edge locations serve requests for CloudFront and Route 53. CloudFront is a content delivery network, while Route 53 is a DNS service. Requests going to either one of these services will be routed to the nearest edge location automatically. This allows for low latency no matter where the end user is located. The key characteristic of Edge Locations is that they cache data, and the outcome of this is lower latency.",
  },
  {
    question:
      "Which of the following can limit Amazon Storage Service (Amazon S3) bucket access to specific users?",
    answers: [
      "A public and private key-pair",
      "Amazon Inspector",
      "AWS Identity and Access Management (IAM) policies",
      "Security Groups",
    ],
    correct_answer: "AWS Identity and Access Management (IAM) policies",
    incorrect_answers: [
      "A public and private key-pair",
      "Amazon Inspector",
      "Security Groups",
    ],
    note: "",
  },
  {
    question:
      "Which of the following security-related actions are available at no cost?",
    answers: [
      "Calling AWS Support",
      "Contacting AWS Professional Services to request a workshop",
      "Accessing forums, blogs, and whitepapers",
      "Attending AWS classes at a local university",
    ],
    correct_answer: "Accessing forums, blogs, and whitepapers",
    incorrect_answers: [
      "Calling AWS Support",
      "Contacting AWS Professional Services to request a workshop",
      "Attending AWS classes at a local university",
    ],
    note: "",
  },
  {
    question:
      "According to best practices, how should an application be designed to run in the AWS Cloud?",
    answers: [
      "Use tightly coupled components",
      "Use loosely coupled components",
      "Use infrequently coupled components",
      "Use frequently coupled components",
    ],
    correct_answer: "Use loosely coupled components",
    incorrect_answers: [
      "Use tightly coupled components",
      "Use infrequently coupled components",
      "Use frequently coupled components",
    ],
    note:
      "As application complexity increases, a desirable attribute of an IT system is that it can be broken into smaller, loosely coupled components. This means that IT systems should be designed in a way that reduces interdependencies—a change or a failure in one component should not cascade to other components.",
  },
  {
    question:
      "Which is a recommended pattern for designing a highly available architecture on AWS?",
    answers: [
      "Ensure that components have low-latency network connectivity",
      "Run enough Amazon EC2 instances to operate at peak load",
      "Ensure that the application is designed to accommodate failure of any single component",
      "Use a monolithic application that handles all operations",
    ],
    correct_answer:
      "Ensure that the application is designed to accommodate failure of any single component",
    incorrect_answers: [
      "Ensure that components have low-latency network connectivity",
      "Run enough Amazon EC2 instances to operate at peak load",
      "Use a monolithic application that handles all operations",
    ],
    note:
      "Highly availablility falls under the reliability pillar of the well-architected framework. A key element of this is designing for failure of components within a workload to ensure resiliency - that the workload has high availability and that there is a low mean time to recovery if something does fail.",
  },
  {
    question:
      "Under the AWS shared responsibility model, which of the following activities are the customer's responsibility? (Choose TWO) A) Patching operating system components for Amazon Relational Database Server (Amazon RDS), B) Encrypting data on the client-side, C) Training the data center staff, D) Configuring Network Access Control Lists (ACL), E) Maintaining environmental controls within a data center",
    answers: ["AE", "BC", "DE", "BD"],
    correct_answer: "BD",
    incorrect_answers: ["AE", "BC", "DE"],
    note:
      "Customer Specific – Controls which are solely the responsibility of the customer based on the application they are deploying within AWS services. Examples include - Service and Communications Protection or Zone Security which may require a customer to route or zone data within specific security environments. The customer is also responsible for access management and data encryption.",
  },
  {
    question:
      "Which of the Reserved Instance (RI) pricing models can change the attributes of the RI as long as the exchange results in the creation of RIs of equal or greater value?",
    answers: [
      "Dedicated RIs",
      "Scheduled RIs",
      "Convertible RIs",
      "Standard RIs",
    ],
    correct_answer: "Convertible RIs",
    incorrect_answers: ["Dedicated RIs", "Scheduled RIs", "Standard RIs"],
    note:
      "With RIs, you can choose the type that best fits your applications needs. Standard RIs: These provide the most significant discount (up to 72% off On-Demand) and are best suited for steady-state usage. Convertible RIs: These provide a discount (up to 54% off On-Demand) and the capability to change the attributes of the RI as long as the exchange results in the creation of Reserved Instances of equal or greater value. Like Standard RIs, Convertible RIs are best suited for steady-state usage. Scheduled RIs: These are available to launch within the time windows you reserve. This option allows you to match your capacity reservation to a predictable recurring schedule that only requires a fraction of a day, a week, or a month.",
  },
  {
    question:
      "Which AWS feature will reduce the customer's total cost of ownership (TCO)?",
    answers: [
      "Shared responsibility security model",
      "Single tenancy",
      "Elastic computing",
      "Encryption",
    ],
    correct_answer: "Elastic computing",
    incorrect_answers: [
      "Shared responsibility security model",
      "Single tenancy",
      "Encryption",
    ],
    note: "",
  },
  {
    question:
      "hich of the following services will automatically scale with an expected increase in web traffic?",
    answers: [
      "AWS CodePipeline",
      "Elastic Load Balancing",
      "Amazon EBS",
      "AWS Direct Connect",
    ],
    correct_answer: "Elastic Load Balancing",
    incorrect_answers: ["AWS CodePipeline", "Amazon EBS", "AWS Direct Connect"],
    note:
      "Elastic Load Balancing provides confidence that your applications will scale to the demands of your customers. With the ability to trigger Auto Scaling for your Amazon EC2 instance fleet when latency of any one of your EC2 instances exceeds a preconfigured threshold, your applications will always be ready to serve the next customer request",
  },
  {
    question:
      "Where are AWS compliance documents, such as an SOC 1 report, located?",
    answers: [
      "Amazon Inspector",
      "AWS CloudTrail",
      "AWS Artifact",
      "AWS Certificate Manager",
    ],
    correct_answer: "AWS Artifact",
    incorrect_answers: [
      "Amazon Inspector",
      "AWS CloudTrail",
      "AWS Certificate Manager",
    ],
    note:
      "AWS Artifact is your go-to, central resource for compliance-related information that matters to you. It provides on-demand access to AWS’ security and compliance reports and select online agreements. Reports available in AWS Artifact include our Service Organization Control (SOC) reports, Payment Card Industry (PCI) reports, and certifications from accreditation bodies across geographies and compliance verticals that validate the implementation and operating effectiveness of AWS security controls. Agreements available in AWS Artifact include the Business Associate Addendum (BAA) and the Nondisclosure Agreement (NDA).",
  },
  {
    question:
      "AWS supports which of the following methods to add security to Identity and Access Management (IAM) users? (Choose TWO) A) Implementing Amazon Rekognition, B) Using AWS Shield-protected resources, C) Blocking access with Security Groups, D) Using Multi-Factor Authentication (MFA), E) Enforcing password strength and expiration",
    answers: ["AB", "BC", "CD", "DE"],
    correct_answer: "DE",
    incorrect_answers: ["AB", "BC", "CD"],
    note:
      "Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. This can easily be set up within IAM, along with policies to enforce password strength and expiration in line with your company's security requirements. Amazon Rekognition is a service that makes it easy to add image analysis to your applications. With Rekognition, you can detect objects, scenes, and faces in images. AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards web applications running on AWS. A security group acts as a virtual firewall for your EC2 instances to control incoming and outgoing traffic.",
  },
  {
    question:
      "Which AWS services should be used for read/write of constantly changing data? (Choose TWO) A) Amazon Glacier, B) Amazon RDS, C) AWS Snowball, D) Amazon Redshift, E) Amazon EFS",
    answers: ["AE", "BE", "CD", "AC"],
    correct_answer: "BE",
    incorrect_answers: ["AE", "CD", "AC"],
    note:
      "Amazon Relational Database Service makes it easy to set up, operate, and scale a relational database in the cloud. Amazon RDS is available on serveral database instance types - optimised for memory, performance, and Input/Output (read/write). Amazon Elastic File System (Amazon EFS) provides a simple, scalable, elastic file system for Linux-based workloads for use with AWS Cloud services and on-premises resources.  With Amazon EFS, you can grow and shrink your file systems automatically as you add and remove files, eliminating the need to provision and manage capacity to accommodate growth. Glacier is used for archival storage of data, not for frequently changing data. AWS Snowball is a petabye-scale data transport solution that uses secure appliances to transfer large amounts of data into and out of AWS. Amazon Redshift is a fast, scalable data warehouse that makes it simple and cost-effective to analyze all your data across your data warehouse and data lake.",
  },
  {
    question:
      "What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?",
    answers: [
      "It simplifies relational database administration tasks",
      "It provides 99.99999999999% reliability and durability",
      "It automatically scales databases for loads",
      "It enables users to dynamically adjust CPU and RAM resources",
    ],
    correct_answer: "It simplifies relational database administration tasks",
    incorrect_answers: [
      "It provides 99.99999999999% reliability and durability",
      "It automatically scales databases for loads",
      "It enables users to dynamically adjust CPU and RAM resources",
    ],
    note:
      "Amazon Relational Database Service makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while automating time-consuming administration tasks such as hardware provisioning, database setup, patching and backups. 11 9s of durability relates to S3 object storage. RDS does not automatically scale for loads. Although CPU and RAM resources can be dynamically adjusted with RDS, the key advantage of RDS is that it simplifies the administration of completing such a task.",
  },
  {
    question:
      "A customer needs to run a MySQL database that easily scales. Which AWS service should they use?",
    answers: [
      "Amazon Aurora",
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon ElastiCache",
    ],
    correct_answer: "Amazon Aurora",
    incorrect_answers: [
      "Amazon Redshift",
      "Amazon DynamoDB",
      "Amazon ElastiCache",
    ],
    note:
      "Amazon Aurora is a MySQL and PostgreSQL compatible relational database engine that combines the speed and availability of high-end commercial database with the simplicity and cost-effectiveness of open source databases. Amazon Aurora features a distributed, fault-tolerant, self-healing storage system that auto-scales up to 64TB per database instance. Amazon Redshift is a fast, scalable data warehouse that makes it simple and cost-effective to analyze all your data across your data warehouse and data lake. Amazon DynamoDB is a key-value and document database (NoSQL database) that delivers single-digit millisecond performance at any scale. Amazon Elasticache is a web service that makes it easy to deploy, operate, and scale an in-memory cache in the cloud.",
  },
  {
    question:
      "Which of the following components of the AWS Global Infrastructure consists of one or more discrete data centers interconnected through low latency links?",
    answers: [
      "Availability Zone",
      "Edge location",
      "Region",
      "Private networking",
    ],
    correct_answer: "Availability Zone",
    incorrect_answers: ["Edge location", "Region", "Private networking"],
    note:
      "An Availability Zone (AZ) is one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region. Availability Zones are engineered to be isolated from failures in other Availability Zones. They provide inexpensive, low-latency network connectivity to other Availability Zones in the same AWS Region. Each region is completely independent.",
  },
  {
    question:
      "Which of the following is a shared control between the customer and AWS?",
    answers: [
      "Providing a key for Amazon S3 client-side encryption",
      "Configuration of an Amazon EC2 instance",
      "Environmental controls of physical AWS data centers",
      "Awareness and training",
    ],
    correct_answer: "Awareness and training",
    incorrect_answers: [
      "Providing a key for Amazon S3 client-side encryption",
      "Configuration of an Amazon EC2 instance",
      "Environmental controls of physical AWS data centers",
    ],
    note:
      "Inherited Controls – Controls which a customer fully inherits from AWS. Examples include: Physical and Environmental controls. Shared Controls – Controls which apply to both the infrastructure layer and customer layers, but in completely separate contexts or perspectives. In a shared control, AWS provides the requirements for the infrastructure and the customer must provide their own control implementation within their use of AWS services. Examples include: Patch Management – AWS is responsible for patching and fixing flaws within the infrastructure, but customers are responsible for patching their guest OS and applications. Configuration Management – AWS maintains the configuration of its infrastructure devices, but a customer is responsible for configuring their own guest operating systems, databases, and applications. Awareness & Training - AWS trains AWS employees, but a customer must train their own employees.",
  },
  {
    question:
      "How many Availability Zones should compute resources be provisioned across to achieve high availability?",
    answers: [
      "A minimum of one",
      "A minimum of two",
      "A minimum of three",
      "A minimum of four or more",
    ],
    correct_answer: "A minimum of two",
    incorrect_answers: [
      "A minimum of one",
      "A minimum of three",
      "A minimum of four or more",
    ],
    note: "",
  },
  {
    question:
      "One of the advantages to moving infrastructure from an on-premises data center to the AWS Cloud is:",
    answers: [
      "It allows the business to eliminate IT bills",
      "It allows the business to put a server in each customer's data center",
      "It allows the business to focus on business activities",
      "It allows the business to leave servers unpatched.",
    ],
    correct_answer: "It allows the business to focus on business activities",
    incorrect_answers: [
      "It allows the business to eliminate IT bills",
      "It allows the business to put a server in each customer's data center",
      "It allows the business to leave servers unpatched.",
    ],
    note:
      "A key concept of cloud computing (IaaS, PaaS, and SaaS) is that it reduces the administration and complexities of various IT tasks, which previously would have been performed on-premises. This allows businesses and their staff to focus on their customers needs and implement their business strategies. Moving to the AWS Cloud does not eliminate IT bills, however it may reduce them. ",
  },
  {
    question:
      "Which AWS IAM feature allows developers to access AWS services through the AWS CLI?",
    answers: ["API keys", "Access keys", "User names/Passwords", "SSH keys"],
    correct_answer: "Access keys",
    incorrect_answers: ["API keys", "User names/Passwords", "SSH keys"],
    note:
      "Access keys are long-term credentials for an IAM user or the AWS account root user. You can use access keys to sign programmatic requests to the AWS CLI or AWS API (directly or using the AWS SDK).",
  },
  {
    question: "What is an example of agility in the AWS Cloud?",
    answers: [
      "Access to multiple instance types",
      "Access to managed services",
      "Using Consolidated Billing to produce one bill",
      "Decreased acquisition time for new compute resources",
    ],
    correct_answer: "Decreased acquisition time for new compute resources",
    incorrect_answers: [
      "Access to multiple instance types",
      "Access to managed services",
      "Using Consolidated Billing to produce one bill",
    ],
    note:
      "Agility is the ability to respond to learning and changing circumstances, quickly and inexpensively, and is facilitated by rapid delivery cycles and feedback from the market.",
  },
  {
    question:
      "Which service should a customer use to consolidate and centrally manage multiple AWS accounts?",
    answers: [
      "AWS IAM",
      "AWS Organizations",
      "AWS Schema Conversion Tool",
      "AWS Config",
    ],
    correct_answer: "AWS Organizations",
    incorrect_answers: ["AWS IAM", "AWS Schema Conversion Tool", "AWS Config"],
    note:
      "AWS Organizations offers policy-based management for multiple AWS accounts. With Organizations, you can create groups of accounts, automate account creation, apply and manage policies for those groups. Using AWS Organizations, you can create Service Control Policies (SCPs) that centrally control AWS service use across multiple AWS accounts. Organizations helps simplify the billing for multiple accounts by enabling you to set up a single payment method for all the accounts in your organisaton through consolidated billing. This service is available for all AWS customers at no additional charge.",
  },
  {
    question:
      "What approach to transcoding a large number of individual video files adheres to AWS architecture principles?",
    answers: [
      "Using many instances in parallel",
      "Using a single large instance during off-peak hours",
      "Using dedicated hardware",
      "Using a large GPU instance type",
    ],
    correct_answer: "Using many instances in parallel",
    incorrect_answers: [
      "Using a single large instance during off-peak hours",
      "Using dedicated hardware",
      "Using a large GPU instance type",
    ],
    note:
      "Using instances in parallel applies the AWS architecture design prinicple of scaling horiziontally to increase aggregate workload availability (part of the Reliability pillar). A 'horizontally scalable' system is one that can increase capacity by adding more computers to the system. This is in contrast to a 'vertically scalable' system, which is constrained to running its processes on only one computer; in such systems the only way to increase performance is to add more resources into one computer in the form of faster (or more) CPUs, memory or storage. Horizontally scalable systems are oftentimes able to outperform vertically scalable systems by enabling parallel execution of workloads and distributing those across many different computers.",
  },
  {
    question: "For which auditing process does AWS have sole responsibility?",
    answers: [
      "AWS IAM policies",
      "Physical security",
      "Amazon S3 bucket policies",
      "AWS CloudTrail Logs",
    ],
    correct_answer: "Physical security",
    incorrect_answers: [
      "AWS IAM policies",
      "Amazon S3 bucket policies",
      "AWS CloudTrail Logs",
    ],
    note:
      "From the AWS Shared Responsibility Model: Inherited Controls – Controls which a customer fully inherits from AWS: Physical and Environmental controls. The AWS shared responsibility model applies to data protection in AWS CloudTrail. As described in this model, AWS is responsible for protecting the global infrastructure that runs all of the AWS Cloud. The customer is responsible for maintaining control over their content that is hosted on this infrastructure.",
  },
  {
    question:
      "Which feature of the AWS Cloud will support an international companyג€™s requirement for low latency to all of its customers?",
    answers: [
      "Fault tolerance",
      "Global reach",
      "Pay-as-you-go pricing",
      "High availability",
    ],
    correct_answer: "Global reach",
    incorrect_answers: [
      "Fault tolerance",
      "Pay-as-you-go pricing",
      "High availability",
    ],
    note: "",
  },
  {
    question:
      "Which of the following are features of Amazon CloudWatch Logs? (Choose TWO) A) Summaries by Amazon Simple Notification Service (Amazon SNS), B) Free Amazon Elasticsearch Service analytics, C) Provided at no charge, D) Real-time monitoring, E) Adjustable retention",
    answers: ["DE", "BD", "CE", "AB"],
    correct_answer: "DE",
    incorrect_answers: ["BD", "CE", "AB"],
    note:
      "You can use Amazon CloudWatch Logs to monitor, store, and access your log files from Amazon Elastic Compute Cloud (Amazon EC2) instances, AWS CloudTrail, Route 53, and other sources. CloudWatch Logs enables you to centralize the logs from all of your systems, applications, and AWS services that you use, in a single, highly scalable service. You can then easily view them, search them for specific error codes or patterns, filter them based on specific fields, or archive them securely for future analysis. CloudWatch Logs enables you to see all of your logs, regardless of their source, as a single and consistent flow of events ordered by time, and you can query them and sort them based on other dimensions, group them by specific fields, create custom computations with a powerful query language, and visualize log data in dashboards. By default, logs are kept indefinitely and never expire. You can adjust the retention policy for each log group, keeping the indefinite retention, or choosing a retention period between 10 years and one day.",
  },
  {
    question:
      "Which of the following is an AWS managed Domain Name System (DNS) web service?",
    answers: [
      "Amazon Route 53",
      "Amazon Neptune",
      "Amazon SageMaker",
      "Amazon Lightsail",
    ],
    correct_answer: "Amazon Route 53",
    incorrect_answers: [
      "Amazon Neptune",
      "Amazon SageMaker",
      "Amazon Lightsail",
    ],
    note:
      "Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service. It is designed to give developers and businesses an extremely reliable and cost-effective way to route end users to Internet applications by translating human readable names, such as www.example.com, into the numeric IP addresses, such as 192.0.2.1, that computers use to connect to each other. Amazon Route 53 is fully compliant with IPv6 as well. Amazon Route 53 effectively connects user requests to infrastructure running in AWS - such as EC2 instances, Elastic Load Balancing load balancers, or Amazon S3 buckets - and can also be used to route users to infrastructure outside of AWS. Amazon Route 53 also offers Domain Name Registration - you can purchase and manage domain names such as example.com and Amazon Route 53 will automatically configure DNS settings for your domains.",
  },
  {
    question:
      "A customer is deploying a new application and needs to choose an AWS Region. Which of the following factors could influence the customer's decision? (Choose TWO) A) Reduced latency to users, B) The applications presentation in the local language, C) Data sovereignty compliance, D) Cooling costs in hotter climates, E) Proximity to the customer's office for on-site visits",
    answers: ["AE", "CD", "BC", "AC"],
    correct_answer: "AC",
    incorrect_answers: ["AE", "CD", "BC"],
    note: "",
  },
];
