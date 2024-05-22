import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  neptune_ClusterParameterGroupParameter,
  neptune_ClusterParameterGroupParameter_GetTypes,
} from "../types/neptune_ClusterParameterGroupParameter";

export interface ClusterParameterGroupArgs {
  // A list of neptune parameters to apply.
  parameters?: Array<neptune_ClusterParameterGroupParameter>;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The description of the neptune cluster parameter group. Defaults to "Managed by Pulumi".
  description?: string;

  // The family of the neptune cluster parameter group.
  family?: string;

  // The name of the neptune parameter.
  name?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  namePrefix?: string;
}
export class ClusterParameterGroup extends Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the neptune cluster parameter group.
  public arn?: string;

  // The description of the neptune cluster parameter group. Defaults to "Managed by Pulumi".
  public description?: string;

  // The family of the neptune cluster parameter group.
  public family?: string;

  // The name of the neptune parameter.
  public name?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  public namePrefix?: string;

  // A list of neptune parameters to apply.
  public parameters?: Array<neptune_ClusterParameterGroupParameter>;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the neptune parameter.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "Creates a unique name beginning with the specified prefix. Conflicts with `name`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "parameters",
        "A list of neptune parameters to apply.",
        neptune_ClusterParameterGroupParameter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        'The description of the neptune cluster parameter group. Defaults to "Managed by Pulumi".',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "family",
        "The family of the neptune cluster parameter group.",
        [],
        true,
        true,
      ),
    ];
  }
}
