import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface codedeploy_DeploymentGroupAutoRollbackConfiguration {
  // Indicates whether a defined automatic rollback configuration is currently enabled for this Deployment Group. If you enable automatic rollback, you must specify at least one event type.
  enabled?: boolean;

  /*
The event type or types that trigger a rollback. Supported types are `DEPLOYMENT_FAILURE`, `DEPLOYMENT_STOP_ON_ALARM` and `DEPLOYMENT_STOP_ON_REQUEST`.

_Only one `auto_rollback_configuration` is allowed_.
*/
  events?: Array<string>;
}

export function codedeploy_DeploymentGroupAutoRollbackConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Indicates whether a defined automatic rollback configuration is currently enabled for this Deployment Group. If you enable automatic rollback, you must specify at least one event type.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'events',
      'The event type or types that trigger a rollback. Supported types are `DEPLOYMENT_FAILURE`, `DEPLOYMENT_STOP_ON_ALARM` and `DEPLOYMENT_STOP_ON_REQUEST`.\n\n_Only one `auto_rollback_configuration` is allowed_.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
