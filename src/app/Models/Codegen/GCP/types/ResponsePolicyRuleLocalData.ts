import { ResponsePolicyRuleLocalDataLocalData } from "./ResponsePolicyRuleLocalDataLocalData";

export interface ResponsePolicyRuleLocalData {
  /*
All resource record sets for this selector, one per resource record type. The name must match the dns_name.
Structure is documented below.
*/
  LocalDatas?: Array<ResponsePolicyRuleLocalDataLocalData>;
}
