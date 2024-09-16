import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  waf_IpSetIpSetDescriptor,
  waf_IpSetIpSetDescriptor_GetTypes,
} from '../types/waf_IpSetIpSetDescriptor';

export interface IpSetArgs {
  // One or more pairs specifying the IP address type (IPV4 or IPV6) and the IP address range (in CIDR format) from which web requests originate.
  ipSetDescriptors?: Array<waf_IpSetIpSetDescriptor>;

  // The name or description of the IPSet.
  name?: string;
}
export class IpSet extends DS_Resource {
  // The ARN of the WAF IPSet.
  public arn?: string;

  // One or more pairs specifying the IP address type (IPV4 or IPV6) and the IP address range (in CIDR format) from which web requests originate.
  public ipSetDescriptors?: Array<waf_IpSetIpSetDescriptor>;

  // The name or description of the IPSet.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'ipSetDescriptors',
        'One or more pairs specifying the IP address type (IPV4 or IPV6) and the IP address range (in CIDR format) from which web requests originate.',
        () => waf_IpSetIpSetDescriptor_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name or description of the IPSet.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
