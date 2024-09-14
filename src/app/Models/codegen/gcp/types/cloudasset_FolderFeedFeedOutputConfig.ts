import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudasset_FolderFeedFeedOutputConfigPubsubDestination,
  cloudasset_FolderFeedFeedOutputConfigPubsubDestination_GetTypes,
} from "./cloudasset_FolderFeedFeedOutputConfigPubsubDestination";

export interface cloudasset_FolderFeedFeedOutputConfig {
  /*
Destination on Cloud Pubsub.
Structure is documented below.
*/
  pubsubDestination?: cloudasset_FolderFeedFeedOutputConfigPubsubDestination;
}

export function cloudasset_FolderFeedFeedOutputConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "pubsubDestination",
      "Destination on Cloud Pubsub.\nStructure is documented below.",
      () => cloudasset_FolderFeedFeedOutputConfigPubsubDestination_GetTypes(),
      true,
      false,
    ),
  ];
}
