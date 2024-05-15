import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Storage_TransferJobTransferSpecTransferOptions,
  Storage_TransferJobTransferSpecTransferOptions_GetTypes,
} from "./Storage_TransferJobTransferSpecTransferOptions";
import {
  Storage_TransferJobTransferSpecGcsDataSink,
  Storage_TransferJobTransferSpecGcsDataSink_GetTypes,
} from "./Storage_TransferJobTransferSpecGcsDataSink";
import {
  Storage_TransferJobTransferSpecPosixDataSink,
  Storage_TransferJobTransferSpecPosixDataSink_GetTypes,
} from "./Storage_TransferJobTransferSpecPosixDataSink";
import {
  Storage_TransferJobTransferSpecAwsS3DataSource,
  Storage_TransferJobTransferSpecAwsS3DataSource_GetTypes,
} from "./Storage_TransferJobTransferSpecAwsS3DataSource";
import {
  Storage_TransferJobTransferSpecAzureBlobStorageDataSource,
  Storage_TransferJobTransferSpecAzureBlobStorageDataSource_GetTypes,
} from "./Storage_TransferJobTransferSpecAzureBlobStorageDataSource";
import {
  Storage_TransferJobTransferSpecGcsDataSource,
  Storage_TransferJobTransferSpecGcsDataSource_GetTypes,
} from "./Storage_TransferJobTransferSpecGcsDataSource";
import {
  Storage_TransferJobTransferSpecHttpDataSource,
  Storage_TransferJobTransferSpecHttpDataSource_GetTypes,
} from "./Storage_TransferJobTransferSpecHttpDataSource";
import {
  Storage_TransferJobTransferSpecObjectConditions,
  Storage_TransferJobTransferSpecObjectConditions_GetTypes,
} from "./Storage_TransferJobTransferSpecObjectConditions";
import {
  Storage_TransferJobTransferSpecPosixDataSource,
  Storage_TransferJobTransferSpecPosixDataSource_GetTypes,
} from "./Storage_TransferJobTransferSpecPosixDataSource";

export interface Storage_TransferJobTransferSpec {
  // A POSIX data sink. Structure documented below.
  PosixDataSink?: Storage_TransferJobTransferSpecPosixDataSink;

  // Characteristics of how to treat files from datasource and sink during job. If the option `delete_objects_unique_in_sink` is true, object conditions based on objects' `last_modification_time` are ignored and do not exclude objects in a data source or a data sink. Structure documented below.
  TransferOptions?: Storage_TransferJobTransferSpecTransferOptions;

  // An AWS S3 data source. Structure documented below.
  AwsS3DataSource?: Storage_TransferJobTransferSpecAwsS3DataSource;

  // An Azure Blob Storage data source. Structure documented below.
  AzureBlobStorageDataSource?: Storage_TransferJobTransferSpecAzureBlobStorageDataSource;

  // A Google Cloud Storage data sink. Structure documented below.
  GcsDataSink?: Storage_TransferJobTransferSpecGcsDataSink;

  // A Google Cloud Storage data source. Structure documented below.
  GcsDataSource?: Storage_TransferJobTransferSpecGcsDataSource;

  // A HTTP URL data source. Structure documented below.
  HttpDataSource?: Storage_TransferJobTransferSpecHttpDataSource;

  // Only objects that satisfy these object conditions are included in the set of data source and data sink objects. Object conditions based on objects' `last_modification_time` do not exclude objects in a data sink. Structure documented below.
  ObjectConditions?: Storage_TransferJobTransferSpecObjectConditions;

  // A POSIX filesystem data source. Structure documented below.
  PosixDataSource?: Storage_TransferJobTransferSpecPosixDataSource;

  // Specifies the agent pool name associated with the posix data sink. When unspecified, the default name is used.
  SinkAgentPoolName?: string;

  // Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.
  SourceAgentPoolName?: string;
}

export function Storage_TransferJobTransferSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "PosixDataSource",
      "A POSIX filesystem data source. Structure documented below.",
      Storage_TransferJobTransferSpecPosixDataSource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "PosixDataSink",
      "A POSIX data sink. Structure documented below.",
      Storage_TransferJobTransferSpecPosixDataSink_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AwsS3DataSource",
      "An AWS S3 data source. Structure documented below.",
      Storage_TransferJobTransferSpecAwsS3DataSource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "HttpDataSource",
      "A HTTP URL data source. Structure documented below.",
      Storage_TransferJobTransferSpecHttpDataSource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "GcsDataSource",
      "A Google Cloud Storage data source. Structure documented below.",
      Storage_TransferJobTransferSpecGcsDataSource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ObjectConditions",
      "Only objects that satisfy these object conditions are included in the set of data source and data sink objects. Object conditions based on objects' `last_modification_time` do not exclude objects in a data sink. Structure documented below.",
      Storage_TransferJobTransferSpecObjectConditions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SinkAgentPoolName",
      "Specifies the agent pool name associated with the posix data sink. When unspecified, the default name is used.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "SourceAgentPoolName",
      "Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "TransferOptions",
      "Characteristics of how to treat files from datasource and sink during job. If the option `delete_objects_unique_in_sink` is true, object conditions based on objects' `last_modification_time` are ignored and do not exclude objects in a data source or a data sink. Structure documented below.",
      Storage_TransferJobTransferSpecTransferOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "AzureBlobStorageDataSource",
      "An Azure Blob Storage data source. Structure documented below.",
      Storage_TransferJobTransferSpecAzureBlobStorageDataSource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "GcsDataSink",
      "A Google Cloud Storage data sink. Structure documented below.",
      Storage_TransferJobTransferSpecGcsDataSink_GetTypes(),
      false,
      false,
    ),
  ];
}
