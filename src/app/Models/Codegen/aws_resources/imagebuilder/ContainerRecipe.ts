import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  imagebuilder_ContainerRecipeComponent,
  imagebuilder_ContainerRecipeComponent_GetTypes,
} from "../types/imagebuilder_ContainerRecipeComponent";
import {
  imagebuilder_ContainerRecipeInstanceConfiguration,
  imagebuilder_ContainerRecipeInstanceConfiguration_GetTypes,
} from "../types/imagebuilder_ContainerRecipeInstanceConfiguration";
import {
  imagebuilder_ContainerRecipeTargetRepository,
  imagebuilder_ContainerRecipeTargetRepository_GetTypes,
} from "../types/imagebuilder_ContainerRecipeTargetRepository";

export interface ContainerRecipeArgs {
  // The KMS key used to encrypt the container image.
  kmsKeyId?: string;

  // The name of the container recipe.
  name?: string;

  // Specifies the operating system platform when you use a custom base image.
  platformOverride?: string;

  // The working directory to be used during build and test workflows.
  workingDirectory?: string;

  // The description of the container recipe.
  description?: string;

  // The Dockerfile template used to build the image as an inline data blob.
  dockerfileTemplateData?: string;

  /*
Version of the container recipe.

The following attributes are optional:
*/
  version?: string;

  // The destination repository for the container image. Detailed below.
  targetRepository?: imagebuilder_ContainerRecipeTargetRepository;

  // The type of the container to create. Valid values: `DOCKER`.
  containerType?: string;

  // The Amazon S3 URI for the Dockerfile that will be used to build the container image.
  dockerfileTemplateUri?: string;

  // Key-value map of resource tags for the container recipe. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Ordered configuration block(s) with components for the container recipe. Detailed below.
  components?: Array<imagebuilder_ContainerRecipeComponent>;

  // Configuration block used to configure an instance for building and testing container images. Detailed below.
  instanceConfiguration?: imagebuilder_ContainerRecipeInstanceConfiguration;

  // The base image for the container recipe.
  parentImage?: string;
}
export class ContainerRecipe extends Resource {
  // Owner of the container recipe.
  public owner?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // (Required) Amazon Resource Name (ARN) of the container recipe.
  public arn?: string;

  // Date the container recipe was created.
  public dateCreated?: string;

  // The description of the container recipe.
  public description?: string;

  // The Dockerfile template used to build the image as an inline data blob.
  public dockerfileTemplateData?: string;

  // The name of the container recipe.
  public name?: string;

  // Ordered configuration block(s) with components for the container recipe. Detailed below.
  public components?: Array<imagebuilder_ContainerRecipeComponent>;

  // Whether to encrypt the volume. Defaults to unset, which is the value inherited from the parent image.
  public encrypted?: boolean;

  // Configuration block used to configure an instance for building and testing container images. Detailed below.
  public instanceConfiguration?: imagebuilder_ContainerRecipeInstanceConfiguration;

  // The KMS key used to encrypt the container image.
  public kmsKeyId?: string;

  /*
Version of the container recipe.

The following attributes are optional:
*/
  public version?: string;

  // The Amazon S3 URI for the Dockerfile that will be used to build the container image.
  public dockerfileTemplateUri?: string;

  // Specifies the operating system platform when you use a custom base image.
  public platformOverride?: string;

  // The working directory to be used during build and test workflows.
  public workingDirectory?: string;

  // The type of the container to create. Valid values: `DOCKER`.
  public containerType?: string;

  // The base image for the container recipe.
  public parentImage?: string;

  // Platform of the container recipe.
  public platform?: string;

  // Key-value map of resource tags for the container recipe. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The destination repository for the container image. Detailed below.
  public targetRepository?: imagebuilder_ContainerRecipeTargetRepository;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "The KMS key used to encrypt the container image.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "workingDirectory",
        "The working directory to be used during build and test workflows.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "parentImage",
        "The base image for the container recipe.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "version",
        "Version of the container recipe.\n\nThe following attributes are optional:",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the container recipe.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "platformOverride",
        "Specifies the operating system platform when you use a custom base image.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "dockerfileTemplateData",
        "The Dockerfile template used to build the image as an inline data blob.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "components",
        "Ordered configuration block(s) with components for the container recipe. Detailed below.",
        imagebuilder_ContainerRecipeComponent_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "instanceConfiguration",
        "Configuration block used to configure an instance for building and testing container images. Detailed below.",
        imagebuilder_ContainerRecipeInstanceConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the container recipe.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "dockerfileTemplateUri",
        "The Amazon S3 URI for the Dockerfile that will be used to build the container image.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags for the container recipe. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "targetRepository",
        "The destination repository for the container image. Detailed below.",
        imagebuilder_ContainerRecipeTargetRepository_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "containerType",
        "The type of the container to create. Valid values: `DOCKER`.",
        [],
        true,
        true,
      ),
    ];
  }
}
