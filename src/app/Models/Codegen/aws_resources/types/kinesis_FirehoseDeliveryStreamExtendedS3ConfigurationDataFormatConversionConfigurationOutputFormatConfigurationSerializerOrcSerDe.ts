import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe {
  // A float between 0 and 1 that defines the tolerance for block padding as a decimal fraction of stripe size. The default value is `0.05`, which means 5 percent of stripe size. For the default values of 64 MiB ORC stripes and 256 MiB HDFS blocks, the default block padding tolerance of 5 percent reserves a maximum of 3.2 MiB for padding within the 256 MiB block. In such a case, if the available size within the block is more than 3.2 MiB, a new, smaller stripe is inserted to fit within that space. This ensures that no stripe crosses block boundaries and causes remote reads within a node-local task. Kinesis Data Firehose ignores this parameter when `enable_padding` is `false`.
  paddingTolerance?: number;

  // The number of rows between index entries. The default is `10000` and the minimum is `1000`.
  rowIndexStride?: number;

  // The Hadoop Distributed File System (HDFS) block size. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is 256 MiB and the minimum is 64 MiB. Kinesis Data Firehose uses this value for padding calculations.
  blockSizeBytes?: number;

  // A float that represents the fraction of the total number of non-null rows. To turn off dictionary encoding, set this fraction to a number that is less than the number of distinct keys in a dictionary. To always use dictionary encoding, set this threshold to `1`.
  dictionaryKeyThreshold?: number;

  // The compression code to use over data blocks. The default is `SNAPPY`.
  compression?: string;

  // Set this to `true` to indicate that you want stripes to be padded to the HDFS block boundaries. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is `false`.
  enablePadding?: boolean;

  // The version of the file to write. The possible values are `V0_11` and `V0_12`. The default is `V0_12`.
  formatVersion?: string;

  // The number of bytes in each stripe. The default is 64 MiB and the minimum is 8 MiB.
  stripeSizeBytes?: number;

  // A list of column names for which you want Kinesis Data Firehose to create bloom filters.
  bloomFilterColumns?: Array<string>;

  // The Bloom filter false positive probability (FPP). The lower the FPP, the bigger the Bloom filter. The default value is `0.05`, the minimum is `0`, and the maximum is `1`.
  bloomFilterFalsePositiveProbability?: number;
}

export function kinesis_FirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "bloomFilterFalsePositiveProbability",
      "The Bloom filter false positive probability (FPP). The lower the FPP, the bigger the Bloom filter. The default value is `0.05`, the minimum is `0`, and the maximum is `1`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "rowIndexStride",
      "The number of rows between index entries. The default is `10000` and the minimum is `1000`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "compression",
      "The compression code to use over data blocks. The default is `SNAPPY`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "dictionaryKeyThreshold",
      "A float that represents the fraction of the total number of non-null rows. To turn off dictionary encoding, set this fraction to a number that is less than the number of distinct keys in a dictionary. To always use dictionary encoding, set this threshold to `1`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enablePadding",
      "Set this to `true` to indicate that you want stripes to be padded to the HDFS block boundaries. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "formatVersion",
      "The version of the file to write. The possible values are `V0_11` and `V0_12`. The default is `V0_12`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "stripeSizeBytes",
      "The number of bytes in each stripe. The default is 64 MiB and the minimum is 8 MiB.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "bloomFilterColumns",
      "A list of column names for which you want Kinesis Data Firehose to create bloom filters.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "paddingTolerance",
      "A float between 0 and 1 that defines the tolerance for block padding as a decimal fraction of stripe size. The default value is `0.05`, which means 5 percent of stripe size. For the default values of 64 MiB ORC stripes and 256 MiB HDFS blocks, the default block padding tolerance of 5 percent reserves a maximum of 3.2 MiB for padding within the 256 MiB block. In such a case, if the available size within the block is more than 3.2 MiB, a new, smaller stripe is inserted to fit within that space. This ensures that no stripe crosses block boundaries and causes remote reads within a node-local task. Kinesis Data Firehose ignores this parameter when `enable_padding` is `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "blockSizeBytes",
      "The Hadoop Distributed File System (HDFS) block size. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is 256 MiB and the minimum is 64 MiB. Kinesis Data Firehose uses this value for padding calculations.",
      [],
      false,
      false,
    ),
  ];
}
