import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dns_ResponsePolicyRuleLocalDataLocalData {
  // For example, www.example.com.
  Name?: string;

  // As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1)
  Rrdatas?: Array<string>;

  /*
Number of seconds that this ResourceRecordSet can be cached by
resolvers.
*/
  Ttl?: number;

  /*
One of valid DNS resource types.
Possible values are: `A`, `AAAA`, `CAA`, `CNAME`, `DNSKEY`, `DS`, `HTTPS`, `IPSECVPNKEY`, `MX`, `NAPTR`, `NS`, `PTR`, `SOA`, `SPF`, `SRV`, `SSHFP`, `SVCB`, `TLSA`, `TXT`.
*/
  Type?: string;
}

export function Dns_ResponsePolicyRuleLocalDataLocalData_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "For example, www.example.com.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Rrdatas",
      "As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1)",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Ttl",
      "Number of seconds that this ResourceRecordSet can be cached by\nresolvers.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "One of valid DNS resource types.\nPossible values are: `A`, `AAAA`, `CAA`, `CNAME`, `DNSKEY`, `DS`, `HTTPS`, `IPSECVPNKEY`, `MX`, `NAPTR`, `NS`, `PTR`, `SOA`, `SPF`, `SRV`, `SSHFP`, `SVCB`, `TLSA`, `TXT`.",
      [],
      true,
      false,
    ),
  ];
}
