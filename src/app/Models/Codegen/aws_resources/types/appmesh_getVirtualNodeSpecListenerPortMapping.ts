import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appmesh_getVirtualNodeSpecListenerPortMapping {
  //
  port?: number;

  //
  protocol?: string;
}

export function appmesh_getVirtualNodeSpecListenerPortMapping_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "port", "", [], true, false),
    new DynamicUIProps(InputType.String, "protocol", "", [], true, false),
  ];
}
