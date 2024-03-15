export interface ManagedZoneDnssecConfigDefaultKeySpec {
  /*
String mnemonic specifying the DNSSEC algorithm of this key
Possible values are: `ecdsap256sha256`, `ecdsap384sha384`, `rsasha1`, `rsasha256`, `rsasha512`.
*/
  Algorithm?: string;

  // Length of the keys in bits
  KeyLength?: number;

  /*
Specifies whether this is a key signing key (KSK) or a zone
signing key (ZSK). Key signing keys have the Secure Entry
Point flag set and, when active, will only be used to sign
resource record sets of type DNSKEY. Zone signing keys do
not have the Secure Entry Point flag set and will be used
to sign all other types of resource record sets.
Possible values are: `keySigning`, `zoneSigning`.
*/
  KeyType?: string;

  // Identifies what kind of resource this is
  Kind?: string;
}
