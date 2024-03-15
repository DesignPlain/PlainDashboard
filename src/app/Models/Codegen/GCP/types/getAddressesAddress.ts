export interface getAddressesAddress {
  // The IP address (for example `1.2.3.4`).
  Address?: string;

  // The IP address type, can be `EXTERNAL` or `INTERNAL`.
  AddressType?: string;

  // The IP address description.
  Description?: string;

  // A map containing IP labels.
  Labels?: Map<string, string>;

  // The IP address name.
  Name?: string;

  /*
Region that should be considered to search addresses.
All regions are considered if missing.
*/
  Region?: string;

  // The URI of the created resource.
  SelfLink?: string;

  // Indicates if the address is used. Possible values are: RESERVED or IN_USE.
  Status?: string;
}
