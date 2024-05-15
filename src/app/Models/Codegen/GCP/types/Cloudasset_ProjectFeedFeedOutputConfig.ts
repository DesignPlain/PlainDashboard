import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudasset_ProjectFeedFeedOutputConfigPubsubDestination,
  Cloudasset_ProjectFeedFeedOutputConfigPubsubDestination_GetTypes,
} from "./Cloudasset_ProjectFeedFeedOutputConfigPubsubDestination";

export interface Cloudasset_ProjectFeedFeedOutputConfig {
  /*
Destination on Cloud Pubsub.
Structure is documented below.
*/
  PubsubDestination?: Cloudasset_ProjectFeedFeedOutputConfigPubsubDestination;
}

export function Cloudasset_ProjectFeedFeedOutputConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "PubsubDestination",
      "Destination on Cloud Pubsub.\nStructure is documented below.",
      Cloudasset_ProjectFeedFeedOutputConfigPubsubDestination_GetTypes(),
      true,
      false,
    ),
  ];
}
