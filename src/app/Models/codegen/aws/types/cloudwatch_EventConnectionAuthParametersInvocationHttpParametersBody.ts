import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudwatch_EventConnectionAuthParametersInvocationHttpParametersBody {
  // The key for the parameter.
  key?: string;

  // The value associated with the key. Created and stored in AWS Secrets Manager if is secret.
  value?: string;

  // Specified whether the value is secret.
  isValueSecret?: boolean;
}

export function cloudwatch_EventConnectionAuthParametersInvocationHttpParametersBody_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'key',
      'The key for the parameter.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'The value associated with the key. Created and stored in AWS Secrets Manager if is secret.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'isValueSecret',
      'Specified whether the value is secret.',
      () => [],
      false,
      false,
    ),
  ];
}
