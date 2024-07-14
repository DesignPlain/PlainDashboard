import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
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
export class PeeringConnectionOptions extends Resource {
  // An optional configuration block that allows for [VPC Peering Connection](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html) options to be set for the VPC that acceptsthe peering connection (a maximum of one).
  public accepter?: ec2_PeeringConnectionOptionsAccepter;

  // A optional configuration block that allows for [VPC Peering Connection](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html) options to be set for the VPC that requeststhe peering connection (a maximum of one).
  public requester?: ec2_PeeringConnectionOptionsRequester;

  // The ID of the requester VPC peering connection.
  public vpcPeeringConnectionId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "vpcPeeringConnectionId",
        "The ID of the requester VPC peering connection.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "accepter",
        "An optional configuration block that allows for [VPC Peering Connection](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html) options to be set for the VPC that acceptsthe peering connection (a maximum of one).",
        ec2_PeeringConnectionOptionsAccepter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "requester",
        "A optional configuration block that allows for [VPC Peering Connection](https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html) options to be set for the VPC that requeststhe peering connection (a maximum of one).",
        ec2_PeeringConnectionOptionsRequester_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
