import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_getVirtualGatewaySpecLoggingAccessLogFileFormatJson {
  //
  key?: string;

  //
  value?: string;
}

export function appmesh_getVirtualGatewaySpecLoggingAccessLogFileFormatJson_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "key", "", [], true, false),
    new DynamicUIProps(InputType.String, "value", "", [], true, false),
  ];
}
