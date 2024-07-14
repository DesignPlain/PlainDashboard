import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  servicediscovery_ServiceDnsConfigDnsRecord,
  servicediscovery_ServiceDnsConfigDnsRecord_GetTypes,
} from "./servicediscovery_ServiceDnsConfigDnsRecord";

export interface servicediscovery_ServiceDnsConfig {
  // An array that contains one DnsRecord object for each resource record set.
  dnsRecords?: Array<servicediscovery_ServiceDnsConfigDnsRecord>;

  // The ID of the namespace to use for DNS configuration.
  namespaceId?: string;

  // The routing policy that you want to apply to all records that Route 53 creates when you register an instance and specify the service. Valid Values: MULTIVALUE, WEIGHTED
  routingPolicy?: string;
}

export function servicediscovery_ServiceDnsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "namespaceId",
      "The ID of the namespace to use for DNS configuration.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "routingPolicy",
      "The routing policy that you want to apply to all records that Route 53 creates when you register an instance and specify the service. Valid Values: MULTIVALUE, WEIGHTED",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dnsRecords",
      "An array that contains one DnsRecord object for each resource record set.",
      servicediscovery_ServiceDnsConfigDnsRecord_GetTypes(),
      true,
      false,
    ),
  ];
}
