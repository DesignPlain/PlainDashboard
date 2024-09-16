import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface secretsmanager_getSecretRotationRotationRule {
  //
  automaticallyAfterDays?: number;

  //
  duration?: string;

  //
  scheduleExpression?: string;
}

export function secretsmanager_getSecretRotationRotationRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'automaticallyAfterDays',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'duration', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'scheduleExpression',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
