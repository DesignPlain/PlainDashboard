import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SiteToSiteVpnAttachmentArgs {
  // The ID of a core network for the VPN attachment.
  coreNetworkId?: string;

  // Key-value tags for the attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
The ARN of the site-to-site VPN connection.

The following arguments are optional:
*/
  vpnConnectionArn?: string;
}
export class SiteToSiteVpnAttachment extends Resource {
  // The policy rule number associated with the attachment.
  public attachmentPolicyRuleNumber?: number;

  // The state of the attachment.
  public state?: string;

  // The ID of the attachment account owner.
  public ownerAccountId?: string;

  // The attachment resource ARN.
  public resourceArn?: string;

  // The name of the segment attachment.
  public segmentName?: string;

  // The ARN of the attachment.
  public arn?: string;

  // The type of attachment.
  public attachmentType?: string;

  // The ARN of a core network.
  public coreNetworkArn?: string;

  // The ID of a core network for the VPN attachment.
  public coreNetworkId?: string;

  // The Region where the edge is located.
  public edgeLocation?: string;

  // Key-value tags for the attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
The ARN of the site-to-site VPN connection.

The following arguments are optional:
*/
  public vpnConnectionArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "coreNetworkId",
        "The ID of a core network for the VPN attachment.",
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
        "vpnConnectionArn",
        "The ARN of the site-to-site VPN connection.\n\nThe following arguments are optional:",
        [],
        true,
        true,
      ),
    ];
  }
}
