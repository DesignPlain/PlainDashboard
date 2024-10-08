import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface KeyPairArgs {
  // The name of the Lightsail Key Pair. If omitted, a unique name will be generated by this provider
  name?: string;

  //
  namePrefix?: string;

  // An optional PGP key to encrypt the resulting private key material. Only used when creating a new key pair
  pgpKey?: string;

  // The public key material. This public key will be imported into Lightsail
  publicKey?: string;

  /*
A map of tags to assign to the collection. To create a key-only tag, use an empty string as the value. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

> --NOTE:-- a PGP key is not required, however it is strongly encouraged. Without a PGP key, the private key material will be stored in state unencrypted.`pgp_key` is ignored if `public_key` is supplied.
*/
  tags?: Map<string, string>;
}
export class KeyPair extends DS_Resource {
  // the private key, base64 encoded. This is only populated when creating a new key, and when no `pgp_key` is provided.
  public privateKey?: string;

  /*
A map of tags to assign to the collection. To create a key-only tag, use an empty string as the value. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.

> --NOTE:-- a PGP key is not required, however it is strongly encouraged. Without a PGP key, the private key material will be stored in state unencrypted.`pgp_key` is ignored if `public_key` is supplied.
*/
  public tags?: Map<string, string>;

  // the private key material, base 64 encoded and encrypted with the given `pgp_key`. This is only populated when creating a new key and `pgp_key` is supplied.
  public encryptedPrivateKey?: string;

  //
  public namePrefix?: string;

  // An optional PGP key to encrypt the resulting private key material. Only used when creating a new key pair
  public pgpKey?: string;

  // The name of the Lightsail Key Pair. If omitted, a unique name will be generated by this provider
  public name?: string;

  // The public key material. This public key will be imported into Lightsail
  public publicKey?: string;

  //
  public tagsAll?: Map<string, string>;

  // The ARN of the Lightsail key pair.
  public arn?: string;

  // The MD5 public key fingerprint for the encrypted private key.
  public encryptedFingerprint?: string;

  // The MD5 public key fingerprint as specified in section 4 of RFC 4716.
  public fingerprint?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'namePrefix',
        '',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'pgpKey',
        'An optional PGP key to encrypt the resulting private key material. Only used when creating a new key pair',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'publicKey',
        'The public key material. This public key will be imported into Lightsail',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the collection. To create a key-only tag, use an empty string as the value. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.\n\n> **NOTE:** a PGP key is not required, however it is strongly encouraged. Without a PGP key, the private key material will be stored in state unencrypted.`pgp_key` is ignored if `public_key` is supplied.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the Lightsail Key Pair. If omitted, a unique name will be generated by this provider',
        () => [],
        false,
        true,
      ),
    ];
  }
}
