import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
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
  upscaling?: opsworks_MemcachedLayerLoadBasedAutoScalingUpscaling;

  //
  downscaling?: opsworks_MemcachedLayerLoadBasedAutoScalingDownscaling;

  //
  enable?: boolean;
}

export function opsworks_MemcachedLayerLoadBasedAutoScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "upscaling",
      "",
      opsworks_MemcachedLayerLoadBasedAutoScalingUpscaling_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "downscaling",
      "",
      opsworks_MemcachedLayerLoadBasedAutoScalingDownscaling_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "enable", "", [], false, false),
  ];
}
