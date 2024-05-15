import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataplex_AssetDiscoverySpecCsvOptions {
  // Optional. The delimiter being used to separate values. This defaults to ','.
  Delimiter?: string;

  // Optional. Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.
  DisableTypeInference?: boolean;

  // Optional. The character encoding of the data. The default is UTF-8.
  Encoding?: string;

  // Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.
  HeaderRows?: number;
}

export function Dataplex_AssetDiscoverySpecCsvOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Delimiter",
      "Optional. The delimiter being used to separate values. This defaults to ','.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "DisableTypeInference",
      "Optional. Whether to disable the inference of data type for CSV data. If true, all columns will be registered as strings.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Encoding",
      "Optional. The character encoding of the data. The default is UTF-8.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "HeaderRows",
      "Optional. The number of rows to interpret as header rows that should be skipped when reading data rows.",
      [],
      false,
      false,
    ),
  ];
}
