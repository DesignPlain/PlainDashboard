import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AndroidAppArgs {
  // The SHA256 certificate hashes for the AndroidApp.
  Sha256Hashes?: Array<string>;

  /*
The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AndroidApp.
If apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the AndroidApp.
This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.
*/
  ApiKeyId?: string;

  /*
(Optional) Set to 'ABANDON' to allow the AndroidApp to be untracked from terraform state rather than deleted upon
'terraform destroy'. This is useful because the AndroidApp may be serving traffic. Set to 'DELETE' to delete the
AndroidApp. Defaults to 'DELETE'.
*/
  DeletionPolicy?: string;

  /*
The user-assigned display name of the AndroidApp.


- - -
*/
  DisplayName?: string;

  /*
Immutable. The canonical package name of the Android app as would appear in the Google Play
Developer Console.
*/
  PackageName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The SHA1 certificate hashes for the AndroidApp.
  Sha1Hashes?: Array<string>;
}
export class AndroidApp extends Resource {
  // The SHA1 certificate hashes for the AndroidApp.
  public Sha1Hashes?: Array<string>;

  // The SHA256 certificate hashes for the AndroidApp.
  public Sha256Hashes?: Array<string>;

  /*
The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AndroidApp.
If apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the AndroidApp.
This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.
*/
  public ApiKeyId?: string;

  /*
(Optional) Set to 'ABANDON' to allow the AndroidApp to be untracked from terraform state rather than deleted upon
'terraform destroy'. This is useful because the AndroidApp may be serving traffic. Set to 'DELETE' to delete the
AndroidApp. Defaults to 'DELETE'.
*/
  public DeletionPolicy?: string;

  /*
The user-assigned display name of the AndroidApp.


- - -
*/
  public DisplayName?: string;

  /*
The fully qualified resource name of the AndroidApp, for example:
projects/projectId/androidApps/appId
*/
  public Name?: string;

  /*
Immutable. The canonical package name of the Android app as would appear in the Google Play
Developer Console.
*/
  public PackageName?: string;

  /*
The globally unique, Firebase-assigned identifier of the AndroidApp.
This identifier should be treated as an opaque token, as the data format is not specified.
*/
  public AppId?: string;

  /*
This checksum is computed by the server based on the value of other fields, and it may be sent
with update requests to ensure the client has an up-to-date value before proceeding.
*/
  public Etag?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DeletionPolicy",
        "(Optional) Set to 'ABANDON' to allow the AndroidApp to be untracked from terraform state rather than deleted upon\n'terraform destroy'. This is useful because the AndroidApp may be serving traffic. Set to 'DELETE' to delete the\nAndroidApp. Defaults to 'DELETE'.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The user-assigned display name of the AndroidApp.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "PackageName",
        "Immutable. The canonical package name of the Android app as would appear in the Google Play\nDeveloper Console.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Sha1Hashes",
        "The SHA1 certificate hashes for the AndroidApp.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Sha256Hashes",
        "The SHA256 certificate hashes for the AndroidApp.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ApiKeyId",
        "The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AndroidApp.\nIf apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the AndroidApp.\nThis auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.",
        [],
        false,
        false,
      ),
    ];
  }
}
