import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  opsworks_StaticWebLayerLoadBasedAutoScalingDownscaling,
  opsworks_StaticWebLayerLoadBasedAutoScalingDownscaling_GetTypes,
} from "./opsworks_StaticWebLayerLoadBasedAutoScalingDownscaling";
import {
  opsworks_StaticWebLayerLoadBasedAutoScalingUpscaling,
  opsworks_StaticWebLayerLoadBasedAutoScalingUpscaling_GetTypes,
} from "./opsworks_StaticWebLayerLoadBasedAutoScalingUpscaling";

export interface opsworks_StaticWebLayerLoadBasedAutoScaling {
  //
  downscaling?: opsworks_StaticWebLayerLoadBasedAutoScalingDownscaling;

  //
  enable?: boolean;

  //
  upscaling?: opsworks_StaticWebLayerLoadBasedAutoScalingUpscaling;
}

export function opsworks_StaticWebLayerLoadBasedAutoScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "downscaling",
      "",
      () => opsworks_StaticWebLayerLoadBasedAutoScalingDownscaling_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "enable", "", () => [], false, false),
    new DynamicUIProps(
      InputType.Object,
      "upscaling",
      "",
      () => opsworks_StaticWebLayerLoadBasedAutoScalingUpscaling_GetTypes(),
      false,
      false,
    ),
  ];
}
