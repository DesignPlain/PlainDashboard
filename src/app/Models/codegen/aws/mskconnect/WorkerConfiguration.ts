import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface WorkerConfigurationArgs {
  // A summary description of the worker configuration.
  description?: string;

  // The name of the worker configuration.
  name?: string;

  /*
Contents of connect-distributed.properties file. The value can be either base64 encoded or in raw format.

The following arguments are optional:
*/
  propertiesFileContent?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class WorkerConfiguration extends DS_Resource {
  // The name of the worker configuration.
  public name?: string;

  /*
Contents of connect-distributed.properties file. The value can be either base64 encoded or in raw format.

The following arguments are optional:
*/
  public propertiesFileContent?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // the Amazon Resource Name (ARN) of the worker configuration.
  public arn?: string;

  // A summary description of the worker configuration.
  public description?: string;

  // an ID of the latest successfully created revision of the worker configuration.
  public latestRevision?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A summary description of the worker configuration.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the worker configuration.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'propertiesFileContent',
        'Contents of connect-distributed.properties file. The value can be either base64 encoded or in raw format.\n\nThe following arguments are optional:',
        () => [],
        true,
        true,
      ),
    ];
  }
}
