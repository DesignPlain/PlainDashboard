import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudasset_OrganizationFeedFeedOutputConfigPubsubDestination,
  cloudasset_OrganizationFeedFeedOutputConfigPubsubDestination_GetTypes,
} from "./cloudasset_OrganizationFeedFeedOutputConfigPubsubDestination";

export interface cloudasset_OrganizationFeedFeedOutputConfig {
  /*
Destination on Cloud Pubsub.
Structure is documented below.
*/
  pubsubDestination?: cloudasset_OrganizationFeedFeedOutputConfigPubsubDestination;
}

export function cloudasset_OrganizationFeedFeedOutputConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "pubsubDestination",
      "Destination on Cloud Pubsub.\nStructure is documented below.",
      cloudasset_OrganizationFeedFeedOutputConfigPubsubDestination_GetTypes(),
      true,
      false,
    ),
  ];
}
