import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustom,
  securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustom_GetTypes,
} from './securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustom';
import {
  securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModule,
  securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModule_GetTypes,
} from './securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModule';
import {
  securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsModule,
  securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsModule_GetTypes,
} from './securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsModule';
import {
  securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraint,
  securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraint_GetTypes,
} from './securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraint';

export interface securityposture_PosturePolicySetPolicyConstraint {
  /*
Organization policy custom constraint policy definition.
Structure is documented below.
*/
  orgPolicyConstraintCustom?: securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustom;

  /*
Definition of Security Health Analytics Custom Module.
Structure is documented below.
*/
  securityHealthAnalyticsCustomModule?: securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModule;

  /*
Security Health Analytics built-in detector definition.
Structure is documented below.
*/
  securityHealthAnalyticsModule?: securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsModule;

  /*
Organization policy canned constraint definition.
Structure is documented below.
*/
  orgPolicyConstraint?: securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraint;
}

export function securityposture_PosturePolicySetPolicyConstraint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'orgPolicyConstraintCustom',
      'Organization policy custom constraint policy definition.\nStructure is documented below.',
      () =>
        securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraintCustom_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'securityHealthAnalyticsCustomModule',
      'Definition of Security Health Analytics Custom Module.\nStructure is documented below.',
      () =>
        securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsCustomModule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'securityHealthAnalyticsModule',
      'Security Health Analytics built-in detector definition.\nStructure is documented below.',
      () =>
        securityposture_PosturePolicySetPolicyConstraintSecurityHealthAnalyticsModule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'orgPolicyConstraint',
      'Organization policy canned constraint definition.\nStructure is documented below.',
      () =>
        securityposture_PosturePolicySetPolicyConstraintOrgPolicyConstraint_GetTypes(),
      false,
      false,
    ),
  ];
}
