import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface TransitGatewayRouteTableAttachmentArgs {
  // The ID of the peer for the attachment.
  peeringId?: string;

  // Key-value tags for the attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The ARN of the transit gateway route table for the attachment.
  transitGatewayRouteTableArn?: string;
}
export class TransitGatewayRouteTableAttachment extends DS_Resource {
  // The ID of the peer for the attachment.
  public peeringId?: string;

  // The state of the attachment.
  public state?: string;

  // Key-value tags for the attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The ARN of the transit gateway route table for the attachment.
  public transitGatewayRouteTableArn?: string;

  // Attachment Amazon Resource Name (ARN).
  public arn?: string;

  // The type of attachment.
  public attachmentType?: string;

  // The edge location for the peer.
  public edgeLocation?: string;

  // The attachment resource ARN.
  public resourceArn?: string;

  // The name of the segment attachment.
  public segmentName?: string;

  // The policy rule number associated with the attachment.
  public attachmentPolicyRuleNumber?: number;

  // The ARN of the core network.
  public coreNetworkArn?: string;

  // The ID of the core network.
  public coreNetworkId?: string;

  // The ID of the attachment account owner.
  public ownerAccountId?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'peeringId',
        'The ID of the peer for the attachment.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value tags for the attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'transitGatewayRouteTableArn',
        'The ARN of the transit gateway route table for the attachment.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
