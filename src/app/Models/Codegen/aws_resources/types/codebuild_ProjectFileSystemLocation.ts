import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface codebuild_ProjectFileSystemLocation {
  // The mount options for a file system created by AWS EFS.
  mountOptions?: string;

  // The location in the container where you mount the file system.
  mountPoint?: string;

  // The type of the file system. The one supported type is `EFS`.
  type?: string;

  // The name used to access a file system created by Amazon EFS. CodeBuild creates an environment variable by appending the identifier in all capital letters to CODEBUILD\_. For example, if you specify my-efs for identifier, a new environment variable is create named CODEBUILD_MY-EFS.
  identifier?: string;

  // A string that specifies the location of the file system created by Amazon EFS. Its format is `efs-dns-name:/directory-path`.
  location?: string;
}

export function codebuild_ProjectFileSystemLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "identifier",
      "The name used to access a file system created by Amazon EFS. CodeBuild creates an environment variable by appending the identifier in all capital letters to CODEBUILD\\_. For example, if you specify my-efs for identifier, a new environment variable is create named CODEBUILD_MY-EFS.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "location",
      "A string that specifies the location of the file system created by Amazon EFS. Its format is `efs-dns-name:/directory-path`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mountOptions",
      "The mount options for a file system created by AWS EFS.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "mountPoint",
      "The location in the container where you mount the file system.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of the file system. The one supported type is `EFS`.",
      [],
      false,
      false,
    ),
  ];
}
