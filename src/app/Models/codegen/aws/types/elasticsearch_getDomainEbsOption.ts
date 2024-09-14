import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface elasticsearch_getDomainEbsOption {
  // Whether EBS volumes are attached to data nodes in the domain.
  ebsEnabled?: boolean;

  // The baseline input/output (I/O) performance of EBS volumes attached to data nodes.
  iops?: number;

  // The throughput (in MiB/s) of the EBS volumes attached to data nodes.
  throughput?: number;

  // The size of EBS volumes attached to data nodes (in GB).
  volumeSize?: number;

  // The type of EBS volumes attached to data nodes.
  volumeType?: string;
}

export function elasticsearch_getDomainEbsOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "iops",
      "The baseline input/output (I/O) performance of EBS volumes attached to data nodes.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "throughput",
      "The throughput (in MiB/s) of the EBS volumes attached to data nodes.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "volumeSize",
      "The size of EBS volumes attached to data nodes (in GB).",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "volumeType",
      "The type of EBS volumes attached to data nodes.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ebsEnabled",
      "Whether EBS volumes are attached to data nodes in the domain.",
      () => [],
      true,
      false,
    ),
  ];
}
