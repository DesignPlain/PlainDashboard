import { TransferJobTransferSpecHttpDataSource } from "./TransferJobTransferSpecHttpDataSource";
import { TransferJobTransferSpecObjectConditions } from "./TransferJobTransferSpecObjectConditions";
import { TransferJobTransferSpecPosixDataSink } from "./TransferJobTransferSpecPosixDataSink";
import { TransferJobTransferSpecPosixDataSource } from "./TransferJobTransferSpecPosixDataSource";
import { TransferJobTransferSpecTransferOptions } from "./TransferJobTransferSpecTransferOptions";
import { TransferJobTransferSpecAwsS3DataSource } from "./TransferJobTransferSpecAwsS3DataSource";
import { TransferJobTransferSpecGcsDataSource } from "./TransferJobTransferSpecGcsDataSource";
import { TransferJobTransferSpecAzureBlobStorageDataSource } from "./TransferJobTransferSpecAzureBlobStorageDataSource";
import { TransferJobTransferSpecGcsDataSink } from "./TransferJobTransferSpecGcsDataSink";

export interface TransferJobTransferSpec {
  // Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.
  SourceAgentPoolName?: string;

  // An AWS S3 data source. Structure documented below.
  AwsS3DataSource?: TransferJobTransferSpecAwsS3DataSource;

  // A Google Cloud Storage data source. Structure documented below.
  GcsDataSource?: TransferJobTransferSpecGcsDataSource;

  // A HTTP URL data source. Structure documented below.
  HttpDataSource?: TransferJobTransferSpecHttpDataSource;

  // Only objects that satisfy these object conditions are included in the set of data source and data sink objects. Object conditions based on objects' `last_modification_time` do not exclude objects in a data sink. Structure documented below.
  ObjectConditions?: TransferJobTransferSpecObjectConditions;

  // A POSIX data sink. Structure documented below.
  PosixDataSink?: TransferJobTransferSpecPosixDataSink;

  // A POSIX filesystem data source. Structure documented below.
  PosixDataSource?: TransferJobTransferSpecPosixDataSource;

  // An Azure Blob Storage data source. Structure documented below.
  AzureBlobStorageDataSource?: TransferJobTransferSpecAzureBlobStorageDataSource;

  // A Google Cloud Storage data sink. Structure documented below.
  GcsDataSink?: TransferJobTransferSpecGcsDataSink;

  // Specifies the agent pool name associated with the posix data sink. When unspecified, the default name is used.
  SinkAgentPoolName?: string;

  // Characteristics of how to treat files from datasource and sink during job. If the option `delete_objects_unique_in_sink` is true, object conditions based on objects' `last_modification_time` are ignored and do not exclude objects in a data source or a data sink. Structure documented below.
  TransferOptions?: TransferJobTransferSpecTransferOptions;
}
