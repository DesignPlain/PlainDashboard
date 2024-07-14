import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  accesscontextmanager_AccessLevelsAccessLevel,
  accesscontextmanager_AccessLevelsAccessLevel_GetTypes,
} from "../types/accesscontextmanager_AccessLevelsAccessLevel";

export interface AccessLevelsArgs {
  /*
The desired Access Levels that should replace all existing Access Levels in the Access Policy.
Structure is documented below.
*/
  accessLevels?: Array<accesscontextmanager_AccessLevelsAccessLevel>;

  /*
The AccessPolicy this AccessLevel lives in.
Format: accessPolicies/{policy_id}


- - -
*/
  parent?: string;
}
export class AccessLevels extends Resource {
  /*
The desired Access Levels that should replace all existing Access Levels in the Access Policy.
Structure is documented below.
*/
  public accessLevels?: Array<accesscontextmanager_AccessLevelsAccessLevel>;

  /*
The AccessPolicy this AccessLevel lives in.
Format: accessPolicies/{policy_id}


- - -
*/
  public parent?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The AccessPolicy this AccessLevel lives in.\nFormat: accessPolicies/{policy_id}\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "accessLevels",
        "The desired Access Levels that should replace all existing Access Levels in the Access Policy.\nStructure is documented below.",
        accesscontextmanager_AccessLevelsAccessLevel_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
