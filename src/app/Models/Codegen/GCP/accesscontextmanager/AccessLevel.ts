import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AccessLevelBasic } from "../types/AccessLevelBasic";
import { AccessLevelCustom } from "../types/AccessLevelCustom";

export interface AccessLevelArgs {
  /*
A set of predefined conditions for the access level and a combining function.
Structure is documented below.
*/
  Basic?: AccessLevelBasic;

  /*
Custom access level conditions are set using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request.
See CEL spec at: https://github.com/google/cel-spec.
Structure is documented below.
*/
  Custom?: AccessLevelCustom;

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
}
export class AccessLevel extends Resource {
  /*
A set of predefined conditions for the access level and a combining function.
Structure is documented below.
*/
  public Basic?: AccessLevelBasic;

  /*
Custom access level conditions are set using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request.
See CEL spec at: https://github.com/google/cel-spec.
Structure is documented below.
*/
  public Custom?: AccessLevelCustom;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The AccessPolicy this AccessLevel lives in.\nFormat: accessPolicies/{policy_id}",
      ),
      new DynamicUIProps(
        InputType.String,
        "Title",
        "Human readable title. Must be unique within the Policy.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Basic",
        "A set of predefined conditions for the access level and a combining function.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Custom",
        "Custom access level conditions are set using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request.\nSee CEL spec at: https://github.com/google/cel-spec.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of the AccessLevel and its use. Does not affect behavior.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Resource name for the Access Level. The short_name component must begin\nwith a letter and only include alphanumeric and '_'.\nFormat: accessPolicies/{policy_id}/accessLevels/{short_name}\n\n\n- - -",
      ),
    ];
  }
}
