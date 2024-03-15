export interface InstanceShieldedInstanceConfig {
  /*
- Compare the most recent boot measurements to the integrity policy baseline and return a pair of pass/fail results depending on whether they match or not. Defaults to true.
--Note--: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.
*/
  EnableIntegrityMonitoring?: boolean;

  /*
- Verify the digital signature of all boot components, and halt the boot process if signature verification fails. Defaults to false.
--Note--: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.
*/
  EnableSecureBoot?: boolean;

  /*
- Use a virtualized trusted platform module, which is a specialized computer chip you can use to encrypt objects like keys and certificates. Defaults to true.
--Note--: `allow_stopping_for_update` must be set to true or your instance must have a `desired_status` of `TERMINATED` in order to update this field.
*/
  EnableVtpm?: boolean;
}
