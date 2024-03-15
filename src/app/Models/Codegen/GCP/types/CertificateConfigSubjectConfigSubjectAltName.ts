export interface CertificateConfigSubjectConfigSubjectAltName {
  // Contains only valid, fully-qualified host names.
  DnsNames?: Array<string>;

  // Contains only valid RFC 2822 E-mail addresses.
  EmailAddresses?: Array<string>;

  // Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses.
  IpAddresses?: Array<string>;

  // Contains only valid RFC 3986 URIs.
  Uris?: Array<string>;
}
