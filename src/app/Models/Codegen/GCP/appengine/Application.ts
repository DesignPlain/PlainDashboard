import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ApplicationFeatureSettings } from "../types/ApplicationFeatureSettings";
import { ApplicationIap } from "../types/ApplicationIap";
import { ApplicationUrlDispatchRule } from "../types/ApplicationUrlDispatchRule";

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
  FeatureSettings?: ApplicationFeatureSettings;

  // Settings for enabling Cloud Identity Aware Proxy
  Iap?: ApplicationIap;
}
export class Application extends Resource {
  // Settings for enabling Cloud Identity Aware Proxy
  public Iap?: ApplicationIap;

  // The serving status of the app.
  public ServingStatus?: string;

  // The default hostname for this app.
  public DefaultHostname?: string;

  /*
The type of the Cloud Firestore or Cloud Datastore database associated with this application.
Can be `CLOUD_FIRESTORE` or `CLOUD_DATASTORE_COMPATIBILITY` for new
instances.  To support old instances, the value `CLOUD_DATASTORE` is accepted by the provider, but will be rejected by the API.
To create a Cloud Firestore database without creating an App Engine application, use the
`gcp.firestore.Database`
resource instead.
*/
  public DatabaseType?: string;

  // A list of dispatch rule blocks. Each block has a `domain`, `path`, and `service` field.
  public UrlDispatchRules?: Array<ApplicationUrlDispatchRule>;

  // The domain to authenticate users with when using App Engine's User API.
  public AuthDomain?: string;

  // The GCS bucket code is being stored in for this app.
  public CodeBucket?: string;

  // The GCS bucket content is being stored in for this app.
  public DefaultBucket?: string;

  // A block of optional settings to configure specific App Engine features:
  public FeatureSettings?: ApplicationFeatureSettings;

  // The GCR domain used for storing managed Docker images for this app.
  public GcrDomain?: string;

  /*
The [location](https://cloud.google.com/appengine/docs/locations)
to serve the app from.
*/
  public LocationId?: string;

  // Unique name of the app, usually `apps/{PROJECT_ID}`
  public Name?: string;

  /*
The project ID to create the application under.
~>--NOTE:-- GCP only accepts project ID, not project number. If you are using number,
you may get a "Permission denied" error.
*/
  public Project?: string;

  // Identifier of the app, usually `{PROJECT_ID}`
  public AppId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        'The project ID to create the application under.\n~>**NOTE:** GCP only accepts project ID, not project number. If you are using number,\nyou may get a "Permission denied" error.',
      ),
      new DynamicUIProps(
        InputType.String,
        "ServingStatus",
        "The serving status of the app.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AuthDomain",
        "The domain to authenticate users with when using App Engine's User API.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DatabaseType",
        "The type of the Cloud Firestore or Cloud Datastore database associated with this application.\nCan be `CLOUD_FIRESTORE` or `CLOUD_DATASTORE_COMPATIBILITY` for new\ninstances.  To support old instances, the value `CLOUD_DATASTORE` is accepted by the provider, but will be rejected by the API.\nTo create a Cloud Firestore database without creating an App Engine application, use the\n`gcp.firestore.Database`\nresource instead.",
      ),
      new DynamicUIProps(
        InputType.String,
        "FeatureSettings",
        "A block of optional settings to configure specific App Engine features:",
      ),
      new DynamicUIProps(
        InputType.String,
        "Iap",
        "Settings for enabling Cloud Identity Aware Proxy",
      ),
      new DynamicUIProps(
        InputType.String,
        "LocationId",
        "The [location](https://cloud.google.com/appengine/docs/locations)\nto serve the app from.",
      ),
    ];
  }
}
