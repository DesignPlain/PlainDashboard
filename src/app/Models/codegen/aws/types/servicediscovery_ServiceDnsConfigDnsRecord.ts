import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface servicediscovery_ServiceDnsConfigDnsRecord {
  // The amount of time, in seconds, that you want DNS resolvers to cache the settings for this resource record set.
  ttl?: number;

  // The type of the resource, which indicates the value that Amazon Route 53 returns in response to DNS queries. Valid Values: A, AAAA, SRV, CNAME
  type?: string;
}

export function servicediscovery_ServiceDnsConfigDnsRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'type',
      'The type of the resource, which indicates the value that Amazon Route 53 returns in response to DNS queries. Valid Values: A, AAAA, SRV, CNAME',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'ttl',
      'The amount of time, in seconds, that you want DNS resolvers to cache the settings for this resource record set.',
      () => [],
      true,
      false,
    ),
  ];
}
