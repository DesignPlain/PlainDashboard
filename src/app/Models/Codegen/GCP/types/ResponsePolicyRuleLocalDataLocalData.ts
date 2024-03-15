export interface ResponsePolicyRuleLocalDataLocalData {
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
