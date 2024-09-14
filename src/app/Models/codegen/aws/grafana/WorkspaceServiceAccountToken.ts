import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface WorkspaceServiceAccountTokenArgs {
  // A name for the token to create. The name must be unique within the workspace.
  name?: string;

  // Sets how long the token will be valid, in seconds. You can set the time up to 30 days in the future.
  secondsToLive?: number;

  // The ID of the service account for which to create a token.
  serviceAccountId?: string;

  // The Grafana workspace with which the service account token is associated.
  workspaceId?: string;
}
export class WorkspaceServiceAccountToken extends DS_Resource {
  // Specifies when the service account token was created.
  public createdAt?: string;

  // Specifies when the service account token will expire.
  public expiresAt?: string;

  // The key for the service account token. Used when making calls to the Grafana HTTP APIs to authenticate and authorize the requests.
  public key?: string;

  // A name for the token to create. The name must be unique within the workspace.
  public name?: string;

  // Sets how long the token will be valid, in seconds. You can set the time up to 30 days in the future.
  public secondsToLive?: number;

  // The ID of the service account for which to create a token.
  public serviceAccountId?: string;

  // Identifier of the service account token in the given Grafana workspace.
  public serviceAccountTokenId?: string;

  // The Grafana workspace with which the service account token is associated.
  public workspaceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "secondsToLive",
        "Sets how long the token will be valid, in seconds. You can set the time up to 30 days in the future.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceAccountId",
        "The ID of the service account for which to create a token.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "workspaceId",
        "The Grafana workspace with which the service account token is associated.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A name for the token to create. The name must be unique within the workspace.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
