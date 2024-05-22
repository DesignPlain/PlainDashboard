import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_getClusterNodePoolNodeConfigShieldedInstanceConfig {
  // Defines whether the instance has integrity monitoring enabled.
  enableIntegrityMonitoring?: boolean;

  // Defines whether the instance has Secure Boot enabled.
  enableSecureBoot?: boolean;
}

export function container_getClusterNodePoolNodeConfigShieldedInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableIntegrityMonitoring",
      "Defines whether the instance has integrity monitoring enabled.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableSecureBoot",
      "Defines whether the instance has Secure Boot enabled.",
      [],
      true,
      false,
    ),
  ];
}
