import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ec2_VpcEndpointDnsOptions,
  ec2_VpcEndpointDnsOptions_GetTypes,
} from "../types/ec2_VpcEndpointDnsOptions";
import {
  ec2_VpcEndpointDnsEntry,
  ec2_VpcEndpointDnsEntry_GetTypes,
} from "../types/ec2_VpcEndpointDnsEntry";

export interface VpcEndpointArgs {
  // The VPC endpoint type, `Gateway`, `GatewayLoadBalancer`, or `Interface`. Defaults to `Gateway`.
  vpcEndpointType?: string;

  // The ID of the VPC in which the endpoint will be used.
  vpcId?: string;

  // The IP address type for the endpoint. Valid values are `ipv4`, `dualstack`, and `ipv6`.
  ipAddressType?: string;

  /*
Whether or not to associate a private hosted zone with the specified VPC. Applicable for endpoints of type `Interface`. Most users will want this enabled to allow services within the VPC to automatically use the endpoint.
Defaults to `false`.
*/
  privateDnsEnabled?: boolean;

  // One or more route table IDs. Applicable for endpoints of type `Gateway`.
  routeTableIds?: Array<string>;

  /*
The ID of one or more security groups to associate with the network interface. Applicable for endpoints of type `Interface`.
If no security groups are specified, the VPC's [default security group](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html#DefaultSecurityGroup) is associated with the endpoint.
*/
  securityGroupIds?: Array<string>;

  // The service name. For AWS services the service name is usually in the form `com.amazonaws.<region>.<service>` (the SageMaker Notebook service is an exception to this rule, the service name is in the form `aws.sagemaker.<region>.notebook`).
  serviceName?: string;

  // The ID of one or more subnets in which to create a network interface for the endpoint. Applicable for endpoints of type `GatewayLoadBalancer` and `Interface`. Interface type endpoints cannot function without being assigned to a subnet.
  subnetIds?: Array<string>;

  // Accept the VPC endpoint (the VPC endpoint and service need to be in the same AWS account).
  autoAccept?: boolean;

  // The DNS options for the endpoint. See dns_options below.
  dnsOptions?: ec2_VpcEndpointDnsOptions;

  // A policy to attach to the endpoint that controls access to the service. This is a JSON formatted string. Defaults to full access. All `Gateway` and some `Interface` endpoints support policies - see the [relevant AWS documentation](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-access.html) for more details.
  policy?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class VpcEndpoint extends Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The VPC endpoint type, `Gateway`, `GatewayLoadBalancer`, or `Interface`. Defaults to `Gateway`.
  public vpcEndpointType?: string;

  // The Amazon Resource Name (ARN) of the VPC endpoint.
  public arn?: string;

  // The IP address type for the endpoint. Valid values are `ipv4`, `dualstack`, and `ipv6`.
  public ipAddressType?: string;

  // A policy to attach to the endpoint that controls access to the service. This is a JSON formatted string. Defaults to full access. All `Gateway` and some `Interface` endpoints support policies - see the [relevant AWS documentation](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-access.html) for more details.
  public policy?: string;

  // The prefix list ID of the exposed AWS service. Applicable for endpoints of type `Gateway`.
  public prefixListId?: string;

  // The service name. For AWS services the service name is usually in the form `com.amazonaws.<region>.<service>` (the SageMaker Notebook service is an exception to this rule, the service name is in the form `aws.sagemaker.<region>.notebook`).
  public serviceName?: string;

  // Whether or not the VPC Endpoint is being managed by its service - `true` or `false`.
  public requesterManaged?: boolean;

  // The ID of one or more subnets in which to create a network interface for the endpoint. Applicable for endpoints of type `GatewayLoadBalancer` and `Interface`. Interface type endpoints cannot function without being assigned to a subnet.
  public subnetIds?: Array<string>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Accept the VPC endpoint (the VPC endpoint and service need to be in the same AWS account).
  public autoAccept?: boolean;

  // The DNS entries for the VPC Endpoint. Applicable for endpoints of type `Interface`. DNS blocks are documented below.
  public dnsEntries?: Array<ec2_VpcEndpointDnsEntry>;

  // The DNS options for the endpoint. See dns_options below.
  public dnsOptions?: ec2_VpcEndpointDnsOptions;

  // The ID of the AWS account that owns the VPC endpoint.
  public ownerId?: string;

  /*
Whether or not to associate a private hosted zone with the specified VPC. Applicable for endpoints of type `Interface`. Most users will want this enabled to allow services within the VPC to automatically use the endpoint.
Defaults to `false`.
*/
  public privateDnsEnabled?: boolean;

  /*
The ID of one or more security groups to associate with the network interface. Applicable for endpoints of type `Interface`.
If no security groups are specified, the VPC's [default security group](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html#DefaultSecurityGroup) is associated with the endpoint.
*/
  public securityGroupIds?: Array<string>;

  // The state of the VPC endpoint.
  public state?: string;

  // The ID of the VPC in which the endpoint will be used.
  public vpcId?: string;

  // The list of CIDR blocks for the exposed AWS service. Applicable for endpoints of type `Gateway`.
  public cidrBlocks?: Array<string>;

  // One or more network interfaces for the VPC Endpoint. Applicable for endpoints of type `Interface`.
  public networkInterfaceIds?: Array<string>;

  // One or more route table IDs. Applicable for endpoints of type `Gateway`.
  public routeTableIds?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "vpcId",
        "The ID of the VPC in which the endpoint will be used.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipAddressType",
        "The IP address type for the endpoint. Valid values are `ipv4`, `dualstack`, and `ipv6`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "privateDnsEnabled",
        "Whether or not to associate a private hosted zone with the specified VPC. Applicable for endpoints of type `Interface`. Most users will want this enabled to allow services within the VPC to automatically use the endpoint.\nDefaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "dnsOptions",
        "The DNS options for the endpoint. See dns_options below.",
        ec2_VpcEndpointDnsOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "policy",
        "A policy to attach to the endpoint that controls access to the service. This is a JSON formatted string. Defaults to full access. All `Gateway` and some `Interface` endpoints support policies - see the [relevant AWS documentation](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-access.html) for more details.",
        [],
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
        "vpcEndpointType",
        "The VPC endpoint type, `Gateway`, `GatewayLoadBalancer`, or `Interface`. Defaults to `Gateway`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "routeTableIds",
        "One or more route table IDs. Applicable for endpoints of type `Gateway`.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroupIds",
        "The ID of one or more security groups to associate with the network interface. Applicable for endpoints of type `Interface`.\nIf no security groups are specified, the VPC's [default security group](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html#DefaultSecurityGroup) is associated with the endpoint.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceName",
        "The service name. For AWS services the service name is usually in the form `com.amazonaws.<region>.<service>` (the SageMaker Notebook service is an exception to this rule, the service name is in the form `aws.sagemaker.<region>.notebook`).",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnetIds",
        "The ID of one or more subnets in which to create a network interface for the endpoint. Applicable for endpoints of type `GatewayLoadBalancer` and `Interface`. Interface type endpoints cannot function without being assigned to a subnet.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "autoAccept",
        "Accept the VPC endpoint (the VPC endpoint and service need to be in the same AWS account).",
        [],
        false,
        false,
      ),
    ];
  }
}
