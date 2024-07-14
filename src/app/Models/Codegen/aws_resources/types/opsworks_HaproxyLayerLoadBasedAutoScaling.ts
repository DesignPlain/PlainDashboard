import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  opsworks_HaproxyLayerLoadBasedAutoScalingDownscaling,
  opsworks_HaproxyLayerLoadBasedAutoScalingDownscaling_GetTypes,
} from "./opsworks_HaproxyLayerLoadBasedAutoScalingDownscaling";
import {
  opsworks_HaproxyLayerLoadBasedAutoScalingUpscaling,
  opsworks_HaproxyLayerLoadBasedAutoScalingUpscaling_GetTypes,
} from "./opsworks_HaproxyLayerLoadBasedAutoScalingUpscaling";

export interface opsworks_HaproxyLayerLoadBasedAutoScaling {
  //
  downscaling?: opsworks_HaproxyLayerLoadBasedAutoScalingDownscaling;

  //
  enable?: boolean;

  //
  upscaling?: opsworks_HaproxyLayerLoadBasedAutoScalingUpscaling;
}

export function opsworks_HaproxyLayerLoadBasedAutoScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "enable", "", [], false, false),
    new DynamicUIProps(
      InputType.Object,
      "upscaling",
      "",
      opsworks_HaproxyLayerLoadBasedAutoScalingUpscaling_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "downscaling",
      "",
      opsworks_HaproxyLayerLoadBasedAutoScalingDownscaling_GetTypes(),
      false,
      false,
    ),
  ];
}
