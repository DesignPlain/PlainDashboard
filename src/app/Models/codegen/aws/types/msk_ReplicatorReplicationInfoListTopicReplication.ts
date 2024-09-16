import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  msk_ReplicatorReplicationInfoListTopicReplicationStartingPosition,
  msk_ReplicatorReplicationInfoListTopicReplicationStartingPosition_GetTypes,
} from './msk_ReplicatorReplicationInfoListTopicReplicationStartingPosition';

export interface msk_ReplicatorReplicationInfoListTopicReplication {
  // Whether to periodically configure remote topic ACLs to match their corresponding upstream topics.
  copyAccessControlListsForTopics?: boolean;

  // Whether to periodically configure remote topics to match their corresponding upstream topics.
  copyTopicConfigurations?: boolean;

  // Whether to periodically check for new topics and partitions.
  detectAndCopyNewTopics?: boolean;

  // Configuration for specifying the position in the topics to start replicating from.
  startingPosition?: msk_ReplicatorReplicationInfoListTopicReplicationStartingPosition;

  // List of regular expression patterns indicating the topics that should not be replica.
  topicsToExcludes?: Array<string>;

  // List of regular expression patterns indicating the topics to copy.
  topicsToReplicates?: Array<string>;
}

export function msk_ReplicatorReplicationInfoListTopicReplication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'copyAccessControlListsForTopics',
      'Whether to periodically configure remote topic ACLs to match their corresponding upstream topics.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'copyTopicConfigurations',
      'Whether to periodically configure remote topics to match their corresponding upstream topics.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'detectAndCopyNewTopics',
      'Whether to periodically check for new topics and partitions.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'startingPosition',
      'Configuration for specifying the position in the topics to start replicating from.',
      () =>
        msk_ReplicatorReplicationInfoListTopicReplicationStartingPosition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'topicsToExcludes',
      'List of regular expression patterns indicating the topics that should not be replica.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'topicsToReplicates',
      'List of regular expression patterns indicating the topics to copy.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
