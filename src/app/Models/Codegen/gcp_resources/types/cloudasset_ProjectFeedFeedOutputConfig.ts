import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudasset_ProjectFeedFeedOutputConfigPubsubDestination,
  cloudasset_ProjectFeedFeedOutputConfigPubsubDestination_GetTypes,
} from "./cloudasset_ProjectFeedFeedOutputConfigPubsubDestination";

export interface cloudasset_ProjectFeedFeedOutputConfig {
  /*
Destination on Cloud Pubsub.
Structure is documented below.
*/
  pubsubDestination?: cloudasset_ProjectFeedFeedOutputConfigPubsubDestination;
}

export function cloudasset_ProjectFeedFeedOutputConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "pubsubDestination",
      "Destination on Cloud Pubsub.\nStructure is documented below.",
      cloudasset_ProjectFeedFeedOutputConfigPubsubDestination_GetTypes(),
      true,
      false,
    ),
  ];
}
