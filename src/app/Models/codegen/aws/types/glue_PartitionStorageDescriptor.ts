import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  glue_PartitionStorageDescriptorSerDeInfo,
  glue_PartitionStorageDescriptorSerDeInfo_GetTypes,
} from './glue_PartitionStorageDescriptorSerDeInfo';
import {
  glue_PartitionStorageDescriptorSkewedInfo,
  glue_PartitionStorageDescriptorSkewedInfo_GetTypes,
} from './glue_PartitionStorageDescriptorSkewedInfo';
import {
  glue_PartitionStorageDescriptorColumn,
  glue_PartitionStorageDescriptorColumn_GetTypes,
} from './glue_PartitionStorageDescriptorColumn';
import {
  glue_PartitionStorageDescriptorSortColumn,
  glue_PartitionStorageDescriptorSortColumn_GetTypes,
} from './glue_PartitionStorageDescriptorSortColumn';

export interface glue_PartitionStorageDescriptor {
  // The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format.
  inputFormat?: string;

  // The physical location of the table. By default this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.
  location?: string;

  // Must be specified if the table contains any dimension columns.
  numberOfBuckets?: number;

  // Serialization/deserialization (SerDe) information.
  serDeInfo?: glue_PartitionStorageDescriptorSerDeInfo;

  // Information about values that appear very frequently in a column (skewed values).
  skewedInfo?: glue_PartitionStorageDescriptorSkewedInfo;

  // A list of reducer grouping columns, clustering columns, and bucketing columns in the table.
  bucketColumns?: Array<string>;

  // A list of the Columns in the table.
  columns?: Array<glue_PartitionStorageDescriptorColumn>;

  // True if the data in the table is compressed, or False if not.
  compressed?: boolean;

  // The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format.
  outputFormat?: string;

  // User-supplied properties in key-value form.
  parameters?: Map<string, string>;

  // A list of Order objects specifying the sort order of each bucket in the table.
  sortColumns?: Array<glue_PartitionStorageDescriptorSortColumn>;

  // True if the table data is stored in subdirectories, or False if not.
  storedAsSubDirectories?: boolean;
}

export function glue_PartitionStorageDescriptor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'inputFormat',
      'The input format: SequenceFileInputFormat (binary), or TextInputFormat, or a custom format.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'location',
      'The physical location of the table. By default this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.',
      () => [],
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
      InputType.Object,
      'serDeInfo',
      'Serialization/deserialization (SerDe) information.',
      () => glue_PartitionStorageDescriptorSerDeInfo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'bucketColumns',
      'A list of reducer grouping columns, clustering columns, and bucketing columns in the table.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'columns',
      'A list of the Columns in the table.',
      () => glue_PartitionStorageDescriptorColumn_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'compressed',
      'True if the data in the table is compressed, or False if not.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'skewedInfo',
      'Information about values that appear very frequently in a column (skewed values).',
      () => glue_PartitionStorageDescriptorSkewedInfo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'outputFormat',
      'The output format: SequenceFileOutputFormat (binary), or IgnoreKeyTextOutputFormat, or a custom format.',
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
      'sortColumns',
      'A list of Order objects specifying the sort order of each bucket in the table.',
      () => glue_PartitionStorageDescriptorSortColumn_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'storedAsSubDirectories',
      'True if the table data is stored in subdirectories, or False if not.',
      () => [],
      false,
      false,
    ),
  ];
}
