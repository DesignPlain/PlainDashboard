import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudwatch_EventConnectionAuthParametersBasic {
  // A password for the authorization. Created and stored in AWS Secrets Manager.
  password?: string;

  // A username for the authorization.
  username?: string;
}

export function cloudwatch_EventConnectionAuthParametersBasic_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'password',
      'A password for the authorization. Created and stored in AWS Secrets Manager.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'username',
      'A username for the authorization.',
      () => [],
      true,
      false,
    ),
  ];
}
