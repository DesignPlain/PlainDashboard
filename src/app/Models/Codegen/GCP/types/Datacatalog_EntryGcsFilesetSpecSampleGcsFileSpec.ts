import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Datacatalog_EntryGcsFilesetSpecSampleGcsFileSpec {
  /*
(Output)
The full file path
*/
  FilePath?: string;

  /*
(Output)
The size of the file, in bytes.
*/
  SizeBytes?: number;
}

export function Datacatalog_EntryGcsFilesetSpecSampleGcsFileSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "FilePath",
      "(Output)\nThe full file path",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "SizeBytes",
      "(Output)\nThe size of the file, in bytes.",
      [],
      false,
      false,
    ),
  ];
}
