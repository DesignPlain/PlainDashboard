import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  glue_CatalogTableStorageDescriptorColumn,
  glue_CatalogTableStorageDescriptorColumn_GetTypes,
} from './glue_CatalogTableStorageDescriptorColumn';
import {
  glue_CatalogTableStorageDescriptorSchemaReference,
  glue_CatalogTableStorageDescriptorSchemaReference_GetTypes,
} from './glue_CatalogTableStorageDescriptorSchemaReference';
import {
  glue_CatalogTableStorageDescriptorSortColumn,
  glue_CatalogTableStorageDescriptorSortColumn_GetTypes,
} from './glue_CatalogTableStorageDescriptorSortColumn';
import {
  glue_CatalogTableStorageDescriptorSkewedInfo,
  glue_CatalogTableStorageDescriptorSkewedInfo_GetTypes,
} from './glue_CatalogTableStorageDescriptorSkewedInfo';
import {
  glue_CatalogTableStorageDescriptorSerDeInfo,
  glue_CatalogTableStorageDescriptorSerDeInfo_GetTypes,
} from './glue_CatalogTableStorageDescriptorSerDeInfo';

export interface glue_CatalogTableStorageDescriptor {
  // Configuration block for columns in the table. See `columns` below.
  columns?: Array<glue_CatalogTableStorageDescriptorColumn>;

  // Output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format.
  outputFormat?: string;

  // Object that references a schema stored in the AWS Glue Schema Registry. When creating a table, you can pass an empty list of columns for the schema, and instead use a schema reference. See Schema Reference below.
  schemaReference?: glue_CatalogTableStorageDescriptorSchemaReference;

  // Configuration block for the sort order of each bucket in the table. See `sort_columns` below.
  sortColumns?: Array<glue_CatalogTableStorageDescriptorSortColumn>;

  // Must be specified if the table contains any dimension columns.
  numberOfBuckets?: number;

  // User-supplied properties in key-value form.
  parameters?: Map<string, string>;

  // Configuration block with information about values that appear very frequently in a column (skewed values). See `skewed_info` below.
  skewedInfo?: glue_CatalogTableStorageDescriptorSkewedInfo;

  // Whether the table data is stored in subdirectories.
  storedAsSubDirectories?: boolean;

  // List of locations that point to the path where a Delta table is located.
  additionalLocations?: Array<string>;

  // Whether the data in the table is compressed.
  compressed?: boolean;

  // Input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format.
  inputFormat?: string;

  // Physical location of the table. By default this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.
  location?: string;

  // Configuration block for serialization and deserialization ("SerDe") information. See `ser_de_info` below.
  serDeInfo?: glue_CatalogTableStorageDescriptorSerDeInfo;

  // List of reducer grouping columns, clustering columns, and bucketing columns in the table.
  bucketColumns?: Array<string>;
}

export function glue_CatalogTableStorageDescriptor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'compressed',
      'Whether the data in the table is compressed.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'serDeInfo',
      'Configuration block for serialization and deserialization ("SerDe") information. See `ser_de_info` below.',
      () => glue_CatalogTableStorageDescriptorSerDeInfo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'bucketColumns',
      'List of reducer grouping columns, clustering columns, and bucketing columns in the table.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'outputFormat',
      'Output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'parameters',
      'User-supplied properties in key-value form.',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'additionalLocations',
      'List of locations that point to the path where a Delta table is located.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'storedAsSubDirectories',
      'Whether the table data is stored in subdirectories.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'location',
      'Physical location of the table. By default this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'columns',
      'Configuration block for columns in the table. See `columns` below.',
      () => glue_CatalogTableStorageDescriptorColumn_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'schemaReference',
      'Object that references a schema stored in the AWS Glue Schema Registry. When creating a table, you can pass an empty list of columns for the schema, and instead use a schema reference. See Schema Reference below.',
      () => glue_CatalogTableStorageDescriptorSchemaReference_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'numberOfBuckets',
      'Must be specified if the table contains any dimension columns.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'sortColumns',
      'Configuration block for the sort order of each bucket in the table. See `sort_columns` below.',
      () => glue_CatalogTableStorageDescriptorSortColumn_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'skewedInfo',
      'Configuration block with information about values that appear very frequently in a column (skewed values). See `skewed_info` below.',
      () => glue_CatalogTableStorageDescriptorSkewedInfo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'inputFormat',
      'Input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format.',
      () => [],
      false,
      false,
    ),
  ];
}
