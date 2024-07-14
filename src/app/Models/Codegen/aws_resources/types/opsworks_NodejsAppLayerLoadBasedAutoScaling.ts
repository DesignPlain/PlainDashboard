import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  opsworks_NodejsAppLayerLoadBasedAutoScalingUpscaling,
  opsworks_NodejsAppLayerLoadBasedAutoScalingUpscaling_GetTypes,
} from "./opsworks_NodejsAppLayerLoadBasedAutoScalingUpscaling";
import {
  opsworks_NodejsAppLayerLoadBasedAutoScalingDownscaling,
  opsworks_NodejsAppLayerLoadBasedAutoScalingDownscaling_GetTypes,
} from "./opsworks_NodejsAppLayerLoadBasedAutoScalingDownscaling";

export interface opsworks_NodejsAppLayerLoadBasedAutoScaling {
  //
  enable?: boolean;

  //
  upscaling?: opsworks_NodejsAppLayerLoadBasedAutoScalingUpscaling;

  //
  downscaling?: opsworks_NodejsAppLayerLoadBasedAutoScalingDownscaling;
}

export function opsworks_NodejsAppLayerLoadBasedAutoScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "enable", "", [], false, false),
    new DynamicUIProps(
      InputType.Object,
      "upscaling",
      "",
      opsworks_NodejsAppLayerLoadBasedAutoScalingUpscaling_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "downscaling",
      "",
      opsworks_NodejsAppLayerLoadBasedAutoScalingDownscaling_GetTypes(),
      false,
      false,
    ),
  ];
}
