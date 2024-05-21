import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appengine_StandardAppVersionEntrypoint {
  /*
The format should be a shell command that can be fed to bash -c.

- - -
*/
  shell?: string;
}

export function appengine_StandardAppVersionEntrypoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "shell",
      "The format should be a shell command that can be fed to bash -c.\n\n- - -",
      [],
      true,
      false,
    ),
  ];
}
