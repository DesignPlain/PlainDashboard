import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Eventarc_TriggerTransportPubsub,
  Eventarc_TriggerTransportPubsub_GetTypes,
} from "./Eventarc_TriggerTransportPubsub";

export interface Eventarc_TriggerTransport {
  // The Pub/Sub topic and subscription used by Eventarc as delivery intermediary.
  Pubsub?: Eventarc_TriggerTransportPubsub;
}

export function Eventarc_TriggerTransport_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Pubsub",
      "The Pub/Sub topic and subscription used by Eventarc as delivery intermediary.",
      Eventarc_TriggerTransportPubsub_GetTypes(),
      false,
      true,
    ),
  ];
}
