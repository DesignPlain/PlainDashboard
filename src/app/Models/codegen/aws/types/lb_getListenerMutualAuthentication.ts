import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lb_getListenerMutualAuthentication {
  //
  mode?: string;

  //
  trustStoreArn?: string;

  //
  ignoreClientCertificateExpiry?: boolean;
}

export function lb_getListenerMutualAuthentication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'trustStoreArn',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'ignoreClientCertificateExpiry',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'mode', '', () => [], true, false),
  ];
}
