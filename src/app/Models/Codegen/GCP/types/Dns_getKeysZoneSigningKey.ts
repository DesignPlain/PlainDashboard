import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dns_getKeysZoneSigningKeyDigest,
  Dns_getKeysZoneSigningKeyDigest_GetTypes,
} from "./Dns_getKeysZoneSigningKeyDigest";

export interface Dns_getKeysZoneSigningKey {
  // A mutable string of at most 1024 characters associated with this resource for the user's convenience.
  Description?: string;

  // A list of cryptographic hashes of the DNSKEY resource record associated with this DnsKey. These digests are needed to construct a DS record that points at this DNS key. Each contains:
  Digests?: Array<Dns_getKeysZoneSigningKeyDigest>;

  // Length of the key in bits. Specified at creation time then immutable.
  KeyLength?: number;

  // String mnemonic specifying the DNSSEC algorithm of this key. Immutable after creation time. Possible values are `ecdsap256sha256`, `ecdsap384sha384`, `rsasha1`, `rsasha256`, and `rsasha512`.
  Algorithm?: string;

  // Unique identifier for the resource; defined by the server.
  Id?: string;

  // Active keys will be used to sign subsequent changes to the ManagedZone. Inactive keys will still be present as DNSKEY Resource Records for the use of resolvers validating existing signatures.
  IsActive?: boolean;

  // The key tag is a non-cryptographic hash of the a DNSKEY resource record associated with this DnsKey. The key tag can be used to identify a DNSKEY more quickly (but it is not a unique identifier). In particular, the key tag is used in a parent zone's DS record to point at the DNSKEY in this child ManagedZone. The key tag is a number in the range [0, 65535] and the algorithm to calculate it is specified in RFC4034 Appendix B.
  KeyTag?: number;

  // Base64 encoded public half of this key.
  PublicKey?: string;

  // The time that this resource was created in the control plane. This is in RFC3339 text format.
  CreationTime?: string;
}

export function Dns_getKeysZoneSigningKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Digests",
      "A list of cryptographic hashes of the DNSKEY resource record associated with this DnsKey. These digests are needed to construct a DS record that points at this DNS key. Each contains:",
      Dns_getKeysZoneSigningKeyDigest_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Id",
      "Unique identifier for the resource; defined by the server.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "KeyTag",
      "The key tag is a non-cryptographic hash of the a DNSKEY resource record associated with this DnsKey. The key tag can be used to identify a DNSKEY more quickly (but it is not a unique identifier). In particular, the key tag is used in a parent zone's DS record to point at the DNSKEY in this child ManagedZone. The key tag is a number in the range [0, 65535] and the algorithm to calculate it is specified in RFC4034 Appendix B.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IsActive",
      "Active keys will be used to sign subsequent changes to the ManagedZone. Inactive keys will still be present as DNSKEY Resource Records for the use of resolvers validating existing signatures.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PublicKey",
      "Base64 encoded public half of this key.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CreationTime",
      "The time that this resource was created in the control plane. This is in RFC3339 text format.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "A mutable string of at most 1024 characters associated with this resource for the user's convenience.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "KeyLength",
      "Length of the key in bits. Specified at creation time then immutable.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Algorithm",
      "String mnemonic specifying the DNSSEC algorithm of this key. Immutable after creation time. Possible values are `ecdsap256sha256`, `ecdsap384sha384`, `rsasha1`, `rsasha256`, and `rsasha512`.",
      [],
      true,
      false,
    ),
  ];
}
