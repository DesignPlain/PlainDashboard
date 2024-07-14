import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cognito_IdentityPoolRoleAttachmentRoleMappingMappingRule {
  // The claim name that must be present in the token, for example, "isAdmin" or "paid".
  claim?: string;

  // The match condition that specifies how closely the claim value in the IdP token must match Value.
  matchType?: string;

  // The role ARN.
  roleArn?: string;

  // A brief string that the claim must match, for example, "paid" or "yes".
  value?: string;
}

export function cognito_IdentityPoolRoleAttachmentRoleMappingMappingRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      'A brief string that the claim must match, for example, "paid" or "yes".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "claim",
      'The claim name that must be present in the token, for example, "isAdmin" or "paid".',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "matchType",
      "The match condition that specifies how closely the claim value in the IdP token must match Value.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "roleArn",
      "The role ARN.",
      [],
      true,
      false,
    ),
  ];
}
