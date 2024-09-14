import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface auditmanager_getFrameworkControlSetControl {
  //
  id?: string;
}

export function auditmanager_getFrameworkControlSetControl_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "id", "", () => [], true, false),
  ];
}
