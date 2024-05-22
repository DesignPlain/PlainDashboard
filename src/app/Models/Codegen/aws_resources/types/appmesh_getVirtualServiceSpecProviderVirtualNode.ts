import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface appmesh_getVirtualServiceSpecProviderVirtualNode {
  //
  virtualNodeName?: string;
}

export function appmesh_getVirtualServiceSpecProviderVirtualNode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "virtualNodeName",
      "",
      [],
      true,
      false,
    ),
  ];
}
