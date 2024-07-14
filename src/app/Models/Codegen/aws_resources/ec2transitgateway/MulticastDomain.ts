import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface MulticastDomainArgs {
  // Whether to automatically accept cross-account subnet associations that are associated with the EC2 Transit Gateway Multicast Domain. Valid values: `disable`, `enable`. Default value: `disable`.
  autoAcceptSharedAssociations?: string;

  // Whether to enable Internet Group Management Protocol (IGMP) version 2 for the EC2 Transit Gateway Multicast Domain. Valid values: `disable`, `enable`. Default value: `disable`.
  igmpv2Support?: string;

  // Whether to enable support for statically configuring multicast group sources for the EC2 Transit Gateway Multicast Domain. Valid values: `disable`, `enable`. Default value: `disable`.
  staticSourcesSupport?: string;

  // Key-value tags for the EC2 Transit Gateway Multicast Domain. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // EC2 Transit Gateway identifier. The EC2 Transit Gateway must have `multicast_support` enabled.
  transitGatewayId?: string;
}
export class MulticastDomain extends Resource {
  // Whether to enable support for statically configuring multicast group sources for the EC2 Transit Gateway Multicast Domain. Valid values: `disable`, `enable`. Default value: `disable`.
  public staticSourcesSupport?: string;

  // Key-value tags for the EC2 Transit Gateway Multicast Domain. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // EC2 Transit Gateway identifier. The EC2 Transit Gateway must have `multicast_support` enabled.
  public transitGatewayId?: string;

  // EC2 Transit Gateway Multicast Domain Amazon Resource Name (ARN).
  public arn?: string;

  // Whether to automatically accept cross-account subnet associations that are associated with the EC2 Transit Gateway Multicast Domain. Valid values: `disable`, `enable`. Default value: `disable`.
  public autoAcceptSharedAssociations?: string;

  // Whether to enable Internet Group Management Protocol (IGMP) version 2 for the EC2 Transit Gateway Multicast Domain. Valid values: `disable`, `enable`. Default value: `disable`.
  public igmpv2Support?: string;

  // Identifier of the AWS account that owns the EC2 Transit Gateway Multicast Domain.
  public ownerId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "transitGatewayId",
        "EC2 Transit Gateway identifier. The EC2 Transit Gateway must have `multicast_support` enabled.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "autoAcceptSharedAssociations",
        "Whether to automatically accept cross-account subnet associations that are associated with the EC2 Transit Gateway Multicast Domain. Valid values: `disable`, `enable`. Default value: `disable`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "igmpv2Support",
        "Whether to enable Internet Group Management Protocol (IGMP) version 2 for the EC2 Transit Gateway Multicast Domain. Valid values: `disable`, `enable`. Default value: `disable`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "staticSourcesSupport",
        "Whether to enable support for statically configuring multicast group sources for the EC2 Transit Gateway Multicast Domain. Valid values: `disable`, `enable`. Default value: `disable`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value tags for the EC2 Transit Gateway Multicast Domain. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
