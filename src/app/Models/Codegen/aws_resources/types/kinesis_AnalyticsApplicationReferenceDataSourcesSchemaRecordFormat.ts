import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters,
  kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters_GetTypes,
} from "./kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters";

export interface kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormat {
  /*
The Mapping Information for the record format.
See Mapping Parameters below for more details.
*/
  mappingParameters?: kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters;

  // The type of Record Format. Can be `CSV` or `JSON`.
  recordFormatType?: string;
}

export function kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormat_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "mappingParameters",
      "The Mapping Information for the record format.\nSee Mapping Parameters below for more details.",
      kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "recordFormatType",
      "The type of Record Format. Can be `CSV` or `JSON`.",
      [],
      false,
      false,
    ),
  ];
}
