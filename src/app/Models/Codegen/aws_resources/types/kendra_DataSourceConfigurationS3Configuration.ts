import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  kendra_DataSourceConfigurationS3ConfigurationAccessControlListConfiguration,
  kendra_DataSourceConfigurationS3ConfigurationAccessControlListConfiguration_GetTypes,
} from "./kendra_DataSourceConfigurationS3ConfigurationAccessControlListConfiguration";
import {
  kendra_DataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration,
  kendra_DataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration_GetTypes,
} from "./kendra_DataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration";

export interface kendra_DataSourceConfigurationS3Configuration {
  // A block that provides the path to the S3 bucket that contains the user context filtering files for the data source. For the format of the file, see [Access control for S3 data sources](https://docs.aws.amazon.com/kendra/latest/dg/s3-acl.html). Detailed below.
  accessControlListConfiguration?: kendra_DataSourceConfigurationS3ConfigurationAccessControlListConfiguration;

  // The name of the bucket that contains the documents.
  bucketName?: string;

  // A block that defines the Document metadata files that contain information such as the document access control information, source URI, document author, and custom attributes. Each metadata file contains metadata about a single document. Detailed below.
  documentsMetadataConfiguration?: kendra_DataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration;

  // A list of glob patterns for documents that should not be indexed. If a document that matches an inclusion prefix or inclusion pattern also matches an exclusion pattern, the document is not indexed. Refer to [Exclusion Patterns for more examples](https://docs.aws.amazon.com/kendra/latest/dg/API_S3DataSourceConfiguration.html#Kendra-Type-S3DataSourceConfiguration-ExclusionPatterns).
  exclusionPatterns?: Array<string>;

  // A list of glob patterns for documents that should be indexed. If a document that matches an inclusion pattern also matches an exclusion pattern, the document is not indexed. Refer to [Inclusion Patterns for more examples](https://docs.aws.amazon.com/kendra/latest/dg/API_S3DataSourceConfiguration.html#Kendra-Type-S3DataSourceConfiguration-InclusionPatterns).
  inclusionPatterns?: Array<string>;

  // A list of S3 prefixes for the documents that should be included in the index.
  inclusionPrefixes?: Array<string>;
}

export function kendra_DataSourceConfigurationS3Configuration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "exclusionPatterns",
      "A list of glob patterns for documents that should not be indexed. If a document that matches an inclusion prefix or inclusion pattern also matches an exclusion pattern, the document is not indexed. Refer to [Exclusion Patterns for more examples](https://docs.aws.amazon.com/kendra/latest/dg/API_S3DataSourceConfiguration.html#Kendra-Type-S3DataSourceConfiguration-ExclusionPatterns).",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "inclusionPatterns",
      "A list of glob patterns for documents that should be indexed. If a document that matches an inclusion pattern also matches an exclusion pattern, the document is not indexed. Refer to [Inclusion Patterns for more examples](https://docs.aws.amazon.com/kendra/latest/dg/API_S3DataSourceConfiguration.html#Kendra-Type-S3DataSourceConfiguration-InclusionPatterns).",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "inclusionPrefixes",
      "A list of S3 prefixes for the documents that should be included in the index.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "accessControlListConfiguration",
      "A block that provides the path to the S3 bucket that contains the user context filtering files for the data source. For the format of the file, see [Access control for S3 data sources](https://docs.aws.amazon.com/kendra/latest/dg/s3-acl.html). Detailed below.",
      kendra_DataSourceConfigurationS3ConfigurationAccessControlListConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "The name of the bucket that contains the documents.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "documentsMetadataConfiguration",
      "A block that defines the Document metadata files that contain information such as the document access control information, source URI, document author, and custom attributes. Each metadata file contains metadata about a single document. Detailed below.",
      kendra_DataSourceConfigurationS3ConfigurationDocumentsMetadataConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
