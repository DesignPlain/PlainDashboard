import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudrunv2_JobBinaryAuthorization {
  // If present, indicates to use Breakglass using this justification. If useDefault is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass
  breakglassJustification?: string;

  // If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled.
  useDefault?: boolean;
}

export function cloudrunv2_JobBinaryAuthorization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'breakglassJustification',
      'If present, indicates to use Breakglass using this justification. If useDefault is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'useDefault',
      "If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled.",
      () => [],
      false,
      false,
    ),
  ];
}
