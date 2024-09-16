import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface PeeringAttachmentAccepterArgs {
  // The ID of the EC2 Transit Gateway Peering Attachment to manage.
  transitGatewayAttachmentId?: string;

  // Key-value tags for the EC2 Transit Gateway Peering Attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class PeeringAttachmentAccepter extends DS_Resource {
  // Identifier of EC2 Transit Gateway.
  public transitGatewayId?: string;

  // Identifier of the AWS account that owns the EC2 TGW peering.
  public peerAccountId?: string;

  //
  public peerRegion?: string;

  // Identifier of EC2 Transit Gateway to peer with.
  public peerTransitGatewayId?: string;

  // Key-value tags for the EC2 Transit Gateway Peering Attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ID of the EC2 Transit Gateway Peering Attachment to manage.
  public transitGatewayAttachmentId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'transitGatewayAttachmentId',
        'The ID of the EC2 Transit Gateway Peering Attachment to manage.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value tags for the EC2 Transit Gateway Peering Attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
