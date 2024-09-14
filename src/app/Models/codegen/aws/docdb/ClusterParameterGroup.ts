import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  docdb_ClusterParameterGroupParameter,
  docdb_ClusterParameterGroupParameter_GetTypes,
} from "../types/docdb_ClusterParameterGroupParameter";

export interface ClusterParameterGroupArgs {
  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The description of the DocumentDB cluster parameter group. Defaults to "Managed by Pulumi".
  description?: string;

  // The family of the DocumentDB cluster parameter group.
  family?: string;

  // The name of the DocumentDB parameter.
  name?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  namePrefix?: string;

  // A list of DocumentDB parameters to apply. Setting parameters to system default values may show a difference on imported resources.
  parameters?: Array<docdb_ClusterParameterGroupParameter>;
}
export class ClusterParameterGroup extends DS_Resource {
  // A list of DocumentDB parameters to apply. Setting parameters to system default values may show a difference on imported resources.
  public parameters?: Array<docdb_ClusterParameterGroupParameter>;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the DocumentDB cluster parameter group.
  public arn?: string;

  // The description of the DocumentDB cluster parameter group. Defaults to "Managed by Pulumi".
  public description?: string;

  // The family of the DocumentDB cluster parameter group.
  public family?: string;

  // The name of the DocumentDB parameter.
  public name?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  public namePrefix?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        'The description of the DocumentDB cluster parameter group. Defaults to "Managed by Pulumi".',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "family",
        "The family of the DocumentDB cluster parameter group.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the DocumentDB parameter.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "Creates a unique name beginning with the specified prefix. Conflicts with `name`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "parameters",
        "A list of DocumentDB parameters to apply. Setting parameters to system default values may show a difference on imported resources.",
        () => docdb_ClusterParameterGroupParameter_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
