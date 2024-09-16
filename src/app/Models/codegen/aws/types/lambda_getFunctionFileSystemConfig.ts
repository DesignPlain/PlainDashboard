import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lambda_getFunctionFileSystemConfig {
  // Unqualified (no `:QUALIFIER` or `:VERSION` suffix) ARN identifying your Lambda Function. See also `qualified_arn`.
  arn?: string;

  //
  localMountPath?: string;
}

export function lambda_getFunctionFileSystemConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'arn',
      'Unqualified (no `:QUALIFIER` or `:VERSION` suffix) ARN identifying your Lambda Function. See also `qualified_arn`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'localMountPath',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
