import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Firebaserules_RulesetSourceFile {
  // Textual Content.
  Content?: string;

  // Fingerprint (e.g. github sha) associated with the `File`.
  Fingerprint?: string;

  /*
File name.

- - -
*/
  Name?: string;
}

export function Firebaserules_RulesetSourceFile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Content",
      "Textual Content.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Fingerprint",
      "Fingerprint (e.g. github sha) associated with the `File`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "File name.\n\n- - -",
      [],
      true,
      true,
    ),
  ];
}
