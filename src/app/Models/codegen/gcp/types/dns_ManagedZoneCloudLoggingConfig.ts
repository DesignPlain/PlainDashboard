import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dns_ManagedZoneCloudLoggingConfig {
  // If set, enable query logging for this ManagedZone. False by default, making logging opt-in.
  enableLogging?: boolean;
}

export function dns_ManagedZoneCloudLoggingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableLogging",
      "If set, enable query logging for this ManagedZone. False by default, making logging opt-in.",
      () => [],
      true,
      false,
    ),
  ];
}
