import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ContactArgs {
  // The email address to send notifications to. This does not need to be a Google account.
  email?: string;

  // The preferred language for notifications, as a ISO 639-1 language code. See Supported languages for a list of supported languages.
  languageTag?: string;

  // The categories of notifications that the contact will receive communications for.
  notificationCategorySubscriptions?: Array<string>;

  /*
The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}


- - -
*/
  parent?: string;
}
export class Contact extends DS_Resource {
  // The categories of notifications that the contact will receive communications for.
  public notificationCategorySubscriptions?: Array<string>;

  /*
The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}


- - -
*/
  public parent?: string;

  // The email address to send notifications to. This does not need to be a Google account.
  public email?: string;

  // The preferred language for notifications, as a ISO 639-1 language code. See Supported languages for a list of supported languages.
  public languageTag?: string;

  // The identifier for the contact. Format: {resourceType}/{resource_id}/contacts/{contact_id}
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "email",
        "The email address to send notifications to. This does not need to be a Google account.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "languageTag",
        "The preferred language for notifications, as a ISO 639-1 language code. See Supported languages for a list of supported languages.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "notificationCategorySubscriptions",
        "The categories of notifications that the contact will receive communications for.",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}\n\n\n- - -",
        () => [],
        true,
        true,
      ),
    ];
  }
}
