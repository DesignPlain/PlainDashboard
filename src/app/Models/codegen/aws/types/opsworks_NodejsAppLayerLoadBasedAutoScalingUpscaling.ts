import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface opsworks_NodejsAppLayerLoadBasedAutoScalingUpscaling {
  //
  instanceCount?: number;

  //
  loadThreshold?: number;

  //
  memoryThreshold?: number;

  //
  thresholdsWaitTime?: number;

  //
  alarms?: Array<string>;

  //
  cpuThreshold?: number;

  //
  ignoreMetricsTime?: number;
}

export function opsworks_NodejsAppLayerLoadBasedAutoScalingUpscaling_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "loadThreshold",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "memoryThreshold",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "thresholdsWaitTime",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "alarms",
      "",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "cpuThreshold",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ignoreMetricsTime",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "instanceCount",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
