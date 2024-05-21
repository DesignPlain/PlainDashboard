import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AppCheckServiceConfigArgs {
  /*
The App Check enforcement mode for a service supported by App Check. Valid values are (Unset) Firebase App Check is not
enforced for the service, nor are App Check metrics collected. Though the service is not protected by App Check in this
mode, other applicable protections, such as user authorization, are still enforced. An unconfigured service is in this
mode by default. This is equivalent to OFF in the REST API. Deleting the Terraform resource will also switch the
enforcement to OFF for this service. UNENFORCED Firebase App Check is not enforced for the service. App Check metrics
are collected to help you decide when to turn on enforcement for the service. Though the service is not protected by App
Check in this mode, other applicable protections, such as user authorization, are still enforced. ENFORCED Firebase App
Check is enforced for the service. The service will reject any request that attempts to access your project's resources
if it does not have valid App Check token attached, with some exceptions depending on the service; for example, some
services will still allow requests bearing the developer's privileged service account credentials without an App Check
token. App Check metrics continue to be collected to help you detect issues with your App Check integration and monitor
the composition of your callers. While the service is protected by App Check, other applicable protections, such as user
authorization, continue to be enforced at the same time. Use caution when choosing to enforce App Check on a Firebase
service. If your users have not updated to an App Check capable version of your app, their apps will no longer be able
to use your Firebase services that are enforcing App Check. App Check metrics can help you decide whether to enforce App
Check on your Firebase services. If your app has not launched yet, you should enable enforcement immediately, since
there are no outdated clients in use. Possible values: ["UNENFORCED", "ENFORCED"]
*/
  enforcementMode?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The identifier of the service to configure enforcement. Currently, the following service IDs are supported:
firebasestorage.googleapis.com (Cloud Storage for Firebase)
firebasedatabase.googleapis.com (Firebase Realtime Database)
firestore.googleapis.com (Cloud Firestore)
identitytoolkit.googleapis.com (Authentication)


- - -
*/
  serviceId?: string;
}
export class AppCheckServiceConfig extends Resource {
  /*
The App Check enforcement mode for a service supported by App Check. Valid values are (Unset) Firebase App Check is not
enforced for the service, nor are App Check metrics collected. Though the service is not protected by App Check in this
mode, other applicable protections, such as user authorization, are still enforced. An unconfigured service is in this
mode by default. This is equivalent to OFF in the REST API. Deleting the Terraform resource will also switch the
enforcement to OFF for this service. UNENFORCED Firebase App Check is not enforced for the service. App Check metrics
are collected to help you decide when to turn on enforcement for the service. Though the service is not protected by App
Check in this mode, other applicable protections, such as user authorization, are still enforced. ENFORCED Firebase App
Check is enforced for the service. The service will reject any request that attempts to access your project's resources
if it does not have valid App Check token attached, with some exceptions depending on the service; for example, some
services will still allow requests bearing the developer's privileged service account credentials without an App Check
token. App Check metrics continue to be collected to help you detect issues with your App Check integration and monitor
the composition of your callers. While the service is protected by App Check, other applicable protections, such as user
authorization, continue to be enforced at the same time. Use caution when choosing to enforce App Check on a Firebase
service. If your users have not updated to an App Check capable version of your app, their apps will no longer be able
to use your Firebase services that are enforcing App Check. App Check metrics can help you decide whether to enforce App
Check on your Firebase services. If your app has not launched yet, you should enable enforcement immediately, since
there are no outdated clients in use. Possible values: ["UNENFORCED", "ENFORCED"]
*/
  public enforcementMode?: string;

  // The fully-qualified resource name of the service enforcement configuration.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The identifier of the service to configure enforcement. Currently, the following service IDs are supported:
firebasestorage.googleapis.com (Cloud Storage for Firebase)
firebasedatabase.googleapis.com (Firebase Realtime Database)
firestore.googleapis.com (Cloud Firestore)
identitytoolkit.googleapis.com (Authentication)


- - -
*/
  public serviceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "serviceId",
        "The identifier of the service to configure enforcement. Currently, the following service IDs are supported:\nfirebasestorage.googleapis.com (Cloud Storage for Firebase)\nfirebasedatabase.googleapis.com (Firebase Realtime Database)\nfirestore.googleapis.com (Cloud Firestore)\nidentitytoolkit.googleapis.com (Authentication)\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "enforcementMode",
        'The App Check enforcement mode for a service supported by App Check. Valid values are (Unset) Firebase App Check is not\nenforced for the service, nor are App Check metrics collected. Though the service is not protected by App Check in this\nmode, other applicable protections, such as user authorization, are still enforced. An unconfigured service is in this\nmode by default. This is equivalent to OFF in the REST API. Deleting the Terraform resource will also switch the\nenforcement to OFF for this service. UNENFORCED Firebase App Check is not enforced for the service. App Check metrics\nare collected to help you decide when to turn on enforcement for the service. Though the service is not protected by App\nCheck in this mode, other applicable protections, such as user authorization, are still enforced. ENFORCED Firebase App\nCheck is enforced for the service. The service will reject any request that attempts to access your project\'s resources\nif it does not have valid App Check token attached, with some exceptions depending on the service; for example, some\nservices will still allow requests bearing the developer\'s privileged service account credentials without an App Check\ntoken. App Check metrics continue to be collected to help you detect issues with your App Check integration and monitor\nthe composition of your callers. While the service is protected by App Check, other applicable protections, such as user\nauthorization, continue to be enforced at the same time. Use caution when choosing to enforce App Check on a Firebase\nservice. If your users have not updated to an App Check capable version of your app, their apps will no longer be able\nto use your Firebase services that are enforcing App Check. App Check metrics can help you decide whether to enforce App\nCheck on your Firebase services. If your app has not launched yet, you should enable enforcement immediately, since\nthere are no outdated clients in use. Possible values: ["UNENFORCED", "ENFORCED"]',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
