import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration {
  // Specifies the AWS Glue table that contains the column information that constitutes your data schema.
  tableName?: string;

  // Specifies the table version for the output data schema. Defaults to `LATEST`.
  versionId?: string;

  // The ID of the AWS Glue Data Catalog. If you don't supply this, the AWS account ID is used by default.
  catalogId?: string;

  // Specifies the name of the AWS Glue database that contains the schema for the output data.
  databaseName?: string;

  // If you don't specify an AWS Region, the default is the current region.
  region?: string;

  // The role that Kinesis Data Firehose can use to access AWS Glue. This role must be in the same account you use for Kinesis Data Firehose. Cross-account roles aren't allowed.
  roleArn?: string;
}

export function kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'versionId',
      'Specifies the table version for the output data schema. Defaults to `LATEST`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'catalogId',
      "The ID of the AWS Glue Data Catalog. If you don't supply this, the AWS account ID is used by default.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'databaseName',
      'Specifies the name of the AWS Glue database that contains the schema for the output data.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'region',
      "If you don't specify an AWS Region, the default is the current region.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'roleArn',
      "The role that Kinesis Data Firehose can use to access AWS Glue. This role must be in the same account you use for Kinesis Data Firehose. Cross-account roles aren't allowed.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'tableName',
      'Specifies the AWS Glue table that contains the column information that constitutes your data schema.',
      () => [],
      true,
      false,
    ),
  ];
}
