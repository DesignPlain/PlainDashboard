import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface AppleAppArgs {
  // The user-assigned display name of the App.
  displayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The Apple Developer Team ID associated with the App in the App Store.
  teamId?: string;

  /*
The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AppleApp.
If apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the AppleApp.
This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.
*/
  apiKeyId?: string;

  // The automatically generated Apple ID assigned to the Apple app by Apple in the Apple App Store.
  appStoreId?: string;

  /*
The canonical bundle ID of the Apple app as it would appear in the Apple AppStore.


- - -
*/
  bundleId?: string;

  /*
(Optional) Set to 'ABANDON' to allow the Apple to be untracked from terraform state rather than deleted upon 'terraform
destroy'. This is useful because the Apple may be serving traffic. Set to 'DELETE' to delete the Apple. Defaults to
'DELETE'.
*/
  deletionPolicy?: string;
}
export class AppleApp extends DS_Resource {
  // The user-assigned display name of the App.
  public displayName?: string;

  /*
The fully qualified resource name of the App, for example:
projects/projectId/iosApps/appId
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The Apple Developer Team ID associated with the App in the App Store.
  public teamId?: string;

  /*
The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AppleApp.
If apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the AppleApp.
This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.
*/
  public apiKeyId?: string;

  /*
The globally unique, Firebase-assigned identifier of the App.
This identifier should be treated as an opaque token, as the data format is not specified.
*/
  public appId?: string;

  // The automatically generated Apple ID assigned to the Apple app by Apple in the Apple App Store.
  public appStoreId?: string;

  /*
The canonical bundle ID of the Apple app as it would appear in the Apple AppStore.


- - -
*/
  public bundleId?: string;

  /*
(Optional) Set to 'ABANDON' to allow the Apple to be untracked from terraform state rather than deleted upon 'terraform
destroy'. This is useful because the Apple may be serving traffic. Set to 'DELETE' to delete the Apple. Defaults to
'DELETE'.
*/
  public deletionPolicy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'apiKeyId',
        'The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the AppleApp.\nIf apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the AppleApp.\nThis auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'appStoreId',
        'The automatically generated Apple ID assigned to the Apple app by Apple in the Apple App Store.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'bundleId',
        'The canonical bundle ID of the Apple app as it would appear in the Apple AppStore.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'deletionPolicy',
        "(Optional) Set to 'ABANDON' to allow the Apple to be untracked from terraform state rather than deleted upon 'terraform\ndestroy'. This is useful because the Apple may be serving traffic. Set to 'DELETE' to delete the Apple. Defaults to\n'DELETE'.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'displayName',
        'The user-assigned display name of the App.',
        () => [],
        true,
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
        InputType.String,
        'teamId',
        'The Apple Developer Team ID associated with the App in the App Store.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
