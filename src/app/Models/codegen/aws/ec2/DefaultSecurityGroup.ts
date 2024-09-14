import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ec2_DefaultSecurityGroupEgress,
  ec2_DefaultSecurityGroupEgress_GetTypes,
} from "../types/ec2_DefaultSecurityGroupEgress";
import {
  ec2_DefaultSecurityGroupIngress,
  ec2_DefaultSecurityGroupIngress_GetTypes,
} from "../types/ec2_DefaultSecurityGroupIngress";

export interface DefaultSecurityGroupArgs {
  // Configuration block. Detailed below.
  egress?: Array<ec2_DefaultSecurityGroupEgress>;

  // Configuration block. Detailed below.
  ingress?: Array<ec2_DefaultSecurityGroupIngress>;

  //
  revokeRulesOnDelete?: boolean;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // VPC ID. --Note that changing the `vpc_id` will _not_ restore any default security group rules that were modified, added, or removed.-- It will be left in its current state.
  vpcId?: string;
}
export class DefaultSecurityGroup extends DS_Resource {
  // Name of the security group.
  public name?: string;

  //
  public namePrefix?: string;

  // Owner ID.
  public ownerId?: string;

  //
  public revokeRulesOnDelete?: boolean;

  // Description of the security group.
  public description?: string;

  // Configuration block. Detailed below.
  public egress?: Array<ec2_DefaultSecurityGroupEgress>;

  // Configuration block. Detailed below.
  public ingress?: Array<ec2_DefaultSecurityGroupIngress>;

  // VPC ID. --Note that changing the `vpc_id` will _not_ restore any default security group rules that were modified, added, or removed.-- It will be left in its current state.
  public vpcId?: string;

  // ARN of the security group.
  public arn?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "egress",
        "Configuration block. Detailed below.",
        () => ec2_DefaultSecurityGroupEgress_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ingress",
        "Configuration block. Detailed below.",
        () => ec2_DefaultSecurityGroupIngress_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "revokeRulesOnDelete",
        "",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcId",
        "VPC ID. **Note that changing the `vpc_id` will _not_ restore any default security group rules that were modified, added, or removed.** It will be left in its current state.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
