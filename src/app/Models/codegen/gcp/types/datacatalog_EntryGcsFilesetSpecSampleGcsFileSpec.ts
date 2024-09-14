import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface datacatalog_EntryGcsFilesetSpecSampleGcsFileSpec {
  /*
(Output)
The full file path
*/
  filePath?: string;

  /*
(Output)
The size of the file, in bytes.
*/
  sizeBytes?: number;
}

export function datacatalog_EntryGcsFilesetSpecSampleGcsFileSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "filePath",
      "(Output)\nThe full file path",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "sizeBytes",
      "(Output)\nThe size of the file, in bytes.",
      () => [],
      false,
      false,
    ),
  ];
}
