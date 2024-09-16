import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  mskconnect_CustomPluginLocation,
  mskconnect_CustomPluginLocation_GetTypes,
} from '../types/mskconnect_CustomPluginLocation';

export interface CustomPluginArgs {
  // A summary description of the custom plugin.
  description?: string;

  // Information about the location of a custom plugin. See `location` Block for details.
  location?: mskconnect_CustomPluginLocation;

  // The name of the custom plugin..
  name?: string;

  /*
A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

The following arguments are optional:
*/
  tags?: Map<string, string>;

  // The type of the plugin file. Allowed values are `ZIP` and `JAR`.
  contentType?: string;
}
export class CustomPlugin extends DS_Resource {
  /*
A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

The following arguments are optional:
*/
  public tags?: Map<string, string>;

  // the Amazon Resource Name (ARN) of the custom plugin.
  public arn?: string;

  // The type of the plugin file. Allowed values are `ZIP` and `JAR`.
  public contentType?: string;

  // A summary description of the custom plugin.
  public description?: string;

  // an ID of the latest successfully created revision of the custom plugin.
  public latestRevision?: number;

  // Information about the location of a custom plugin. See `location` Block for details.
  public location?: mskconnect_CustomPluginLocation;

  // the state of the custom plugin.
  public state?: string;

  // The name of the custom plugin..
  public name?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'description',
        'A summary description of the custom plugin.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'location',
        'Information about the location of a custom plugin. See `location` Block for details.',
        () => mskconnect_CustomPluginLocation_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the custom plugin..',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.\n\nThe following arguments are optional:',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'contentType',
        'The type of the plugin file. Allowed values are `ZIP` and `JAR`.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
