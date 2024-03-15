import { getDatasetAccessDataset } from "./getDatasetAccessDataset";
import { getDatasetAccessRoutine } from "./getDatasetAccessRoutine";
import { getDatasetAccessView } from "./getDatasetAccessView";

export interface getDatasetAccess {
  /*
Describes the rights granted to the user specified by the other
member of the access object. Basic, predefined, and custom roles
are supported. Predefined roles that have equivalent basic roles
are swapped by the API to their basic counterparts. See
[official docs](https://cloud.google.com/bigquery/docs/access-control).
*/
  Role?: string;

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

  // Grants all resources of particular types in a particular dataset read access to the current dataset.
  Datasets?: Array<getDatasetAccessDataset>;

  /*
A domain to grant access to. Any users signed in with the
domain specified will be granted the specified access
*/
  Domain?: string;

  // An email address of a Google Group to grant access to.
  GroupByEmail?: string;

  /*
Some other type of member that appears in the IAM Policy but isn't a user,
group, domain, or special group. For example: 'allUsers'
*/
  IAMMember?: string;

  /*
A routine from a different dataset to grant access to. Queries
executed against that routine will have read access to tables in
this dataset. The role field is not required when this field is
set. If that routine is updated by any user, access to the routine
needs to be granted again via an update operation.
*/
  Routines?: Array<getDatasetAccessRoutine>;

  /*
A view from a different dataset to grant access to. Queries
executed against that view will have read access to tables in
this dataset. The role field is not required when this field is
set. If that view is updated by any user, access to the view
needs to be granted again via an update operation.
*/
  Views?: Array<getDatasetAccessView>;
}
