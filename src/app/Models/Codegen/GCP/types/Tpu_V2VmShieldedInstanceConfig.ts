import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Tpu_V2VmShieldedInstanceConfig {
  // Defines whether the instance has Secure Boot enabled.
  EnableSecureBoot?: boolean;
}

export function Tpu_V2VmShieldedInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "EnableSecureBoot",
      "Defines whether the instance has Secure Boot enabled.",
      [],
      true,
      true,
    ),
  ];
}
