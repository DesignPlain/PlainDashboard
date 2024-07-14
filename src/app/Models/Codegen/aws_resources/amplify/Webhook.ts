import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface WebhookArgs {
  // Description for a webhook.
  description?: string;

  // Unique ID for an Amplify app.
  appId?: string;

  // Name for a branch that is part of the Amplify app.
  branchName?: string;
}
export class Webhook extends Resource {
  // ARN for the webhook.
  public arn?: string;

  // Name for a branch that is part of the Amplify app.
  public branchName?: string;

  // Description for a webhook.
  public description?: string;

  // URL of the webhook.
  public url?: string;

  // Unique ID for an Amplify app.
  public appId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "appId",
        "Unique ID for an Amplify app.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "branchName",
        "Name for a branch that is part of the Amplify app.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description for a webhook.",
        [],
        false,
        false,
      ),
    ];
  }
}
