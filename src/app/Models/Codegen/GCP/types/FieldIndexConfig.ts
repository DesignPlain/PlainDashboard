import { FieldIndexConfigIndex } from "./FieldIndexConfigIndex";

export interface FieldIndexConfig {
  /*
The indexes to configure on the field. Order or array contains must be specified.
Structure is documented below.
*/
  Indexes?: Array<FieldIndexConfigIndex>;
}
