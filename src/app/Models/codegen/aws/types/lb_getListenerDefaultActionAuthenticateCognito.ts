import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lb_getListenerDefaultActionAuthenticateCognito {
  //
  userPoolArn?: string;

  //
  userPoolClientId?: string;

  //
  userPoolDomain?: string;

  //
  authenticationRequestExtraParams?: Map<string, string>;

  //
  onUnauthenticatedRequest?: string;

  //
  scope?: string;

  //
  sessionCookieName?: string;

  //
  sessionTimeout?: number;
}

export function lb_getListenerDefaultActionAuthenticateCognito_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'userPoolDomain',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'authenticationRequestExtraParams',
      '',
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'onUnauthenticatedRequest',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'scope', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'sessionCookieName',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'sessionTimeout',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'userPoolArn',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'userPoolClientId',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
