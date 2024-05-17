import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Appengine_ApplicationFeatureSettings,
  Appengine_ApplicationFeatureSettings_GetTypes,
} from "../types/Appengine_ApplicationFeatureSettings";
import {
  Appengine_ApplicationIap,
  Appengine_ApplicationIap_GetTypes,
} from "../types/Appengine_ApplicationIap";
import {
  Appengine_ApplicationUrlDispatchRule,
  Appengine_ApplicationUrlDispatchRule_GetTypes,
} from "../types/Appengine_ApplicationUrlDispatchRule";

export interface ApplicationArgs {
  /*
The [location](https://cloud.google.com/appengine/docs/locations)
to serve the app from.
*/
  LocationId?: string;

  /*
The project ID to create the application under.
~>--NOTE:-- GCP only accepts project ID, not project number. If you are using number,
you may get a "Permission denied" error.
*/
  Project?: string;

  // The serving status of the app.
  ServingStatus?: string;

  // The domain to authenticate users with when using App Engine's User API.
  AuthDomain?: string;

  /*
The type of the Cloud Firestore or Cloud Datastore database associated with this application.
Can be `CLOUD_FIRESTORE` or `CLOUD_DATASTORE_COMPATIBILITY` for new
instances.  To support old instances, the value `CLOUD_DATASTORE` is accepted by the provider, but will be rejected by the API.
To create a Cloud Firestore database without creating an App Engine application, use the
`gcp.firestore.Database`
resource instead.
*/
  DatabaseType?: string;

  // A block of optional settings to configure specific App Engine features:
  FeatureSettings?: Appengine_ApplicationFeatureSettings;

  // Settings for enabling Cloud Identity Aware Proxy
  Iap?: Appengine_ApplicationIap;
}
export class Application extends Resource {
  // Identifier of the app, usually `{PROJECT_ID}`
  public AppId?: string;

  // The default hostname for this app.
  public DefaultHostname?: string;

  // Settings for enabling Cloud Identity Aware Proxy
  public Iap?: Appengine_ApplicationIap;

  /*
The [location](https://cloud.google.com/appengine/docs/locations)
to serve the app from.
*/
  public LocationId?: string;

  // The GCS bucket code is being stored in for this app.
  public CodeBucket?: string;

  // The GCR domain used for storing managed Docker images for this app.
  public GcrDomain?: string;

  /*
The project ID to create the application under.
~>--NOTE:-- GCP only accepts project ID, not project number. If you are using number,
you may get a "Permission denied" error.
*/
  public Project?: string;

  // Unique name of the app, usually `apps/{PROJECT_ID}`
  public Name?: string;

  // The serving status of the app.
  public ServingStatus?: string;

  // A list of dispatch rule blocks. Each block has a `domain`, `path`, and `service` field.
  public UrlDispatchRules?: Array<Appengine_ApplicationUrlDispatchRule>;

  // The domain to authenticate users with when using App Engine's User API.
  public AuthDomain?: string;

  /*
The type of the Cloud Firestore or Cloud Datastore database associated with this application.
Can be `CLOUD_FIRESTORE` or `CLOUD_DATASTORE_COMPATIBILITY` for new
instances.  To support old instances, the value `CLOUD_DATASTORE` is accepted by the provider, but will be rejected by the API.
To create a Cloud Firestore database without creating an App Engine application, use the
`gcp.firestore.Database`
resource instead.
*/
  public DatabaseType?: string;

  // The GCS bucket content is being stored in for this app.
  public DefaultBucket?: string;

  // A block of optional settings to configure specific App Engine features:
  public FeatureSettings?: Appengine_ApplicationFeatureSettings;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "Iap",
        "Settings for enabling Cloud Identity Aware Proxy",
        Appengine_ApplicationIap_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "LocationId",
        "The [location](https://cloud.google.com/appengine/docs/locations)\nto serve the app from.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        'The project ID to create the application under.\n~>**NOTE:** GCP only accepts project ID, not project number. If you are using number,\nyou may get a "Permission denied" error.',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ServingStatus",
        "The serving status of the app.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "AuthDomain",
        "The domain to authenticate users with when using App Engine's User API.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DatabaseType",
        "The type of the Cloud Firestore or Cloud Datastore database associated with this application.\nCan be `CLOUD_FIRESTORE` or `CLOUD_DATASTORE_COMPATIBILITY` for new\ninstances.  To support old instances, the value `CLOUD_DATASTORE` is accepted by the provider, but will be rejected by the API.\nTo create a Cloud Firestore database without creating an App Engine application, use the\n`gcp.firestore.Database`\nresource instead.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "FeatureSettings",
        "A block of optional settings to configure specific App Engine features:",
        Appengine_ApplicationFeatureSettings_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
