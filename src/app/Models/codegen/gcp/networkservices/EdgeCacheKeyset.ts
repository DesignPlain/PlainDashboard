import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  networkservices_EdgeCacheKeysetValidationSharedKey,
  networkservices_EdgeCacheKeysetValidationSharedKey_GetTypes,
} from '../types/networkservices_EdgeCacheKeysetValidationSharedKey';
import {
  networkservices_EdgeCacheKeysetPublicKey,
  networkservices_EdgeCacheKeysetPublicKey_GetTypes,
} from '../types/networkservices_EdgeCacheKeysetPublicKey';

export interface EdgeCacheKeysetArgs {
  /*
Set of label tags associated with the EdgeCache resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Name of the resource; provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]- which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.


- - -
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
An ordered list of Ed25519 public keys to use for validating signed requests.
You must specify `public_keys` or `validation_shared_keys` (or both). The keys in `public_keys` are checked first.
You may specify no more than one Google-managed public key.
If you specify `public_keys`, you must specify at least one (1) key and may specify up to three (3) keys.
Ed25519 public keys are not secret, and only allow Google to validate a request was signed by your corresponding private key.
Ensure that the private key is kept secret, and that only authorized users can add public keys to a keyset.
Structure is documented below.
*/
  publicKeys?: Array<networkservices_EdgeCacheKeysetPublicKey>;

  /*
An ordered list of shared keys to use for validating signed requests.
Shared keys are secret.  Ensure that only authorized users can add `validation_shared_keys` to a keyset.
You can rotate keys by appending (pushing) a new key to the list of `validation_shared_keys` and removing any superseded keys.
You must specify `public_keys` or `validation_shared_keys` (or both). The keys in `public_keys` are checked first.
Structure is documented below.
*/
  validationSharedKeys?: Array<networkservices_EdgeCacheKeysetValidationSharedKey>;

  // A human-readable description of the resource.
  description?: string;
}
export class EdgeCacheKeyset extends DS_Resource {
  /*
Set of label tags associated with the EdgeCache resource.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Name of the resource; provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]- which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.


- - -
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
An ordered list of Ed25519 public keys to use for validating signed requests.
You must specify `public_keys` or `validation_shared_keys` (or both). The keys in `public_keys` are checked first.
You may specify no more than one Google-managed public key.
If you specify `public_keys`, you must specify at least one (1) key and may specify up to three (3) keys.
Ed25519 public keys are not secret, and only allow Google to validate a request was signed by your corresponding private key.
Ensure that the private key is kept secret, and that only authorized users can add public keys to a keyset.
Structure is documented below.
*/
  public publicKeys?: Array<networkservices_EdgeCacheKeysetPublicKey>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
An ordered list of shared keys to use for validating signed requests.
Shared keys are secret.  Ensure that only authorized users can add `validation_shared_keys` to a keyset.
You can rotate keys by appending (pushing) a new key to the list of `validation_shared_keys` and removing any superseded keys.
You must specify `public_keys` or `validation_shared_keys` (or both). The keys in `public_keys` are checked first.
Structure is documented below.
*/
  public validationSharedKeys?: Array<networkservices_EdgeCacheKeysetValidationSharedKey>;

  // A human-readable description of the resource.
  public description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the resource; provided by the client when the resource is created.\nThe name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,\nand all following characters must be a dash, underscore, letter or digit.\n\n\n- - -',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'publicKeys',
        'An ordered list of Ed25519 public keys to use for validating signed requests.\nYou must specify `public_keys` or `validation_shared_keys` (or both). The keys in `public_keys` are checked first.\nYou may specify no more than one Google-managed public key.\nIf you specify `public_keys`, you must specify at least one (1) key and may specify up to three (3) keys.\nEd25519 public keys are not secret, and only allow Google to validate a request was signed by your corresponding private key.\nEnsure that the private key is kept secret, and that only authorized users can add public keys to a keyset.\nStructure is documented below.',
        () => networkservices_EdgeCacheKeysetPublicKey_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'validationSharedKeys',
        'An ordered list of shared keys to use for validating signed requests.\nShared keys are secret.  Ensure that only authorized users can add `validation_shared_keys` to a keyset.\nYou can rotate keys by appending (pushing) a new key to the list of `validation_shared_keys` and removing any superseded keys.\nYou must specify `public_keys` or `validation_shared_keys` (or both). The keys in `public_keys` are checked first.\nStructure is documented below.',
        () => networkservices_EdgeCacheKeysetValidationSharedKey_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A human-readable description of the resource.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'labels',
        'Set of label tags associated with the EdgeCache resource.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
