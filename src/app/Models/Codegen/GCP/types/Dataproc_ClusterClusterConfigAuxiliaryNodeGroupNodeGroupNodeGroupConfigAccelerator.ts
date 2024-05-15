import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigAccelerator {
  /*
The number of the accelerator cards of this type exposed to this instance. Often restricted to one of `1`, `2`, `4`, or `8`.


- - -
*/
  AcceleratorCount?: number;

  // The short name of the accelerator type to expose to this instance. For example, `nvidia-tesla-k80`.
  AcceleratorType?: string;
}

export function Dataproc_ClusterClusterConfigAuxiliaryNodeGroupNodeGroupNodeGroupConfigAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "AcceleratorCount",
      "The number of the accelerator cards of this type exposed to this instance. Often restricted to one of `1`, `2`, `4`, or `8`.\n\n\n- - -",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "AcceleratorType",
      "The short name of the accelerator type to expose to this instance. For example, `nvidia-tesla-k80`.",
      [],
      true,
      true,
    ),
  ];
}
