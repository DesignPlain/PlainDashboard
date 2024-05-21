import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface WebAppArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the WebApp.
If apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the WebApp.
This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.
*/
  apiKeyId?: string;

  /*
Set to 'ABANDON' to allow the WebApp to be untracked from terraform state rather than deleted upon 'terraform destroy'.
This is useful becaue the WebApp may be serving traffic. Set to 'DELETE' to delete the WebApp. Default to 'DELETE'
*/
  deletionPolicy?: string;

  /*
The user-assigned display name of the App.


- - -
*/
  displayName?: string;
}
export class WebApp extends Resource {
  /*
The user-assigned display name of the App.


- - -
*/
  public displayName?: string;

  /*
The fully qualified resource name of the App, for example:
projects/projectId/webApps/appId
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the WebApp.
If apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the WebApp.
This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.
*/
  public apiKeyId?: string;

  /*
The globally unique, Firebase-assigned identifier of the App.
This identifier should be treated as an opaque token, as the data format is not specified.
*/
  public appId?: string;

  // The URLs where the `WebApp` is hosted.
  public appUrls?: Array<string>;

  /*
Set to 'ABANDON' to allow the WebApp to be untracked from terraform state rather than deleted upon 'terraform destroy'.
This is useful becaue the WebApp may be serving traffic. Set to 'DELETE' to delete the WebApp. Default to 'DELETE'
*/
  public deletionPolicy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "apiKeyId",
        "The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the WebApp.\nIf apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the WebApp.\nThis auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "deletionPolicy",
        "Set to 'ABANDON' to allow the WebApp to be untracked from terraform state rather than deleted upon 'terraform destroy'.\nThis is useful becaue the WebApp may be serving traffic. Set to 'DELETE' to delete the WebApp. Default to 'DELETE'",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The user-assigned display name of the App.\n\n\n- - -",
        [],
        true,
        false,
      ),
    ];
  }
}
