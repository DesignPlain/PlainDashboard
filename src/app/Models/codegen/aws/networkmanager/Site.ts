import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  networkmanager_SiteLocation,
  networkmanager_SiteLocation_GetTypes,
} from '../types/networkmanager_SiteLocation';

export interface SiteArgs {
  // Description of the Site.
  description?: string;

  // The ID of the Global Network to create the site in.
  globalNetworkId?: string;

  // The site location as documented below.
  location?: networkmanager_SiteLocation;

  // Key-value tags for the Site. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Site extends DS_Resource {
  // Description of the Site.
  public description?: string;

  // The ID of the Global Network to create the site in.
  public globalNetworkId?: string;

  // The site location as documented below.
  public location?: networkmanager_SiteLocation;

  // Key-value tags for the Site. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Site Amazon Resource Name (ARN)
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the Site.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'globalNetworkId',
        'The ID of the Global Network to create the site in.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'location',
        'The site location as documented below.',
        () => networkmanager_SiteLocation_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value tags for the Site. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
