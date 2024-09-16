import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface tpu_V2VmSymptom {
  /*
(Output)
Type of the Symptom.
*/
  symptomType?: string;

  /*
(Output)
A string used to uniquely distinguish a worker within a TPU node.
*/
  workerId?: string;

  /*
(Output)
Timestamp when the Symptom is created.
*/
  createTime?: string;

  /*
(Output)
Detailed information of the current Symptom.
*/
  details?: string;
}

export function tpu_V2VmSymptom_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'workerId',
      '(Output)\nA string used to uniquely distinguish a worker within a TPU node.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'createTime',
      '(Output)\nTimestamp when the Symptom is created.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'details',
      '(Output)\nDetailed information of the current Symptom.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'symptomType',
      '(Output)\nType of the Symptom.',
      () => [],
      false,
      false,
    ),
  ];
}
