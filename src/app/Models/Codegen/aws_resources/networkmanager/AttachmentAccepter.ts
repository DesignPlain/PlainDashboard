import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AttachmentAccepterArgs {
  // The ID of the attachment.
  attachmentId?: string;

  // The type of attachment. Valid values can be found in the [AWS Documentation](https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListAttachments.html#API_ListAttachments_RequestSyntax)
  attachmentType?: string;
}
export class AttachmentAccepter extends Resource {
  // The ID of the attachment account owner.
  public ownerAccountId?: string;

  // The attachment resource ARN.
  public resourceArn?: string;

  // The state of the attachment.
  public state?: string;

  // The name of the segment attachment.
  public segmentName?: string;

  // The ID of the attachment.
  public attachmentId?: string;

  // The policy rule number associated with the attachment.
  public attachmentPolicyRuleNumber?: number;

  // The type of attachment. Valid values can be found in the [AWS Documentation](https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListAttachments.html#API_ListAttachments_RequestSyntax)
  public attachmentType?: string;

  // The ARN of a core network.
  public coreNetworkArn?: string;

  // The id of a core network.
  public coreNetworkId?: string;

  // The Region where the edge is located.
  public edgeLocation?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "attachmentId",
        "The ID of the attachment.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "attachmentType",
        "The type of attachment. Valid values can be found in the [AWS Documentation](https://docs.aws.amazon.com/networkmanager/latest/APIReference/API_ListAttachments.html#API_ListAttachments_RequestSyntax)",
        [],
        true,
        true,
      ),
    ];
  }
}
