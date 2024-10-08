import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundle {
  // The identifier for this object. Format specified above.
  bundle?: string;

  // The set of namespaces to be exempted from the bundle.
  exemptedNamespaces?: Array<string>;
}

export function gkehub_FeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundle_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'bundle',
      'The identifier for this object. Format specified above.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'exemptedNamespaces',
      'The set of namespaces to be exempted from the bundle.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
