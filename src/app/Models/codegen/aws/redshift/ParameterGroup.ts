import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  redshift_ParameterGroupParameter,
  redshift_ParameterGroupParameter_GetTypes,
} from "../types/redshift_ParameterGroupParameter";

export interface ParameterGroupArgs {
  // The description of the Redshift parameter group. Defaults to "Managed by Pulumi".
  description?: string;

  // The family of the Redshift parameter group.
  family?: string;

  // The name of the Redshift parameter.
  name?: string;

  // A list of Redshift parameters to apply.
  parameters?: Array<redshift_ParameterGroupParameter>;

  /*
A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

You can read more about the parameters that Redshift supports in the [documentation](http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html)
*/
  tags?: Map<string, string>;
}
export class ParameterGroup extends DS_Resource {
  // The description of the Redshift parameter group. Defaults to "Managed by Pulumi".
  public description?: string;

  // The family of the Redshift parameter group.
  public family?: string;

  // The name of the Redshift parameter.
  public name?: string;

  // A list of Redshift parameters to apply.
  public parameters?: Array<redshift_ParameterGroupParameter>;

  /*
A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

You can read more about the parameters that Redshift supports in the [documentation](http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html)
*/
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) of parameter group
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        'The description of the Redshift parameter group. Defaults to "Managed by Pulumi".',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "family",
        "The family of the Redshift parameter group.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the Redshift parameter.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "parameters",
        "A list of Redshift parameters to apply.",
        () => redshift_ParameterGroupParameter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.\n\nYou can read more about the parameters that Redshift supports in the [documentation](http://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html)",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
