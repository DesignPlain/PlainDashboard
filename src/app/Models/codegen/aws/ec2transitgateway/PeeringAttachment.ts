import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2transitgateway_PeeringAttachmentOptions,
  ec2transitgateway_PeeringAttachmentOptions_GetTypes,
} from '../types/ec2transitgateway_PeeringAttachmentOptions';

export interface PeeringAttachmentArgs {
  // Identifier of EC2 Transit Gateway.
  transitGatewayId?: string;

  // Describes whether dynamic routing is enabled or disabled for the transit gateway peering request. See options below for more details!
  options?: ec2transitgateway_PeeringAttachmentOptions;

  // Account ID of EC2 Transit Gateway to peer with. Defaults to the account ID the AWS provider is currently connected to.
  peerAccountId?: string;

  // Region of EC2 Transit Gateway to peer with.
  peerRegion?: string;

  // Identifier of EC2 Transit Gateway to peer with.
  peerTransitGatewayId?: string;

  // Key-value tags for the EC2 Transit Gateway Peering Attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class PeeringAttachment extends DS_Resource {
  // Region of EC2 Transit Gateway to peer with.
  public peerRegion?: string;

  // Identifier of EC2 Transit Gateway to peer with.
  public peerTransitGatewayId?: string;

  //
  public state?: string;

  // Key-value tags for the EC2 Transit Gateway Peering Attachment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Identifier of EC2 Transit Gateway.
  public transitGatewayId?: string;

  // Describes whether dynamic routing is enabled or disabled for the transit gateway peering request. See options below for more details!
  public options?: ec2transitgateway_PeeringAttachmentOptions;

  // Account ID of EC2 Transit Gateway to peer with. Defaults to the account ID the AWS provider is currently connected to.
  public peerAccountId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'peerRegion',
        'Region of EC2 Transit Gateway to peer with.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'peerTransitGatewayId',
        'Identifier of EC2 Transit Gateway to peer with.',
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
      new DynamicUIProps(
        InputType.String,
        'transitGatewayId',
        'Identifier of EC2 Transit Gateway.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'options',
        'Describes whether dynamic routing is enabled or disabled for the transit gateway peering request. See options below for more details!',
        () => ec2transitgateway_PeeringAttachmentOptions_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'peerAccountId',
        'Account ID of EC2 Transit Gateway to peer with. Defaults to the account ID the AWS provider is currently connected to.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
