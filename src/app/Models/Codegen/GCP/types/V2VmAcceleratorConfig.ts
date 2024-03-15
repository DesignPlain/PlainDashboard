export interface V2VmAcceleratorConfig {
  // Topology of TPU in chips.
  Topology?: string;

  /*
Type of TPU.
Possible values are: `V2`, `V3`, `V4`.
*/
  Type?: string;
}
