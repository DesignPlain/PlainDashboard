import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  codepipeline_PipelineArtifactStoreEncryptionKey,
  codepipeline_PipelineArtifactStoreEncryptionKey_GetTypes,
} from "./codepipeline_PipelineArtifactStoreEncryptionKey";

export interface codepipeline_PipelineArtifactStore {
  // The type of the artifact store, such as Amazon S3
  type?: string;

  // The encryption key block AWS CodePipeline uses to encrypt the data in the artifact store, such as an AWS Key Management Service (AWS KMS) key. If you don't specify a key, AWS CodePipeline uses the default key for Amazon Simple Storage Service (Amazon S3). An `encryption_key` block is documented below.
  encryptionKey?: codepipeline_PipelineArtifactStoreEncryptionKey;

  // The location where AWS CodePipeline stores artifacts for a pipeline; currently only `S3` is supported.
  location?: string;

  // The region where the artifact store is located. Required for a cross-region CodePipeline, do not provide for a single-region CodePipeline.
  region?: string;
}

export function codepipeline_PipelineArtifactStore_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "encryptionKey",
      "The encryption key block AWS CodePipeline uses to encrypt the data in the artifact store, such as an AWS Key Management Service (AWS KMS) key. If you don't specify a key, AWS CodePipeline uses the default key for Amazon Simple Storage Service (Amazon S3). An `encryption_key` block is documented below.",
      codepipeline_PipelineArtifactStoreEncryptionKey_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "location",
      "The location where AWS CodePipeline stores artifacts for a pipeline; currently only `S3` is supported.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "region",
      "The region where the artifact store is located. Required for a cross-region CodePipeline, do not provide for a single-region CodePipeline.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of the artifact store, such as Amazon S3",
      [],
      true,
      false,
    ),
  ];
}
