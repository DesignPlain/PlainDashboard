import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfig,
  gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfig_GetTypes,
} from './gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfig';

export interface gkehub_FeatureMembershipPolicycontroller {
  // Policy Controller configuration for the cluster. Structure is documented below.
  policyControllerHubConfig?: gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfig;

  // Version of Policy Controller to install. Defaults to the latest version.
  version?: string;
}

export function gkehub_FeatureMembershipPolicycontroller_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'policyControllerHubConfig',
      'Policy Controller configuration for the cluster. Structure is documented below.',
      () =>
        gkehub_FeatureMembershipPolicycontrollerPolicyControllerHubConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'version',
      'Version of Policy Controller to install. Defaults to the latest version.',
      () => [],
      false,
      false,
    ),
  ];
}
