import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ContactArgs {
  // The categories of notifications that the contact will receive communications for.
  NotificationCategorySubscriptions?: Array<string>;

  /*
The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}


- - -
*/
  Parent?: string;

  // The email address to send notifications to. This does not need to be a Google account.
  Email?: string;

  // The preferred language for notifications, as a ISO 639-1 language code. See Supported languages for a list of supported languages.
  LanguageTag?: string;
}
export class Contact extends Resource {
  // The email address to send notifications to. This does not need to be a Google account.
  public Email?: string;

  // The preferred language for notifications, as a ISO 639-1 language code. See Supported languages for a list of supported languages.
  public LanguageTag?: string;

  // The identifier for the contact. Format: {resourceType}/{resource_id}/contacts/{contact_id}
  public Name?: string;

  // The categories of notifications that the contact will receive communications for.
  public NotificationCategorySubscriptions?: Array<string>;

  /*
The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}


- - -
*/
  public Parent?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Email",
        "The email address to send notifications to. This does not need to be a Google account.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "LanguageTag",
        "The preferred language for notifications, as a ISO 639-1 language code. See Supported languages for a list of supported languages.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "NotificationCategorySubscriptions",
        "The categories of notifications that the contact will receive communications for.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
