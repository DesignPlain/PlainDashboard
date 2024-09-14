import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ProbeArgs {
  // The destination IP address. This must be either IPV4 or IPV6.
  destination?: string;

  // The port associated with the destination. This is required only if the protocol is TCP and must be a number between 1 and 65536.
  destinationPort?: number;

  // The name of the monitor.
  monitorName?: string;

  /*
The size of the packets sent between the source and destination. This must be a number between 56 and 8500.

The following arguments are optional:
*/
  packetSize?: number;

  // The protocol used for the network traffic between the source and destination. This must be either TCP or ICMP.
  protocol?: string;

  // The ARN of the subnet.
  sourceArn?: string;

  // Key-value tags for the monitor. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Probe extends DS_Resource {
  //
  public addressFamily?: string;

  /*
The size of the packets sent between the source and destination. This must be a number between 56 and 8500.

The following arguments are optional:
*/
  public packetSize?: number;

  // The ARN of the subnet.
  public sourceArn?: string;

  //
  public vpcId?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the attachment.
  public arn?: string;

  // The destination IP address. This must be either IPV4 or IPV6.
  public destination?: string;

  // The port associated with the destination. This is required only if the protocol is TCP and must be a number between 1 and 65536.
  public destinationPort?: number;

  // The name of the monitor.
  public monitorName?: string;

  //
  public probeId?: string;

  // The protocol used for the network traffic between the source and destination. This must be either TCP or ICMP.
  public protocol?: string;

  // Key-value tags for the monitor. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "destination",
        "The destination IP address. This must be either IPV4 or IPV6.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "destinationPort",
        "The port associated with the destination. This is required only if the protocol is TCP and must be a number between 1 and 65536.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "monitorName",
        "The name of the monitor.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "packetSize",
        "The size of the packets sent between the source and destination. This must be a number between 56 and 8500.\n\nThe following arguments are optional:",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "protocol",
        "The protocol used for the network traffic between the source and destination. This must be either TCP or ICMP.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceArn",
        "The ARN of the subnet.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value tags for the monitor. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
