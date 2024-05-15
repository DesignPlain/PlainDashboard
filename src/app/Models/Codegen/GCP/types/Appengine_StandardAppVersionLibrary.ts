import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Appengine_StandardAppVersionLibrary {
  // Name of the library. Example "django".
  Name?: string;

  // Version of the library to select, or "latest".
  Version?: string;
}

export function Appengine_StandardAppVersionLibrary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Version",
      'Version of the library to select, or "latest".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      'Name of the library. Example "django".',
      [],
      false,
      false,
    ),
  ];
}
