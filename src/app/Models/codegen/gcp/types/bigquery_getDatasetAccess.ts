import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  bigquery_getDatasetAccessView,
  bigquery_getDatasetAccessView_GetTypes,
} from "./bigquery_getDatasetAccessView";
import {
  bigquery_getDatasetAccessDataset,
  bigquery_getDatasetAccessDataset_GetTypes,
} from "./bigquery_getDatasetAccessDataset";
import {
  bigquery_getDatasetAccessRoutine,
  bigquery_getDatasetAccessRoutine_GetTypes,
} from "./bigquery_getDatasetAccessRoutine";

export interface bigquery_getDatasetAccess {
  /*
Describes the rights granted to the user specified by the other
member of the access object. Basic, predefined, and custom roles
are supported. Predefined roles that have equivalent basic roles
are swapped by the API to their basic counterparts. See
[official docs](https://cloud.google.com/bigquery/docs/access-control).
*/
  role?: string;

  /*
A routine from a different dataset to grant access to. Queries
executed against that routine will have read access to tables in
this dataset. The role field is not required when this field is
set. If that routine is updated by any user, access to the routine
needs to be granted again via an update operation.
*/
  routines?: Array<bigquery_getDatasetAccessRoutine>;

  /*
A special group to grant access to. Possible values include:


- 'projectOwners': Owners of the enclosing project.


- 'projectReaders': Readers of the enclosing project.


- 'projectWriters': Writers of the enclosing project.


- 'allAuthenticatedUsers': All authenticated BigQuery users.
*/
  specialGroup?: string;

  /*
An email address of a user to grant access to. For example:
fred@example.com
*/
  userByEmail?: string;

  /*
A view from a different dataset to grant access to. Queries
executed against that view will have read access to tables in
this dataset. The role field is not required when this field is
set. If that view is updated by any user, access to the view
needs to be granted again via an update operation.
*/
  views?: Array<bigquery_getDatasetAccessView>;

  /*
A domain to grant access to. Any users signed in with the
domain specified will be granted the specified access
*/
  domain?: string;

  // An email address of a Google Group to grant access to.
  groupByEmail?: string;

  /*
Some other type of member that appears in the IAM Policy but isn't a user,
group, domain, or special group. For example: 'allUsers'
*/
  iamMember?: string;

  // Grants all resources of particular types in a particular dataset read access to the current dataset.
  datasets?: Array<bigquery_getDatasetAccessDataset>;
}

export function bigquery_getDatasetAccess_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "domain",
      "A domain to grant access to. Any users signed in with the\ndomain specified will be granted the specified access",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "datasets",
      "Grants all resources of particular types in a particular dataset read access to the current dataset.",
      () => bigquery_getDatasetAccessDataset_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "role",
      "Describes the rights granted to the user specified by the other\nmember of the access object. Basic, predefined, and custom roles\nare supported. Predefined roles that have equivalent basic roles\nare swapped by the API to their basic counterparts. See\n[official docs](https://cloud.google.com/bigquery/docs/access-control).",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "specialGroup",
      "A special group to grant access to. Possible values include:\n\n\n* 'projectOwners': Owners of the enclosing project.\n\n\n* 'projectReaders': Readers of the enclosing project.\n\n\n* 'projectWriters': Writers of the enclosing project.\n\n\n* 'allAuthenticatedUsers': All authenticated BigQuery users.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "userByEmail",
      "An email address of a user to grant access to. For example:\nfred@example.com",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "views",
      "A view from a different dataset to grant access to. Queries\nexecuted against that view will have read access to tables in\nthis dataset. The role field is not required when this field is\nset. If that view is updated by any user, access to the view\nneeds to be granted again via an update operation.",
      () => bigquery_getDatasetAccessView_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "groupByEmail",
      "An email address of a Google Group to grant access to.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "iamMember",
      "Some other type of member that appears in the IAM Policy but isn't a user,\ngroup, domain, or special group. For example: 'allUsers'",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "routines",
      "A routine from a different dataset to grant access to. Queries\nexecuted against that routine will have read access to tables in\nthis dataset. The role field is not required when this field is\nset. If that routine is updated by any user, access to the routine\nneeds to be granted again via an update operation.",
      () => bigquery_getDatasetAccessRoutine_GetTypes(),
      true,
      false,
    ),
  ];
}
