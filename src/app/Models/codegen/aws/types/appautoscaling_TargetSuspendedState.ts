import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appautoscaling_TargetSuspendedState {
  // Whether scale in by a target tracking scaling policy or a step scaling policy is suspended. Default is `false`.
  dynamicScalingInSuspended?: boolean;

  // Whether scale out by a target tracking scaling policy or a step scaling policy is suspended. Default is `false`.
  dynamicScalingOutSuspended?: boolean;

  // Whether scheduled scaling is suspended. Default is `false`.
  scheduledScalingSuspended?: boolean;
}

export function appautoscaling_TargetSuspendedState_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "dynamicScalingOutSuspended",
      "Whether scale out by a target tracking scaling policy or a step scaling policy is suspended. Default is `false`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "scheduledScalingSuspended",
      "Whether scheduled scaling is suspended. Default is `false`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "dynamicScalingInSuspended",
      "Whether scale in by a target tracking scaling policy or a step scaling policy is suspended. Default is `false`.",
      () => [],
      false,
      false,
    ),
  ];
}
