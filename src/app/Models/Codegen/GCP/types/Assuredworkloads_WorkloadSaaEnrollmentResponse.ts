import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Assuredworkloads_WorkloadSaaEnrollmentResponse {
  // Indicates SAA enrollment setup error if any.
  SetupErrors?: Array<string>;

  // Indicates SAA enrollment status of a given workload. Possible values: SETUP_STATE_UNSPECIFIED, STATUS_PENDING, STATUS_COMPLETE
  SetupStatus?: string;
}

export function Assuredworkloads_WorkloadSaaEnrollmentResponse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "SetupErrors",
      "Indicates SAA enrollment setup error if any.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SetupStatus",
      "Indicates SAA enrollment status of a given workload. Possible values: SETUP_STATE_UNSPECIFIED, STATUS_PENDING, STATUS_COMPLETE",
      [],
      false,
      false,
    ),
  ];
}
