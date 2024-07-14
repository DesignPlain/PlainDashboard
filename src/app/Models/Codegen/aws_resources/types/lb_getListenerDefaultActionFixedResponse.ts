import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lb_getListenerDefaultActionFixedResponse {
  //
  messageBody?: string;

  //
  statusCode?: string;

  //
  contentType?: string;
}

export function lb_getListenerDefaultActionFixedResponse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "statusCode", "", [], true, false),
    new DynamicUIProps(InputType.String, "contentType", "", [], true, false),
    new DynamicUIProps(InputType.String, "messageBody", "", [], true, false),
  ];
}
