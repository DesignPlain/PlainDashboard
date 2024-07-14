import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface finspace_KxEnvironmentCustomDnsConfiguration {
  // Name of the DNS server.
  customDnsServerName?: string;

  // IP address of the DNS server.
  customDnsServerIp?: string;
}

export function finspace_KxEnvironmentCustomDnsConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "customDnsServerName",
      "Name of the DNS server.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "customDnsServerIp",
      "IP address of the DNS server.",
      [],
      true,
      false,
    ),
  ];
}
