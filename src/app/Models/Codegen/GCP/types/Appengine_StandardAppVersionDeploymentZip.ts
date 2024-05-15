import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Appengine_StandardAppVersionDeploymentZip {
  // files count
  FilesCount?: number;

  // Source URL
  SourceUrl?: string;
}

export function Appengine_StandardAppVersionDeploymentZip_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "SourceUrl",
      "Source URL",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "FilesCount",
      "files count",
      [],
      false,
      false,
    ),
  ];
}
