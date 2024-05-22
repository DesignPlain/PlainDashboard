import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  route53domains_DelegationSignerRecordSigningAttributes,
  route53domains_DelegationSignerRecordSigningAttributes_GetTypes,
} from "../types/route53domains_DelegationSignerRecordSigningAttributes";
import {
  route53domains_DelegationSignerRecordTimeouts,
  route53domains_DelegationSignerRecordTimeouts_GetTypes,
} from "../types/route53domains_DelegationSignerRecordTimeouts";

export interface DelegationSignerRecordArgs {
  // The information about a key, including the algorithm, public key-value, and flags.
  signingAttributes?: route53domains_DelegationSignerRecordSigningAttributes;

  //
  timeouts?: route53domains_DelegationSignerRecordTimeouts;

  // The name of the domain that will have its parent DNS zone updated with the Delegation Signer record.
  domainName?: string;
}
export class DelegationSignerRecord extends Resource {
  //
  public timeouts?: route53domains_DelegationSignerRecordTimeouts;

  // An ID assigned to the created DS record.
  public dnssecKeyId?: string;

  // The name of the domain that will have its parent DNS zone updated with the Delegation Signer record.
  public domainName?: string;

  // The information about a key, including the algorithm, public key-value, and flags.
  public signingAttributes?: route53domains_DelegationSignerRecordSigningAttributes;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "signingAttributes",
        "The information about a key, including the algorithm, public key-value, and flags.",
        route53domains_DelegationSignerRecordSigningAttributes_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        route53domains_DelegationSignerRecordTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "The name of the domain that will have its parent DNS zone updated with the Delegation Signer record.",
        [],
        true,
        false,
      ),
    ];
  }
}
