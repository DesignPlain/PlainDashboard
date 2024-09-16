import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  imagebuilder_ImageRecipeBlockDeviceMapping,
  imagebuilder_ImageRecipeBlockDeviceMapping_GetTypes,
} from '../types/imagebuilder_ImageRecipeBlockDeviceMapping';
import {
  imagebuilder_ImageRecipeComponent,
  imagebuilder_ImageRecipeComponent_GetTypes,
} from '../types/imagebuilder_ImageRecipeComponent';
import {
  imagebuilder_ImageRecipeSystemsManagerAgent,
  imagebuilder_ImageRecipeSystemsManagerAgent_GetTypes,
} from '../types/imagebuilder_ImageRecipeSystemsManagerAgent';

export interface ImageRecipeArgs {
  // Description of the image recipe.
  description?: string;

  // The image recipe uses this image as a base from which to build your customized image. The value can be the base image ARN or an AMI ID.
  parentImage?: string;

  // Base64 encoded user data. Use this to provide commands or a command script to run when you launch your build instance.
  userDataBase64?: string;

  /*
The semantic version of the image recipe, which specifies the version in the following format, with numeric values in each position to indicate a specific version: major.minor.patch. For example: 1.0.0.

The following attributes are optional:
*/
  version?: string;

  // Key-value map of resource tags for the image recipe. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The working directory to be used during build and test workflows.
  workingDirectory?: string;

  // Configuration block(s) with block device mappings for the image recipe. Detailed below.
  blockDeviceMappings?: Array<imagebuilder_ImageRecipeBlockDeviceMapping>;

  // Ordered configuration block(s) with components for the image recipe. Detailed below.
  components?: Array<imagebuilder_ImageRecipeComponent>;

  // Name of the image recipe.
  name?: string;

  // Configuration block for the Systems Manager Agent installed by default by Image Builder. Detailed below.
  systemsManagerAgent?: imagebuilder_ImageRecipeSystemsManagerAgent;
}
export class ImageRecipe extends DS_Resource {
  // Configuration block(s) with block device mappings for the image recipe. Detailed below.
  public blockDeviceMappings?: Array<imagebuilder_ImageRecipeBlockDeviceMapping>;

  // Date the image recipe was created.
  public dateCreated?: string;

  // Description of the image recipe.
  public description?: string;

  // Platform of the image recipe.
  public platform?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
The semantic version of the image recipe, which specifies the version in the following format, with numeric values in each position to indicate a specific version: major.minor.patch. For example: 1.0.0.

The following attributes are optional:
*/
  public version?: string;

  // The working directory to be used during build and test workflows.
  public workingDirectory?: string;

  // (Required) Amazon Resource Name (ARN) of the image recipe.
  public arn?: string;

  // Ordered configuration block(s) with components for the image recipe. Detailed below.
  public components?: Array<imagebuilder_ImageRecipeComponent>;

  // Name of the image recipe.
  public name?: string;

  // Owner of the image recipe.
  public owner?: string;

  // Configuration block for the Systems Manager Agent installed by default by Image Builder. Detailed below.
  public systemsManagerAgent?: imagebuilder_ImageRecipeSystemsManagerAgent;

  // The image recipe uses this image as a base from which to build your customized image. The value can be the base image ARN or an AMI ID.
  public parentImage?: string;

  // Key-value map of resource tags for the image recipe. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Base64 encoded user data. Use this to provide commands or a command script to run when you launch your build instance.
  public userDataBase64?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'userDataBase64',
        'Base64 encoded user data. Use this to provide commands or a command script to run when you launch your build instance.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'workingDirectory',
        'The working directory to be used during build and test workflows.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'blockDeviceMappings',
        'Configuration block(s) with block device mappings for the image recipe. Detailed below.',
        () => imagebuilder_ImageRecipeBlockDeviceMapping_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'systemsManagerAgent',
        'Configuration block for the Systems Manager Agent installed by default by Image Builder. Detailed below.',
        () => imagebuilder_ImageRecipeSystemsManagerAgent_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the image recipe.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'parentImage',
        'The image recipe uses this image as a base from which to build your customized image. The value can be the base image ARN or an AMI ID.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'version',
        'The semantic version of the image recipe, which specifies the version in the following format, with numeric values in each position to indicate a specific version: major.minor.patch. For example: 1.0.0.\n\nThe following attributes are optional:',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags for the image recipe. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'components',
        'Ordered configuration block(s) with components for the image recipe. Detailed below.',
        () => imagebuilder_ImageRecipeComponent_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the image recipe.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
