import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  identityplatform_ProjectDefaultConfigSignIn,
  identityplatform_ProjectDefaultConfigSignIn_GetTypes,
} from '../types/identityplatform_ProjectDefaultConfigSignIn';

export interface ProjectDefaultConfigArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Configuration related to local sign in methods.
Structure is documented below.
*/
  signIn?: identityplatform_ProjectDefaultConfigSignIn;
}
export class ProjectDefaultConfig extends DS_Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Configuration related to local sign in methods.
Structure is documented below.
*/
  public signIn?: identityplatform_ProjectDefaultConfigSignIn;

  // The name of the Config resource. Example: "projects/my-awesome-project/config"
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'signIn',
        'Configuration related to local sign in methods.\nStructure is documented below.',
        () => identityplatform_ProjectDefaultConfigSignIn_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
