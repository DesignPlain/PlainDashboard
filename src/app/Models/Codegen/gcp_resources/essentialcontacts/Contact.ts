import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ContactArgs {
  // The preferred language for notifications, as a ISO 639-1 language code. See Supported languages for a list of supported languages.
  languageTag?: string;

  // The categories of notifications that the contact will receive communications for.
  notificationCategorySubscriptions?: Array<string>;

  /*
The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}


- - -
*/
  parent?: string;

  // The email address to send notifications to. This does not need to be a Google account.
  email?: string;
}
export class Contact extends Resource {
  // The email address to send notifications to. This does not need to be a Google account.
  public email?: string;

  // The preferred language for notifications, as a ISO 639-1 language code. See Supported languages for a list of supported languages.
  public languageTag?: string;

  // The identifier for the contact. Format: {resourceType}/{resource_id}/contacts/{contact_id}
  public name?: string;

  // The categories of notifications that the contact will receive communications for.
  public notificationCategorySubscriptions?: Array<string>;

  /*
The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}


- - -
*/
  public parent?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "languageTag",
        "The preferred language for notifications, as a ISO 639-1 language code. See Supported languages for a list of supported languages.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "notificationCategorySubscriptions",
        "The categories of notifications that the contact will receive communications for.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "email",
        "The email address to send notifications to. This does not need to be a Google account.",
        [],
        true,
        true,
      ),
    ];
  }
}
