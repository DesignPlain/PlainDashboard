import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  networkmanager_LinkBandwidth,
  networkmanager_LinkBandwidth_GetTypes,
} from '../types/networkmanager_LinkBandwidth';

export interface LinkArgs {
  // The type of the link.
  type?: string;

  // The upload speed and download speed in Mbps. Documented below.
  bandwidth?: networkmanager_LinkBandwidth;

  // A description of the link.
  description?: string;

  // The ID of the global network.
  globalNetworkId?: string;

  // The provider of the link.
  providerName?: string;

  // The ID of the site.
  siteId?: string;

  // Key-value tags for the link. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Link extends DS_Resource {
  // Link Amazon Resource Name (ARN).
  public arn?: string;

  // The upload speed and download speed in Mbps. Documented below.
  public bandwidth?: networkmanager_LinkBandwidth;

  // A description of the link.
  public description?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The type of the link.
  public type?: string;

  // The ID of the global network.
  public globalNetworkId?: string;

  // The provider of the link.
  public providerName?: string;

  // The ID of the site.
  public siteId?: string;

  // Key-value tags for the link. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'type',
        'The type of the link.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'bandwidth',
        'The upload speed and download speed in Mbps. Documented below.',
        () => networkmanager_LinkBandwidth_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A description of the link.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'globalNetworkId',
        'The ID of the global network.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'providerName',
        'The provider of the link.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'siteId',
        'The ID of the site.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value tags for the link. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
