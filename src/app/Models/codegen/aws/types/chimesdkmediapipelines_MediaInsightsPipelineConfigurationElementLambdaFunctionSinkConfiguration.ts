import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementLambdaFunctionSinkConfiguration {
  // Lambda Function to deliver results.
  insightsTarget?: string;
}

export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementLambdaFunctionSinkConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "insightsTarget",
      "Lambda Function to deliver results.",
      () => [],
      true,
      false,
    ),
  ];
}
