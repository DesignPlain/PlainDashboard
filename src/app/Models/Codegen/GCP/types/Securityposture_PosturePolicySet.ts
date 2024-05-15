import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Securityposture_PosturePolicySetPolicy,
  Securityposture_PosturePolicySetPolicy_GetTypes,
} from "./Securityposture_PosturePolicySetPolicy";

export interface Securityposture_PosturePolicySet {
  // Description of the policy set.
  Description?: string;

  /*
List of security policy
Structure is documented below.
*/
  Policies?: Array<Securityposture_PosturePolicySetPolicy>;

  // ID of the policy set.
  PolicySetId?: string;
}

export function Securityposture_PosturePolicySet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Description",
      "Description of the policy set.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Policies",
      "List of security policy\nStructure is documented below.",
      Securityposture_PosturePolicySetPolicy_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PolicySetId",
      "ID of the policy set.",
      [],
      true,
      false,
    ),
  ];
}
