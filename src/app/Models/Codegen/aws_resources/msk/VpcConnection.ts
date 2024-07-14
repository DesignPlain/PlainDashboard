import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface VpcConnectionArgs {
  // The security groups to attach to the ENIs for the broker nodes.
  securityGroups?: Array<string>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The Amazon Resource Name (ARN) of the cluster.
  targetClusterArn?: string;

  // The VPC ID of the remote client.
  vpcId?: string;

  // The authentication type for the client VPC connection. Specify one of these auth type strings: SASL_IAM, SASL_SCRAM, or TLS.
  authentication?: string;

  // The list of subnets in the client VPC to connect to.
  clientSubnets?: Array<string>;
}
export class VpcConnection extends Resource {
  // The security groups to attach to the ENIs for the broker nodes.
  public securityGroups?: Array<string>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name (ARN) of the cluster.
  public targetClusterArn?: string;

  // The VPC ID of the remote client.
  public vpcId?: string;

  // Amazon Resource Name (ARN) of the VPC connection.
  public arn?: string;

  // The authentication type for the client VPC connection. Specify one of these auth type strings: SASL_IAM, SASL_SCRAM, or TLS.
  public authentication?: string;

  // The list of subnets in the client VPC to connect to.
  public clientSubnets?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "vpcId",
        "The VPC ID of the remote client.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "authentication",
        "The authentication type for the client VPC connection. Specify one of these auth type strings: SASL_IAM, SASL_SCRAM, or TLS.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "clientSubnets",
        "The list of subnets in the client VPC to connect to.",
        InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "securityGroups",
        "The security groups to attach to the ENIs for the broker nodes.",
        InputType_String_GetTypes(),
        true,
        true,
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
        "targetClusterArn",
        "The Amazon Resource Name (ARN) of the cluster.",
        [],
        true,
        true,
      ),
    ];
  }
}
