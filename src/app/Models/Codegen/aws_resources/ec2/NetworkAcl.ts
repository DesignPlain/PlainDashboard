import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ec2_NetworkAclIngress,
  ec2_NetworkAclIngress_GetTypes,
} from "../types/ec2_NetworkAclIngress";
import {
  ec2_NetworkAclEgress,
  ec2_NetworkAclEgress_GetTypes,
} from "../types/ec2_NetworkAclEgress";

export interface NetworkAclArgs {
  // Specifies an ingress rule. Parameters defined below.
  ingress?: Array<ec2_NetworkAclIngress>;

  // A list of Subnet IDs to apply the ACL to
  subnetIds?: Array<string>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The ID of the associated VPC.
  vpcId?: string;

  // Specifies an egress rule. Parameters defined below.
  egress?: Array<ec2_NetworkAclEgress>;
}
export class NetworkAcl extends Resource {
  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ID of the associated VPC.
  public vpcId?: string;

  // The ARN of the network ACL
  public arn?: string;

  // Specifies an egress rule. Parameters defined below.
  public egress?: Array<ec2_NetworkAclEgress>;

  // Specifies an ingress rule. Parameters defined below.
  public ingress?: Array<ec2_NetworkAclIngress>;

  // The ID of the AWS account that owns the network ACL.
  public ownerId?: string;

  // A list of Subnet IDs to apply the ACL to
  public subnetIds?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "subnetIds",
        "A list of Subnet IDs to apply the ACL to",
        InputType_String_GetTypes(),
        false,
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
      new DynamicUIProps(
        InputType.String,
        "vpcId",
        "The ID of the associated VPC.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "egress",
        "Specifies an egress rule. Parameters defined below.",
        ec2_NetworkAclEgress_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ingress",
        "Specifies an ingress rule. Parameters defined below.",
        ec2_NetworkAclIngress_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
