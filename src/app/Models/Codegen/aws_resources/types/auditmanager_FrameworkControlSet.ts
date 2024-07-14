import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  auditmanager_FrameworkControlSetControl,
  auditmanager_FrameworkControlSetControl_GetTypes,
} from "./auditmanager_FrameworkControlSetControl";

export interface auditmanager_FrameworkControlSet {
  // List of controls within the control set. See `controls` below.
  controls?: Array<auditmanager_FrameworkControlSetControl>;

  // Unique identifier of the control.
  id?: string;

  // Name of the control set.
  name?: string;
}

export function auditmanager_FrameworkControlSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "Unique identifier of the control.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the control set.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "controls",
      "List of controls within the control set. See `controls` below.",
      auditmanager_FrameworkControlSetControl_GetTypes(),
      false,
      false,
    ),
  ];
}
