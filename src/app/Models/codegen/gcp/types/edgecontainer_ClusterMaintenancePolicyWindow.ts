import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  edgecontainer_ClusterMaintenancePolicyWindowRecurringWindow,
  edgecontainer_ClusterMaintenancePolicyWindowRecurringWindow_GetTypes,
} from './edgecontainer_ClusterMaintenancePolicyWindowRecurringWindow';

export interface edgecontainer_ClusterMaintenancePolicyWindow {
  /*
Represents an arbitrary window of time that recurs.
Structure is documented below.
*/
  recurringWindow?: edgecontainer_ClusterMaintenancePolicyWindowRecurringWindow;
}

export function edgecontainer_ClusterMaintenancePolicyWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'recurringWindow',
      'Represents an arbitrary window of time that recurs.\nStructure is documented below.',
      () =>
        edgecontainer_ClusterMaintenancePolicyWindowRecurringWindow_GetTypes(),
      true,
      false,
    ),
  ];
}
