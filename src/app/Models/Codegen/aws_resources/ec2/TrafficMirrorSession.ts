import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface TrafficMirrorSessionArgs {
  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // ID of the traffic mirror filter to be used
  trafficMirrorFilterId?: string;

  // ID of the traffic mirror target to be used
  trafficMirrorTargetId?: string;

  // The VXLAN ID for the Traffic Mirror session. For more information about the VXLAN protocol, see RFC 7348. If you do not specify a VirtualNetworkId, an account-wide unique id is chosen at random.
  virtualNetworkId?: number;

  // A description of the traffic mirror session.
  description?: string;

  // ID of the source network interface. Not all network interfaces are eligible as mirror sources. On EC2 instances only nitro based instances support mirroring.
  networkInterfaceId?: string;

  // The number of bytes in each packet to mirror. These are bytes after the VXLAN header. Do not specify this parameter when you want to mirror the entire packet. To mirror a subset of the packet, set this to the length (in bytes) that you want to mirror.
  packetLength?: number;

  // The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.
  sessionNumber?: number;
}
export class TrafficMirrorSession extends Resource {
  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // ID of the traffic mirror target to be used
  public trafficMirrorTargetId?: string;

  // The ARN of the traffic mirror session.
  public arn?: string;

  // The number of bytes in each packet to mirror. These are bytes after the VXLAN header. Do not specify this parameter when you want to mirror the entire packet. To mirror a subset of the packet, set this to the length (in bytes) that you want to mirror.
  public packetLength?: number;

  // The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.
  public sessionNumber?: number;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ID of the traffic mirror filter to be used
  public trafficMirrorFilterId?: string;

  // The VXLAN ID for the Traffic Mirror session. For more information about the VXLAN protocol, see RFC 7348. If you do not specify a VirtualNetworkId, an account-wide unique id is chosen at random.
  public virtualNetworkId?: number;

  // A description of the traffic mirror session.
  public description?: string;

  // ID of the source network interface. Not all network interfaces are eligible as mirror sources. On EC2 instances only nitro based instances support mirroring.
  public networkInterfaceId?: string;

  // The AWS account ID of the session owner.
  public ownerId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "networkInterfaceId",
        "ID of the source network interface. Not all network interfaces are eligible as mirror sources. On EC2 instances only nitro based instances support mirroring.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "packetLength",
        "The number of bytes in each packet to mirror. These are bytes after the VXLAN header. Do not specify this parameter when you want to mirror the entire packet. To mirror a subset of the packet, set this to the length (in bytes) that you want to mirror.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "sessionNumber",
        "The session number determines the order in which sessions are evaluated when an interface is used by multiple sessions. The first session with a matching filter is the one that mirrors the packets.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "trafficMirrorFilterId",
        "ID of the traffic mirror filter to be used",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "trafficMirrorTargetId",
        "ID of the traffic mirror target to be used",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "virtualNetworkId",
        "The VXLAN ID for the Traffic Mirror session. For more information about the VXLAN protocol, see RFC 7348. If you do not specify a VirtualNetworkId, an account-wide unique id is chosen at random.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the traffic mirror session.",
        [],
        false,
        false,
      ),
    ];
  }
}
