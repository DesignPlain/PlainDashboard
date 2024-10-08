import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigPodToleration {
  // Matches a taint effect.
  effect?: string;

  // Matches a taint key (not necessarily unique).
  key?: string;

  // Matches a taint operator.
  operator?: string;

  // Matches a taint value.
  value?: string;
}

export function gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigPodToleration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'effect',
      'Matches a taint effect.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'key',
      'Matches a taint key (not necessarily unique).',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'operator',
      'Matches a taint operator.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'Matches a taint value.',
      () => [],
      false,
      false,
    ),
  ];
}
