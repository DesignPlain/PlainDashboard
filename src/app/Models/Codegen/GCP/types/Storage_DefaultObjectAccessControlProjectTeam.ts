import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Storage_DefaultObjectAccessControlProjectTeam {
  /*
The team.
Possible values are: `editors`, `owners`, `viewers`.
*/
  Team?: string;

  // The project team associated with the entity
  ProjectNumber?: string;
}

export function Storage_DefaultObjectAccessControlProjectTeam_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ProjectNumber",
      "The project team associated with the entity",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Team",
      "The team.\nPossible values are: `editors`, `owners`, `viewers`.",
      [],
      false,
      false,
    ),
  ];
}
