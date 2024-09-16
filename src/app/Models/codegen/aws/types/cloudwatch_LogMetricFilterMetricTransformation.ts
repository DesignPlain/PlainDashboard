import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudwatch_LogMetricFilterMetricTransformation {
  // The value to emit when a filter pattern does not match a log event. Conflicts with `dimensions`.
  defaultValue?: string;

  // Map of fields to use as dimensions for the metric. Up to 3 dimensions are allowed. Conflicts with `default_value`.
  dimensions?: Map<string, string>;

  // The name of the CloudWatch metric to which the monitored log information should be published (e.g., `ErrorCount`)
  name?: string;

  // The destination namespace of the CloudWatch metric.
  namespace?: string;

  // The unit to assign to the metric. If you omit this, the unit is set as `None`.
  unit?: string;

  // What to publish to the metric. For example, if you're counting the occurrences of a particular term like "Error", the value will be "1" for each occurrence. If you're counting the bytes transferred the published value will be the value in the log event.
  value?: string;
}

export function cloudwatch_LogMetricFilterMetricTransformation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'value',
      'What to publish to the metric. For example, if you\'re counting the occurrences of a particular term like "Error", the value will be "1" for each occurrence. If you\'re counting the bytes transferred the published value will be the value in the log event.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'defaultValue',
      'The value to emit when a filter pattern does not match a log event. Conflicts with `dimensions`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'dimensions',
      'Map of fields to use as dimensions for the metric. Up to 3 dimensions are allowed. Conflicts with `default_value`.',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the CloudWatch metric to which the monitored log information should be published (e.g., `ErrorCount`)',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'namespace',
      'The destination namespace of the CloudWatch metric.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'unit',
      'The unit to assign to the metric. If you omit this, the unit is set as `None`.',
      () => [],
      false,
      false,
    ),
  ];
}
