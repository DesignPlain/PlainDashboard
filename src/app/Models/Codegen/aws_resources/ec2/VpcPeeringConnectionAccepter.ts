import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ec2_VpcPeeringConnectionAccepterRequester,
  ec2_VpcPeeringConnectionAccepterRequester_GetTypes,
} from "../types/ec2_VpcPeeringConnectionAccepterRequester";
import {
  ec2_VpcPeeringConnectionAccepterAccepter,
  ec2_VpcPeeringConnectionAccepterAccepter_GetTypes,
} from "../types/ec2_VpcPeeringConnectionAccepterAccepter";

export interface VpcPeeringConnectionAccepterArgs {
  /*
A configuration block that describes [VPC Peering Connection]
(https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html) options set for the requester VPC.
*/
  requester?: ec2_VpcPeeringConnectionAccepterRequester;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The VPC Peering Connection ID to manage.
  vpcPeeringConnectionId?: string;

  /*
A configuration block that describes [VPC Peering Connection]
(https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html) options set for the accepter VPC.
*/
  accepter?: ec2_VpcPeeringConnectionAccepterAccepter;

  // Whether or not to accept the peering request. Defaults to `false`.
  autoAccept?: boolean;
}
export class VpcPeeringConnectionAccepter extends Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The VPC Peering Connection ID to manage.
  public vpcPeeringConnectionId?: string;

  // The status of the VPC Peering Connection request.
  public acceptStatus?: string;

  // Whether or not to accept the peering request. Defaults to `false`.
  public autoAccept?: boolean;

  // The AWS account ID of the owner of the requester VPC.
  public peerOwnerId?: string;

  // The ID of the requester VPC.
  public peerVpcId?: string;

  /*
A configuration block that describes [VPC Peering Connection]
(https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html) options set for the requester VPC.
*/
  public requester?: ec2_VpcPeeringConnectionAccepterRequester;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  /*
A configuration block that describes [VPC Peering Connection]
(https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html) options set for the accepter VPC.
*/
  public accepter?: ec2_VpcPeeringConnectionAccepterAccepter;

  // The region of the accepter VPC.
  public peerRegion?: string;

  // The ID of the accepter VPC.
  public vpcId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "requester",
        "A configuration block that describes [VPC Peering Connection]\n(https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html) options set for the requester VPC.",
        ec2_VpcPeeringConnectionAccepterRequester_GetTypes(),
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
        "vpcPeeringConnectionId",
        "The VPC Peering Connection ID to manage.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "accepter",
        "A configuration block that describes [VPC Peering Connection]\n(https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html) options set for the accepter VPC.",
        ec2_VpcPeeringConnectionAccepterAccepter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "autoAccept",
        "Whether or not to accept the peering request. Defaults to `false`.",
        [],
        false,
        false,
      ),
    ];
  }
}
