import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudasset_FolderFeedFeedOutputConfigPubsubDestination,
  Cloudasset_FolderFeedFeedOutputConfigPubsubDestination_GetTypes,
} from "./Cloudasset_FolderFeedFeedOutputConfigPubsubDestination";

export interface Cloudasset_FolderFeedFeedOutputConfig {
  /*
Destination on Cloud Pubsub.
Structure is documented below.
*/
  PubsubDestination?: Cloudasset_FolderFeedFeedOutputConfigPubsubDestination;
}

export function Cloudasset_FolderFeedFeedOutputConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "PubsubDestination",
      "Destination on Cloud Pubsub.\nStructure is documented below.",
      Cloudasset_FolderFeedFeedOutputConfigPubsubDestination_GetTypes(),
      true,
      false,
    ),
  ];
}
