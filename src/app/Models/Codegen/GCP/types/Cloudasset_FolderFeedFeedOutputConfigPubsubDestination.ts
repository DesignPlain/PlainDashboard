import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudasset_FolderFeedFeedOutputConfigPubsubDestination {
  /*
Destination on Cloud Pubsub topic.

- - -
*/
  Topic?: string;
}

export function Cloudasset_FolderFeedFeedOutputConfigPubsubDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Topic",
      "Destination on Cloud Pubsub topic.\n\n- - -",
      [],
      true,
      false,
    ),
  ];
}
