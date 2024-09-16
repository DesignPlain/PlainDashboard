import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dataplex_ZoneDiscoverySpecCsvOptions {
  // Optional. The delimiter being used to separate values. This defaults to ','.
  delimiter?: string;

  // Optional. Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.
  disableTypeInference?: boolean;

  // Optional. The character encoding of the data. The default is UTF-8.
  encoding?: string;

  // Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.
  headerRows?: number;
}

export function dataplex_ZoneDiscoverySpecCsvOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'encoding',
      'Optional. The character encoding of the data. The default is UTF-8.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'headerRows',
      'Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'delimiter',
      "Optional. The delimiter being used to separate values. This defaults to ','.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'disableTypeInference',
      'Optional. Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.',
      () => [],
      false,
      false,
    ),
  ];
}
