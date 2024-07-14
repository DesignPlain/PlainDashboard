import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  appflow_FlowTriggerConfigTriggerProperties,
  appflow_FlowTriggerConfigTriggerProperties_GetTypes,
} from "./appflow_FlowTriggerConfigTriggerProperties";

export interface appflow_FlowTriggerConfig {
  // Configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the `Scheduled` trigger type. See Scheduled Trigger Properties for details.
  triggerProperties?: appflow_FlowTriggerConfigTriggerProperties;

  // Type of flow trigger. Valid values are `Scheduled`, `Event`, and `OnDemand`.
  triggerType?: string;
}

export function appflow_FlowTriggerConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "triggerProperties",
      "Configuration details of a schedule-triggered flow as defined by the user. Currently, these settings only apply to the `Scheduled` trigger type. See Scheduled Trigger Properties for details.",
      appflow_FlowTriggerConfigTriggerProperties_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "triggerType",
      "Type of flow trigger. Valid values are `Scheduled`, `Event`, and `OnDemand`.",
      [],
      true,
      false,
    ),
  ];
}
