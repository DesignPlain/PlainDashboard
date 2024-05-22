import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appflow_FlowTriggerConfigTriggerPropertiesScheduled,
  appflow_FlowTriggerConfigTriggerPropertiesScheduled_GetTypes,
} from "./appflow_FlowTriggerConfigTriggerPropertiesScheduled";

export interface appflow_FlowTriggerConfigTriggerProperties {
  //
  scheduled?: appflow_FlowTriggerConfigTriggerPropertiesScheduled;
}

export function appflow_FlowTriggerConfigTriggerProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "scheduled",
      "",
      appflow_FlowTriggerConfigTriggerPropertiesScheduled_GetTypes(),
      false,
      false,
    ),
  ];
}
