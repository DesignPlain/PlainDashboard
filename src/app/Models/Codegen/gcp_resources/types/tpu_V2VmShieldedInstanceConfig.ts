import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface tpu_V2VmShieldedInstanceConfig {
  // Defines whether the instance has Secure Boot enabled.
  enableSecureBoot?: boolean;
}

export function tpu_V2VmShieldedInstanceConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableSecureBoot",
      "Defines whether the instance has Secure Boot enabled.",
      [],
      true,
      true,
    ),
  ];
}
