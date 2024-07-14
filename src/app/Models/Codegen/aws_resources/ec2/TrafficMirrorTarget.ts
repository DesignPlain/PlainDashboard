import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface TrafficMirrorTargetArgs {
  // A description of the traffic mirror session.
  description?: string;

  // The VPC Endpoint Id of the Gateway Load Balancer that is associated with the target.
  gatewayLoadBalancerEndpointId?: string;

  // The network interface ID that is associated with the target.
  networkInterfaceId?: string;

  // The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the target.
  networkLoadBalancerArn?: string;

  /*
Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

--NOTE:-- Either `network_interface_id` or `network_load_balancer_arn` should be specified and both should not be specified together
*/
  tags?: Map<string, string>;
}
export class TrafficMirrorTarget extends Resource {
  // A description of the traffic mirror session.
  public description?: string;

  // The VPC Endpoint Id of the Gateway Load Balancer that is associated with the target.
  public gatewayLoadBalancerEndpointId?: string;

  // The network interface ID that is associated with the target.
  public networkInterfaceId?: string;

  // The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the target.
  public networkLoadBalancerArn?: string;

  // The ID of the AWS account that owns the traffic mirror target.
  public ownerId?: string;

  /*
Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

--NOTE:-- Either `network_interface_id` or `network_load_balancer_arn` should be specified and both should not be specified together
*/
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the traffic mirror target.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.\n\n**NOTE:** Either `network_interface_id` or `network_load_balancer_arn` should be specified and both should not be specified together",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the traffic mirror session.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "gatewayLoadBalancerEndpointId",
        "The VPC Endpoint Id of the Gateway Load Balancer that is associated with the target.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "networkInterfaceId",
        "The network interface ID that is associated with the target.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "networkLoadBalancerArn",
        "The Amazon Resource Name (ARN) of the Network Load Balancer that is associated with the target.",
        [],
        false,
        true,
      ),
    ];
  }
}
