import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface msk_ReplicatorReplicationInfoListConsumerGroupReplication {
  // Whether to periodically check for new consumer groups.
  detectAndCopyNewConsumerGroups?: boolean;

  // Whether to periodically write the translated offsets to __consumer_offsets topic in target cluster.
  synchroniseConsumerGroupOffsets?: boolean;

  // List of regular expression patterns indicating the consumer groups that should not be replicated.
  consumerGroupsToExcludes?: Array<string>;

  // List of regular expression patterns indicating the consumer groups to copy.
  consumerGroupsToReplicates?: Array<string>;
}

export function msk_ReplicatorReplicationInfoListConsumerGroupReplication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'consumerGroupsToReplicates',
      'List of regular expression patterns indicating the consumer groups to copy.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'detectAndCopyNewConsumerGroups',
      'Whether to periodically check for new consumer groups.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'synchroniseConsumerGroupOffsets',
      'Whether to periodically write the translated offsets to __consumer_offsets topic in target cluster.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'consumerGroupsToExcludes',
      'List of regular expression patterns indicating the consumer groups that should not be replicated.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
