import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_getInstanceEnclaveOption {
  // Whether Nitro Enclaves are enabled.
  enabled?: boolean;
}

export function ec2_getInstanceEnclaveOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether Nitro Enclaves are enabled.",
      () => [],
      true,
      false,
    ),
  ];
}
