import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface auditmanager_ControlControlMappingSourceSourceKeyword {
  // Input method for the keyword. Valid values are `INPUT_TEXT`, `SELECT_FROM_LIST`, or `UPLOAD_FILE`.
  keywordInputType?: string;

  // The value of the keyword that's used when mapping a control data source. For example, this can be a CloudTrail event name, a rule name for Config, a Security Hub control, or the name of an Amazon Web Services API call. See the [Audit Manager supported control data sources documentation](https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources.html) for more information.
  keywordValue?: string;
}

export function auditmanager_ControlControlMappingSourceSourceKeyword_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "keywordInputType",
      "Input method for the keyword. Valid values are `INPUT_TEXT`, `SELECT_FROM_LIST`, or `UPLOAD_FILE`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "keywordValue",
      "The value of the keyword that's used when mapping a control data source. For example, this can be a CloudTrail event name, a rule name for Config, a Security Hub control, or the name of an Amazon Web Services API call. See the [Audit Manager supported control data sources documentation](https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources.html) for more information.",
      () => [],
      true,
      false,
    ),
  ];
}
