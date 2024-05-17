import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Accesscontextmanager_AccessLevelsAccessLevel,
  Accesscontextmanager_AccessLevelsAccessLevel_GetTypes,
} from "../types/Accesscontextmanager_AccessLevelsAccessLevel";

export interface AccessLevelsArgs {
  /*
The desired Access Levels that should replace all existing Access Levels in the Access Policy.
Structure is documented below.
*/
  AccessLevels?: Array<Accesscontextmanager_AccessLevelsAccessLevel>;

  /*
The AccessPolicy this AccessLevel lives in.
Format: accessPolicies/{policy_id}


- - -
*/
  Parent?: string;
}
export class AccessLevels extends Resource {
  /*
The desired Access Levels that should replace all existing Access Levels in the Access Policy.
Structure is documented below.
*/
  public AccessLevels?: Array<Accesscontextmanager_AccessLevelsAccessLevel>;

  /*
The AccessPolicy this AccessLevel lives in.
Format: accessPolicies/{policy_id}


- - -
*/
  public Parent?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "AccessLevels",
        "The desired Access Levels that should replace all existing Access Levels in the Access Policy.\nStructure is documented below.",
        Accesscontextmanager_AccessLevelsAccessLevel_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The AccessPolicy this AccessLevel lives in.\nFormat: accessPolicies/{policy_id}\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
