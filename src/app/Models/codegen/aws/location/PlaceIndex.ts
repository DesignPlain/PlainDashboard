import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  location_PlaceIndexDataSourceConfiguration,
  location_PlaceIndexDataSourceConfiguration_GetTypes,
} from '../types/location_PlaceIndexDataSourceConfiguration';

export interface PlaceIndexArgs {
  // The optional description for the place index resource.
  description?: string;

  /*
The name of the place index resource.

The following arguments are optional:
*/
  indexName?: string;

  // Key-value tags for the place index. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies the geospatial data provider for the new place index.
  dataSource?: string;

  // Configuration block with the data storage option chosen for requesting Places. Detailed below.
  dataSourceConfiguration?: location_PlaceIndexDataSourceConfiguration;
}
export class PlaceIndex extends DS_Resource {
  // The timestamp for when the place index resource was created in ISO 8601 format.
  public createTime?: string;

  // Specifies the geospatial data provider for the new place index.
  public dataSource?: string;

  // The optional description for the place index resource.
  public description?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Configuration block with the data storage option chosen for requesting Places. Detailed below.
  public dataSourceConfiguration?: location_PlaceIndexDataSourceConfiguration;

  // The Amazon Resource Name (ARN) for the place index resource. Used to specify a resource across AWS.
  public indexArn?: string;

  /*
The name of the place index resource.

The following arguments are optional:
*/
  public indexName?: string;

  // Key-value tags for the place index. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The timestamp for when the place index resource was last update in ISO 8601.
  public updateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'description',
        'The optional description for the place index resource.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'indexName',
        'The name of the place index resource.\n\nThe following arguments are optional:',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value tags for the place index. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'dataSource',
        'Specifies the geospatial data provider for the new place index.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'dataSourceConfiguration',
        'Configuration block with the data storage option chosen for requesting Places. Detailed below.',
        () => location_PlaceIndexDataSourceConfiguration_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
