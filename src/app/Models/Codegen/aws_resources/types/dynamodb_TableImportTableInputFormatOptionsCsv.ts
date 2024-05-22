import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dynamodb_TableImportTableInputFormatOptionsCsv {
  // The delimiter used for separating items in the CSV file being imported.
  delimiter?: string;

  // List of the headers used to specify a common header for all source CSV files being imported.
  headerLists?: Array<string>;
}

export function dynamodb_TableImportTableInputFormatOptionsCsv_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "delimiter",
      "The delimiter used for separating items in the CSV file being imported.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "headerLists",
      "List of the headers used to specify a common header for all source CSV files being imported.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
