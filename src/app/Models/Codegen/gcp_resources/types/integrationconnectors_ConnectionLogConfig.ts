import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface integrationconnectors_ConnectionLogConfig {
  // Enabled represents whether logging is enabled or not for a connection.
  enabled?: boolean;
}

export function integrationconnectors_ConnectionLogConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enabled represents whether logging is enabled or not for a connection.",
      [],
      true,
      false,
    ),
  ];
}
