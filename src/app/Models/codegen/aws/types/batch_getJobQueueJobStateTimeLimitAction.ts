import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface batch_getJobQueueJobStateTimeLimitAction {
  //
  action?: string;

  //
  maxTimeSeconds?: number;

  //
  reason?: string;

  // Describes the ability of the queue to accept new jobs (for example, `ENABLED` or `DISABLED`).
  state?: string;
}

export function batch_getJobQueueJobStateTimeLimitAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'reason', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'state',
      'Describes the ability of the queue to accept new jobs (for example, `ENABLED` or `DISABLED`).',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'action', '', () => [], true, false),
    new DynamicUIProps(
      InputType.Number,
      'maxTimeSeconds',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
