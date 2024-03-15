import { ManagedZoneDnssecConfigDefaultKeySpec } from "./ManagedZoneDnssecConfigDefaultKeySpec";

export interface ManagedZoneDnssecConfig {
  /*
Specifies parameters that will be used for generating initial DnsKeys
for this ManagedZone. If you provide a spec for keySigning or zoneSigning,
you must also provide one for the other.
default_key_specs can only be updated when the state is `off`.
Structure is documented below.
*/
  DefaultKeySpecs?: Array<ManagedZoneDnssecConfigDefaultKeySpec>;

  // Identifies what kind of resource this is
  Kind?: string;

  /*
Specifies the mechanism used to provide authenticated denial-of-existence responses.
non_existence can only be updated when the state is `off`.
Possible values are: `nsec`, `nsec3`.
*/
  NonExistence?: string;

  /*
Specifies whether DNSSEC is enabled, and what mode it is in
Possible values are: `off`, `on`, `transfer`.
*/
  State?: string;
}
