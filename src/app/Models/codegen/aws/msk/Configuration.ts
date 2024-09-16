import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ConfigurationArgs {
  // Name of the configuration.
  name?: string;

  // Contents of the server.properties file. Supported properties are documented in the [MSK Developer Guide](https://docs.aws.amazon.com/msk/latest/developerguide/msk-configuration-properties.html).
  serverProperties?: string;

  // Description of the configuration.
  description?: string;

  // List of Apache Kafka versions which can use this configuration.
  kafkaVersions?: Array<string>;
}
export class Configuration extends DS_Resource {
  // Amazon Resource Name (ARN) of the configuration.
  public arn?: string;

  // Description of the configuration.
  public description?: string;

  // List of Apache Kafka versions which can use this configuration.
  public kafkaVersions?: Array<string>;

  // Latest revision of the configuration.
  public latestRevision?: number;

  // Name of the configuration.
  public name?: string;

  // Contents of the server.properties file. Supported properties are documented in the [MSK Developer Guide](https://docs.aws.amazon.com/msk/latest/developerguide/msk-configuration-properties.html).
  public serverProperties?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the configuration.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'kafkaVersions',
        'List of Apache Kafka versions which can use this configuration.',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the configuration.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'serverProperties',
        'Contents of the server.properties file. Supported properties are documented in the [MSK Developer Guide](https://docs.aws.amazon.com/msk/latest/developerguide/msk-configuration-properties.html).',
        () => [],
        true,
        false,
      ),
    ];
  }
}
