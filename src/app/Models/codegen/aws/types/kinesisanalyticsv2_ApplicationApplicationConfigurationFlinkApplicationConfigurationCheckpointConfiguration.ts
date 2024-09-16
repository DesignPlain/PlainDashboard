import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration {
  // Describes the interval in milliseconds between checkpoint operations.
  checkpointInterval?: number;

  // Describes whether checkpointing is enabled for a Flink-based Kinesis Data Analytics application.
  checkpointingEnabled?: boolean;

  /*
Describes whether the application uses Kinesis Data Analytics' default checkpointing behavior. Valid values: `CUSTOM`, `DEFAULT`. Set this attribute to `CUSTOM` in order for any specified `checkpointing_enabled`, `checkpoint_interval`, or `min_pause_between_checkpoints` attribute values to be effective. If this attribute is set to `DEFAULT`, the application will always use the following values:
- `checkpointing_enabled = true`
- `checkpoint_interval = 60000`
- `min_pause_between_checkpoints = 5000`
*/
  configurationType?: string;

  // Describes the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation can start.
  minPauseBetweenCheckpoints?: number;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'checkpointInterval',
      'Describes the interval in milliseconds between checkpoint operations.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'checkpointingEnabled',
      'Describes whether checkpointing is enabled for a Flink-based Kinesis Data Analytics application.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'configurationType',
      "Describes whether the application uses Kinesis Data Analytics' default checkpointing behavior. Valid values: `CUSTOM`, `DEFAULT`. Set this attribute to `CUSTOM` in order for any specified `checkpointing_enabled`, `checkpoint_interval`, or `min_pause_between_checkpoints` attribute values to be effective. If this attribute is set to `DEFAULT`, the application will always use the following values:\n* `checkpointing_enabled = true`\n* `checkpoint_interval = 60000`\n* `min_pause_between_checkpoints = 5000`",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'minPauseBetweenCheckpoints',
      'Describes the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation can start.',
      () => [],
      false,
      false,
    ),
  ];
}
