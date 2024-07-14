import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  waf_IpSetIpSetDescriptor,
  waf_IpSetIpSetDescriptor_GetTypes,
} from "../types/waf_IpSetIpSetDescriptor";

export interface IpSetArgs {
  // The name or description of the IPSet.
  name?: string;

  // One or more pairs specifying the IP address type (IPV4 or IPV6) and the IP address range (in CIDR format) from which web requests originate.
  ipSetDescriptors?: Array<waf_IpSetIpSetDescriptor>;
}
export class IpSet extends Resource {
  // The ARN of the WAF IPSet.
  public arn?: string;

  // One or more pairs specifying the IP address type (IPV4 or IPV6) and the IP address range (in CIDR format) from which web requests originate.
  public ipSetDescriptors?: Array<waf_IpSetIpSetDescriptor>;

  // The name or description of the IPSet.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name or description of the IPSet.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ipSetDescriptors",
        "One or more pairs specifying the IP address type (IPV4 or IPV6) and the IP address range (in CIDR format) from which web requests originate.",
        waf_IpSetIpSetDescriptor_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
