import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  globalaccelerator_AcceleratorAttributes,
  globalaccelerator_AcceleratorAttributes_GetTypes,
} from "../types/globalaccelerator_AcceleratorAttributes";
import {
  globalaccelerator_AcceleratorIpSet,
  globalaccelerator_AcceleratorIpSet_GetTypes,
} from "../types/globalaccelerator_AcceleratorIpSet";

export interface AcceleratorArgs {
  // The attributes of the accelerator. Fields documented below.
  attributes?: globalaccelerator_AcceleratorAttributes;

  // Indicates whether the accelerator is enabled. Defaults to `true`. Valid values: `true`, `false`.
  enabled?: boolean;

  // The value for the address type. Defaults to `IPV4`. Valid values: `IPV4`, `DUAL_STACK`.
  ipAddressType?: string;

  // The IP addresses to use for BYOIP accelerators. If not specified, the service assigns IP addresses. Valid values: 1 or 2 IPv4 addresses.
  ipAddresses?: Array<string>;

  // The name of the accelerator.
  name?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Accelerator extends Resource {
  // The DNS name of the accelerator. For example, `a5d53ff5ee6bca4ce.awsglobalaccelerator.com`.
  public dnsName?: string;

  /*
-  The Global Accelerator Route 53 zone ID that can be used to
route an [Alias Resource Record Set](https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html) to the Global Accelerator. This attribute
is simply an alias for the zone ID `Z2BJ6XQ5FK7U4H`.
*/
  public hostedZoneId?: string;

  // The value for the address type. Defaults to `IPV4`. Valid values: `IPV4`, `DUAL_STACK`.
  public ipAddressType?: string;

  // IP address set associated with the accelerator.
  public ipSets?: Array<globalaccelerator_AcceleratorIpSet>;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The attributes of the accelerator. Fields documented below.
  public attributes?: globalaccelerator_AcceleratorAttributes;

  // The Domain Name System (DNS) name that Global Accelerator creates that points to a dual-stack accelerator's four static IP addresses: two IPv4 addresses and two IPv6 addresses. For example, `a1234567890abcdef.dualstack.awsglobalaccelerator.com`.
  public dualStackDnsName?: string;

  // Indicates whether the accelerator is enabled. Defaults to `true`. Valid values: `true`, `false`.
  public enabled?: boolean;

  // The IP addresses to use for BYOIP accelerators. If not specified, the service assigns IP addresses. Valid values: 1 or 2 IPv4 addresses.
  public ipAddresses?: Array<string>;

  // The name of the accelerator.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ipAddressType",
        "The value for the address type. Defaults to `IPV4`. Valid values: `IPV4`, `DUAL_STACK`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ipAddresses",
        "The IP addresses to use for BYOIP accelerators. If not specified, the service assigns IP addresses. Valid values: 1 or 2 IPv4 addresses.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the accelerator.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "attributes",
        "The attributes of the accelerator. Fields documented below.",
        globalaccelerator_AcceleratorAttributes_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Indicates whether the accelerator is enabled. Defaults to `true`. Valid values: `true`, `false`.",
        [],
        false,
        false,
      ),
    ];
  }
}
