import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigquery_DatasetAccessRoutine,
  Bigquery_DatasetAccessRoutine_GetTypes,
} from "../types/Bigquery_DatasetAccessRoutine";
import {
  Bigquery_DatasetAccessView,
  Bigquery_DatasetAccessView_GetTypes,
} from "../types/Bigquery_DatasetAccessView";
import {
  Bigquery_DatasetAccessAuthorizedDataset,
  Bigquery_DatasetAccessAuthorizedDataset_GetTypes,
} from "../types/Bigquery_DatasetAccessAuthorizedDataset";

export interface DatasetAccessArgs {
  // An email address of a Google Group to grant access to.
  GroupByEmail?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Describes the rights granted to the user specified by the other
member of the access object. Basic, predefined, and custom roles are
supported. Predefined roles that have equivalent basic roles are
swapped by the API to their basic counterparts, and will show a diff
post-create. See
[official docs](https://cloud.google.com/bigquery/docs/access-control).
*/
  Role?: string;

  /*
A routine from a different dataset to grant access to. Queries
executed against that routine will have read access to tables in
this dataset. The role field is not required when this field is
set. If that routine is updated by any user, access to the routine
needs to be granted again via an update operation.
Structure is documented below.
*/
  Routine?: Bigquery_DatasetAccessRoutine;

  /*
An email address of a user to grant access to. For example:
fred@example.com
*/
  UserByEmail?: string;

  /*
A view from a different dataset to grant access to. Queries
executed against that view will have read access to tables in
this dataset. The role field is not required when this field is
set. If that view is updated by any user, access to the view
needs to be granted again via an update operation.
Structure is documented below.
*/
  View?: Bigquery_DatasetAccessView;

  /*
A unique ID for this dataset, without the project name. The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.


- - -
*/
  DatasetId?: string;

  /*
A domain to grant access to. Any users signed in with the
domain specified will be granted the specified access
*/
  Domain?: string;

  /*
Some other type of member that appears in the IAM Policy but isn't a user,
group, domain, or special group. For example: `allUsers`
*/
  IamMember?: string;

  // A special group to grant access to. Possible values include:
  SpecialGroup?: string;

  /*
Grants all resources of particular types in a particular dataset read access to the current dataset.
Structure is documented below.
*/
  AuthorizedDataset?: Bigquery_DatasetAccessAuthorizedDataset;
}
export class DatasetAccess extends Resource {
  /*
If true, represents that that the iam_member in the config was translated to a different member type by the API, and is
stored in state as a different member type
*/
  public ApiUpdatedMember?: boolean;

  /*
A unique ID for this dataset, without the project name. The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.


- - -
*/
  public DatasetId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Describes the rights granted to the user specified by the other
member of the access object. Basic, predefined, and custom roles are
supported. Predefined roles that have equivalent basic roles are
swapped by the API to their basic counterparts, and will show a diff
post-create. See
[official docs](https://cloud.google.com/bigquery/docs/access-control).
*/
  public Role?: string;

  // A special group to grant access to. Possible values include:
  public SpecialGroup?: string;

  /*
A view from a different dataset to grant access to. Queries
executed against that view will have read access to tables in
this dataset. The role field is not required when this field is
set. If that view is updated by any user, access to the view
needs to be granted again via an update operation.
Structure is documented below.
*/
  public View?: Bigquery_DatasetAccessView;

  /*
Grants all resources of particular types in a particular dataset read access to the current dataset.
Structure is documented below.
*/
  public AuthorizedDataset?: Bigquery_DatasetAccessAuthorizedDataset;

  /*
A domain to grant access to. Any users signed in with the
domain specified will be granted the specified access
*/
  public Domain?: string;

  // An email address of a Google Group to grant access to.
  public GroupByEmail?: string;

  /*
Some other type of member that appears in the IAM Policy but isn't a user,
group, domain, or special group. For example: `allUsers`
*/
  public IamMember?: string;

  /*
A routine from a different dataset to grant access to. Queries
executed against that routine will have read access to tables in
this dataset. The role field is not required when this field is
set. If that routine is updated by any user, access to the routine
needs to be granted again via an update operation.
Structure is documented below.
*/
  public Routine?: Bigquery_DatasetAccessRoutine;

  /*
An email address of a user to grant access to. For example:
fred@example.com
*/
  public UserByEmail?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "SpecialGroup",
        "A special group to grant access to. Possible values include:",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "IamMember",
        "Some other type of member that appears in the IAM Policy but isn't a user,\ngroup, domain, or special group. For example: `allUsers`",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "GroupByEmail",
        "An email address of a Google Group to grant access to.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Role",
        "Describes the rights granted to the user specified by the other\nmember of the access object. Basic, predefined, and custom roles are\nsupported. Predefined roles that have equivalent basic roles are\nswapped by the API to their basic counterparts, and will show a diff\npost-create. See\n[official docs](https://cloud.google.com/bigquery/docs/access-control).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Routine",
        "A routine from a different dataset to grant access to. Queries\nexecuted against that routine will have read access to tables in\nthis dataset. The role field is not required when this field is\nset. If that routine is updated by any user, access to the routine\nneeds to be granted again via an update operation.\nStructure is documented below.",
        Bigquery_DatasetAccessRoutine_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "UserByEmail",
        "An email address of a user to grant access to. For example:\nfred@example.com",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "View",
        "A view from a different dataset to grant access to. Queries\nexecuted against that view will have read access to tables in\nthis dataset. The role field is not required when this field is\nset. If that view is updated by any user, access to the view\nneeds to be granted again via an update operation.\nStructure is documented below.",
        Bigquery_DatasetAccessView_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DatasetId",
        "A unique ID for this dataset, without the project name. The ID\nmust contain only letters (a-z, A-Z), numbers (0-9), or\nunderscores (_). The maximum length is 1,024 characters.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Domain",
        "A domain to grant access to. Any users signed in with the\ndomain specified will be granted the specified access",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AuthorizedDataset",
        "Grants all resources of particular types in a particular dataset read access to the current dataset.\nStructure is documented below.",
        Bigquery_DatasetAccessAuthorizedDataset_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
