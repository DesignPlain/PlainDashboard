import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface AndroidAppArgs {
  /*
The user-assigned display name of the AndroidApp.


- - -
*/
  displayName?: string;

  /*
Immutable. The canonical package name of the Android app as would appear in the Google Play
Developer Console.
*/
  packageName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The SHA1 certificate hashes for the AndroidApp.
  sha1Hashes?: Array<string>;

  // The SHA256 certificate hashes for the AndroidApp.
  sha256Hashes?: Array<string>;

  /*
The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AndroidApp.
If apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the AndroidApp.
This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.
*/
  apiKeyId?: string;

  /*
(Optional) Set to 'ABANDON' to allow the AndroidApp to be untracked from terraform state rather than deleted upon
'terraform destroy'. This is useful because the AndroidApp may be serving traffic. Set to 'DELETE' to delete the
AndroidApp. Defaults to 'DELETE'.
*/
  deletionPolicy?: string;
}
export class AndroidApp extends DS_Resource {
  // The SHA1 certificate hashes for the AndroidApp.
  public sha1Hashes?: Array<string>;

  /*
The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AndroidApp.
If apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the AndroidApp.
This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.
*/
  public apiKeyId?: string;

  /*
(Optional) Set to 'ABANDON' to allow the AndroidApp to be untracked from terraform state rather than deleted upon
'terraform destroy'. This is useful because the AndroidApp may be serving traffic. Set to 'DELETE' to delete the
AndroidApp. Defaults to 'DELETE'.
*/
  public deletionPolicy?: string;

  /*
This checksum is computed by the server based on the value of other fields, and it may be sent
with update requests to ensure the client has an up-to-date value before proceeding.
*/
  public etag?: string;

  /*
The fully qualified resource name of the AndroidApp, for example:
projects/projectId/androidApps/appId
*/
  public name?: string;

  /*
Immutable. The canonical package name of the Android app as would appear in the Google Play
Developer Console.
*/
  public packageName?: string;

  /*
The globally unique, Firebase-assigned identifier of the AndroidApp.
This identifier should be treated as an opaque token, as the data format is not specified.
*/
  public appId?: string;

  /*
The user-assigned display name of the AndroidApp.


- - -
*/
  public displayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The SHA256 certificate hashes for the AndroidApp.
  public sha256Hashes?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'deletionPolicy',
        "(Optional) Set to 'ABANDON' to allow the AndroidApp to be untracked from terraform state rather than deleted upon\n'terraform destroy'. This is useful because the AndroidApp may be serving traffic. Set to 'DELETE' to delete the\nAndroidApp. Defaults to 'DELETE'.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'displayName',
        'The user-assigned display name of the AndroidApp.\n\n\n- - -',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'packageName',
        'Immutable. The canonical package name of the Android app as would appear in the Google Play\nDeveloper Console.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'sha1Hashes',
        'The SHA1 certificate hashes for the AndroidApp.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'sha256Hashes',
        'The SHA256 certificate hashes for the AndroidApp.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'apiKeyId',
        'The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AndroidApp.\nIf apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the AndroidApp.\nThis auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
