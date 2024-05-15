import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigquery_getDatasetAccessView,
  Bigquery_getDatasetAccessView_GetTypes,
} from "./Bigquery_getDatasetAccessView";
import {
  Bigquery_getDatasetAccessDataset,
  Bigquery_getDatasetAccessDataset_GetTypes,
} from "./Bigquery_getDatasetAccessDataset";
import {
  Bigquery_getDatasetAccessRoutine,
  Bigquery_getDatasetAccessRoutine_GetTypes,
} from "./Bigquery_getDatasetAccessRoutine";

export interface Bigquery_getDatasetAccess {
  // Grants all resources of particular types in a particular dataset read access to the current dataset.
  Datasets?: Array<Bigquery_getDatasetAccessDataset>;

  /*
A domain to grant access to. Any users signed in with the
domain specified will be granted the specified access
*/
  Domain?: string;

  // An email address of a Google Group to grant access to.
  GroupByEmail?: string;

  /*
Describes the rights granted to the user specified by the other
member of the access object. Basic, predefined, and custom roles
are supported. Predefined roles that have equivalent basic roles
are swapped by the API to their basic counterparts. See
[official docs](https://cloud.google.com/bigquery/docs/access-control).
*/
  Role?: string;

  /*
Some other type of member that appears in the IAM Policy but isn't a user,
group, domain, or special group. For example: 'allUsers'
*/
  IamMember?: string;

  /*
A routine from a different dataset to grant access to. Queries
executed against that routine will have read access to tables in
this dataset. The role field is not required when this field is
set. If that routine is updated by any user, access to the routine
needs to be granted again via an update operation.
*/
  Routines?: Array<Bigquery_getDatasetAccessRoutine>;

  /*
A special group to grant access to. Possible values include:


- 'projectOwners': Owners of the enclosing project.


- 'projectReaders': Readers of the enclosing project.


- 'projectWriters': Writers of the enclosing project.


- 'allAuthenticatedUsers': All authenticated BigQuery users.
*/
  SpecialGroup?: string;

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
*/
  Views?: Array<Bigquery_getDatasetAccessView>;
}

export function Bigquery_getDatasetAccess_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Role",
      "Describes the rights granted to the user specified by the other\nmember of the access object. Basic, predefined, and custom roles\nare supported. Predefined roles that have equivalent basic roles\nare swapped by the API to their basic counterparts. See\n[official docs](https://cloud.google.com/bigquery/docs/access-control).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Routines",
      "A routine from a different dataset to grant access to. Queries\nexecuted against that routine will have read access to tables in\nthis dataset. The role field is not required when this field is\nset. If that routine is updated by any user, access to the routine\nneeds to be granted again via an update operation.",
      Bigquery_getDatasetAccessRoutine_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "UserByEmail",
      "An email address of a user to grant access to. For example:\nfred@example.com",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SpecialGroup",
      "A special group to grant access to. Possible values include:\n\n\n* 'projectOwners': Owners of the enclosing project.\n\n\n* 'projectReaders': Readers of the enclosing project.\n\n\n* 'projectWriters': Writers of the enclosing project.\n\n\n* 'allAuthenticatedUsers': All authenticated BigQuery users.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Views",
      "A view from a different dataset to grant access to. Queries\nexecuted against that view will have read access to tables in\nthis dataset. The role field is not required when this field is\nset. If that view is updated by any user, access to the view\nneeds to be granted again via an update operation.",
      Bigquery_getDatasetAccessView_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Datasets",
      "Grants all resources of particular types in a particular dataset read access to the current dataset.",
      Bigquery_getDatasetAccessDataset_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Domain",
      "A domain to grant access to. Any users signed in with the\ndomain specified will be granted the specified access",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "GroupByEmail",
      "An email address of a Google Group to grant access to.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IamMember",
      "Some other type of member that appears in the IAM Policy but isn't a user,\ngroup, domain, or special group. For example: 'allUsers'",
      [],
      true,
      false,
    ),
  ];
}
