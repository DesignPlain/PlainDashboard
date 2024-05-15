import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudbuild_getTriggerPubsubConfig {
  // Service account that will make the push request.
  ServiceAccountEmail?: string;

  /*
Potential issues with the underlying Pub/Sub subscription configuration.
Only populated on get requests.
*/
  State?: string;

  // Output only. Name of the subscription.
  Subscription?: string;

  // The name of the topic from which this subscription is receiving messages.
  Topic?: string;
}

export function Cloudbuild_getTriggerPubsubConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ServiceAccountEmail",
      "Service account that will make the push request.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "Potential issues with the underlying Pub/Sub subscription configuration.\nOnly populated on get requests.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Subscription",
      "Output only. Name of the subscription.",
      [],
      true,
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
  ];
}
