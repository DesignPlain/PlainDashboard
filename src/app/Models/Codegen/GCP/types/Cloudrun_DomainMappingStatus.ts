import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrun_DomainMappingStatusCondition,
  Cloudrun_DomainMappingStatusCondition_GetTypes,
} from "./Cloudrun_DomainMappingStatusCondition";
import {
  Cloudrun_DomainMappingStatusResourceRecord,
  Cloudrun_DomainMappingStatusResourceRecord_GetTypes,
} from "./Cloudrun_DomainMappingStatusResourceRecord";

export interface Cloudrun_DomainMappingStatus {
  /*
(Output)
Array of observed DomainMappingConditions, indicating the current state
of the DomainMapping.
Structure is documented below.
*/
  Conditions?: Array<Cloudrun_DomainMappingStatusCondition>;

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
  ResourceRecords?: Array<Cloudrun_DomainMappingStatusResourceRecord>;
}

export function Cloudrun_DomainMappingStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Conditions",
      "(Output)\nArray of observed DomainMappingConditions, indicating the current state\nof the DomainMapping.\nStructure is documented below.",
      Cloudrun_DomainMappingStatusCondition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MappedRouteName",
      "(Output)\nThe name of the route that the mapping currently points to.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "ObservedGeneration",
      "(Output)\nObservedGeneration is the 'Generation' of the DomainMapping that\nwas last processed by the controller.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ResourceRecords",
      "The resource records required to configure this domain mapping. These\nrecords must be added to the domain's DNS configuration in order to\nserve the application via this domain mapping.\nStructure is documented below.",
      Cloudrun_DomainMappingStatusResourceRecord_GetTypes(),
      false,
      false,
    ),
  ];
}
