import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Edgecontainer_ClusterMaintenancePolicyWindowRecurringWindow,
  Edgecontainer_ClusterMaintenancePolicyWindowRecurringWindow_GetTypes,
} from "./Edgecontainer_ClusterMaintenancePolicyWindowRecurringWindow";

export interface Edgecontainer_ClusterMaintenancePolicyWindow {
  /*
Represents an arbitrary window of time that recurs.
Structure is documented below.
*/
  RecurringWindow?: Edgecontainer_ClusterMaintenancePolicyWindowRecurringWindow;
}

export function Edgecontainer_ClusterMaintenancePolicyWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "RecurringWindow",
      "Represents an arbitrary window of time that recurs.\nStructure is documented below.",
      Edgecontainer_ClusterMaintenancePolicyWindowRecurringWindow_GetTypes(),
      true,
      false,
    ),
  ];
}
