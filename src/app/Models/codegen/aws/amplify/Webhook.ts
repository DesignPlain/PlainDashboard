import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface WebhookArgs {
  // Unique ID for an Amplify app.
  appId?: string;

  // Name for a branch that is part of the Amplify app.
  branchName?: string;

  // Description for a webhook.
  description?: string;
}
export class Webhook extends DS_Resource {
  // Unique ID for an Amplify app.
  public appId?: string;

  // ARN for the webhook.
  public arn?: string;

  // Name for a branch that is part of the Amplify app.
  public branchName?: string;

  // Description for a webhook.
  public description?: string;

  // URL of the webhook.
  public url?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "appId",
        "Unique ID for an Amplify app.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "branchName",
        "Name for a branch that is part of the Amplify app.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description for a webhook.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
