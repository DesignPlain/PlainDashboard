import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Monitoring_AlertPolicyCreationRecord {
  /*
(Output)
When the change occurred.
*/
  MutateTime?: string;

  /*
(Output)
The email address of the user making the change.
*/
  MutatedBy?: string;
}

export function Monitoring_AlertPolicyCreationRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "MutateTime",
      "(Output)\nWhen the change occurred.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MutatedBy",
      "(Output)\nThe email address of the user making the change.",
      [],
      false,
      false,
    ),
  ];
}
