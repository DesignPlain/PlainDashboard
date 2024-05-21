import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dns_ManagedZoneDnssecConfigDefaultKeySpec {
  /*
Specifies whether this is a key signing key (KSK) or a zone
signing key (ZSK). Key signing keys have the Secure Entry
Point flag set and, when active, will only be used to sign
resource record sets of type DNSKEY. Zone signing keys do
not have the Secure Entry Point flag set and will be used
to sign all other types of resource record sets.
Possible values are: `keySigning`, `zoneSigning`.
*/
  keyType?: string;

  // Identifies what kind of resource this is
  kind?: string;

  /*
String mnemonic specifying the DNSSEC algorithm of this key
Possible values are: `ecdsap256sha256`, `ecdsap384sha384`, `rsasha1`, `rsasha256`, `rsasha512`.
*/
  algorithm?: string;

  // Length of the keys in bits
  keyLength?: number;
}

export function dns_ManagedZoneDnssecConfigDefaultKeySpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "algorithm",
      "String mnemonic specifying the DNSSEC algorithm of this key\nPossible values are: `ecdsap256sha256`, `ecdsap384sha384`, `rsasha1`, `rsasha256`, `rsasha512`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "keyLength",
      "Length of the keys in bits",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "keyType",
      "Specifies whether this is a key signing key (KSK) or a zone\nsigning key (ZSK). Key signing keys have the Secure Entry\nPoint flag set and, when active, will only be used to sign\nresource record sets of type DNSKEY. Zone signing keys do\nnot have the Secure Entry Point flag set and will be used\nto sign all other types of resource record sets.\nPossible values are: `keySigning`, `zoneSigning`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kind",
      "Identifies what kind of resource this is",
      [],
      false,
      false,
    ),
  ];
}
