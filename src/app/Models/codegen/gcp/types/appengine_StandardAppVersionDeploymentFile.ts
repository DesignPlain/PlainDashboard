import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appengine_StandardAppVersionDeploymentFile {
  // The identifier for this object. Format specified above.
  name?: string;

  // SHA1 checksum of the file
  sha1Sum?: string;

  // Source URL
  sourceUrl?: string;
}

export function appengine_StandardAppVersionDeploymentFile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The identifier for this object. Format specified above.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sha1Sum",
      "SHA1 checksum of the file",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceUrl",
      "Source URL",
      () => [],
      true,
      false,
    ),
  ];
}
