import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface integrationconnectors_ConnectionSslConfigPrivateServerCertificate {
  // Secret version of Secret Value for Config variable.
  secretVersion?: string;
}

export function integrationconnectors_ConnectionSslConfigPrivateServerCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'secretVersion',
      'Secret version of Secret Value for Config variable.',
      () => [],
      true,
      false,
    ),
  ];
}
