import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  redshiftserverless_getWorkgroupEndpointVpcEndpoint,
  redshiftserverless_getWorkgroupEndpointVpcEndpoint_GetTypes,
} from './redshiftserverless_getWorkgroupEndpointVpcEndpoint';

export interface redshiftserverless_getWorkgroupEndpoint {
  // The DNS address of the VPC endpoint.
  address?: string;

  // The port that Amazon Redshift Serverless listens on.
  port?: number;

  // The VPC endpoint or the Redshift Serverless workgroup. See `VPC Endpoint` below.
  vpcEndpoints?: Array<redshiftserverless_getWorkgroupEndpointVpcEndpoint>;
}

export function redshiftserverless_getWorkgroupEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'address',
      'The DNS address of the VPC endpoint.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'port',
      'The port that Amazon Redshift Serverless listens on.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'vpcEndpoints',
      'The VPC endpoint or the Redshift Serverless workgroup. See `VPC Endpoint` below.',
      () => redshiftserverless_getWorkgroupEndpointVpcEndpoint_GetTypes(),
      true,
      false,
    ),
  ];
}
