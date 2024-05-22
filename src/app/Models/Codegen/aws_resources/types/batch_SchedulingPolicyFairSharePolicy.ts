import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  batch_SchedulingPolicyFairSharePolicyShareDistribution,
  batch_SchedulingPolicyFairSharePolicyShareDistribution_GetTypes,
} from "./batch_SchedulingPolicyFairSharePolicyShareDistribution";

export interface batch_SchedulingPolicyFairSharePolicy {
  // One or more share distribution blocks which define the weights for the fair share identifiers for the fair share policy. For more information, see [FairsharePolicy](https://docs.aws.amazon.com/batch/latest/APIReference/API_FairsharePolicy.html). The `share_distribution` block is documented below.
  shareDistributions?: Array<batch_SchedulingPolicyFairSharePolicyShareDistribution>;

  // A value used to reserve some of the available maximum vCPU for fair share identifiers that have not yet been used. For more information, see [FairsharePolicy](https://docs.aws.amazon.com/batch/latest/APIReference/API_FairsharePolicy.html).
  computeReservation?: number;

  //
  shareDecaySeconds?: number;
}

export function batch_SchedulingPolicyFairSharePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "shareDistributions",
      "One or more share distribution blocks which define the weights for the fair share identifiers for the fair share policy. For more information, see [FairsharePolicy](https://docs.aws.amazon.com/batch/latest/APIReference/API_FairsharePolicy.html). The `share_distribution` block is documented below.",
      batch_SchedulingPolicyFairSharePolicyShareDistribution_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "computeReservation",
      "A value used to reserve some of the available maximum vCPU for fair share identifiers that have not yet been used. For more information, see [FairsharePolicy](https://docs.aws.amazon.com/batch/latest/APIReference/API_FairsharePolicy.html).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "shareDecaySeconds",
      "",
      [],
      false,
      false,
    ),
  ];
}
