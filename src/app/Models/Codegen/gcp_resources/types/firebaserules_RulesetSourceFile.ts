import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface firebaserules_RulesetSourceFile {
  // Textual Content.
  content?: string;

  // Fingerprint (e.g. github sha) associated with the `File`.
  fingerprint?: string;

  /*
File name.

- - -
*/
  name?: string;
}

export function firebaserules_RulesetSourceFile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "content",
      "Textual Content.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "fingerprint",
      "Fingerprint (e.g. github sha) associated with the `File`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "File name.\n\n- - -",
      [],
      true,
      true,
    ),
  ];
}
