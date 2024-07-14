import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface DeploymentStrategyArgs {
  // Name for the deployment strategy. Must be between 1 and 64 characters in length.
  name?: string;

  // Where to save the deployment strategy. Valid values: `NONE` and `SSM_DOCUMENT`.
  replicateTo?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Total amount of time for a deployment to last. Minimum value of 0, maximum value of 1440.
  deploymentDurationInMinutes?: number;

  // Description of the deployment strategy. Can be at most 1024 characters.
  description?: string;

  // Amount of time AWS AppConfig monitors for alarms before considering the deployment to be complete and no longer eligible for automatic roll back. Minimum value of 0, maximum value of 1440.
  finalBakeTimeInMinutes?: number;

  // Percentage of targets to receive a deployed configuration during each interval. Minimum value of 1.0, maximum value of 100.0.
  growthFactor?: number;

  // Algorithm used to define how percentage grows over time. Valid value: `LINEAR` and `EXPONENTIAL`. Defaults to `LINEAR`.
  growthType?: string;
}
export class DeploymentStrategy extends Resource {
  // Where to save the deployment strategy. Valid values: `NONE` and `SSM_DOCUMENT`.
  public replicateTo?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Description of the deployment strategy. Can be at most 1024 characters.
  public description?: string;

  // Amount of time AWS AppConfig monitors for alarms before considering the deployment to be complete and no longer eligible for automatic roll back. Minimum value of 0, maximum value of 1440.
  public finalBakeTimeInMinutes?: number;

  // Percentage of targets to receive a deployed configuration during each interval. Minimum value of 1.0, maximum value of 100.0.
  public growthFactor?: number;

  // Name for the deployment strategy. Must be between 1 and 64 characters in length.
  public name?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN of the AppConfig Deployment Strategy.
  public arn?: string;

  // Total amount of time for a deployment to last. Minimum value of 0, maximum value of 1440.
  public deploymentDurationInMinutes?: number;

  // Algorithm used to define how percentage grows over time. Valid value: `LINEAR` and `EXPONENTIAL`. Defaults to `LINEAR`.
  public growthType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "finalBakeTimeInMinutes",
        "Amount of time AWS AppConfig monitors for alarms before considering the deployment to be complete and no longer eligible for automatic roll back. Minimum value of 0, maximum value of 1440.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "growthFactor",
        "Percentage of targets to receive a deployed configuration during each interval. Minimum value of 1.0, maximum value of 100.0.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "growthType",
        "Algorithm used to define how percentage grows over time. Valid value: `LINEAR` and `EXPONENTIAL`. Defaults to `LINEAR`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name for the deployment strategy. Must be between 1 and 64 characters in length.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "replicateTo",
        "Where to save the deployment strategy. Valid values: `NONE` and `SSM_DOCUMENT`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "deploymentDurationInMinutes",
        "Total amount of time for a deployment to last. Minimum value of 0, maximum value of 1440.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the deployment strategy. Can be at most 1024 characters.",
        [],
        false,
        false,
      ),
    ];
  }
}
