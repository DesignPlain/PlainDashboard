import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface SchemaArgs {
  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The compatibility mode of the schema. Values values are: `NONE`, `DISABLED`, `BACKWARD`, `BACKWARD_ALL`, `FORWARD`, `FORWARD_ALL`, `FULL`, and `FULL_ALL`.
  compatibility?: string;

  // The data format of the schema definition. Valid values are `AVRO`, `JSON` and `PROTOBUF`.
  dataFormat?: string;

  // A description of the schema.
  description?: string;

  // The ARN of the Glue Registry to create the schema in.
  registryArn?: string;

  // The schema definition using the `data_format` setting for `schema_name`.
  schemaDefinition?: string;

  // The Name of the schema.
  schemaName?: string;
}
export class Schema extends DS_Resource {
  // Amazon Resource Name (ARN) of the schema.
  public arn?: string;

  // The compatibility mode of the schema. Values values are: `NONE`, `DISABLED`, `BACKWARD`, `BACKWARD_ALL`, `FORWARD`, `FORWARD_ALL`, `FULL`, and `FULL_ALL`.
  public compatibility?: string;

  // The data format of the schema definition. Valid values are `AVRO`, `JSON` and `PROTOBUF`.
  public dataFormat?: string;

  // The latest version of the schema associated with the returned schema definition.
  public latestSchemaVersion?: number;

  // The next version of the schema associated with the returned schema definition.
  public nextSchemaVersion?: number;

  // The Name of the schema.
  public schemaName?: string;

  // A description of the schema.
  public description?: string;

  // The ARN of the Glue Registry to create the schema in.
  public registryArn?: string;

  // The name of the Glue Registry.
  public registryName?: string;

  // The version number of the checkpoint (the last time the compatibility mode was changed).
  public schemaCheckpoint?: number;

  // The schema definition using the `data_format` setting for `schema_name`.
  public schemaDefinition?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'compatibility',
        'The compatibility mode of the schema. Values values are: `NONE`, `DISABLED`, `BACKWARD`, `BACKWARD_ALL`, `FORWARD`, `FORWARD_ALL`, `FULL`, and `FULL_ALL`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'dataFormat',
        'The data format of the schema definition. Valid values are `AVRO`, `JSON` and `PROTOBUF`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A description of the schema.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'registryArn',
        'The ARN of the Glue Registry to create the schema in.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'schemaDefinition',
        'The schema definition using the `data_format` setting for `schema_name`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'schemaName',
        'The Name of the schema.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
