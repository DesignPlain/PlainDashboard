import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  accesscontextmanager_AccessLevelCustom,
  accesscontextmanager_AccessLevelCustom_GetTypes,
} from '../types/accesscontextmanager_AccessLevelCustom';
import {
  accesscontextmanager_AccessLevelBasic,
  accesscontextmanager_AccessLevelBasic_GetTypes,
} from '../types/accesscontextmanager_AccessLevelBasic';

export interface AccessLevelArgs {
  /*
Custom access level conditions are set using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request.
See CEL spec at: https://github.com/google/cel-spec.
Structure is documented below.
*/
  custom?: accesscontextmanager_AccessLevelCustom;

  // Description of the AccessLevel and its use. Does not affect behavior.
  description?: string;

  /*
Resource name for the Access Level. The short_name component must begin
with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}


- - -
*/
  name?: string;

  /*
The AccessPolicy this AccessLevel lives in.
Format: accessPolicies/{policy_id}
*/
  parent?: string;

  // Human readable title. Must be unique within the Policy.
  title?: string;

  /*
A set of predefined conditions for the access level and a combining function.
Structure is documented below.
*/
  basic?: accesscontextmanager_AccessLevelBasic;
}
export class AccessLevel extends DS_Resource {
  /*
The AccessPolicy this AccessLevel lives in.
Format: accessPolicies/{policy_id}
*/
  public parent?: string;

  // Human readable title. Must be unique within the Policy.
  public title?: string;

  /*
A set of predefined conditions for the access level and a combining function.
Structure is documented below.
*/
  public basic?: accesscontextmanager_AccessLevelBasic;

  /*
Custom access level conditions are set using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request.
See CEL spec at: https://github.com/google/cel-spec.
Structure is documented below.
*/
  public custom?: accesscontextmanager_AccessLevelCustom;

  // Description of the AccessLevel and its use. Does not affect behavior.
  public description?: string;

  /*
Resource name for the Access Level. The short_name component must begin
with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}


- - -
*/
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'parent',
        'The AccessPolicy this AccessLevel lives in.\nFormat: accessPolicies/{policy_id}',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'title',
        'Human readable title. Must be unique within the Policy.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'basic',
        'A set of predefined conditions for the access level and a combining function.\nStructure is documented below.',
        () => accesscontextmanager_AccessLevelBasic_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'custom',
        'Custom access level conditions are set using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request.\nSee CEL spec at: https://github.com/google/cel-spec.\nStructure is documented below.',
        () => accesscontextmanager_AccessLevelCustom_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the AccessLevel and its use. Does not affect behavior.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        "Resource name for the Access Level. The short_name component must begin\nwith a letter and only include alphanumeric and '_'.\nFormat: accessPolicies/{policy_id}/accessLevels/{short_name}\n\n\n- - -",
        () => [],
        false,
        true,
      ),
    ];
  }
}
