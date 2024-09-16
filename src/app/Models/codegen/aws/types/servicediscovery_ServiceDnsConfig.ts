import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  servicediscovery_ServiceDnsConfigDnsRecord,
  servicediscovery_ServiceDnsConfigDnsRecord_GetTypes,
} from './servicediscovery_ServiceDnsConfigDnsRecord';

export interface servicediscovery_ServiceDnsConfig {
  // An array that contains one DnsRecord object for each resource record set. See `dns_records` Block for details.
  dnsRecords?: Array<servicediscovery_ServiceDnsConfigDnsRecord>;

  // The ID of the namespace to use for DNS configuration.
  namespaceId?: string;

  // The routing policy that you want to apply to all records that Route 53 creates when you register an instance and specify the service. Valid Values: MULTIVALUE, WEIGHTED
  routingPolicy?: string;
}

export function servicediscovery_ServiceDnsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'dnsRecords',
      'An array that contains one DnsRecord object for each resource record set. See `dns_records` Block for details.',
      () => servicediscovery_ServiceDnsConfigDnsRecord_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'namespaceId',
      'The ID of the namespace to use for DNS configuration.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'routingPolicy',
      'The routing policy that you want to apply to all records that Route 53 creates when you register an instance and specify the service. Valid Values: MULTIVALUE, WEIGHTED',
      () => [],
      false,
      true,
    ),
  ];
}
