import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface AttachmentAccepterArgs {
  // The ID of the attachment.
  attachmentId?: string;

  // The type of attachment. Valid values can be found in the [AWS Documentation](https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListAttachments.html#API_ListAttachments_RequestSyntax)
  attachmentType?: string;
}
export class AttachmentAccepter extends DS_Resource {
  // The policy rule number associated with the attachment.
  public attachmentPolicyRuleNumber?: number;

  // The id of a core network.
  public coreNetworkId?: string;

  // The ID of the attachment account owner.
  public ownerAccountId?: string;

  // The name of the segment attachment.
  public segmentName?: string;

  // The ID of the attachment.
  public attachmentId?: string;

  // The type of attachment. Valid values can be found in the [AWS Documentation](https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListAttachments.html#API_ListAttachments_RequestSyntax)
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
        InputType.String,
        'attachmentId',
        'The ID of the attachment.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'attachmentType',
        'The type of attachment. Valid values can be found in the [AWS Documentation](https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListAttachments.html#API_ListAttachments_RequestSyntax)',
        () => [],
        true,
        true,
      ),
    ];
  }
}
