import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv {
  // The Column Delimiter.
  recordColumnDelimiter?: string;

  // The Row Delimiter.
  recordRowDelimiter?: string;
}

export function kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'recordColumnDelimiter',
      'The Column Delimiter.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'recordRowDelimiter',
      'The Row Delimiter.',
      () => [],
      true,
      false,
    ),
  ];
}
