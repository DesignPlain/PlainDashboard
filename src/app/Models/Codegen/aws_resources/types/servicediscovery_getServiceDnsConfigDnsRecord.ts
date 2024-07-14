import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface servicediscovery_getServiceDnsConfigDnsRecord {
  // Amount of time, in seconds, that you want DNS resolvers to cache the settings for this resource record set.
  ttl?: number;

  // The type of health check that you want to create, which indicates how Route 53 determines whether an endpoint is healthy. Valid Values: HTTP, HTTPS, TCP
  type?: string;
}

export function servicediscovery_getServiceDnsConfigDnsRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ttl",
      "Amount of time, in seconds, that you want DNS resolvers to cache the settings for this resource record set.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of health check that you want to create, which indicates how Route 53 determines whether an endpoint is healthy. Valid Values: HTTP, HTTPS, TCP",
      [],
      true,
      false,
    ),
  ];
}
