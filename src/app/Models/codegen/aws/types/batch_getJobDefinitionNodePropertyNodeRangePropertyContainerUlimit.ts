import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface batch_getJobDefinitionNodePropertyNodeRangePropertyContainerUlimit {
  // The hard limit for the ulimit type.
  hardLimit?: number;

  // The name of the job definition to register. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
  name?: string;

  // The soft limit for the ulimit type.
  softLimit?: number;
}

export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerUlimit_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'hardLimit',
      'The hard limit for the ulimit type.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the job definition to register. It can be up to 128 letters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'softLimit',
      'The soft limit for the ulimit type.',
      () => [],
      true,
      false,
    ),
  ];
}
