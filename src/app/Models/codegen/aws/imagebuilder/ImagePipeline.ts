import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  imagebuilder_ImagePipelineSchedule,
  imagebuilder_ImagePipelineSchedule_GetTypes,
} from '../types/imagebuilder_ImagePipelineSchedule';
import {
  imagebuilder_ImagePipelineWorkflow,
  imagebuilder_ImagePipelineWorkflow_GetTypes,
} from '../types/imagebuilder_ImagePipelineWorkflow';
import {
  imagebuilder_ImagePipelineImageTestsConfiguration,
  imagebuilder_ImagePipelineImageTestsConfiguration_GetTypes,
} from '../types/imagebuilder_ImagePipelineImageTestsConfiguration';
import {
  imagebuilder_ImagePipelineImageScanningConfiguration,
  imagebuilder_ImagePipelineImageScanningConfiguration_GetTypes,
} from '../types/imagebuilder_ImagePipelineImageScanningConfiguration';

export interface ImagePipelineArgs {
  // Amazon Resource Name (ARN) of the image recipe.
  imageRecipeArn?: string;

  /*
Name of the image pipeline.

The following arguments are optional:
*/
  name?: string;

  // Configuration block with schedule settings. Detailed below.
  schedule?: imagebuilder_ImagePipelineSchedule;

  // Status of the image pipeline. Valid values are `DISABLED` and `ENABLED`. Defaults to `ENABLED`.
  status?: string;

  // Configuration block with the workflow configuration. Detailed below.
  workflows?: Array<imagebuilder_ImagePipelineWorkflow>;

  // Amazon Resource Name (ARN) of the Image Builder Infrastructure Configuration.
  infrastructureConfigurationArn?: string;

  // Whether additional information about the image being created is collected. Defaults to `true`.
  enhancedImageMetadataEnabled?: boolean;

  // Configuration block with image tests configuration. Detailed below.
  imageTestsConfiguration?: imagebuilder_ImagePipelineImageTestsConfiguration;

  // Key-value map of resource tags for the image pipeline. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Amazon Resource Name (ARN) of the container recipe.
  containerRecipeArn?: string;

  // Description of the image pipeline.
  description?: string;

  // Amazon Resource Name (ARN) of the Image Builder Distribution Configuration.
  distributionConfigurationArn?: string;

  // Amazon Resource Name (ARN) of the service-linked role to be used by Image Builder to [execute workflows](https://docs.aws.amazon.com/imagebuilder/latest/userguide/manage-image-workflows.html).
  executionRole?: string;

  // Configuration block with image scanning configuration. Detailed below.
  imageScanningConfiguration?: imagebuilder_ImagePipelineImageScanningConfiguration;
}
export class ImagePipeline extends DS_Resource {
  // Date the image pipeline was last run.
  public dateLastRun?: string;

  // Date the image pipeline will run next.
  public dateNextRun?: string;

  // Date the image pipeline was updated.
  public dateUpdated?: string;

  // Amazon Resource Name (ARN) of the Image Builder Infrastructure Configuration.
  public infrastructureConfigurationArn?: string;

  // Date the image pipeline was created.
  public dateCreated?: string;

  // Status of the image pipeline. Valid values are `DISABLED` and `ENABLED`. Defaults to `ENABLED`.
  public status?: string;

  // Key-value map of resource tags for the image pipeline. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Amazon Resource Name (ARN) of the image pipeline.
  public arn?: string;

  // Description of the image pipeline.
  public description?: string;

  // Whether additional information about the image being created is collected. Defaults to `true`.
  public enhancedImageMetadataEnabled?: boolean;

  // Configuration block with image scanning configuration. Detailed below.
  public imageScanningConfiguration?: imagebuilder_ImagePipelineImageScanningConfiguration;

  // Platform of the image pipeline.
  public platform?: string;

  // Configuration block with schedule settings. Detailed below.
  public schedule?: imagebuilder_ImagePipelineSchedule;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) of the container recipe.
  public containerRecipeArn?: string;

  // Amazon Resource Name (ARN) of the Image Builder Distribution Configuration.
  public distributionConfigurationArn?: string;

  // Amazon Resource Name (ARN) of the service-linked role to be used by Image Builder to [execute workflows](https://docs.aws.amazon.com/imagebuilder/latest/userguide/manage-image-workflows.html).
  public executionRole?: string;

  // Amazon Resource Name (ARN) of the image recipe.
  public imageRecipeArn?: string;

  // Configuration block with image tests configuration. Detailed below.
  public imageTestsConfiguration?: imagebuilder_ImagePipelineImageTestsConfiguration;

  /*
Name of the image pipeline.

The following arguments are optional:
*/
  public name?: string;

  // Configuration block with the workflow configuration. Detailed below.
  public workflows?: Array<imagebuilder_ImagePipelineWorkflow>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'schedule',
        'Configuration block with schedule settings. Detailed below.',
        () => imagebuilder_ImagePipelineSchedule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'workflows',
        'Configuration block with the workflow configuration. Detailed below.',
        () => imagebuilder_ImagePipelineWorkflow_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'imageTestsConfiguration',
        'Configuration block with image tests configuration. Detailed below.',
        () => imagebuilder_ImagePipelineImageTestsConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the image pipeline.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'imageScanningConfiguration',
        'Configuration block with image scanning configuration. Detailed below.',
        () => imagebuilder_ImagePipelineImageScanningConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'imageRecipeArn',
        'Amazon Resource Name (ARN) of the image recipe.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'status',
        'Status of the image pipeline. Valid values are `DISABLED` and `ENABLED`. Defaults to `ENABLED`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags for the image pipeline. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'distributionConfigurationArn',
        'Amazon Resource Name (ARN) of the Image Builder Distribution Configuration.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'executionRole',
        'Amazon Resource Name (ARN) of the service-linked role to be used by Image Builder to [execute workflows](https://docs.aws.amazon.com/imagebuilder/latest/userguide/manage-image-workflows.html).',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the image pipeline.\n\nThe following arguments are optional:',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'infrastructureConfigurationArn',
        'Amazon Resource Name (ARN) of the Image Builder Infrastructure Configuration.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enhancedImageMetadataEnabled',
        'Whether additional information about the image being created is collected. Defaults to `true`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'containerRecipeArn',
        'Amazon Resource Name (ARN) of the container recipe.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
