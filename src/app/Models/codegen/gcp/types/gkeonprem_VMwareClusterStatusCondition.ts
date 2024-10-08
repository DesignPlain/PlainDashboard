import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface gkeonprem_VMwareClusterStatusCondition {
  /*
(Output)
Human-readable message indicating details about last transition.
*/
  message?: string;

  /*
(Output)
Machine-readable message indicating details about last transition.
*/
  reason?: string;

  /*
(Output)
The lifecycle state of the condition.
*/
  state?: string;

  /*
(Output)
Type of the condition.
(e.g., ClusterRunning, NodePoolRunning or ServerSidePreflightReady)
*/
  type?: string;

  /*
(Output)
Last time the condition transit from one status to another.
*/
  lastTransitionTime?: string;
}

export function gkeonprem_VMwareClusterStatusCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'type',
      '(Output)\nType of the condition.\n(e.g., ClusterRunning, NodePoolRunning or ServerSidePreflightReady)',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'lastTransitionTime',
      '(Output)\nLast time the condition transit from one status to another.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'message',
      '(Output)\nHuman-readable message indicating details about last transition.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'reason',
      '(Output)\nMachine-readable message indicating details about last transition.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'state',
      '(Output)\nThe lifecycle state of the condition.',
      () => [],
      false,
      false,
    ),
  ];
}
