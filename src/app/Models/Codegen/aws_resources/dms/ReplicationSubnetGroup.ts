import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ReplicationSubnetGroupArgs {
  // Description for the subnet group.
  replicationSubnetGroupDescription?: string;

  // Name for the replication subnet group. This value is stored as a lowercase string. It must contain no more than 255 alphanumeric characters, periods, spaces, underscores, or hyphens and cannot be `default`.
  replicationSubnetGroupId?: string;

  // List of at least 2 EC2 subnet IDs for the subnet group. The subnets must cover at least 2 availability zones.
  subnetIds?: Array<string>;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class ReplicationSubnetGroup extends Resource {
  // The ID of the VPC the subnet group is in.
  public vpcId?: string;

  //
  public replicationSubnetGroupArn?: string;

  // Description for the subnet group.
  public replicationSubnetGroupDescription?: string;

  // Name for the replication subnet group. This value is stored as a lowercase string. It must contain no more than 255 alphanumeric characters, periods, spaces, underscores, or hyphens and cannot be `default`.
  public replicationSubnetGroupId?: string;

  // List of at least 2 EC2 subnet IDs for the subnet group. The subnets must cover at least 2 availability zones.
  public subnetIds?: Array<string>;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "replicationSubnetGroupDescription",
        "Description for the subnet group.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "replicationSubnetGroupId",
        "Name for the replication subnet group. This value is stored as a lowercase string. It must contain no more than 255 alphanumeric characters, periods, spaces, underscores, or hyphens and cannot be `default`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnetIds",
        "List of at least 2 EC2 subnet IDs for the subnet group. The subnets must cover at least 2 availability zones.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
