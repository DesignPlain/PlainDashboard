import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudbuild_getTriggerWebhookConfig {
  // Resource name for the secret required as a URL parameter.
  secret?: string;

  /*
Potential issues with the underlying Pub/Sub subscription configuration.
Only populated on get requests.
*/
  state?: string;
}

export function cloudbuild_getTriggerWebhookConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "state",
      "Potential issues with the underlying Pub/Sub subscription configuration.\nOnly populated on get requests.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "secret",
      "Resource name for the secret required as a URL parameter.",
      [],
      true,
      false,
    ),
  ];
}
