import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  servicediscovery_getServiceDnsConfigDnsRecord,
  servicediscovery_getServiceDnsConfigDnsRecord_GetTypes,
} from "./servicediscovery_getServiceDnsConfigDnsRecord";

export interface servicediscovery_getServiceDnsConfig {
  // An array that contains one DnsRecord object for each resource record set. See `dns_records` Block for details.
  dnsRecords?: Array<servicediscovery_getServiceDnsConfigDnsRecord>;

  // ID of the namespace that the service belongs to.
  namespaceId?: string;

  // Routing policy that you want to apply to all records that Route 53 creates when you register an instance and specify the service. Valid Values: MULTIVALUE, WEIGHTED
  routingPolicy?: string;
}

export function servicediscovery_getServiceDnsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "dnsRecords",
      "An array that contains one DnsRecord object for each resource record set. See `dns_records` Block for details.",
      () => servicediscovery_getServiceDnsConfigDnsRecord_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "namespaceId",
      "ID of the namespace that the service belongs to.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "routingPolicy",
      "Routing policy that you want to apply to all records that Route 53 creates when you register an instance and specify the service. Valid Values: MULTIVALUE, WEIGHTED",
      () => [],
      true,
      false,
    ),
  ];
}
