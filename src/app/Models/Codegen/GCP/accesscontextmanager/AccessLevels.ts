import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AccessLevelsAccessLevel } from "../types/AccessLevelsAccessLevel";

export interface AccessLevelsArgs {
  /*
The desired Access Levels that should replace all existing Access Levels in the Access Policy.
Structure is documented below.
*/
  AccessLevels?: Array<AccessLevelsAccessLevel>;

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
  public AccessLevels?: Array<AccessLevelsAccessLevel>;

  /*
The AccessPolicy this AccessLevel lives in.
Format: accessPolicies/{policy_id}


- - -
*/
  public Parent?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.DropDown,
        "AccessLevels",
        "The desired Access Levels that should replace all existing Access Levels in the Access Policy.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The AccessPolicy this AccessLevel lives in.\nFormat: accessPolicies/{policy_id}\n\n\n- - -",
      ),
    ];
  }
}
