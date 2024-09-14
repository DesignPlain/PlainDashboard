import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sesv2_ContactListTopic {
  // Description of what the topic is about, which the contact will see.
  description?: string;

  // Name of the topic the contact will see.
  displayName?: string;

  /*
Name of the topic.

The following arguments are optional:
*/
  topicName?: string;

  // Default subscription status to be applied to a contact if the contact has not noted their preference for subscribing to a topic.
  defaultSubscriptionStatus?: string;
}

export function sesv2_ContactListTopic_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description of what the topic is about, which the contact will see.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "displayName",
      "Name of the topic the contact will see.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "topicName",
      "Name of the topic.\n\nThe following arguments are optional:",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "defaultSubscriptionStatus",
      "Default subscription status to be applied to a contact if the contact has not noted their preference for subscribing to a topic.",
      () => [],
      true,
      false,
    ),
  ];
}
