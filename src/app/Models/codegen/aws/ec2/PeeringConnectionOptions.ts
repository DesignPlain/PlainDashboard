import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ec2_PeeringConnectionOptionsAccepter,
  ec2_PeeringConnectionOptionsAccepter_GetTypes,
} from "../types/ec2_PeeringConnectionOptionsAccepter";
import {
  ec2_PeeringConnectionOptionsRequester,
  ec2_PeeringConnectionOptionsRequester_GetTypes,
} from "../types/ec2_PeeringConnectionOptionsRequester";

export interface PeeringConnectionOptionsArgs {
  // An optional configuration block that allows for [VPC Peering Connection](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html) options to be set for the VPC that acceptsthe peering connection (a maximum of one).
  accepter?: ec2_PeeringConnectionOptionsAccepter;

  // A optional configuration block that allows for [VPC Peering Connection](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html) options to be set for the VPC that requeststhe peering connection (a maximum of one).
  requester?: ec2_PeeringConnectionOptionsRequester;

  // The ID of the requester VPC peering connection.
  vpcPeeringConnectionId?: string;
}
export class PeeringConnectionOptions extends DS_Resource {
  // A optional configuration block that allows for [VPC Peering Connection](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html) options to be set for the VPC that requeststhe peering connection (a maximum of one).
  public requester?: ec2_PeeringConnectionOptionsRequester;

  // The ID of the requester VPC peering connection.
  public vpcPeeringConnectionId?: string;

  // An optional configuration block that allows for [VPC Peering Connection](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html) options to be set for the VPC that acceptsthe peering connection (a maximum of one).
  public accepter?: ec2_PeeringConnectionOptionsAccepter;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "accepter",
        "An optional configuration block that allows for [VPC Peering Connection](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html) options to be set for the VPC that acceptsthe peering connection (a maximum of one).",
        () => ec2_PeeringConnectionOptionsAccepter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "requester",
        "A optional configuration block that allows for [VPC Peering Connection](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html) options to be set for the VPC that requeststhe peering connection (a maximum of one).",
        () => ec2_PeeringConnectionOptionsRequester_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcPeeringConnectionId",
        "The ID of the requester VPC peering connection.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
