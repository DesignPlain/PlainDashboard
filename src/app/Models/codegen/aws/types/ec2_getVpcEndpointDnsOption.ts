import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ec2_getVpcEndpointDnsOption {
  // The DNS records created for the endpoint.
  dnsRecordIpType?: string;

  // Indicates whether to enable private DNS only for inbound endpoints.
  privateDnsOnlyForInboundResolverEndpoint?: boolean;
}

export function ec2_getVpcEndpointDnsOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'dnsRecordIpType',
      'The DNS records created for the endpoint.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'privateDnsOnlyForInboundResolverEndpoint',
      'Indicates whether to enable private DNS only for inbound endpoints.',
      () => [],
      true,
      false,
    ),
  ];
}
