import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dns_getKeysZoneSigningKeyDigest,
  dns_getKeysZoneSigningKeyDigest_GetTypes,
} from "./dns_getKeysZoneSigningKeyDigest";

export interface dns_getKeysZoneSigningKey {
  // A list of cryptographic hashes of the DNSKEY resource record associated with this DnsKey. These digests are needed to construct a DS record that points at this DNS key. Each contains:
  digests?: Array<dns_getKeysZoneSigningKeyDigest>;

  // Active keys will be used to sign subsequent changes to the ManagedZone. Inactive keys will still be present as DNSKEY Resource Records for the use of resolvers validating existing signatures.
  isActive?: boolean;

  // The time that this resource was created in the control plane. This is in RFC3339 text format.
  creationTime?: string;

  // A mutable string of at most 1024 characters associated with this resource for the user's convenience.
  description?: string;

  // Length of the key in bits. Specified at creation time then immutable.
  keyLength?: number;

  // The key tag is a non-cryptographic hash of the a DNSKEY resource record associated with this DnsKey. The key tag can be used to identify a DNSKEY more quickly (but it is not a unique identifier). In particular, the key tag is used in a parent zone's DS record to point at the DNSKEY in this child ManagedZone. The key tag is a number in the range [0, 65535] and the algorithm to calculate it is specified in RFC4034 Appendix B.
  keyTag?: number;

  // Base64 encoded public half of this key.
  publicKey?: string;

  // String mnemonic specifying the DNSSEC algorithm of this key. Immutable after creation time. Possible values are `ecdsap256sha256`, `ecdsap384sha384`, `rsasha1`, `rsasha256`, and `rsasha512`.
  algorithm?: string;

  // Unique identifier for the resource; defined by the server.
  id?: string;
}

export function dns_getKeysZoneSigningKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "description",
      "A mutable string of at most 1024 characters associated with this resource for the user's convenience.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "keyTag",
      "The key tag is a non-cryptographic hash of the a DNSKEY resource record associated with this DnsKey. The key tag can be used to identify a DNSKEY more quickly (but it is not a unique identifier). In particular, the key tag is used in a parent zone's DS record to point at the DNSKEY in this child ManagedZone. The key tag is a number in the range [0, 65535] and the algorithm to calculate it is specified in RFC4034 Appendix B.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "publicKey",
      "Base64 encoded public half of this key.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "algorithm",
      "String mnemonic specifying the DNSSEC algorithm of this key. Immutable after creation time. Possible values are `ecdsap256sha256`, `ecdsap384sha384`, `rsasha1`, `rsasha256`, and `rsasha512`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "Unique identifier for the resource; defined by the server.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "digests",
      "A list of cryptographic hashes of the DNSKEY resource record associated with this DnsKey. These digests are needed to construct a DS record that points at this DNS key. Each contains:",
      dns_getKeysZoneSigningKeyDigest_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "isActive",
      "Active keys will be used to sign subsequent changes to the ManagedZone. Inactive keys will still be present as DNSKEY Resource Records for the use of resolvers validating existing signatures.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "creationTime",
      "The time that this resource was created in the control plane. This is in RFC3339 text format.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "keyLength",
      "Length of the key in bits. Specified at creation time then immutable.",
      [],
      true,
      false,
    ),
  ];
}
