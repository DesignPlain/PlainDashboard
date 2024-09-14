import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface apigateway_DeploymentCanarySettings {
  // Percentage (0.0-100.0) of traffic routed to the canary deployment.
  percentTraffic?: number;

  // Stage variable overrides used for the canary release deployment. They can override existing stage variables or add new stage variables for the canary release deployment. These stage variables are represented as a string-to-string map between stage variable names and their values.
  stageVariableOverrides?: Map<string, string>;

  // Boolean flag to indicate whether the canary release deployment uses the stage cache or not.
  useStageCache?: boolean;
}

export function apigateway_DeploymentCanarySettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "percentTraffic",
      "Percentage (0.0-100.0) of traffic routed to the canary deployment.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "stageVariableOverrides",
      "Stage variable overrides used for the canary release deployment. They can override existing stage variables or add new stage variables for the canary release deployment. These stage variables are represented as a string-to-string map between stage variable names and their values.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "useStageCache",
      "Boolean flag to indicate whether the canary release deployment uses the stage cache or not.",
      () => [],
      false,
      false,
    ),
  ];
}
