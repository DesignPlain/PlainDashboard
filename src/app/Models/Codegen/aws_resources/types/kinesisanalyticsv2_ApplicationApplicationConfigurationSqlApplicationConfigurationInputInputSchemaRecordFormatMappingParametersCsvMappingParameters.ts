import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters {
  // The column delimiter. For example, in a CSV format, a comma (`,`) is the typical column delimiter.
  recordColumnDelimiter?: string;

  // The row delimiter. For example, in a CSV format, `\n` is the typical row delimiter.
  recordRowDelimiter?: string;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormatMappingParametersCsvMappingParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "recordColumnDelimiter",
      "The column delimiter. For example, in a CSV format, a comma (`,`) is the typical column delimiter.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "recordRowDelimiter",
      "The row delimiter. For example, in a CSV format, `\\n` is the typical row delimiter.",
      [],
      true,
      false,
    ),
  ];
}
