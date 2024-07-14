import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networkmanager_VpcAttachmentOptions,
  networkmanager_VpcAttachmentOptions_GetTypes,
} from "../types/networkmanager_VpcAttachmentOptions";

export interface VpcAttachmentArgs {
  /*
The ARN of the VPC.

The following arguments are optional:
*/
  vpcArn?: string;

  // The ID of a core network for the VPC attachment.
  coreNetworkId?: string;

  // Options for the VPC attachment.
  options?: networkmanager_VpcAttachmentOptions;

  // The subnet ARN of the VPC attachment.
  subnetArns?: Array<string>;

  // Key-value tags for the attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class VpcAttachment extends Resource {
  // The Region where the edge is located.
  public edgeLocation?: string;

  // Options for the VPC attachment.
  public options?: networkmanager_VpcAttachmentOptions;

  // Key-value tags for the attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
The ARN of the VPC.

The following arguments are optional:
*/
  public vpcArn?: string;

  // The policy rule number associated with the attachment.
  public attachmentPolicyRuleNumber?: number;

  // The type of attachment.
  public attachmentType?: string;

  // The ARN of a core network.
  public coreNetworkArn?: string;

  // The ID of a core network for the VPC attachment.
  public coreNetworkId?: string;

  // The subnet ARN of the VPC attachment.
  public subnetArns?: Array<string>;

  // The ARN of the attachment.
  public arn?: string;

  // The ID of the attachment account owner.
  public ownerAccountId?: string;

  // The attachment resource ARN.
  public resourceArn?: string;

  // The name of the segment attachment.
  public segmentName?: string;

  // The state of the attachment.
  public state?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "vpcArn",
        "The ARN of the VPC.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "coreNetworkId",
        "The ID of a core network for the VPC attachment.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "options",
        "Options for the VPC attachment.",
        networkmanager_VpcAttachmentOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnetArns",
        "The subnet ARN of the VPC attachment.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value tags for the attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
