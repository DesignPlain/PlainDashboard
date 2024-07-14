import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface iam_getPrincipalPolicySimulationResultMatchedStatement {
  // Identifier of one of the policies used as input to the simulation.
  sourcePolicyId?: string;

  // The type of the policy identified in source_policy_id.
  sourcePolicyType?: string;
}

export function iam_getPrincipalPolicySimulationResultMatchedStatement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sourcePolicyId",
      "Identifier of one of the policies used as input to the simulation.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourcePolicyType",
      "The type of the policy identified in source_policy_id.",
      [],
      true,
      false,
    ),
  ];
}
