import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  kinesis_AnalyticsApplicationInputsSchemaRecordColumn,
  kinesis_AnalyticsApplicationInputsSchemaRecordColumn_GetTypes,
} from "./kinesis_AnalyticsApplicationInputsSchemaRecordColumn";
import {
  kinesis_AnalyticsApplicationInputsSchemaRecordFormat,
  kinesis_AnalyticsApplicationInputsSchemaRecordFormat_GetTypes,
} from "./kinesis_AnalyticsApplicationInputsSchemaRecordFormat";

export interface kinesis_AnalyticsApplicationInputsSchema {
  /*
The Record Column mapping for the streaming source data element.
See Record Columns below for more details.
*/
  recordColumns?: Array<kinesis_AnalyticsApplicationInputsSchemaRecordColumn>;

  // The Encoding of the record in the streaming source.
  recordEncoding?: string;

  /*
The Record Format and mapping information to schematize a record.
See Record Format below for more details.
*/
  recordFormat?: kinesis_AnalyticsApplicationInputsSchemaRecordFormat;
}

export function kinesis_AnalyticsApplicationInputsSchema_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "recordEncoding",
      "The Encoding of the record in the streaming source.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "recordFormat",
      "The Record Format and mapping information to schematize a record.\nSee Record Format below for more details.",
      kinesis_AnalyticsApplicationInputsSchemaRecordFormat_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "recordColumns",
      "The Record Column mapping for the streaming source data element.\nSee Record Columns below for more details.",
      kinesis_AnalyticsApplicationInputsSchemaRecordColumn_GetTypes(),
      true,
      false,
    ),
  ];
}
