import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface opensearch_getDomainEbsOption {
  // Baseline input/output (I/O) performance of EBS volumes attached to data nodes.
  iops?: number;

  // The throughput (in MiB/s) of the EBS volumes attached to data nodes.
  throughput?: number;

  // Size of EBS volumes attached to data nodes (in GB).
  volumeSize?: number;

  // Type of EBS volumes attached to data nodes.
  volumeType?: string;

  // Whether EBS volumes are attached to data nodes in the domain.
  ebsEnabled?: boolean;
}

export function opensearch_getDomainEbsOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "ebsEnabled",
      "Whether EBS volumes are attached to data nodes in the domain.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "iops",
      "Baseline input/output (I/O) performance of EBS volumes attached to data nodes.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "throughput",
      "The throughput (in MiB/s) of the EBS volumes attached to data nodes.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "volumeSize",
      "Size of EBS volumes attached to data nodes (in GB).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "volumeType",
      "Type of EBS volumes attached to data nodes.",
      [],
      true,
      false,
    ),
  ];
}
