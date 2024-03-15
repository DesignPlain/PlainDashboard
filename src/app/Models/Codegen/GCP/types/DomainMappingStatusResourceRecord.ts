export interface DomainMappingStatusResourceRecord {
  // Name should be a [verified](https://support.google.com/webmasters/answer/9008080) domain
  Name?: string;

  /*
(Output)
Data for this record. Values vary by record type, as defined in RFC 1035
(section 5) and RFC 1034 (section 3.6.1).
*/
  Rrdata?: string;

  /*
Resource record type. Example: `AAAA`.
Possible values are: `A`, `AAAA`, `CNAME`.
*/
  Type?: string;
}
