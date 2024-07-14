import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface edgecontainer_ClusterMaintenancePolicyWindowRecurringWindowWindow {
  /*
The time that the window ends. The end time must take place after the
start time.
*/
  endTime?: string;

  // The time that the window first starts.
  startTime?: string;
}

export function edgecontainer_ClusterMaintenancePolicyWindowRecurringWindowWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "endTime",
      "The time that the window ends. The end time must take place after the\nstart time.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "startTime",
      "The time that the window first starts.",
      [],
      false,
      false,
    ),
  ];
}
