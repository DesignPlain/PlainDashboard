import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface batch_getJobDefinitionNodePropertyNodeRangePropertyContainerFargatePlatformConfiguration {
  // The AWS Fargate platform version where the jobs are running. A platform version is specified only for jobs that are running on Fargate resources.
  platformVersion?: string;
}

export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerFargatePlatformConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "platformVersion",
      "The AWS Fargate platform version where the jobs are running. A platform version is specified only for jobs that are running on Fargate resources.",
      () => [],
      true,
      false,
    ),
  ];
}
