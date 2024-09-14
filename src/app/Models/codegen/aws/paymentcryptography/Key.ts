import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  paymentcryptography_KeyTimeouts,
  paymentcryptography_KeyTimeouts_GetTypes,
} from "../types/paymentcryptography_KeyTimeouts";
import {
  paymentcryptography_KeyKeyAttributes,
  paymentcryptography_KeyKeyAttributes_GetTypes,
} from "../types/paymentcryptography_KeyKeyAttributes";

export interface KeyArgs {
  // Map of tags assigned to the WorkSpaces Connection Alias. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  //
  timeouts?: paymentcryptography_KeyTimeouts;

  //
  deletionWindowInDays?: number;

  // Whether to enable the key.
  enabled?: boolean;

  // Whether the key is exportable from the service.
  exportable?: boolean;

  /*
Role of the key, the algorithm it supports, and the cryptographic operations allowed with the key.

The following arguments are optional:
*/
  keyAttributes?: paymentcryptography_KeyKeyAttributes;

  // Algorithm that AWS Payment Cryptography uses to calculate the key check value (KCV).
  keyCheckValueAlgorithm?: string;
}
export class Key extends DS_Resource {
  // ARN of the key.
  public arn?: string;

  //
  public deletionWindowInDays?: number;

  // Whether to enable the key.
  public enabled?: boolean;

  // Algorithm that AWS Payment Cryptography uses to calculate the key check value (KCV).
  public keyCheckValueAlgorithm?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  //
  public timeouts?: paymentcryptography_KeyTimeouts;

  // Whether the key is exportable from the service.
  public exportable?: boolean;

  /*
Role of the key, the algorithm it supports, and the cryptographic operations allowed with the key.

The following arguments are optional:
*/
  public keyAttributes?: paymentcryptography_KeyKeyAttributes;

  // Key check value (KCV) is used to check if all parties holding a given key have the same key or to detect that a key has changed.
  public keyCheckValue?: string;

  // Source of the key material.
  public keyOrigin?: string;

  // State of key that is being created or deleted.
  public keyState?: string;

  // Map of tags assigned to the WorkSpaces Connection Alias. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "keyAttributes",
        "Role of the key, the algorithm it supports, and the cryptographic operations allowed with the key.\n\nThe following arguments are optional:",
        () => paymentcryptography_KeyKeyAttributes_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "keyCheckValueAlgorithm",
        "Algorithm that AWS Payment Cryptography uses to calculate the key check value (KCV).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags assigned to the WorkSpaces Connection Alias. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "timeouts",
        "",
        () => paymentcryptography_KeyTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "deletionWindowInDays",
        "",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Whether to enable the key.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "exportable",
        "Whether the key is exportable from the service.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
