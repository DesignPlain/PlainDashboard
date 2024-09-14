import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ec2_VpcPeeringConnectionRequester,
  ec2_VpcPeeringConnectionRequester_GetTypes,
} from "../types/ec2_VpcPeeringConnectionRequester";
import {
  ec2_VpcPeeringConnectionAccepter,
  ec2_VpcPeeringConnectionAccepter_GetTypes,
} from "../types/ec2_VpcPeeringConnectionAccepter";

export interface VpcPeeringConnectionArgs {
  /*
The AWS account ID of the target peer VPC.
Defaults to the account ID the [AWS provider][1] is currently connected to, so must be managed if connecting cross-account.
*/
  peerOwnerId?: string;

  /*
The region of the accepter VPC of the VPC Peering Connection. `auto_accept` must be `false`,
and use the `aws.ec2.VpcPeeringConnectionAccepter` to manage the accepter side.
*/
  peerRegion?: string;

  // The ID of the target VPC with which you are creating the VPC Peering Connection.
  peerVpcId?: string;

  /*
A optional configuration block that allows for [VPC Peering Connection](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html) options to be set for the VPC that requests
the peering connection (a maximum of one).
*/
  requester?: ec2_VpcPeeringConnectionRequester;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The ID of the requester VPC.
  vpcId?: string;

  /*
An optional configuration block that allows for [VPC Peering Connection](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html) options to be set for the VPC that accepts
the peering connection (a maximum of one).
*/
  accepter?: ec2_VpcPeeringConnectionAccepter;

  // Accept the peering (both VPCs need to be in the same AWS account and region).
  autoAccept?: boolean;
}
export class VpcPeeringConnection extends DS_Resource {
  /*
The region of the accepter VPC of the VPC Peering Connection. `auto_accept` must be `false`,
and use the `aws.ec2.VpcPeeringConnectionAccepter` to manage the accepter side.
*/
  public peerRegion?: string;

  /*
A optional configuration block that allows for [VPC Peering Connection](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html) options to be set for the VPC that requests
the peering connection (a maximum of one).
*/
  public requester?: ec2_VpcPeeringConnectionRequester;

  /*
The AWS account ID of the target peer VPC.
Defaults to the account ID the [AWS provider][1] is currently connected to, so must be managed if connecting cross-account.
*/
  public peerOwnerId?: string;

  // The ID of the target VPC with which you are creating the VPC Peering Connection.
  public peerVpcId?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ID of the requester VPC.
  public vpcId?: string;

  // The status of the VPC Peering Connection request.
  public acceptStatus?: string;

  /*
An optional configuration block that allows for [VPC Peering Connection](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html) options to be set for the VPC that accepts
the peering connection (a maximum of one).
*/
  public accepter?: ec2_VpcPeeringConnectionAccepter;

  // Accept the peering (both VPCs need to be in the same AWS account and region).
  public autoAccept?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "vpcId",
        "The ID of the requester VPC.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "accepter",
        "An optional configuration block that allows for [VPC Peering Connection](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html) options to be set for the VPC that accepts\nthe peering connection (a maximum of one).",
        () => ec2_VpcPeeringConnectionAccepter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "autoAccept",
        "Accept the peering (both VPCs need to be in the same AWS account and region).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "peerOwnerId",
        "The AWS account ID of the target peer VPC.\nDefaults to the account ID the [AWS provider][1] is currently connected to, so must be managed if connecting cross-account.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "peerRegion",
        "The region of the accepter VPC of the VPC Peering Connection. `auto_accept` must be `false`,\nand use the `aws.ec2.VpcPeeringConnectionAccepter` to manage the accepter side.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "peerVpcId",
        "The ID of the target VPC with which you are creating the VPC Peering Connection.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "requester",
        "A optional configuration block that allows for [VPC Peering Connection](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html) options to be set for the VPC that requests\nthe peering connection (a maximum of one).",
        () => ec2_VpcPeeringConnectionRequester_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
