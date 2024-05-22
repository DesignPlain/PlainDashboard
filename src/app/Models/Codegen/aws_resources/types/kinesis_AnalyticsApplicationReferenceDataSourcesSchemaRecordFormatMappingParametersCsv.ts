import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv {
  // The Column Delimiter.
  recordColumnDelimiter?: string;

  // The Row Delimiter.
  recordRowDelimiter?: string;
}

export function kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "recordColumnDelimiter",
      "The Column Delimiter.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "recordRowDelimiter",
      "The Row Delimiter.",
      [],
      true,
      false,
    ),
  ];
}
