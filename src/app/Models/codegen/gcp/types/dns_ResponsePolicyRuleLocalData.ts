import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dns_ResponsePolicyRuleLocalDataLocalData,
  dns_ResponsePolicyRuleLocalDataLocalData_GetTypes,
} from "./dns_ResponsePolicyRuleLocalDataLocalData";

export interface dns_ResponsePolicyRuleLocalData {
  /*
All resource record sets for this selector, one per resource record type. The name must match the dns_name.
Structure is documented below.
*/
  localDatas?: Array<dns_ResponsePolicyRuleLocalDataLocalData>;
}

export function dns_ResponsePolicyRuleLocalData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "localDatas",
      "All resource record sets for this selector, one per resource record type. The name must match the dns_name.\nStructure is documented below.",
      () => dns_ResponsePolicyRuleLocalDataLocalData_GetTypes(),
      true,
      false,
    ),
  ];
}
