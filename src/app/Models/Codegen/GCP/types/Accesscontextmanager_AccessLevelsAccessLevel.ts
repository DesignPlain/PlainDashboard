import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Accesscontextmanager_AccessLevelsAccessLevelCustom,
  Accesscontextmanager_AccessLevelsAccessLevelCustom_GetTypes,
} from "./Accesscontextmanager_AccessLevelsAccessLevelCustom";
import {
  Accesscontextmanager_AccessLevelsAccessLevelBasic,
  Accesscontextmanager_AccessLevelsAccessLevelBasic_GetTypes,
} from "./Accesscontextmanager_AccessLevelsAccessLevelBasic";

export interface Accesscontextmanager_AccessLevelsAccessLevel {
  /*
Custom access level conditions are set using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request.
See CEL spec at: https://github.com/google/cel-spec.
Structure is documented below.
*/
  Custom?: Accesscontextmanager_AccessLevelsAccessLevelCustom;

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
  Basic?: Accesscontextmanager_AccessLevelsAccessLevelBasic;
}

export function Accesscontextmanager_AccessLevelsAccessLevel_GetTypes(): DynamicUIProps[] {
  return [
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
      Accesscontextmanager_AccessLevelsAccessLevelBasic_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Custom",
      "Custom access level conditions are set using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request.\nSee CEL spec at: https://github.com/google/cel-spec.\nStructure is documented below.",
      Accesscontextmanager_AccessLevelsAccessLevelCustom_GetTypes(),
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
      "Resource name for the Access Level. The short_name component must begin\nwith a letter and only include alphanumeric and '_'.\nFormat: accessPolicies/{policy_id}/accessLevels/{short_name}",
      [],
      true,
      true,
    ),
  ];
}
