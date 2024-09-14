import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  autoscalingplans_ScalingPlanApplicationSourceTagFilter,
  autoscalingplans_ScalingPlanApplicationSourceTagFilter_GetTypes,
} from "./autoscalingplans_ScalingPlanApplicationSourceTagFilter";

export interface autoscalingplans_ScalingPlanApplicationSource {
  // ARN of a AWS CloudFormation stack.
  cloudformationStackArn?: string;

  // Set of tags.
  tagFilters?: Array<autoscalingplans_ScalingPlanApplicationSourceTagFilter>;
}

export function autoscalingplans_ScalingPlanApplicationSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cloudformationStackArn",
      "ARN of a AWS CloudFormation stack.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tagFilters",
      "Set of tags.",
      () => autoscalingplans_ScalingPlanApplicationSourceTagFilter_GetTypes(),
      false,
      false,
    ),
  ];
}
