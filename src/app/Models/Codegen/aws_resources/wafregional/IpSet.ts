import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  wafregional_IpSetIpSetDescriptor,
  wafregional_IpSetIpSetDescriptor_GetTypes,
} from "../types/wafregional_IpSetIpSetDescriptor";

export interface IpSetArgs {
  // One or more pairs specifying the IP address type (IPV4 or IPV6) and the IP address range (in CIDR notation) from which web requests originate.
  ipSetDescriptors?: Array<wafregional_IpSetIpSetDescriptor>;

  // The name or description of the IPSet.
  name?: string;
}
export class IpSet extends Resource {
  // The ARN of the WAF IPSet.
  public arn?: string;

  // One or more pairs specifying the IP address type (IPV4 or IPV6) and the IP address range (in CIDR notation) from which web requests originate.
  public ipSetDescriptors?: Array<wafregional_IpSetIpSetDescriptor>;

  // The name or description of the IPSet.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "ipSetDescriptors",
        "One or more pairs specifying the IP address type (IPV4 or IPV6) and the IP address range (in CIDR notation) from which web requests originate.",
        wafregional_IpSetIpSetDescriptor_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name or description of the IPSet.",
        [],
        false,
        true,
      ),
    ];
  }
}
