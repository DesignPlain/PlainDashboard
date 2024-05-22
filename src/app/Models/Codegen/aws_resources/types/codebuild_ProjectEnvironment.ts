import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  codebuild_ProjectEnvironmentEnvironmentVariable,
  codebuild_ProjectEnvironmentEnvironmentVariable_GetTypes,
} from "./codebuild_ProjectEnvironmentEnvironmentVariable";
import {
  codebuild_ProjectEnvironmentRegistryCredential,
  codebuild_ProjectEnvironmentRegistryCredential_GetTypes,
} from "./codebuild_ProjectEnvironmentRegistryCredential";

export interface codebuild_ProjectEnvironment {
  // Type of environment variable. Valid values: `PARAMETER_STORE`, `PLAINTEXT`, `SECRETS_MANAGER`.
  type?: string;

  // ARN of the S3 bucket, path prefix and object key that contains the PEM-encoded certificate.
  certificate?: string;

  // Information about the compute resources the build project will use. Valid values: `BUILD_GENERAL1_SMALL`, `BUILD_GENERAL1_MEDIUM`, `BUILD_GENERAL1_LARGE`, `BUILD_GENERAL1_2XLARGE`, `BUILD_LAMBDA_1GB`, `BUILD_LAMBDA_2GB`, `BUILD_LAMBDA_4GB`, `BUILD_LAMBDA_8GB`, `BUILD_LAMBDA_10GB`. `BUILD_GENERAL1_SMALL` is only valid if `type` is set to `LINUX_CONTAINER`. When `type` is set to `LINUX_GPU_CONTAINER`, `compute_type` must be `BUILD_GENERAL1_LARGE`. When `type` is set to `LINUX_LAMBDA_CONTAINER` or `ARM_LAMBDA_CONTAINER`, `compute_type` must be `BUILD_LAMBDA_XGB`.`
  computeType?: string;

  // Configuration block. Detailed below.
  environmentVariables?: Array<codebuild_ProjectEnvironmentEnvironmentVariable>;

  // Docker image to use for this build project. Valid values include Docker images provided by CodeBuild, and full Docker repository URIs such as those for ECR (e.g., `137112412989.dkr.ecr.us-west-2.amazonaws.com/amazonlinux:latest`).
  image?: string;

  // Type of credentials AWS CodeBuild uses to pull images in your build. Valid values: `CODEBUILD`, `SERVICE_ROLE`. When you use a cross-account or private registry image, you must use SERVICE_ROLE credentials. When you use an AWS CodeBuild curated image, you must use CodeBuild credentials. Defaults to `CODEBUILD`.
  imagePullCredentialsType?: string;

  // Whether to enable running the Docker daemon inside a Docker container. Defaults to `false`.
  privilegedMode?: boolean;

  // Configuration block. Detailed below.
  registryCredential?: codebuild_ProjectEnvironmentRegistryCredential;
}

export function codebuild_ProjectEnvironment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "imagePullCredentialsType",
      "Type of credentials AWS CodeBuild uses to pull images in your build. Valid values: `CODEBUILD`, `SERVICE_ROLE`. When you use a cross-account or private registry image, you must use SERVICE_ROLE credentials. When you use an AWS CodeBuild curated image, you must use CodeBuild credentials. Defaults to `CODEBUILD`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "privilegedMode",
      "Whether to enable running the Docker daemon inside a Docker container. Defaults to `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "registryCredential",
      "Configuration block. Detailed below.",
      codebuild_ProjectEnvironmentRegistryCredential_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of environment variable. Valid values: `PARAMETER_STORE`, `PLAINTEXT`, `SECRETS_MANAGER`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "certificate",
      "ARN of the S3 bucket, path prefix and object key that contains the PEM-encoded certificate.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "computeType",
      "Information about the compute resources the build project will use. Valid values: `BUILD_GENERAL1_SMALL`, `BUILD_GENERAL1_MEDIUM`, `BUILD_GENERAL1_LARGE`, `BUILD_GENERAL1_2XLARGE`, `BUILD_LAMBDA_1GB`, `BUILD_LAMBDA_2GB`, `BUILD_LAMBDA_4GB`, `BUILD_LAMBDA_8GB`, `BUILD_LAMBDA_10GB`. `BUILD_GENERAL1_SMALL` is only valid if `type` is set to `LINUX_CONTAINER`. When `type` is set to `LINUX_GPU_CONTAINER`, `compute_type` must be `BUILD_GENERAL1_LARGE`. When `type` is set to `LINUX_LAMBDA_CONTAINER` or `ARM_LAMBDA_CONTAINER`, `compute_type` must be `BUILD_LAMBDA_XGB`.`",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "environmentVariables",
      "Configuration block. Detailed below.",
      codebuild_ProjectEnvironmentEnvironmentVariable_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "image",
      "Docker image to use for this build project. Valid values include Docker images provided by CodeBuild, and full Docker repository URIs such as those for ECR (e.g., `137112412989.dkr.ecr.us-west-2.amazonaws.com/amazonlinux:latest`).",
      [],
      true,
      false,
    ),
  ];
}
