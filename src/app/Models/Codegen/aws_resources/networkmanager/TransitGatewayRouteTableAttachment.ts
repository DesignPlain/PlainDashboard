import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface TransitGatewayRouteTableAttachmentArgs {
  // The ID of the peer for the attachment.
  peeringId?: string;

  // Key-value tags for the attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The ARN of the transit gateway route table for the attachment.
  transitGatewayRouteTableArn?: string;
}
export class TransitGatewayRouteTableAttachment extends Resource {
  // The ID of the attachment account owner.
  public ownerAccountId?: string;

  // The ID of the peer for the attachment.
  public peeringId?: string;

  // Key-value tags for the attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The ARN of the core network.
  public coreNetworkArn?: string;

  // The edge location for the peer.
  public edgeLocation?: string;

  // The ARN of the transit gateway route table for the attachment.
  public transitGatewayRouteTableArn?: string;

  // The name of the segment attachment.
  public segmentName?: string;

  // The state of the attachment.
  public state?: string;

  // The ID of the core network.
  public coreNetworkId?: string;

  // The attachment resource ARN.
  public resourceArn?: string;

  // The type of attachment.
  public attachmentType?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Attachment Amazon Resource Name (ARN).
  public arn?: string;

  // The policy rule number associated with the attachment.
  public attachmentPolicyRuleNumber?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "peeringId",
        "The ID of the peer for the attachment.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value tags for the attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "transitGatewayRouteTableArn",
        "The ARN of the transit gateway route table for the attachment.",
        [],
        true,
        true,
      ),
    ];
  }
}
