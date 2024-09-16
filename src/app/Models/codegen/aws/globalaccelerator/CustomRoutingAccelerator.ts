import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  globalaccelerator_CustomRoutingAcceleratorAttributes,
  globalaccelerator_CustomRoutingAcceleratorAttributes_GetTypes,
} from '../types/globalaccelerator_CustomRoutingAcceleratorAttributes';
import {
  globalaccelerator_CustomRoutingAcceleratorIpSet,
  globalaccelerator_CustomRoutingAcceleratorIpSet_GetTypes,
} from '../types/globalaccelerator_CustomRoutingAcceleratorIpSet';

export interface CustomRoutingAcceleratorArgs {
  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The attributes of the accelerator. Fields documented below.
  attributes?: globalaccelerator_CustomRoutingAcceleratorAttributes;

  // Indicates whether the accelerator is enabled. Defaults to `true`. Valid values: `true`, `false`.
  enabled?: boolean;

  // The IP address type that an accelerator supports. For a custom routing accelerator, the value must be `"IPV4"`.
  ipAddressType?: string;

  // The IP addresses to use for BYOIP accelerators. If not specified, the service assigns IP addresses. Valid values: 1 or 2 IPv4 addresses.
  ipAddresses?: Array<string>;

  // The name of a custom routing accelerator.
  name?: string;
}
export class CustomRoutingAccelerator extends DS_Resource {
  // Indicates whether the accelerator is enabled. Defaults to `true`. Valid values: `true`, `false`.
  public enabled?: boolean;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The name of a custom routing accelerator.
  public name?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The attributes of the accelerator. Fields documented below.
  public attributes?: globalaccelerator_CustomRoutingAcceleratorAttributes;

  // The DNS name of the accelerator. For example, `a5d53ff5ee6bca4ce.awsglobalaccelerator.com`.
  public dnsName?: string;

  /*
-  The Global Accelerator Route 53 zone ID that can be used to
route an [Alias Resource Record Set](https://docs.aws.amazon.com/Route53/latest/APIReference/API_AliasTarget.html) to the Global Accelerator. This attribute
is simply an alias for the zone ID `Z2BJ6XQ5FK7U4H`.
*/
  public hostedZoneId?: string;

  // The IP address type that an accelerator supports. For a custom routing accelerator, the value must be `"IPV4"`.
  public ipAddressType?: string;

  // The IP addresses to use for BYOIP accelerators. If not specified, the service assigns IP addresses. Valid values: 1 or 2 IPv4 addresses.
  public ipAddresses?: Array<string>;

  // IP address set associated with the accelerator.
  public ipSets?: Array<globalaccelerator_CustomRoutingAcceleratorIpSet>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of a custom routing accelerator.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'attributes',
        'The attributes of the accelerator. Fields documented below.',
        () => globalaccelerator_CustomRoutingAcceleratorAttributes_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enabled',
        'Indicates whether the accelerator is enabled. Defaults to `true`. Valid values: `true`, `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'ipAddressType',
        'The IP address type that an accelerator supports. For a custom routing accelerator, the value must be `"IPV4"`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'ipAddresses',
        'The IP addresses to use for BYOIP accelerators. If not specified, the service assigns IP addresses. Valid values: 1 or 2 IPv4 addresses.',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
