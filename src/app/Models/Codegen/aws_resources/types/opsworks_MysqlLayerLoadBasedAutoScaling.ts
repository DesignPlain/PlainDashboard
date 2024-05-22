import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  opsworks_MysqlLayerLoadBasedAutoScalingDownscaling,
  opsworks_MysqlLayerLoadBasedAutoScalingDownscaling_GetTypes,
} from "./opsworks_MysqlLayerLoadBasedAutoScalingDownscaling";
import {
  opsworks_MysqlLayerLoadBasedAutoScalingUpscaling,
  opsworks_MysqlLayerLoadBasedAutoScalingUpscaling_GetTypes,
} from "./opsworks_MysqlLayerLoadBasedAutoScalingUpscaling";

export interface opsworks_MysqlLayerLoadBasedAutoScaling {
  //
  downscaling?: opsworks_MysqlLayerLoadBasedAutoScalingDownscaling;

  //
  enable?: boolean;

  //
  upscaling?: opsworks_MysqlLayerLoadBasedAutoScalingUpscaling;
}

export function opsworks_MysqlLayerLoadBasedAutoScaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "downscaling",
      "",
      opsworks_MysqlLayerLoadBasedAutoScalingDownscaling_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "enable", "", [], false, false),
    new DynamicUIProps(
      InputType.Object,
      "upscaling",
      "",
      opsworks_MysqlLayerLoadBasedAutoScalingUpscaling_GetTypes(),
      false,
      false,
    ),
  ];
}
