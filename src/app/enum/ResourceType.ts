export enum ResourceType {
  Lambda,
  Database,
  EC2,
  Simple_Storage_Service,
  SQS,
  Elastic_Load_Balancer,
  APIGateway,
  Virtual_Private_Cloud,
  Subnet,
  DynamoDB,
}

export enum ProviderType {
  UNKNOWN = 0,
  GCP = 1,
  AWS = 2,
  AZURE = 4,
}