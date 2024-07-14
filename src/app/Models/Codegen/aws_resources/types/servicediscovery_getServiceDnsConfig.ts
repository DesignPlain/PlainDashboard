import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  servicediscovery_getServiceDnsConfigDnsRecord,
  servicediscovery_getServiceDnsConfigDnsRecord_GetTypes,
} from "./servicediscovery_getServiceDnsConfigDnsRecord";

export interface servicediscovery_getServiceDnsConfig {
  // ID of the namespace that the service belongs to.
  namespaceId?: string;

  // Routing policy that you want to apply to all records that Route 53 creates when you register an instance and specify the service. Valid Values: MULTIVALUE, WEIGHTED
  routingPolicy?: string;

  // An array that contains one DnsRecord object for each resource record set.
  dnsRecords?: Array<servicediscovery_getServiceDnsConfigDnsRecord>;
}

export function servicediscovery_getServiceDnsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "namespaceId",
      "ID of the namespace that the service belongs to.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "routingPolicy",
      "Routing policy that you want to apply to all records that Route 53 creates when you register an instance and specify the service. Valid Values: MULTIVALUE, WEIGHTED",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dnsRecords",
      "An array that contains one DnsRecord object for each resource record set.",
      servicediscovery_getServiceDnsConfigDnsRecord_GetTypes(),
      true,
      false,
    ),
  ];
}
