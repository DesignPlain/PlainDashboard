import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig,
  gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig_GetTypes,
} from './gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig';

export interface gkehub_FeatureFleetDefaultMemberConfigPolicycontroller {
  /*
Configuration of Policy Controller
Structure is documented below.
*/
  policyControllerHubConfig?: gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig;

  // Configures the version of Policy Controller
  version?: string;
}

export function gkehub_FeatureFleetDefaultMemberConfigPolicycontroller_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'version',
      'Configures the version of Policy Controller',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'policyControllerHubConfig',
      'Configuration of Policy Controller\nStructure is documented below.',
      () =>
        gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
