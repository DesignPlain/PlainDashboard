import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appengine_StandardAppVersionHandlerScript {
  // Path to the script from the application root directory.
  scriptPath?: string;
}

export function appengine_StandardAppVersionHandlerScript_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "scriptPath",
      "Path to the script from the application root directory.",
      [],
      true,
      false,
    ),
  ];
}
