import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cognito_IdentityPoolRoleAttachmentRoleMappingMappingRule,
  cognito_IdentityPoolRoleAttachmentRoleMappingMappingRule_GetTypes,
} from './cognito_IdentityPoolRoleAttachmentRoleMappingMappingRule';

export interface cognito_IdentityPoolRoleAttachmentRoleMapping {
  // Specifies the action to be taken if either no rules match the claim value for the Rules type, or there is no cognito:preferred_role claim and there are multiple cognito:roles matches for the Token type. `Required` if you specify Token or Rules as the Type.
  ambiguousRoleResolution?: string;

  // A string identifying the identity provider, for example, "graph.facebook.com" or "cognito-idp.us-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id". Depends on `cognito_identity_providers` set on `aws.cognito.IdentityPool` resource or a `aws.cognito.IdentityProvider` resource.
  identityProvider?: string;

  // The Rules Configuration to be used for mapping users to roles. You can specify up to 25 rules per identity provider. Rules are evaluated in order. The first one to match specifies the role.
  mappingRules?: Array<cognito_IdentityPoolRoleAttachmentRoleMappingMappingRule>;

  // The role mapping type.
  type?: string;
}

export function cognito_IdentityPoolRoleAttachmentRoleMapping_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'ambiguousRoleResolution',
      'Specifies the action to be taken if either no rules match the claim value for the Rules type, or there is no cognito:preferred_role claim and there are multiple cognito:roles matches for the Token type. `Required` if you specify Token or Rules as the Type.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'identityProvider',
      'A string identifying the identity provider, for example, "graph.facebook.com" or "cognito-idp.us-east-1.amazonaws.com/us-east-1_abcdefghi:app_client_id". Depends on `cognito_identity_providers` set on `aws.cognito.IdentityPool` resource or a `aws.cognito.IdentityProvider` resource.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'mappingRules',
      'The Rules Configuration to be used for mapping users to roles. You can specify up to 25 rules per identity provider. Rules are evaluated in order. The first one to match specifies the role.',
      () => cognito_IdentityPoolRoleAttachmentRoleMappingMappingRule_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'The role mapping type.',
      () => [],
      true,
      false,
    ),
  ];
}
