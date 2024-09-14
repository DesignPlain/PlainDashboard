import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface firebaserules_RulesetSourceFile {
  // Fingerprint (e.g. github sha) associated with the `File`.
  fingerprint?: string;

  /*
File name.

- - -
*/
  name?: string;

  // Textual Content.
  content?: string;
}

export function firebaserules_RulesetSourceFile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "content",
      "Textual Content.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "fingerprint",
      "Fingerprint (e.g. github sha) associated with the `File`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "File name.\n\n- - -",
      () => [],
      true,
      true,
    ),
  ];
}
