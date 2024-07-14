import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  globalaccelerator_ListenerPortRange,
  globalaccelerator_ListenerPortRange_GetTypes,
} from "../types/globalaccelerator_ListenerPortRange";

export interface ListenerArgs {
  // The protocol for the connections from clients to the accelerator. Valid values are `TCP`, `UDP`.
  protocol?: string;

  // The Amazon Resource Name (ARN) of your accelerator.
  acceleratorArn?: string;

  // Direct all requests from a user to the same endpoint. Valid values are `NONE`, `SOURCE_IP`. Default: `NONE`. If `NONE`, Global Accelerator uses the "five-tuple" properties of source IP address, source port, destination IP address, destination port, and protocol to select the hash value. If `SOURCE_IP`, Global Accelerator uses the "two-tuple" properties of source (client) IP address and destination IP address to select the hash value.
  clientAffinity?: string;

  // The list of port ranges for the connections from clients to the accelerator. Fields documented below.
  portRanges?: Array<globalaccelerator_ListenerPortRange>;
}
export class Listener extends Resource {
  // The protocol for the connections from clients to the accelerator. Valid values are `TCP`, `UDP`.
  public protocol?: string;

  // The Amazon Resource Name (ARN) of your accelerator.
  public acceleratorArn?: string;

  // Direct all requests from a user to the same endpoint. Valid values are `NONE`, `SOURCE_IP`. Default: `NONE`. If `NONE`, Global Accelerator uses the "five-tuple" properties of source IP address, source port, destination IP address, destination port, and protocol to select the hash value. If `SOURCE_IP`, Global Accelerator uses the "two-tuple" properties of source (client) IP address and destination IP address to select the hash value.
  public clientAffinity?: string;

  // The list of port ranges for the connections from clients to the accelerator. Fields documented below.
  public portRanges?: Array<globalaccelerator_ListenerPortRange>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "protocol",
        "The protocol for the connections from clients to the accelerator. Valid values are `TCP`, `UDP`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "acceleratorArn",
        "The Amazon Resource Name (ARN) of your accelerator.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "clientAffinity",
        'Direct all requests from a user to the same endpoint. Valid values are `NONE`, `SOURCE_IP`. Default: `NONE`. If `NONE`, Global Accelerator uses the "five-tuple" properties of source IP address, source port, destination IP address, destination port, and protocol to select the hash value. If `SOURCE_IP`, Global Accelerator uses the "two-tuple" properties of source (client) IP address and destination IP address to select the hash value.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "portRanges",
        "The list of port ranges for the connections from clients to the accelerator. Fields documented below.",
        globalaccelerator_ListenerPortRange_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
