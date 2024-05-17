import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionStoredInfoTypeRegex,
  Dataloss_PreventionStoredInfoTypeRegex_GetTypes,
} from "../types/Dataloss_PreventionStoredInfoTypeRegex";
import {
  Dataloss_PreventionStoredInfoTypeDictionary,
  Dataloss_PreventionStoredInfoTypeDictionary_GetTypes,
} from "../types/Dataloss_PreventionStoredInfoTypeDictionary";
import {
  Dataloss_PreventionStoredInfoTypeLargeCustomDictionary,
  Dataloss_PreventionStoredInfoTypeLargeCustomDictionary_GetTypes,
} from "../types/Dataloss_PreventionStoredInfoTypeLargeCustomDictionary";

export interface PreventionStoredInfoTypeArgs {
  /*
The parent of the info type in any of the following formats:
- `projects/{{project}}`
- `projects/{{project}}/locations/{{location}}`
- `organizations/{{organization_id}}`
- `organizations/{{organization_id}}/locations/{{location}}`


- - -
*/
  Parent?: string;

  /*
Regular expression which defines the rule.
Structure is documented below.
*/
  Regex?: Dataloss_PreventionStoredInfoTypeRegex;

  /*
The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens;
that is, it must match the regular expression: [a-zA-Z\d-_]+. The maximum length is 100
characters. Can be empty to allow the system to generate one.
*/
  StoredInfoTypeId?: string;

  // A description of the info type.
  Description?: string;

  /*
Dictionary which defines the rule.
Structure is documented below.
*/
  Dictionary?: Dataloss_PreventionStoredInfoTypeDictionary;

  // User set display name of the info type.
  DisplayName?: string;

  /*
Dictionary which defines the rule.
Structure is documented below.
*/
  LargeCustomDictionary?: Dataloss_PreventionStoredInfoTypeLargeCustomDictionary;
}
export class PreventionStoredInfoType extends Resource {
  // User set display name of the info type.
  public DisplayName?: string;

  /*
Dictionary which defines the rule.
Structure is documented below.
*/
  public LargeCustomDictionary?: Dataloss_PreventionStoredInfoTypeLargeCustomDictionary;

  // Name describing the field.
  public Name?: string;

  /*
The parent of the info type in any of the following formats:
- `projects/{{project}}`
- `projects/{{project}}/locations/{{location}}`
- `organizations/{{organization_id}}`
- `organizations/{{organization_id}}/locations/{{location}}`


- - -
*/
  public Parent?: string;

  /*
Regular expression which defines the rule.
Structure is documented below.
*/
  public Regex?: Dataloss_PreventionStoredInfoTypeRegex;

  /*
The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens;
that is, it must match the regular expression: [a-zA-Z\d-_]+. The maximum length is 100
characters. Can be empty to allow the system to generate one.
*/
  public StoredInfoTypeId?: string;

  // A description of the info type.
  public Description?: string;

  /*
Dictionary which defines the rule.
Structure is documented below.
*/
  public Dictionary?: Dataloss_PreventionStoredInfoTypeDictionary;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "Dictionary",
        "Dictionary which defines the rule.\nStructure is documented below.",
        Dataloss_PreventionStoredInfoTypeDictionary_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "User set display name of the info type.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "LargeCustomDictionary",
        "Dictionary which defines the rule.\nStructure is documented below.",
        Dataloss_PreventionStoredInfoTypeLargeCustomDictionary_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The parent of the info type in any of the following formats:\n* `projects/{{project}}`\n* `projects/{{project}}/locations/{{location}}`\n* `organizations/{{organization_id}}`\n* `organizations/{{organization_id}}/locations/{{location}}`\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Regex",
        "Regular expression which defines the rule.\nStructure is documented below.",
        Dataloss_PreventionStoredInfoTypeRegex_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "StoredInfoTypeId",
        "The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens;\nthat is, it must match the regular expression: [a-zA-Z\\d-_]+. The maximum length is 100\ncharacters. Can be empty to allow the system to generate one.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A description of the info type.",
        [],
        false,
        false,
      ),
    ];
  }
}
