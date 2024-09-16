import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface compute_getRegionNetworkEndpointGroupServerlessDeployment {
  /*
The platform of the NEG backend target(s). Possible values:
API Gateway: apigateway.googleapis.com
*/
  platform?: string;

  /*
The user-defined name of the workload/instance. This value must be provided explicitly or in the urlMask.
The resource identified by this value is platform-specific and is as follows: API Gateway: The gateway ID, App Engine: The service name,
Cloud Functions: The function name, Cloud Run: The service name
*/
  resource?: string;

  /*
A template to parse platform-specific fields from a request URL. URL mask allows for routing to multiple resources
on the same serverless platform without having to create multiple Network Endpoint Groups and backend resources.
The fields parsed by this template are platform-specific and are as follows: API Gateway: The gateway ID,
App Engine: The service and version, Cloud Functions: The function name, Cloud Run: The service and tag
*/
  urlMask?: string;

  /*
The optional resource version. The version identified by this value is platform-specific and is follows:
API Gateway: Unused, App Engine: The service version, Cloud Functions: Unused, Cloud Run: The service tag
*/
  version?: string;
}

export function compute_getRegionNetworkEndpointGroupServerlessDeployment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'platform',
      'The platform of the NEG backend target(s). Possible values:\nAPI Gateway: apigateway.googleapis.com',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'resource',
      'The user-defined name of the workload/instance. This value must be provided explicitly or in the urlMask.\nThe resource identified by this value is platform-specific and is as follows: API Gateway: The gateway ID, App Engine: The service name,\nCloud Functions: The function name, Cloud Run: The service name',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'urlMask',
      'A template to parse platform-specific fields from a request URL. URL mask allows for routing to multiple resources\non the same serverless platform without having to create multiple Network Endpoint Groups and backend resources.\nThe fields parsed by this template are platform-specific and are as follows: API Gateway: The gateway ID,\nApp Engine: The service and version, Cloud Functions: The function name, Cloud Run: The service and tag',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'version',
      'The optional resource version. The version identified by this value is platform-specific and is follows:\nAPI Gateway: Unused, App Engine: The service version, Cloud Functions: Unused, Cloud Run: The service tag',
      () => [],
      true,
      false,
    ),
  ];
}
