import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface WebAppArgs {
  /*
The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the WebApp.
If apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the WebApp.
This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.
*/
  ApiKeyId?: string;

  /*
Set to 'ABANDON' to allow the WebApp to be untracked from terraform state rather than deleted upon 'terraform destroy'.
This is useful becaue the WebApp may be serving traffic. Set to 'DELETE' to delete the WebApp. Default to 'DELETE'
*/
  DeletionPolicy?: string;

  /*
The user-assigned display name of the App.


- - -
*/
  DisplayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class WebApp extends Resource {
  // The URLs where the `WebApp` is hosted.
  public AppUrls?: Array<string>;

  /*
Set to 'ABANDON' to allow the WebApp to be untracked from terraform state rather than deleted upon 'terraform destroy'.
This is useful becaue the WebApp may be serving traffic. Set to 'DELETE' to delete the WebApp. Default to 'DELETE'
*/
  public DeletionPolicy?: string;

  /*
The user-assigned display name of the App.


- - -
*/
  public DisplayName?: string;

  /*
The fully qualified resource name of the App, for example:
projects/projectId/webApps/appId
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the WebApp.
If apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the WebApp.
This auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.
*/
  public ApiKeyId?: string;

  /*
The globally unique, Firebase-assigned identifier of the App.
This identifier should be treated as an opaque token, as the data format is not specified.
*/
  public AppId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DeletionPolicy",
        "Set to 'ABANDON' to allow the WebApp to be untracked from terraform state rather than deleted upon 'terraform destroy'.\nThis is useful becaue the WebApp may be serving traffic. Set to 'DELETE' to delete the WebApp. Default to 'DELETE'",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The user-assigned display name of the App.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ApiKeyId",
        "The globally unique, Google-assigned identifier (UID) for the Firebase API key associated with the WebApp.\nIf apiKeyId is not set during creation, then Firebase automatically associates an apiKeyId with the WebApp.\nThis auto-associated key may be an existing valid key or, if no valid key exists, a new one will be provisioned.",
      ),
    ];
  }
}
