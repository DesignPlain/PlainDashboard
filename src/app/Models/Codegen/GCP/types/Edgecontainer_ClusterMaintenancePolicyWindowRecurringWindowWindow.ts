import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Edgecontainer_ClusterMaintenancePolicyWindowRecurringWindowWindow {
  /*
The time that the window ends. The end time must take place after the
start time.
*/
  EndTime?: string;

  // The time that the window first starts.
  StartTime?: string;
}

export function Edgecontainer_ClusterMaintenancePolicyWindowRecurringWindowWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "EndTime",
      "The time that the window ends. The end time must take place after the\nstart time.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "StartTime",
      "The time that the window first starts.",
      [],
      false,
      false,
    ),
  ];
}
