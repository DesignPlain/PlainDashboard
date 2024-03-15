import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { PreventionStoredInfoTypeDictionary } from "../types/PreventionStoredInfoTypeDictionary";
import { PreventionStoredInfoTypeLargeCustomDictionary } from "../types/PreventionStoredInfoTypeLargeCustomDictionary";
import { PreventionStoredInfoTypeRegex } from "../types/PreventionStoredInfoTypeRegex";

export interface PreventionStoredInfoTypeArgs {
  // A description of the info type.
  Description?: string;

  /*
Dictionary which defines the rule.
Structure is documented below.
*/
  Dictionary?: PreventionStoredInfoTypeDictionary;

  // User set display name of the info type.
  DisplayName?: string;

  /*
Dictionary which defines the rule.
Structure is documented below.
*/
  LargeCustomDictionary?: PreventionStoredInfoTypeLargeCustomDictionary;

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
  Regex?: PreventionStoredInfoTypeRegex;

  /*
The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens;
that is, it must match the regular expression: [a-zA-Z\d-_]+. The maximum length is 100
characters. Can be empty to allow the system to generate one.
*/
  StoredInfoTypeId?: string;
}
export class PreventionStoredInfoType extends Resource {
  /*
Dictionary which defines the rule.
Structure is documented below.
*/
  public LargeCustomDictionary?: PreventionStoredInfoTypeLargeCustomDictionary;

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
  public Regex?: PreventionStoredInfoTypeRegex;

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
  public Dictionary?: PreventionStoredInfoTypeDictionary;

  // User set display name of the info type.
  public DisplayName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The parent of the info type in any of the following formats:\n* `projects/{{project}}`\n* `projects/{{project}}/locations/{{location}}`\n* `organizations/{{organization_id}}`\n* `organizations/{{organization_id}}/locations/{{location}}`\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Regex",
        "Regular expression which defines the rule.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "StoredInfoTypeId",
        "The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens;\nthat is, it must match the regular expression: [a-zA-Z\\d-_]+. The maximum length is 100\ncharacters. Can be empty to allow the system to generate one.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A description of the info type.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Dictionary",
        "Dictionary which defines the rule.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "User set display name of the info type.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LargeCustomDictionary",
        "Dictionary which defines the rule.\nStructure is documented below.",
      ),
    ];
  }
}
