import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  elasticache_ParameterGroupParameter,
  elasticache_ParameterGroupParameter_GetTypes,
} from "../types/elasticache_ParameterGroupParameter";

export interface ParameterGroupArgs {
  // The description of the ElastiCache parameter group. Defaults to "Managed by Pulumi".
  description?: string;

  // The family of the ElastiCache parameter group.
  family?: string;

  // The name of the ElastiCache parameter.
  name?: string;

  // A list of ElastiCache parameters to apply.
  parameters?: Array<elasticache_ParameterGroupParameter>;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level
  tags?: Map<string, string>;
}
export class ParameterGroup extends Resource {
  // A list of ElastiCache parameters to apply.
  public parameters?: Array<elasticache_ParameterGroupParameter>;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The AWS ARN associated with the parameter group.
  public arn?: string;

  // The description of the ElastiCache parameter group. Defaults to "Managed by Pulumi".
  public description?: string;

  // The family of the ElastiCache parameter group.
  public family?: string;

  // The name of the ElastiCache parameter.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        'The description of the ElastiCache parameter group. Defaults to "Managed by Pulumi".',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "family",
        "The family of the ElastiCache parameter group.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the ElastiCache parameter.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "parameters",
        "A list of ElastiCache parameters to apply.",
        elasticache_ParameterGroupParameter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
