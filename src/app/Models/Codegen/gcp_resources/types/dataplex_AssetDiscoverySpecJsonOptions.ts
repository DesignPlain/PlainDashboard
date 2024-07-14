import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dataplex_AssetDiscoverySpecJsonOptions {
  // Optional. Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).
  disableTypeInference?: boolean;

  // Optional. The character encoding of the data. The default is UTF-8.
  encoding?: string;
}

export function dataplex_AssetDiscoverySpecJsonOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "disableTypeInference",
      "Optional. Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "encoding",
      "Optional. The character encoding of the data. The default is UTF-8.",
      [],
      false,
      false,
    ),
  ];
}
