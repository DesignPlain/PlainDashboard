import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sesv2_ContactListTopic,
  sesv2_ContactListTopic_GetTypes,
} from "../types/sesv2_ContactListTopic";

export interface ContactListArgs {
  /*
Name of the contact list.

The following arguments are optional:
*/
  contactListName?: string;

  // Description of what the contact list is about.
  description?: string;

  // Key-value map of resource tags for the contact list. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Configuration block(s) with topic for the contact list. Detailed below.
  topics?: Array<sesv2_ContactListTopic>;
}
export class ContactList extends DS_Resource {
  // Configuration block(s) with topic for the contact list. Detailed below.
  public topics?: Array<sesv2_ContactListTopic>;

  //
  public arn?: string;

  /*
Name of the contact list.

The following arguments are optional:
*/
  public contactListName?: string;

  // Timestamp noting when the contact list was created in ISO 8601 format.
  public createdTimestamp?: string;

  // Description of what the contact list is about.
  public description?: string;

  // Timestamp noting the last time the contact list was updated in ISO 8601 format.
  public lastUpdatedTimestamp?: string;

  // Key-value map of resource tags for the contact list. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "contactListName",
        "Name of the contact list.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of what the contact list is about.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags for the contact list. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "topics",
        "Configuration block(s) with topic for the contact list. Detailed below.",
        () => sesv2_ContactListTopic_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
