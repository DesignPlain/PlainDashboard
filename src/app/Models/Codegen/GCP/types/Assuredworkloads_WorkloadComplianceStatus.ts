import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Assuredworkloads_WorkloadComplianceStatus {
  // Number of current orgPolicy violations which are acknowledged.
  AcknowledgedViolationCounts?: Array<number>;

  // Number of current orgPolicy violations which are not acknowledged.
  ActiveViolationCounts?: Array<number>;
}

export function Assuredworkloads_WorkloadComplianceStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AcknowledgedViolationCounts",
      "Number of current orgPolicy violations which are acknowledged.",
      InputType_Number_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ActiveViolationCounts",
      "Number of current orgPolicy violations which are not acknowledged.",
      InputType_Number_GetTypes(),
      false,
      false,
    ),
  ];
}
