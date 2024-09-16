import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dms_getEndpointS3Setting {
  //
  bucketFolder?: string;

  //
  datePartitionDelimiter?: string;

  //
  datePartitionSequence?: string;

  //
  externalTableDefinition?: string;

  //
  rowGroupLength?: number;

  //
  useTaskStartTimeForFullLoadTimestamp?: boolean;

  //
  cdcMaxBatchInterval?: number;

  //
  cdcPath?: string;

  //
  compressionType?: string;

  //
  csvNullValue?: string;

  //
  datePartitionEnabled?: boolean;

  //
  enableStatistics?: boolean;

  //
  parquetTimestampInMillisecond?: boolean;

  //
  cdcInsertsOnly?: boolean;

  //
  csvDelimiter?: string;

  //
  serviceAccessRoleArn?: string;

  //
  bucketName?: string;

  //
  dictPageSizeLimit?: number;

  //
  glueCatalogGeneration?: boolean;

  //
  maxFileSize?: number;

  //
  timestampColumnName?: string;

  //
  addColumnName?: boolean;

  //
  cannedAclForObjects?: string;

  //
  cdcInsertsAndUpdates?: boolean;

  //
  csvNoSupValue?: string;

  //
  dataFormat?: string;

  //
  preserveTransactions?: boolean;

  //
  rfc4180?: boolean;

  //
  useCsvNoSupValue?: boolean;

  //
  cdcMinFileSize?: number;

  //
  encodingType?: string;

  //
  encryptionMode?: string;

  //
  ignoreHeaderRows?: number;

  //
  ignoreHeadersRow?: number;

  //
  includeOpForFullLoad?: boolean;

  //
  parquetVersion?: string;

  //
  csvRowDelimiter?: string;

  //
  dataPageSize?: number;

  //
  serverSideEncryptionKmsKeyId?: string;
}

export function dms_getEndpointS3Setting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'parquetTimestampInMillisecond',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'addColumnName',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'encryptionMode',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'ignoreHeaderRows',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'ignoreHeadersRow',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'dataPageSize',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'cdcPath', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'serviceAccessRoleArn',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'glueCatalogGeneration',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'dataFormat',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'serverSideEncryptionKmsKeyId',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'dictPageSizeLimit',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxFileSize',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'cannedAclForObjects',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'preserveTransactions',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Bool, 'rfc4180', '', () => [], true, false),
    new DynamicUIProps(
      InputType.Number,
      'cdcMinFileSize',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'includeOpForFullLoad',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'rowGroupLength',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'compressionType',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'datePartitionSequence',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'externalTableDefinition',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'csvDelimiter',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'bucketName',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'cdcInsertsAndUpdates',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'useTaskStartTimeForFullLoadTimestamp',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'parquetVersion',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'csvRowDelimiter',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'bucketFolder',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'datePartitionDelimiter',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'cdcMaxBatchInterval',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'datePartitionEnabled',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'csvNoSupValue',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'encodingType',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'csvNullValue',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enableStatistics',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'cdcInsertsOnly',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'timestampColumnName',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'useCsvNoSupValue',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
