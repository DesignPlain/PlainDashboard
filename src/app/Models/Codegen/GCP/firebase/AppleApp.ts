import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AppleAppArgs {
  /*
The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AppleApp.
If apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the AppleApp.
This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.
*/
  ApiKeyId?: string;

  // The automatically generated Apple ID assigned to the Apple app by Apple in the Apple App Store.
  AppStoreId?: string;

  /*
The canonical bundle ID of the Apple app as it would appear in the Apple AppStore.


- - -
*/
  BundleId?: string;

  /*
(Optional) Set to 'ABANDON' to allow the Apple to be untracked from terraform state rather than deleted upon 'terraform
destroy'. This is useful because the Apple may be serving traffic. Set to 'DELETE' to delete the Apple. Defaults to
'DELETE'.
*/
  DeletionPolicy?: string;

  // The user-assigned display name of the App.
  DisplayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The Apple Developer Team ID associated with the App in the App Store.
  TeamId?: string;
}
export class AppleApp extends Resource {
  /*
The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AppleApp.
If apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the AppleApp.
This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.
*/
  public ApiKeyId?: string;

  /*
The globally unique, Firebase-assigned identifier of the App.
This identifier should be treated as an opaque token, as the data format is not specified.
*/
  public AppId?: string;

  /*
The fully qualified resource name of the App, for example:
projects/projectId/iosApps/appId
*/
  public Name?: string;

  // The Apple Developer Team ID associated with the App in the App Store.
  public TeamId?: string;

  // The automatically generated Apple ID assigned to the Apple app by Apple in the Apple App Store.
  public AppStoreId?: string;

  /*
The canonical bundle ID of the Apple app as it would appear in the Apple AppStore.


- - -
*/
  public BundleId?: string;

  /*
(Optional) Set to 'ABANDON' to allow the Apple to be untracked from terraform state rather than deleted upon 'terraform
destroy'. This is useful because the Apple may be serving traffic. Set to 'DELETE' to delete the Apple. Defaults to
'DELETE'.
*/
  public DeletionPolicy?: string;

  // The user-assigned display name of the App.
  public DisplayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ApiKeyId",
        "The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AppleApp.\nIf apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the AppleApp.\nThis auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AppStoreId",
        "The automatically generated Apple ID assigned to the Apple app by Apple in the Apple App Store.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BundleId",
        "The canonical bundle ID of the Apple app as it would appear in the Apple AppStore.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "DeletionPolicy",
        "(Optional) Set to 'ABANDON' to allow the Apple to be untracked from terraform state rather than deleted upon 'terraform\ndestroy'. This is useful because the Apple may be serving traffic. Set to 'DELETE' to delete the Apple. Defaults to\n'DELETE'.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The user-assigned display name of the App.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TeamId",
        "The Apple Developer Team ID associated with the App in the App Store.",
      ),
    ];
  }
}
