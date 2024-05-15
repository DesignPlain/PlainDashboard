import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Appengine_StandardAppVersionDeploymentFile {
  // The identifier for this object. Format specified above.
  Name?: string;

  // SHA1 checksum of the file
  Sha1Sum?: string;

  // Source URL
  SourceUrl?: string;
}

export function Appengine_StandardAppVersionDeploymentFile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The identifier for this object. Format specified above.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Sha1Sum",
      "SHA1 checksum of the file",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SourceUrl",
      "Source URL",
      [],
      true,
      false,
    ),
  ];
}
