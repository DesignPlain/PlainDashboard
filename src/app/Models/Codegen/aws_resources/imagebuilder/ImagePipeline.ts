import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  imagebuilder_ImagePipelineImageScanningConfiguration,
  imagebuilder_ImagePipelineImageScanningConfiguration_GetTypes,
} from "../types/imagebuilder_ImagePipelineImageScanningConfiguration";
import {
  imagebuilder_ImagePipelineImageTestsConfiguration,
  imagebuilder_ImagePipelineImageTestsConfiguration_GetTypes,
} from "../types/imagebuilder_ImagePipelineImageTestsConfiguration";
import {
  imagebuilder_ImagePipelineSchedule,
  imagebuilder_ImagePipelineSchedule_GetTypes,
} from "../types/imagebuilder_ImagePipelineSchedule";

export interface ImagePipelineArgs {
  // Amazon Resource Name (ARN) of the image recipe.
  imageRecipeArn?: string;

  // Status of the image pipeline. Valid values are `DISABLED` and `ENABLED`. Defaults to `ENABLED`.
  status?: string;

  // Amazon Resource Name (ARN) of the Image Builder Infrastructure Configuration.
  infrastructureConfigurationArn?: string;

  /*
Name of the image pipeline.

The following arguments are optional:
*/
  name?: string;

  // Amazon Resource Name (ARN) of the container recipe.
  containerRecipeArn?: string;

  // Description of the image pipeline.
  description?: string;

  // Amazon Resource Name (ARN) of the Image Builder Distribution Configuration.
  distributionConfigurationArn?: string;

  // Whether additional information about the image being created is collected. Defaults to `true`.
  enhancedImageMetadataEnabled?: boolean;

  // Configuration block with image scanning configuration. Detailed below.
  imageScanningConfiguration?: imagebuilder_ImagePipelineImageScanningConfiguration;

  // Configuration block with image tests configuration. Detailed below.
  imageTestsConfiguration?: imagebuilder_ImagePipelineImageTestsConfiguration;

  // Configuration block with schedule settings. Detailed below.
  schedule?: imagebuilder_ImagePipelineSchedule;

  // Key-value map of resource tags for the image pipeline. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class ImagePipeline extends Resource {
  // Date the image pipeline was created.
  public dateCreated?: string;

  // Platform of the image pipeline.
  public platform?: string;

  // Configuration block with schedule settings. Detailed below.
  public schedule?: imagebuilder_ImagePipelineSchedule;

  // Amazon Resource Name (ARN) of the image pipeline.
  public arn?: string;

  // Date the image pipeline was updated.
  public dateUpdated?: string;

  // Key-value map of resource tags for the image pipeline. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Date the image pipeline was last run.
  public dateLastRun?: string;

  // Description of the image pipeline.
  public description?: string;

  // Amazon Resource Name (ARN) of the Image Builder Distribution Configuration.
  public distributionConfigurationArn?: string;

  // Amazon Resource Name (ARN) of the image recipe.
  public imageRecipeArn?: string;

  // Date the image pipeline will run next.
  public dateNextRun?: string;

  // Whether additional information about the image being created is collected. Defaults to `true`.
  public enhancedImageMetadataEnabled?: boolean;

  // Configuration block with image scanning configuration. Detailed below.
  public imageScanningConfiguration?: imagebuilder_ImagePipelineImageScanningConfiguration;

  // Configuration block with image tests configuration. Detailed below.
  public imageTestsConfiguration?: imagebuilder_ImagePipelineImageTestsConfiguration;

  // Amazon Resource Name (ARN) of the Image Builder Infrastructure Configuration.
  public infrastructureConfigurationArn?: string;

  /*
Name of the image pipeline.

The following arguments are optional:
*/
  public name?: string;

  // Status of the image pipeline. Valid values are `DISABLED` and `ENABLED`. Defaults to `ENABLED`.
  public status?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) of the container recipe.
  public containerRecipeArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "imageRecipeArn",
        "Amazon Resource Name (ARN) of the image recipe.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "infrastructureConfigurationArn",
        "Amazon Resource Name (ARN) of the Image Builder Infrastructure Configuration.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the image pipeline.\n\nThe following arguments are optional:",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "containerRecipeArn",
        "Amazon Resource Name (ARN) of the container recipe.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "distributionConfigurationArn",
        "Amazon Resource Name (ARN) of the Image Builder Distribution Configuration.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "status",
        "Status of the image pipeline. Valid values are `DISABLED` and `ENABLED`. Defaults to `ENABLED`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the image pipeline.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enhancedImageMetadataEnabled",
        "Whether additional information about the image being created is collected. Defaults to `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "imageScanningConfiguration",
        "Configuration block with image scanning configuration. Detailed below.",
        imagebuilder_ImagePipelineImageScanningConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "imageTestsConfiguration",
        "Configuration block with image tests configuration. Detailed below.",
        imagebuilder_ImagePipelineImageTestsConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "schedule",
        "Configuration block with schedule settings. Detailed below.",
        imagebuilder_ImagePipelineSchedule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags for the image pipeline. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
