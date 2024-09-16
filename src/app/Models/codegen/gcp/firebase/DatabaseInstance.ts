import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface DatabaseInstanceArgs {
  // The intended database state.
  desiredState?: string;

  /*
The globally unique identifier of the Firebase Realtime Database instance.
Instance IDs cannot be reused after deletion.


- - -
*/
  instanceId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
A reference to the region where the Firebase Realtime database resides.
Check all [available regions](https://firebase.google.com/docs/projects/locations#rtdb-locations)
*/
  region?: string;

  /*
The database type.
Each project can create one default Firebase Realtime Database, which cannot be deleted once created.
Creating user Databases is only available for projects on the Blaze plan.
Projects can be upgraded using the Cloud Billing API https://cloud.google.com/billing/reference/rest/v1/projects/updateBillingInfo.
Default value is `USER_DATABASE`.
Possible values are: `DEFAULT_DATABASE`, `USER_DATABASE`.
*/
  type?: string;
}
export class DatabaseInstance extends DS_Resource {
  // The current database state. Set desired_state to :DISABLED to disable the database and :ACTIVE to reenable the database
  public state?: string;

  /*
The database type.
Each project can create one default Firebase Realtime Database, which cannot be deleted once created.
Creating user Databases is only available for projects on the Blaze plan.
Projects can be upgraded using the Cloud Billing API https://cloud.google.com/billing/reference/rest/v1/projects/updateBillingInfo.
Default value is `USER_DATABASE`.
Possible values are: `DEFAULT_DATABASE`, `USER_DATABASE`.
*/
  public type?: string;

  /*
The database URL in the form of https://{instance-id}.firebaseio.com for us-central1 instances
or https://{instance-id}.{region}.firebasedatabase.app in other regions.
*/
  public databaseUrl?: string;

  // The intended database state.
  public desiredState?: string;

  /*
The globally unique identifier of the Firebase Realtime Database instance.
Instance IDs cannot be reused after deletion.


- - -
*/
  public instanceId?: string;

  /*
The fully-qualified resource name of the Firebase Realtime Database, in the
format: projects/PROJECT_NUMBER/locations/REGION_IDENTIFIER/instances/INSTANCE_ID
PROJECT_NUMBER: The Firebase project's [`ProjectNumber`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_number)
Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510).
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
A reference to the region where the Firebase Realtime database resides.
Check all [available regions](https://firebase.google.com/docs/projects/locations#rtdb-locations)
*/
  public region?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'region',
        'A reference to the region where the Firebase Realtime database resides.\nCheck all [available regions](https://firebase.google.com/docs/projects/locations#rtdb-locations)',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'type',
        'The database type.\nEach project can create one default Firebase Realtime Database, which cannot be deleted once created.\nCreating user Databases is only available for projects on the Blaze plan.\nProjects can be upgraded using the Cloud Billing API https://cloud.google.com/billing/reference/rest/v1/projects/updateBillingInfo.\nDefault value is `USER_DATABASE`.\nPossible values are: `DEFAULT_DATABASE`, `USER_DATABASE`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'desiredState',
        'The intended database state.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'instanceId',
        'The globally unique identifier of the Firebase Realtime Database instance.\nInstance IDs cannot be reused after deletion.\n\n\n- - -',
        () => [],
        true,
        true,
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
