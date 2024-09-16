import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface KeyPairArgs {
  // The name for the key pair. If neither `key_name` nor `key_name_prefix` is provided, the provider will create a unique key name.
  keyName?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `key_name`. If neither `key_name` nor `key_name_prefix` is provided, the provider will create a unique key name.
  keyNamePrefix?: string;

  // The public key material.
  publicKey?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class KeyPair extends DS_Resource {
  // The key pair ID.
  public keyPairId?: string;

  // The type of key pair.
  public keyType?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The MD5 public key fingerprint as specified in section 4 of RFC 4716.
  public fingerprint?: string;

  // The name for the key pair. If neither `key_name` nor `key_name_prefix` is provided, the provider will create a unique key name.
  public keyName?: string;

  // The public key material.
  public publicKey?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The key pair ARN.
  public arn?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `key_name`. If neither `key_name` nor `key_name_prefix` is provided, the provider will create a unique key name.
  public keyNamePrefix?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'publicKey',
        'The public key material.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'keyName',
        'The name for the key pair. If neither `key_name` nor `key_name_prefix` is provided, the provider will create a unique key name.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'keyNamePrefix',
        'Creates a unique name beginning with the specified prefix. Conflicts with `key_name`. If neither `key_name` nor `key_name_prefix` is provided, the provider will create a unique key name.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
