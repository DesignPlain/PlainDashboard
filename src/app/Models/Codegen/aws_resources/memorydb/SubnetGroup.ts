import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SubnetGroupArgs {
  // Description for the subnet group.
  description?: string;

  // Name of the subnet group. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.
  name?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  namePrefix?: string;

  /*
Set of VPC Subnet ID-s for the subnet group. At least one subnet must be provided.

The following arguments are optional:
*/
  subnetIds?: Array<string>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class SubnetGroup extends Resource {
  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  public namePrefix?: string;

  /*
Set of VPC Subnet ID-s for the subnet group. At least one subnet must be provided.

The following arguments are optional:
*/
  public subnetIds?: Array<string>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The VPC in which the subnet group exists.
  public vpcId?: string;

  // The ARN of the subnet group.
  public arn?: string;

  // Description for the subnet group.
  public description?: string;

  // Name of the subnet group. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description for the subnet group.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the subnet group. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.",
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
        "subnetIds",
        "Set of VPC Subnet ID-s for the subnet group. At least one subnet must be provided.\n\nThe following arguments are optional:",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
