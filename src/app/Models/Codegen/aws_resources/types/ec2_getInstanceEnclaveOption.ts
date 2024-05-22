import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      [],
      true,
      false,
    ),
  ];
}
