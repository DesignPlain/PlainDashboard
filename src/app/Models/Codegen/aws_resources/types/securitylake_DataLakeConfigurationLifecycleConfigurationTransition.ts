import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface securitylake_DataLakeConfigurationLifecycleConfigurationTransition {
  // Number of days before data transition to a different S3 Storage Class in the Amazon Security Lake object.
  days?: number;

  // The range of storage classes that you can choose from based on the data access, resiliency, and cost requirements of your workloads.
  storageClass?: string;
}

export function securitylake_DataLakeConfigurationLifecycleConfigurationTransition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "storageClass",
      "The range of storage classes that you can choose from based on the data access, resiliency, and cost requirements of your workloads.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "days",
      "Number of days before data transition to a different S3 Storage Class in the Amazon Security Lake object.",
      [],
      false,
      false,
    ),
  ];
}
