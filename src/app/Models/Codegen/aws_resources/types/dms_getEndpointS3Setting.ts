import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dms_getEndpointS3Setting {
  //
  datePartitionEnabled?: boolean;

  //
  datePartitionSequence?: string;

  //
  maxFileSize?: number;

  //
  preserveTransactions?: boolean;

  //
  bucketFolder?: string;

  //
  cdcInsertsAndUpdates?: boolean;

  //
  cdcMinFileSize?: number;

  //
  csvNoSupValue?: string;

  //
  encodingType?: string;

  //
  encryptionMode?: string;

  //
  glueCatalogGeneration?: boolean;

  //
  serviceAccessRoleArn?: string;

  //
  csvRowDelimiter?: string;

  //
  dictPageSizeLimit?: number;

  //
  dataFormat?: string;

  //
  timestampColumnName?: string;

  //
  useCsvNoSupValue?: boolean;

  //
  useTaskStartTimeForFullLoadTimestamp?: boolean;

  //
  cdcMaxBatchInterval?: number;

  //
  compressionType?: string;

  //
  cdcInsertsOnly?: boolean;

  //
  includeOpForFullLoad?: boolean;

  //
  parquetTimestampInMillisecond?: boolean;

  //
  addColumnName?: boolean;

  //
  cannedAclForObjects?: string;

  //
  csvNullValue?: string;

  //
  dataPageSize?: number;

  //
  enableStatistics?: boolean;

  //
  ignoreHeaderRows?: number;

  //
  ignoreHeadersRow?: number;

  //
  rfc4180?: boolean;

  //
  bucketName?: string;

  //
  csvDelimiter?: string;

  //
  externalTableDefinition?: string;

  //
  rowGroupLength?: number;

  //
  parquetVersion?: string;

  //
  serverSideEncryptionKmsKeyId?: string;

  //
  cdcPath?: string;

  //
  datePartitionDelimiter?: string;
}

export function dms_getEndpointS3Setting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "encryptionMode", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "csvRowDelimiter",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "useCsvNoSupValue", "", [], true, false),
    new DynamicUIProps(InputType.Bool, "enableStatistics", "", [], true, false),
    new DynamicUIProps(InputType.Number, "rowGroupLength", "", [], true, false),
    new DynamicUIProps(
      InputType.Bool,
      "datePartitionEnabled",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "cdcInsertsAndUpdates",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "cdcMinFileSize", "", [], true, false),
    new DynamicUIProps(InputType.String, "csvNullValue", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "serviceAccessRoleArn",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "useTaskStartTimeForFullLoadTimestamp",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "cdcMaxBatchInterval",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "dataFormat", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "compressionType",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "rfc4180", "", [], true, false),
    new DynamicUIProps(InputType.String, "csvDelimiter", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "serverSideEncryptionKmsKeyId",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "encodingType", "", [], true, false),
    new DynamicUIProps(
      InputType.Bool,
      "glueCatalogGeneration",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "dictPageSizeLimit",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ignoreHeaderRows",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "bucketFolder", "", [], true, false),
    new DynamicUIProps(InputType.Bool, "addColumnName", "", [], true, false),
    new DynamicUIProps(InputType.Number, "dataPageSize", "", [], true, false),
    new DynamicUIProps(InputType.String, "parquetVersion", "", [], true, false),
    new DynamicUIProps(
      InputType.Bool,
      "preserveTransactions",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "timestampColumnName",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ignoreHeadersRow",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "datePartitionSequence",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cannedAclForObjects",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "csvNoSupValue", "", [], true, false),
    new DynamicUIProps(
      InputType.Bool,
      "parquetTimestampInMillisecond",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "datePartitionDelimiter",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "bucketName", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "externalTableDefinition",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "cdcPath", "", [], true, false),
    new DynamicUIProps(InputType.Number, "maxFileSize", "", [], true, false),
    new DynamicUIProps(InputType.Bool, "cdcInsertsOnly", "", [], true, false),
    new DynamicUIProps(
      InputType.Bool,
      "includeOpForFullLoad",
      "",
      [],
      true,
      false,
    ),
  ];
}
