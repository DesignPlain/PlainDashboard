import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormat,
  kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormat_GetTypes,
} from "./kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormat";
import {
  kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordColumn,
  kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordColumn_GetTypes,
} from "./kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordColumn";

export interface kinesis_AnalyticsApplicationReferenceDataSourcesSchema {
  /*
The Record Column mapping for the streaming source data element.
See Record Columns below for more details.
*/
  recordColumns?: Array<kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordColumn>;

  // The Encoding of the record in the streaming source.
  recordEncoding?: string;

  /*
The Record Format and mapping information to schematize a record.
See Record Format below for more details.
*/
  recordFormat?: kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormat;
}

export function kinesis_AnalyticsApplicationReferenceDataSourcesSchema_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "recordColumns",
      "The Record Column mapping for the streaming source data element.\nSee Record Columns below for more details.",
      () =>
        kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordColumn_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "recordEncoding",
      "The Encoding of the record in the streaming source.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "recordFormat",
      "The Record Format and mapping information to schematize a record.\nSee Record Format below for more details.",
      () =>
        kinesis_AnalyticsApplicationReferenceDataSourcesSchemaRecordFormat_GetTypes(),
      true,
      false,
    ),
  ];
}
