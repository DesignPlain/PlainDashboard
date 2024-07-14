import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  storage_TransferJobTransferSpecPosixDataSink,
  storage_TransferJobTransferSpecPosixDataSink_GetTypes,
} from "./storage_TransferJobTransferSpecPosixDataSink";
import {
  storage_TransferJobTransferSpecAwsS3DataSource,
  storage_TransferJobTransferSpecAwsS3DataSource_GetTypes,
} from "./storage_TransferJobTransferSpecAwsS3DataSource";
import {
  storage_TransferJobTransferSpecPosixDataSource,
  storage_TransferJobTransferSpecPosixDataSource_GetTypes,
} from "./storage_TransferJobTransferSpecPosixDataSource";
import {
  storage_TransferJobTransferSpecObjectConditions,
  storage_TransferJobTransferSpecObjectConditions_GetTypes,
} from "./storage_TransferJobTransferSpecObjectConditions";
import {
  storage_TransferJobTransferSpecGcsDataSink,
  storage_TransferJobTransferSpecGcsDataSink_GetTypes,
} from "./storage_TransferJobTransferSpecGcsDataSink";
import {
  storage_TransferJobTransferSpecHttpDataSource,
  storage_TransferJobTransferSpecHttpDataSource_GetTypes,
} from "./storage_TransferJobTransferSpecHttpDataSource";
import {
  storage_TransferJobTransferSpecTransferOptions,
  storage_TransferJobTransferSpecTransferOptions_GetTypes,
} from "./storage_TransferJobTransferSpecTransferOptions";
import {
  storage_TransferJobTransferSpecAzureBlobStorageDataSource,
  storage_TransferJobTransferSpecAzureBlobStorageDataSource_GetTypes,
} from "./storage_TransferJobTransferSpecAzureBlobStorageDataSource";
import {
  storage_TransferJobTransferSpecGcsDataSource,
  storage_TransferJobTransferSpecGcsDataSource_GetTypes,
} from "./storage_TransferJobTransferSpecGcsDataSource";

export interface storage_TransferJobTransferSpec {
  // Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.
  sourceAgentPoolName?: string;

  // Characteristics of how to treat files from datasource and sink during job. If the option `delete_objects_unique_in_sink` is true, object conditions based on objects' `last_modification_time` are ignored and do not exclude objects in a data source or a data sink. Structure documented below.
  transferOptions?: storage_TransferJobTransferSpecTransferOptions;

  // An Azure Blob Storage data source. Structure documented below.
  azureBlobStorageDataSource?: storage_TransferJobTransferSpecAzureBlobStorageDataSource;

  // A Google Cloud Storage data source. Structure documented below.
  gcsDataSource?: storage_TransferJobTransferSpecGcsDataSource;

  // Only objects that satisfy these object conditions are included in the set of data source and data sink objects. Object conditions based on objects' `last_modification_time` do not exclude objects in a data sink. Structure documented below.
  objectConditions?: storage_TransferJobTransferSpecObjectConditions;

  // A POSIX data sink. Structure documented below.
  posixDataSink?: storage_TransferJobTransferSpecPosixDataSink;

  // Specifies the agent pool name associated with the posix data sink. When unspecified, the default name is used.
  sinkAgentPoolName?: string;

  // An AWS S3 data source. Structure documented below.
  awsS3DataSource?: storage_TransferJobTransferSpecAwsS3DataSource;

  // A Google Cloud Storage data sink. Structure documented below.
  gcsDataSink?: storage_TransferJobTransferSpecGcsDataSink;

  // A HTTP URL data source. Structure documented below.
  httpDataSource?: storage_TransferJobTransferSpecHttpDataSource;

  // A POSIX filesystem data source. Structure documented below.
  posixDataSource?: storage_TransferJobTransferSpecPosixDataSource;
}

export function storage_TransferJobTransferSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "transferOptions",
      "Characteristics of how to treat files from datasource and sink during job. If the option `delete_objects_unique_in_sink` is true, object conditions based on objects' `last_modification_time` are ignored and do not exclude objects in a data source or a data sink. Structure documented below.",
      storage_TransferJobTransferSpecTransferOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gcsDataSink",
      "A Google Cloud Storage data sink. Structure documented below.",
      storage_TransferJobTransferSpecGcsDataSink_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "posixDataSource",
      "A POSIX filesystem data source. Structure documented below.",
      storage_TransferJobTransferSpecPosixDataSource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "objectConditions",
      "Only objects that satisfy these object conditions are included in the set of data source and data sink objects. Object conditions based on objects' `last_modification_time` do not exclude objects in a data sink. Structure documented below.",
      storage_TransferJobTransferSpecObjectConditions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "posixDataSink",
      "A POSIX data sink. Structure documented below.",
      storage_TransferJobTransferSpecPosixDataSink_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sinkAgentPoolName",
      "Specifies the agent pool name associated with the posix data sink. When unspecified, the default name is used.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "awsS3DataSource",
      "An AWS S3 data source. Structure documented below.",
      storage_TransferJobTransferSpecAwsS3DataSource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "httpDataSource",
      "A HTTP URL data source. Structure documented below.",
      storage_TransferJobTransferSpecHttpDataSource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceAgentPoolName",
      "Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "azureBlobStorageDataSource",
      "An Azure Blob Storage data source. Structure documented below.",
      storage_TransferJobTransferSpecAzureBlobStorageDataSource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "gcsDataSource",
      "A Google Cloud Storage data source. Structure documented below.",
      storage_TransferJobTransferSpecGcsDataSource_GetTypes(),
      false,
      false,
    ),
  ];
}
