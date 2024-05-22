import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  quicksight_VpcConnectionTimeouts,
  quicksight_VpcConnectionTimeouts_GetTypes,
} from "../types/quicksight_VpcConnectionTimeouts";

export interface VpcConnectionArgs {
  /*
A list of subnet IDs for the VPC connection.

The following arguments are optional:
*/
  subnetIds?: Array<string>;

  // The ID of the VPC connection.
  vpcConnectionId?: string;

  // AWS account ID.
  awsAccountId?: string;

  // The display name for the VPC connection.
  name?: string;

  // The IAM role to associate with the VPC connection.
  roleArn?: string;

  // A list of security group IDs for the VPC connection.
  securityGroupIds?: Array<string>;

  // A list of IP addresses of DNS resolver endpoints for the VPC connection.
  dnsResolvers?: Array<string>;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  //
  timeouts?: quicksight_VpcConnectionTimeouts;
}
export class VpcConnection extends Resource {
  // The ID of the VPC connection.
  public vpcConnectionId?: string;

  // ARN of the VPC connection.
  public arn?: string;

  // The availability status of the VPC connection. Valid values are `AVAILABLE`, `UNAVAILABLE` or `PARTIALLY_AVAILABLE`.
  public availabilityStatus?: string;

  /*
A list of subnet IDs for the VPC connection.

The following arguments are optional:
*/
  public subnetIds?: Array<string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public timeouts?: quicksight_VpcConnectionTimeouts;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // AWS account ID.
  public awsAccountId?: string;

  // A list of IP addresses of DNS resolver endpoints for the VPC connection.
  public dnsResolvers?: Array<string>;

  // The display name for the VPC connection.
  public name?: string;

  // The IAM role to associate with the VPC connection.
  public roleArn?: string;

  // A list of security group IDs for the VPC connection.
  public securityGroupIds?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "securityGroupIds",
        "A list of security group IDs for the VPC connection.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "dnsResolvers",
        "A list of IP addresses of DNS resolver endpoints for the VPC connection.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnetIds",
        "A list of subnet IDs for the VPC connection.\n\nThe following arguments are optional:",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "awsAccountId",
        "AWS account ID.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The IAM role to associate with the VPC connection.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        quicksight_VpcConnectionTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcConnectionId",
        "The ID of the VPC connection.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The display name for the VPC connection.",
        [],
        false,
        false,
      ),
    ];
  }
}
