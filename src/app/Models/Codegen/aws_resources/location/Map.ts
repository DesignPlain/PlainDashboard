import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from 'src/app/enum/InputType';
import { Resource } from 'src/app/Models/CloudResource';
import { DynamicUIProps } from 'src/app/components/resource-config/resource-config.component';
import {
  location_MapConfiguration,
  location_MapConfiguration_GetTypes,
} from '../types/location_MapConfiguration';

export interface MapArgs {
  // Configuration block with the map style selected from an available data provider. Detailed below.
  configuration?: location_MapConfiguration;

  // An optional description for the map resource.
  description?: string;

  /*
The name for the map resource.

The following arguments are optional:
*/
  mapName?: string;

  // Key-value tags for the map. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Location_Map extends Resource {
  // Configuration block with the map style selected from an available data provider. Detailed below.
  public configuration?: location_MapConfiguration;

  // The timestamp for when the map resource was created in ISO 8601 format.
  public createTime?: string;

  // An optional description for the map resource.
  public description?: string;

  // The Amazon Resource Name (ARN) for the map resource. Used to specify a resource across all AWS.
  public mapArn?: string;

  /*
The name for the map resource.

The following arguments are optional:
*/
  public mapName?: string;

  // Key-value tags for the map. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The timestamp for when the map resource was last updated in ISO 8601 format.
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'configuration',
        'Configuration block with the map style selected from an available data provider. Detailed below.',
        location_MapConfiguration_GetTypes(),
        true,
        true
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'An optional description for the map resource.',
        [],
        false,
        false
      ),
      new DynamicUIProps(
        InputType.String,
        'mapName',
        'The name for the map resource.\n\nThe following arguments are optional:',
        [],
        true,
        true
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value tags for the map. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        InputType_Map_GetTypes(),
        false,
        false
      ),
    ];
  }
}
