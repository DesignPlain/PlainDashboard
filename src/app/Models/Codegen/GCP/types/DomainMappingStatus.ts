import { DomainMappingStatusCondition } from "./DomainMappingStatusCondition";
import { DomainMappingStatusResourceRecord } from "./DomainMappingStatusResourceRecord";

export interface DomainMappingStatus {
  /*
(Output)
Array of observed DomainMappingConditions, indicating the current state
of the DomainMapping.
Structure is documented below.
*/
  Conditions?: Array<DomainMappingStatusCondition>;

  /*
(Output)
The name of the route that the mapping currently points to.
*/
  MappedRouteName?: string;

  /*
(Output)
ObservedGeneration is the 'Generation' of the DomainMapping that
was last processed by the controller.
*/
  ObservedGeneration?: number;

  /*
The resource records required to configure this domain mapping. These
records must be added to the domain's DNS configuration in order to
serve the application via this domain mapping.
Structure is documented below.
*/
  ResourceRecords?: Array<DomainMappingStatusResourceRecord>;
}
