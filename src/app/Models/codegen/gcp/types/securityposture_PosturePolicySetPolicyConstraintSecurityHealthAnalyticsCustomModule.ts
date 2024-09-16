import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfig,
  securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfig_GetTypes,
} from './securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfig';

export interface securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModule {
  /*
The display name of the Security Health Analytics custom module. This
display name becomes the finding category for all findings that are
returned by this custom module.
*/
  displayName?: string;

  /*
(Output)
A server generated id of custom module.
*/
  id?: string;

  /*
The state of enablement for the module at its level of the resource hierarchy.
Possible values are: `ENABLEMENT_STATE_UNSPECIFIED`, `ENABLED`, `DISABLED`.
*/
  moduleEnablementState?: string;

  /*
Custom module details.
Structure is documented below.
*/
  config?: securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfig;
}

export function securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'id',
      '(Output)\nA server generated id of custom module.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'moduleEnablementState',
      'The state of enablement for the module at its level of the resource hierarchy.\nPossible values are: `ENABLEMENT_STATE_UNSPECIFIED`, `ENABLED`, `DISABLED`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'config',
      'Custom module details.\nStructure is documented below.',
      () =>
        securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModuleConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'displayName',
      'The display name of the Security Health Analytics custom module. This\ndisplay name becomes the finding category for all findings that are\nreturned by this custom module.',
      () => [],
      false,
      false,
    ),
  ];
}
