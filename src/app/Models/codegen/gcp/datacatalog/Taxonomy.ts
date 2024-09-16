import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface TaxonomyArgs {
  // Taxonomy location region.
  region?: string;

  /*
A list of policy types that are activated for this taxonomy. If not set,
defaults to an empty list.
Each value may be one of: `POLICY_TYPE_UNSPECIFIED`, `FINE_GRAINED_ACCESS_CONTROL`.
*/
  activatedPolicyTypes?: Array<string>;

  /*
Description of this taxonomy. It must: contain only unicode characters,
tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes
long when encoded in UTF-8. If not set, defaults to an empty description.
*/
  description?: string;

  /*
User defined name of this taxonomy.
The taxonomy display name must be unique within an organization.
It must: contain only unicode letters, numbers, underscores, dashes
and spaces; not start or end with spaces; and be at most 200 bytes
long when encoded in UTF-8.


- - -
*/
  displayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class Taxonomy extends DS_Resource {
  /*
Resource name of this taxonomy, whose format is:
"projects/{project}/locations/{region}/taxonomies/{taxonomy}".
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Taxonomy location region.
  public region?: string;

  /*
A list of policy types that are activated for this taxonomy. If not set,
defaults to an empty list.
Each value may be one of: `POLICY_TYPE_UNSPECIFIED`, `FINE_GRAINED_ACCESS_CONTROL`.
*/
  public activatedPolicyTypes?: Array<string>;

  /*
Description of this taxonomy. It must: contain only unicode characters,
tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes
long when encoded in UTF-8. If not set, defaults to an empty description.
*/
  public description?: string;

  /*
User defined name of this taxonomy.
The taxonomy display name must be unique within an organization.
It must: contain only unicode letters, numbers, underscores, dashes
and spaces; not start or end with spaces; and be at most 200 bytes
long when encoded in UTF-8.


- - -
*/
  public displayName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'region',
        'Taxonomy location region.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'activatedPolicyTypes',
        'A list of policy types that are activated for this taxonomy. If not set,\ndefaults to an empty list.\nEach value may be one of: `POLICY_TYPE_UNSPECIFIED`, `FINE_GRAINED_ACCESS_CONTROL`.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of this taxonomy. It must: contain only unicode characters,\ntabs, newlines, carriage returns and page breaks; and be at most 2000 bytes\nlong when encoded in UTF-8. If not set, defaults to an empty description.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'displayName',
        'User defined name of this taxonomy.\nThe taxonomy display name must be unique within an organization.\nIt must: contain only unicode letters, numbers, underscores, dashes\nand spaces; not start or end with spaces; and be at most 200 bytes\nlong when encoded in UTF-8.\n\n\n- - -',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
