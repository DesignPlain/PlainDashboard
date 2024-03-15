export interface V2VmSymptom {
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
}
