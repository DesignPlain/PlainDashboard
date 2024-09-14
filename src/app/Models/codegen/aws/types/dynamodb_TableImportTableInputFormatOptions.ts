import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dynamodb_TableImportTableInputFormatOptionsCsv,
  dynamodb_TableImportTableInputFormatOptionsCsv_GetTypes,
} from "./dynamodb_TableImportTableInputFormatOptionsCsv";

export interface dynamodb_TableImportTableInputFormatOptions {
  // This block contains the processing options for the CSV file being imported:
  csv?: dynamodb_TableImportTableInputFormatOptionsCsv;
}

export function dynamodb_TableImportTableInputFormatOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "csv",
      "This block contains the processing options for the CSV file being imported:",
      () => dynamodb_TableImportTableInputFormatOptionsCsv_GetTypes(),
      false,
      false,
    ),
  ];
}
