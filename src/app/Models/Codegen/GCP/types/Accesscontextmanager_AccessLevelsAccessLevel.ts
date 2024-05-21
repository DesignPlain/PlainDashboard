import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  accesscontextmanager_AccessLevelsAccessLevelBasic,
  accesscontextmanager_AccessLevelsAccessLevelBasic_GetTypes,
} from "./accesscontextmanager_AccessLevelsAccessLevelBasic";
import {
  accesscontextmanager_AccessLevelsAccessLevelCustom,
  accesscontextmanager_AccessLevelsAccessLevelCustom_GetTypes,
} from "./accesscontextmanager_AccessLevelsAccessLevelCustom";

export interface accesscontextmanager_AccessLevelsAccessLevel {
  /*
A set of predefined conditions for the access level and a combining function.
Structure is documented below.
*/
  basic?: accesscontextmanager_AccessLevelsAccessLevelBasic;

  /*
Custom access level conditions are set using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request.
See CEL spec at: https://github.com/google/cel-spec.
Structure is documented below.
*/
  custom?: accesscontextmanager_AccessLevelsAccessLevelCustom;

  // Description of the AccessLevel and its use. Does not affect behavior.
  description?: string;

  /*
Resource name for the Access Level. The short_name component must begin
with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}
*/
  name?: string;

  // Human readable title. Must be unique within the Policy.
  title?: string;
}

export function accesscontextmanager_AccessLevelsAccessLevel_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description of the AccessLevel and its use. Does not affect behavior.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Resource name for the Access Level. The short_name component must begin\nwith a letter and only include alphanumeric and '_'.\nFormat: accessPolicies/{policy_id}/accessLevels/{short_name}",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "title",
      "Human readable title. Must be unique within the Policy.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "basic",
      "A set of predefined conditions for the access level and a combining function.\nStructure is documented below.",
      accesscontextmanager_AccessLevelsAccessLevelBasic_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "custom",
      "Custom access level conditions are set using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request.\nSee CEL spec at: https://github.com/google/cel-spec.\nStructure is documented below.",
      accesscontextmanager_AccessLevelsAccessLevelCustom_GetTypes(),
      false,
      false,
    ),
  ];
}
