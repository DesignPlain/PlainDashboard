import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SubnetGroupArgs {
  // The description of the Redshift Subnet group. Defaults to "Managed by Pulumi".
  description?: string;

  // The name of the Redshift Subnet group.
  name?: string;

  // An array of VPC subnet IDs.
  subnetIds?: Array<string>;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class SubnetGroup extends Resource {
  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) of the Redshift Subnet group name
  public arn?: string;

  // The description of the Redshift Subnet group. Defaults to "Managed by Pulumi".
  public description?: string;

  // The name of the Redshift Subnet group.
  public name?: string;

  // An array of VPC subnet IDs.
  public subnetIds?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        'The description of the Redshift Subnet group. Defaults to "Managed by Pulumi".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the Redshift Subnet group.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnetIds",
        "An array of VPC subnet IDs.",
        InputType_String_GetTypes(),
        true,
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
    ];
  }
}
