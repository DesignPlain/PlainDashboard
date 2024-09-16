import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  integrationconnectors_ConnectionEventingRuntimeDataStatus,
  integrationconnectors_ConnectionEventingRuntimeDataStatus_GetTypes,
} from './integrationconnectors_ConnectionEventingRuntimeDataStatus';

export interface integrationconnectors_ConnectionEventingRuntimeData {
  // Events listener endpoint. The value will populated after provisioning the events listener.
  eventsListenerEndpoint?: string;

  /*
(Output)
Current status of eventing.
Structure is documented below.
*/
  statuses?: Array<integrationconnectors_ConnectionEventingRuntimeDataStatus>;
}

export function integrationconnectors_ConnectionEventingRuntimeData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'eventsListenerEndpoint',
      'Events listener endpoint. The value will populated after provisioning the events listener.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'statuses',
      '(Output)\nCurrent status of eventing.\nStructure is documented below.',
      () =>
        integrationconnectors_ConnectionEventingRuntimeDataStatus_GetTypes(),
      false,
      false,
    ),
  ];
}
