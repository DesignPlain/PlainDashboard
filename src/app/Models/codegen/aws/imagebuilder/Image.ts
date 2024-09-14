import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  imagebuilder_ImageImageScanningConfiguration,
  imagebuilder_ImageImageScanningConfiguration_GetTypes,
} from "../types/imagebuilder_ImageImageScanningConfiguration";
import {
  imagebuilder_ImageImageTestsConfiguration,
  imagebuilder_ImageImageTestsConfiguration_GetTypes,
} from "../types/imagebuilder_ImageImageTestsConfiguration";
import {
  imagebuilder_ImageWorkflow,
  imagebuilder_ImageWorkflow_GetTypes,
} from "../types/imagebuilder_ImageWorkflow";
import {
  imagebuilder_ImageOutputResource,
  imagebuilder_ImageOutputResource_GetTypes,
} from "../types/imagebuilder_ImageOutputResource";

export interface ImageArgs {
  // Configuration block with image scanning configuration. Detailed below.
  imageScanningConfiguration?: imagebuilder_ImageImageScanningConfiguration;

  // Configuration block with image tests configuration. Detailed below.
  imageTestsConfiguration?: imagebuilder_ImageImageTestsConfiguration;

  // Key-value map of resource tags for the Image Builder Image. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Configuration block with the workflow configuration. Detailed below.
  workflows?: Array<imagebuilder_ImageWorkflow>;

  // Amazon Resource Name (ARN) of the container recipe.
  containerRecipeArn?: string;

  // Amazon Resource Name (ARN) of the Image Builder Distribution Configuration.
  distributionConfigurationArn?: string;

  // Whether additional information about the image being created is collected. Defaults to `true`.
  enhancedImageMetadataEnabled?: boolean;

  // Amazon Resource Name (ARN) of the service-linked role to be used by Image Builder to [execute workflows](https://docs.aws.amazon.com/imagebuilder/latest/userguide/manage-image-workflows.html).
  executionRole?: string;

  // Amazon Resource Name (ARN) of the image recipe.
  imageRecipeArn?: string;

  /*
Amazon Resource Name (ARN) of the Image Builder Infrastructure Configuration.

The following arguments are optional:
*/
  infrastructureConfigurationArn?: string;
}
export class Image extends DS_Resource {
  // List of objects with resources created by the image.
  public outputResources?: Array<imagebuilder_ImageOutputResource>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Version of the image.
  public version?: string;

  // Amazon Resource Name (ARN) of the image recipe.
  public imageRecipeArn?: string;

  // Configuration block with image scanning configuration. Detailed below.
  public imageScanningConfiguration?: imagebuilder_ImageImageScanningConfiguration;

  /*
Amazon Resource Name (ARN) of the Image Builder Infrastructure Configuration.

The following arguments are optional:
*/
  public infrastructureConfigurationArn?: string;

  // Name of the AMI.
  public name?: string;

  // Amazon Resource Name (ARN) of the container recipe.
  public containerRecipeArn?: string;

  // Configuration block with image tests configuration. Detailed below.
  public imageTestsConfiguration?: imagebuilder_ImageImageTestsConfiguration;

  // Operating System version of the image.
  public osVersion?: string;

  // Platform of the image.
  public platform?: string;

  // Date the image was created.
  public dateCreated?: string;

  // Amazon Resource Name (ARN) of the Image Builder Distribution Configuration.
  public distributionConfigurationArn?: string;

  // Amazon Resource Name (ARN) of the service-linked role to be used by Image Builder to [execute workflows](https://docs.aws.amazon.com/imagebuilder/latest/userguide/manage-image-workflows.html).
  public executionRole?: string;

  // Key-value map of resource tags for the Image Builder Image. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Amazon Resource Name (ARN) of the image.
  public arn?: string;

  // Whether additional information about the image being created is collected. Defaults to `true`.
  public enhancedImageMetadataEnabled?: boolean;

  // Configuration block with the workflow configuration. Detailed below.
  public workflows?: Array<imagebuilder_ImageWorkflow>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "enhancedImageMetadataEnabled",
        "Whether additional information about the image being created is collected. Defaults to `true`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "imageTestsConfiguration",
        "Configuration block with image tests configuration. Detailed below.",
        () => imagebuilder_ImageImageTestsConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "workflows",
        "Configuration block with the workflow configuration. Detailed below.",
        () => imagebuilder_ImageWorkflow_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "containerRecipeArn",
        "Amazon Resource Name (ARN) of the container recipe.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "executionRole",
        "Amazon Resource Name (ARN) of the service-linked role to be used by Image Builder to [execute workflows](https://docs.aws.amazon.com/imagebuilder/latest/userguide/manage-image-workflows.html).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "imageRecipeArn",
        "Amazon Resource Name (ARN) of the image recipe.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "infrastructureConfigurationArn",
        "Amazon Resource Name (ARN) of the Image Builder Infrastructure Configuration.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "imageScanningConfiguration",
        "Configuration block with image scanning configuration. Detailed below.",
        () => imagebuilder_ImageImageScanningConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags for the Image Builder Image. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "distributionConfigurationArn",
        "Amazon Resource Name (ARN) of the Image Builder Distribution Configuration.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
