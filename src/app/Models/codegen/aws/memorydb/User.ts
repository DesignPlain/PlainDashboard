import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  memorydb_UserAuthenticationMode,
  memorydb_UserAuthenticationMode_GetTypes,
} from '../types/memorydb_UserAuthenticationMode';

export interface UserArgs {
  // Denotes the user's authentication properties. Detailed below.
  authenticationMode?: memorydb_UserAuthenticationMode;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
Name of the MemoryDB user. Up to 40 characters.

The following arguments are optional:
*/
  userName?: string;

  // Access permissions string used for this user.
  accessString?: string;
}
export class User extends DS_Resource {
  // Denotes the user's authentication properties. Detailed below.
  public authenticationMode?: memorydb_UserAuthenticationMode;

  // Minimum engine version supported for the user.
  public minimumEngineVersion?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
Name of the MemoryDB user. Up to 40 characters.

The following arguments are optional:
*/
  public userName?: string;

  // Access permissions string used for this user.
  public accessString?: string;

  // ARN of the user.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'authenticationMode',
        "Denotes the user's authentication properties. Detailed below.",
        () => memorydb_UserAuthenticationMode_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'userName',
        'Name of the MemoryDB user. Up to 40 characters.\n\nThe following arguments are optional:',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'accessString',
        'Access permissions string used for this user.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
