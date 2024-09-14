import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface container_NodePoolNodeConfigShieldedInstanceConfig {
  // Defines whether the instance has integrity monitoring enabled.
  enableIntegrityMonitoring?: boolean;

  // Defines whether the instance has Secure Boot enabled.
  enableSecureBoot?: boolean;
}

export function container_NodePoolNodeConfigShieldedInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableIntegrityMonitoring",
      "Defines whether the instance has integrity monitoring enabled.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableSecureBoot",
      "Defines whether the instance has Secure Boot enabled.",
      () => [],
      false,
      true,
    ),
  ];
}
