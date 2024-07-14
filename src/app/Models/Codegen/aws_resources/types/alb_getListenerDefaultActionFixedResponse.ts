import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

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
    new DynamicUIProps(InputType.String, "contentType", "", [], true, false),
    new DynamicUIProps(InputType.String, "messageBody", "", [], true, false),
    new DynamicUIProps(InputType.String, "statusCode", "", [], true, false),
  ];
}
