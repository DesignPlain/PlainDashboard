import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface AgentArgs {
  // The IP address of the VPC endpoint the agent should connect to when retrieving an activation key during resource creation. Conflicts with `activation_key`.
  privateLinkEndpoint?: string;

  // The ARNs of the security groups used to protect your data transfer task subnets.
  securityGroupArns?: Array<string>;

  // The Amazon Resource Names (ARNs) of the subnets in which DataSync will create elastic network interfaces for each data transfer task.
  subnetArns?: Array<string>;

  // Key-value pairs of resource tags to assign to the DataSync Agent. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The ID of the VPC (virtual private cloud) endpoint that the agent has access to.
  vpcEndpointId?: string;

  // DataSync Agent activation key during resource creation. Conflicts with `ip_address`. If an `ip_address` is provided instead, the provider will retrieve the `activation_key` as part of the resource creation.
  activationKey?: string;

  // DataSync Agent IP address to retrieve activation key during resource creation. Conflicts with `activation_key`. DataSync Agent must be accessible on port 80 from where the provider is running.
  ipAddress?: string;

  // Name of the DataSync Agent.
  name?: string;
}
export class Agent extends Resource {
  // The ARNs of the security groups used to protect your data transfer task subnets.
  public securityGroupArns?: Array<string>;

  // The Amazon Resource Names (ARNs) of the subnets in which DataSync will create elastic network interfaces for each data transfer task.
  public subnetArns?: Array<string>;

  // Key-value pairs of resource tags to assign to the DataSync Agent. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ID of the VPC (virtual private cloud) endpoint that the agent has access to.
  public vpcEndpointId?: string;

  // DataSync Agent IP address to retrieve activation key during resource creation. Conflicts with `activation_key`. DataSync Agent must be accessible on port 80 from where the provider is running.
  public ipAddress?: string;

  // The IP address of the VPC endpoint the agent should connect to when retrieving an activation key during resource creation. Conflicts with `activation_key`.
  public privateLinkEndpoint?: string;

  // Name of the DataSync Agent.
  public name?: string;

  // DataSync Agent activation key during resource creation. Conflicts with `ip_address`. If an `ip_address` is provided instead, the provider will retrieve the `activation_key` as part of the resource creation.
  public activationKey?: string;

  // Amazon Resource Name (ARN) of the DataSync Agent.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "activationKey",
        "DataSync Agent activation key during resource creation. Conflicts with `ip_address`. If an `ip_address` is provided instead, the provider will retrieve the `activation_key` as part of the resource creation.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipAddress",
        "DataSync Agent IP address to retrieve activation key during resource creation. Conflicts with `activation_key`. DataSync Agent must be accessible on port 80 from where the provider is running.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the DataSync Agent.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "privateLinkEndpoint",
        "The IP address of the VPC endpoint the agent should connect to when retrieving an activation key during resource creation. Conflicts with `activation_key`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroupArns",
        "The ARNs of the security groups used to protect your data transfer task subnets.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnetArns",
        "The Amazon Resource Names (ARNs) of the subnets in which DataSync will create elastic network interfaces for each data transfer task.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value pairs of resource tags to assign to the DataSync Agent. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcEndpointId",
        "The ID of the VPC (virtual private cloud) endpoint that the agent has access to.",
        [],
        false,
        true,
      ),
    ];
  }
}
