import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataplex_AssetDiscoverySpecJsonOptions {
  // Optional. Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).
  DisableTypeInference?: boolean;

  // Optional. The character encoding of the data. The default is UTF-8.
  Encoding?: string;
}

export function Dataplex_AssetDiscoverySpecJsonOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "DisableTypeInference",
      "Optional. Whether to disable the inference of data type for Json data. If true, all columns will be registered as their primitive types (strings, number or boolean).",
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
  ];
}
