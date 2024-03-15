export interface DomainMappingResourceRecord {
  /*
Resource record type. Example: `AAAA`.
Possible values are: `A`, `AAAA`, `CNAME`.
*/
  Type?: string;

  // Relative name of the object affected by this record. Only applicable for CNAME records. Example: 'www'.
  Name?: string;

  // Data for this record. Values vary by record type, as defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).
  Rrdata?: string;
}
