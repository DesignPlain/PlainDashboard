import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface WorkflowArgs {
  // A map of default run properties for this workflow. These properties are passed to all jobs associated to the workflow.
  defaultRunProperties?: Map<string, string>;

  // Description of the workflow.
  description?: string;

  // Prevents exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs.
  maxConcurrentRuns?: number;

  // The name you assign to this workflow.
  name?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Workflow extends DS_Resource {
  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) of Glue Workflow
  public arn?: string;

  // A map of default run properties for this workflow. These properties are passed to all jobs associated to the workflow.
  public defaultRunProperties?: Map<string, string>;

  // Description of the workflow.
  public description?: string;

  // Prevents exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs.
  public maxConcurrentRuns?: number;

  // The name you assign to this workflow.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name you assign to this workflow.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "defaultRunProperties",
        "A map of default run properties for this workflow. These properties are passed to all jobs associated to the workflow.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the workflow.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maxConcurrentRuns",
        "Prevents exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
