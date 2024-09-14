import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration,
  kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration";
import {
  kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration,
  kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration";
import {
  kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration,
  kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration_GetTypes,
} from "./kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration";

export interface kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration {
  // Defaults to `true`. Set it to `false` if you want to disable format conversion while preserving the configuration details.
  enabled?: boolean;

  // Specifies the deserializer that you want Kinesis Data Firehose to use to convert the format of your data from JSON. See `input_format_configuration` block below for details.
  inputFormatConfiguration?: kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration;

  // Specifies the serializer that you want Kinesis Data Firehose to use to convert the format of your data to the Parquet or ORC format. See `output_format_configuration` block below for details.
  outputFormatConfiguration?: kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration;

  // Specifies the AWS Glue Data Catalog table that contains the column information. See `schema_configuration` block below for details.
  schemaConfiguration?: kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration;
}

export function kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Defaults to `true`. Set it to `false` if you want to disable format conversion while preserving the configuration details.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "inputFormatConfiguration",
      "Specifies the deserializer that you want Kinesis Data Firehose to use to convert the format of your data from JSON. See `input_format_configuration` block below for details.",
      () =>
        kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "outputFormatConfiguration",
      "Specifies the serializer that you want Kinesis Data Firehose to use to convert the format of your data to the Parquet or ORC format. See `output_format_configuration` block below for details.",
      () =>
        kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "schemaConfiguration",
      "Specifies the AWS Glue Data Catalog table that contains the column information. See `schema_configuration` block below for details.",
      () =>
        kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration_GetTypes(),
      true,
      false,
    ),
  ];
}
