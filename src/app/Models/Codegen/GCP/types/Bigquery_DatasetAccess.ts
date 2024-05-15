import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigquery_DatasetAccessRoutine,
  Bigquery_DatasetAccessRoutine_GetTypes,
} from "./Bigquery_DatasetAccessRoutine";
import {
  Bigquery_DatasetAccessDataset,
  Bigquery_DatasetAccessDataset_GetTypes,
} from "./Bigquery_DatasetAccessDataset";
import {
  Bigquery_DatasetAccessView,
  Bigquery_DatasetAccessView_GetTypes,
} from "./Bigquery_DatasetAccessView";

export interface Bigquery_DatasetAccess {
  /*
Describes the rights granted to the user specified by the other
member of the access object. Basic, predefined, and custom roles
are supported. Predefined roles that have equivalent basic roles
are swapped by the API to their basic counterparts. See
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

  // A special group to grant access to. Possible values include:
  SpecialGroup?: string;

  /*
Grants all resources of particular types in a particular dataset read access to the current dataset.
Structure is documented below.
*/
  Dataset?: Bigquery_DatasetAccessDataset;

  /*
A domain to grant access to. Any users signed in with the
domain specified will be granted the specified access
*/
  Domain?: string;

  // An email address of a Google Group to grant access to.
  GroupByEmail?: string;

  /*
Some other type of member that appears in the IAM Policy but isn't a user,
group, domain, or special group. For example: `allUsers`
*/
  IamMember?: string;

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
}

export function Bigquery_DatasetAccess_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Role",
      "Describes the rights granted to the user specified by the other\nmember of the access object. Basic, predefined, and custom roles\nare supported. Predefined roles that have equivalent basic roles\nare swapped by the API to their basic counterparts. See\n[official docs](https://cloud.google.com/bigquery/docs/access-control).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Routine",
      "A routine from a different dataset to grant access to. Queries\nexecuted against that routine will have read access to tables in\nthis dataset. The role field is not required when this field is\nset. If that routine is updated by any user, access to the routine\nneeds to be granted again via an update operation.\nStructure is documented below.",
      Bigquery_DatasetAccessRoutine_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Dataset",
      "Grants all resources of particular types in a particular dataset read access to the current dataset.\nStructure is documented below.",
      Bigquery_DatasetAccessDataset_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "GroupByEmail",
      "An email address of a Google Group to grant access to.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "UserByEmail",
      "An email address of a user to grant access to. For example:\nfred@example.com",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SpecialGroup",
      "A special group to grant access to. Possible values include:",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Domain",
      "A domain to grant access to. Any users signed in with the\ndomain specified will be granted the specified access",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IamMember",
      "Some other type of member that appears in the IAM Policy but isn't a user,\ngroup, domain, or special group. For example: `allUsers`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "View",
      "A view from a different dataset to grant access to. Queries\nexecuted against that view will have read access to tables in\nthis dataset. The role field is not required when this field is\nset. If that view is updated by any user, access to the view\nneeds to be granted again via an update operation.\nStructure is documented below.",
      Bigquery_DatasetAccessView_GetTypes(),
      false,
      false,
    ),
  ];
}
