import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  batch_getSchedulingPolicyFairSharePolicyShareDistribution,
  batch_getSchedulingPolicyFairSharePolicyShareDistribution_GetTypes,
} from "./batch_getSchedulingPolicyFairSharePolicyShareDistribution";

export interface batch_getSchedulingPolicyFairSharePolicy {
  // Value used to reserve some of the available maximum vCPU for fair share identifiers that have not yet been used. For more information, see [FairsharePolicy](https://docs.aws.amazon.com/batch/latest/APIReference/API_FairsharePolicy.html).
  computeReservation?: number;

  //
  shareDecaySeconds?: number;

  // One or more share distribution blocks which define the weights for the fair share identifiers for the fair share policy. For more information, see [FairsharePolicy](https://docs.aws.amazon.com/batch/latest/APIReference/API_FairsharePolicy.html). The `share_distribution` block is documented below.
  shareDistributions?: Array<batch_getSchedulingPolicyFairSharePolicyShareDistribution>;
}

export function batch_getSchedulingPolicyFairSharePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "computeReservation",
      "Value used to reserve some of the available maximum vCPU for fair share identifiers that have not yet been used. For more information, see [FairsharePolicy](https://docs.aws.amazon.com/batch/latest/APIReference/API_FairsharePolicy.html).",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "shareDecaySeconds",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "shareDistributions",
      "One or more share distribution blocks which define the weights for the fair share identifiers for the fair share policy. For more information, see [FairsharePolicy](https://docs.aws.amazon.com/batch/latest/APIReference/API_FairsharePolicy.html). The `share_distribution` block is documented below.",
      () =>
        batch_getSchedulingPolicyFairSharePolicyShareDistribution_GetTypes(),
      true,
      false,
    ),
  ];
}
