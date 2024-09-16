import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParameters,
  kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParameters_GetTypes,
} from './kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParameters';

export interface kinesis_AnalyticsApplicationInputsSchemaRecordFormat {
  /*
The Mapping Information for the record format.
See Mapping Parameters below for more details.
*/
  mappingParameters?: kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParameters;

  // The type of Record Format. Can be `CSV` or `JSON`.
  recordFormatType?: string;
}

export function kinesis_AnalyticsApplicationInputsSchemaRecordFormat_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'mappingParameters',
      'The Mapping Information for the record format.\nSee Mapping Parameters below for more details.',
      () =>
        kinesis_AnalyticsApplicationInputsSchemaRecordFormatMappingParameters_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'recordFormatType',
      'The type of Record Format. Can be `CSV` or `JSON`.',
      () => [],
      false,
      false,
    ),
  ];
}
