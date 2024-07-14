import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  auditmanager_getFrameworkControlSetControl,
  auditmanager_getFrameworkControlSetControl_GetTypes,
} from "./auditmanager_getFrameworkControlSetControl";

export interface auditmanager_getFrameworkControlSet {
  //
  controls?: Array<auditmanager_getFrameworkControlSetControl>;

  //
  id?: string;

  // Name of the framework.
  name?: string;
}

export function auditmanager_getFrameworkControlSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the framework.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "controls",
      "",
      auditmanager_getFrameworkControlSetControl_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "id", "", [], true, false),
  ];
}
