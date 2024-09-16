import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface drs_ReplicationConfigurationTemplatePitPolicy {
  // Whether this rule is enabled or not.
  enabled?: boolean;

  // How often, in the chosen units, a snapshot should be taken.
  interval?: number;

  // Duration to retain a snapshot for, in the chosen `units`.
  retentionDuration?: number;

  // ID of the rule. Valid values are integers.
  ruleId?: number;

  // Units used to measure the `interval` and `retention_duration`. Valid values are `MINUTE`, `HOUR`, and `DAY`.
  units?: string;
}

export function drs_ReplicationConfigurationTemplatePitPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'units',
      'Units used to measure the `interval` and `retention_duration`. Valid values are `MINUTE`, `HOUR`, and `DAY`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether this rule is enabled or not.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'interval',
      'How often, in the chosen units, a snapshot should be taken.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'retentionDuration',
      'Duration to retain a snapshot for, in the chosen `units`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'ruleId',
      'ID of the rule. Valid values are integers.',
      () => [],
      false,
      false,
    ),
  ];
}
