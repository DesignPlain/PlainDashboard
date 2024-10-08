import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary {
  /*
Configures the manner in which the template library is installed on the cluster.
Possible values are: `INSTALATION_UNSPECIFIED`, `NOT_INSTALLED`, `ALL`.
*/
  installation?: string;
}

export function gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'installation',
      'Configures the manner in which the template library is installed on the cluster.\nPossible values are: `INSTALATION_UNSPECIFIED`, `NOT_INSTALLED`, `ALL`.',
      () => [],
      false,
      false,
    ),
  ];
}
