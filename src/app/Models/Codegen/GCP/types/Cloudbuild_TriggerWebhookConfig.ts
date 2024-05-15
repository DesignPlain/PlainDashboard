import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudbuild_TriggerWebhookConfig {
  // Resource name for the secret required as a URL parameter.
  Secret?: string;

  /*
(Output)
Potential issues with the underlying Pub/Sub subscription configuration.
Only populated on get requests.
*/
  State?: string;
}

export function Cloudbuild_TriggerWebhookConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "State",
      "(Output)\nPotential issues with the underlying Pub/Sub subscription configuration.\nOnly populated on get requests.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Secret",
      "Resource name for the secret required as a URL parameter.",
      [],
      true,
      false,
    ),
  ];
}
