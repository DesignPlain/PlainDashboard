import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  opsworks_CustomLayerLoadBasedAutoScalingDownscaling,
  opsworks_CustomLayerLoadBasedAutoScalingDownscaling_GetTypes,
} from "./opsworks_CustomLayerLoadBasedAutoScalingDownscaling";
import {
  opsworks_CustomLayerLoadBasedAutoScalingUpscaling,
  opsworks_CustomLayerLoadBasedAutoScalingUpscaling_GetTypes,
} from "./opsworks_CustomLayerLoadBasedAutoScalingUpscaling";

export interface opsworks_CustomLayerLoadBasedAutoScaling {
  // The downscaling settings, as defined below, used for load-based autoscaling
  downscaling?: opsworks_CustomLayerLoadBasedAutoScalingDownscaling;

  // Whether load-based auto scaling is enabled for the layer.
  enable?: boolean;

  // The upscaling settings, as defined below, used for load-based autoscaling
  upscaling?: opsworks_CustomLayerLoadBasedAutoScalingUpscaling;
}

export function opsworks_CustomLayerLoadBasedAutoScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "downscaling",
      "The downscaling settings, as defined below, used for load-based autoscaling",
      () => opsworks_CustomLayerLoadBasedAutoScalingDownscaling_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enable",
      "Whether load-based auto scaling is enabled for the layer.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "upscaling",
      "The upscaling settings, as defined below, used for load-based autoscaling",
      () => opsworks_CustomLayerLoadBasedAutoScalingUpscaling_GetTypes(),
      false,
      false,
    ),
  ];
}
