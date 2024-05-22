import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema,
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource,
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource";

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource {
  //
  referenceId?: string;

  // Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
  referenceSchema?: kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema;

  // Identifies the S3 bucket and object that contains the reference data.
  s3ReferenceDataSource?: kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource;

  // The name of the in-application table to create.
  tableName?: string;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "tableName",
      "The name of the in-application table to create.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "referenceId", "", [], false, false),
    new DynamicUIProps(
      InputType.Object,
      "referenceSchema",
      "Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.",
      kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceReferenceSchema_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "s3ReferenceDataSource",
      "Identifies the S3 bucket and object that contains the reference data.",
      kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSourceS3ReferenceDataSource_GetTypes(),
      true,
      false,
    ),
  ];
}
