export interface InstanceAccelerator {
  /*
The type of an accelator for a CDF instance.
Possible values are: `CDC`, `HEALTHCARE`, `CCAI_INSIGHTS`.
*/
  AcceleratorType?: string;

  /*
The type of an accelator for a CDF instance.
Possible values are: `ENABLED`, `DISABLED`.
*/
  State?: string;
}
