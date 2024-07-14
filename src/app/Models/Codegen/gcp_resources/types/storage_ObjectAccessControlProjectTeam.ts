import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface storage_ObjectAccessControlProjectTeam {
  /*
The team.
Possible values are: `editors`, `owners`, `viewers`.
*/
  team?: string;

  // The project team associated with the entity
  projectNumber?: string;
}

export function storage_ObjectAccessControlProjectTeam_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "team",
      "The team.\nPossible values are: `editors`, `owners`, `viewers`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "projectNumber",
      "The project team associated with the entity",
      [],
      false,
      false,
    ),
  ];
}
