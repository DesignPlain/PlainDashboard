import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  opsworks_JavaAppLayerLoadBasedAutoScalingDownscaling,
  opsworks_JavaAppLayerLoadBasedAutoScalingDownscaling_GetTypes,
} from "./opsworks_JavaAppLayerLoadBasedAutoScalingDownscaling";
import {
  opsworks_JavaAppLayerLoadBasedAutoScalingUpscaling,
  opsworks_JavaAppLayerLoadBasedAutoScalingUpscaling_GetTypes,
} from "./opsworks_JavaAppLayerLoadBasedAutoScalingUpscaling";

export interface opsworks_JavaAppLayerLoadBasedAutoScaling {
  //
  downscaling?: opsworks_JavaAppLayerLoadBasedAutoScalingDownscaling;

  //
  enable?: boolean;

  //
  upscaling?: opsworks_JavaAppLayerLoadBasedAutoScalingUpscaling;
}

export function opsworks_JavaAppLayerLoadBasedAutoScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "enable", "", [], false, false),
    new DynamicUIProps(
      InputType.Object,
      "upscaling",
      "",
      opsworks_JavaAppLayerLoadBasedAutoScalingUpscaling_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "downscaling",
      "",
      opsworks_JavaAppLayerLoadBasedAutoScalingDownscaling_GetTypes(),
      false,
      false,
    ),
  ];
}
