import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Appengine_FlexibleAppVersionHandlerScript {
  // Path to the script from the application root directory.
  ScriptPath?: string;
}

export function Appengine_FlexibleAppVersionHandlerScript_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ScriptPath",
      "Path to the script from the application root directory.",
      [],
      true,
      false,
    ),
  ];
}
