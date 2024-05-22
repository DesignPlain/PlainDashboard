import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface PolicyTagArgs {
  /*
Description of this policy tag. It must: contain only unicode characters, tabs,
newlines, carriage returns and page breaks; and be at most 2000 bytes long when
encoded in UTF-8. If not set, defaults to an empty description.
If not set, defaults to an empty description.
*/
  description?: string;

  /*
User defined name of this policy tag. It must: be unique within the parent
taxonomy; contain only unicode letters, numbers, underscores, dashes and spaces;
not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8.
*/
  displayName?: string;

  /*
Resource name of this policy tag's parent policy tag.
If empty, it means this policy tag is a top level policy tag.
If not set, defaults to an empty string.
*/
  parentPolicyTag?: string;

  /*
Taxonomy the policy tag is associated with


- - -
*/
  taxonomy?: string;
}
export class PolicyTag extends Resource {
  /*
Resource name of this policy tag's parent policy tag.
If empty, it means this policy tag is a top level policy tag.
If not set, defaults to an empty string.
*/
  public parentPolicyTag?: string;

  /*
Taxonomy the policy tag is associated with


- - -
*/
  public taxonomy?: string;

  // Resource names of child policy tags of this policy tag.
  public childPolicyTags?: Array<string>;

  /*
Description of this policy tag. It must: contain only unicode characters, tabs,
newlines, carriage returns and page breaks; and be at most 2000 bytes long when
encoded in UTF-8. If not set, defaults to an empty description.
If not set, defaults to an empty description.
*/
  public description?: string;

  /*
User defined name of this policy tag. It must: be unique within the parent
taxonomy; contain only unicode letters, numbers, underscores, dashes and spaces;
not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8.
*/
  public displayName?: string;

  /*
Resource name of this policy tag, whose format is:
"projects/{project}/locations/{region}/taxonomies/{taxonomy}/policyTags/{policytag}"
*/
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of this policy tag. It must: contain only unicode characters, tabs,\nnewlines, carriage returns and page breaks; and be at most 2000 bytes long when\nencoded in UTF-8. If not set, defaults to an empty description.\nIf not set, defaults to an empty description.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "User defined name of this policy tag. It must: be unique within the parent\ntaxonomy; contain only unicode letters, numbers, underscores, dashes and spaces;\nnot start or end with spaces; and be at most 200 bytes long when encoded in UTF-8.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "parentPolicyTag",
        "Resource name of this policy tag's parent policy tag.\nIf empty, it means this policy tag is a top level policy tag.\nIf not set, defaults to an empty string.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "taxonomy",
        "Taxonomy the policy tag is associated with\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
