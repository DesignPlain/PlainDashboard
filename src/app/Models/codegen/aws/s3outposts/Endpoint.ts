import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3outposts_EndpointNetworkInterface,
  s3outposts_EndpointNetworkInterface_GetTypes,
} from '../types/s3outposts_EndpointNetworkInterface';

export interface EndpointArgs {
  // Identifier of the Outpost to contain this endpoint.
  outpostId?: string;

  // Identifier of the EC2 Security Group.
  securityGroupId?: string;

  // Identifier of the EC2 Subnet.
  subnetId?: string;

  // Type of access for the network connectivity. Valid values are `Private` or `CustomerOwnedIp`.
  accessType?: string;

  // The ID of a Customer Owned IP Pool. For more on customer owned IP addresses see the [User Guide](https://docs.aws.amazon.com/outposts/latest/userguide/local-rack.html#local-gateway-subnet).
  customerOwnedIpv4Pool?: string;
}
export class Endpoint extends DS_Resource {
  // Amazon Resource Name (ARN) of the endpoint.
  public arn?: string;

  // VPC CIDR block of the endpoint.
  public cidrBlock?: string;

  // UTC creation time in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8).
  public creationTime?: string;

  // Identifier of the EC2 Security Group.
  public securityGroupId?: string;

  // Identifier of the EC2 Subnet.
  public subnetId?: string;

  // Type of access for the network connectivity. Valid values are `Private` or `CustomerOwnedIp`.
  public accessType?: string;

  // The ID of a Customer Owned IP Pool. For more on customer owned IP addresses see the [User Guide](https://docs.aws.amazon.com/outposts/latest/userguide/local-rack.html#local-gateway-subnet).
  public customerOwnedIpv4Pool?: string;

  // Set of nested attributes for associated Elastic Network Interfaces (ENIs).
  public networkInterfaces?: Array<s3outposts_EndpointNetworkInterface>;

  // Identifier of the Outpost to contain this endpoint.
  public outpostId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'customerOwnedIpv4Pool',
        'The ID of a Customer Owned IP Pool. For more on customer owned IP addresses see the [User Guide](https://docs.aws.amazon.com/outposts/latest/userguide/local-rack.html#local-gateway-subnet).',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'outpostId',
        'Identifier of the Outpost to contain this endpoint.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'securityGroupId',
        'Identifier of the EC2 Security Group.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'subnetId',
        'Identifier of the EC2 Subnet.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'accessType',
        'Type of access for the network connectivity. Valid values are `Private` or `CustomerOwnedIp`.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
