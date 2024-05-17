import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudbuild_TriggerPubsubConfig {
  /*
(Output)
Output only. Name of the subscription.
*/
  Subscription?: string;

  // The name of the topic from which this subscription is receiving messages.
  Topic?: string;

  // Service account that will make the push request.
  ServiceAccountEmail?: string;

  /*
(Output)
Potential issues with the underlying Pub/Sub subscription configuration.
Only populated on get requests.
*/
  State?: string;
}

export function Cloudbuild_TriggerPubsubConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Subscription",
      "(Output)\nOutput only. Name of the subscription.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Topic",
      "The name of the topic from which this subscription is receiving messages.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAccountEmail",
      "Service account that will make the push request.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "(Output)\nPotential issues with the underlying Pub/Sub subscription configuration.\nOnly populated on get requests.",
      [],
      false,
      false,
    ),
  ];
}
