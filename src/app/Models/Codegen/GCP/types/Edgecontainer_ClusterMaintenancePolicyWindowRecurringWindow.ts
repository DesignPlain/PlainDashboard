import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Edgecontainer_ClusterMaintenancePolicyWindowRecurringWindowWindow,
  Edgecontainer_ClusterMaintenancePolicyWindowRecurringWindowWindow_GetTypes,
} from "./Edgecontainer_ClusterMaintenancePolicyWindowRecurringWindowWindow";

export interface Edgecontainer_ClusterMaintenancePolicyWindowRecurringWindow {
  /*
Represents an arbitrary window of time.
Structure is documented below.
*/
  Window?: Edgecontainer_ClusterMaintenancePolicyWindowRecurringWindowWindow;

  /*
An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how
this window recurs. They go on for the span of time between the start and
end time.
*/
  Recurrence?: string;
}

export function Edgecontainer_ClusterMaintenancePolicyWindowRecurringWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Window",
      "Represents an arbitrary window of time.\nStructure is documented below.",
      Edgecontainer_ClusterMaintenancePolicyWindowRecurringWindowWindow_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Recurrence",
      "An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how\nthis window recurs. They go on for the span of time between the start and\nend time.",
      [],
      false,
      false,
    ),
  ];
}
