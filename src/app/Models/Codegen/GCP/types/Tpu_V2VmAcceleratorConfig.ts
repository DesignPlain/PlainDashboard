import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Tpu_V2VmAcceleratorConfig {
  // Topology of TPU in chips.
  Topology?: string;

  /*
Type of TPU.
Possible values are: `V2`, `V3`, `V4`.
*/
  Type?: string;
}

export function Tpu_V2VmAcceleratorConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Topology",
      "Topology of TPU in chips.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "Type of TPU.\nPossible values are: `V2`, `V3`, `V4`.",
      [],
      true,
      true,
    ),
  ];
}
