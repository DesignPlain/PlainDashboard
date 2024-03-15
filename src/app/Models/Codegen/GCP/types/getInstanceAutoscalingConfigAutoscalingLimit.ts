export interface getInstanceAutoscalingConfigAutoscalingLimit {
  /*
Specifies maximum number of nodes allocated to the instance. If set, this number
should be greater than or equal to min_nodes.
*/
  MaxNodes?: number;

  /*
Specifies maximum number of processing units allocated to the instance.
If set, this number should be multiples of 1000 and be greater than or equal to
min_processing_units.
*/
  MaxProcessingUnits?: number;

  /*
Specifies number of nodes allocated to the instance. If set, this number
should be greater than or equal to 1.
*/
  MinNodes?: number;

  /*
Specifies minimum number of processing units allocated to the instance.
If set, this number should be multiples of 1000.
*/
  MinProcessingUnits?: number;
}
