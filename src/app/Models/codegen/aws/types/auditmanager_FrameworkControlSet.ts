import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  auditmanager_FrameworkControlSetControl,
  auditmanager_FrameworkControlSetControl_GetTypes,
} from "./auditmanager_FrameworkControlSetControl";

export interface auditmanager_FrameworkControlSet {
  // Configuration block(s) for the controls within the control set. See `controls` Block below for details.
  controls?: Array<auditmanager_FrameworkControlSetControl>;

  // Unique identifier for the framework.
  id?: string;

  // Name of the control set.
  name?: string;
}

export function auditmanager_FrameworkControlSet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "controls",
      "Configuration block(s) for the controls within the control set. See `controls` Block below for details.",
      () => auditmanager_FrameworkControlSetControl_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "Unique identifier for the framework.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the control set.",
      () => [],
      true,
      false,
    ),
  ];
}
