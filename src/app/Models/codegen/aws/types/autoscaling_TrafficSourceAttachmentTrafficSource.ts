import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface autoscaling_TrafficSourceAttachmentTrafficSource {
  /*
Provides additional context for the value of `identifier`.
The following lists the valid values:
`elb` if `identifier` is the name of a Classic Load Balancer.
`elbv2` if `identifier` is the ARN of an Application Load Balancer, Gateway Load Balancer, or Network Load Balancer target group.
`vpc-lattice` if `identifier` is the ARN of a VPC Lattice target group.
*/
  type?: string;

  // Identifies the traffic source. For Application Load Balancers, Gateway Load Balancers, Network Load Balancers, and VPC Lattice, this will be the Amazon Resource Name (ARN) for a target group in this account and Region. For Classic Load Balancers, this will be the name of the Classic Load Balancer in this account and Region.
  identifier?: string;
}

export function autoscaling_TrafficSourceAttachmentTrafficSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "Provides additional context for the value of `identifier`.\nThe following lists the valid values:\n`elb` if `identifier` is the name of a Classic Load Balancer.\n`elbv2` if `identifier` is the ARN of an Application Load Balancer, Gateway Load Balancer, or Network Load Balancer target group.\n`vpc-lattice` if `identifier` is the ARN of a VPC Lattice target group.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "identifier",
      "Identifies the traffic source. For Application Load Balancers, Gateway Load Balancers, Network Load Balancers, and VPC Lattice, this will be the Amazon Resource Name (ARN) for a target group in this account and Region. For Classic Load Balancers, this will be the name of the Classic Load Balancer in this account and Region.",
      () => [],
      true,
      true,
    ),
  ];
}
