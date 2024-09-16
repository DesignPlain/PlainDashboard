import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  redshiftserverless_WorkgroupEndpointVpcEndpoint,
  redshiftserverless_WorkgroupEndpointVpcEndpoint_GetTypes,
} from './redshiftserverless_WorkgroupEndpointVpcEndpoint';

export interface redshiftserverless_WorkgroupEndpoint {
  // The DNS address of the VPC endpoint.
  address?: string;

  // The port number on which the cluster accepts incoming connections.
  port?: number;

  // The VPC endpoint or the Redshift Serverless workgroup. See `VPC Endpoint` below.
  vpcEndpoints?: Array<redshiftserverless_WorkgroupEndpointVpcEndpoint>;
}

export function redshiftserverless_WorkgroupEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'address',
      'The DNS address of the VPC endpoint.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'port',
      'The port number on which the cluster accepts incoming connections.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'vpcEndpoints',
      'The VPC endpoint or the Redshift Serverless workgroup. See `VPC Endpoint` below.',
      () => redshiftserverless_WorkgroupEndpointVpcEndpoint_GetTypes(),
      false,
      false,
    ),
  ];
}
