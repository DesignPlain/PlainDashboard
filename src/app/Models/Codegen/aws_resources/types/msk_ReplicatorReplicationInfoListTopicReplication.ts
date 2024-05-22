import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface msk_ReplicatorReplicationInfoListTopicReplication {
  // Whether to periodically configure remote topic ACLs to match their corresponding upstream topics.
  copyAccessControlListsForTopics?: boolean;

  // Whether to periodically configure remote topics to match their corresponding upstream topics.
  copyTopicConfigurations?: boolean;

  // Whether to periodically check for new topics and partitions.
  detectAndCopyNewTopics?: boolean;

  // List of regular expression patterns indicating the topics that should not be replica.
  topicsToExcludes?: Array<string>;

  // List of regular expression patterns indicating the topics to copy.
  topicsToReplicates?: Array<string>;
}

export function msk_ReplicatorReplicationInfoListTopicReplication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "copyAccessControlListsForTopics",
      "Whether to periodically configure remote topic ACLs to match their corresponding upstream topics.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "copyTopicConfigurations",
      "Whether to periodically configure remote topics to match their corresponding upstream topics.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "detectAndCopyNewTopics",
      "Whether to periodically check for new topics and partitions.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "topicsToExcludes",
      "List of regular expression patterns indicating the topics that should not be replica.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "topicsToReplicates",
      "List of regular expression patterns indicating the topics to copy.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
