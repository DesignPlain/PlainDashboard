import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface TaxonomyArgs {
  /*
A list of policy types that are activated for this taxonomy. If not set,
defaults to an empty list.
Each value may be one of: `POLICY_TYPE_UNSPECIFIED`, `FINE_GRAINED_ACCESS_CONTROL`.
*/
  ActivatedPolicyTypes?: Array<string>;

  /*
Description of this taxonomy. It must: contain only unicode characters,
tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes
long when encoded in UTF-8. If not set, defaults to an empty description.
*/
  Description?: string;

  /*
User defined name of this taxonomy.
The taxonomy display name must be unique within an organization.
It must: contain only unicode letters, numbers, underscores, dashes
and spaces; not start or end with spaces; and be at most 200 bytes
long when encoded in UTF-8.


- - -
*/
  DisplayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // Taxonomy location region.
  Region?: string;
}
export class Taxonomy extends Resource {
  /*
A list of policy types that are activated for this taxonomy. If not set,
defaults to an empty list.
Each value may be one of: `POLICY_TYPE_UNSPECIFIED`, `FINE_GRAINED_ACCESS_CONTROL`.
*/
  public ActivatedPolicyTypes?: Array<string>;

  /*
Description of this taxonomy. It must: contain only unicode characters,
tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes
long when encoded in UTF-8. If not set, defaults to an empty description.
*/
  public Description?: string;

  /*
User defined name of this taxonomy.
The taxonomy display name must be unique within an organization.
It must: contain only unicode letters, numbers, underscores, dashes
and spaces; not start or end with spaces; and be at most 200 bytes
long when encoded in UTF-8.


- - -
*/
  public DisplayName?: string;

  /*
Resource name of this taxonomy, whose format is:
"projects/{project}/locations/{region}/taxonomies/{taxonomy}".
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Taxonomy location region.
  public Region?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.DropDown,
        "ActivatedPolicyTypes",
        "A list of policy types that are activated for this taxonomy. If not set,\ndefaults to an empty list.\nEach value may be one of: `POLICY_TYPE_UNSPECIFIED`, `FINE_GRAINED_ACCESS_CONTROL`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of this taxonomy. It must: contain only unicode characters,\ntabs, newlines, carriage returns and page breaks; and be at most 2000 bytes\nlong when encoded in UTF-8. If not set, defaults to an empty description.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "User defined name of this taxonomy.\nThe taxonomy display name must be unique within an organization.\nIt must: contain only unicode letters, numbers, underscores, dashes\nand spaces; not start or end with spaces; and be at most 200 bytes\nlong when encoded in UTF-8.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "Taxonomy location region.",
      ),
    ];
  }
}
