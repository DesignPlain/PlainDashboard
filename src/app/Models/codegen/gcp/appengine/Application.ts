import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appengine_ApplicationFeatureSettings,
  appengine_ApplicationFeatureSettings_GetTypes,
} from '../types/appengine_ApplicationFeatureSettings';
import {
  appengine_ApplicationIap,
  appengine_ApplicationIap_GetTypes,
} from '../types/appengine_ApplicationIap';
import {
  appengine_ApplicationUrlDispatchRule,
  appengine_ApplicationUrlDispatchRule_GetTypes,
} from '../types/appengine_ApplicationUrlDispatchRule';

export interface ApplicationArgs {
  // The domain to authenticate users with when using App Engine's User API.
  authDomain?: string;

  /*
The type of the Cloud Firestore or Cloud Datastore database associated with this application.
Can be `CLOUD_FIRESTORE` or `CLOUD_DATASTORE_COMPATIBILITY` for new
instances.  To support old instances, the value `CLOUD_DATASTORE` is accepted by the provider, but will be rejected by the API.
To create a Cloud Firestore database without creating an App Engine application, use the
`gcp.firestore.Database`
resource instead.
*/
  databaseType?: string;

  // A block of optional settings to configure specific App Engine features:
  featureSettings?: appengine_ApplicationFeatureSettings;

  // Settings for enabling Cloud Identity Aware Proxy
  iap?: appengine_ApplicationIap;

  /*
The [location](https://cloud.google.com/appengine/docs/locations)
to serve the app from.
*/
  locationId?: string;

  /*
The project ID to create the application under.
~>--NOTE:-- GCP only accepts project ID, not project number. If you are using number,
you may get a "Permission denied" error.
*/
  project?: string;

  // The serving status of the app.
  servingStatus?: string;
}
export class Application extends DS_Resource {
  // Identifier of the app, usually `{PROJECT_ID}`
  public appId?: string;

  /*
The [location](https://cloud.google.com/appengine/docs/locations)
to serve the app from.
*/
  public locationId?: string;

  // Unique name of the app, usually `apps/{PROJECT_ID}`
  public name?: string;

  // The default hostname for this app.
  public defaultHostname?: string;

  // A block of optional settings to configure specific App Engine features:
  public featureSettings?: appengine_ApplicationFeatureSettings;

  // The GCR domain used for storing managed Docker images for this app.
  public gcrDomain?: string;

  // Settings for enabling Cloud Identity Aware Proxy
  public iap?: appengine_ApplicationIap;

  // A list of dispatch rule blocks. Each block has a `domain`, `path`, and `service` field.
  public urlDispatchRules?: Array<appengine_ApplicationUrlDispatchRule>;

  // The domain to authenticate users with when using App Engine's User API.
  public authDomain?: string;

  // The GCS bucket code is being stored in for this app.
  public codeBucket?: string;

  /*
The type of the Cloud Firestore or Cloud Datastore database associated with this application.
Can be `CLOUD_FIRESTORE` or `CLOUD_DATASTORE_COMPATIBILITY` for new
instances.  To support old instances, the value `CLOUD_DATASTORE` is accepted by the provider, but will be rejected by the API.
To create a Cloud Firestore database without creating an App Engine application, use the
`gcp.firestore.Database`
resource instead.
*/
  public databaseType?: string;

  /*
The project ID to create the application under.
~>--NOTE:-- GCP only accepts project ID, not project number. If you are using number,
you may get a "Permission denied" error.
*/
  public project?: string;

  // The GCS bucket content is being stored in for this app.
  public defaultBucket?: string;

  // The serving status of the app.
  public servingStatus?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'project',
        'The project ID to create the application under.\n~>**NOTE:** GCP only accepts project ID, not project number. If you are using number,\nyou may get a "Permission denied" error.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'servingStatus',
        'The serving status of the app.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'authDomain',
        "The domain to authenticate users with when using App Engine's User API.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'databaseType',
        'The type of the Cloud Firestore or Cloud Datastore database associated with this application.\nCan be `CLOUD_FIRESTORE` or `CLOUD_DATASTORE_COMPATIBILITY` for new\ninstances.  To support old instances, the value `CLOUD_DATASTORE` is accepted by the provider, but will be rejected by the API.\nTo create a Cloud Firestore database without creating an App Engine application, use the\n`gcp.firestore.Database`\nresource instead.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'featureSettings',
        'A block of optional settings to configure specific App Engine features:',
        () => appengine_ApplicationFeatureSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'iap',
        'Settings for enabling Cloud Identity Aware Proxy',
        () => appengine_ApplicationIap_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'locationId',
        'The [location](https://cloud.google.com/appengine/docs/locations)\nto serve the app from.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
