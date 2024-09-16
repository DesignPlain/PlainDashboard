import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface alb_getListenerDefaultActionFixedResponse {
  //
  contentType?: string;

  //
  messageBody?: string;

  //
  statusCode?: string;
}

export function alb_getListenerDefaultActionFixedResponse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'contentType',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'messageBody',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'statusCode',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
