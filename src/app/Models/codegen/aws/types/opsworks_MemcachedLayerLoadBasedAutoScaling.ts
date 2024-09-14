import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  opsworks_MemcachedLayerLoadBasedAutoScalingUpscaling,
  opsworks_MemcachedLayerLoadBasedAutoScalingUpscaling_GetTypes,
} from "./opsworks_MemcachedLayerLoadBasedAutoScalingUpscaling";
import {
  opsworks_MemcachedLayerLoadBasedAutoScalingDownscaling,
  opsworks_MemcachedLayerLoadBasedAutoScalingDownscaling_GetTypes,
} from "./opsworks_MemcachedLayerLoadBasedAutoScalingDownscaling";

export interface opsworks_MemcachedLayerLoadBasedAutoScaling {
  //
  enable?: boolean;

  //
  upscaling?: opsworks_MemcachedLayerLoadBasedAutoScalingUpscaling;

  //
  downscaling?: opsworks_MemcachedLayerLoadBasedAutoScalingDownscaling;
}

export function opsworks_MemcachedLayerLoadBasedAutoScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "enable", "", () => [], false, false),
    new DynamicUIProps(
      InputType.Object,
      "upscaling",
      "",
      () => opsworks_MemcachedLayerLoadBasedAutoScalingUpscaling_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "downscaling",
      "",
      () => opsworks_MemcachedLayerLoadBasedAutoScalingDownscaling_GetTypes(),
      false,
      false,
    ),
  ];
}
