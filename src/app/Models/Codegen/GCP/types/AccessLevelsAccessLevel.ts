import { AccessLevelsAccessLevelCustom } from "./AccessLevelsAccessLevelCustom";
import { AccessLevelsAccessLevelBasic } from "./AccessLevelsAccessLevelBasic";

export interface AccessLevelsAccessLevel {
  // Description of the AccessLevel and its use. Does not affect behavior.
  Description?: string;

  /*
Resource name for the Access Level. The short_name component must begin
with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}
*/
  Name?: string;

  // Human readable title. Must be unique within the Policy.
  Title?: string;

  /*
A set of predefined conditions for the access level and a combining function.
Structure is documented below.
*/
  Basic?: AccessLevelsAccessLevelBasic;

  /*
Custom access level conditions are set using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request.
See CEL spec at: https://github.com/google/cel-spec.
Structure is documented below.
*/
  Custom?: AccessLevelsAccessLevelCustom;
}
