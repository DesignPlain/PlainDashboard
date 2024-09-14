import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataloss_PreventionStoredInfoTypeLargeCustomDictionary,
  dataloss_PreventionStoredInfoTypeLargeCustomDictionary_GetTypes,
} from "../types/dataloss_PreventionStoredInfoTypeLargeCustomDictionary";
import {
  dataloss_PreventionStoredInfoTypeRegex,
  dataloss_PreventionStoredInfoTypeRegex_GetTypes,
} from "../types/dataloss_PreventionStoredInfoTypeRegex";
import {
  dataloss_PreventionStoredInfoTypeDictionary,
  dataloss_PreventionStoredInfoTypeDictionary_GetTypes,
} from "../types/dataloss_PreventionStoredInfoTypeDictionary";

export interface PreventionStoredInfoTypeArgs {
  // User set display name of the info type.
  displayName?: string;

  /*
Dictionary which defines the rule.
Structure is documented below.
*/
  largeCustomDictionary?: dataloss_PreventionStoredInfoTypeLargeCustomDictionary;

  /*
The parent of the info type in any of the following formats:
- `projects/{{project}}`
- `projects/{{project}}/locations/{{location}}`
- `organizations/{{organization_id}}`
- `organizations/{{organization_id}}/locations/{{location}}`


- - -
*/
  parent?: string;

  /*
Regular expression which defines the rule.
Structure is documented below.
*/
  regex?: dataloss_PreventionStoredInfoTypeRegex;

  /*
The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens;
that is, it must match the regular expression: [a-zA-Z\d-_]+. The maximum length is 100
characters. Can be empty to allow the system to generate one.
*/
  storedInfoTypeId?: string;

  // A description of the info type.
  description?: string;

  /*
Dictionary which defines the rule.
Structure is documented below.
*/
  dictionary?: dataloss_PreventionStoredInfoTypeDictionary;
}
export class PreventionStoredInfoType extends DS_Resource {
  /*
The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens;
that is, it must match the regular expression: [a-zA-Z\d-_]+. The maximum length is 100
characters. Can be empty to allow the system to generate one.
*/
  public storedInfoTypeId?: string;

  // A description of the info type.
  public description?: string;

  /*
Dictionary which defines the rule.
Structure is documented below.
*/
  public dictionary?: dataloss_PreventionStoredInfoTypeDictionary;

  // User set display name of the info type.
  public displayName?: string;

  /*
Dictionary which defines the rule.
Structure is documented below.
*/
  public largeCustomDictionary?: dataloss_PreventionStoredInfoTypeLargeCustomDictionary;

  // Name describing the field.
  public name?: string;

  /*
The parent of the info type in any of the following formats:
- `projects/{{project}}`
- `projects/{{project}}/locations/{{location}}`
- `organizations/{{organization_id}}`
- `organizations/{{organization_id}}/locations/{{location}}`


- - -
*/
  public parent?: string;

  /*
Regular expression which defines the rule.
Structure is documented below.
*/
  public regex?: dataloss_PreventionStoredInfoTypeRegex;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "largeCustomDictionary",
        "Dictionary which defines the rule.\nStructure is documented below.",
        () => dataloss_PreventionStoredInfoTypeLargeCustomDictionary_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The parent of the info type in any of the following formats:\n* `projects/{{project}}`\n* `projects/{{project}}/locations/{{location}}`\n* `organizations/{{organization_id}}`\n* `organizations/{{organization_id}}/locations/{{location}}`\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "regex",
        "Regular expression which defines the rule.\nStructure is documented below.",
        () => dataloss_PreventionStoredInfoTypeRegex_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "storedInfoTypeId",
        "The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens;\nthat is, it must match the regular expression: [a-zA-Z\\d-_]+. The maximum length is 100\ncharacters. Can be empty to allow the system to generate one.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the info type.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "dictionary",
        "Dictionary which defines the rule.\nStructure is documented below.",
        () => dataloss_PreventionStoredInfoTypeDictionary_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "User set display name of the info type.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
