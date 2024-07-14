import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  ec2transitgateway_InstanceConnectEndpointTimeouts,
  ec2transitgateway_InstanceConnectEndpointTimeouts_GetTypes,
} from "../types/ec2transitgateway_InstanceConnectEndpointTimeouts";

export interface InstanceConnectEndpointArgs {
  // Indicates whether your client's IP address is preserved as the source. Default: `true`.
  preserveClientIp?: boolean;

  // One or more security groups to associate with the endpoint. If you don't specify a security group, the default security group for the VPC will be associated with the endpoint.
  securityGroupIds?: Array<string>;

  // The ID of the subnet in which to create the EC2 Instance Connect Endpoint.
  subnetId?: string;

  // Map of tags to assign to this resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  //
  timeouts?: ec2transitgateway_InstanceConnectEndpointTimeouts;
}
export class InstanceConnectEndpoint extends Resource {
  // Indicates whether your client's IP address is preserved as the source. Default: `true`.
  public preserveClientIp?: boolean;

  //
  public timeouts?: ec2transitgateway_InstanceConnectEndpointTimeouts;

  // The Availability Zone of the EC2 Instance Connect Endpoint.
  public availabilityZone?: string;

  // The DNS name of the EC2 Instance Connect Endpoint.
  public dnsName?: string;

  // The DNS name of the EC2 Instance Connect FIPS Endpoint.
  public fipsDnsName?: string;

  // One or more security groups to associate with the endpoint. If you don't specify a security group, the default security group for the VPC will be associated with the endpoint.
  public securityGroupIds?: Array<string>;

  // The ID of the subnet in which to create the EC2 Instance Connect Endpoint.
  public subnetId?: string;

  // Map of tags to assign to this resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ID of the VPC in which the EC2 Instance Connect Endpoint was created.
  public vpcId?: string;

  // The Amazon Resource Name (ARN) of the EC2 Instance Connect Endpoint.
  public arn?: string;

  // The IDs of the ENIs that Amazon EC2 automatically created when creating the EC2 Instance Connect Endpoint.
  public networkInterfaceIds?: Array<string>;

  // The ID of the AWS account that created the EC2 Instance Connect Endpoint.
  public ownerId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "preserveClientIp",
        "Indicates whether your client's IP address is preserved as the source. Default: `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroupIds",
        "One or more security groups to associate with the endpoint. If you don't specify a security group, the default security group for the VPC will be associated with the endpoint.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetId",
        "The ID of the subnet in which to create the EC2 Instance Connect Endpoint.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to this resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        ec2transitgateway_InstanceConnectEndpointTimeouts_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
