import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface dynamodb_getTableServerSideEncryption {
  //
  enabled?: boolean;

  //
  kmsKeyArn?: string;
}

export function dynamodb_getTableServerSideEncryption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, 'enabled', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'kmsKeyArn',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
