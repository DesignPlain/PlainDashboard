import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dns_ResponsePolicyRuleLocalDataLocalData,
  Dns_ResponsePolicyRuleLocalDataLocalData_GetTypes,
} from "./Dns_ResponsePolicyRuleLocalDataLocalData";

export interface Dns_ResponsePolicyRuleLocalData {
  /*
All resource record sets for this selector, one per resource record type. The name must match the dns_name.
Structure is documented below.
*/
  LocalDatas?: Array<Dns_ResponsePolicyRuleLocalDataLocalData>;
}

export function Dns_ResponsePolicyRuleLocalData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "LocalDatas",
      "All resource record sets for this selector, one per resource record type. The name must match the dns_name.\nStructure is documented below.",
      Dns_ResponsePolicyRuleLocalDataLocalData_GetTypes(),
      true,
      false,
    ),
  ];
}
