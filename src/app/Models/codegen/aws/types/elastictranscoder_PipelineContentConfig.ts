import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface elastictranscoder_PipelineContentConfig {
  // The Amazon S3 bucket in which you want Elastic Transcoder to save transcoded files and playlists.
  bucket?: string;

  // The Amazon S3 storage class, `Standard` or `ReducedRedundancy`, that you want Elastic Transcoder to assign to the files and playlists that it stores in your Amazon S3 bucket.
  storageClass?: string;
}

export function elastictranscoder_PipelineContentConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "The Amazon S3 bucket in which you want Elastic Transcoder to save transcoded files and playlists.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "storageClass",
      "The Amazon S3 storage class, `Standard` or `ReducedRedundancy`, that you want Elastic Transcoder to assign to the files and playlists that it stores in your Amazon S3 bucket.",
      () => [],
      false,
      false,
    ),
  ];
}
