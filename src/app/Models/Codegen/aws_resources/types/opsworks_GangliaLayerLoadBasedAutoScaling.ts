import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  opsworks_GangliaLayerLoadBasedAutoScalingDownscaling,
  opsworks_GangliaLayerLoadBasedAutoScalingDownscaling_GetTypes,
} from "./opsworks_GangliaLayerLoadBasedAutoScalingDownscaling";
import {
  opsworks_GangliaLayerLoadBasedAutoScalingUpscaling,
  opsworks_GangliaLayerLoadBasedAutoScalingUpscaling_GetTypes,
} from "./opsworks_GangliaLayerLoadBasedAutoScalingUpscaling";

export interface opsworks_GangliaLayerLoadBasedAutoScaling {
  //
  downscaling?: opsworks_GangliaLayerLoadBasedAutoScalingDownscaling;

  //
  enable?: boolean;

  //
  upscaling?: opsworks_GangliaLayerLoadBasedAutoScalingUpscaling;
}

export function opsworks_GangliaLayerLoadBasedAutoScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "downscaling",
      "",
      opsworks_GangliaLayerLoadBasedAutoScalingDownscaling_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "enable", "", [], false, false),
    new DynamicUIProps(
      InputType.Object,
      "upscaling",
      "",
      opsworks_GangliaLayerLoadBasedAutoScalingUpscaling_GetTypes(),
      false,
      false,
    ),
  ];
}
