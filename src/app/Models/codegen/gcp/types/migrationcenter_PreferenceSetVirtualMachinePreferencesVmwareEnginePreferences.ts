import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface migrationcenter_PreferenceSetVirtualMachinePreferencesVmwareEnginePreferences {
  // Memory overcommit ratio. Acceptable values are 1.0, 1.25, 1.5, 1.75 and 2.0.
  memoryOvercommitRatio?: number;

  // The Deduplication and Compression ratio is based on the logical (Used Before) space required to store data before applying deduplication and compression, in relation to the physical (Used After) space required after applying deduplication and compression. Specifically, the ratio is the Used Before space divided by the Used After space. For example, if the Used Before space is 3 GB, but the physical Used After space is 1 GB, the deduplication and compression ratio is 3x. Acceptable values are between 1.0 and 4.0.
  storageDeduplicationCompressionRatio?: number;

  /*
Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with.
Possible values:
COMMITMENT_PLAN_UNSPECIFIED
ON_DEMAND
COMMITMENT_1_YEAR_MONTHLY_PAYMENTS
COMMITMENT_3_YEAR_MONTHLY_PAYMENTS
COMMITMENT_1_YEAR_UPFRONT_PAYMENT
COMMITMENT_3_YEAR_UPFRONT_PAYMENT
*/
  commitmentPlan?: string;

  // CPU overcommit ratio. Acceptable values are between 1.0 and 8.0, with 0.1 increment.
  cpuOvercommitRatio?: number;
}

export function migrationcenter_PreferenceSetVirtualMachinePreferencesVmwareEnginePreferences_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'memoryOvercommitRatio',
      'Memory overcommit ratio. Acceptable values are 1.0, 1.25, 1.5, 1.75 and 2.0.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'storageDeduplicationCompressionRatio',
      'The Deduplication and Compression ratio is based on the logical (Used Before) space required to store data before applying deduplication and compression, in relation to the physical (Used After) space required after applying deduplication and compression. Specifically, the ratio is the Used Before space divided by the Used After space. For example, if the Used Before space is 3 GB, but the physical Used After space is 1 GB, the deduplication and compression ratio is 3x. Acceptable values are between 1.0 and 4.0.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'commitmentPlan',
      'Commitment plan to consider when calculating costs for virtual machine insights and recommendations. If you are unsure which value to set, a 3 year commitment plan is often a good value to start with.\nPossible values:\nCOMMITMENT_PLAN_UNSPECIFIED\nON_DEMAND\nCOMMITMENT_1_YEAR_MONTHLY_PAYMENTS\nCOMMITMENT_3_YEAR_MONTHLY_PAYMENTS\nCOMMITMENT_1_YEAR_UPFRONT_PAYMENT\nCOMMITMENT_3_YEAR_UPFRONT_PAYMENT',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'cpuOvercommitRatio',
      'CPU overcommit ratio. Acceptable values are between 1.0 and 8.0, with 0.1 increment.',
      () => [],
      false,
      false,
    ),
  ];
}
