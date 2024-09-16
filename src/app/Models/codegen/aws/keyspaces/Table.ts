import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  keyspaces_TablePointInTimeRecovery,
  keyspaces_TablePointInTimeRecovery_GetTypes,
} from '../types/keyspaces_TablePointInTimeRecovery';
import {
  keyspaces_TableTtl,
  keyspaces_TableTtl_GetTypes,
} from '../types/keyspaces_TableTtl';
import {
  keyspaces_TableComment,
  keyspaces_TableComment_GetTypes,
} from '../types/keyspaces_TableComment';
import {
  keyspaces_TableEncryptionSpecification,
  keyspaces_TableEncryptionSpecification_GetTypes,
} from '../types/keyspaces_TableEncryptionSpecification';
import {
  keyspaces_TableSchemaDefinition,
  keyspaces_TableSchemaDefinition_GetTypes,
} from '../types/keyspaces_TableSchemaDefinition';
import {
  keyspaces_TableCapacitySpecification,
  keyspaces_TableCapacitySpecification_GetTypes,
} from '../types/keyspaces_TableCapacitySpecification';
import {
  keyspaces_TableClientSideTimestamps,
  keyspaces_TableClientSideTimestamps_GetTypes,
} from '../types/keyspaces_TableClientSideTimestamps';

export interface TableArgs {
  // A description of the table.
  comment?: keyspaces_TableComment;

  // Specifies how the encryption key for encryption at rest is managed for the table. More information can be found in the [Developer Guide](https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html).
  encryptionSpecification?: keyspaces_TableEncryptionSpecification;

  // Describes the schema of the table.
  schemaDefinition?: keyspaces_TableSchemaDefinition;

  // Specifies the read/write throughput capacity mode for the table.
  capacitySpecification?: keyspaces_TableCapacitySpecification;

  // Enables client-side timestamps for the table. By default, the setting is disabled.
  clientSideTimestamps?: keyspaces_TableClientSideTimestamps;

  // Specifies if point-in-time recovery is enabled or disabled for the table. More information can be found in the [Developer Guide](https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery.html).
  pointInTimeRecovery?: keyspaces_TablePointInTimeRecovery;

  /*
The name of the table.

The following arguments are optional:
*/
  tableName?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Enables Time to Live custom settings for the table. More information can be found in the [Developer Guide](https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL.html).
  ttl?: keyspaces_TableTtl;

  // The default Time to Live setting in seconds for the table. More information can be found in the [Developer Guide](https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL-how-it-works.html#ttl-howitworks_default_ttl).
  defaultTimeToLive?: number;

  // The name of the keyspace that the table is going to be created in.
  keyspaceName?: string;
}
export class Table extends DS_Resource {
  // A description of the table.
  public comment?: keyspaces_TableComment;

  // The default Time to Live setting in seconds for the table. More information can be found in the [Developer Guide](https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL-how-it-works.html#ttl-howitworks_default_ttl).
  public defaultTimeToLive?: number;

  // Specifies how the encryption key for encryption at rest is managed for the table. More information can be found in the [Developer Guide](https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html).
  public encryptionSpecification?: keyspaces_TableEncryptionSpecification;

  // Specifies if point-in-time recovery is enabled or disabled for the table. More information can be found in the [Developer Guide](https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery.html).
  public pointInTimeRecovery?: keyspaces_TablePointInTimeRecovery;

  // Describes the schema of the table.
  public schemaDefinition?: keyspaces_TableSchemaDefinition;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the table.
  public arn?: string;

  // Specifies the read/write throughput capacity mode for the table.
  public capacitySpecification?: keyspaces_TableCapacitySpecification;

  /*
The name of the table.

The following arguments are optional:
*/
  public tableName?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Enables Time to Live custom settings for the table. More information can be found in the [Developer Guide](https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL.html).
  public ttl?: keyspaces_TableTtl;

  // Enables client-side timestamps for the table. By default, the setting is disabled.
  public clientSideTimestamps?: keyspaces_TableClientSideTimestamps;

  // The name of the keyspace that the table is going to be created in.
  public keyspaceName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'encryptionSpecification',
        'Specifies how the encryption key for encryption at rest is managed for the table. More information can be found in the [Developer Guide](https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html).',
        () => keyspaces_TableEncryptionSpecification_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'capacitySpecification',
        'Specifies the read/write throughput capacity mode for the table.',
        () => keyspaces_TableCapacitySpecification_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'pointInTimeRecovery',
        'Specifies if point-in-time recovery is enabled or disabled for the table. More information can be found in the [Developer Guide](https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery.html).',
        () => keyspaces_TablePointInTimeRecovery_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'tableName',
        'The name of the table.\n\nThe following arguments are optional:',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'ttl',
        'Enables Time to Live custom settings for the table. More information can be found in the [Developer Guide](https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL.html).',
        () => keyspaces_TableTtl_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'defaultTimeToLive',
        'The default Time to Live setting in seconds for the table. More information can be found in the [Developer Guide](https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL-how-it-works.html#ttl-howitworks_default_ttl).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'keyspaceName',
        'The name of the keyspace that the table is going to be created in.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'comment',
        'A description of the table.',
        () => keyspaces_TableComment_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'schemaDefinition',
        'Describes the schema of the table.',
        () => keyspaces_TableSchemaDefinition_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'clientSideTimestamps',
        'Enables client-side timestamps for the table. By default, the setting is disabled.',
        () => keyspaces_TableClientSideTimestamps_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
