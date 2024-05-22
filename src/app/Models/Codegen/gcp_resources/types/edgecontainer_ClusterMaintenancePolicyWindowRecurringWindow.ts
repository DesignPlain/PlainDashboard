import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  edgecontainer_ClusterMaintenancePolicyWindowRecurringWindowWindow,
  edgecontainer_ClusterMaintenancePolicyWindowRecurringWindowWindow_GetTypes,
} from "./edgecontainer_ClusterMaintenancePolicyWindowRecurringWindowWindow";

export interface edgecontainer_ClusterMaintenancePolicyWindowRecurringWindow {
  /*
An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how
this window recurs. They go on for the span of time between the start and
end time.
*/
  recurrence?: string;

  /*
Represents an arbitrary window of time.
Structure is documented below.
*/
  window?: edgecontainer_ClusterMaintenancePolicyWindowRecurringWindowWindow;
}

export function edgecontainer_ClusterMaintenancePolicyWindowRecurringWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "recurrence",
      "An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how\nthis window recurs. They go on for the span of time between the start and\nend time.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "window",
      "Represents an arbitrary window of time.\nStructure is documented below.",
      edgecontainer_ClusterMaintenancePolicyWindowRecurringWindowWindow_GetTypes(),
      false,
      false,
    ),
  ];
}
