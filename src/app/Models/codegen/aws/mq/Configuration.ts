import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ConfigurationArgs {
  // Version of the broker engine.
  engineVersion?: string;

  /*
Name of the configuration.

The following arguments are optional:
*/
  name?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Authentication strategy associated with the configuration. Valid values are `simple` and `ldap`. `ldap` is not supported for `engine_type` `RabbitMQ`.
  authenticationStrategy?: string;

  // Broker configuration in XML format for `ActiveMQ` or [Cuttlefish](https://github.com/Kyorai/cuttlefish) format for `RabbitMQ`. See [official docs](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/amazon-mq-broker-configuration-parameters.html) for supported parameters and format of the XML.
  data?: string;

  // Description of the configuration.
  description?: string;

  // Type of broker engine. Valid values are `ActiveMQ` and `RabbitMQ`.
  engineType?: string;
}
export class Configuration extends DS_Resource {
  // Authentication strategy associated with the configuration. Valid values are `simple` and `ldap`. `ldap` is not supported for `engine_type` `RabbitMQ`.
  public authenticationStrategy?: string;

  // Broker configuration in XML format for `ActiveMQ` or [Cuttlefish](https://github.com/Kyorai/cuttlefish) format for `RabbitMQ`. See [official docs](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/amazon-mq-broker-configuration-parameters.html) for supported parameters and format of the XML.
  public data?: string;

  // Type of broker engine. Valid values are `ActiveMQ` and `RabbitMQ`.
  public engineType?: string;

  // Version of the broker engine.
  public engineVersion?: string;

  // Latest revision of the configuration.
  public latestRevision?: number;

  // ARN of the configuration.
  public arn?: string;

  // Description of the configuration.
  public description?: string;

  /*
Name of the configuration.

The following arguments are optional:
*/
  public name?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'authenticationStrategy',
        'Authentication strategy associated with the configuration. Valid values are `simple` and `ldap`. `ldap` is not supported for `engine_type` `RabbitMQ`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'data',
        'Broker configuration in XML format for `ActiveMQ` or [Cuttlefish](https://github.com/Kyorai/cuttlefish) format for `RabbitMQ`. See [official docs](https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/amazon-mq-broker-configuration-parameters.html) for supported parameters and format of the XML.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the configuration.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'engineType',
        'Type of broker engine. Valid values are `ActiveMQ` and `RabbitMQ`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'engineVersion',
        'Version of the broker engine.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the configuration.\n\nThe following arguments are optional:',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
