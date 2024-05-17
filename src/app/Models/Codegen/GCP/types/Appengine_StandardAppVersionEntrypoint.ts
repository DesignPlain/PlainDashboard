import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Appengine_StandardAppVersionEntrypoint {
  /*
The format should be a shell command that can be fed to bash -c.

- - -
*/
  Shell?: string;
}

export function Appengine_StandardAppVersionEntrypoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Shell",
      "The format should be a shell command that can be fed to bash -c.\n\n- - -",
      [],
      true,
      false,
    ),
  ];
}
