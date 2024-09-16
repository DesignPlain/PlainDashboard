import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  glue_CatalogDatabaseCreateTableDefaultPermission,
  glue_CatalogDatabaseCreateTableDefaultPermission_GetTypes,
} from '../types/glue_CatalogDatabaseCreateTableDefaultPermission';
import {
  glue_CatalogDatabaseFederatedDatabase,
  glue_CatalogDatabaseFederatedDatabase_GetTypes,
} from '../types/glue_CatalogDatabaseFederatedDatabase';
import {
  glue_CatalogDatabaseTargetDatabase,
  glue_CatalogDatabaseTargetDatabase_GetTypes,
} from '../types/glue_CatalogDatabaseTargetDatabase';

export interface CatalogDatabaseArgs {
  // Creates a set of default permissions on the table for principals. See `create_table_default_permission` below.
  createTableDefaultPermissions?: Array<glue_CatalogDatabaseCreateTableDefaultPermission>;

  // Description of the database.
  description?: string;

  // Configuration block that references an entity outside the AWS Glue Data Catalog. See `federated_database` below.
  federatedDatabase?: glue_CatalogDatabaseFederatedDatabase;

  // Location of the database (for example, an HDFS path).
  locationUri?: string;

  // Name of the database. The acceptable characters are lowercase letters, numbers, and the underscore character.
  name?: string;

  // List of key-value pairs that define parameters and properties of the database.
  parameters?: Map<string, string>;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // ID of the Glue Catalog to create the database in. If omitted, this defaults to the AWS Account ID.
  catalogId?: string;

  // Configuration block for a target database for resource linking. See `target_database` below.
  targetDatabase?: glue_CatalogDatabaseTargetDatabase;
}
export class CatalogDatabase extends DS_Resource {
  // Location of the database (for example, an HDFS path).
  public locationUri?: string;

  // Name of the database. The acceptable characters are lowercase letters, numbers, and the underscore character.
  public name?: string;

  // List of key-value pairs that define parameters and properties of the database.
  public parameters?: Map<string, string>;

  // ARN of the Glue Catalog Database.
  public arn?: string;

  // Creates a set of default permissions on the table for principals. See `create_table_default_permission` below.
  public createTableDefaultPermissions?: Array<glue_CatalogDatabaseCreateTableDefaultPermission>;

  // Description of the database.
  public description?: string;

  // Configuration block that references an entity outside the AWS Glue Data Catalog. See `federated_database` below.
  public federatedDatabase?: glue_CatalogDatabaseFederatedDatabase;

  // ID of the Glue Catalog to create the database in. If omitted, this defaults to the AWS Account ID.
  public catalogId?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Configuration block for a target database for resource linking. See `target_database` below.
  public targetDatabase?: glue_CatalogDatabaseTargetDatabase;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the database.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'locationUri',
        'Location of the database (for example, an HDFS path).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'parameters',
        'List of key-value pairs that define parameters and properties of the database.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'createTableDefaultPermissions',
        'Creates a set of default permissions on the table for principals. See `create_table_default_permission` below.',
        () => glue_CatalogDatabaseCreateTableDefaultPermission_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the database. The acceptable characters are lowercase letters, numbers, and the underscore character.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'catalogId',
        'ID of the Glue Catalog to create the database in. If omitted, this defaults to the AWS Account ID.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'targetDatabase',
        'Configuration block for a target database for resource linking. See `target_database` below.',
        () => glue_CatalogDatabaseTargetDatabase_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'federatedDatabase',
        'Configuration block that references an entity outside the AWS Glue Data Catalog. See `federated_database` below.',
        () => glue_CatalogDatabaseFederatedDatabase_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
