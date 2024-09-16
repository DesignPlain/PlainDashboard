import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lb_getListenerDefaultActionRedirect {
  //
  host?: string;

  //
  path?: string;

  // Port of the listener. Required if `arn` is not set.
  port?: string;

  //
  protocol?: string;

  //
  query?: string;

  //
  statusCode?: string;
}

export function lb_getListenerDefaultActionRedirect_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'query', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'statusCode',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'host', '', () => [], true, false),
    new DynamicUIProps(InputType.String, 'path', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'port',
      'Port of the listener. Required if `arn` is not set.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'protocol', '', () => [], true, false),
  ];
}
