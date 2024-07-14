import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface quicksight_DataSetPhysicalTableMapS3SourceUploadSettings {
  // File format. Valid values are `CSV`, `TSV`, `CLF`, `ELF`, `XLSX`, and `JSON`.
  format?: string;

  // A row number to start reading data from.
  startFromRow?: number;

  // Text qualifier. Valid values are `DOUBLE_QUOTE` and `SINGLE_QUOTE`.
  textQualifier?: string;

  // Whether the file has a header row, or the files each have a header row.
  containsHeader?: boolean;

  // Delimiter between values in the file.
  delimiter?: string;
}

export function quicksight_DataSetPhysicalTableMapS3SourceUploadSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "containsHeader",
      "Whether the file has a header row, or the files each have a header row.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "delimiter",
      "Delimiter between values in the file.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "format",
      "File format. Valid values are `CSV`, `TSV`, `CLF`, `ELF`, `XLSX`, and `JSON`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "startFromRow",
      "A row number to start reading data from.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "textQualifier",
      "Text qualifier. Valid values are `DOUBLE_QUOTE` and `SINGLE_QUOTE`.",
      [],
      false,
      false,
    ),
  ];
}
