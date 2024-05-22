import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface auditmanager_getFrameworkControlSetControl {
  //
  id?: string;
}

export function auditmanager_getFrameworkControlSetControl_GetTypes(): DynamicUIProps[] {
  return [new DynamicUIProps(InputType.String, "id", "", [], true, false)];
}
