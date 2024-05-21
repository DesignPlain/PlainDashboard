import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  bigquery_DatasetAccessView,
  bigquery_DatasetAccessView_GetTypes,
} from "../types/bigquery_DatasetAccessView";
import {
  bigquery_DatasetAccessAuthorizedDataset,
  bigquery_DatasetAccessAuthorizedDataset_GetTypes,
} from "../types/bigquery_DatasetAccessAuthorizedDataset";
import {
  bigquery_DatasetAccessRoutine,
  bigquery_DatasetAccessRoutine_GetTypes,
} from "../types/bigquery_DatasetAccessRoutine";

export interface DatasetAccessArgs {
  // A special group to grant access to. Possible values include:
  specialGroup?: string;

  /*
A view from a different dataset to grant access to. Queries
executed against that view will have read access to tables in
this dataset. The role field is not required when this field is
set. If that view is updated by any user, access to the view
needs to be granted again via an update operation.
Structure is documented below.
*/
  view?: bigquery_DatasetAccessView;

  /*
Grants all resources of particular types in a particular dataset read access to the current dataset.
Structure is documented below.
*/
  authorizedDataset?: bigquery_DatasetAccessAuthorizedDataset;

  /*
A unique ID for this dataset, without the project name. The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.


- - -
*/
  datasetId?: string;

  /*
Some other type of member that appears in the IAM Policy but isn't a user,
group, domain, or special group. For example: `allUsers`
*/
  iamMember?: string;

  /*
Describes the rights granted to the user specified by the other
member of the access object. Basic, predefined, and custom roles are
supported. Predefined roles that have equivalent basic roles are
swapped by the API to their basic counterparts, and will show a diff
post-create. See
[official docs](https://cloud.google.com/bigquery/docs/access-control).
*/
  role?: string;

  /*
A routine from a different dataset to grant access to. Queries
executed against that routine will have read access to tables in
this dataset. The role field is not required when this field is
set. If that routine is updated by any user, access to the routine
needs to be granted again via an update operation.
Structure is documented below.
*/
  routine?: bigquery_DatasetAccessRoutine;

  /*
A domain to grant access to. Any users signed in with the
domain specified will be granted the specified access
*/
  domain?: string;

  // An email address of a Google Group to grant access to.
  groupByEmail?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
An email address of a user to grant access to. For example:
fred@example.com
*/
  userByEmail?: string;
}
export class DatasetAccess extends Resource {
  /*
Some other type of member that appears in the IAM Policy but isn't a user,
group, domain, or special group. For example: `allUsers`
*/
  public iamMember?: string;

  /*
Describes the rights granted to the user specified by the other
member of the access object. Basic, predefined, and custom roles are
supported. Predefined roles that have equivalent basic roles are
swapped by the API to their basic counterparts, and will show a diff
post-create. See
[official docs](https://cloud.google.com/bigquery/docs/access-control).
*/
  public role?: string;

  /*
An email address of a user to grant access to. For example:
fred@example.com
*/
  public userByEmail?: string;

  /*
If true, represents that that the iam_member in the config was translated to a different member type by the API, and is
stored in state as a different member type
*/
  public apiUpdatedMember?: boolean;

  /*
Grants all resources of particular types in a particular dataset read access to the current dataset.
Structure is documented below.
*/
  public authorizedDataset?: bigquery_DatasetAccessAuthorizedDataset;

  /*
A unique ID for this dataset, without the project name. The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.


- - -
*/
  public datasetId?: string;

  /*
A routine from a different dataset to grant access to. Queries
executed against that routine will have read access to tables in
this dataset. The role field is not required when this field is
set. If that routine is updated by any user, access to the routine
needs to be granted again via an update operation.
Structure is documented below.
*/
  public routine?: bigquery_DatasetAccessRoutine;

  // A special group to grant access to. Possible values include:
  public specialGroup?: string;

  /*
A view from a different dataset to grant access to. Queries
executed against that view will have read access to tables in
this dataset. The role field is not required when this field is
set. If that view is updated by any user, access to the view
needs to be granted again via an update operation.
Structure is documented below.
*/
  public view?: bigquery_DatasetAccessView;

  /*
A domain to grant access to. Any users signed in with the
domain specified will be granted the specified access
*/
  public domain?: string;

  // An email address of a Google Group to grant access to.
  public groupByEmail?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "specialGroup",
        "A special group to grant access to. Possible values include:",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "datasetId",
        "A unique ID for this dataset, without the project name. The ID\nmust contain only letters (a-z, A-Z), numbers (0-9), or\nunderscores (_). The maximum length is 1,024 characters.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "view",
        "A view from a different dataset to grant access to. Queries\nexecuted against that view will have read access to tables in\nthis dataset. The role field is not required when this field is\nset. If that view is updated by any user, access to the view\nneeds to be granted again via an update operation.\nStructure is documented below.",
        bigquery_DatasetAccessView_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "authorizedDataset",
        "Grants all resources of particular types in a particular dataset read access to the current dataset.\nStructure is documented below.",
        bigquery_DatasetAccessAuthorizedDataset_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "iamMember",
        "Some other type of member that appears in the IAM Policy but isn't a user,\ngroup, domain, or special group. For example: `allUsers`",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "role",
        "Describes the rights granted to the user specified by the other\nmember of the access object. Basic, predefined, and custom roles are\nsupported. Predefined roles that have equivalent basic roles are\nswapped by the API to their basic counterparts, and will show a diff\npost-create. See\n[official docs](https://cloud.google.com/bigquery/docs/access-control).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "routine",
        "A routine from a different dataset to grant access to. Queries\nexecuted against that routine will have read access to tables in\nthis dataset. The role field is not required when this field is\nset. If that routine is updated by any user, access to the routine\nneeds to be granted again via an update operation.\nStructure is documented below.",
        bigquery_DatasetAccessRoutine_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "domain",
        "A domain to grant access to. Any users signed in with the\ndomain specified will be granted the specified access",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "groupByEmail",
        "An email address of a Google Group to grant access to.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "userByEmail",
        "An email address of a user to grant access to. For example:\nfred@example.com",
        [],
        false,
        true,
      ),
    ];
  }
}
