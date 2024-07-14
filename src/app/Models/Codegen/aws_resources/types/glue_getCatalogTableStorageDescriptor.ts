import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  glue_getCatalogTableStorageDescriptorSchemaReference,
  glue_getCatalogTableStorageDescriptorSchemaReference_GetTypes,
} from "./glue_getCatalogTableStorageDescriptorSchemaReference";
import {
  glue_getCatalogTableStorageDescriptorSerDeInfo,
  glue_getCatalogTableStorageDescriptorSerDeInfo_GetTypes,
} from "./glue_getCatalogTableStorageDescriptorSerDeInfo";
import {
  glue_getCatalogTableStorageDescriptorSkewedInfo,
  glue_getCatalogTableStorageDescriptorSkewedInfo_GetTypes,
} from "./glue_getCatalogTableStorageDescriptorSkewedInfo";
import {
  glue_getCatalogTableStorageDescriptorColumn,
  glue_getCatalogTableStorageDescriptorColumn_GetTypes,
} from "./glue_getCatalogTableStorageDescriptorColumn";
import {
  glue_getCatalogTableStorageDescriptorSortColumn,
  glue_getCatalogTableStorageDescriptorSortColumn_GetTypes,
} from "./glue_getCatalogTableStorageDescriptorSortColumn";

export interface glue_getCatalogTableStorageDescriptor {
  // Is if the table contains any dimension columns.
  numberOfBuckets?: number;

  // Object that references a schema stored in the AWS Glue Schema Registry. See `schema_reference` below.
  schemaReferences?: Array<glue_getCatalogTableStorageDescriptorSchemaReference>;

  // Configuration block for serialization and deserialization ("SerDe") information. See `ser_de_info` below.
  serDeInfos?: Array<glue_getCatalogTableStorageDescriptorSerDeInfo>;

  // Configuration block with information about values that appear very frequently in a column (skewed values). See `skewed_info` below.
  skewedInfos?: Array<glue_getCatalogTableStorageDescriptorSkewedInfo>;

  // List of reducer grouping columns, clustering columns, and bucketing columns in the table.
  bucketColumns?: Array<string>;

  // Whether the data in the table is compressed.
  compressed?: boolean;

  // Input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format.
  inputFormat?: string;

  // Physical location of the table. By default, this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.
  location?: string;

  // Whether the table data is stored in subdirectories.
  storedAsSubDirectories?: boolean;

  // Configuration block for columns in the table. See `columns` below.
  columns?: Array<glue_getCatalogTableStorageDescriptorColumn>;

  // Output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format.
  outputFormat?: string;

  // Map of initialization parameters for the SerDe, in key-value form.
  parameters?: Map<string, string>;

  // Configuration block for the sort order of each bucket in the table. See `sort_columns` below.
  sortColumns?: Array<glue_getCatalogTableStorageDescriptorSortColumn>;
}

export function glue_getCatalogTableStorageDescriptor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "columns",
      "Configuration block for columns in the table. See `columns` below.",
      glue_getCatalogTableStorageDescriptorColumn_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "parameters",
      "Map of initialization parameters for the SerDe, in key-value form.",
      InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numberOfBuckets",
      "Is if the table contains any dimension columns.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "skewedInfos",
      "Configuration block with information about values that appear very frequently in a column (skewed values). See `skewed_info` below.",
      glue_getCatalogTableStorageDescriptorSkewedInfo_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "compressed",
      "Whether the data in the table is compressed.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "location",
      "Physical location of the table. By default, this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "storedAsSubDirectories",
      "Whether the table data is stored in subdirectories.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "sortColumns",
      "Configuration block for the sort order of each bucket in the table. See `sort_columns` below.",
      glue_getCatalogTableStorageDescriptorSortColumn_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "schemaReferences",
      "Object that references a schema stored in the AWS Glue Schema Registry. See `schema_reference` below.",
      glue_getCatalogTableStorageDescriptorSchemaReference_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "serDeInfos",
      'Configuration block for serialization and deserialization ("SerDe") information. See `ser_de_info` below.',
      glue_getCatalogTableStorageDescriptorSerDeInfo_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "bucketColumns",
      "List of reducer grouping columns, clustering columns, and bucketing columns in the table.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "inputFormat",
      "Input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "outputFormat",
      "Output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format.",
      [],
      true,
      false,
    ),
  ];
}
