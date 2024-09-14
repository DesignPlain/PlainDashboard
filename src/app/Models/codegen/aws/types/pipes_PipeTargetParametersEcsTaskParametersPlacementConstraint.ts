import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface pipes_PipeTargetParametersEcsTaskParametersPlacementConstraint {
  // A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is distinctInstance. Maximum length of 2,000.
  expression?: string;

  // The type of placement strategy. The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task). Valid Values: random, spread, binpack.
  type?: string;
}

export function pipes_PipeTargetParametersEcsTaskParametersPlacementConstraint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "expression",
      "A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is distinctInstance. Maximum length of 2,000.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of placement strategy. The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task). Valid Values: random, spread, binpack.",
      () => [],
      false,
      false,
    ),
  ];
}
