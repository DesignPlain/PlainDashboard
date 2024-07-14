import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface tpu_V2VmAcceleratorConfig {
  // Topology of TPU in chips.
  topology?: string;

  /*
Type of TPU.
Possible values are: `V2`, `V3`, `V4`.
*/
  type?: string;
}

export function tpu_V2VmAcceleratorConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "topology",
      "Topology of TPU in chips.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of TPU.\nPossible values are: `V2`, `V3`, `V4`.",
      [],
      true,
      true,
    ),
  ];
}
