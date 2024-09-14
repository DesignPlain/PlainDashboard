import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface VpnGatewayArgs {
  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The VPC ID to create in.
  vpcId?: string;

  // The Autonomous System Number (ASN) for the Amazon side of the gateway. If you don't specify an ASN, the virtual private gateway is created with the default ASN.
  amazonSideAsn?: string;

  // The Availability Zone for the virtual private gateway.
  availabilityZone?: string;
}
export class VpnGateway extends DS_Resource {
  // The VPC ID to create in.
  public vpcId?: string;

  // The Autonomous System Number (ASN) for the Amazon side of the gateway. If you don't specify an ASN, the virtual private gateway is created with the default ASN.
  public amazonSideAsn?: string;

  // Amazon Resource Name (ARN) of the VPN Gateway.
  public arn?: string;

  // The Availability Zone for the virtual private gateway.
  public availabilityZone?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "amazonSideAsn",
        "The Autonomous System Number (ASN) for the Amazon side of the gateway. If you don't specify an ASN, the virtual private gateway is created with the default ASN.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "availabilityZone",
        "The Availability Zone for the virtual private gateway.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcId",
        "The VPC ID to create in.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
