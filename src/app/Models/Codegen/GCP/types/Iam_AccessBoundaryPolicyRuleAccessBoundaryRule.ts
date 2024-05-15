import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Iam_AccessBoundaryPolicyRuleAccessBoundaryRuleAvailabilityCondition,
  Iam_AccessBoundaryPolicyRuleAccessBoundaryRuleAvailabilityCondition_GetTypes,
} from "./Iam_AccessBoundaryPolicyRuleAccessBoundaryRuleAvailabilityCondition";

export interface Iam_AccessBoundaryPolicyRuleAccessBoundaryRule {
  // The full resource name of a Google Cloud resource entity.
  AvailableResource?: string;

  /*
The availability condition further constrains the access allowed by the access boundary rule.
Structure is documented below.
*/
  AvailabilityCondition?: Iam_AccessBoundaryPolicyRuleAccessBoundaryRuleAvailabilityCondition;

  // A list of permissions that may be allowed for use on the specified resource.
  AvailablePermissions?: Array<string>;
}

export function Iam_AccessBoundaryPolicyRuleAccessBoundaryRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "AvailableResource",
      "The full resource name of a Google Cloud resource entity.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AvailabilityCondition",
      "The availability condition further constrains the access allowed by the access boundary rule.\nStructure is documented below.",
      Iam_AccessBoundaryPolicyRuleAccessBoundaryRuleAvailabilityCondition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AvailablePermissions",
      "A list of permissions that may be allowed for use on the specified resource.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
