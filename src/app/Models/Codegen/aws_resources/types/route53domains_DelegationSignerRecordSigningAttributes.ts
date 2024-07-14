import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface route53domains_DelegationSignerRecordSigningAttributes {
  // Algorithm which was used to generate the digest from the public key.
  algorithm?: number;

  // Defines the type of key. It can be either a KSK (key-signing-key, value `257`) or ZSK (zone-signing-key, value `256`).
  flags?: number;

  // The base64-encoded public key part of the key pair that is passed to the registry.
  publicKey?: string;
}

export function route53domains_DelegationSignerRecordSigningAttributes_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "algorithm",
      "Algorithm which was used to generate the digest from the public key.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "flags",
      "Defines the type of key. It can be either a KSK (key-signing-key, value `257`) or ZSK (zone-signing-key, value `256`).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "publicKey",
      "The base64-encoded public key part of the key pair that is passed to the registry.",
      [],
      true,
      false,
    ),
  ];
}
