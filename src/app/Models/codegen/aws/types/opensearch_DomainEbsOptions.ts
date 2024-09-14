import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface opensearch_DomainEbsOptions {
  // Baseline input/output (I/O) performance of EBS volumes attached to data nodes. Applicable only for the GP3 and Provisioned IOPS EBS volume types.
  iops?: number;

  // Specifies the throughput (in MiB/s) of the EBS volumes attached to data nodes. Applicable only for the gp3 volume type.
  throughput?: number;

  // Size of EBS volumes attached to data nodes (in GiB).
  volumeSize?: number;

  // Type of EBS volumes attached to data nodes.
  volumeType?: string;

  // Whether EBS volumes are attached to data nodes in the domain.
  ebsEnabled?: boolean;
}

export function opensearch_DomainEbsOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "iops",
      "Baseline input/output (I/O) performance of EBS volumes attached to data nodes. Applicable only for the GP3 and Provisioned IOPS EBS volume types.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "throughput",
      "Specifies the throughput (in MiB/s) of the EBS volumes attached to data nodes. Applicable only for the gp3 volume type.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "volumeSize",
      "Size of EBS volumes attached to data nodes (in GiB).",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "volumeType",
      "Type of EBS volumes attached to data nodes.",
      () => [],
      false,
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
