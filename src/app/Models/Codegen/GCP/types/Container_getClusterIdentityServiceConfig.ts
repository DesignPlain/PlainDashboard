import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterIdentityServiceConfig {
  // Whether to enable the Identity Service component.
  Enabled?: boolean;
}

export function Container_getClusterIdentityServiceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Enabled",
      "Whether to enable the Identity Service component.",
      [],
      true,
      false,
    ),
  ];
}
