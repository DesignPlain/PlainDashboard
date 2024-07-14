import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule {
  // The unit for how often the lifecycle policy should be evaluated. `HOURS` is currently the only allowed value and also the default value. Conflicts with `cron_expression`. Must be set if `interval` is set.
  intervalUnit?: string;

  // How often this lifecycle policy should be evaluated. `1`, `2`,`3`,`4`,`6`,`8`,`12` or `24` are valid values. Conflicts with `cron_expression`. If set, `interval_unit` and `times` must also be set.
  interval?: number;
}

export function dlm_LifecyclePolicyPolicyDetailsActionCrossRegionCopyRetainRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "intervalUnit",
      "The unit for how often the lifecycle policy should be evaluated. `HOURS` is currently the only allowed value and also the default value. Conflicts with `cron_expression`. Must be set if `interval` is set.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "interval",
      "How often this lifecycle policy should be evaluated. `1`, `2`,`3`,`4`,`6`,`8`,`12` or `24` are valid values. Conflicts with `cron_expression`. If set, `interval_unit` and `times` must also be set.",
      [],
      true,
      false,
    ),
  ];
}
