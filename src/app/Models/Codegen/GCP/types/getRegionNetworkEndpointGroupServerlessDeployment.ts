export interface getRegionNetworkEndpointGroupServerlessDeployment {
  /*
The optional resource version. The version identified by this value is platform-specific and is follows:
API Gateway: Unused, App Engine: The service version, Cloud Functions: Unused, Cloud Run: The service tag
*/
  Version?: string;

  /*
The platform of the NEG backend target(s). Possible values:
API Gateway: apigateway.googleapis.com
*/
  Platform?: string;

  /*
The user-defined name of the workload/instance. This value must be provided explicitly or in the urlMask.
The resource identified by this value is platform-specific and is as follows: API Gateway: The gateway ID, App Engine: The service name,
Cloud Functions: The function name, Cloud Run: The service name
*/
  Resource?: string;

  /*
A template to parse platform-specific fields from a request URL. URL mask allows for routing to multiple resources
on the same serverless platform without having to create multiple Network Endpoint Groups and backend resources.
The fields parsed by this template are platform-specific and are as follows: API Gateway: The gateway ID,
App Engine: The service and version, Cloud Functions: The function name, Cloud Run: The service and tag
*/
  UrlMask?: string;
}
