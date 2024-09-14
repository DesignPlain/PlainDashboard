import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudbuild_TriggerWebhookConfig {
  // Resource name for the secret required as a URL parameter.
  secret?: string;

  /*
(Output)
Potential issues with the underlying Pub/Sub subscription configuration.
Only populated on get requests.
*/
  state?: string;
}

export function cloudbuild_TriggerWebhookConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "secret",
      "Resource name for the secret required as a URL parameter.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "state",
      "(Output)\nPotential issues with the underlying Pub/Sub subscription configuration.\nOnly populated on get requests.",
      () => [],
      false,
      false,
    ),
  ];
}
