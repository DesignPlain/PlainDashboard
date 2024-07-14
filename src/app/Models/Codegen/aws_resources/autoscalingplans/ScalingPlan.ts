import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  autoscalingplans_ScalingPlanScalingInstruction,
  autoscalingplans_ScalingPlanScalingInstruction_GetTypes,
} from "../types/autoscalingplans_ScalingPlanScalingInstruction";
import {
  autoscalingplans_ScalingPlanApplicationSource,
  autoscalingplans_ScalingPlanApplicationSource_GetTypes,
} from "../types/autoscalingplans_ScalingPlanApplicationSource";

export interface ScalingPlanArgs {
  // Scaling instructions. More details can be found in the [AWS Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_ScalingInstruction.html).
  scalingInstructions?: Array<autoscalingplans_ScalingPlanScalingInstruction>;

  // CloudFormation stack or set of tags. You can create one scaling plan per application source.
  applicationSource?: autoscalingplans_ScalingPlanApplicationSource;

  // Name of the scaling plan. Names cannot contain vertical bars, colons, or forward slashes.
  name?: string;
}
export class ScalingPlan extends Resource {
  // Scaling instructions. More details can be found in the [AWS Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_ScalingInstruction.html).
  public scalingInstructions?: Array<autoscalingplans_ScalingPlanScalingInstruction>;

  // The version number of the scaling plan. This value is always 1.
  public scalingPlanVersion?: number;

  // CloudFormation stack or set of tags. You can create one scaling plan per application source.
  public applicationSource?: autoscalingplans_ScalingPlanApplicationSource;

  // Name of the scaling plan. Names cannot contain vertical bars, colons, or forward slashes.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "scalingInstructions",
        "Scaling instructions. More details can be found in the [AWS Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_ScalingInstruction.html).",
        autoscalingplans_ScalingPlanScalingInstruction_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "applicationSource",
        "CloudFormation stack or set of tags. You can create one scaling plan per application source.",
        autoscalingplans_ScalingPlanApplicationSource_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the scaling plan. Names cannot contain vertical bars, colons, or forward slashes.",
        [],
        false,
        true,
      ),
    ];
  }
}
