import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  networkmanager_ConnectAttachmentOptions,
  networkmanager_ConnectAttachmentOptions_GetTypes,
} from '../types/networkmanager_ConnectAttachmentOptions';

export interface ConnectAttachmentArgs {
  // The ID of a core network where you want to create the attachment.
  coreNetworkId?: string;

  // The Region where the edge is located.
  edgeLocation?: string;

  /*
Options block. See options for more information.

The following arguments are optional:
*/
  options?: networkmanager_ConnectAttachmentOptions;

  // Key-value tags for the attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The ID of the attachment between the two connections.
  transportAttachmentId?: string;
}
export class ConnectAttachment extends DS_Resource {
  // The ID of a core network where you want to create the attachment.
  public coreNetworkId?: string;

  // The ID of the attachment account owner.
  public ownerAccountId?: string;

  // Key-value tags for the attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The ID of the attachment between the two connections.
  public transportAttachmentId?: string;

  //
  public attachmentId?: string;

  // The policy rule number associated with the attachment.
  public attachmentPolicyRuleNumber?: number;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
Options block. See options for more information.

The following arguments are optional:
*/
  public options?: networkmanager_ConnectAttachmentOptions;

  // The name of the segment attachment.
  public segmentName?: string;

  // The ARN of the attachment.
  public arn?: string;

  // The type of attachment.
  public attachmentType?: string;

  // The ARN of a core network.
  public coreNetworkArn?: string;

  // The Region where the edge is located.
  public edgeLocation?: string;

  // The attachment resource ARN.
  public resourceArn?: string;

  // The state of the attachment.
  public state?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'options',
        'Options block. See options for more information.\n\nThe following arguments are optional:',
        () => networkmanager_ConnectAttachmentOptions_GetTypes(),
        true,
        false,
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
        'transportAttachmentId',
        'The ID of the attachment between the two connections.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'coreNetworkId',
        'The ID of a core network where you want to create the attachment.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'edgeLocation',
        'The Region where the edge is located.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
