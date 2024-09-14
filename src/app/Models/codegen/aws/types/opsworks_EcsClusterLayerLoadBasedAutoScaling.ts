import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  opsworks_EcsClusterLayerLoadBasedAutoScalingDownscaling,
  opsworks_EcsClusterLayerLoadBasedAutoScalingDownscaling_GetTypes,
} from "./opsworks_EcsClusterLayerLoadBasedAutoScalingDownscaling";
import {
  opsworks_EcsClusterLayerLoadBasedAutoScalingUpscaling,
  opsworks_EcsClusterLayerLoadBasedAutoScalingUpscaling_GetTypes,
} from "./opsworks_EcsClusterLayerLoadBasedAutoScalingUpscaling";

export interface opsworks_EcsClusterLayerLoadBasedAutoScaling {
  //
  downscaling?: opsworks_EcsClusterLayerLoadBasedAutoScalingDownscaling;

  //
  enable?: boolean;

  //
  upscaling?: opsworks_EcsClusterLayerLoadBasedAutoScalingUpscaling;
}

export function opsworks_EcsClusterLayerLoadBasedAutoScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "downscaling",
      "",
      () => opsworks_EcsClusterLayerLoadBasedAutoScalingDownscaling_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "enable", "", () => [], false, false),
    new DynamicUIProps(
      InputType.Object,
      "upscaling",
      "",
      () => opsworks_EcsClusterLayerLoadBasedAutoScalingUpscaling_GetTypes(),
      false,
      false,
    ),
  ];
}
