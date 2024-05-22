import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appengine_StandardAppVersionLibrary {
  // Name of the library. Example "django".
  name?: string;

  // Version of the library to select, or "latest".
  version?: string;
}

export function appengine_StandardAppVersionLibrary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      'Name of the library. Example "django".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "version",
      'Version of the library to select, or "latest".',
      [],
      false,
      false,
    ),
  ];
}
