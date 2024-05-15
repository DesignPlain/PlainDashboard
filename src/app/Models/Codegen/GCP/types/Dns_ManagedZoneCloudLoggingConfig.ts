import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dns_ManagedZoneCloudLoggingConfig {
  // If set, enable query logging for this ManagedZone. False by default, making logging opt-in.
  EnableLogging?: boolean;
}

export function Dns_ManagedZoneCloudLoggingConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EnableLogging",
      "If set, enable query logging for this ManagedZone. False by default, making logging opt-in.",
      [],
      true,
      false,
    ),
  ];
}
