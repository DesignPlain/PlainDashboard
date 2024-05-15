import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudasset_OrganizationFeedFeedOutputConfigPubsubDestination,
  Cloudasset_OrganizationFeedFeedOutputConfigPubsubDestination_GetTypes,
} from "./Cloudasset_OrganizationFeedFeedOutputConfigPubsubDestination";

export interface Cloudasset_OrganizationFeedFeedOutputConfig {
  /*
Destination on Cloud Pubsub.
Structure is documented below.
*/
  PubsubDestination?: Cloudasset_OrganizationFeedFeedOutputConfigPubsubDestination;
}

export function Cloudasset_OrganizationFeedFeedOutputConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "PubsubDestination",
      "Destination on Cloud Pubsub.\nStructure is documented below.",
      Cloudasset_OrganizationFeedFeedOutputConfigPubsubDestination_GetTypes(),
      true,
      false,
    ),
  ];
}
