import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface TransitGatewayPeeringArgs {
  // The ARN of the transit gateway for the peering request.
  transitGatewayArn?: string;

  // The ID of a core network.
  coreNetworkId?: string;

  // Key-value tags for the peering. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class TransitGatewayPeering extends Resource {
  // The ID of the account owner.
  public ownerAccountId?: string;

  // The ID of the transit gateway peering attachment.
  public transitGatewayPeeringAttachmentId?: string;

  // The ARN of the core network.
  public coreNetworkArn?: string;

  // The edge location for the peer.
  public edgeLocation?: string;

  // The type of peering. This will be `TRANSIT_GATEWAY`.
  public peeringType?: string;

  // The resource ARN of the peer.
  public resourceArn?: string;

  // Key-value tags for the peering. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the transit gateway for the peering request.
  public transitGatewayArn?: string;

  // Peering Amazon Resource Name (ARN).
  public arn?: string;

  // The ID of a core network.
  public coreNetworkId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "transitGatewayArn",
        "The ARN of the transit gateway for the peering request.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "coreNetworkId",
        "The ID of a core network.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value tags for the peering. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
