import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface CustomerGatewayArgs {
  // The gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN). Valid values are from  `1` to `2147483647`. Conflicts with `bgp_asn_extended`.
  bgpAsn?: string;

  // The gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN). Valid values are from  `2147483648` to `4294967295` Conflicts with `bgp_asn`.
  bgpAsnExtended?: string;

  // The Amazon Resource Name (ARN) for the customer gateway certificate.
  certificateArn?: string;

  // A name for the customer gateway device.
  deviceName?: string;

  // The IPv4 address for the customer gateway device's outside interface.
  ipAddress?: string;

  // Tags to apply to the gateway. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
The type of customer gateway. The only type AWS
supports at this time is "ipsec.1".
*/
  type?: string;
}
export class CustomerGateway extends DS_Resource {
  // A name for the customer gateway device.
  public deviceName?: string;

  // The IPv4 address for the customer gateway device's outside interface.
  public ipAddress?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
The type of customer gateway. The only type AWS
supports at this time is "ipsec.1".
*/
  public type?: string;

  // The gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN). Valid values are from  `1` to `2147483647`. Conflicts with `bgp_asn_extended`.
  public bgpAsn?: string;

  // The gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN). Valid values are from  `2147483648` to `4294967295` Conflicts with `bgp_asn`.
  public bgpAsnExtended?: string;

  // The Amazon Resource Name (ARN) for the customer gateway certificate.
  public certificateArn?: string;

  // The ARN of the customer gateway.
  public arn?: string;

  // Tags to apply to the gateway. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Tags to apply to the gateway. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'type',
        'The type of customer gateway. The only type AWS\nsupports at this time is "ipsec.1".',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'bgpAsn',
        "The gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN). Valid values are from  `1` to `2147483647`. Conflicts with `bgp_asn_extended`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'bgpAsnExtended',
        "The gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN). Valid values are from  `2147483648` to `4294967295` Conflicts with `bgp_asn`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'certificateArn',
        'The Amazon Resource Name (ARN) for the customer gateway certificate.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'deviceName',
        'A name for the customer gateway device.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'ipAddress',
        "The IPv4 address for the customer gateway device's outside interface.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
