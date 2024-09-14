import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface finspace_KxEnvironmentCustomDnsConfiguration {
  // IP address of the DNS server.
  customDnsServerIp?: string;

  // Name of the DNS server.
  customDnsServerName?: string;
}

export function finspace_KxEnvironmentCustomDnsConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "customDnsServerIp",
      "IP address of the DNS server.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "customDnsServerName",
      "Name of the DNS server.",
      () => [],
      true,
      false,
    ),
  ];
}
