import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appmesh_getVirtualNodeSpecListenerTimeoutGrpcIdle {
  //
  unit?: string;

  //
  value?: number;
}

export function appmesh_getVirtualNodeSpecListenerTimeoutGrpcIdle_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "value", "", () => [], true, false),
    new DynamicUIProps(InputType.String, "unit", "", () => [], true, false),
  ];
}
