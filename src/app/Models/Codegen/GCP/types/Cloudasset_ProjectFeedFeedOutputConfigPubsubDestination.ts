import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudasset_ProjectFeedFeedOutputConfigPubsubDestination {
  /*
Destination on Cloud Pubsub topic.

- - -
*/
  topic?: string;
}

export function cloudasset_ProjectFeedFeedOutputConfigPubsubDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "topic",
      "Destination on Cloud Pubsub topic.\n\n- - -",
      [],
      true,
      false,
    ),
  ];
}
