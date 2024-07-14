import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv,
  kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv_GetTypes,
} from "./kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv";
import {
  kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson,
  kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson_GetTypes,
} from "./kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson";

export interface kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters {
  /*
Mapping information when the record format uses delimiters.
See CSV Mapping Parameters below for more details.
*/
  csv?: kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv;

  /*
Mapping information when JSON is the record format on the streaming source.
See JSON Mapping Parameters below for more details.
*/
  json?: kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson;
}

export function kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "csv",
      "Mapping information when the record format uses delimiters.\nSee CSV Mapping Parameters below for more details.",
      kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "json",
      "Mapping information when JSON is the record format on the streaming source.\nSee JSON Mapping Parameters below for more details.",
      kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson_GetTypes(),
      false,
      false,
    ),
  ];
}
