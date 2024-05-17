import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Tpu_V2VmSymptom {
  /*
(Output)
Timestamp when the Symptom is created.
*/
  CreateTime?: string;

  /*
(Output)
Detailed information of the current Symptom.
*/
  Details?: string;

  /*
(Output)
Type of the Symptom.
*/
  SymptomType?: string;

  /*
(Output)
A string used to uniquely distinguish a worker within a TPU node.
*/
  WorkerId?: string;
}

export function Tpu_V2VmSymptom_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "SymptomType",
      "(Output)\nType of the Symptom.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "WorkerId",
      "(Output)\nA string used to uniquely distinguish a worker within a TPU node.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CreateTime",
      "(Output)\nTimestamp when the Symptom is created.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Details",
      "(Output)\nDetailed information of the current Symptom.",
      [],
      false,
      false,
    ),
  ];
}
