import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Accesscontextmanager_AccessLevelCustom,
  Accesscontextmanager_AccessLevelCustom_GetTypes,
} from "../types/Accesscontextmanager_AccessLevelCustom";
import {
  Accesscontextmanager_AccessLevelBasic,
  Accesscontextmanager_AccessLevelBasic_GetTypes,
} from "../types/Accesscontextmanager_AccessLevelBasic";

export interface AccessLevelArgs {
  // Description of the AccessLevel and its use. Does not affect behavior.
  Description?: string;

  /*
Resource name for the Access Level. The short_name component must begin
with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}


- - -
*/
  Name?: string;

  /*
The AccessPolicy this AccessLevel lives in.
Format: accessPolicies/{policy_id}
*/
  Parent?: string;

  // Human readable title. Must be unique within the Policy.
  Title?: string;

  /*
A set of predefined conditions for the access level and a combining function.
Structure is documented below.
*/
  Basic?: Accesscontextmanager_AccessLevelBasic;

  /*
Custom access level conditions are set using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request.
See CEL spec at: https://github.com/google/cel-spec.
Structure is documented below.
*/
  Custom?: Accesscontextmanager_AccessLevelCustom;
}
export class AccessLevel extends Resource {
  // Description of the AccessLevel and its use. Does not affect behavior.
  public Description?: string;

  /*
Resource name for the Access Level. The short_name component must begin
with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}


- - -
*/
  public Name?: string;

  /*
The AccessPolicy this AccessLevel lives in.
Format: accessPolicies/{policy_id}
*/
  public Parent?: string;

  // Human readable title. Must be unique within the Policy.
  public Title?: string;

  /*
A set of predefined conditions for the access level and a combining function.
Structure is documented below.
*/
  public Basic?: Accesscontextmanager_AccessLevelBasic;

  /*
Custom access level conditions are set using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request.
See CEL spec at: https://github.com/google/cel-spec.
Structure is documented below.
*/
  public Custom?: Accesscontextmanager_AccessLevelCustom;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "Custom",
        "Custom access level conditions are set using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request.\nSee CEL spec at: https://github.com/google/cel-spec.\nStructure is documented below.",
        Accesscontextmanager_AccessLevelCustom_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of the AccessLevel and its use. Does not affect behavior.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Resource name for the Access Level. The short_name component must begin\nwith a letter and only include alphanumeric and '_'.\nFormat: accessPolicies/{policy_id}/accessLevels/{short_name}\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The AccessPolicy this AccessLevel lives in.\nFormat: accessPolicies/{policy_id}",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Title",
        "Human readable title. Must be unique within the Policy.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Basic",
        "A set of predefined conditions for the access level and a combining function.\nStructure is documented below.",
        Accesscontextmanager_AccessLevelBasic_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
