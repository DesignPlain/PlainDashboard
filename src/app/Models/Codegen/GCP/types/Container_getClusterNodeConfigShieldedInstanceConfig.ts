import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterNodeConfigShieldedInstanceConfig {
  // Defines whether the instance has integrity monitoring enabled.
  EnableIntegrityMonitoring?: boolean;

  // Defines whether the instance has Secure Boot enabled.
  EnableSecureBoot?: boolean;
}

export function Container_getClusterNodeConfigShieldedInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EnableSecureBoot",
      "Defines whether the instance has Secure Boot enabled.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableIntegrityMonitoring",
      "Defines whether the instance has integrity monitoring enabled.",
      [],
      true,
      false,
    ),
  ];
}
