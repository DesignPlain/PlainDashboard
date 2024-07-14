import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  opsworks_StaticWebLayerLoadBasedAutoScalingUpscaling,
  opsworks_StaticWebLayerLoadBasedAutoScalingUpscaling_GetTypes,
} from "./opsworks_StaticWebLayerLoadBasedAutoScalingUpscaling";
import {
  opsworks_StaticWebLayerLoadBasedAutoScalingDownscaling,
  opsworks_StaticWebLayerLoadBasedAutoScalingDownscaling_GetTypes,
} from "./opsworks_StaticWebLayerLoadBasedAutoScalingDownscaling";

export interface opsworks_StaticWebLayerLoadBasedAutoScaling {
  //
  enable?: boolean;

  //
  upscaling?: opsworks_StaticWebLayerLoadBasedAutoScalingUpscaling;

  //
  downscaling?: opsworks_StaticWebLayerLoadBasedAutoScalingDownscaling;
}

export function opsworks_StaticWebLayerLoadBasedAutoScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "enable", "", [], false, false),
    new DynamicUIProps(
      InputType.Object,
      "upscaling",
      "",
      opsworks_StaticWebLayerLoadBasedAutoScalingUpscaling_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "downscaling",
      "",
      opsworks_StaticWebLayerLoadBasedAutoScalingDownscaling_GetTypes(),
      false,
      false,
    ),
  ];
}
