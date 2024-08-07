import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  securityposture_PosturePolicySetPolicy,
  securityposture_PosturePolicySetPolicy_GetTypes,
} from "./securityposture_PosturePolicySetPolicy";

export interface securityposture_PosturePolicySet {
  // ID of the policy set.
  policySetId?: string;

  // Description of the policy set.
  description?: string;

  /*
List of security policy
Structure is documented below.
*/
  policies?: Array<securityposture_PosturePolicySetPolicy>;
}

export function securityposture_PosturePolicySet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description of the policy set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "policies",
      "List of security policy\nStructure is documented below.",
      securityposture_PosturePolicySetPolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "policySetId",
      "ID of the policy set.",
      [],
      true,
      false,
    ),
  ];
}
