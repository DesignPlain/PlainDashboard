import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  organizations_OrganizationRootPolicyType,
  organizations_OrganizationRootPolicyType_GetTypes,
} from "./organizations_OrganizationRootPolicyType";

export interface organizations_OrganizationRoot {
  // ARN of the root
  arn?: string;

  // Identifier of the root
  id?: string;

  // The name of the policy type
  name?: string;

  // List of policy types enabled for this root. All elements have these attributes:
  policyTypes?: Array<organizations_OrganizationRootPolicyType>;
}

export function organizations_OrganizationRoot_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "ARN of the root",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "Identifier of the root",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the policy type",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "policyTypes",
      "List of policy types enabled for this root. All elements have these attributes:",
      organizations_OrganizationRootPolicyType_GetTypes(),
      false,
      false,
    ),
  ];
}
