import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface alb_getListenerMutualAuthentication {
  //
  ignoreClientCertificateExpiry?: boolean;

  //
  mode?: string;

  //
  trustStoreArn?: string;
}

export function alb_getListenerMutualAuthentication_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'ignoreClientCertificateExpiry',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'mode', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'trustStoreArn',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
