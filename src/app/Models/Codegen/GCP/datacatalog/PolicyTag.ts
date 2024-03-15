import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface PolicyTagArgs {
  /*
User defined name of this policy tag. It must: be unique within the parent
taxonomy; contain only unicode letters, numbers, underscores, dashes and spaces;
not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8.
*/
  DisplayName?: string;

  /*
Resource name of this policy tag's parent policy tag.
If empty, it means this policy tag is a top level policy tag.
If not set, defaults to an empty string.
*/
  ParentPolicyTag?: string;

  /*
Taxonomy the policy tag is associated with


- - -
*/
  Taxonomy?: string;

  /*
Description of this policy tag. It must: contain only unicode characters, tabs,
newlines, carriage returns and page breaks; and be at most 2000 bytes long when
encoded in UTF-8. If not set, defaults to an empty description.
If not set, defaults to an empty description.
*/
  Description?: string;
}
export class PolicyTag extends Resource {
  // Resource names of child policy tags of this policy tag.
  public ChildPolicyTags?: Array<string>;

  /*
Description of this policy tag. It must: contain only unicode characters, tabs,
newlines, carriage returns and page breaks; and be at most 2000 bytes long when
encoded in UTF-8. If not set, defaults to an empty description.
If not set, defaults to an empty description.
*/
  public Description?: string;

  /*
User defined name of this policy tag. It must: be unique within the parent
taxonomy; contain only unicode letters, numbers, underscores, dashes and spaces;
not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8.
*/
  public DisplayName?: string;

  /*
Resource name of this policy tag, whose format is:
"projects/{project}/locations/{region}/taxonomies/{taxonomy}/policyTags/{policytag}"
*/
  public Name?: string;

  /*
Resource name of this policy tag's parent policy tag.
If empty, it means this policy tag is a top level policy tag.
If not set, defaults to an empty string.
*/
  public ParentPolicyTag?: string;

  /*
Taxonomy the policy tag is associated with


- - -
*/
  public Taxonomy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "User defined name of this policy tag. It must: be unique within the parent\ntaxonomy; contain only unicode letters, numbers, underscores, dashes and spaces;\nnot start or end with spaces; and be at most 200 bytes long when encoded in UTF-8.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ParentPolicyTag",
        "Resource name of this policy tag's parent policy tag.\nIf empty, it means this policy tag is a top level policy tag.\nIf not set, defaults to an empty string.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Taxonomy",
        "Taxonomy the policy tag is associated with\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of this policy tag. It must: contain only unicode characters, tabs,\nnewlines, carriage returns and page breaks; and be at most 2000 bytes long when\nencoded in UTF-8. If not set, defaults to an empty description.\nIf not set, defaults to an empty description.",
      ),
    ];
  }
}
