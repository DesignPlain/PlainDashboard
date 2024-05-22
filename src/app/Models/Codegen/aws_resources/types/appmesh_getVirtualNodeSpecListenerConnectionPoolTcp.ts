import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_getVirtualNodeSpecListenerConnectionPoolTcp {
  //
  maxConnections?: number;
}

export function appmesh_getVirtualNodeSpecListenerConnectionPoolTcp_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "maxConnections", "", [], true, false),
  ];
}
